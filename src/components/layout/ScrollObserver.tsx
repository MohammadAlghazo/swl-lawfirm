"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { animate } from "framer-motion";

const targets = "[data-reveal], [data-entrance], section h1, section h2, .grid > article, .grid > a.group, .grid > div.group";

export default function ScrollObserver() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname.startsWith("/admin")) return;
    const main = document.getElementById("main-content");
    if (!main) return;
    const tracked = new Set<HTMLElement>();
    const controls = new Map<HTMLElement, ReturnType<typeof animate>>();
    let disposed = false;
    let frame = 0;

    const restore = (element: HTMLElement) => {
      element.style.removeProperty("opacity");
      element.style.removeProperty("translate");
      element.style.removeProperty("will-change");
    };
    const observer = new IntersectionObserver((entries) => {
      let stagger = 0;
      entries.forEach((entry) => {
        const element = entry.target as HTMLElement;
        if (entry.isIntersecting && element.dataset.revealState === "ready") {
          element.dataset.revealState = "running";
          element.style.willChange = "opacity, translate";
          const control = animate(element,
            { opacity: [0, 1], translate: ["0 32px", "0 0px"] },
            { duration: 1.05, delay: Math.min(stagger++ * 0.09, 0.27), ease: [0.2, 0.1, 0.25, 1] });
          controls.set(element, control);
          void control.finished.then(() => {
            if (disposed || controls.get(element) !== control) return;
            control.cancel();
            restore(element);
            controls.delete(element);
            const rect = element.getBoundingClientRect();
            const outside = rect.bottom <= 0 || rect.top >= window.innerHeight;
            element.dataset.revealState = outside ? "ready" : "shown";
            if (outside) element.style.opacity = "0";
          });
        } else if (!entry.isIntersecting && !controls.has(element) && element.dataset.revealState === "shown") {
          element.dataset.revealState = "ready";
          element.style.opacity = "0";
        }
      });
    }, { threshold: 0, rootMargin: "0px 0px -36px 0px" });

    const scan = () => {
      if (disposed) return;
      main.querySelectorAll<HTMLElement>(targets).forEach((element) => {
        if (tracked.has(element) || element.parentElement?.closest("[data-reveal], [data-entrance]") || (element.closest("[data-no-reveal]") && !element.hasAttribute("data-entrance"))) return;
        const rect = element.getBoundingClientRect();
        if (!rect.width || !rect.height) return;
        tracked.add(element);
        element.dataset.revealState = "ready";
        if (rect.top >= window.innerHeight || element.hasAttribute("data-entrance")) element.style.opacity = "0";
        observer.observe(element);
      });
    };
    const scheduleScan = () => { cancelAnimationFrame(frame); frame = requestAnimationFrame(scan); };
    scheduleScan();
    void document.fonts.ready.then(() => { if (!disposed) scheduleScan(); });
    const mutations = new MutationObserver(scheduleScan);
    mutations.observe(main, { childList: true, subtree: true });
    return () => {
      disposed = true;
      cancelAnimationFrame(frame);
      mutations.disconnect();
      observer.disconnect();
      controls.forEach((control) => control.stop());
      tracked.forEach((element) => { restore(element); delete element.dataset.revealState; });
    };
  }, [pathname]);
  return null;
}
