class LazyService {
    constructor() {
    }

    calc() {
        return 42;
    }
}

console.log("Registering lazyService");

appModule.service("lazyService", LazyService);

debugger;

