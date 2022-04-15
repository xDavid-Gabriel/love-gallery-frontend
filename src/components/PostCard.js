
import toast from "react-hot-toast";
import { deletePost } from "../services/posts";



export default function PostCard({ post }) {



  const handleDelete = (id) => {
    toast((t) => (
      <div>
        <p>¿Seguro que quieres eliminar?<strong>{id}</strong></p>
        <div>
          <button onClick={()=>borrarPost(id)}>Borrar</button>
          <button onClick={()=>toast.dismiss(t.id)}>Cancelar</button>
        </div>
      </div>
    ));
  };

    const borrarPost = async(id)=>{
    const res = await deletePost(id)
    console.log(res);
   }


  return (
    <div>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
      <button onClick={()=>{handleDelete(post._id)}}>Borrar</button>
    </div>
  );
}
