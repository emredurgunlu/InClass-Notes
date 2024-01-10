import { useContext } from "react"
import { createContext, useState } from "react"

//? 1. Login bilgilerini sakalyacak bir context olusturduk.
const LoginContext = createContext()

//? 2. Sarmalama
// const LoginProvider = (props) => {
const LoginProvider = ({ children }) => {
  const [user, setUser] = useState({ email: "", password: "" })

  const values = {
    user,
    setUser,
  }
  return (
    // <LoginContext.Provider value={values}>{props.children}</LoginContext.Provider>
    <LoginContext.Provider value={values}>{children}</LoginContext.Provider> 
    // Yukardaki {children} LoginProvider içindeki child componenti temsil eder
  )
}
//? Consuming için bir custom hook yazıyoruz. Gerekli bişey değil, diğer dosyalarda import sayısını 2'den 1'e düşürüyor sadece.
//? Eğer custom hook yazacaksan bunun "use" kelimesi ile başlaması gerekir
export const useLoginContext = () => {
  return useContext(LoginContext)
}

export default LoginProvider

/* <Provider>   //? App provider'ın childı. provider childı olan bir componente (props.children) ile erişebilir
  <App/>        //? Eğer Providerın childı statik değilse dinamik olarak değişiyorsa bu durumda <Provider> içine statik olarak component yazmak yerine (props.children) kullanırız
</Provider> */
