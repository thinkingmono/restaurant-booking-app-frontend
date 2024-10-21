import { FormRowDateType } from '../utils/types';

function FormRowDate({ labelText, name, value, onChange, min, max }: FormRowDateType) {
  // console.log({ labelText, name, value, min, max });
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">
        {labelText || name}
      </label>
      <input type='date' name={name} id={name} className="form-input" value={value} onChange={onChange} min={min} max={max}/>
    </div>
  )
}

export default FormRowDate