class BookNotFoundError extends Error {
    constructor(message) {
        super(message);
        this.statusCode = 404;
        this.name = "BookNotFoundError";
    }
}

module.exports = BookNotFoundError;
