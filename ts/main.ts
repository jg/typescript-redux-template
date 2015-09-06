/// <reference path="./references.ts" />

module Main {
    export class App {
        start() {
            React.render(React.createElement(Main.HelloBox),
                         document.getElementById('container'));
        }
    }
}
