import { useAppDispatch, useAppSelector } from '../hooks';
import { useState } from 'react';
import { clearStore, toggleSidebar } from '../features/user/userSlice';
import Logo from './Logo'
import Wrapper from '../assets/wrappers/Navbar'
import { FaAlignLeft, FaCaretDown, FaUserCircle } from 'react-icons/fa'
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
        <button type="button" className='toggle-btn' onClick={toggle}><FaAlignLeft /></button>
        <div>
          <Logo />
        </div>
        <div className="btn-container">
          {/* <button type="button" className='btn' onClick={() => setShowLogout(!showLogout)}><FaUserCircle />{user.name}<FaCaretDown /></button> */}
          <button type="button" className='btn' onClick={() => setShowLogout(!showLogout)}><FaUserCircle className='icon'/>{user.name.split(' ')[0]}<FaCaretDown /></button>
          <div className={showLogout ? 'dropdown show-dropdown' : 'dropdown'}>
            <span>{user.name}</span>
            <Link to='/profile' className='dropdown-btn' onClick={() => setShowLogout(!showLogout)}>Profile</Link>
            <button type="button" className='dropdown-btn' onClick={() => dispatch(clearStore('Logging out...'))}>Logout</button>
          </div>
        </div>
      </div>
    </Wrapper>
  )
}
export default Navbar