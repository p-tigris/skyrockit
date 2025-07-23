const passUserToView = (req, res, next) => {
    res.locals.user = req.session.user ? req.sesssion.user : null;
    next();
}

module.exports = passUserToView;