import css from './ClientForm.module.css'
import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { registerLocale} from "react-datepicker";
import enGB from 'date-fns/locale/en-GB';
import toast from 'react-hot-toast';

registerLocale('en-GB', enGB);

const Schema = Yup.object().shape({
    name: Yup.string().required('Name is required'),
    email: Yup.string().required('Email is required'),
    comment: Yup.string(),
    date: Yup.date().required('Date is required'),
});
const ClientForm = () => {
  return (
      <div className={css.form_wrapper}>
          <h3 className={css.client_title}>Book your campervan now</h3>
          <p className={css.client_text}>Stay connected! We are always ready to help you.</p>
          <Formik
              initialValues={{
                  name: '',
                  email: '',
                  date: '',
                  comment: ''
              }}
              validationSchema={Schema}
              onSubmit={(values, { resetForm }) => {    
                  toast.success('You successfully send form!');
                  resetForm();
              }}
            >
              {({ errors, values, touched,setFieldValue }) => (
                  <Form>
                      <div className={css.input_wrapper}>
                          <label htmlFor="name"></label>
                          <Field
                              className={css.input_text}
                              name="name"
                              type="text"
                              placeholder="Name*"/>
                          {touched.name && errors.name ? (<div className={css.errorMessage}>{errors.name}</div>) : null}
                          <label htmlFor="email"></label>
                          <Field
                              className={css.input_text}
                              name="email"
                              type="email"
                              placeholder="Email*" />
                          {touched.email && errors.email ? (<div className={css.errorMessage}>{errors.email}</div>) : null}
                          <label htmlFor="date"></label>
                          <DatePicker
                              selected={values.date}
                              onChange={(date) => setFieldValue('date', date)}
                              className={css.input_text}
                              placeholderText="Booking date*"
                              locale="en-GB"/>
                          {touched.date && errors.date ? (<div className={css.errorMessage}>{errors.date}</div>) : null}
                          <label htmlFor="comment"></label>
                          <Field
                              className={css.input_comment}
                              name="comment"
                              as="textarea"
                              placeholder="Comment" />
                      </div>
                      <button className={css.send_button} type="submit"> Send </button>
                  </Form>
              )}
          </Formik>
      </div>
    
  )
}

export default ClientForm