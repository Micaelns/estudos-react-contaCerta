interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  type: string;
  value: any;
  required?: boolean;
  handleChange?: (data: any) => void;
  error?: string;
}

export default function InputField({
  id,
  label,
  placeholder,
  type,
  value,
  required = false,
  handleChange,
  error,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium">
        {label} {required ? "*" : ""}
      </label>
      <input
        id={id}
        type={type}
        name={id}
        value={value}
        onChange={handleChange}
        className="border border-gray-300 rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        required={required}
      />
      {error && <p className="text-red-500 text-sm">{error}</p>}
    </div>
  );
}
