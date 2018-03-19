function Counter() {
    this.val = 0;
}

Counter.prototype.inc = function() {
    ++this.val;
}

Counter.prototype.dec = function() {
    --this.val;
}

for(var i=0; i<10; i++) {
    var c1 = new Counter();
    var c2 = new Counter();
}

c1.inc();

console.log(c1.val);



