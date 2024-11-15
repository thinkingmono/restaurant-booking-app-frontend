import { IoChevronBack, IoCloseCircleOutline } from "react-icons/io5";
import { StageToShowType } from '../utils/types'
import TableCard from "./TableCard";
import { useAppDispatch, useAppSelector } from "../hooks";
import { deleteItem } from "../features/order/orderSlice";
import { toast } from "react-toastify";
import { createBooking } from "../features/booking/bookingSlice";
import { formatDateToDB } from "../utils/format";
import { useNavigate } from "react-router-dom";

function BookingSummary({ stageToShow, handleStageChange }: { stageToShow: StageToShowType, handleStageChange: (e: React.MouseEvent<HTMLButtonElement>) => void }) {
  const { user } = useAppSelector((store) => store.user);
  const { table } = useAppSelector((store) => store.table);
  const { order } = useAppSelector((store) => store.order);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  const handleDeleteItem = (item_id: string) => {
    dispatch(deleteItem({ item_id }));
  }

  const getOrderItemsIds = () => {
    const ids = order.items.map((item) => {
      return parseInt(item.dish_id);
    })
    return ids
  }

  const checkBeforeChangeStage = () => {
    if (table.status !== 'Available') {
      toast.error('Por favor selecciona una mesa disponible');
      return;
    }
    if (order.items.length === 0) {
      toast.error('Por favor selecciona los platos de tu reserva');
      return;
    }
    dispatch(createBooking({
      booking_id: '',
      table_id: table.table_id,
      user_id: user?.id!,
      order: getOrderItemsIds(),
      date_hour: formatDateToDB(table.book_date, table.book_hour),
      num_people: table.guests
    }))
    setTimeout(() => {
      navigate('/');
    }, 1500);
  }

  return (
    <>
      {stageToShow.show_booking_summary && <section className="booking-summary-section">
        <div className="section-title-btn-container">
          <button type="button" name='to-order-selection' onClick={handleStageChange} className="btn btn-hipster"><IoChevronBack />Atrás</button>
          <h3>Resumen</h3>
          <button type="submit" className="btn btn-hipster" onClick={checkBeforeChangeStage}>Reservar</button>
        </div>
        <div className="booking-summary-container">
          <div className="user-information-container">
            <h4>Tus datos</h4>
            <div className="user-information">
              <p><strong>Nombre: </strong>{user?.name}</p>
              <p><strong>Nickname: </strong>{user?.nickname}</p>
              <p><strong>Email: </strong>{user?.email}</p>
              <p><strong>Celular: </strong>{user?.phone}</p>
              <button type="button" name='to-user-information' onClick={handleStageChange} className="btn btn-hipster">Editar</button>
            </div>
          </div>
          <div className="table-card-container">
            <TableCard table={{ ...table }} />
          </div>
          <div className="order-container">
            <h4>Tu orden</h4>
            {order.items.length > 0 ? <div className="dishes-list">
              <div className="dishes-list-headers">
                <p>Plato</p>
                <p>Nombre</p>
                <p>Cantidad</p>
                <p>Precio</p>
                <p>Subtotal</p>
                <p></p>
              </div>
              {order.items.map((item) => {
                return <article className="dish-item" key={item.dish_id}>
                  <img src={item.dish_img} alt={item.dishname} />
                  <p>{item.dishname}</p>
                  <p>{item.dish_qty}</p>
                  <p>${item.dish_price}</p>
                  <p>${item.dish_subtotal}</p>
                  <button type="button" onClick={() => handleDeleteItem(item.dish_id)}><IoCloseCircleOutline /></button>
                </article>
              })}
            </div> : (
              <div className="no-items">
                <h5>No has seleccionado ningún plato en tu orden</h5>
                <button type="button" name='to-order-selection' onClick={handleStageChange} className="btn btn-hipster">Editar</button>
              </div>
            )}
          </div>
        </div>
      </section >}
    </>
  )
}
export default BookingSummary