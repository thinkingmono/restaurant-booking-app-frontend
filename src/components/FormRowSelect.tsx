import { FormRowSelectType } from '../utils/types'


const FormRowSelect = ({ labelText, name, value, onChange, list, disabled }: FormRowSelectType) => {
  return (
    <div className="form-row">
      <label htmlFor={name} className="form-label">{labelText || name}</label>
      <select name={name} id={name} value={value} onChange={onChange} className="form-select" disabled={disabled || false}>
        <option value=""></option>
        {/*Show select options through map*/}
        {list.map((itemValue, index) => {
          return (
            <option key={index} value={itemValue}>{itemValue}</option>
          )
        })}
      </select>
    </div>
  )
}

export default FormRowSelect