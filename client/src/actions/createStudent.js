import { CREATE_STUDENT_SUCCESS,CREATE_STUDENT_PENDING,CREATE_STUDENT_ERROR } from './types';
import StudentService from './../services/studentService';

export const createStudent=(data)=>dispatch=>{
    console.log("action called")
    dispatch({
        type:CREATE_STUDENT_SUCCESS
    })
        // StudentService.createStudent("http://localhost:5000/api/auth/registrations")
        // .then(res=>dispatch({
        //         type:CREATE_STUDENT_SUCCESS
        // }))
}

export const actionTest=(data)=>{
    return{
        type:CREATE_STUDENT_SUCCESS,
        payload:data
    }
   
}

export const getData=(data)=>dispatch=>{
    console.log(data,"getdaata actionn called")
    dispatch({
        type:CREATE_STUDENT_SUCCESS,
        payload:data
    })
}