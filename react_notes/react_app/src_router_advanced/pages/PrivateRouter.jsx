import { Outlet, Navigate } from "react-router-dom"
import Login from "./Login"

const PrivateRouter = () => {
  //? Context API, redux, localStorage
  const isAuthenticated = true

  //? useNavigate (Hook) ile Navigate(Component) aslında aynı işi yapar. Yani yönlendirme işlemini gerçekleştirir.
  //? Aralarindaki fark kullanım yerleridir. Hook olan bir event ya da useEefect hook'u nun içerisi gibi yerlerde kullanılır. (Fonkisyionların kullanıldığı yerler)

  //? Diğeri ise bir component olduğu için JSX içeriside yönlendirme yapmak gerektiği durumlarda kullanılır.

  //? Link ise kullanıcıdan bir girdi beklenildiği durumlarda kullanılaiblir.
  return <div>{isAuthenticated ? <Outlet /> : <Navigate to="/login" />}</div>
}

export default PrivateRouter
