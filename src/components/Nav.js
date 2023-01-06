import { NavLink } from "react-router-dom";

const Nav = ({ title }) => {
  return (  
    <nav>
      <h1>{ title }</h1>
      <ul>
        <li>
          <NavLink to='/'>Home</NavLink>
        </li>
        <li>
          <NavLink to='create'>Create</NavLink>
        </li>
      </ul>
    </nav>
  );
}

Nav.defaultProps ={
  title: 'Nav'
}

export default Nav;