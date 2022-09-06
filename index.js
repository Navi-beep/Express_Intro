const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')


app.get('/', (req, res) => {
    res.render('index', {firstName:'Elise'});
})

let users = [
    {
        id:1,
        username: 'Peanut',
        age: 3

    }, 
    {
        id:2,
        username: 'Elise',
        age: 33

    },
    {
        id:3,
        username: 'Jeff',
        age: 33

    },

]


app.get('/users', (req, res) =>{
    res.render('users', { users })
})


app.listen(port, () => {
    console.log(`Hello world app listening on port ${port}`)
})
