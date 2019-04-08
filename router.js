
module.exports = (app) => {
    
    app.get("/", (req, res) => res.json({message: "Welcome to our Bookstore!"}));

    app.get("/books", BooksControllers.getAll);
    app.get("/books/view/:book_id", BooksControllers.getBook);
    app.post("/books/add", BooksControllers.addBook);
    app.delete("/books/remove/:book_id", BooksControllers.removeBook);
};