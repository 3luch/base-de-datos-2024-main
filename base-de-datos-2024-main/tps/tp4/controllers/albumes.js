import { conn } from "../db.js";

const getAlbumes = async (_, res) => {
    // Completar con la consulta que devuelve todos los albumes
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        [
            {
                "id": 1,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            {
                "id": 2,
                "nombre": "Nombre del album",
                "nombre_artista": "Nombre del artista"
            },
            ...
        ]
    */
   try {
    const resultado = await conn .query("SELECT id, nombre, artista FROM albumes")
    return resultado
   }
   catch(error) {
console.error(error);
res.status(500).json({ message: "Error"});
   }
   };

const getAlbum = async (req, res) => {
    // Completar con la consulta que devuelve un album por id
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la siguiente forma:
    /*
        {
            "id": 1,
            "nombre": "Nombre del album",
            "nombre_artista": "Nombre del artista"
        }
    */
   try{
    const[results, fields] = await conn.query("SELECT id, nombre, artista FROM albumes where id = ?",
    [req] );
    return (resultado);
   }catch(err)
   {
    console.log(err);
   }
};

const createAlbum = async (req, res) => {
    // Completar con la consulta que crea un album
    // Recordar que los parámetros de una consulta POST se encuentran en req.body
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
        try{
            const[results, fields] = await conn.query("INSERT INTO `albumes` (nombre, artista) VALUES (?, ?)",
            [nombre, artista] );
            return (resultado);
           }catch(err)
           {
            console.log(err);
           }
};

const updateAlbum = async (req, res) => {
    // Completar con la consulta que actualiza un album
    // Recordar que en este caso tienen parámetros en req.params (el id) y en req.body (los demás datos)
    // Deberían recbir los datos de la siguiente forma:
    /*
        {
            "nombre": "Nombre del album",
            "artista": "Id del artista"
        }
    */
        try{
            const[results, fields] = await conn.query("UPDATE albumes SET nombre = ?, artista = ? where id = ?",
            [nombre, artista, id] );
            return (resultado);
           }catch(err)
           {
            console.log(err);
           }
};

const deleteAlbum = async (req, res) => {
    // Completar con la consulta que elimina un album
    // Recordar que los parámetros de una consulta DELETE se encuentran en req.params
    try{
        const[results, fields] = await conn.query("DELETE albumes",
        [req] );
        return (resultado);
       }catch(err)
       {
        console.log(err);
       }
};

const getCancionesByAlbum = async (req, res) => {
    // Completar con la consulta que devuelve las canciones de un album
    // Recordar que los parámetros de una consulta GET se encuentran en req.params
    // Deberían devolver los datos de la misma forma que getCanciones
};

const albumes = {
    getAlbumes,
    getAlbum,
    createAlbum,
    updateAlbum,
    deleteAlbum,
    getCancionesByAlbum,
};

export default albumes;
