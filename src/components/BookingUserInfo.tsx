import { useState } from "react"
import FormRow from "./FormRow"
import { useAppSelector } from "../hooks"

function BookingUserInfo() {
  const { user } = useAppSelector((store) => store.user);
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
    nickname: user.nickname,
    phone: user.phone,
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  return (
    <div className="booking-user-info">
      <h3>Datos de la reserva</h3>
      <div className="user-data-container">
        {/*Name Field*/}
        <FormRow type='text' name='name' labelText='nombre' value={userInfo.name} onChange={handleChange} disabled={true} />
        {/*Email Field*/}
        <FormRow type='email' name='email' value={userInfo.email} onChange={handleChange} disabled={true} />
        {/*Nick Field*/}
        <FormRow type='text' name='nickname' value={userInfo.nickname || ''} onChange={handleChange} disabled={true} />
        {/*Email Field*/}
        <FormRow type='tel' name='phone' value={userInfo.phone || ''} onChange={handleChange} disabled={true} />
      </div>
    </div>
  )
}
export default BookingUserInfo