export default function RHFTextField({
  type = "text",
  label,
  name,
  dir = "rtl",
  register,
  isRequired,
  errors,
  validationSchema = {},
  ...rest
}) {
  const errorMessage = errors?.[name];
  const hasErrors = !!(errors && errorMessage);
  return (
    <div
      className={`textField relative ${hasErrors ? "textField-invalid" : ""}`}
    >
      <label
        htmlFor={name}
        className="mb-2 block text-[var(--color-secondary-300)]"
      >
        {label}
        {isRequired && <span className="text-error">*</span>}
      </label>
      <input
        autoComplete="off"
        type={type}
        id={name}
        dir={dir}
        className={`textField__input ${
          dir === "ltr" ? "text-left" : "text-right"
        }`}
        {...register(name, validationSchema)}
        {...rest}
      />
      {errors && errors[name] && (
        <span className="text-red-600 block text-xs mt-2">
          {errors[name]?.message}
        </span>
      )}
    </div>
  );
}
