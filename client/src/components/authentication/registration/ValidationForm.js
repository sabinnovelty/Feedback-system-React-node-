export const registrationValidate = values => {
    const errors = {};
    console.log(values,"values")
    if (!values.username) {
        errors.username = "Username is required!"
    }
    if (!values.password) {
        errors.password = "password is required!"
    }
    if (!values.cpassword) {
        errors.cpassword = "password is required!"
    }
    if (!values.email) {
        errors.email = "Email is required!"
    }
    if (!values.batch) {
        errors.batch = "What is your batch year?"
    }
    if (!values.year) {
        errors.year = "Enter your college year!"
    }
    if (!values.semester) {
        errors.semester = "In which semester you are?"
    }
    if (!values.part) {
        errors.part = "In which part you are?(1st | 2nd) !"
    }
    if (!values.image) {
        errors.image = "Select your image.!"
    }
    return errors;
}