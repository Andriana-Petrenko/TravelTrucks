import { useSelector } from "react-redux";
import css from "./TruckList.module.css";
import TruckItem from "../TruckItem/TruckItem";
import { selectFilteredTrucks } from "../../redux/filters/selectors";

const TruckList = () => {

    const filteredTrucks = useSelector(selectFilteredTrucks);
    console.log(filteredTrucks);
  return (
    <ul className={css.list}>
        {(filteredTrucks.length === 0)? (<p>Sorry, there are no campers,try again!</p> ):filteredTrucks.map(item => (
          <li className={css.list_tem} key={item.id}>
            <TruckItem truck={item}/>
          </li>
        ))}
      </ul>
  )
}
export default TruckList