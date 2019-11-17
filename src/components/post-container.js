export default class PostContainer extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback(){
        this.render()
        console.log('Hola desde componente de Publicaciones');
    }
    render(){
        const postTemplate = `
            <h2>Titulo del Post</h2>
            <p>Texto del post</p>
        `;
        let postNode = document.createElement('div');
        postNode.innerHTML = postTemplate;
        this.appendChild(postNode);
    }
}
customElements.define('post-container', PostContainer);
