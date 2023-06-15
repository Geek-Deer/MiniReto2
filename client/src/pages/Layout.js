import { Outlet, Link } from "react-router-dom";
const Layout = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/Registro">Registro</Link>
          </li>
          <li>
            <Link to="/Update">Actualizar</Link>
          </li>
          <li>
            <Link to="/Borrar">Borrar</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  )
};

export default Layout;