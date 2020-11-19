class ButtonLike extends HTMLElement {
  connectedCallback(){
      this.render();
  }
  
  setTesting(){
    alert("okokokok")
  }

  render() {
      this.innerHTML= `
        <style>
        .like {
            font-size: 18px;
            position: fixed;
            bottom: 16px;
            right: 16px;
            background-color: #db0000;
            color: white;
            border: 0;
            border-radius: 50%;
            width: 55px;
            height: 55px;
            cursor: pointer;
            display: flex;
            align-items: center;
            justify-content: center;
        }
        </style>
        <button aria-label="like this movie" id="likeButton" class="like">
         <i class="fa fa-heart-o" aria-hidden="true"></i>
       </button>`
  }
  
}

customElements.define('button-like', ButtonLike);

export default ButtonLike;