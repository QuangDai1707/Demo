const checkLogin = (req, res, next) => {
    if (req.cookies.login) {
        console.log(req.cookies.login);
        console.log(Date.now());
        next();
    }
    else res.redirect("/login");
}
module.exports = checkLogin