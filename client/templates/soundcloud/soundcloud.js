
Template.soundcloud.events({
	'submit form': function(event){
	    event.preventDefault();
	    var searchVar = event.target.searchSC.value;

		// find all sounds of buskers licensed under 'creative commons share alike'
		Meteor.promise(SC.get('/tracks', {
		  q: 'buskers', license: 'cc-by-sa'
		})).then(function(tracks) {
		  console.log(tracks);
		});

	}
});