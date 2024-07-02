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
    const artistass = await artistas.getArtistas()
    res.send(artistass);
});
app.get("/albumes", async (_, res) => {
    const album1 = await albumes.getAlbumes()
    res.send(album1);
});
app.get("/canciones", async (_, res) => {
    const canci = await canciones.getCanciones()
    res.send(canci);
});
app.put("/canciones/:id", async (req, res) => {
    console.log(req)
    const canup = await canciones.updateCancion(req.params.id,req.body.nombre,req.body.album,req.body.duracion)
    res.send(canup);
});
app.put("/artistas/:id", async (req, res) => {
    console.log(req)
    const ar = await artistas.updateArtista(req.params.id,req.body.nombre)
    res.send(ar);
});
app.put("/albumes/:id", async (req, res) => {
    console.log(req)
    const albumid = await albumes.updateAlbum(req.params.id,req.body.nombre,req.body.artista)
    res.send(albumid);
});
app.post("/canciones",async (req, res) => {
    const canc = await canciones.createCancion(req.body.nombre, req.body.album, req.body.duracion)
    res.send(canc);
});
app.post("/artistas",async (req, res) => {
    const arti = await artistas.createArtista(req.body.nombre)
    res.send(arti);
});
app.post("/albumes",async (req, res) => {
    const alb = await albumes.createAlbum(req.body.nombre, req.body.artista)
    res.send(alb);
});
app.delete("/canciones/:id",async (req, res) => {
    console.log(req)
    const can = await canciones.deleteCancion(req.params.id)
    res.send(can);
}); 
app.get("/canciones/:id", async (req, res) => {
    console.log(req)
    const canid = await canciones.getCancion(req.params.id)
    res.send(canid);
});

app.put("/canciones/:id/reproducir", async (req, res) => {
    console.log(req)
    const cani = await canciones.reproducirCancion(req.params.id)
    res.send(cani);
});