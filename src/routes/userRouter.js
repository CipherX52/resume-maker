const express=require('express')
const userRouter=express.Router()
const userModel=require('../models/userModel')
const bcrypt=require('bcrypt')
const jwt=require('jsonwebtoken')
const verifyToken=require('../utils/verifyToken')

function generateToken(username,role){
    let data={
        "username":username,
        "role":role
    }
    const token=jwt.sign(data,'secretkeyforcreatingjsonwebtokenforauthentication')
    return token
}

//registering a user
userRouter.post('/register',async(req,res)=>{
    if(req.body.username&&req.body.email&&req.body.password){
        const salt=await bcrypt.genSalt(Number(10))
        const hashPassword=await bcrypt.hash(req.body.password,salt)
        try {

            let regexpemail=/^(\w+([\.-]?\w+))@([a-zA-Z0-9\-]+)\.([a-z]{2,3})(.[a-z]{2,3})?$/; 
            let regexppwd=/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
            if(regexpemail.test(req.body.email)&&regexppwd.test(req.body.password)){
                let user=await userModel.findOne({username:req.body.username})
                let email=await userModel.findOne({email:req.body.email})
                if(!user&&!email){
                    const newUser=userModel({
                        username:req.body.username,
                        email:req.body.email,
                        password:hashPassword,
                        role:'user'            
                    })
                    const login = await newUser.save()
                    let token=generateToken(login.username,login.role)
                    const data = { token:token, user:login.role }
                    res.status(200).json({success:true, data})
                }
                else{
                    res.status(406).json({success:false, message:"username already exists or email exists"})
                }
            }
            else{
                res.status(401).json({success:false, message:"check password or email validation"})
            }
            
        } catch (error) {
            console.log(error)
           res.status(500).json({success:false, message:"internel server error"}) 
        }
    }
})

//user login
userRouter.post('/login',async(req,res)=>{
    if(req.body.email && req.body.password){
        const login=await userModel.findOne({email:req.body.email})
         if(login){
        let result=await bcrypt.compare(req.body.password,login.password)
        if(result){
            let token=generateToken(login.username,login.role)
            const data={
                token:token,
                user:login.role
            }
            res.status(200).json({success:true, data})
        }
        else{
            res.status(401).json({success:false, message:"password mismatch"})
        }
         }
         else{
             res.status(404).json({success:false, message:"no user found"})
         }
    }
    else{
        res.status(406).json({success:false, message:"not acceptable"})
    }
})

module.exports=userRouter