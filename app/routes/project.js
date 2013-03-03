
/*
 * GET home page.
 */

exports.display = function(req, res){
  if(typeof(req.query['name']) !== undefined) {
    var p = require('../../projects.json')[req.query['name']];
    res.render('project', { title: p.name,project: p });
  } else {
    res.render('error', { short:'Project Name Missing',long: 'No project name supplied to /project request.' });
  }
  
};

