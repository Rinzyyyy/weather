import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Manual from "./pages/Manual";
import Page404 from "./pages/Page404";
import Layout from "./Layout";
import "./styles/style.css";

function App() {
  let [backimg, setImg] = useState("");
  let [auther, setAuther] = useState("");
  let option = {
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundImage: `url(${backimg})`,
  };
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout option={option} auther={auther} />}>
          <Route
            index
            element={<Home setImg={setImg} setAuther={setAuther} />}
          ></Route>
          <Route path="manual" element={<Manual />}></Route>
          <Route path="*" element={<Page404 />}></Route>
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
