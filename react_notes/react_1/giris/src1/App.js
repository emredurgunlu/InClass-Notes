import Footer from "./Footer"
import { Main } from "./Main"

import "./App.css" // stil bütün childlara da  (Header,Main,Footer...)uygulanır ama override edilebilir

function App() {
  return (
    // div yerine react Fragments
    <> 
      <h1>React App</h1>
      <Main/>
      <Footer/>
    </>
  )
}

export default App
