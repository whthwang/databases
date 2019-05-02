var mysql = require('mysql');

// Create a database connection and export it from this file.
// You will need to connect with the user "root", no password,
// and to the database "chat".
module.exports = mysql.createConnection({
        host: 'localhost',
        user: 'student',
        password: 'student',
        database: 'chat'
    })
    // ,
    // insert: function (message) {
        // connection.connect();
    //     connection.query('select * from messages;', function (error, results) {
    //     //     if (error) throw error;
    //     //     console.log(results)
    //     //     console.log('The solution is: ', results[0].solution);
    //     // });

    //     connection.end();
    // }


