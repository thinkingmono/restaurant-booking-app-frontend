import React, { useEffect, useState } from "react"
import { useAppDispatch, useAppSelector } from "../../hooks"
import Wrapper from "../../assets/wrappers/DashboardFormPage"
import moment from "moment"
import { FormRow, FormRowNumber, FormRowSelect, FormRowDate, TableCard } from "../../components"
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { hours } from '../../utils/data'
import { filterTables } from "../../features/tables/tablesSlice"
import { selectTable } from "../../features/table/tableSlice"
import { getAllCategories, filterByCategory } from "../../features/dishes/dishesSlice"
import { IoAddOutline } from "react-icons/io5";

function Book() {
  const { user } = useAppSelector((store) => store.user);
  const { table } = useAppSelector((store) => store.table);
  const { filtered_tables } = useAppSelector((store) => store.tables);
  const { isLoading, categories, filtered_dishes } = useAppSelector((store) => store.dishes);
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);
  const [showPreferenceFilters, setShowPreferenceFilters] = useState(false);
  const dispatch = useAppDispatch();
  const [notAvailable, setNotAvailable] = useState(false);
  const [bookData, setBookData] = useState({
    name: user.name,
    email: user.email,
    nickname: user.nickname,
    phone: user.phone,
    table_filters: {
      filter_date: moment().add(1, 'days').format("YYYY-MM-DD").toString(),
      filter_hour: '01:00:00 p. m.',
      filter_zone: 'General',
      guests: 2,
      status: 'Available'
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

  const handleOnClickFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget as HTMLInputElement;
    let value: string = '';
    if (name === 'category') { value = e.currentTarget.dataset.category! };
    if (name === 'preference') { value = e.currentTarget.dataset.preference! };
    dispatch(filterByCategory(value));
  }

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  useEffect(() => {
    dispatch(filterByCategory('Pasta'));
  }, [categories])

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
              {notAvailable ? <h4>No hay mesas disponibles con esas características. Por favor intenta de nuevo</h4> : <TableCard table={{ ...table }} onClick={pickTable} />}
            </div>
          </div>
          {/* Food Order Selection */}
          <div className="order-selection-section">
            <h3>Los platos que alegrarán tu velada</h3>
            <div className="order-selection-container">
              <aside className="dishes-filters">
                <div className="filters-block">
                  <div className="filter-section-title">
                    <button type="button" onClick={() => setShowCategoryFilters(!showCategoryFilters)} className="filters-toggle-btn"><h4>Categorías</h4>{!showCategoryFilters ? <IoChevronForward /> : <IoChevronDown />}</button>
                  </div>
                  <div className={showCategoryFilters ? `categories-filters show` : `categories-filters`}>
                    {!isLoading ? categories.map((category) => {
                      return <button type="button" name="category" key={category.category_id} className="filter-btn" data-category={category.category_name} onClick={handleOnClickFilter}>{category.category_name}</button>
                    }) : <h4>Cargando...</h4>}
                  </div>
                </div>
                <div className="filters-block">
                  <div className="filter-section-title">
                    <button type="button" onClick={() => setShowPreferenceFilters(!showPreferenceFilters)} className="filters-toggle-btn"><h4>Preferencias</h4>{!showPreferenceFilters ? <IoChevronForward /> : <IoChevronDown />}</button>
                  </div>
                  <div className={showPreferenceFilters ? `preferences-filters show` : `preferences-filters`}>
                    {!isLoading ? user.preferences.map((preference) => {
                      return <button type="button" name="preference" key={preference.id} className="filter-btn" data-preference={preference.id} onClick={handleOnClickFilter}>{preference.label}</button>
                    }) : <h4>Cargando...</h4>}
                  </div>
                </div>
              </aside>
              <div className="dishes-results-container">
                <div className="dishes-results">
                  {!isLoading ? filtered_dishes.map((dish) => {
                    return (
                      <article key={dish.dish_id} className="dish-card">
                        <div className="img-container" style={{ height: '200px' }}>
                          <div className="overlay"></div>
                          <img src={dish.dish_img} alt={dish.dish_name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                          <button type='button' className="add-to-order-btn"><IoAddOutline /></button>
                        </div>
                        <div className="dish-info">
                          <h4>{dish.dish_name}</h4>
                          <span className="dish-price">$ {dish.dish_price}</span>
                        </div>
                      </article>
                    )
                  }) : <h4>Cargando...</h4>}
                </div>
              </div>
            </div>
          </div>
          <button type="submit" className="btn btn-hipster" disabled={isLoading}>{isLoading ? 'Cargando...' : 'Reservar'}</button>
        </div>
      </form>
    </Wrapper>
  )
}
export default Book