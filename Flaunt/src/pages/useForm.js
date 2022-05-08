import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";


const useForm = (validate) => {
  const [values, setValues] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState("");
  let [email, setEmail] = useState();
  const [status, setStatus] = useState(false);
  let history = useHistory();
  const handleChange = e => {
    const { name, value } = e.target

    setValues({
      ...values,
      [name]: value
    });
  };

  // Login Page Submit
  const handleSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));

    console.log(JSON.stringify({
      email: values.email,
      password: values.password
    }))
    try {
      let res = fetch("http://localhost:8082/login", {
       method : 'POST',
       headers : { 'Content-Type' : 'application/json'},
       body : JSON.stringify({
          email: values.email,
          password: values.password,
        })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        // -- If the status code is 200
        if (data[0] == 200) {
          setMessage("User Login successful");
          setEmail(values.email);
          
          setStatus(true);
          // localStorage.setItem('email', String(values.email));
        
        } else {
          setMessage("User credentials do not match");
        }
      });
      
    } catch (err) {
      console.log(err);
    }
    setIsSubmitting(true);
  }


  // Sign Up Page Submit
  const handleSignUpSubmit = e => {
    e.preventDefault();

    setErrors(validate(values));

    console.log(JSON.stringify({
      email: values.email,
      password: values.password
    }))
    try {
      let res = fetch("http://localhost:8082/registerUser", {
       method : 'POST',
       headers : { 'Content-Type' : 'application/json'},
       body : JSON.stringify({
          email: values.email,
          password: values.password,
          firstName: values.firstName,
          lastName: values.lastName,
          phone: values.phone,
          confirmPassword: values.confirmPassword,
        })
      })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        if (data[0] == 200) {
          setMessage("User Created Successfully...");
          setEmail(values.email);
          setStatus(true);
          // window.location.replace("/login");  
        } else {
          setMessage("Error Creating User Account...");
        }
      });
      
    } catch (err) {
      console.log(err);
    }
    setIsSubmitting(true);
  }


  return { handleChange, values, handleSubmit,handleSignUpSubmit, errors,message,email,status };
};

export default useForm