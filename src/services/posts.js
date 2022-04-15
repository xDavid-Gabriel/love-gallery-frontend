import axios from "axios";

// const URL = "https://love-gallery.herokuapp.com/api/posts";
const URL = process.env.REACT_APP_API;

const getPostsRequests = async () => {
  try {
    const { data } = await axios.get(URL);
    return data;
  } catch (error) {
    throw error;
  }
};

const createPost = async (nuevoPost) => {
  try {
    const form =  new FormData()
    for(let key in  nuevoPost){
       form.append(key,  nuevoPost[key])
    }

    const headers = {
      "Content-Type": "multipart/form-data",
    };

    const { data } = await axios.post(URL, form, { headers });
    return data;
  } catch (error) {
    console.log(error);
  }
};

const getPostPorId = async (id) => {
  try {
    const { data } = await axios.get(`${URL}/${id}`);
    return data;
  } catch (error) {
    throw error;
  }
};

const editarPostPorId = async (id, editPost) => {
  try {
    // const headers = {
    //   "Content-Type": "application/json",
    // };
    const form =  new FormData()
    for(let key in  editPost){
       form.append(key,  editPost[key])
    }

    const headers = {
      "Content-Type": "multipart/form-data",
    };
     const actualizado =  await axios.put(`${URL}/${id}`, form, { headers });
    return actualizado; //resolve
  } catch (error) {
    throw error;
  }
};

const deletePost = async (id) => {
  try {
    await axios.delete(`${URL}/${id}`);
    return "Publicación eliminada";
  } catch (error) {
    console.log(error);
  }
};

export {
  getPostsRequests,
  createPost,
  getPostPorId,
  editarPostPorId,
  deletePost,
};
/** try {
    const data = await axios.get(URL);
    console.log(data);
  } catch (error) {
    console.log(error);
  } */
