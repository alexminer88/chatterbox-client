var Friends = {
  listOfFriends: new Set,
  
  isFriend: function(name) {
    return Friends.listOfFriends.has(name);
  },
  
  toggleStatus: function(friend, callback = () => {}) {
    // if friend is not found in listOfFriends, create it and then set 
    // value to true.
    // if friend is found in listOfFriends, flip truthiness of value
    if (Friends.listOfFriends.has(friend)) {
      Friends.listOfFriends.delete(friend);
      callback(false);
    } else {
      Friends.listOfFriends.add(friend);
      callback(true);
    }
    
    // return true;
  },
  
};