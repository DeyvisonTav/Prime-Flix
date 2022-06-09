import { RoutesApp } from "./routes";
import { ToastContainer } from "react-toastify";
import  'react-toastify/dist/ReactToastify.css' ;
import { Header } from "./components/Header";
export function App() {
  return (
    <div className=" flex justify-center items-center flex-col font-sans" >
       <ToastContainer autoClose={3000}/>
       
       <RoutesApp/>
    </div>
  )
}