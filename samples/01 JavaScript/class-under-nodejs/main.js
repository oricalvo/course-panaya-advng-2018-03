class A {
    run() {
        console.log("A");
    }
}

class B extends A {
    constructor() {
        super();
    }

    run() {
        console.log("B");
    }
}

const b = new B();
b.run();
