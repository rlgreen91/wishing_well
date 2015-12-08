/*Subscribe to prompt and tag collections */
Template.random.onCreated( function() {
  var self = this;
  self.autorun( function() {
    self.subscribe('prompts');
    self.subscribe('tags');
  });
});