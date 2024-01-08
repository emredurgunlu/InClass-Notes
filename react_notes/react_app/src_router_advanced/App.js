import Footer from "./components/Footer"
import Nav from "./components/Nav"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import People from "./pages/People"
import NotFound from "./pages/NotFound"
import Paths from "./pages/Paths"
import PersonDetail from "./pages/PersonDetail"
import Fullstack from "./pages/Fullstack"
import Aws from "./pages/Aws"
import Frontend from "./pages/Frontend"
import Backend from "./pages/Backend"
import Login from "./pages/Login"
import PrivateRouter from "./pages/PrivateRouter"

import { BrowserRouter, Routes, Route } from "react-router-dom"

function App() {
  return (
    <BrowserRouter>
      <Nav />

      <Routes>
        <Route path="/" element={<Home />} />

        {/* PrivateRouter.jsx içine bir if-else condition koyarız */}
        <Route path="/people" element={<PrivateRouter />}>
          <Route index path="" element={<People />} />
          {/* //? Absolute (bak People.jsx) */}
          {/* <Route path="/people/:idx" element={<PersonDetail />} /> */}
          {/* //?Relative */}
          <Route path=":idx" element={<PersonDetail />} />
        </Route>

        <Route path="/people" element={<People />} />
        <Route path="/people/:idx" element={<PersonDetail />} />

        <Route path="/login" element={<Login />} />

        <Route path="/contact" element={<Contact />} />

        {/* Nesting routing yapmak için Paths routunu self-closing yapma, sarmalayıcı yap*/}
        {/* Nesting routta Paths componenti hep var, içine ya fs ya da aw gelecek, nereye geleceği <Outlet /> ile belirleniyor */}
        <Route path="/paths" element={<Paths />}>
          {/* Nesting routeda child routelar absolute değil, relative olarak yapılır */}
          {/* slash / koymadığımız için fs relative adresleme oldu, bulunduğun yerin üzerine yani /paths üzerine fs koy demek */}
          <Route path="fs" element={<Fullstack />}>
            {/* Paths içinde  Fullstack ve AWS nesting routu, Fullstack içinde de Frontend ve Backend nesting routu yaptık*/}
            <Route path="frontend" element={<Frontend />} />
            <Route path="backend" element={<Backend />} />
          </Route>
          {/* /paths içindeki <Outlet /> ilk başlangıçta boş olmasın fs veya awsden birisi default gelsin istiyoruz.
          bunun için path= soluna index kelimesi ekleyip path="aws" içini silip path="" yapmamız gerekiyor.
          fs routu ayrıca bir nesting route olduğundan bu default ayarlama işini ona yapamayız, hata verir 
           */}
          <Route index path="" element={<Aws />} />
        </Route>

        <Route path="*" element={<NotFound />} />
      </Routes>

      <Footer />
    </BrowserRouter>
  )
}

export default App
