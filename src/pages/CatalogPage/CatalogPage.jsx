import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async"
import { useDispatch, useSelector} from "react-redux";
import { fetchTrucks } from "../../redux/truck/operations";
import TruckList from "../../components/TruckList/TruckList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css"
import { selectFilteredTrucks } from "../../redux/filters/selectors";
import { isLoading } from "../../redux/truck/selectors";


const CatalogPage = () => {
  const dispatch = useDispatch();
  const filteredTrucks = useSelector(selectFilteredTrucks);
  const loading = useSelector(isLoading); 
  const [visibleCount, setVisibleCount] = useState(4);
  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);

  useEffect(() => {
    setVisibleCount(4); 
  }, [filteredTrucks]);
  
  const onClickButton = () => {
    setVisibleCount((prevCount) => prevCount + 4);
  };
  
  return (
    <>
        <Helmet>
            <title>Catalog Page</title>
        </Helmet>
        <section className={css.catalog_container}>
            <Filters/>
        <TruckList filteredTrucks={filteredTrucks.slice(0, visibleCount)} />
        </section>
      {!loading && visibleCount < filteredTrucks.length && (
        <button className={css.search_button} type="button" onClick={onClickButton}>
          Load more
        </button>
      )}
        
    </>
  )
}

export default CatalogPage