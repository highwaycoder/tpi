

function search(query,cb) {
  var result = [];
  return cb(result);
}

// micro function to ensure we don't accidentally split strings into arrays
function a(t) {
  return (typeof t === 'string' ? [t] : t);
}

exports.get = function(req,res) {
  // if it was a request for just /search, then just serve up a search box
  if(req.url==='/search') {
    res.render('search');
  } else {
    /* query string format:
     * [tag] = filter by tag (show only results with this tag)
     * [ntag] = filter by tag (do not show results with this tag)
     * [q] = search query
     * [o] = result order (one of: 'date','date-desc','name','name-desc')
     * [lang] = filter by language (show only results with this language)
     * [nlang] = filter by language (do not show results with this language)
     * eg:
     * /search?tag=foo&tag=bar&q=baz
     * */
     var  query = {
          tags  : a(req.query['tag']) || [],
          ntags : a(req.query['ntag']) || [],
          query : req.query['q'] || '',
          order : req.query['o'] || 'date-desc', // default to date, descending
          lang  : a(req.query['lang']) || [],
          nlang : a(req.query['nlang']) || []
      };
    
      search(query,function(result) {
        res.render('search',{title:'Search Results',results:result,query:query});
      });
    }
};
