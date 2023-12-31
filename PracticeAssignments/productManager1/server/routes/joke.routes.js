// ------ MOVIE ROUTES IN ROUTES----
// routes need the controller to execute the queries
const JokeController = require("../controllers/joke.controller");

module.exports = (app) => {
    app.get("/api/jokes", JokeController.readAll);
    app.get('/api/jokes/:id', JokeController.readOne);
    app.post('/api/jokes', JokeController.create);
    app.patch('/api/jokes/:id', JokeController.update);
    app.delete('/api/jokes/:id', JokeController.delete);
};
