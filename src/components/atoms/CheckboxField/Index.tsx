interface CheckboxFieldProps {
  id: string;
  label: string;
  value: boolean;
  handleChange?: (data: any) => void;
}

export default function CheckboxField({
  id,
  label,
  value,
  handleChange,
}: CheckboxFieldProps) {
  return (
    <div className="flex items-center">
      <input
        id={id}
        name={id}
        type="checkbox"
        className="mr-2"
        checked={value}
        onChange={handleChange}
      />
      <label htmlFor={id} className="text-gray-700 cursor-pointer">
        {label}
      </label>
    </div>
  );
}
