import { EventEmitter } from './helpers';
import { Slider } from './slider';

class View extends EventEmitter {
    constructor() {
        super();
        
        this.addButton = document.getElementById('add-button');
        this.list = document.getElementById('slides-list');
        this.sliderImg = document.querySelector('.slider-wrap');
        console.log(this.list);
        
        this.addButton.addEventListener('click', this.handleAdd.bind(this));
        
        const slider = document.getElementsByClassName('slider-wrap')[0];
        const left = document.getElementById('left');
        const right = document.getElementById('right');
        this.slider = new Slider(slider, left ,right);
    }
    
    handleAdd(e) {
        e.preventDefault();
        
        const input = document.getElementById('add-input').value;
        const file = document.getElementById('src-input').files[0];
        const src = JSON.stringify(URL.createObjectURL(file));
        
        this.emit('add', {input, src});
        
        if (input == false || file == false) {
            alert('Вы не выбрали файл или не дали название');
            return false;
        }
        
        this.addItem(input);
        this.addSlide(file);
    }
    
    addItem(title) {
        const li = document.createElement('li');
        li.className = 'slides-item';
        li.textContent = title;
        this.list.appendChild(li);
    }
    
    addSlide(file) {
        const img = document.createElement('img');
        img.src = URL.createObjectURL(file);
        this.sliderImg.appendChild(img);
        this.slider.updateSlider();
    }
}

export { View };