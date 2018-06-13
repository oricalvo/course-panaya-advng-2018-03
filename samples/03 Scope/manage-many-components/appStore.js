const appStore = {
    contacts: [
        {"id": 1, "name": "Ori", selected: false},
        {"id": 2, "name": "Roni", selected: false},
        {"id": 3, "name": "Udi", selected: false}
    ],
    nextId: -1,
};

console.log(appStore);

appModule.factory("appStore", function() {
    return appStore;
});
