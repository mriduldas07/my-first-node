const express = require('express');
const cors = require('cors');
const app = express();
const port = process.env.PORT || 5000;


app.use(cors());
app.use(express.json());

app.get('/', (req, res) =>{
    res.send("Jibon over change")
});

const users = [
    {id: 1, name: 'Sabana', email: 'sabana@gmail.com', phone: '01456262765'},
    {id: 2, name: 'sabnoor', email: 'sabnoor@gmail.com', phone: '01456262765'},
    {id: 3, name: 'Suchorita', email: 'Suchorita@gmail.com', phone: '01456262765'},
    {id: 4, name: 'suchonda', email: 'suchonda@gmail.com', phone: '01456262765'},
    {id: 5, name: 'srabonti', email: 'srabonti@gmail.com', phone: '01456262765'},
    {id: 6, name: 'sabila', email: 'sabila@gmail.com', phone: '01456262765'},
    {id: 7, name: 'sohana', email: 'sohana@gmail.com', phone: '01456262765'}
]


app.get('/users', (req, res) =>{
    res.send(users)
});

app.get('/user/:id', (req, res) =>{
    console.log(req.params);
    const id = parseInt(req.params.id);
    const user = users.find( u => u.id === id);
    res.send(user)
});


app.post('/user', (req, res) =>{
    console.log(req.body);
    const user = req.body;
    user.id = users.length + 1;
    users.push(user);
    res.send(user)
})


app.listen(port, () =>{
    console.log('Loading...',port);
})