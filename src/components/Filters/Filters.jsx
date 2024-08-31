import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import css from "./Filters.module.css";
import icons from '../../assets/sprite.svg';
import { useDispatch, useSelector } from "react-redux";
import { changeFilter } from "../../redux/filters/slice";
import { selectFilters } from "../../redux/filters/selectors";



const LocationSchema = Yup.object().shape({
  location: Yup.string(),
});
const Filters = () => {
  const dispatch = useDispatch();
  const filters = useSelector(selectFilters);
  return (
      <div className={css.filter_wrapper}>
          
           <Formik
        initialValues={{
          location: filters.location,
          form: filters.form,
          features: filters.features, }}
        validationSchema={LocationSchema}
        onSubmit={values => {
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
                placeholder="City"
              />
              <svg className={css.icon} width="20" height="20">
                <use href={`${icons}#Map`} />
              </svg>
            </div>
            {errors.location ? (
              <div className={css.errorMessage}>{errors.location}</div>
            ) : null}
             
            
         
            <p className={css.filter_title}>Filters</p>
            <h3 className={css.equipment_title}>Vehicle equipment</h3>
            <div role="group" aria-labelledby="features-group" className={css.group_wrapper}>
              <label>
                <Field type="checkbox" name="features" value="AC" />
                <p>
                  <svg  width="20" height="30">
                          <use href={`${icons}#ac`} />
                  </svg>
                  AC
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="automatic" />
                <p>
                  <svg  width="20" height="30">
                          <use href={`${icons}#diagram`} />
                  </svg>
                  Automatic
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="kitchen" />
                <p>
                  <svg  width="20" height="30">
                          <use href={`${icons}#cup-hot`} />
                  </svg>
                  Kitchen
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="TV" />
                <p>
                  <svg  width="20" height="30">
                          <use href={`${icons}#tv`} />
                  </svg>
                  TV
                </p>
              </label>
              <label>
                <Field type="checkbox" name="features" value="bathroom" />
                  <p>
                    <svg width="20" height="30">
                            <use href={`${icons}#water`} />
                    </svg>
                    Bathroom
                  </p>
              </label>
              
          </div>

            
         <h3 className={css.equipment_title}>Vehicle type</h3>
           <div role="group" aria-labelledby="form-group" className={css.group_wrapper}>
              <label>
                <Field type="radio" name="form" value="panelTruck" />
                <p>
                  <svg width="32" height="32">
                            <use href={`${icons}#van`} />
                  </svg>
                  Van
                </p>
              </label>
              <label>
                <Field type="radio" name="form" value="fullyIntegrated" />
                <p>
                  <svg width="32" height="32">
                            <use href={`${icons}#full`} />
                  </svg>
                  Fully Integrated
                </p>
              </label>
              <label>
                <Field type="radio" name="form" value="alcove" />
                <p>
                  <svg width="32" height="32">
                            <use href={`${icons}#alcove`} />
                  </svg>
                  Alcove
                </p>
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