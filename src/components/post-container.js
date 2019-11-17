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
        postNode.setAttribute('class', 'post-container');
        postNode.setAttribute('id', `post_${this.post.id}`);
        postNode.innerHTML = postTemplate;
        this.appendChild(postNode);
    }
}
customElements.define('post-container', PostContainer);
