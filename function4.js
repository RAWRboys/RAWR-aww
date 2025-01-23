const greeting = function(name ,language) {
    if(language === "English") {
     return "good moorning" + name + "!" ;
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `selamat pagi ${name}!`;
    }
}
console.log(greeting('Baby'));