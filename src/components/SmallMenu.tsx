import Wrapper from "../assets/wrappers/SmallMenu";
import { useAppDispatch, useAppSelector } from "../hooks";
import { toggleSidebar } from '../features/user/userSlice'
import { IoCloseOutline } from "react-icons/io5";
import Logo from './Logo'
import NavLinks from "./NavLinks";

function SmallMenu() {
  const { isSidebarOpen } = useAppSelector((store) => store.user)
  const dispatch = useAppDispatch();
  const toggle = () => {
    dispatch(toggleSidebar())
  }

  return (
    <Wrapper>
      <div className={isSidebarOpen ? 'sidebar-container show-sidebar' : 'sidebar-container'}>
        <div className="content">
          <button type="button" className='close-btn' onClick={toggle}><IoCloseOutline /></button>
          <header><Logo /></header>
          <NavLinks toggleSidebar={toggle} />
          {/* <NavLinks /> */}
        </div>
      </div>
    </Wrapper >
  )
}
export default SmallMenu