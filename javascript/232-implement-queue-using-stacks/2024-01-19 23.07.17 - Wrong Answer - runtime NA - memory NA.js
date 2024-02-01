
var MyQueue = function() {
    this.inStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    if (this.inStack.length === 0) {
        this.inStack[0] = x
    } else {
        this.inStack.push(x)
    }
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
this.inStack.slice(0, 1)
    return this.inStack[this.inStack.length - 1]
};

/**
 * @return {number}
 */
MyQueue.prototype.peek = function() {
    return this.inStack[0]
};

/**
 * @return {boolean}
 */
MyQueue.prototype.empty = function() {
    if (this.inStack.length !== 0 || !this.inStack) {
        return false
    } else {
        return true
    }
};

/** 
 * Your MyQueue object will be instantiated and called as such:
 * var obj = new MyQueue()
 * obj.push(x)
 * var param_2 = obj.pop()
 * var param_3 = obj.peek()
 * var param_4 = obj.empty()
 */