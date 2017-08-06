class Slider {
    constructor(container, left, right) {
        this.slider = container;
        this.left = left;
        this.right = right;
        this.sliderItems = this.slider.children.length;
        this.count = 1;
        
        left.addEventListener('click', this.moveLeft.bind(this));
        right.addEventListener('click', this.moveRight.bind(this));
    }
    
    moveLeft() {
        if (this.count <= 1) {
            this.count = this.sliderItems;
            this.move();
        } else {
            this.count--;
            this.move();
        }
    }
    
    moveRight() {
        if (this.count >= this.sliderItems) {
            this.count = 1;
            this.move();
        } else {
            this.count++;
            this.move();
        }
    }
    
    updateSlider() {
        this.sliderItems = this.slider.children.length;
    }
    
    move() {
        this.slider.style.cssText = `left: -${(this.count-1)*700}px`;
    }
}

export { Slider };