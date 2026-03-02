const express = require('express');
const router = express.Router();
const homeController = require('../controllers/homeController');

router.get("/movie/:id", homeController.movieShow);
router.get("/search", homeController.movieSearch);
router.get("/movie-list", homeController.movieList);
router.get("/tv-series", homeController.tvSeries);
router.get("/about", homeController.aboutPage);
router.get("/list-anime-series", homeController.animeSeries);
router.get("/list-anime-movie", homeController.animeMovie);
router.get('/', homeController.homeIndex);

module.exports = router;