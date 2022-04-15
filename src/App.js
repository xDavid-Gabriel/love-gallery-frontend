import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//Context
import { PostProvaider } from "./context/postContext";
//Librerias
import { Toaster } from "react-hot-toast";

//Pages
import HomePage from "./pages/HomePage";
import Intro from "./pages/Intro";
import Publicaciones from "./pages/Publicaciones";
import PostForm from "./pages/PostForm";
import NotFoundPage from "./pages/NotFoundPage";

export default function App() {
  return (
    <PostProvaider>
      <Router>
        <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/intro" element={<Intro />} />
          <Route path="/publicaciones" element={<Publicaciones />} />
          <Route path="/nuevo" element={<PostForm />} />
          <Route path="/posts/:id" element={<PostForm />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
        <Toaster />
      </Router>
    </PostProvaider>
  );
}
