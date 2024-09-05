
import { Link } from "react-router-dom"
import css from "./TruckItem.module.css"
import icons from '../../assets/sprite.svg';
import Features from "../Features/Features";
import { useDispatch, useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { toggleFavourite } from "../../redux/favourites/slice";

const TruckItem = ({ truck }) => {
  const dispatch = useDispatch();
  const favourites = useSelector(selectFavourites);
  const isFavourite = Array.isArray(favourites) && favourites.includes(truck.id);

  const handleToggleFavourite = () => {
    dispatch(toggleFavourite(truck.id));
  };
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
            <svg
              width="26"
              height="24"
              onClick={handleToggleFavourite}
              fill={isFavourite ? "#e44848" : "#101828"}
              cursor='pointer'>
              <use href={`${icons}#heard`} />
            </svg>
          </div>
        </div>
        <div className={css.rating_wrapper}>
          <svg width="16" height="16">
            <use href={`${icons}#icon-Rating`} />
          </svg>
          <p className={css.reviews}>{truck.rating} ({truck.reviews.length} Reviews)</p>
          <svg width="20" height="20">
            <use href={`${icons}#Map`} />
          </svg> {truck.location}
        </div>
        <p className={css.item_description}>{`${truck.description.substring(0, 60)}` + "..."}</p>
        <Features truck={truck} />
        <Link to={`/catalog/${truck.id}`} target="_blank" rel="noopener noreferrer">
          <button type='button' className={css.item_button}>Show more</button>
        </Link>
      </div>
    </div>
  )
}
export default TruckItem

