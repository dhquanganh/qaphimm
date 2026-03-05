

class HomeController {
    homeIndex(req, res) {
        res.render('index', { title: 'Trộm Phim' });
    }

    async movieShow(req, res) {
        res.render('movieDetail');
    }

    movieSearch(req, res) {
        res.render('searchMovie');
    }

    movieList(req, res) {
        res.render('movieList');
    }

    tvSeries(req, res) {
        res.render('TvSeries');
    }

    aboutPage(req, res) {
        res.render('author');
    }

    animeSeries(req, res) {
        res.render('AnimeSeries');
    }

    animeMovie(req, res) {
        res.render('AnimeMovie');
    }
};

module.exports = new HomeController;