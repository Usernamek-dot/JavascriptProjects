const mysql = require('mysql');
function ConnectDatabse(config) {
    return new Promise(function(resolve, reject) {
        const conn = mysql.createConnection(config);
connection.connect(function(err){
    if(err) {
        reject(err);
        return;
    }
    resolve(connection);
})

    });
}

ConnectDatabse({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'must'
}) .then