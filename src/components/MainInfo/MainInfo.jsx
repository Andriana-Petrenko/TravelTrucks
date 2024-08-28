import { Link } from 'react-router-dom'
import css from './MainInfo.module.css'

const MainInfo = () => {
  return (
     <section className={css.main_container}>
          <div className={css.main_wrapper}>
              <h1 className={css.main_title}>Campers of your dreams</h1>
              <p className={css.main_text}>You can find everything you want in our catalog</p>
              <Link to="/catalog"><button type='button' className={css.main_button}>
                View Now</button>
              </Link>
          </div>
     </section>
  )
}


export default MainInfo