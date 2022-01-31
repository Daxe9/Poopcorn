module.exports = function (req, res, next) {
    console.log(`A request was made with ${req.method} method.`);
    next();
};
