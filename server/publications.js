/* Publish prompts and tags collections in full */

Meteor.publish("prompts", function() {
	return Prompts.find();
});

Meteor.publish("tags", function() {
	return Tags.find();
});