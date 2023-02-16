const { response } = require('express');
const express = require('express')
const app = express()
const PORT = 3000;

const links = require('./models/linksPage')
const staffs = require('./models/staffPage')
const pastWorks = require('./models/pastWork')

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
    response.render("staff-page.ejs",{
        staff : staffs
    })
})

app.get('/pastwork', (request,response) => {
    response.render("past-work.ejs",{
    pastWork: pastWorks
    })
})

app.get('/contactpage', (request,response) => {
    response.render("contact-page.ejs")
})

app.get('/linkspage', (request,response) => {
    response.render("links-page.ejs",{
        links: links
    })
})

app.listen(PORT,()=>{
    console.log('working')
})