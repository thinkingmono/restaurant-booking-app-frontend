import React, { useState } from "react"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { BookingUserInfo, BookingTableSelection, BookingOrderSelection, BookingSummary } from "../../components"


function Book() {
  const [stageToShow, setStageToShow] = useState({
    show_user_info: true,
    show_table_selection: false,
    show_order_selection: false,
    show_booking_summary: false
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const handleStageChange = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget as HTMLInputElement;
    if (name === 'to-user-information') setStageToShow({ show_user_info: true, show_table_selection: false, show_order_selection: false, show_booking_summary: false });
    if (name === 'to-table-selection') setStageToShow({ show_user_info: false, show_table_selection: true, show_order_selection: false, show_booking_summary: false });
    if (name === 'to-order-selection') setStageToShow({ show_user_info: false, show_table_selection: false, show_order_selection: true, show_booking_summary: false });
    if (name === 'to-booking-summary') setStageToShow({ show_user_info: false, show_table_selection: false, show_order_selection: false, show_booking_summary: true });
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Haz tu reserva</h2>
        <div className="form-center">
          {/* User Information */}
          <BookingUserInfo stageToShow={stageToShow} handleStageChange={handleStageChange} />
          {/* Table Selection */}
          <BookingTableSelection stageToShow={stageToShow} handleStageChange={handleStageChange} />
          {/* Food Order Selection */}
          <BookingOrderSelection stageToShow={stageToShow} handleStageChange={handleStageChange} />
          {/* Booking Summary */}
          <BookingSummary stageToShow={stageToShow} handleStageChange={handleStageChange} />
          {/* <button type="submit" className="btn btn-hipster" disabled={isLoading}>{isLoading ? 'Cargando...' : 'Reservar'}</button> */}
        </div>
      </form>
    </Wrapper>
  )
}
export default Book