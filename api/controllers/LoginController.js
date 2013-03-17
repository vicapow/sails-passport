/*---------------------
  :: Login 
  -> controller
---------------------*/

var passport = require('passport')

var LoginController = {
  index : function (req,res) {
    res.view()
  }
  , create : function (req, res, next) {
    console.log('create')
    passport.authenticate('local', function(err, user, info) {
      if (err) return next(err)
      if (!user) return res.redirect('/login')
      req.logIn(user, function(err){
        if(err) return next(err)
        return res.redirect('/')
      })
    })(req, res, next)
  }
}
module.exports = LoginController