import {useNavigate} from "react-router-dom";
import {Field, Form, Formik} from "formik";
import axios from "axios";
import {useContext} from "react";
import {MyContext} from "../MyContext";

export default function Login() {
    let navigate = useNavigate();
    let {setCurrentUser} = useContext(MyContext);
    return (
        <>
            <h1>Login</h1>
            <Formik
                initialValues={
                    {
                        username: '',
                        password: ''
                    }
                }
                onSubmit={values => {
                    axios.post("http://localhost:3000/login", values)
                        .then((res) => {
                            alert('Đăng nhập thành công!');
                            setCurrentUser(res.data);
                            navigate('/home')
                        }).catch(e => {
                            alert('Sai TK, MK')
                    })
                }}
            >
                <Form>
                    <Field name={'username'}/>
                    <Field name={'password'}/>
                    <button>Login</button>
                </Form>
            </Formik>
        </>
    )
}