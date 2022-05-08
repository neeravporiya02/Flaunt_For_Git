export default function validateInfo(values) {
    let errors = {}
    let validCharactersRegex = /^[a-z\u00C0-\u02AB'´`]+\.?\s([a-z\u00C0-\u02AB'´`]+\.?\s?)+$/;

    //Firstname
    if (!values.firstName.trim()) {
        errors.firstName = "Firstname required"
    }
    else if(!validCharactersRegex){
        errors.firstName ="Enter a valid Firstname"
    }

    //Lastname
    if (!values.lastName.trim()) {
        errors.lastName = "Lastname required"
    }


    //Email
    if (!values.email) {
        errors.email = "Email required"
    }
    else if (!/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i.test(values.email)) {
        errors.email = "Email address is invalid"
    }

    //Phone
    if (!values.phone) {
        errors.phone = "Phone number is required"
    }
    // else if(values.phone.length < 10){
    //     errors.phone = "Number should be 10 digit"
    // }

    //Password
    if(!values.password){
        errors.password = "Password is required"
    }
    else if(values.password.length < 8){
        errors.password = "Password needs to be 8 characters or more"
    }

    //Confirm Password
    if(!values.confirmPassword){
        errors.confirmPassword = "Password is required"
    }
    else if(values.confirmPassword !== values.password){
        errors.confirmPassword = "Passwords do not match"
    }

    return errors;
}