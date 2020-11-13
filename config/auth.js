module.exports = {
  authRedirect: function (req, res, next) {
    if (req.isAuthenticated()) {
      next();
    } else {
      res.redirect(
        '/login.html?error=É necessário estar logado para entrar nessa página'
      );
    }
  },
  fowardRedirect: function (req, res, next) {
    if (req.isAuthenticated()) {
      res.redirect('/mapa.html?error=Você já está logado');
    } else {
      next();
    }
  },
};
