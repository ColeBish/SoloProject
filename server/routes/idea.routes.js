const IdeaController = require('../controllers/idea.controller');

module.exports = app => {
    app.get('/api/ideas', IdeaController.findAllIdeas);
    app.get('/api/ideas/:id', IdeaController.findOneSingleIdea);
    app.put('/api/ideas/:id', IdeaController.updateExistingIdea);
    app.post('/api/ideas', IdeaController.createNewIdea);
    app.delete('/api/ideas/:id', IdeaController.deleteAnExistingIdea);
}