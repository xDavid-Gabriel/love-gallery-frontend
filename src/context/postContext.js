import { createContext, useContext } from "react";


const postContext = createContext();

export const usePosts = () => {
  const context = useContext(postContext);
  return context;
};

export const PostProvaider = ({ children }) => {
 
  const letra = "Hola"
  console.log(letra);

  return (
    <postContext.Provider value={{letra}}>
      {children}
    </postContext.Provider>
  );
};
