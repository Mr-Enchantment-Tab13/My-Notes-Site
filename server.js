const express = require('express')
 
const app = express()
 
const PORT = 3000
 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})