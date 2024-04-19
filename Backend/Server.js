const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');
const cors = require('cors');

const app = express();
const port = 3001;

// Enable CORS
app.use(cors());

// MySQL Connection
const connection = mysql.createConnection({
    host: "localhost",
    user: 'root',
    password: '',
    database: 'wyzjclmy_parkinplay'
});

connection.connect(err => {
    if (err) throw err;
    console.log('Connected to MySQL database');
});

// Middleware
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Routes
app.get('/client', (req, res) => {
    const sql = "SELECT * FROM client";
    connection.query(sql, (err, Cdata) => {
        if (err) return res.json(err);
        return res.json(Cdata);
    });
});


app.get('/clients/:agentusername', (req, res) => {
    const agentusername = req.params.agentusername;
    const sql = "SELECT * FROM client WHERE Parentname = ?";
    connection.query(sql, [agentusername], (err, Cdata) => {
        if (err) return res.json(err);
        return res.json(Cdata);
    });
});

app.get('/agent/:username', (req, res) => {
    const agentusername = req.params.username;
    const sql = "SELECT * FROM agent WHERE Username = ?";
    connection.query(sql, [agentusername], (err, data) => {
        if (err) return res.status(500).json({ error: 'Database query error' });
        res.json(data);
    });
});



app.get('/agent', (req, res) => {
    const sql = "SELECT * FROM agent";
    connection.query(sql, (err, Adata) => {
        if (err) return res.json(err);
        return res.json(Adata);
    });
});

app.post('/submit-form', (req, res) => {
    const { parentname,clientname, username, password , reference ,point , exposurelimit,marketcommission,sessioncommission} = req.body;

    const sql = 'INSERT INTO client (parentname, Clientname,username, password, reference ,point,exposurelimit,marketcommission,sessioncommission) VALUES (?,?,?, ?,?,?,?,?,?)';
    connection.query(sql, [parentname , clientname, username, password , reference,point , exposurelimit,marketcommission,sessioncommission], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }

        console.log('Data inserted successfully');
        res.status(200).send('Data inserted successfully');
    });
});

app.post('/submit-form2', (req, res) => {
    const { parentname,agentname, username, password , reference ,childlevel,point , exposurelimit,remark} = req.body;

    const sql = 'INSERT INTO agent (parentname, agentname,username, password, reference ,childlevel,point,exposurelimit,remark) VALUES (?,?,?,?,?,?,?,?,?)';
    connection.query(sql, [parentname , agentname, username, password , reference,childlevel,point , exposurelimit,remark], (err, result) => {
        if (err) {
            console.error('Error inserting data:', err);
            res.status(500).send('Error inserting data');
            return;
        }

        console.log('Data inserted successfully');
        res.status(200).send('Data inserted successfully');
    });
});




app.put('/:type/:username', (req, res) => {
    const { type, username } = req.params;
    const newPoint = req.body.Point;
    let tableName = '';

    if (type === 'agent') {
        tableName = 'agent';
    } else if (type === 'client') {
        tableName = 'client';
    } else {
        res.status(400).send('Invalid type');
        return;
    }

    const query = `UPDATE ${tableName} SET Point = ? WHERE Username = ?`;
    connection.query(query, [newPoint, username], (err, result) => {
        if (err) {
            console.error(`Error updating ${type} Point:`, err);
            res.status(500).send('Internal Server Error');
            return;
        }

        console.log(`${type} ${username} Point updated successfully`);
        res.send(`${type} Point updated successfully`);
    });
});


/////ye upar vale put code ka hi detailed version niche comment kiya

// app.put('/agent/:username', (req, res) => {
//     const username = req.params.username;
//     const newPoint = req.body.Point;
  
//     const query = `UPDATE agent SET Point = ? WHERE Username = ?`;
//     connection.query(query, [newPoint, username], (err, result) => {
//       if (err) {
//         console.error('Error updating agent Point:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
  
//       console.log(`Agent ${username} Point updated successfully`);
//       res.send('Agent Point updated successfully');
//     });
//   });

// app.put('/client/:username', (req, res) => {
//     const username = req.params.username;
//     const newPoint = req.body.Point;
  
//     const query = `UPDATE client SET Point = ? WHERE Username = ?`;
//     connection.query(query, [newPoint, username], (err, result) => {
//       if (err) {
//         console.error('Error updating agent Point:', err);
//         res.status(500).send('Internal Server Error');
//         return;
//       }
  
//       console.log(`Client ${username} Point updated successfully`);
//       res.send('Client Point updated successfully');
//     });
//   });

// Start the server
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
