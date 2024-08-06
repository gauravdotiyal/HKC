const zod=require('zod')
 

function validate(obj){
    const schema=zod.object({
        email:zod.string().email(),
        password:zod.string().min(8)
    })

    const response=schema.safeParse(obj);
    console.log(response)
}


app.post('/login',function(req,res){
    const response=validate(req.body);
    if(!response.success){
        res.send({
            msg:"Your inputs are not valid"
        })
        return; 
    }


})