let express = require('express');
let app = express();
let bodyParser = require('body-parser');
let mysql = require('mysql');
let cors = require('cors');

app.use(cors());
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
    let house = req.params.house;
    
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

app.get('/Namelists/id/:id', (req, res) => {
    let id = req.params.id;
    
    dbCon.query('SELECT * FROM student WHERE id=?', id, (error, results, fields) => {
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
    let email = req.body.email;
    let house = req.body.house;

    //validation
    if (!name || !house || !email) {
        return res.status(400).send({ error: true, message: "Please provide name" });
    } else {
        dbCon.query('INSERT INTO student (name,email,house) VALUES(?, ?, ?)', [name, email, house], (error, results, fields) => {
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

app.put('/Namelists-Update', (req,res) => {
    let id = req.body.id;
    let name = req.body.name;
    let email = req.body.email;

    if(!id){
        return res.status(400).send({error : true, message: "Please provide id"});
    }else{
        let updateObject = {};
        if (name !== undefined) updateObject.name = name;
        if (email !== undefined) updateObject.email = email;

        if (Object.keys(updateObject).length === 0) {
            return res.status(400).send({ error: true, message: "No valid fields provided for update." });
        }
        
        dbCon.query('UPDATE tickets SET ? WHERE id = ?', [updateObject, id], (error, results, fields) => {
            if (error) throw error;

            let message = results.changedRows === 0
                ? "Student not found or no changes made"
                : "Student successfully updated";

            return res.send({ error: false, data: results, message: message });
        });
    }
})



module.exports = app;