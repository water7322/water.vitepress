class EventBus {
    constructor() {
        this.event = {};
    }
    on(eventName, fn) {
        if (this.event[eventName]) {
            this.event[eventName].push(fn);
        } else {
            this.event[eventName] = [fn];
        }
    }
    emit(eventName, ...args) {
        this.event[eventName].forEach((fn) => {
            fn.apply(this, args);
        });
    }
    off(eventName, fn) {
        if (eventName === undefined) {
            this.event = {};
        } else if (fn === undefined) {
            delete this.event[eventName];
        } else {
            const index = this.event[eventName].indexOf(fn);
            this.event[eventName].splice(index, 1);
        }
    }
    once(eventName, fn) {
        const cb = (...args) => {
            fn.apply(this, args);
            this.off(eventName, cb);
        };
        this.on(eventName, cb);
    }
}

const eventBus = new EventBus();
eventBus.on('event1', function (...args) {
    console.log(args);
    console.log(this);
});

eventBus.emit('event1', 1, 2);
eventBus.emit('event1', 1, 2);

eventBus.once('event2', function (...args) {
    console.log(args);
    console.log(this);
});

eventBus.emit('event2', 1, 2);
eventBus.emit('event2', 1, 2);
