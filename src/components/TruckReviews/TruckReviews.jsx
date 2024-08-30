import ClientForm from '../ClientForm/ClientForm'
import css from './TruckReviews.module.css'
const TruckReviews = () => {
  return (
    <div className={css.review}>
          <div className={css.review_wrapper}>TruckReviev</div>
          <ClientForm/>
      </div>
  )
}

export default TruckReviews