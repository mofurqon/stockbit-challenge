const { default: axios } = require('axios');
require('dotenv').config();

const URI = process.env.URI;
const key = process.env.apikey;

const search = async (req, res) => {
    const {search, page} = req.query;

    try {
        const getMovies = await axios.get(URI, {params: {
            apikey: key,
            s: search,
            page: page
        }});
        res.send(getMovies.data);
    } catch (err) {
        console.log(err);
    }
}

const detail = async (req, res) => {
    const id = req.query.movieId;

    try {
        const getMovies = await axios.get(URI, {params: {
            apikey: key,
            i: id
        }});
        res.send(getMovies.data);
    } catch (err) {
        console.log(err);
    }
}

module.exports = {
    search: search,
    detail: detail
}