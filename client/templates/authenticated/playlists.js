Meteor.loginWithSoundcloud();

Template.playlists.helpers({
  getPlayLists:function(){
  		var currentUser = Meteor.userId();
  		var PL = PlayList.find({"owner": currentUser});
        return PL;
  }
});
