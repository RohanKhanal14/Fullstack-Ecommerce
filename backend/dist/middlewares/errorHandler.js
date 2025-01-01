export const errorHandler = (err, req, res, next) => {
    return res.status(500).json({
        status: "fail",
        message: err.message,
    });
};
