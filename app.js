const express = require('express') // require express
const app = express()

const port = 5000;

const expressLayouts = require('express-ejs-layouts');

// panggil ejs templating 
app.set('view engine', 'ejs');
app.use(expressLayouts);

// Aplication level middleware
app.use(
    (res, req, next) => {
        console.log("Time : " + Date.now());
        next();
    }
)


// respond with "hello world" when a GET request is made to the homepage
app.get('/', (req, res) => {

    // variable mahasiswa
    const mahasiswa = [
        {
            nama: 'Agung Aldi',
            email: 'agung@gmail.com',
            noHp: 12345
        },
        {
            nama: 'eko ',
            email: 'eko@gmail.com',
            noHp: 12345
        },
        {
            nama: 'doddy ',
            email: 'doddy@gmail.com',
            noHp: 12345
        }
    ];

    res.render('index', {
        mahasiswa,
        title: 'Halaman Home',
        layout: 'layouts/main'
    }) // panggil file .ejs di folder views
});

app.get('/about', (req, res) => {
    res.render('about', {
        title: 'Halaman About',
        layout: 'layouts/main'
    });
});


app.get('/contact', (req, res) => {
    // panggil file .ejs di folder views
    res.render('contact', {
        title: 'Halaman contact',
        layout: 'layouts/main'
    });

});


app.get('/produk/:id', (req, res) => {
    res.send(`product = ${req.params.id}`);
})


app.use('/', (req, res) => {
    res.status(404);
    res.send('Halaman Tidak ditemukan')
})

// menjalankan server
app.listen(port, () => {
    console.log(`Berjalan di port localhost:${port}`);
})