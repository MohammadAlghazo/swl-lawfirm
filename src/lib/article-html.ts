import sanitizeHtml from "sanitize-html";

export function sanitizeArticleHtml(content: string): string {
  return sanitizeHtml(content.replace(/<\/?[\w-]*\s*$/, ""), {
    allowedTags: [...sanitizeHtml.defaults.allowedTags, "img", "u", "s"],
    allowedAttributes: {
      "*": ["class"],
      a: ["href", "target", "rel"],
      img: ["src", "alt", "width", "height"],
      p: ["class", "style"],
      span: ["class", "style"],
      td: ["colspan", "rowspan"],
      th: ["colspan", "rowspan", "scope"],
    },
    allowedClasses: { "*": ["ql-align-*", "ql-indent-*", "ql-direction-*", "ql-size-*", "ql-font-*"] },
    allowedStyles: { "*": { "text-align": [/^(left|right|center|justify)$/], direction: [/^(rtl|ltr)$/] } },
    allowedSchemes: ["http", "https", "mailto", "tel"],
    allowProtocolRelative: false,
    transformTags: {
      h1: "h2",
      a: (tagName, attributes) => ({ tagName, attribs: { ...attributes, rel: "noopener noreferrer" } }),
    },
  });
}
