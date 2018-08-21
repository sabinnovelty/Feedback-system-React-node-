
import { CREATE_STUDENT_SUCCESS,CREATE_STUDENT_PENDING,CREATE_STUDENT_ERROR } from '../../../actions/types';
import { createStudent } from '../../../actions/createStudent';
import React from 'react';
// const store=require('./../../../store/configureStore');


const HandleRegistration=(values,dispatch)=>{
    console.log(values,"values");
    // return dispatch(createStudent(values));
    // createStudent(values);
    // store.dispatch(createStudent);

}

export default HandleRegistration;