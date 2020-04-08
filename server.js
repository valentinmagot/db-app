let express = require('express');
let bodyParser = require('body-parser')
const PORT = 3001;
var passport = require('passport');
var Strategy = require('passport-http-bearer').Strategy;

require('dotenv').config()


const db = require('./api')

let app = express();

passport.use(new Strategy(
    function(token, cb) {
      db.getPartners(token, function(err, user) {
        if (err) { return cb(err); }
        if (!user) { return cb(null, false); }
        return cb(null, user);
      });
    }));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.use(function(request, response, next) {
    response.header("Access-Control-Allow-Origin", "*");
    response.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Access");
    next();
})

// APPLICATION
app.get('/', (request, response) => {
    response.json({ info: 'FitBoard database API can be access with a token' })
})

app.get('/athletes' , db.getAthletes)

app.get('/partnersInfo', db.getPartnersInfo)

app.get('/competitionsInfos', db.getCompetitionsInfo)

// API
app.get('/api/', passport.authenticate('bearer', { session: false }), (request, response) => {
    response.json({ info: 'Welcome to the FitBoard API' })
})

app.post('/api/register', passport.authenticate('bearer', { session: false }),db.addRegistrations)

app.get('/api/registrations', passport.authenticate('bearer', { session: false }), db.getRegistrations);

app.put('/api/registrations/:id', passport.authenticate('bearer', { session: false }), db.updateRegistrations);

app.delete('/api/registrations/:id', passport.authenticate('bearer', { session: false }), db.deleteRegistrations);

// app.get('/api/athletes/:id', passport.authenticate('bearer', { session: false }),db.getAthletesByIdentifier)





// app.get('/api/competitions', db.getCompetitions)


// app.post('/api/athletes', passport.authenticate('bearer', { session: false }), db.addAthletes);

app.listen(PORT, () => console.log('Listening on port ' + PORT));
