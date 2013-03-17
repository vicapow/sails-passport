/**
* Allow any authenticated user.
*/
module.exports = function (req, res, next) {
  
  // User is allowed, proceed to controller
  var is_auth = req.isAuthenticated()
  console.log('authenticated... is auth: ' + is_auth)
  if (is_auth) return next();
  // User is not allowed
  else return res.redirect("/login");
};