const express = require('express')
 
const app = express()
 
const PORT = 3000
 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})
const path = require('path');
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/artists', (req, res) => {
  res.sendFile(__dirname + '/public/artists.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})