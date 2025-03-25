const express = require('express');
const app = express();
const port = 3000;

const studentInfo = {
    name: "Juan Felipe",
    lastName: "Vega Loaiza",
    email: "juanveglo@unisabana.edu.co",
    id: "323295"
};

app.get('/', (req, res) => {
    res.send('Welcome to the Student API. Use /user-info/1 to get student details.');
});

app.get('/user-info/1', (req, res) => {
    res.json(studentInfo);
});

app.listen(port, () => {
    console.log(`Servidor corriendo en http://localhost:${port}`);
});
