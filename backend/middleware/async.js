module.exports = (fun) => {
    return async (req, res, next) => {
        try {
            await fun(req, res);
        } catch (error) {
            res.status(500).json({ message: error.message });
            next();
        }
    };
};
