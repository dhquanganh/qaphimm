
class HomeController {
    homeIndex(req, res){
        res.render('index', { title: 'Trộm Phim' });
    }

    movieShow(req, res){
        res.render('movieDetail');
    }

    movieSearch(req, res){
        res.render('searchMovie');
    }
    
    movieList(req, res){
        res.render('movieList');
    }

    tvSeries(req, res){
        res.render('TvSeries');
    }
};

module.exports = new HomeController;