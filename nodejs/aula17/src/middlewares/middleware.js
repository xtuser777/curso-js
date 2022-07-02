exports.middlewareGlobal = (req, res, next) => {
    res.locals.umaVariavelLocal = 'Este é o valor da variável local.';
    next();
};

exports.checkCsrfToken = (err, req, res, next) => {
    if (err && err.code === 'EBADCSRFTOKEN')
        return res.render('csrf-error');
};

exports.csrfMiddleware = (req, res, next) => {
    res.locals.csrfToken = req.csrfToken();
    next();
}