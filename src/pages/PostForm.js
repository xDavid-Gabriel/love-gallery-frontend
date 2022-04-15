import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
//Crear Posts y obtener por id
import { createPost, editarPostPorId, getPostPorId } from "../services/posts";
import imagenes from "../assets/imagenes";

export default function PostForm() {
  const navigate = useNavigate();
  const params = useParams();
  console.log(params.id);

  const [posts, setPosts] = useState({
    title: "",
    description: "",
    image: null,
  });

  const nuevoPost = async (post) => {
    try {
      await createPost(post);
      navigate("/publicaciones");
    } catch (error) {
      throw error;
    }
  };

  const obtenerPostPorId = async (id) => {
    const res = await getPostPorId(id);
    console.log(res);
    setPosts(res);
    return res;
  };

  const actualizarPost = async (id, post) => {
    try {
      const res = await editarPostPorId(id, post);
      // setPosts(posts.map((pos) => (pos._id === id ? res.data : pos)));
      console.log(res.data);
      navigate("/publicaciones");
    } catch (error) {
      throw error;
    }
  };

  // const verifica = async () => {
  //   if (params.id) {
  //     const post = await obtenerPostPorId(params.id);
  //     console.log(post);
  //     setPosts({
  //       title: post.title,
  //       description: post.description,
  //     });
  //   }
  // };

  useEffect(() => {
    (async () => {
      if (params.id) {
        const post = await obtenerPostPorId(params.id);
        console.log(post);
        setPosts({
          title: post.title,
          description: post.description,
        });
      }
    })();
    //  verifica();
  }, [params.id]);

  return (
    <section
      style={{
        minHeight: "100vh",
        background: `url(${imagenes.img4})`,
        backgroundSize: "cover",
      }}
    >
      <div className="container">
        <div className="row min-md-vh-100 align-items-center">
          <h1 className="my-4" data-aos="fade-right">Aqui Crea Nuestra Historia</h1>
          <Formik
            initialValues={posts}
            enableReinitialize
            validationSchema={Yup.object({
              title: Yup.string().required("El titulo es requerido"),
              description: Yup.string().required("La descripción es requerida"),
              //image: Yup.mixed().required("La imagen es requerida")
            })}
            onSubmit={async (values, actions) => {
              if (params.id) {
                await actualizarPost(params.id, values);
              } else {
                await nuevoPost(values);
              }
              actions.resetForm();
              actions.setSubmitting(false);
            }}
          >
            {({ handleSubmit, setFieldValue, isSubmitting }) => (
              <Form onSubmit={handleSubmit} className="col-12 col-md-6">
                <div className="mt-3">

                <label className="font-serif d-block fs-3">Titulo</label>
                <Field
                  
                  name="title"
                  placeholder="Pon nuestro titulo"
                  className="input font-body"
                />
                <ErrorMessage
                  component="p"
                  className="requerido"
                  name="title"
                />
                </div>
                <div className="mt-3">

                <label className="font-serif d-block fs-3">Descripción</label>
                <Field
                  component="textarea"
                  rows="4"
                  name="description"
                  placeholder="Pon nuestra descripción"
                  className="input font-body "
                />
                <ErrorMessage
                  component="p"
                  className="requerido"
                  name="description"
                />
                </div>
                <label className="font-serif d-block fs-3">Imagen</label>
                <input
                className="w-100 form-control my-3 font-body"
                  type="file"
                  name="image"
                  onChange={(e) => setFieldValue("image", e.target.files[0])}
                />
                <ErrorMessage
                  component="p"
                  name="image"
                  className="requerido"
                />
                <div className="row">
                <div className="col-6"></div>
                <div className="col-6 d-flex justify-content-end my-3">
                <button type="submit" className="btn btn-secondary font-serif text-white" disabled={isSubmitting}>
                  {isSubmitting ? "Cargando" : "Guardar"}
                </button></div>  
                </div>
                
              </Form>
            )}
          </Formik>
          <div className="col-12 col-md-6 d-flex justify-content-center" data-aos="zoom-in-left">
            <img src={imagenes.img6} alt="..." className="img-form" />
          </div>
        </div>
      </div>
    </section>
  );
}
