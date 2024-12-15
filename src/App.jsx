import {BrowserRouter, Route, Routes} from "react-router-dom";
import MainPage from "./components/pages/MainPage.jsx";
import PostDetailsPage from "./components/pages/PostDetailsPage.jsx";
import Scroll from "./utils/Scroll.jsx";
import LoginPage from "./components/pages/LoginPage.jsx";
import SignUpPage from "./components/pages/SignUpPage.jsx";


function App() {
  return (
      <BrowserRouter>
          <Scroll />
          <Routes>
          <Route path="/" element={<MainPage/>} />
           <Route path="/home" element={<MainPage/>} />
           <Route path="/posts/:id" element={<PostDetailsPage />} />
           <Route path="/login" element={<LoginPage />} />
           <Route path="/signup" element={<SignUpPage />} />
        </Routes>
      </BrowserRouter>
  );
}

export default App
