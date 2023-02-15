const { response } = require('express');
const express = require('express')
const app = express()
const PORT = 3000;

app.use(express.static("public"));

app.get('/', (request, response) => {
    response.send("Welcome to PhatDom Co.")
})

app.get('/homepage', (request,response) => {
    response.render("home-page.ejs")
})

// app.get('/company-history.ejs', (request,response) => {
//     response.render("Company History")
// })

// app.get('/staff-page.ejs', (request,response) => {
//     response.render("Staff Page")
// })

// app.get('/past-work.ejs', (request,response) => {
//     response.render("Past Work")
// })

// app.get('/contact-page.ejs', (request,response) => {
//     response.render("Contact Page")
// })

// app.get('/links-page.ejs', (request,response) => {
//     response.render("Links page")
// })


app.listen(PORT,()=>{
    console.log('working')
})