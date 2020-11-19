class Loader extends HTMLElement {
    connectedCallback(){
        this.render();
    }

    render() {
        this.innerHTML = ` 
        <div class="bg-blue-500 w-full h-auto py-2 text-center">
         <h1 class="text-white font-bold">Info Covid</h1>
        </div> 
     `;
    }
}

customElements.define("load-der", Loader);