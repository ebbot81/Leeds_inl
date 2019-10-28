class Person {
    constructor(name) {
        this.name = name;
      }
}

class SupporterFunctions{
    addSupporterToList(supporter){
        let supporterList = document.querySelector("#supporters ul");
        let supporterHtml = document.createElement("li");
        let removeSupporterHtml = document.createElement("button");
        
        removeSupporterHtml.onclick = this.removeSupporter;
        removeSupporterHtml.innerText = " Ta bort ";
        supporterHtml.innerText = supporter.name;
        supporterHtml.appendChild(removeSupporterHtml);
        supporterList.appendChild(supporterHtml);

    };
    removeSupporter(){
        let supporterList = document.querySelector("#supporters ul");
        let htmlToRemove = this.parentElement;
        supporterList.removeChild(htmlToRemove);
    }
}

class Supporters extends SupporterFunctions {

    constructor() {
        super();
        let button = document.getElementById("join-button");
        button.onclick = this.addSupporter.bind(this);
      }

      addSupporter() {
        let supporter = new Person(document.querySelector("#supporter").value);

        this.addSupporterToList(supporter);
    }

    
}

new Supporters()