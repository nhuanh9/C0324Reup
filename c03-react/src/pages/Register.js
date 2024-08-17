import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useNavigate} from "react-router-dom";

export default function Register() {
    let navigate = useNavigate();
    return (
        <>
            <h1>Register</h1>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                onSubmit={values => {
                    axios.post("http://localhost:3000/register", values)
                        .then((res) => {
                        alert('Đăng ký thành công!');
                        navigate('/')
                    })
                }}
            >
                <Form>
                    <Field name={'username'}/>
                    <Field name={'password'}/>
                    <button>Register</button>
                </Form>
            </Formik>
        </>
    )
}