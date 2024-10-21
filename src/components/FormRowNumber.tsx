import { FormRowNumberType } from '../utils/types';

function FormRowNumber({ labelText, name, value, onChange, min, max, step }: FormRowNumberType) {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input type='number' name={name} id={name} className="form-input" value={value} onChange={onChange} min={min} max={max} step={step}/>
    </div>
  )
}

export default FormRowNumber