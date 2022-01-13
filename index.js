const express = require('express')

const app = express()
const PORT = 5200

app.set('view engine', 'hbs') // set hbs

app.use('/public', express.static(__dirname + '/public')) // set public folder/path

app.use(express.urlencoded({extended: false}))

let isLogin = true

app.get('/', function(request, response) {
    response.render('index')
})

app.get('/blog', function(request, response) {
    response.render('blog', {isLogin : isLogin})
})

app.get('/blog-detail/:id', function(request, response) {
    // console.log(request.params);
    
    let blogId = request.params.id
    res.render('blog-detail', {blog : {
        id : blogId,
        title: 'Selamat datang di web personal',
        content: 'In the first term of college, I was introduced to a subject called Logic. In the "I think, therefore I am" fashion, you might think this would be an easy subject. After all, we are all taught how to think throughout school and, since all of us "think", there would be nothing unfamiliar in the subject that could trick the less-than-alert mind',
        author: 'Samsul Rijal',
        postAt: '12 Jan 2022 11:30 WIB'
    }})

})

app.get('/contact', function(request, response) {
    response.render('contact')
})

// routing halaman add blog
app.get('/add-blog', function(request, response) {
    response.render('add-blog')
})


app.post('/blog', function(request, response) {
    // console.log(request.body);

    console.log({
        title: request.body.inputTitle,
        content: request.body.inputContent
    });
})

app.listen(PORT, function() {
    console.log(`Server starting on PORT`);
})