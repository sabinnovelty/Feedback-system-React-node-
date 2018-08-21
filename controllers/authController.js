const router =require('express').Router();


router.post("/registrations",(req,res)=>{
    res.json({
        body:req.body
    })
})

module.exports=router;