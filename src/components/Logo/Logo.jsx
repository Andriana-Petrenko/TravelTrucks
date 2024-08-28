import css from './Logo.module.css';
import icons from '../../assets/sprite.svg';
import { Link } from 'react-router-dom';
const Logo = () => {
  return (
      <Link to="/" className={css.logo}>
          <svg width="136" height="16" >
            <use href={`${icons}#Logo`} />
          </svg>
      </Link>
  )
}

export default Logo

