var lib = (function() {
    "use strict";

    function log(message) {
        console.log("lib " + message);
    }

    function run() {
        log("run");
    }

    return {
      run: run,
    };
})();
