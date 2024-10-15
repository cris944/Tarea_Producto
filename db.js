const mysql = require('mysql2');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '123456',
    database: 'bdnode'
});
connection.connect((err)=>{
if(err){
    console.log("ERROR de conexion MYSQL: ",err)
    return;
}else{
    console.log("Conectado a BD MYSQL")
}
});

module.exports = connection;