export const InputField1 = ({
  label,
  name,
  type = "text",
  value,
  onChange,
}) => (
  <div className="mb-4">
    <label className="block text-rose-500 font-medium mb-1" htmlFor={name}>
      {label}
    </label>
    <input
      type={type}
      id={name}
      name={name}
      value={value}
      onChange={onChange}
      className="w-full border border-rose-300 focus:border-rose-400 focus:ring focus:ring-rose-200 rounded px-3 py-2 outline-none"
    />
  </div>
);
