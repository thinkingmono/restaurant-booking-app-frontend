import { IoPeopleOutline, IoTimeOutline, IoTodayOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { TableType } from "../utils/types";
import vipImg from '../assets/images/cima-gourmet-vip.jpg'
import generalImg from '../assets/images/cima-gourmet-general.jpg'
import jardinImg from '../assets/images/cima-gourmet-jardin.jpg'
import barraImg from '../assets/images/cima-gourmet-barra.jpg'

function TableCard({ table, onClick }: { table: TableType, onClick: () => void }) {
  const cardImage = table.book_zone === 'VIP' ? vipImg : table.book_zone === 'General' ? generalImg : table.book_zone === 'Jardín' ? jardinImg : '';

  return (
    <article className="table-card">
      <div className="img-container" style={{ height: '200px' }}>
        <div className="overlay"></div>
        <img src={cardImage} alt={table.book_zone} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        <span className="zone-tag">{table.book_zone}</span>
      </div>
      <div className="table-info">
        <span><MdOutlineTableRestaurant /> Mesa {table.table_id}</span>
        <span><IoTodayOutline /> {table.book_date}</span>
        <span><IoTimeOutline /> {table.book_hour}</span>
        <span><IoPeopleOutline /> {table.guests}</span>
        <button type="button" className="btn" onClick={onClick}>Seleccionar</button>
      </div>
    </article>
  )
}
export default TableCard