const controller = require('../controllers/bookControllers')
const app = require('express')
const Route = app.Router()


    Route.get('/',controller.getBooks)
    .get('/:bookName',controller.getBook)
    .post('/',controller.postBook)
    .patch('/:bookid',controller.patchBook)
    .delete('/:bookid',controller.deleteBook)

module.exports = Route