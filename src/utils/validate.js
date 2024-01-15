export const checkValidaData = (email, password, name) => {

    const isEmailValid = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
    const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*]).{8,}$/.test(password);
    const isNameValid = /^[a-zA-Z][a-zA-Z0-9 ]+$/.test(name);

    if(!isEmailValid) return "Email is not valid";
    if(!isPasswordValid) return "Try another password";
    if(!isNameValid) return "Write correct name"

    return null;

}