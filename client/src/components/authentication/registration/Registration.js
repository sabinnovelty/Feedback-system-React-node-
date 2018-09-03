import React from 'react';
import './Registration.css';
import StudentModel from './../../../model/Student';
import {Field, reduxForm} from 'redux-form';
// import HandleRegistration from './HandleRegistration';
import {createStudent,actionTest,getData} from './../../../actions/createStudent';
import { renderUsername,renderPassword,renderCpassword,renderEmail,
    renderBatch,renderYear,renderSemester,renderPart} from './RenderField';
import { registrationValidate } from './ValidationForm'
import {Button, Form,FormGroup,Label, Input,FormText,Row,Col,Container,FormFeedback} from 'reactstrap';
import { connect } from 'react-redux';

const Registration = props => {

    const {handleSubmit,dispatch} = props;
    
    const onHandleSubmit=(values)=>{
            console.log(values,props,"props");
            props.dispatch(getData(values))
            // props.dispatch(createStudent(values));

    }

    return (
        <Container>
            <form onSubmit={handleSubmit(onHandleSubmit)}>
            <h1 className="heading">Student Registration Form</h1>
                <div>
                    <FormGroup>
                        <label htmlFor="firstName">Username</label>
                        <Field name="username" component={renderUsername} type="text"/>
                    </FormGroup>
                </div>
                <div>
                    <FormGroup>
                        <label htmlFor="firstName">Password</label>
                        <Field name="password" component={renderPassword} type="text"/>
                    </FormGroup>
                </div>

                <div>
                    <FormGroup>
                        <label htmlFor="firstName">Confirm Password</label>
                        <Field name="cpassword" component={renderCpassword} type="text"/>
                    </FormGroup>
                </div>

                <div>
                    <FormGroup>
                        <label htmlFor="firstName">Email</label>
                        <Field name="email" component={renderEmail} type="text"/>
                    </FormGroup>
                </div>

                <div>
                    <FormGroup>
                        <Row>
                            <Col>
                                <Field name="batch" component={renderBatch} type="number"/>
                            </Col>
                            <Col>
                                <Field name="year" component={renderYear} type="select"/>
                            </Col>
                            <Col>
                                <Field name="semester" component={renderSemester} type="select"/>
                            </Col>
                            <Col>
                                <Field name="part" component={renderPart} type="select"/>
                            </Col>
                        </Row>
                       
                    </FormGroup>
                </div>

                {/* <div>
                    <FormGroup>
                        <label htmlFor="firstName">Your Pic</label>
                        <Field name="image" component={renderImage} type="file"/>
                    </FormGroup>
                </div> */}

                <Button className="button" color="primary" type="submit">Submit</Button>
            </form>
        </Container>
    )
}
const  mapDispatchToProps = (dispatch, ownProps) => {
    return {
        getData:getData
    }
}

const RegistrationForm=reduxForm ({ form: 'RegistrationForm', validate: registrationValidate })(Registration);

const connectRegisterPage=connect(null,mapDispatchToProps)(RegistrationForm);

export { connectRegisterPage as default };