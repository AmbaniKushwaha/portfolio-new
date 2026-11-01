export const Button = ({
  className = "",
  size = "default",
  children,
  href,
  onClick,
  ...props
}) => {
  const baseClasses =
    "relative inline-flex items-center justify-center overflow-hidden rounded-full font-medium focus:outline-none focus-visible:ring-2 focus-visible:ring-primary bg-primary text-primary-foreground hover:bg-primary/90 shadow-lg shadow-primary/25 transition-all cursor-pointer";

  const sizeClasses = {
    sm: "px-4 py-2 text-sm",
    default: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };
  const classes = `${baseClasses} ${sizeClasses[size]} ${className}`;

  const handleClick = (e) => {
    if (href && href.startsWith("#")) {
      const targetElement = document.querySelector(href);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", href);
      }
    }
    if (onClick) {
      onClick(e);
    }
  };

  if (href) {
    return (
      <a href={href} className={classes} onClick={handleClick} {...props}>
        <span className="relative flex items-center justify-center gap-2">
          {children}
        </span>
      </a>
    );
  }

  return (
    <button className={classes} onClick={onClick} {...props}>
      <span className="relative flex items-center justify-center gap-2">
        {children}
      </span>
    </button>
  );
};
