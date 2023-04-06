class Chaining {
    constructor() {
        this.queue =[]
        setTimeout(() => {
            this.next()
        })
    }
    eat(fruit) {
        this.queue.push(() => {
            console.log(fruit)
            this.next()
        })
        return this;
    }
    sleep(delay) {
        this.queue.push(() => {
            setTimeout(() => {
                console.log('sleep', delay)
                this.next()
            }, delay)
        })
        return this;
    }
    next() {
        const fn = this.queue.shift()
        fn?.();
    }
}

const chaining = new Chaining()
chaining.eat('apple').eat('pear').sleep(3000).eat('banana')