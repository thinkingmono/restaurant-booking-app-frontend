import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import { BookingUserInfo, BookingTableSelection, BookingOrderSelection } from "../../components"


function Book() {
  const { user } = useAppSelector((store) => store.user);
  const { table } = useAppSelector((store) => store.table);
  const dispatch = useAppDispatch();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Haz tu reserva</h2>
        <div className="form-center">
          {/* User Information */}
          <BookingUserInfo />
          {/* Table Selection */}
          <BookingTableSelection />
          {/* Food Order Selection */}
          <BookingOrderSelection />
          {/* <button type="submit" className="btn btn-hipster" disabled={isLoading}>{isLoading ? 'Cargando...' : 'Reservar'}</button> */}
        </div>
      </form>
    </Wrapper>
  )
}
export default Book