var Rooms = {
  allRooms: [],
  
  add: function(roomName) {
    Rooms.allRooms.push(roomName);
  },
  
  get: function() {
    return Rooms.allRooms;
  }
  // should have a method to change message view based on a room
};