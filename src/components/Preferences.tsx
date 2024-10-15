type Preference = { id: string, label: string, checked: boolean };

function Preferences({ preferences, setPreferences }: { preferences: Preference[], setPreferences: (e: React.ChangeEvent<HTMLInputElement>) => void }) {
  return (
    <div className="preferences-container">
      <p>Queremos brindarte el mejor servicio. Por favor selecciona tus preferencias</p>
      <div className="preferences">
        {preferences.map((preference) => {
          const { id, label, checked } = preference;
          return <div key={id} className="preference">
            <input type="checkbox" name={id} id={id} value={id} onChange={setPreferences} checked={checked} />
            <label htmlFor={id}>{label}</label>
          </div>
        })}
      </div>
    </div>
  )
}
export default Preferences