import { Metadata } from "next";
import AboutPageClient from "./AboutPageClient";

export const metadata: Metadata = {
  title: "عن الشركة | سمو الحكمة للمحاماة",
  description:
    "تعرف على شركة سمو الحكمة للمحاماة والاستشارات القانونية – رؤيتنا، رسالتنا، قيمنا، وفلسفتنا القانونية في تقديم خدمات احترافية للأفراد والشركات في المملكة العربية السعودية.",
};

export default function AboutPage() {
  return <AboutPageClient />;
}
