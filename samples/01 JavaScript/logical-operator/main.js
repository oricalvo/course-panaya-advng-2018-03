var obj = {
    id: 1,
};

function g() {
}

var expr = a && a.b && a.b.c;
if(expr) {
    expr.doSomething();
}

// var c;
// if(a!=null && a.b!=null) {
//     c = a.b.c;
// }

console.log(expr == obj);



