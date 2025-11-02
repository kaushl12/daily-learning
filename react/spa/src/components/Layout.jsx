import { Outlet } from "react-router-dom";
import Footer from "./Footer";
import Header from "./Header";


function Layout() {
  return (
    <div>
      <Header/>

      <div style={{height:"81vh" ,background:"grey"}}>
        <Outlet/>
      </div>
      <Footer/>
       
    </div>

  );
}

export default Layout;
