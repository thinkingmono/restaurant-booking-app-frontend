import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import moment from "moment"
import { FormRow, FormRowNumber, FormRowSelect, FormRowDate, TableCard } from "../../components"
import { hours } from '../../utils/data'
import { filterTables, updateFilters } from "../../features/tables/tablesSlice"
import { selectTable } from "../../features/table/tableSlice"

function Book() {
  const { user, isLoading } = useAppSelector((store) => store.user);
  const { table } = useAppSelector((store) => store.table);
  const { filters, filtered_tables } = useAppSelector((store) => store.tables);
  const dispatch = useAppDispatch();
  const [notAvailable, setNotAvailable] = useState(false);
  const [bookData, setBookData] = useState({
    name: user.name,
    email: user.email,
    nickname: user.nickname,
    phone: user.phone,
    table_filters: {
      filter_date: filters?.filter_date || moment().add(1, 'days').format("YYYY-MM-DD").toString(),
      filter_hour: filters?.filter_hour || '01:00:00 p. m.',
      filter_zone: filters?.filter_zone || 'General',
      guests: filters?.guests || 2,
      status: filters?.status || 'Available'
    },
  })

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  }

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    if (bookData.table_filters.hasOwnProperty(name)) {
      setBookData({ ...bookData, table_filters: { ...bookData.table_filters, [name]: value } });
      return;
    }
    setBookData({ ...bookData, [name]: value });
  }

  const pickTable = () => {
    if (filtered_tables.length === 0) {
      setNotAvailable(true);
      return;
    } else {
      setNotAvailable(false);
      dispatch(selectTable({ table: { ...filtered_tables[0] } }));
    }
  }

  useEffect(() => {
    dispatch(filterTables({ table_filters: { ...bookData.table_filters } }));
  }, [bookData.table_filters])

  useEffect(() => {
    pickTable();
  }, [filtered_tables])

  return (
    <Wrapper>
      <form className="form" onSubmit={handleSubmit}>
        <h2>Haz tu reserva</h2>
        <div className="form-center">
          {/* User Information */}
          <div className="booking-user-info">
            <h3>Datos de la reserva</h3>
            <div className="user-data-container">
              {/*Name Field*/}
              <FormRow type='text' name='name' labelText='nombre' value={bookData.name} onChange={handleChange} disabled={true} />
              {/*Email Field*/}
              <FormRow type='email' name='email' value={bookData.email} onChange={handleChange} disabled={true} />
              {/*Nick Field*/}
              <FormRow type='text' name='nickname' value={bookData.nickname || ''} onChange={handleChange} disabled={true} />
              {/*Email Field*/}
              <FormRow type='tel' name='phone' value={bookData.phone || ''} onChange={handleChange} disabled={true} />
            </div>
          </div>
          {/* Table Selection */}
          <div className="table-selection-section">
            <div className="table-preferences">
              <h3>Selecciona tu mesa</h3>
              <div className="preferences-fields-container">
                {/* Book Date */}
                <FormRowDate labelText='Fecha de la reserva' name='filter_date' value={bookData.table_filters.filter_date} onChange={handleChange} min={moment().add(1, 'days').format("YYYY-MM-DD").toString()} max={moment().add(30, 'days').format("YYYY-MM-DD").toString()} />
                {/* Book Hour */}
                <FormRowSelect labelText='Hora de la reserva' name='filter_hour' value={bookData.table_filters.filter_hour} onChange={handleChange} list={hours} />
                {/* Book Zone */}
                <FormRowSelect labelText='Zona de la reserva' name='filter_zone' value={bookData.table_filters.filter_zone} onChange={handleChange} list={['General', 'VIP', 'Jardín']} />
                {/* Book Guest Quantity */}
                <FormRowNumber name='guests' labelText='Personas' value={bookData.table_filters.guests} onChange={handleChange} min='2' max='10' step='2' />
              </div>
            </div>
            <div className="table-card-container">
              {notAvailable ? <h4>No hay mesas disponibles con esas características. Por favor intenta de nuevo</h4> : <TableCard table={{ ...table, status: 'not-available' }} onClick={pickTable} />}
            </div>
          </div>
          {/* Food Order Selection */}
          <div className="order-selection-section">
          </div>
          <button type="submit" className="btn btn-hipster" disabled={isLoading}>{isLoading ? 'Cargando...' : 'Reservar'}</button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Book