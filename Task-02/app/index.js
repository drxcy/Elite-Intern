const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) =>
{
    res.send("<h1> Hello Welcome to the Elite Inter </h1> <p>This is show to that CI / CD pipelines Successfully deployed </p> ")
})
app.listen(PORT,() =>{  
console.log(`Server is running on http://localhost:${PORT}`);
});
