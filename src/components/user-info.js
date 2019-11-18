export default class UserInfo extends HTMLElement{
    constructor(){
        super();
    }

    get user() {
        return JSON.parse(this.getAttribute('data-user'));
    }

    connectedCallback(){
        this.render();
    }

    render() {
        const imgUrl = `//joeschmoe.io/api/v1/${this.user.gender}/${this.user.firstName}`;
        const userTemplate = `
        <img src="${imgUrl}" alt="${this.user.firstName}">
        <h2>${this.user.name}</h2>
        `;
        let userNode = document.createElement('div');
        userNode.setAttribute('class', 'user-info');
        userNode.setAttribute('id', `user_${this.user.id}`)
        userNode.innerHTML = userTemplate;
        this.insertBefore(userNode, this.childNodes[0]);
    }
}
customElements.define('user-info',UserInfo);