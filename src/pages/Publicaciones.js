import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
//Libreria
import toast from "react-hot-toast";
//Funcion listar y eliminar
import { getPostsRequests, deletePost } from "../services/posts";
import imagenes from "../assets/imagenes";

export default function Publicaciones() {
  const [posts, setPosts] = useState([]);

  //Lista los Posts
  const getPosts = async () => {
    try {
      const respuesta = await getPostsRequests();
      setPosts(respuesta);
      console.log(respuesta);
    } catch (error) {
      throw error;
    }
  };

  // Modal para eliminar personalisado
  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p className="font-body">
          ¿Seguro que quieres eliminar? 🥺
        </p>
        <div>
          <button className="btn btn-secondary text-white font-serif me-2"
            onClick={() => {
              borrarPost(id);
              toast.dismiss(t.id);
            }}
          >
            Borrar
          </button>
          <button onClick={() => toast.dismiss(t.id)} className="btn btn-primary text-white font-serif ">Cancelar</button>
        </div>
      </div>
    ));
  };

  //Elimina los Post
  const borrarPost = async (id) => {
    try {
      const res = await deletePost(id);
      getPosts();
      console.log(res);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getPosts();
  }, []);

  //Por si no hay una publicación
  if (posts.length === 0) {
    return (
      <section
        style={{
          minHeight: "100vh",
          background: `url(${imagenes.img4})`,
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mt-5" data-aos="fade-right">
              <h1 className="display-3">Publica Nuestras Fotos</h1>
              <p className="fs-6 my-3">
                Es hora de escribir nuestra historia 🙈
              </p>
            </div>
            <div className="mb-3 col-12 col-md-6 mt-3 mt-md-5">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6 d-flex justify-content-end">
                  <Link
                    className="btn btn-secondary font-serif text-white "
                    to="/nuevo"
                  >
                    Publicar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: `url(${imagenes.img4})`,
        backgroundSize: "cover",
      }}
    >
            <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 mt-5" >
              <h1 className="display-3">Publica Nuestras Fotos</h1>
              <p className="fs-6 my-3">
                Es hora de escribir nuestra historia 🙈
              </p>
            </div>
            <div className="mb-3 col-12 col-md-6 mt-3 mt-md-5">
              <div className="row">
                <div className="col-6"></div>
                <div className="col-6 d-flex justify-content-end">
                  <Link
                    className="btn btn-secondary font-serif text-white "
                    to="/nuevo"
                  >
                    Publicar
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
<div className="container">

      <div>
        <h1 className="my-3 fs-2">Posts ({posts.length})</h1>
      </div> 
      <div className="row">

      {posts.map((post) => (
        <div key={post._id} className="col-12 col-md-6 col-xl-4 mt-5" >
          <div className="tarjeta mb-3" data-aos="fade-up"
        data-aos-delay="400">
  
          <Link to={`/posts/${post._id}`} className="text-decoration-none ">
            {post.image && <img src={post.image.url} className="img-publicaciones"/>}
            <h3 className="my-2">{post.title}</h3>
            <p className="text-secondary">{post.description}</p>
            {/* <img src={post.image.url} alt={post.title} /> */}
          </Link>
          <div className="row">
           <div className="col-6"></div>
           <div className="col-6 d-flex justify-content-end">

          <button className="btn btn-secondary text-white font-serif"
            onClick={() => {
              handleDelete(post._id);
            }}
          >
            Borrar
          </button>
           </div>
          </div>
          </div>

        </div>
      ))}
      </div>
      <div className="d-flex ">
       <div className="col-6"></div>
       <div className="col-6 d-flex justify-content-end">

<Link to="/" className="btn btn-primary text-white font-serif my-3">Cerrar libro <i class="fa-solid fa-key"></i></Link>
       </div>
      </div>
    </div>
</div>
  );
}
