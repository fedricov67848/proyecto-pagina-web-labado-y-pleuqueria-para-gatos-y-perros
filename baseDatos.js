
const express = require("express")
const mysql = require("mysql")
const path = require("path");
const app = express()

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.use(express.static(path.join(__dirname, '/')));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, 'agendaCita.html'));
});


let conection = mysql.createConnection({
    host: "127.0.0.1",
    database: "animalesdatos",
    user: "root",
    password: ""
})





app.post("/enviar", (req, res) => {
    let datos = req.body

    let cedu = datos.ced
    let nomApell = datos.nomApe
    let telefono = datos.tele
    let email = datos.email
    let servicio = datos.serv
    let contra = datos.contra



    let registar = "INSERT INTO animales(cedula ,nombre_apellidos, telefono,correo,servicios,contrasena)VALUES('" + cedu + "','" + nomApell + "','" + telefono + "','" + email + "','" + servicio + "','" + contra + "')";


    conection.query(registar, function (error) {
        if (error) {
            res.send("error envia datos")
            throw error;
        } else {

            console.log("datos almacenados correctamente")
            res.send(JSON.stringify(datos))
            console.log(JSON.stringify(datos))
        }
    })
})



app.listen(4000, () => {
    console.log("servidor corriendo")
})





