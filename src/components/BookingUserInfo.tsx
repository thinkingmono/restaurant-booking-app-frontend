import { useState } from "react"
import { IoChevronForward } from "react-icons/io5";
import FormRow from "./FormRow"
import { useAppDispatch, useAppSelector } from "../hooks"
import { StageToShowType } from '../utils/types'
import { toast } from "react-toastify";
import { updateUser } from "../features/user/userSlice";

function BookingUserInfo({ stageToShow, handleStageChange }: { stageToShow: StageToShowType, handleStageChange: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [userInfo, setUserInfo] = useState({
    name: user.name,
    email: user.email,
    nickname: user.nickname || '',
    phone: user.phone || '',
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
  }

  const updateUserInformation = () => {
    dispatch(updateUser({ ...user, ...userInfo }))
  }

  const checkBeforeChangeStage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!userInfo.name || !userInfo.email || !userInfo.phone) {
      toast.error('Por favor diligencia todos los campos');
      return;
    }
    updateUserInformation();
    handleStageChange(e);
  }


  return (
    <>
      {stageToShow.show_user_info && <section className="booking-user-info">
        <div className="section-title-btn-container">
          <h3>Datos de la reserva</h3>
          <div className="btn-container">
            <button type="button" name='to-table-selection' onClick={checkBeforeChangeStage} className="btn btn-hipster">Siguiente <IoChevronForward /></button>
          </div>
        </div>
        <div className="user-data-container">
          {/*Name Field*/}
          <FormRow type='text' name='name' labelText='nombre' value={userInfo.name} onChange={handleChange} disabled={false} />
          {/*Email Field*/}
          <FormRow type='email' name='email' value={userInfo.email} onChange={handleChange} disabled={true} />
          {/*Nick Field*/}
          <FormRow type='text' name='nickname' value={userInfo.nickname || ''} onChange={handleChange} disabled={true} />
          {/*Email Field*/}
          <FormRow type='tel' name='phone' value={userInfo.phone || ''} onChange={handleChange} disabled={false} />
        </div>
      </section>}
    </>
  )
}
export default BookingUserInfo