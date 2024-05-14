import "./App.css";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Intro from "./components/Intro";
import Trending from "./components/Trending";
import SuperHero from "./components/Superhero";
import Login from "./components/Login";
import SemuaList from "./layout/SemuaList";
import LoadVideo from "./components/LoadVideo";
import Register from "./components/Register";

import "./style/landingPage.css"
import videoAntman from "./vid/Black widow/blckwdowcbrtailicinema3satu.mkv";

function App() {

  const router = createBrowserRouter([
    {
      path: "/",
      element: 
      <MainLayout
        layout="myBG">
          <Intro />
      </MainLayout>,
    },
    {
      path: "/trending",
      element: 
      <MainLayout
        layout="trending">
        {<Trending />}
      </MainLayout>,
    },
    {
      path: "/superhero",
      element: 
      <MainLayout
        layout="superhero">
        <SuperHero />
      </MainLayout>,
    },
    {
      path: "/login",
      element: 
      <MainLayout
        layout="login">
        <Login />
      </MainLayout>,
    },
    {
      path: "/register",
      element: 
      <MainLayout
        layout="login">
        <Register />
      </MainLayout>,
    },
    {
      path: "/semualist",
      element: 
      <MainLayout
        layout="trending">
        <SemuaList />
      </MainLayout>,
    },
    {
      path: "/loadvideo/antman",
      element: 
      <MainLayout
        layout="myBG">
          <LoadVideo video_link={videoAntman} />
      </MainLayout>,
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>  
    )
}

export default App
