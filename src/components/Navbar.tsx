import { useAppDispatch, useAppSelector } from '../hooks';
import { useState } from 'react';
import { clearStore, toggleSidebar } from '../features/user/userSlice';
import Logo from './Logo'
import Wrapper from '../assets/wrappers/Navbar'
import { IoChevronDown, IoPersonCircleOutline, IoMenuOutline } from "react-icons/io5";
import { Link } from 'react-router-dom'

function Navbar() {
  const [showLogout, setShowLogout] = useState(false);
  const { user } = useAppSelector((store) => store.user);
  const dispatch = useAppDispatch();

  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className="nav-center">
        <button type="button" className='toggle-btn' onClick={toggle}><IoMenuOutline className='icon'/></button>
        <div>
          <Logo />
        </div>
        <div className="btn-container">
          <button type="button" className='btn btn-hipster' onClick={() => setShowLogout(!showLogout)}><IoPersonCircleOutline className='icon' />{user?.name.split(' ')[0]}<IoChevronDown /></button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <span>{user?.name}</span>
            <Link to='/profile' className='dropdown-btn' onClick={() => setShowLogout(!showLogout)}>Perfil</Link>
            <button type="button" className='dropdown-btn' onClick={() => dispatch(clearStore('Logging out...'))}>Logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar