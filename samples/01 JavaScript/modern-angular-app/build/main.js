const path = require("path");
const child_process = require("child_process");
const open = require("open");

main();

function main() {
    try {
        const command = process.argv[2];
        if (command == "dev") {
            dev();
        }
        else {
            throw new Error("Unknown command: " + command);
        }
    }
    catch (err) {
        console.error(err);
    }
}

function dev() {
    child_process.spawn(
        "node_modules\\.bin\\webpack", [
            "-w",
        ], {
            shell: true,
            stdio: "inherit",
            cwd: path.resolve(__dirname, "../client")
        });

    child_process.spawn(
        "node_modules\\.bin\\http-server", [
        ], {
            shell: true,
            stdio: "inherit",
            cwd: path.resolve(__dirname, "../client")
        });

    setTimeout(function() {
        open("http://localhost:8080");
    }, 1500);
}
