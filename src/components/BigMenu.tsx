import Wrapper from "../assets/wrappers/BigMenu"
import { useAppSelector } from "../hooks"
import Logo from "./Logo"
import NavLinks from "./NavLinks"

function BigMenu() {
  const { isSidebarOpen } = useAppSelector((store) => store.user)
  return (
    <Wrapper>
      <div className={isSidebarOpen ? "sidebar-container" : "sidebar-container show-sidebar"}>
        <div className="content">
          <header><Logo /></header>
          <NavLinks />
        </div>
      </div>
    </Wrapper>
  )
}
export default BigMenu