class SupporterFunctions{
    addSupporterToList(name){
        let supporterList = document.querySelector("#supporters ul");
        let supporterHtml = document.createElement("li");
        let removeSupporterHtml = document.createElement("button");
        
        removeSupporterHtml.onclick = this.removeSupporter;
        removeSupporterHtml.innerText = " remove ";
        supporterHtml.innerText = name;
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
        let name = document.querySelector("#supporter").value;

        this.addSupporterToList(name);
    }

    
}

new Supporters()