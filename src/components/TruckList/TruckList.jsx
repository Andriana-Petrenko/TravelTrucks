
import css from "./TruckList.module.css";
import TruckItem from "../TruckItem/TruckItem";

const TruckList = ({filteredTrucks}) => {

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