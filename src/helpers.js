class EventEmitter {
    constructor() {
        this.events = {};
    }
    
    on(type, callback) {
        this.events[type] ? this.events[type].push(callback) : this.events[type] = [callback];
        
        console.log(this.events);
    }
    
    emit(type, args) {
        this.events[type].forEach(callback => callback(args));
    }
}

export { EventEmitter };