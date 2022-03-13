import React from 'react';
import { Link, Navigate, useNavigate } from "react-router-dom";
import {useState,useEffect} from "react";
import "./Login.css";

function Login() {
//initial values
const initialvalues = {email:"", password:""}

const navigate = useNavigate();
// creating state and passing initialvalues.
const [formValues,setFormValues] = useState(initialvalues)

// creating states for errors with imitial value as empty objects.
const [formErrors,setFormErrors] = useState({})

// creating states for flags
const[isSubmit,setIsSubmit] = useState(false)


// function for changeHandler
const changeHandler = (e)=>{
    const { name, value }= e.target;
    setFormValues({...formValues,[name]:value});
};
 
// submitForm function
const submitForm = async (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    const response = await fetch("/api/user/login", {
        method: 'post',
        body: JSON.stringify({email:formValues.email, password:formValues.password}),
        headers: {
            'Content-Type': 'application/json'
        }
    })
    const data = await response.json();
    console.log(data);
    localStorage.setItem("authToken", data.token);
    if (data.success){
        console.log(data.success);
        navigate("/", { replace: true })
    }
    setIsSubmit(true);
  };


// useEffect for checking the validation criteria.
useEffect(()=>{
    if(Object.keys(formErrors).length === 0 && isSubmit){
        // consnpm iole.log(formValues)
    }
},[formErrors])

// function for validation
const validate = (values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.email){
        errors.email = "Email is required"
    } 
    else if (!regex.test(values.email)){
        errors.email = "Invalid email format"
    }

    if(!values.password){
        errors.password = "password is required"
    }
    else if (values.password.length < 4){
        errors.password = "password must be more than 4 characters";
    }
    else if (values.password.length > 10){
        errors.password = "password cannot exceed more than 10 characters";
    }
    return errors;
};

    
    return (
        
        <div className="login">
        
            <h1>Login</h1>
                <form onSubmit={submitForm}>
                    <input className='inputs' type="email" name="email" placeholder="Email" value={formValues.email}
                    onChange={changeHandler}
                    />
                    <p>{formErrors.email}</p>
                    <input className='inputs' type="password" name="password" placeholder="Password" value={formValues.password}
                    onChange={changeHandler}
                    />
                    <p>{formErrors.password}</p>
                    <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                </form>
        </div>
            
    )
}

export default Login