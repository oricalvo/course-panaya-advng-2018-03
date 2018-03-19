import {appModule} from "./app.module";

export class AppComponent {
    title: string;
    
    constructor() {
        this.title = "Hello";
    }
}

appModule.component("appRoot", {
    controller: AppComponent,
    templateUrl: "app.component.html",
});
