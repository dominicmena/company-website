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

app.get('/companyhistory', (request,response) => {
    response.render("company-history.ejs")
})

app.get('/staffpage', (request,response) => {
    response.render("staff-page.ejs")
})

app.get('/pastwork', (request,response) => {
    response.render("past-work.ejs")
})

app.get('/contactpage', (request,response) => {
    response.render("contact-page.ejs")
})

app.get('/linkspage', (request,response) => {
    response.render("links-page.ejs")
})

app.listen(PORT,()=>{
    console.log('working')
})