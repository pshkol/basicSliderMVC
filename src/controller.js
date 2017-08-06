import { Model } from './model';
import { View } from './view';

class Controller {
    constructor(view, model) {
        this.view = view;
        this.model = model;
        
        this.view.on('add', this.addItem.bind(this));
    }
    
    addItem({input, src}) {
        this.model.add(input, src);
    }
}

export { Controller };