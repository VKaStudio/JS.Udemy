class option {
    constructor(height, width, bg, fontSize, textAlign){
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
    }
    createDiv(){
        let newDiv = document.createElement('div');
        document.body.appendChild(newDiv);
        newDiv.textContent = `Hello! i have params: hight ${this.height}px`;

        let params = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        newDiv.style.cssText = params;
    }
}

const doDiv = new option(100, 100, 'green', 14, 'center');

doDiv.createDiv();



