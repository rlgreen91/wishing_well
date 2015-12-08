/* Set routes for application */

FlowRouter.route('/', {
	//route to home page
	action: function(params) {
		BlazeLayout.render('index');
	}
});

FlowRouter.route('/add-prompt', {
	//route to add prompt page
	action: function(params) {
		BlazeLayout.render('add');
	}
});

FlowRouter.route('/search-prompts', {
	//route to search prompts page
	action: function(params) {
		BlazeLayout.render('search');
	}
});

FlowRouter.route('/be-inspired',{
	//route to be inspired page
	action: function(params) {
		BlazeLayout.render('random')
	}
});