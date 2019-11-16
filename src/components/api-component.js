export default class ApiComponent extends HTMLElement{
    constructor() {
        super();
    }
    connectedCallback(){
        console.log("Hola desde componente");
    }
    render(){
        
    }
}
customElements.define('api-component', ApiComponent);
