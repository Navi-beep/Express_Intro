const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index');
})


app.get('/abc', (req, res) =>{
    res.send('ABC!')
})


app.listen(port, () => {
    console.log(`Hello world app listening on port ${port}`)
})
