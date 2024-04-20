

var cons = require('consolidate');
const express = require("express");
const path = require("path")
const app = express()
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
  await mongoose.connect('mongodb://127.0.0.1:27017/johar');
}
const port = 8000

// view engine setup
app.engine('html', cons.swig)
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'html');

const bodyparser  = require('body-parser')

app.use('/static', express.static('static'))

app.use(express.urlencoded())

app.get('/',(req, res)=>{
    const params = {}
    res.status(200).render('index.html', params  )
})
app.get('/home',(req, res)=>{
    const params = {}
    res.status(200).render('home.html', params  )
})
app.get('/about',(req, res)=>{
    const params = {}
    res.status(200).render('about.html', params  )
})
app.get('/contact',(req, res)=>{
    const params = {}
    res.status(200).render('contact.html', params  )
})

app.listen(port, () => {
    console.log(`mission successful ${port}`)
})








