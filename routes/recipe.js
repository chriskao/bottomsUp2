exports.viewRecipe = function(req, res) { 
	var name = req.params.name;
	console.log('The project name is: ' + name)
	res.render('recipe', {
		'projectName' : name
	})
};