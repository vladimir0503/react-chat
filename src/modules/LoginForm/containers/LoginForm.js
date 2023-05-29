import { withFormik } from 'formik';
import LoginForm from '../components/LoginForm';
import validation from '../../../utils/validation';

export default withFormik({
    validate: values => {
        return validation(values, true);
    },

    handleSubmit: (values, { setSubmitting }) => {
        console.log(values);
        setTimeout(() => {
            alert(JSON.stringify(values, null, 2));
            setSubmitting(false);
        }, 1000);
    },

    displayName: 'LoginForm',
})(LoginForm);