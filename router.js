const BooksController = require('./controllers/BooksController');
module.exports = (app) => {
    
    app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

    app.get("/books", BooksController.getAll);
    app.get("/books/view/:book_id", BooksController.getBook);
    app.post("/books/add", BooksController.addBook);
    app.post("/books/edit/", BooksController.editBook);
    app.delete("/books/remove/:book_id", BooksController.removeBook);
};