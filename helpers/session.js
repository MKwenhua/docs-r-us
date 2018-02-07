const isLoggedIn = (req, res, next) => {
  if (req.isAuthenticated()) {
    return next();
  }
  res.redirect('/signin');
}

const LogOut = (req, res) => {
  req.session.destroy(err => {
    res.redirect('/')
  });
}

module.exports = passport => {
  const SignUpHandler = passport.authenticate('local-signup', {
    successRedirect: '/',
    failureRedirect: '/signup'
  });

  const SignInHandler = passport.authenticate('local-signin', {
    successRedirect: '/',
    failureRedirect: '/signin?error=true'
  })

  return {
    isLoggedIn,
    LogOut,
    SignUpHandler,
    SignInHandler
  }
}
