import { BrowserRouter, Route, Routes } from "react-router-dom"
import Homepage from "./pages/Homepage"
import AboutUs from "./pages/AboutUs"
import PostList from "./pages/PostList"
import DefaultLayout from "./layouts/DefaultLayout"
import "./App.css"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>

          <Route element={<DefaultLayout />}>
            <Route path="/" element={<Homepage />} />
            <Route path="/aboutus" element={<AboutUs />} />
            <Route path="/postlist" element={<PostList />} />
          </Route>

        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
