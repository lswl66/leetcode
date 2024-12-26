class queue {
    constructor(arr = []) {
        this.items = arr
    }

    isEmpty() {
        return !!this.items.length;
    }

    enqueue(item) {
        this.items.push(item)
    }

    dequeue() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.item.shift()
    }

    front() {
        if (this.isEmpty()) {
            return "Queue is empty";
        }
        return this.items[0]
    }

    size() {
        return this.items.length;
    }

    clear() {
        this.items = []
    }
}

class stack {
    constructor(arr = []) {
        this.items = arr;
    }
    isEmpty() { }
    push() { }
    pop() { }
    peek() { }
    clear() { }
    size() { }
}