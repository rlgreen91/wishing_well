/* Subscribe to prompt and tag collections */
Template.search.onCreated( function() {
  var self = this;
  self.autorun( function() {
    self.subscribe('prompts');
    self.subscribe('tags')
  });
});