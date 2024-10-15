type FormRowType = {
  labelText?: string
  name: string
  type: string
  value: string
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void
  disabled?: boolean
}

function FormRow({ labelText, name, type, value, onChange, disabled }: FormRowType) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input type={type} name={name} id={name} className="form-input" value={value} onChange={onChange} disabled={disabled || false} />
    </div>
  )
}

export default FormRow