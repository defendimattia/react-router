import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import PostList from "./pages/PostList"

function App() {
  return (
    <>

    <BrowserRouter>
    <Routes>

    <Route path="/" element={<Homepage />}/>
    <Route path="/aboutus" element={<AboutUs />}/>
    <Route path="/postlist" element={<PostList />}/>

    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
