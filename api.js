const pg = require('pg');

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});

var identifier;

// AUTHENTICATION
const getPartners = (token, cb)  => {
    
    pool.connect((err, db, done)=>{
        if(err){
            return cb(null, null);
        }else {
            
            db.query('SELECT * FROM partners', (err, table) => {
                done();
                if(err){
                    return cb(null, null);
                }else {
                    process.nextTick(function() {
                        for (var i = 0, len = table.rows.length; i < len; i++) {
                          var record = table.rows[i];
                        //   console.log(record.identifier)
                          if (record.identifier === token) {
                            identifier = record.identifier;
                            return cb(null, record);
                          }
                        }
                        return cb(null, null);
                      });

                }
            });

        }
    })
}

// APPLICATION
const getAthletes = (request, response) => {
    
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {

            db.query('SELECT * FROM athletes LIMIT 20', (err, table) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log('ATHLETES OBTAINED')
                    return response.status(200).send(table.rows);
                }
            });

        }
    })
}

const getPartnersInfo = (request, response) => {
    
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {
            
            db.query('SELECT * FROM partners', (err, table) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log(`PARTNERS OBTAINED`)
                    return response.status(200).send(table.rows);
                    
                }
            });

        }
    })
}

const getCompetitionsInfo = (request, response) => {

    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {
            db.query("select p.company, c.name, venu, category, start_date_time, end_date_time, age(end_date_time, start_date_time) as duration, c.address_line,c.city,c.state,c.zip, c.contact_phone, c.contact_email, max_male, max_female, number_of_events from competitions c, partners p where c.partner_id = p.id;",
             (err, table) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log('COMPETITIONS INFO OBTAINED')
                    return response.status(200).send(table.rows);
                }
            });

        }
    })
}

// API 
const getAthletesByIdentifier = (request, response) => {
    const id = String(request.params.id)
    
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {
            

            db.query('SELECT * FROM athletes WHERE identifier= $1', [id], (err, table) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log(`ATHLETE ${id} OBTAINED`)
                    return response.status(200).send(table.rows);
                }
            });

        }
    })
}

const getCompetitions = (request, response) => {
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {

            db.query('SELECT * FROM competitions', (err, table) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log('COMPETITIONS OBTAINED')
                    return response.status(200).send(table.rows);
                }
            });

        }
    })
}

// MANAGES REGISTRATIONS
const getRegistrations = (request, response) => {

    const id = identifier
    
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {
            db.query("select r.id, r.athlete_id, r.identified_gender, r.athlete_email, r.year from partners p, competitions c, registrations r where p.identifier=$1 and c.partner_id = p.id and r.competition_id = c.id;",
                [id],    
                (err, table) => {
                    done();
                    if(err){
                        return  response.status(400).send(err);
                    }else {
                        console.log(`REGISTRATIONS OF ${id} OBTAINED`)
                        return response.status(200).send(table.rows);
                    }
            });

        }
    })
}

const addRegistrations = (request, response) => {
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {
            const { competition_id, athlete_id, identified_gender, athlete_email, year} = request.body

            db.query("INSERT INTO REGISTRATIONS " +
                     "(competition_id, athlete_id, identified_gender, athlete_email, year)"+
                     "VALUES"+
                     "($1, $2, $3, $4, $5);",
                      [competition_id, athlete_id, identified_gender, athlete_email, year], (err, result) => {

                    done();
                    if(err){
                        return  response.status(400).send(err);
                    }else {
                        console.log(`REGISTRATION INSERTED`)
                        response.status(201).json({ status: 'success', message: 'Registration added.' })
                    }
            });

        }
    })
}

const updateRegistrations = (request, response) => {
    const id = parseInt(request.params.id)
    const { competition_id, athlete_id, identified_gender, athlete_email, year} = request.body
  
    pool.query(
      'UPDATE registrations SET competition_id=$1, athlete_id=$2, identified_gender=$3, athlete_email=$4, year=$5 WHERE id= $6',
      [competition_id, athlete_id, identified_gender, athlete_email, year, id],
      (error, results) => {
        if (error) {
          throw error
        }
        response.status(200).send(`Registration with id: ${id} modified`)
      }
    )
}

const deleteRegistrations = (request, response) => {
    const id = parseInt(request.params.id)

    pool.query(
        'DELETE from registrations WHERE id= $1;',
        [id],
        (error, results) => {
          if (error) {
            throw error
          }
          response.status(200).send(`Registration with id: ${id} deleted`)
        }
      )

}

const addAthletes = (request, response) => {

    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {

            // const {firstname, lastname, email, dob, identified_gender, country} = request.body
            // [firstname, lastname, email, dob, identified_gender, country],
            const { firstname, lastname} = request.body

            db.query('INSERT INTO athletes (firstname, lastname) VALUES ($1, $2)', [firstname, lastname], (err, result) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log(`ATHLETE INSERTED`)
                    response.status(201).json({ status: 'success', message: 'Athlete added.' })
                }
            });

        }
    })

}

module.exports = {
    // GET ATHLETES
    getAthletes,
    getAthletesByIdentifier,
    // GET PARTNERS
    getPartners,
    getPartnersInfo,
    // GET COMPETITION
    getCompetitions,
    getCompetitionsInfo,
    // GET REGISTRATION
    getRegistrations,

    // POST ATHLETES
    addAthletes,
    // POST REGISTRATION
    addRegistrations,

    //PUT REGISTRATION
    updateRegistrations,

    //DELETE REGISTRATION
    deleteRegistrations,

    
}

// HOME 
// curl http://localhost:3001/
// API
// curl -v -H "Authorization: Bearer a5d4ce7cd5f387c1e8e6316846dac953" http://localhost:3001/api/

// GET ATHLETES
// curl -v -H "Authorization: Bearer af745d84dafd54eccde54b07a174fed8" http://localhost:3001/api/athletes/2fdb5b6456358dbd2015427888feca79
// curl -v -H "Authorization: Bearer af745d84dafd54eccde54b07a174fed8" http://localhost:3001/api/athletes/
// POST ATHLETES
// curl -X POST -d "firstname=Test&lastname=Test" http://localhost:3001/api/athletes


// GET REGISTRATIONS
// curl -v -H "Authorization: Bearer a5d4ce7cd5f387c1e8e6316846dac953" -X GET http://localhost:3001/api/registrations
// POST REGISTRATION
// curl -v -H "Authorization: Bearer a5d4ce7cd5f387c1e8e6316846dac953" -X POST -d  "competition_id=1&athlete_id=10&identified_gender=F&athlete_email=test@email.com&year=2020" http://localhost:3001/api/register
// PUT REGISTRATION
// curl -v -H "Authorization: Bearer a5d4ce7cd5f387c1e8e6316846dac953" -X PUT -d "competition_id=1&athlete_id=10&identified_gender=10&athlete_email=test@email.com&year=2020"  http://localhost:3001/api/registrations/10
// DELETE REGISTRATION
// curl -v -H "Authorization: Bearer a5d4ce7cd5f387c1e8e6316846dac953" -X "DELETE"  http://localhost:3001/api/registrations/10