import { useSelector } from 'react-redux';
import ClientForm from '../ClientForm/ClientForm'
import css from './TruckReviews.module.css'
import { selectTruck } from '../../redux/truck/selectors';
import icons from '../../assets/sprite.svg';
import { nanoid } from 'nanoid'; 

const TruckReviews = () => {
    const truck = useSelector(selectTruck);
    const totalStars = 5;
  return (
    <div className={css.review}>
          <ul className={css.list}>
        {(truck.reviews.length === 0)? (<p>Sorry, there are no reviews!</p> ):truck.reviews.map(item => (
          <li className={css.list_tem} key={nanoid()}>
            <div className={css.reviewer_wrapper} >
                <div className={css.reviewer_name}>{item.reviewer_name.charAt(0)}</div>
                    <div>
                        <h3>{item.reviewer_name}</h3>
                   {[...Array(totalStars)].map((_, starIndex) => (
                      <svg  width="16" height="16"  fill={starIndex < item.reviewer_rating ? "#ffc531" : "#f2f4f7"}  key={nanoid()}>
                          <use href={`${icons}#icon-Rating-1`} />
                      </svg>))}   
                    </div>
            </div>
                <p className={css.comment} >{item.comment}</p>
          </li>
        ))}
      </ul>
          <ClientForm/>
    </div>
  )
}

export default TruckReviews