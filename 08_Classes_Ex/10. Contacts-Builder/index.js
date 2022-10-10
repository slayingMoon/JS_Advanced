class Contact {
    constructor(firstName, lastName, phone, email) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.phone = phone;
        this.email = email;
        this._online = false;
    }

    get online() {
        return this._online;
    }

    set online(value) {
        this._online = value;
        if(this.titleDiv) {
            this.titleDiv.className = this._online ? 'title online' : 'title';
        }
    }

    render(id) {
        this.article = document.createElement('article');
        this.titleDiv = document.createElement('div');
        this.btnI = document.createElement('button');
        this.infoDiv = document.createElement('div');
        this.phoneSpan = document.createElement('span');
        this.emailSpan = document.createElement('span');

        this.titleDiv.className = this._online ? 'title online' : 'title';
        this.titleDiv.textContent = this.firstName + ' ' + this.lastName;
        this.btnI.innerText = '&#8505;';
        this.titleDiv.appendChild(this.btnI);
        this.article.appendChild(this.titleDiv);

        this.infoDiv.className = 'info';
        this.infoDiv.style.display = 'none'; //always hidden unless the 'I' button is clicked
        this.phoneSpan.innerText = '&phone; ' + this.phone;
        this.emailSpan.innerText = '&#9993; ' + this.email;
        this.infoDiv.appendChild(this.phoneSpan);
        this.infoDiv.appendChild(this.emailSpan);
        this.article.appendChild(this.infoDiv);

        document.getElementById(id).appendChild(this.article);

        this.btnI.addEventListener('click', () => {
            this.infoDiv.style.display == 'none' ? 
            this.infoDiv.style.display = 'block' : 
            this.infoDiv.style.display = 'none';
        })
    }
}