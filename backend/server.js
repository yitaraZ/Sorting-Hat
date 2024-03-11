let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    return res.send({
        error: false,
        message: 'Welcome to RESTful API with Nodejs, Express, MYSQL',
        written_by: "4king",
        published_on: "https://milerdev.dev"
    })
})

let dbCon = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: '4king'
})
dbCon.connect();

app.listen(3030, () => {
    console.log('Node App is running or port 3030');
})


app.get('/Namelists', (req, res) => {
    dbCon.query('SELECT * FROM student', (error, results, fields) => {
        if (error) throw error;

        let message = ""
        if (results === undefined || results.length == 0) {
            message = "Student is empty";
        } else {
            message = "Successfully retrieved all student";
        }
        return res.send({ error: false, data: results, message: message });
    })
})


app.get('/Namelists/:house', (req, res) => {
    dbCon.query('SELECT * FROM student WHERE house=?', house, (error, results, fields) => {
        if (error) throw error;

        let message = ""
        if (results === undefined || results.length == 0) {
            message = "Student is empty";
        } else {
            message = "Successfully retrieved all student";
        }
        return res.send({ error: false, data: results, message: message });
    })

})

app.post('/Namelist', (req, res) => {
    let name = req.body.name;
    let house = req.body.house;

    //validation
    if (!name || !house) {
        return res.status(400).send({ error: true, message: "Please provide name" });
    } else {
        dbCon.query('INSERT INTO student (name,house) VALUES(?, ?)', [name, house], (error, results, fields) => {
            if (error) throw error;
            return res.send({ error: false, data: results, message: "student successfully added" })
        })
    }
})

app.delete('/Namelist', (req, res) => {

    dbCon.query('DELETE FROM student', (error, results, fields) => {
        if (error) throw error;

        let message = "";
        if (results.affectedRows === 0) {
            message = "Student is empty";
        } else {
            message = "Successfully retrieved all student";
        }
        return res.send({ error: false, data: results, message: message });
    })
})




module.exports = app;