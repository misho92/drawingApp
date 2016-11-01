//receive data
if(sessionStorage.getItem("sky") != "Yes") {
    document.getElementById("sky").style.opacity = 0;
}
if(sessionStorage.getItem("sun") != "Yes") {
    document.getElementById("sun").style.opacity = 0;
}
if(sessionStorage.getItem("house") != "Yes") {
    document.getElementById("house").style.opacity = 0;
}

document.getElementById("sky").style.width = window.screen.width;
document.getElementById("sky").style.height = 100;

document.getElementById("sun").style.marginLeft = window.screen.width - 100;

//touching events for mobile devices

$( init );

 function init() {
      document.addEventListener("touchstart", touchHandler, true);
      document.addEventListener("touchmove", touchHandler, true);
      document.addEventListener("touchend", touchHandler, true);
      document.addEventListener("touchcancel", touchHandler, true);
  }
  function touchHandler(event)
  {
      var touches = event.changedTouches,
      first = touches[0],
      type = "";
      switch(event.type)
      {
          case "touchstart": type = "mousedown"; break;
          case "touchmove":  type="mousemove"; break;
          case "touchend":   type="mouseup"; break;
          default: return;
      }
      var simulatedEvent = document.createEvent("MouseEvent");
       simulatedEvent.initMouseEvent(type, true, true, window, 1,
                          first.screenX, first.screenY,
                          first.clientX, first.clientY, false,
                          false, false, false, 0, null);
      first.target.dispatchEvent(simulatedEvent);
      event.preventDefault();
   }
  $( function() {
    $( "#sky" ).draggable();
    $( "#sun" ).draggable();
    $( "#house" ).draggable();
  } );
