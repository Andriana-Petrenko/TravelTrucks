import { useSelector } from 'react-redux';
import ClientForm from '../ClientForm/ClientForm'
import Features from '../Features/Features'
import css from './TruckFeatures.module.css'
import { selectTruck } from '../../redux/truck/selectors';
const TruckFeatures = () => {
    const truck = useSelector(selectTruck);
  return (
      <div className={css.feature}>
          <div className={css.feature_wrapper}>
              <Features truck={truck}/>
              <h3 className={css.equipment_title}>Vehicle details</h3>
              
                  <div className={css.truck_info}> 
                      <div className={css.truck_category}><p>Form </p><p>{truck.form}</p></div>
                      <div className={css.truck_category}><p>Length</p><p>{truck.length}</p></div>
                      <div className={css.truck_category}><p>Width</p><p>{truck.width}</p></div>
                      <div className={css.truck_category}><p>Height</p><p>{truck.height}</p></div>
                      <div className={css.truck_category}><p>Tank</p><p>{truck.tank}</p></div>
                      <div className={css.truck_category}><p>Consumption</p><p> {truck.consumption}</p></div>
                </div>
          </div>

          <ClientForm/>
      </div>
  )
}

export default TruckFeatures