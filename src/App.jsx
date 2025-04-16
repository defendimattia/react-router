import { BrowserRouter, NavLink, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import PostList from "./pages/PostList"
import "./App.css"

function App() {
  return (
    <>

      <BrowserRouter>
        <nav>
          <ul>
            <li><NavLink to="/">homepage</NavLink></li>
            <li><NavLink to="/aboutus">about us</NavLink></li>
            <li><NavLink to="/postlist">post list</NavLink></li>
          </ul>
        </nav>

        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/aboutus" element={<AboutUs />} />
          <Route path="/postlist" element={<PostList />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
