import { Outlet } from "react-router-dom"
import Wrapper from "../../assets/wrappers/SharedLayout"
import { BigMenu, Navbar, SmallMenu } from "../../components"

function SharedLayout() {
  return (
    <Wrapper>
      <main className="dashboard">
        <SmallMenu />
        <BigMenu />
        <div>
          <Navbar />
          <div className="dashboard-page">
            <Outlet />
          </div>
        </div>
      </main>
    </Wrapper>
  )
}
export default SharedLayout