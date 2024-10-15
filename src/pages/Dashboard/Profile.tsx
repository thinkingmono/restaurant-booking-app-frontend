import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks";
import { updateUser } from "../../features/user/userSlice";
import { toast } from "react-toastify";
import { FormRow, Preferences } from "../../components";
import Wrapper from "../../assets/wrappers/DashboardFormPage";
import { PreferenceType } from '../../utils/types'

function Profile() {
  const { isLoading, user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState({
    name: user?.name || '',
    email: user?.email || '',
    location: user?.location || '',
    preferences: [...user?.preferences]
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { name, email, location, preferences } = userData;
    if (!name || !email) {
      toast.error('Please fill out all fields');
      return;
    }
    dispatch(updateUser({ name, email, location, preferences }));
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const name = e.target.name;
    const value = e.target.value;
    setUserData({ ...userData, [name]: value });
  }

  const setPreferences = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { id, checked } = e.target;
    const newValues: PreferenceType[] = userData.preferences.map((preference) => {
      return preference.id === id ? {
        ...preference,
        checked: checked
      } : preference
    })
    setUserData({ ...userData, preferences: [...newValues] });
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Perfíl</h2>
        <div className="form-center">
          {/*Name Field*/}
          <FormRow type='text' name='name' labelText='Nombre' value={userData.name} onChange={handleChange} />
          {/*Email Field*/}
          <FormRow type='email' name='email' value={userData.email} onChange={handleChange} />
          {/*Location Field*/}
          <FormRow type='text' name='location' labelText='Ciudad' value={userData.location} onChange={handleChange} />
          {/*Preferences*/}
          <Preferences preferences={userData.preferences} setPreferences={setPreferences} />
          {/*Submit Button*/}
          <button type="submit" className="btn btn-hipster" disabled={isLoading}>{isLoading ? 'Guardando...' : 'Guardar Cambios'}</button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Profile