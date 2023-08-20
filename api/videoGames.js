const express = require('express');
const router = express.Router();



const { getAllVideoGames,
    getVideoGameById,
    createVideoGame,
    updateVideoGame,
    deleteVideoGame } = require('../db/videoGames');

// GET - /api/video-games - get all video games
router.get('/', async (req, res, next) => {
    try {
        const videoGames = await getAllVideoGames();
        res.send(videoGames);
    } catch (error) {
        next(error);
    }
});

// GET - /api/video-games/:id - get a single video game by id
router.get('/:id', async (req, res, next) => {
    try {
        const videoGame = await getVideoGameById(req.params.id);
        res.send(videoGame);
    } catch (error) {
        next(error);
    }
});

// POST - /api/video-games - create a new video game
router.patch('/', async (req, res, next) => {
    // LOGIC GOES HERE 
    try {
        const newVideoGame = await createVideoGame(req.params, req.body)
        res.send(newVideoGame)
    } catch (error) {
        next(error);
    }
});


// PUT - /api/video-games/:id - update a single video game by id
router.put('/:id', async (req, res, next) => {
    // LOGIC GOES HERE 
    try {
        const updatedVideoGame = await updateVideoGame(req.params.id, req.body.name);
        res.send(updatedVideoGame)
    } catch (error) {
        next(error);
    } 
});

// DELETE - /api/video-games/:id - delete a single video game by id
router.delete('/:id', async (req, res, next) => {
    // LOGIC GOES HERE
    try {
        const deletedVideoGame = await deleteVideoGame(req.params.id);
        res.send(deletedVideoGame)
    } catch (error) {
        next(error);
    } 
    
});

module.exports = router;
