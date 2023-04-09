import className from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = className("flex items-center px-3 py-1.5 border", {
    "border-sky-500": primary,
    "border-gray-900": secondary,
    "border-green-500": success,
    "border-yellow-400": warning,
    "border-red-500": danger,

    "bg-sky-500": primary && !outline,
    "bg-gray-900": secondary && !outline,
    "bg-green-500": success && !outline,
    "bg-yellow-400": warning && !outline,
    "bg-red-500": danger && !outline,
    "bg-white": outline,

    "text-white":
      !outline && (primary || secondary || success || warning || danger),
    "text-sky-500": outline && primary,
    "text-gray-900": outline && secondary,
    "text-green-500": outline && success,
    "text-yellow-400": outline && warning,
    "text-red-500": outline && danger,

    "rounded-full": rounded,
  });

  return (
    <button {...rest} className={classes}>
      {children}
    </button>
  );
}

export default Button;
