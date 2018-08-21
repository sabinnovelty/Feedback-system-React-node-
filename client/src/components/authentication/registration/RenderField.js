import React from 'react';
import {Button, Form,FormGroup,Label, Input,FormText,Row,Col,Container,FormFeedback} from 'reactstrap'

    export const renderUsername = ({
        input,
        meta: {
            touched,
            error,
            warning
        },
        ...custom
    }) => (
        <FormGroup>
            <input
                type="text"
                className="form-control"
                name="username"
                {...input}
                placeholder="username"/> {touched && error && <p style={{
                color: 'red'
            }}>{error}</p>}
        </FormGroup>
    );

    export const renderPassword = ({
        input,
        meta: {
            touched,
            error,
            warning
        },
        ...custom
    }) => (
        <FormGroup>
            <input
                type="password"
                className="form-control"
                name="password"
                {...input}
                placeholder="password"/> {touched && error && <p style={{
                color: 'red'
            }}>{error}</p>}
        </FormGroup>
    );

    export const renderCpassword = ({
        input,
        meta: {
            touched,
            error,
            warning
        },
        ...custom
    }) => (
        <FormGroup>
            <input
                type="password"
                className="form-control"
                name="cpassword"
                {...input}
                placeholder="retype password"/> {touched && error && <p style={{
                color: 'red'
            }}>{error}</p>}
        </FormGroup>
    );

    export const renderEmail = ({
        input,
        meta: {
            touched,
            error
        }
    }) => (
        <FormGroup>
            <input
                type="email"
                className="form-control"
                name="email"
                {...input}
                placeholder="Email"/> {touched && error && <p style={{
                color: 'red'
            }}>{error}</p>}
        </FormGroup>
    );


    export const renderBatch=({input,meta:{touched,error}})=>(
        <FormGroup>
            <input type="number" {...input} className="form-control" placeholder="enter your batch year"/>
            {touched && error && <p style={{color:'red'}}>{error}</p>}
        </FormGroup>
    )
    export const renderYear=({input,meta:{touched,error}})=>(
        <FormGroup>
            <select name="year" {...input} className="form-control">
            <option value="" selected>Year</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
            </select>
            {touched && error && <p style={{color:'red'}}>{error}</p>}
        </FormGroup>
    );

    export const renderSemester=({input,meta:{touched,error}})=>(
        <FormGroup>
            <select name="part" {...input} className="form-control">
            <option value="" selected>semester</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
                <option value="3rd">3rd</option>
                <option value="4th">4th</option>
                <option value="5th">5th</option>
                <option value="6th">6th</option>
                <option value="7th">7th</option>
                <option value="8th">8th</option>
            </select>
            {touched && error && <p style={{color:'red'}}>{error}</p>}
        </FormGroup>
    )

    export const renderPart=({input,meta:{touched,error}})=>(
        <FormGroup>
            <select name="part" {...input}  className="form-control">
            <option value="" selected>part</option>
                <option value="1st">1st</option>
                <option value="2nd">2nd</option>
            </select>
            {touched && error && <p style={{color:'red'}}>{error}</p>}
        </FormGroup>
    );

    export const renderImage=({input,meta:{touched,error}})=>(
            <FormGroup>
                <input type="file" {...input} />
                {touched && error && <p style={{color:'red'}}>{error}</p>}
            </FormGroup>
            
    )