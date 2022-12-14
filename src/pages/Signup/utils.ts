export const onlyAlphaNumericCharacters = (data: string) => {
    const regexp = new RegExp(/^[a-zA-Z0-9 ]+$/);
    return regexp.test(data)
};


export const validateEmail = (email: string) => {
    const regexp = new RegExp(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    return regexp.test(email)
};

export const validatePassword = (password: string)=>{
    const validatedCheck = {
        length: false,
        number: false,
        uppercase: false,
        lowercase: false,
        specialChar: false,
    }

    if(password.length >= 6){
        validatedCheck.length = true
    }else{
        validatedCheck.length = false  
    }
   
    if(password.toUpperCase() !== password){
       validatedCheck.lowercase = true
    }else{
        validatedCheck.lowercase = false 
    }

    if(/[0-9]/.test(password)){
        validatedCheck.number = true
    }else{
        validatedCheck.number = false   
    }

    if(/[A-Z]/.test(password)){
        validatedCheck.uppercase = true
    }else{
        validatedCheck.uppercase = false
    }
    
    const specialChar = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/
    if(specialChar.test(password)){
        validatedCheck.specialChar = true
    }else{
        validatedCheck.specialChar = false
    }
   
    const isValid = !Object.values(validatedCheck).includes(false);

    return {validatedCheck, isValid}
}