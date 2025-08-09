const btnType = {
  primary:
    "bg-[var(--color-primary-100)] text-[var(--color-primary-700)] hover:bg-[var(--color-primary-900)] hover:text-white",
  secondary:
    "bg-[var(--color-secondary-200)]  text-[var(--color-secondary-500)] hover:bg-[var(--color-secondary-500)] hover:text-white",
  outline:
    "border border-[var(--color-secondary-200)] text-[var(--color-secondary-500)] hover:bg-[var(--color-secondary-200)]",
  red: "bg-[var(--color-red-100)]  text-[var(--color-red-500)] hover:bg-[var(--color-red-500)] hover:text-white",
  danger: "border border-[var(--color-red-100)] text-[var(--color-red-500)]",
};

function ButtonIcon({ children, onClick, className, variant, ...rest }) {
  return (
    <button
      onClick={onClick}
      className={`
        ${btnType[variant]}
        ${className} flex items-center justify-center gap-x-1  rounded-md p-1
        [&>svg]:w-4  [&>svg]:h-4 [&>svg]:text-inherit
        text-xs lg:text-sm
        transition-all duration-300 ease-out`}
      {...rest}
    >
      {children}
    </button>
  );
}

export default ButtonIcon;
