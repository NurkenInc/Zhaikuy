interface SelectItem {
  label: string
  value: string
}

interface SelectProps {
  onChange: (value: string) => void
  defaultValue: string
  value: string
  items: SelectItem[]
}

export const Select = (props: SelectProps) => {
  const {
    defaultValue,
    onChange,
    value,
    items
  } = props;

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    onChange(e.target.value);
  }

  return (
    <select 
      className="select select-bordered w-full max-w-xs" 
      defaultValue={defaultValue}
      onChange={handleChange}
      value={value}
    >
      {items.map((item) => (
        <option
          value={item.value}
          disabled={item.value === value}
          selected={item.value === value}
        >
          {item.label}
        </option>
      ))}
    </select>
  )
}