const express=require('express');
const path = require('path');
const app=express();
const port=8000;

const student= [
    {
        id:1,
        name:"Deepanshi",
        class:"B.Tech"
    }

]

// Serve static files from the 'public' directory
app.use(express.static(path.join(__dirname, 'public')));

app.get('/',(req,res)=>{
    res.send("<h1>This is my first server</h1>");
});

app.get('/read',(req,res)=>{
    res.send("<h1>This is read page</h1>");
});

app.get('/about',(req,res)=>{
    res.send("<h1>This is about page</h1>");
});

app.get('/img',(req,res)=>{
    res.send('<img src="https://tse4.mm.bing.net/th/id/OIP.R7ssgZ04vPAkmX5tk93eeQHaHZ?pid=Api&P=0&h=180" alt="My Image">');
});

app.listen(port,()=>{
    console.log(`Server is running at :http://localhost:${port}`);
})