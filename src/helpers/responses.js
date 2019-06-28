module.exports = {
    ok :(result,status,res)=>{
        let message
        if(result === undefined){
            message = "Not Found" 
            status = 404
        }else{
            message = "Success" 
        }
        res.json({status:status,message:message,result:result})
    }
}