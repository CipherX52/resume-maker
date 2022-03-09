import React from 'react';
import { Link } from "react-router-dom";
import {useState,useEffect} from "react";
// import "./Signup.css"

function Signup() {
//   initial values
  const initialvalues = {email:"", password:"" , username:""}

// creating state and passing initialvalues.
const [formValues,setFormValues] =useState(initialvalues)

// creating states for errors with imitial value as empty objects.
const [formErrors,setFormErrors] =useState({})

// creating states for flags
const[isSubmit,setIsSubmit] = useState(false)


// function for changeHandler
const changeHandler = (e)=>{
    const { name, value }= e.target;
    setFormValues({...formValues,[name]:value});
    console.log(formValues)
};
 
// submitForm function
const submitForm = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmit(true);
  };


// useEffect for checking the validation criteria.
useEffect(()=>{
    console.log(formErrors)
    if(Object.keys(formErrors).length === 0 && isSubmit){
        console.log(formValues)
    }
},[formErrors])

// function for validation
const validate = (values)=>{
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
    if(!values.username){
        errors.username = "username is required"
    } 
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
        
                <div className="signup">
                
                    <h1>Signin</h1>
                        <form action="" method="" onSubmit={submitForm}>
                            <input type="text" name="username" placeholder="UserName" value={formValues.username} 
                            onChange={changeHandler}
                            />
                            <p>{formErrors.username}</p>

                            <input type="email" name="email" placeholder="Email" value={formValues.email} 
                            onChange={changeHandler}
                            />
                            <p>{formErrors.email}</p>

                            <input type="password" name="password" placeholder="Password" value={formValues.password}
                            onChange={changeHandler}
                            />
                            <p>{formErrors.password}</p>
                            {/* <Link to="/login" className="link btns"> */}
                                <button type="submit" className="btn btn-primary btn-block btn-large">Let me in.</button>
                            {/* </Link> */}
                            </form>
                        
                </div>
            
    
    )
}

export default Signup