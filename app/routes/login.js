

exports.form = function(req, res){
  if(req.session.auth) {
    res.send('true');
  } else {
    res.render('login');
  }
};

exports.post = function(req,res) {
	if(req.body.user == 'chris' && req.body.pass == 'monkeylove') {
		req.session.auth = true;
		res.send('true');
	} else {
		req.session.auth = false;
		res.send('false');
	}
};
