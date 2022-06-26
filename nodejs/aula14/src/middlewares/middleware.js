exports.middlewareGlobal = (req, res, next) => {
    console.log();
    console.log('Passando pelo middleware global...');
    console.log();
    next();
}