let express = require('express');
let bodyParser = require('body-parser')
const pg = require('pg');
const PORT = 3001;

let app = express();

const pool = new pg.Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'Leaderboard',
    password: 'valentin0604',
    port: 5432
});
// pool.query('SELECT * FROM athletes', (err, res) => {
//     console.log(err, res);
//     pool.end();
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Access");
    next();
})

app.get('/api/athletes', function(request, response) {
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {

            db.query('SELECT * FROM athletes', (err, table) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log('DATA OBTAINED')
                    return response.status(200).send(table.rows);
                }
            });

        }
    })
    
});

app.listen(PORT, () => console.log('Listening on port ' + PORT));



