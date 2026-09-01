import React from "react";

/**
 * Aurora
 * A soft, drifting gradient-light background — the "aurora" effect,
 * built the way react-bits components are meant to be used: a small,
 * self-contained piece dropped behind your content, driven entirely by
 * CSS custom properties + keyframes (see .aurora rules in style.css).
 *
 * Props:
 *  - variant: "hero" | "band"  -> controls height/intensity via CSS class
 *  - children: optional content rendered above the aurora layer
 */
export default function Aurora({ variant = "hero", children, className = "" }) {
  return (
    <div className={`aurora aurora--${variant} ${className}`}>
      <div className="aurora__layer aurora__layer--one" />
      <div className="aurora__layer aurora__layer--two" />
      <div className="aurora__layer aurora__layer--three" />
      <div className="aurora__grain" />
      {children && <div className="aurora__content">{children}</div>}
    </div>
  );
}
