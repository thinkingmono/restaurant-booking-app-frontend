import { useEffect, useState } from "react";
import { IoChevronForward, IoChevronDown, IoChevronBack } from "react-icons/io5";
import { IoAddOutline } from "react-icons/io5";
import { useAppDispatch, useAppSelector } from "../hooks";
import { filterDishes, setActiveFilter, getAllDishes, setCategories, setDishTypes } from '../features/dishes/dishesSlice';
import { addItem } from "../features/order/orderSlice";
import { DishType, StageToShowType } from "../utils/types";
import { toast } from "react-toastify";

function BookingOrderSelection({ stageToShow, handleStageChange }: { stageToShow: StageToShowType, handleStageChange: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  const { all_dishes, isLoadingFilters, isLoadingDishes, categories, dishTypes, filtered_dishes, active_filter } = useAppSelector((store) => store.dishes);
  const { order } = useAppSelector((store) => store.order);
  const dispatch = useAppDispatch();
  const [showDishTypesFilters, setShowDishTypesFilters] = useState(true);
  const [showCategoryFilters, setShowCategoryFilters] = useState(true);

  const handleOnClickFilter = (e: React.MouseEvent<HTMLButtonElement>) => {
    const { name } = e.currentTarget as HTMLInputElement;
    let value: string = '';
    if (name === 'category') { value = e.currentTarget.dataset.category! };
    if (name === 'dish-type') { value = e.currentTarget.dataset.dish_type! };
    dispatch(setActiveFilter(value));
    dispatch(filterDishes({ filter: value, filter_type: name }));
  }

  const addDishToOrder = (dish: DishType) => {
    dispatch(addItem({ item: dish }))
  }

  const checkBeforeChangeStage = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (order.items.length === 0) {
      toast.error('Por favor agrega los platos de tu pedido');
      return;
    }
    handleStageChange(e);
  }

  useEffect(() => {
    dispatch(getAllDishes('all'));
  }, [])

  useEffect(() => {
    dispatch(setDishTypes());
    dispatch(setCategories());
  }, [all_dishes]);

  return (
    <>
      {stageToShow.show_order_selection && <section className="order-selection-section">
        <div className="section-title-btn-container">
          <button type="button" name='to-table-selection' onClick={handleStageChange} className="btn btn-hipster"><IoChevronBack /> <span className="button-text-desktop">Atrás</span></button>
          <h3>Los platos que alegrarán tu velada</h3>
          <button type="button" name='to-booking-summary' onClick={checkBeforeChangeStage} className="btn btn-hipster"><span className="button-text-desktop">Resumen</span> <IoChevronForward /></button>
        </div>
        <div className="order-selection-container">
          <aside className="dishes-filters">
            <div className="filters-block">
              <div className="filter-section-title">
                <button type="button" onClick={() => setShowDishTypesFilters(!showDishTypesFilters)} className="filters-toggle-btn"><h4>Tipos</h4>{!showDishTypesFilters ? <IoChevronForward /> : <IoChevronDown />}</button>
              </div>
              <div className={showDishTypesFilters ? `preferences-filters show` : `preferences-filters`}>
                {!isLoadingFilters ? dishTypes.map((dishType) => {
                  return <button type="button" name="dish-type" key={dishType} className={`${active_filter === dishType ? 'filter-btn active' : 'filter-btn'}`} data-dish_type={dishType} onClick={handleOnClickFilter}>{dishType}</button>
                }) : <h4>Cargando...</h4>}
              </div>
            </div>
            <div className="filters-block">
              <div className="filter-section-title">
                <button type="button" onClick={() => setShowCategoryFilters(!showCategoryFilters)} className="filters-toggle-btn"><h4>Categorías</h4>{!showCategoryFilters ? <IoChevronForward /> : <IoChevronDown />}</button>
              </div>
              <div className={showCategoryFilters ? `categories-filters show` : `categories-filters`}>
                {!isLoadingFilters ? categories.map((category) => {
                  return <button type="button" name="category" key={category} className={`${active_filter === category ? 'filter-btn active' : 'filter-btn'}`} data-category={category} onClick={handleOnClickFilter}>{category}</button>
                }) : <h4>Cargando...</h4>}
              </div>
            </div>
          </aside>
          <div className="dishes-results-container">
            <div className="dishes-results">
              {!isLoadingDishes ? filtered_dishes.map((dish) => {
                return (
                  <article key={dish.dish_id} className="dish-card">
                    <div className="img-container">
                      <div className="overlay"></div>
                      <img src={dish.dish_img} alt={dish.dishname} />
                      <button type='button' className="add-to-order-btn" onClick={() => addDishToOrder(dish)}><IoAddOutline /></button>
                    </div>
                    <div className="dish-info">
                      <h4>{dish.dishname}</h4>
                      <span className="dish-price">$ {dish.dish_price}</span>
                    </div>
                  </article>
                )
              }) : <h4>Cargando...</h4>}
            </div>
          </div>
        </div>
      </section>}
    </>
  )
}
export default BookingOrderSelection