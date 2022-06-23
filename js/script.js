
(function mainFunction() {
    var names = ["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim"];
    for (var name in names) {
        var firstLetter = names[name][0];
        if (firstLetter == 'J' || firstLetter == 'j') {
            byeSpeaker.speak(names[name]);
        } else {
            window.helloSpeaker.speak(names[name]);
        }
    }
}())