const express = require('express');
const mysql = require('mysql2');
const bodyParser = require('body-parser');
const app = express();
const path = require('path');

//configuracion para el uso peticiones post
app.use(bodyParser.urlencoded({ extended: false }));


//configuracion para los estilos
app.use('/styles', express.static(path.join(__dirname, 'styles')));

//platillas que sean dinamicas
app.set('view engine', 'ejs');

//crear la conexion
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root', // tu usuario de MySQL
    password: '', // tu contraseña de MySQL
    database: 'test',
    port: 3306
});


//comprobacion de la conexion de la base de datos
db.connect(err => {
    if (err) {
        console.error('Error en la conexión a la base de datos:', err);
    } else {
        console.log('Conexión exitosa');
    }
});

//iniciamos el server

const port = 3009;
app.listen(port,()=>{
    console.log(`Servidor en funcionamiento desde http://localhost:${port}`);
});

//index

app.get('/', (req, res) => {
    const query = 'SELECT * FROM users';
    db.query(query, (err, results) => {
        if (err) {
            console.error('Error al buscar los usuarios:', err);
            res.send('Error');
        } else {
            res.render('index', { users: results });
        }
    });
});

// permite mostrar la información para agregar un usuario

app.get('/add', (req, res) => {
    res.render('add'); 
});


//agregar usuarios

app.post('/add', (req, res) => {
    const { nombre, apellidos, email, telefono, direccion, nacimiento, genero } = req.body;
    const query = 'INSERT INTO users (nombre, apellidos, email, telefono, direccion, nacimiento, genero) VALUES (?, ?, ?, ?, ?, ?, ?)';
    db.query(query, [nombre, apellidos, email, telefono, direccion, nacimiento, genero], (err) => {
        if (err) {
            console.error('Error al agregar usuarios:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});

// Mostrar el formulario de edición de un usuario
app.get('/edit/:id', (req, res) => {
    const { id } = req.params; // Obtén el ID del parámetro de la URL
    const query = 'SELECT * FROM users WHERE id = ?';
    db.query(query, [id], (err, results) => {
        if (err) {
            console.error('Error mostrar el usuario:', err);
            res.send('Error');
        } else {
            if (results.length > 0) {
                res.render('edit', { user: results[0] }); 
            } else {
                res.send('Usuario no encontrado');
            }
        }
    });
});

// Ruta para actualizar usuario
app.post('/update/:id', (req, res) => {
    const { id } = req.params;
    const {  nombre, apellidos, email, telefono, direccion, nacimiento, genero } = req.body;
    const query = 'UPDATE users SET nombre = ?, apellidos = ?, email = ?, telefono = ?, direccion = ?, nacimiento = ?, genero = ? WHERE id = ?';
    db.query(query, [nombre, apellidos, email, telefono, direccion, nacimiento, genero, id], (err) => {
        if (err) {
            console.error('Error updating user:', err);
            res.send('Error');
        } else {
            res.redirect('/'); 
        }
    });
});


//eliminar usuario

app.get('/delete/:id', (req, res) => {
    const { id } = req.params;
    const query = 'DELETE FROM users WHERE id = ?';
    db.query(query, [id], (err) => {
        if (err) {
            console.error('Error al eliminar el usuario:', err);
            res.send('Error');
        } else {
            res.redirect('/');
        }
    });
});





