const Books = require('../models/Books');

module.exports = {
    getAll: async (req, resp) => {
        try {
            const books = await Books.findAll({
                limit: 10
            }); 
            resp.send(JSON.stringify(books));
        } catch (e) {
            resp.status(200).send({
                error: e
            });
            return;
        }
    },

    getBook: async (req, resp) => {
        try {
            const books = await Books.findAll({
                where: {
                    /****
                     * in router.js we have app.get("/books/view/:book_id", BooksController.getBook);
                     */
                    id: req.params.book_id

                },
                limit: 1
            });
            resp.send(JSON.stringify(books));
        } catch (e) {
            resp.status(200).send({
                error: e
            });
            return;
        }
    },

    addBook: async (req, resp) => {
        try {
            const book = await Books.create(req.body);
            resp.send(JSON.stringify(book));
        } catch (e) {
            resp.status(200).send({
                error: e
            });
            return;
        }
    },

    removeBook: async (req, resp) => {
        try {
            const books = await Books.destroy({
                where: {
                    id: req.params.book_id

                },
                limit: 1
            });
            resp.send({
                deleted: 1
            });
        } catch (e) {
            resp.status(200).send({
                deleted: 0,
                error: e
            });
            return;
        }
    },
};