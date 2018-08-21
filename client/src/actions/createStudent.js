import { CREATE_STUDENT_SUCCESS,CREATE_STUDENT_PENDING,CREATE_STUDENT_ERROR } from './types';

export const createStudent=(data)=>{
    console.log("action callled");
    return {
        type:CREATE_STUDENT_PENDING
    }
}