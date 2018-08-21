import React from 'react'
import {Field, reduxForm} from 'redux-form';
import './Login.css';
import { Link } from 'react-router-dom';
import {
    Button,
    Form,
    FormGroup,
    Label,
    Input,
    FormText,
    Row,
    Col,
    Container
} from 'reactstrap';

const Login = props => {
    const {handleSubmit, pristine, reset, submitting} = props;
    const renderUsername = ({
        input,
        type,
        placeholder,
        id,
        meta: {
            touched,
            error
        }
    }) => {
        console.log(touched,"touched")
        return (
            <div>
                <input
                    {...input}
                    className="form-control"
                    placeholder={placeholder}
                    type={type}
                    id={id}/> {touched && error && <p style={{
                    color: 'red'
                }}>{error}</p>}
            </div>
        );
    };
    const renderPassword = ({
        input,
        type,
        placeholder,
        id,
        meta: {
            touched,
            error
        }
    }) => {
        console.log(type, input, "tpe")
        return (
            <div>
                <input
                    {...input}
                    className="form-control"
                    placeholder={placeholder}
                    type={type}
                    id={id}/> {touched && error && <p style={{
                    color: 'red'
                }}>{error}</p>}
            </div>
        );
    };
    return (
        <Container>
            <h1 className="title">Login Panel</h1>
            <form onSubmit={handleSubmit(values => console.log(values, "vsd"))}>
                <div>
                    <label>Username</label>
                    <div>
                        <Field
                            name="username"
                            component={renderUsername}
                            type="text"
                            placeholder="First Name"/>
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field
                            name="password"
                            component={renderPassword}
                            type="text"
                            placeholder="password"/>
                    </div>
                </div>
                    <p className="registration-title">Are you a new User? Click here for <Link className="reg" to="/registration">Registration</Link></p><br/>
                <Button className="login-button" color="primary">Login</Button>
               
            </form>
        </Container>

    )
}

const myValidator = values => {
    const errors={};
    if(!values.username){
        errors.username="Username is required!"
    }
    if(!values.password){
        errors.password="Password is required!"
    }
    console.log(errors,"error")
    return errors;
}

export default reduxForm({
    form: 'simple', // a unique identifier for this form
    validate: myValidator
})(Login)