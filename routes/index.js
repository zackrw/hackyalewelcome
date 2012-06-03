
/*
 * GET home page.
 */

exports.showHtml = function(req, res){
  res.render('html', { title: 'Welcome To HackYale | HTML', layout: 'html_layout' });
};

exports.showCss = function(req, res){
  res.render('css', { title: 'Welcome To HackYale | CSS', layout: 'css_layout' });
};

exports.showJS = function(req, res){
  res.render('javascript' , { title: 'Welcome To HackYale | JavaScript', layout: 'js_layout' });
};

exports.demo = function(req, res){
  res.render('demo', { title: 'HTML | demo', layout: 'demo_layout' });
};