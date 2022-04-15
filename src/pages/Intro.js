import imagenes from "../assets/imagenes";
import { Link } from "react-router-dom";

export default function Intro() {
  return (
    <section
      style={{
        minHeight: "100vh",
        background: `url(${imagenes.img4})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row position-relative min-vh-100 align-items-center">
          <div className="my-5 my-md-0 col-12 col-md-6" data-aos="fade-right">
            <h1 className="display-3">La Aventura Nos Aguarda</h1>
            <p className="fs-6 my-3">Promete que estaremos juntos pero prometelo con el corazón 🥺</p>
            <Link to="/publicaciones" className="btn btn-secondary text-white font-serif fs-5">
              Entrar
            </Link>
          </div>
          <div className="col-12 col-md-6" >
            <img src={imagenes.img5} alt="..." className="carl-elie" />
          </div>
        </div>
      </div>
    </section>
  );
}
