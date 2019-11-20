export default class PostContainer extends HTMLElement{
    constructor() {
        super();
    }
    get post() {
        return JSON.parse(this.getAttribute('data-post'));
    }
    connectedCallback(){
        this.render()
        }
    render(){
        const postTemplate = `
            <p>${this.post.title}</p>
        `;
        let postNode = document.createElement('div');
        postNode.innerHTML = postTemplate;
        this.appendChild(postNode);
    }
}
customElements.define('post-container', PostContainer);
