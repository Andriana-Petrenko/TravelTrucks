import { NavLink } from 'react-router-dom'
import css from './Navigation.module.css'
import clsx from "clsx"

const activeLinkClass = ({ isActive }) => {
  return clsx(css.navLink, isActive && css.active);
};

const Navigation = () => {
  
  return (
      <>
          <nav className={css.nav}>
              <NavLink to='/' className={activeLinkClass}>Home</NavLink>
              <NavLink  to='/catalog' className={activeLinkClass}>Catalog</NavLink>
        </nav>
      </>
  )
}

export default Navigation