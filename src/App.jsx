// import * as $ from "jquery"
import 'jquery';
import './App.css'
import Home from './components/Home/Home'
import { useEffect } from "react";


function App() {


  useEffect(() => {
    $(document).ready(() => {
      console.log("✅ jQuery Loaded Successfully!");
    });
  }, []);


  return (
    <>
    <Home/>
    </>
  )
}

export default App
