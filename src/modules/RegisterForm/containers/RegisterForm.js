import { withFormik } from 'formik';
import RegisterForm from '../components/RegisterForm';
import validation from '../../../utils/validation'

export default withFormik({
    validate: values => {
        return validation(values);
    },

    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'RegisterForm',
})(RegisterForm);