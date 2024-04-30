import { Outlet, Link } from "react-router-dom";
import "../css/style.css"
const Layout = () => {
  return (
    <>
      <nav className="navbar1">
        <ul className="navbar1">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/blogs">Blogs</Link>
          </li>
          <li>
            <Link to="/contact">Contact</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;