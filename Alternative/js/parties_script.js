
function main() {
   
    map.addObject(group);
    // setup map group
    setUpClickListener();
    addInfoBubble(map);
}
function addInfoBubble(map) {
    

    // add 'tap' event listener, that opens info bubble, to the group
    

    addMarkerToGroup(group, { lat: 53.526296, lng: -113.525600 },
      '<div><a>Ultimate Frisbee</a>' +
      '</div><div >@ Quad<br>Today @ 3:00 PM</div>');

    addMarkerToGroup(group, { lat: 53.528200, lng: -113.525439 },
      '<div ><a>Stats 151 Study Group</a>' +
      '</div><div >@ CCIS L2-220<br>Tommrow @ 12:00 AM</div>');

}