(function(window){
  var names=["Yaakov","John","Jen","jason","paul","frank","Larry","Paula","Laura","Jim"];
  for(var i in names){
    var firstletter=((names[i]).charAt(0)).toLowerCase();
    if(firstletter=="J"){
      window.byeSpeaker.speak(names[i]);
    }
    else{
      window.helloSpeaker.speak(names[i]);
    }
  }
})(window);