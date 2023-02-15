const { response } = require('express');
const express = require('express')
const app = express()
const PORT = 3000;

app.get('/', (request, response) => {
    response.send("Welcome to PhatDom Co.")
})

app.get('/home-page.ejs', (request,response) => {
    response.send("Home page")
})

app.get('/company-history.ejs', (request,response) => {
    response.send("Company History")
})

app.get('/staff-page.ejs', (request,response) => {
    response.send("Staff Page")
})

app.get('/past-work.ejs', (request,response) => {
    response.send("Past Work")
})

app.get('/contact-page.ejs', (request,response) => {
    response.send("Contact Page")
})

app.get('/links-page.ejs', (request,response) => {
    response.send("Links page")
})


app.listen(PORT,()=>{
    console.log('working')
})