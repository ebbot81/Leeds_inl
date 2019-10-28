class Supporters {
    constructor(name) {
    this.name = name;
    }    
}

let numberOfClicks = 0;
let button = document.getElementById("join-button");
button.onclick = clickCountMembers;
name = "";

function clickCountMembers() {
    if (numberOfClicks ++) {
        alert (`Congratulations ${this.name}, you are member number ${numberOfClicks}`)
    }
}