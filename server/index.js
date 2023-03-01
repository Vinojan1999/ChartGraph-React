const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Vinojan@1999',
    database: 'crud_db',
});

// Use Middlewares
app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended: true}));

app.get('/api/get', (req, res) => {
    const sqlSelect = "SELECT years_x, amount_y FROM chart_bluebay;"
    db.query(sqlSelect, (err, result) => {
        if (err) return res.sendStatus(404).json(err);
        // console.log('Result: '+ result);
        return res.json(result);
    })
})

// db.connect((err) => {
//     const sqlInsert = "INSERT INTO chart_bluebay (years_x, amount_y) VALUES (2023, 190);"
//     db.query(sqlInsert, (err, result) => {
//         if(err) throw err;
//         console.log('Query Updated');
//     })
// })

app.listen(3001, () => {
    console.log('Server started on PORT 3001...');
})