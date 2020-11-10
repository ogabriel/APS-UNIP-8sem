module.exports = {
  authRedirect: function (req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect('/login.html');
    }
  },
  fowardRedirect: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/mapa.html');
    } else {
      next();
    }
  },
};
