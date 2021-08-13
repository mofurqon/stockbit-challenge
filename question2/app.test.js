
const app = require('./app');
const request = require('supertest');

describe("GET /search", () => {
    test('Call Search API', async () => {
        const res = await request(app).get('/search').query({search: 'batman', page: '2'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('Search');
    });
});

describe("GET /detail", () => {
    test('Call Detail API', async () => {
        const res = await request(app).get('/detail').query({movieId: 'tt2281189'});
        expect(res.statusCode).toBe(200);
        expect(res.body).toHaveProperty('Title');
    });
});