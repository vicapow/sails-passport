// using https://gist.github.com/theangryangel/5060446
// as an example
var passport = require('passport')
  , LocalStrategy = require('passport-local').Strategy


passport.use(new LocalStrategy(
  function(username, password, done) {
    console.log('authentication...')
    return done(null, {
      username : username
    });
  }
));

passport.serializeUser(function(user, done) {
  console.log('passport serialize user')
  done(null, user.username);
});

passport.deserializeUser(function(username, done) {
  console.log('passport unserialize user')
  done(null, { username : username});
});

module.exports = {
  
  // Name of the application (used as default <title>)
  appName: "WOD Remix"
  
  // Port this Sails application will live on
  , port: 3000
  
  // The environment the app is deployed in 
  // (`development` or `production`)
  //
  // In `production` mode, all css and js are bundled up and minified
  // And your views and templates are cached in-memory.  Gzip is also used.
  // The downside?  Harder to debug, and the server takes longer to start.
  , environment: 'development'
  
  // Logger
  // Valid `level` configs:
  // 
  // - error
  // - warn
  // - debug
  // - info
  // - verbose
  //
  , log: {
    level: 'verbose'
  }
  
  , express : {
    customMiddleware : function(app){
      app.use(passport.initialize());
      app.use(passport.session());
    }
  }

};