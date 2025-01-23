function greeting (name ,language) {
    if(language === "English") {
     return ` good moorning ${name}!`
    } else if (language === "French") {
        return `Bonjour ${name}!`;
    } else {
        return `selamat pagi ${name}!`;
    }
}
let greetingmessage = greeting("inzi" , "French");
console.log(greetingmessage);