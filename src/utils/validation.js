const validator=require('validator');

const validatesignupdata=(req)=>{
    const {firstName,lastName,emailId,password}=req.body;

    if(!firstName || !lastName)
    {
        throw new Error("Name must be fill");
    }
    else if(firstName.length < 4 || firstName.length>50)
    {
        throw new Error("size of name should be lie between 4 to 50");
    }
    else if(!validator.isEmail(emailId))
    {
        throw new Error("Email is not valid");
    }
    else if(!validator.isStrongPassword(password)){
        throw new Error("Enter a strong password");
    }
}

const validateProfileEdit=(req)=>{
    const allowedEdits=["firstName","lastName","gender","age","about","skills","photoUrl"];

    const isAllowed=Object.keys(req.body).every((field)=>
        allowedEdits.includes(field)
    )

    return isAllowed;
}

module.exports={
    validatesignupdata,
    validateProfileEdit
}