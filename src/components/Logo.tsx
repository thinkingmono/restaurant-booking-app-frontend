import { Link } from "react-router-dom"

function Logo() {
  return (
    <div className="logo">
      <Link to='/'>
        <h1>Cima Gourmet</h1>
      </Link>
    </div>
  )
}
export default Logo