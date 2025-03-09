const errorMiddleware = (err, req, res, next) => {
  try {
    let error = { ...err };
    error.message = err.message;

    console.log(err, "error middleware");

    // Handling Invalid MongoDB ObjectId
    if (err.name === "CastError") {
      error = new Error("Resource not found");
      error.statusCode = 404;
    }

    // Handling Duplicate Key Error (MongoDB error code 11000)
    if (err.code === 11000) {
      error = new Error("Duplicate fields value entered");
      error.statusCode = 400;
    }

    // Handling Mongoose Validation Errors
    if (err.name === "ValidationError") {
      const message = Object.values(err.errors)
        .map((val) => val?.message)
        .join(", ");
      error = new Error(message);
      error.statusCode = 400;
    }

    res
      .status(error.statusCode || 500)
      .json({ success: false, error: error.message || "Server Error" });
  } catch (error) {
    console.error("Error in errorMiddleware:", error);
    res.status(500).json({ success: false, error: "Server Error" });
  }
};

export default errorMiddleware;
