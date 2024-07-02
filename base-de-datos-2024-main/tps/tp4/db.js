import mysql from "mysql2/promise";

export const conn = await mysql.createConnection({
    // Completar con los datos de la conexión a la base de datos
});
export const config = {
    user: "root" ,
    password: "eeng2007" ,
    host: "localhost" , 
    database: "tp4"
}