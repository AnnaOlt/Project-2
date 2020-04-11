window.onload = function() {
    var sec = 75;
    setInterval(function() {
      var a = new Date();
      document.getElementById("timer").innerHTML = hou + " : " + sec;
      sec--;
      if (sec == 00) {
        hou--;
        sec = 60;
        if (hou == 0) {
          hou = 2;
        }
      }
    }, 500);
  };
  
  function resetTimer() {}