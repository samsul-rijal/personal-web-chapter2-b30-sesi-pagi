const express = require('express')

const app = express()
const PORT = 5000

app.get('/', function(request, response) {
    response.send("hgh")
})

app.get('/about', function(request, response) {
    response.send("Ini halaman about")
})

app.listen(PORT, function() {
    console.log(`Server starting on PORT ${PORT}`);
})