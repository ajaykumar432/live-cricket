// src/utils/errorHandler.js

const logger = require('./logger'); // optional

const errorHandler = (err, req, res, next) => {
  console.error(err.stack); // for development
  logger?.error?.(err.message); // optional if using a logger

  res.status(err.statusCode || 500).json({
    success: false,
    message: err.message || 'Something went wrong',
  });
};

module.exports = errorHandler; // ✅ export the function itself
