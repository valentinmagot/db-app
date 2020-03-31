let express = require('express');
let bodyParser = require('body-parser')
const PORT = 3001;

require('dotenv').config()


const db = require('./api')


let app = express();

let partners = [ 
    {token: 'af745d84dafd54eccde54b07a174fed8'}
];




app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Access");
    next();
})

app.get('/', (request, response) => {
    response.json({ info: 'FitBoard database API' })
    
})

app.get('/api/', (request, response) => {
    response.json({ info: 'A token is required to access the FitBoard API' })
})

app.get('/api/athletes', db.getAthletes)

app.get('/api/partners', db.getPartners)

app.get('/api/athletes/:id', db.getAthletesByIdentifier)

app.get('/api/competitionsInfos', db.getCompetitionsInfo)

app.get('/api/competitions', db.getCompetitions)

app.get('/api/registrations', db.getRegistrations);

app.post('/api/athletes', db.addAthletes);

app.listen(PORT, () => console.log('Listening on port ' + PORT));
