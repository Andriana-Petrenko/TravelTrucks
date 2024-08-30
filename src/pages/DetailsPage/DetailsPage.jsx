
import { Helmet } from "react-helmet-async"
import { useDispatch} from "react-redux";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { fetchTruckDetails } from "../../redux/truck/operations";
import css from "./DetailsPage.module.css"
import DetailedInfo from "../../components/DetailedInfo/DetailedInfo";
import { Toaster } from "react-hot-toast";

const DetailsPage = () => {
     const dispatch = useDispatch();
     const { id } = useParams();
     
  useEffect(() => {
   dispatch(fetchTruckDetails(id));
  }, [dispatch,id]);
   
  return (
      <>
          <Helmet>
              <title>Details Page</title>
          </Helmet>
          <Toaster position="top-center" reverseOrder={false} />
          <section className={css.detailed_container} >
               <DetailedInfo/> 
          </section>
      </>
  )
}

export default DetailsPage