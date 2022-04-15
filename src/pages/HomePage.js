import { Link } from "react-router-dom"
import imagenes from "../assets/imagenes"

export default function HomePage() {
  return (
    <div style={{minHeight:"100vh", background:`url(${imagenes.img1})`, backgroundSize:"cover" }}>
    <div className="container overflow-hidden">
      <div className="min-vh-100 d-flex justify-content-center align-items-center " data-aos="zoom-in">

      <img src={imagenes.img2}alt="..." className="aventura" />
      </div>
      <Link to="/intro" className="boton-intro">
        <img src={imagenes.img3} alt="..." className="flecha"/>
      </Link>
    </div>
    </div>
  )
}
