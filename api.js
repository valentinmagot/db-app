const pg = require('pg');

const pool = new pg.Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_DATABASE,
    password: process.env.DB_PASSWORD,
    port: process.env.DB_PORT
});


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


const getPartners = (request, response) => {
    
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

const getRegistrations = (request, response) => {
    pool.connect((err, db, done)=>{
        if(err){
            return  response.status(400).send(err);
        }else {

            db.query('SELECT * FROM registrations', (err, table) => {
                done();
                if(err){
                    return  response.status(400).send(err);
                }else {
                    console.log('REGISTRATIONS OBTAINED')
                    return response.status(200).send(table.rows);
                }
            });

        }
    })
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
                    console.log('USER INSERTED')
                    return response.status(201).send(`User added with ID: ${result.rows}`);
                }
            });

        }
    })

}

module.exports = {
    // Getters
    getAthletes,
    getPartners,
    getCompetitions,
    getRegistrations,
    getAthletesByIdentifier,
    getCompetitionsInfo,
    // POST
    addAthletes,
    
}

// curl http://localhost:3001/api/athletes
// curl http://localhost:3001/api/athletes/2fdb5b6456358dbd2015427888feca79
// curl -X POST -d "firstname=Test&lastname=Test" http://localhost:3001/api/athletes
