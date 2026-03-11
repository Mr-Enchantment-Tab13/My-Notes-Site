const express = require('express')
 
const app = express()
 
const PORT = 3000
 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})


app.get('/', (req, res) => {
    res.send("<h1>Welcome to My Website</h1>")
})


app.get('/about', (req, res) => {
    res.send("<h1>About me</h1><p>This page describes me.</p>")
})


app.get('/music', (req, res) => {
    res.send("<h1>Music</h1><p>Music go here.</p>")
})

app.get('/artists', (req, res) => {
    res.send("<h1>Artists</h1><p>Artists go here.</p>")
})


app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})