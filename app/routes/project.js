
/*
 * GET home page.
 */

exports.display = function(req, res){
  req.session.cwl = req.session.cwl || 'node.js';
  var p = require('../../' + req.session.cwl + '/projects.json')[req.query['name']];
  res.render('project', { title: p.name,language: req.session.cwl,project: p });
};

