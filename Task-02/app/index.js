const express = require('express');
const app = express();
const PORT = 3000;

app.get('/', (req,res) =>
{
    res.send(`
    <!DOCTYPE html>
    <html>
    <head>
      <title>Elite Intern</title>
    </head>
    <body style="text-align:center; margin-top:40px;">
      <h1>Hello, Welcome to the Elite Intern</h1>
      <p>This shows that CI/CD pipeline was successfully deployed 🎉</p>
    </body>
    </html>
  `);
})
app.listen(PORT,() =>{  
console.log(`Server is running on http://localhost:${PORT}`);
});
