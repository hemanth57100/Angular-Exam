const express=require('express');
const app=express();
const PORT=3000;
app.get('/api/data',(req, res)=>{
    const data={message:"Hello from server!!"};
    res.json(data);
});

app.listen(PORT,()=>{
    console.log(`server is running on http://localhost:${PORT}`);
});