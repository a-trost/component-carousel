import React from "react";

export default function Button({
  href,
  onClick,
  children,
  className,
  bgColor,
  ...props
}) {
  const styles = `text-white font-display text-xl px-4 py-3 rounded-lg tracking-wide  ${bgColor} ${className}`;

  if (href) {
    return (
      <a href={href} {...props} className={styles}>
        {children}
      </a>
    );
  } else if (onClick) {
    return (
      <button onClick={onClick} {...props} className={styles}>
        {children}
      </button>
    );
  } else {
    return null;
  }
}
