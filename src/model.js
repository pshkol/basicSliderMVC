class Model {
    constructor() {
        this.slider = [];
    }
    
    findItemIndex(id) {
        return this.slider.findIndex(item => item.id = id);
    }
    
    add(title, src) {
        this.slider.push({
            id: Date.now(),
            title,
            src
        });
    }
    
    remove(id) {
        const itemIndex = findItemIndex(id);
        
        if (itemIndex > -1) {
            this.slider.splice(itemIntex, 1);
        }
    }
}

export { Model };