function Counter() {
    var val = 0;

    function inc() {
        return ++val;
    }

    function dec() {
        return --val;
    }

    function get() {
        return val;
    }

    function dump() {
        console.log(val);
    }

    return {
        inc,
        dec,
        get,
        dump,
    };
}

var c1 = Counter();
var c2 = Counter();

c1.inc();
console.log("c1", c1.get());

console.log("c2", c2.get());

console.log(c1.inc == c2.inc);
console.log(c1.dec == c2.dec);

function Tag() {
}

const t = new Tag();
t.c1 = c1;
t.c2 = c2;


