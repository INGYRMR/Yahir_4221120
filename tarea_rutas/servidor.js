const express = require("express");
const path = require("path");
const port = 3009;
const app = express();

// Ruta raíz que redirige a /index
app.get( "/",(req, res)=>{
    res.sendFile(path.join(__dirname +"/index.html") );

} );

// Ruta raíz que redirige a /formulario
app.get("/", (req, res) => {
    res.redirect("/formulario");
});

app.get("/formulario", (req, res) => {
  res.sendFile(path.join(__dirname, "formulario.html"));
});

// Ruta raíz que redirige a /informacion
app.get("/", (req, res) => {
    res.redirect("/informacion");
});

app.get("/informacion", (req, res) => {
  res.sendFile(path.join(__dirname, "informacion.html"));
});


app.listen(port,()=>{
    console.log(`El servidor esta diponible por medio del: http://localhost:${port}`);
})

