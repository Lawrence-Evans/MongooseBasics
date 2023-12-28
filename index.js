const mongoose =require('mongoose');
mongoose.connect('mongodb://127.0.0.1:27017/moviesApp', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
       console.log("Connected")
    })
    .catch(err => {
        console.log("Failed to connect")
        console.log(err)
    })

    const movieSchema = new mongoose.Schema({
        title: String,
        year: Number,
        score: Number,
        rating: String
    });

    const Movie = mongoose.model('Movie', movieSchema);
    //const amadeus = new Movie({title: 'Amadeus', year: 1986, score: 9.2, rating: 'R'});

//Movie.insertMany([
//    {title: 'Greggmus', year: 1997, score: 3.2, rating: 'U'},
//    {title: 'Bigg', year: 1867, score: 7.8, rating: '15'},
//])
//    .then(data => {
//        console.log("Success")
//        console.log(data);
//})