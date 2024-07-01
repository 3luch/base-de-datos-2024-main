import express from "express";
const app = express();
const port = 3000;

import artistas from "./controllers/artistas.js";
import albumes from "./controllers/albumes.js";
import canciones from "./controllers/canciones.js";

app.use(express.json());

app.get("/", (_, res) => {

    res.send("SpoTICfy API working!");
});

app.get("/artistas", async (_, res) => {
    const a = await artistas.getArtistas()
    res.send(a);
});
app.get("/albunes", async (_, res) => {
    const album = await albumes.getAlbumes()
    res.send(album);
});
app.get("/canciones", async (_, res) => {
    const can = await canciones.getCanciones()
    res.send(can);
});
app.put("/canciones/:id", async (req, res) => {
    console.log(req)
    const upcan = await canciones.updateCancion(req.params.id,req.body.nombre,req.body.album,req.body.duracion)
    res.send(upcan);
});
app.put("/artistas/:id", async (req, res) => {
    console.log(req)
    const upart = await artistas.updateArtista(req.params.id,req.body.nombre)
    res.send(upart);
});
app.put("/albumes/:id", async (req, res) => {
    console.log(req)
    const upalb = await albumes.updateAlbum(req.params.id,req.body.nombre,req.body.artista)
    res.send(upalb);
});
app.post("/canciones",async (req, res) => {
    const creacan = await canciones.createCancion(req.body.nombre, req.body.album, req.body.duracion)
    res.send(creacan);
});
app.post("/artistas",async (req, res) => {
    const creaart = await artistas.createArtista(req.body.nombre)
    res.send(creaart);
});
app.post("/albumes",async (req, res) => {
    const creaalb = await albumes.createAlbum(req.body.nombre, req.body.artista)
    res.send(creaalb);
});
app.delete("/canciones/:id",async (req, res) => {
    console.log(req)
    const delcan = await canciones.deleteCancion(req.params.id)
    res.send(delcan);
}); 
app.get("/canciones/:id", async (req, res) => {
    console.log(req)
    const can1 = await canciones.getCancion(req.params.id)
    res.send(can1);
});

app.put("/canciones/:id/reproducir", async (req, res) => {
    console.log(req)
    const reproca = await canciones.reproducirCancion(req.params.id)
    res.send(reproca);
});