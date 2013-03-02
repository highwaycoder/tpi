
/*
 * GET home page.
 */

exports.index = function(req, res){
  req.session.cwl = req.query['language'] || req.session.cwl || 'node.js';
  res.render('index', { 
      title: 'Home',
      language: req.session.cwl,
      projects: require('../../' + req.session.cwl + '/projects.json'),
      languagelist: require('../../languages.json')
  });
};
