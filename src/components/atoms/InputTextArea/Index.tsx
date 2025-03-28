interface InputFieldProps {
  id: string;
  label: string;
  placeholder: string;
  value: any;
  handleChange?: (data: any) => void;
}

export default function InputTextArea({
  id,
  label,
  placeholder,
  value,
  handleChange,
}: InputFieldProps) {
  return (
    <div className="flex flex-col">
      <label className="text-gray-700 font-medium">{label}</label>
      <textarea
        id={id}
        name={id}
        value={value}
        className="border border-gray-300 rounded px-3 py-2 mt-1 focus:ring-2 focus:ring-blue-500"
        placeholder={placeholder}
        onChange={handleChange}
      />
    </div>
  );
}
