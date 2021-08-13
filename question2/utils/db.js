const mysql = require('mysql');
require('dotenv').config();

const logger = async (req, res, next) => {
    const pool = await mysql.createPool({
        connectionLimit: 100,
        host     : process.env.host,
        user     : process.env.user,
        password : process.env.password,
        database : process.env.database,
      });
      
    const addRow = (data) => {
        let insertQuery = 'INSERT INTO ?? (??,??,??) VALUES (?,?,?)';
        let query = mysql.format(insertQuery,["LOGS","endpoint","parameter","timestamp",data.endpoint,data.parameter,data.timestamp]);
        pool.query(query,(err, response) => {
            if(err) {
                console.error(err);
                return;
            }
            
            console.log(response.insertId);
        });
    }
    
    
    setTimeout(() => {
        // call the function
        addRow({
            "endpoint": req.path,
            "parameter": JSON.stringify(req.query),
            "timestamp": new Date().toISOString().slice(0, 19).replace('T', ' '),
        });
    },5000);
    
      next();
}

module.exports = logger;