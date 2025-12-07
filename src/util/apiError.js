class ApiError extends Error {
    constructor(statusCode, type, message) {
        super(message); // mantém a mensagem nativa do Error
        this.statusCode = statusCode;
        this.type = type;
        this.message = message;
        this.error = true;

        // Mantém o stack trace correto
        Error.captureStackTrace(this, this.constructor);
    }
}

export { ApiError };
