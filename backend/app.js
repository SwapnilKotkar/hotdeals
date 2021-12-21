const express = require('express');
const app = express();

require('./db/conn');

// built-in middleware function in Express
app.use(express.json());

app.use(require('./router/auth'));

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`server is running at port no ${PORT}`);
}); 