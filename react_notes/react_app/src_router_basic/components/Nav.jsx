import { Link, NavLink } from "react-router-dom"


const Nav = () => {
  return (
    <ul>
      <li>
        {/* Link yerine NavLink kullanırsak active sınıf özelliğini kullanabiliriz (bak App.css) */}
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/inst">Instructors</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  )
}

export default Nav
