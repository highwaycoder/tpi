
/*
 * GET home page.
 */

exports.index = function(req, res){
  res.render('index', { 
      title: 'Home',
      projects: require('../../projects.json'),
      authorised: req.session.auth
  });
};
