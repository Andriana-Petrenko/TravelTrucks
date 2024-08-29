import { useEffect } from "react";
import { Helmet } from "react-helmet-async"
import { useDispatch } from "react-redux";
import { fetchTrucks } from "../../redux/truck/operations";
import TruckList from "../../components/TruckList/TruckList";
import Filters from "../../components/Filters/Filters";
import css from "./CatalogPage.module.css"
const CatalogPage = () => {
    const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTrucks());
  }, [dispatch]);
  return (
    <>
        <Helmet>
            <title>Catalog Page</title>
        </Helmet>
        <section className={css.catalog_container}>
            <Filters/>
            <TruckList/>
        </section>
    </>
  )
}

export default CatalogPage