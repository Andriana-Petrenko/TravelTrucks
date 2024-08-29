
import { Link } from "react-router-dom"
import css from "./TruckItem.module.css"
import { fetchTruckDetails } from "../../redux/truck/operations";
import { useDispatch } from "react-redux";
import icons from '../../assets/sprite.svg';
import { calculateAverageRating } from "../../utils/calculateRating";
import Features from "../Features/Features";

const TruckItem = ({truck}) => {
   const dispatch = useDispatch();
  return (
      <div className={css.item_wrapper}>
      {truck.gallery?.[0]?.thumb && (
        <img
          className={css.photo}
          src={`${truck.gallery[0].thumb}`}
          width="292"
          alt={`${truck.name}`}
        />
      )}
      <div className={css.info_wrapper}>
          <div className={css.name_wrapper}>
              <h2 className={css.name_title}>{truck.name}</h2>
                  <div className={css.favourite_wrapper}>
                      <p>{`€ ${Number(truck.price).toFixed(2)}`}</p>
                      <svg className={css.icon} width="26" height="24">
                          <use href={`${icons}#heard`} />
                      </svg>
                  </div>
          </div>
              <div className={css.rating_wrapper}>
                  <svg className={css.icon} width="16" height="16">
                        <use href={`${icons}#icon-Rating`} />
                  </svg>
                  <p className={css.reviews}>{calculateAverageRating(truck.reviews)} ({truck.reviews.length} Reviews)</p>  
                  <svg className={css.icon} width="20" height="20">
                        <use href={`${icons}#Map`} />
                  </svg> {truck.location}
              </div>
          <p className={css.item_description}>{`${truck.description.substring(0, 60)}` + "..."}</p>
              <Features truck={truck} />

              <Link to={`/catalog/${truck.id}`}>
            <button type='button' className={css.item_button} onClick={() => dispatch(fetchTruckDetails(truck.id))}> 
            Show more</button>
         </Link>
      </div>
    </div>
  )
}
export default TruckItem

