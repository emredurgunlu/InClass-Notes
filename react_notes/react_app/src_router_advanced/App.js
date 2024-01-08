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


/* 
Anthony - Instructor
  1 hour ago
'Absolute Path' ve 'Relative Path' terimleri, React Router DOM bağlamında doğru şekilde kullanılmamaktadır. React Router DOM'da, yolları tanımlamak için 'yol' prop'u kullanılır ve yol yolunun ne kadar spesifik olduğunu belirler.
Route path='search' element={ Home/ } / : Bu rota tanımı, 'arama' yol segmentine sahip herhangi bir URL ile eşleşir. '/search' ile başlayan herhangi bir URL ile eşleşir (ör. '/search/results', '/search/users', vb.).
Route path='/search' element={ Home/ } / : Bu rota tanımı yalnızca tam '/search' URL'si ile eşleşir. Yalnızca '/search' ile tam olarak eşleşen URL'lerle eşleşir ve '/search/results' veya '/search/users' gibi daha spesifik alt yollarla eşleşmez.
React Router DOM'da, başında '/' karakteri olan bir 'yol' pervanesi, köke göre “absolute path”i temsil eder. Başında '/' karakteri olmayan 'yol' öğeleri, geçerli URL'ye dayalı “relative path”i temsil eder.
Nested routelarda alt yollar relative path ile tanımlandığında path kısmında üst yolu belirtmemize gerek kalmaz.
```jsx
<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="purchases" element={<Purchases/>} />
            <Route path="sales" element={<Sales/>} />
            <Route path="products" element={<Products/>} />
            <Route path="firms" element={<Firms/>} />
            <Route path="brands" element={<Brands/>} />
          </Route>
        </Route>
      </Routes>
    </Router>
```
Ama nested routelarda alt yollarıda absolute path ile tanımlamak istersek o zaman path kısmında üst yolu da açık bir şekilde belirtmeliyiz:
```jsx
<Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/stock" element={<PrivateRouter />}>
          <Route path="" element={<Dashboard />}>
            <Route index element={<Home />} />
            <Route path="/stock/purchases" element={<Purchases />} />
            <Route path="/stock/sales" element={<Sales />} />
            <Route path="/stock/products" element={<Products />} />
            <Route path="/stock/firms" element={<Firms />} />
            <Route path="/stock/brands" element={<Brands />} />
          </Route>
        </Route>
      </Routes>
    </Router>
*/