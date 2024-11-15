import moment from "moment"
import { useState, useEffect } from "react"
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { FormRowDate, FormRowSelect, FormRowNumber, TableCard } from "./"
import { hours } from "../utils/data"
import { getAvailability } from "../features/tables/tablesSlice"
import { selectTable } from "../features/table/tableSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { StageToShowType } from '../utils/types'
import { toast } from "react-toastify";
import { formatDateToDB } from "../utils/format";


function BookingTableSelection({ stageToShow, handleStageChange }: { stageToShow: StageToShowType, handleStageChange: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  const { table } = useAppSelector((store) => store.table);
  const { filtered_tables } = useAppSelector((store) => store.tables);
  const dispatch = useAppDispatch();
  const [notAvailable, setNotAvailable] = useState(false);
  const [tableFilters, setTableFilters] = useState({
    filter_date: moment().add(1, 'days').format("YYYY-MM-DD").toString(),
    filter_hour: '04:00:00 pm',
    filter_zone: 'Main Hall',
    guests: 2,
    status: 'Available'
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTableFilters({ ...tableFilters, [name]: value })
  }

  const getAvailableTables = () => {
    dispatch(getAvailability({ date: formatDateToDB(tableFilters.filter_date, tableFilters.filter_hour), zone: tableFilters.filter_zone, customers_number: tableFilters.guests }));
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

  const checkBeforeChangeStage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (notAvailable) {
      toast.error('Por favor selecciona una mesa disponible');
      return;
    }
    handleStageChange(e);
  }

  useEffect(() => {
    getAvailableTables();
  }, [])

  useEffect(() => {
    pickTable();
  }, [filtered_tables])

  return (
    <>
      {stageToShow.show_table_selection && <section className="table-selection-section">
        <div className="section-title-btn-container">
          <button type="button" name='to-user-information' onClick={handleStageChange} className="btn btn-hipster"><IoChevronBack />Atrás</button>
          <h3>Selecciona tu mesa</h3>
          <button type="button" name='to-order-selection' onClick={checkBeforeChangeStage} className="btn btn-hipster">Siguiente <IoChevronForward /></button>
        </div>
        <div className="table-filters">
          <div className="filters-fields-container">
            {/* Book Date */}
            <FormRowDate labelText='Fecha de la reserva' name='filter_date' value={tableFilters.filter_date} onChange={handleChange} min={moment().add(1, 'days').format("YYYY-MM-DD").toString()} max={moment().add(30, 'days').format("YYYY-MM-DD").toString()} />
            {/* Book Hour */}
            <FormRowSelect labelText='Hora de la reserva' name='filter_hour' value={tableFilters.filter_hour} onChange={handleChange} list={hours} />
            {/* Book Zone */}
            <FormRowSelect labelText='Zona de la reserva' name='filter_zone' value={tableFilters.filter_zone} onChange={handleChange} list={['Main Hall', 'VIP', 'Terrace', 'Garden', 'Lounge', 'Private Room']} />
            {/* Book Guest Quantity */}
            <FormRowNumber name='guests' labelText='Personas' value={tableFilters.guests} onChange={handleChange} min='2' max='10' step='2' />
            <button type="button" className="btn btn-hipster" onClick={getAvailableTables}>Validar Disponibilidad</button>
          </div>
        </div>
        <div className="table-card-container">
          <TableCard table={{ ...table }} notAvailable={notAvailable} />
        </div>
      </section>}
    </>
  )
}
export default BookingTableSelection