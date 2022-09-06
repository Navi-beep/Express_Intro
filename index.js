const express = require('express');
const app = express();
const port = 3000;

app.set('view engine', 'ejs')

app.use(logger)


app.get('/', (req, res) => {
    console.log(req.test)
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

app.param('id', getUser);

app.get('/users/:id', (req, res) => {
    res.render('user', { user: req.user })
})

app.put('/users/:id', (req, res) => {
    res.send('Update User')
})

app.delete('/users/:id', (req, res) => {
    res.send('Delete User')
})

app.get('/test/:testId/:testName/:abc/:xyz', (req, res) => {
    console.log(req.params);
    res.send('Test')
})

function logger(req, res, next){
    console.log(req.originalUrl)
    req.test = 123
    next();
}

function getUser(req, res, next, id){
    for (let u of users){
        if (u.id == id){
            req.user = u
        }
    }
    if (req.user){
        next()
    } else {
        res.send({error: `No user with an id of ${id}`})
    }
}


app.listen(port, () => {
    console.log(`Hello world app listening on port ${port}`)
})
