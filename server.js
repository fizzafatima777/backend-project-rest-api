const express=require('express');
//naming server as app
const app=express();
//asking app/server to learn the use of json
app.use(express.json());
//deciding port where server will run
const PORT=8000;

app.get('/',(req,res) =>{
    res.json({message: "Server is running well"});

});

app.get('/users',(req,res)=>{
    const users=[
       { id:1 , name:"Ali" },
       {id:2, name:"khan"}
    ];
    res.json(users);

});

app.post('/users',(req,res)=>{
    const newUser=req.body;
    console.log("new user came", newUser);
    res.status(201).json({
        message:" new user came",
        user:newUser

    });
});

app.listen(PORT,()=>{
    console.log(`Server running at PORT : http://localhost:${PORT}`);
});