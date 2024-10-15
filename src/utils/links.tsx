import { IoStorefrontOutline } from "react-icons/io5";
import { IoCalendarOutline } from "react-icons/io5";
import { MdOutlineTableRestaurant } from "react-icons/md";
import { IoRestaurantOutline } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";

const links = [
    {
        id: 1,
        text: 'Inicio',
        path: '/',
        icon: <IoStorefrontOutline />
    },
    {
        id: 2,
        text: 'Reservar',
        path: '/book',
        icon: <IoCalendarOutline />
    },
    {
        id: 3,
        text: 'Tus Reservas',
        path: '/bookings',
        icon: <MdOutlineTableRestaurant />
    },
    {
        id: 4,
        text: 'Tus Pedidos',
        path: '/orders',
        icon: <IoRestaurantOutline />
    },
    {
        id: 5,
        text: 'Profile',
        path: '/profile',
        icon: <FaUserCircle />
    }
]

export default links;