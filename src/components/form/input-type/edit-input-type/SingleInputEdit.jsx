// SingleInput.jsx
export const SingleInput = ({
  label,
  name,
  value,
  onChange,
  type = "text",
  readOnly = false,
}) => {
  return (
    <div>
      <label className="block mb-1 font-semibold">{label}</label>
      <input
        type={type}
        name={name}
        value={value || ""}
        onChange={onChange}
        readOnly={readOnly}
        className={`w-full px-3 py-2 border rounded ${
          readOnly ? "bg-gray-100 cursor-not-allowed" : ""
        }`}
      />
    </div>
  );
};
