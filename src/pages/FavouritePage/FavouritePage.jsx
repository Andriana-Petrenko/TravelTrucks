import { useSelector } from "react-redux";
import { selectFavourites } from "../../redux/favourites/selectors";
import { selectTrucks } from "../../redux/truck/selectors";
import TruckList from "../../components/TruckList/TruckList";
import css from "./FavouritePage.module.css"

const FavouritePage = () => {
    const favourites = useSelector(selectFavourites);
    const allTrucks = useSelector(selectTrucks);

  const favouriteTrucks = allTrucks.filter(truck => favourites.includes(truck.id));

  return (
      <div className={css.favourite_wrapper}>
          <h2 className={css.favourite_title}>Your Favourites</h2>
          <div className={css.favourite_list}><TruckList filteredTrucks={favouriteTrucks} /></div>
      </div>
  )
}

export default FavouritePage