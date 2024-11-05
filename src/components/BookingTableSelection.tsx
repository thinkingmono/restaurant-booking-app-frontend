import moment from "moment"
import { useState, useEffect } from "react"
import { IoChevronForward, IoChevronBack } from "react-icons/io5";
import { FormRowDate, FormRowSelect, FormRowNumber, TableCard } from "./"
import { hours } from "../utils/data"
import { filterTables } from "../features/tables/tablesSlice"
import { selectTable } from "../features/table/tableSlice"
import { useAppDispatch, useAppSelector } from "../hooks"
import { StageToShowType } from '../utils/types'
import { toast } from "react-toastify";


function BookingTableSelection({ stageToShow, handleStageChange }: { stageToShow: StageToShowType, handleStageChange: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  const { table } = useAppSelector((store) => store.table);
  const { filtered_tables } = useAppSelector((store) => store.tables);
  const dispatch = useAppDispatch();
  const [notAvailable, setNotAvailable] = useState(false);
  const [tableFilters, setTableFilters] = useState({
    filter_date: moment().add(1, 'days').format("YYYY-MM-DD").toString(),
    filter_hour: '01:00:00 p. m.',
    filter_zone: 'General',
    guests: 2,
    status: 'Available'
  })

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement> | React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setTableFilters({ ...tableFilters, [name]: value })
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
    dispatch(filterTables({ table_filters: { ...tableFilters } }));
  }, [tableFilters])

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
        <div className="table-preferences">
          <div className="preferences-fields-container">
            {/* Book Date */}
            <FormRowDate labelText='Fecha de la reserva' name='filter_date' value={tableFilters.filter_date} onChange={handleChange} min={moment().add(1, 'days').format("YYYY-MM-DD").toString()} max={moment().add(30, 'days').format("YYYY-MM-DD").toString()} />
            {/* Book Hour */}
            <FormRowSelect labelText='Hora de la reserva' name='filter_hour' value={tableFilters.filter_hour} onChange={handleChange} list={hours} />
            {/* Book Zone */}
            <FormRowSelect labelText='Zona de la reserva' name='filter_zone' value={tableFilters.filter_zone} onChange={handleChange} list={['General', 'VIP', 'Jardín']} />
            {/* Book Guest Quantity */}
            <FormRowNumber name='guests' labelText='Personas' value={tableFilters.guests} onChange={handleChange} min='2' max='10' step='2' />
          </div>
        </div>
        <div className="table-card-container">
          {notAvailable ? <h4>No hay mesas disponibles con esas características. Por favor intenta de nuevo</h4> : <TableCard table={{ ...table }} />}
        </div>
      </section>}
    </>
  )
}
export default BookingTableSelection