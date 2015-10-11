Meteor.loginWithSoundcloud();

Template.playlists.helpers({
  getMyPlayLists:function(){
  		var currentUser = Meteor.userId();
  		var PL = PlayList.find({"owner": currentUser});
        return PL;
  },
    getOtherPlayLists:function(){
  		var currentUser = Meteor.userId();
  		var PL = PlayList.find({"owner": {$not: currentUser}});
        return PL;
  },
});
