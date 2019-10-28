class Supporters {
    numberOfClicks = 0;
    name = document.querySelector("#supporter");

    constructor() {
        let button = document.getElementById("join-button");
        button.onclick = this.clickCountMembers.bind(this);
      }

    clickCountMembers() {
        if (++this.numberOfClicks) {
            alert(`Congratulations ${this.name.value}, you are member number ${this.numberOfClicks}`)
        }
    }
}

new Supporters()