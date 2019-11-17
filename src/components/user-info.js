export default class UserInfo extends HTMLElement{
    constructor(){
        super();

    }

    connectedCallback(){
        this.render();
        console.log('Hola desde componente usuarios');
    }

    render(){
        const userTemplate = `
        <img src="" alt="Avatar">
        <h1>Usuario</h1>
        `;
        let userNode = document.createElement('div');
        userNode.innerHTML = userTemplate;
        this.insertBefore(userNode, this.childNodes[0]);
    }
}
customElements.define('user-info',UserInfo);