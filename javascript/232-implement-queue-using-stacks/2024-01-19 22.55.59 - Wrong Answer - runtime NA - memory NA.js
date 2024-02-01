
var MyQueue = function() {
    this.inStack = []
    this.outStack = []
};

/** 
 * @param {number} x
 * @return {void}
 */
MyQueue.prototype.push = function(x) {
    this.inStack.push(x)
    return null;
};

/**
 * @return {number}
 */
MyQueue.prototype.pop = function() {
    this.outStack.push(this.inStack[0])
    return this.outStack[0]
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
    if (this.inStack.length !== 0) {
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