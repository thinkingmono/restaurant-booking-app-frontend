import { useEffect, useState } from "react";
import { IoChevronForward, IoChevronDown } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../hooks";
import { getAllCategories, filterByCategory, setActiveFilter } from '../features/dishes/dishesSlice'

function BookingOrderSelection() {
  const { isLoadingCategories, isLoadingDishes, categories, filtered_dishes, active_filter } = useAppSelector((store) => store.dishes);
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();
  const [showCategoryFilters, setShowCategoryFilters] = useState(false);
  const [showPreferenceFilters, setShowPreferenceFilters] = useState(false);

  const handleOnClickFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget as HTMLInputElement;
    let value: string = '';
    if (name === 'category') { value = e.currentTarget.dataset.category! };
    if (name === 'preference') { value = e.currentTarget.dataset.preference! };
    dispatch(setActiveFilter(value));
    dispatch(filterByCategory(value));
  }

  useEffect(() => {
    dispatch(getAllCategories())
  }, [])

  useEffect(() => {
    dispatch(filterByCategory('Pasta'));
  }, [categories])

  return (
    <div className="order-selection-section">
      <h3>Los platos que alegrarán tu velada</h3>
      <div className="order-selection-container">
        <aside className="dishes-filters">
          <div className="filters-block">
            <div className="filter-section-title">
              <button type="button" onClick={() => setShowCategoryFilters(!showCategoryFilters)} className="filters-toggle-btn"><h4>Categorías</h4>{!showCategoryFilters ? <IoChevronForward /> : <IoChevronDown />}</button>
            </div>
            <div className={showCategoryFilters ? `categories-filters show` : `categories-filters`}>
              {!isLoadingCategories ? categories.map((category) => {
                return <button type="button" name="category" key={category.category_id} className={`${active_filter === category.category_name ? 'filter-btn active' : 'filter-btn'}`} data-category={category.category_name} onClick={handleOnClickFilter}>{category.category_name}</button>
              }) : <h4>Cargando...</h4>}
            </div>
          </div>
          <div className="filters-block">
            <div className="filter-section-title">
              <button type="button" onClick={() => setShowPreferenceFilters(!showPreferenceFilters)} className="filters-toggle-btn"><h4>Preferencias</h4>{!showPreferenceFilters ? <IoChevronForward /> : <IoChevronDown />}</button>
            </div>
            <div className={showPreferenceFilters ? `preferences-filters show` : `preferences-filters`}>
              {!isLoadingCategories ? user.preferences.map((preference) => {
                return <button type="button" name="preference" key={preference.id} className="filter-btn" data-preference={preference.id} onClick={handleOnClickFilter}>{preference.label}</button>
              }) : <h4>Cargando...</h4>}
            </div>
          </div>
        </aside>
        <div className="dishes-results-container">
          <div className="dishes-results">
            {!isLoadingDishes ? filtered_dishes.map((dish) => {
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
  )
}
export default BookingOrderSelection