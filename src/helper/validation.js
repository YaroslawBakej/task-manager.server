// const {ExeptionType}=require('./')

function isValidUserId(req,res,next){
    const{id}=req.params
    if (!id) throw new Error(ExeptionType.USER_ID_INVALID.message)
    next()
}

function isValidUser(req,res,next){
const {name, surname, email, pwd, status}=req.body
if(!name)throw new Error(ExeptionType.USER_ID_INVALID.message)
if(!surname)throw new Error(ExeptionType.USER_ID_INVALID.message)
if(!/^[0-9a-z]+\.[0-9a-z]+@[a-z]+\.[a-z]{1,3}$/g.test(email))throw new Error(ExeptionType.USER_ID_INVALID.message)
next()
}

module.exports={isValidUser, isValidUserId}