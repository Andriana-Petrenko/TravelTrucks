import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import css from "./Filters.module.css";
import icons from '../../assets/sprite.svg';
import { useDispatch } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";



const LocationSchema = Yup.object().shape({
  location: Yup.string().required('Location is required'),
});
const Filters = () => {
   const dispatch = useDispatch();
  return (
      <div className={css.filter_wrapper}>
          
           <Formik
        initialValues={{
          location: '',
          form: '',
          features: [], }}
        validationSchema={LocationSchema}
        onSubmit={values => {
          console.log(values);
          dispatch(changeFilter(values));
               
                
              }}
            >
              {({ errors, touched }) => (
                <Form>
            <div className={css.input_wrapper}>
              <label  className={css.filter_title} htmlFor="location">Location</label>
              <Field
                className={css.input_location}
                name="location"
                type="text"
                placeholder="Enter a location"
              />
              <svg className={css.icon} width="20" height="20">
                <use href={`${icons}#Map`} />
              </svg>
            </div>
            {errors.location && touched.location ? (
              <div className={css.errorMessage}>{errors.location}</div>
            ) : null}
             
            
         
            <p className={css.filter_title}>Filters</p>
            <h3 className={css.equipment_title}>Vehicle equipment</h3>
            <div role="group" aria-labelledby="features-group" className={css.group_wrapper}>
              <label>
                <Field type="checkbox" name="features" value="AC" />
                AC
              </label>
              <label>
                <Field type="checkbox" name="features" value="automatic" />
                Automatic
              </label>
              <label>
                <Field type="checkbox" name="features" value="kitchen" />
                Kitchen
              </label>
              <label>
                <Field type="checkbox" name="features" value="TV" />
                TV
              </label>
              <label>
                <Field type="checkbox" name="features" value="bathroom" />
                Bathroom
              </label>
              
          </div>

            
         <h3 className={css.equipment_title}>Vehicle type</h3>
           <div role="group" aria-labelledby="form-group" className={css.group_wrapper}>
              <label>
                <Field type="radio" name="form" value="van" />
                Van
              </label>
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                Fully Integrated
              </label>
              <label>
                <Field type="radio" name="form" value="alcove" />
                Alcove
              </label>
            </div>
            {errors.bodyType && touched.bodyType ? (
              <div className={css.error}>{errors.bodyType}</div>
            ) : null}


            <button className={css.search_button} type="submit"> Search </button>
          </Form>
              )}
      </Formik>
      

      
      </div>
  )
}

export default Filters