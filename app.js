const express = require('express');
const bodyParser = require('body-parser');
const packageRouter = require('./routes/packageRouter')
const bookRouter = require('./routes/bookRouter')
const myErrorLogger = require('./utilities/ErrorLogger');
const myRequestLogger = require('./utilities/RequestLogger');
const userRouter = require('./routes/userRouter');
const cors = require('cors');

const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use(myRequestLogger);
app.use('/user', userRouter);
app.use('/package',packageRouter);
app.use('/book',bookRouter);
app.use(myErrorLogger);

app.listen(4000);
console.log("Server listening in port 4000 ");

module.exports = app;