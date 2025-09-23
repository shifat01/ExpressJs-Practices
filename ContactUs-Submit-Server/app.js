const express = require('express');
const bodyParser = require('body-parser');

const app = express();

app.use((req, res, next) => {
  console.log("first middleware", req.url, req.method);
  next();
});

app.get("/",(req, res, next) => {
  console.log("handling / for get", req.url, req.method);
  res.send(`<h1>Welcome </h1>
            <a href="/contact-us">Contact Us</a>
    `);
});

app.get("/contact-us", (req, res, next) => {
  console.log("handling /contact us for get", req.url, req.method);
  res.send(`<h1>Please give your info for contact us </h1>
            <form action="/contact-us" method="POST">
              <input type="text" name="name" placeholder"Enter your name" />
              <input type="email" name="email" placeholder"Enter your email"/>
              <input type="submit"/>
            </form>
         `);
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("handling post for contact-us", req.body);
  res.send(`<h1>We will contact you soon</h1>
            <a href="/">Go to Home</a>
    `);
});


const PORT = 4000;
app.listen(PORT,() =>{
  console.log(`Server Running at http://localhost${PORT}`);
});