import { Navigate } from "react-router-dom"
import { useAppSelector } from "../hooks";

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user } = useAppSelector((store) => store.user);

  if (!user) {
    return <Navigate to='/register' />
  }

  return children
}
export default ProtectedRoute