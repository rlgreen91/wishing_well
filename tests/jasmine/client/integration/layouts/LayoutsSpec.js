/* Testing that routes render correctly */

describe('Routing', function() {
	
	describe('should return the correct title', function() {
		it('lists "Wishing Well" for index', function() {
			FlowRouter.go('/');
			expect($('title').text()).toEqual('Wishing Well');
		});

		it('lists "Add Prompt" for add-prompt', function() {
			FlowRouter.go('/add-prompt');
			expect($('title').text()).toEqual('Add Prompt');
		});

		it('lists "Search Prompts" for search-prompts', function() {
			FlowRouter.go('/search-prompts');
			expect($('title').text()).toEqual('Search Prompts');
		});

		it('lists "Be Inspired" for be-inspired', function() {
			FlowRouter.go('/be-inspired');
			expect($('title').text()).toEqual('Be Inspired');
		});
	});
});