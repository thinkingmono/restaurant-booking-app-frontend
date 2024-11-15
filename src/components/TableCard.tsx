import { IoPeopleOutline, IoTimeOutline, IoTodayOutline, IoCheckmarkCircleOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { TableType } from "../utils/types";
import vipImg from '../assets/images/zones/cima-gourmet-vip.jpg'
import mainHallImg from '../assets/images/zones/cima-gourmet-general.jpg'
import gardenImg from '../assets/images/zones/cima-gourmet-jardin.jpg'
import barraImg from '../assets/images/zones/cima-gourmet-barra.jpg'

function TableCard({ table, notAvailable }: { table: TableType, notAvailable?: boolean }) {
  const cardImage = table.book_zone === 'VIP' ? vipImg : table.book_zone === 'Main Hall' ? mainHallImg : table.book_zone === 'Garden' ? gardenImg : mainHallImg;

  return (
    <article className="table-card">
      <div className="img-container">
        <div className={!notAvailable ? 'overlay' : 'overlay darker'}></div>
        <img src={cardImage} alt={table.book_zone} />
        <span className="zone-tag">{!notAvailable ? table.book_zone : 'No disponible'}</span>
      </div>
      <div className="table-info">
        {!notAvailable && <>
          <span><MdOutlineTableRestaurant /> Mesa {table.table_id}</span>
          <span><IoTodayOutline /> {table.book_date}</span>
          <span><IoTimeOutline /> {table.book_hour}</span>
          <span><IoPeopleOutline /> {table.guests}</span>
        </>}
        <span className="availability-check-tag"><IoCheckmarkCircleOutline /> {!notAvailable ? 'Disponible' : 'No Disponible'}</span>
      </div>
    </article>
  )
}
export default TableCard