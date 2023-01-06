import { Outlet } from "react-router-dom";
import Footer from "../components/Footer";
import Nav from "../components/Nav";

const RootLayout = () => {
  return (  
    <div className="App">
      <header>
        <Nav />
      </header>
      <main className="main">
        <Outlet />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}
 
export default RootLayout;