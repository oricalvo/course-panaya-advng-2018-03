function compile(element, attrs) {
    const {$compile, $parse} = this;

    const arrExprFn = $parse(attrs.myRepeat);
    const itemExprFn = $parse(attrs.itemName);

    element.removeAttr("my-repeat");
    element.removeAttr("item-name");

    const marker = angular.element("<!-- marker -->");
    marker.insertBefore(element);

    element.remove();

    const template = element[0].outerHTML;
    const templateFn = $compile(template);

    return link.bind({
        arrExprFn,
        itemExprFn,
        templateFn,
    });
}

function link(scope, marker, attrs) {
    const {arrExprFn, itemExprFn, templateFn} = this;
    const itemsScopes = [];
    const itemsElements = [];

    scope.$watchCollection(arrExprFn, function(items) {
        clean(itemsScopes, itemsElements);

        if(items) {
            for(let i=items.length-1; i>=0; i--) {
                const item = items[i];
                const itemScope = scope.$new(false);
                itemExprFn.assign(itemScope, item);
                const itemElement = templateFn(itemScope, function(clone){});
                itemElement.insertAfter(marker);

                itemsScopes.push(itemScope);
                itemsElements.push(itemElement);
            }
        }
    });
}

function clean(scopes, elements) {
    for(const scope of scopes) {
        scope.$destroy();
    }

    for(const e of elements) {
        e.remove();
    }

    scopes.splice(0, scopes.length-1);
    elements.splice(0, elements.length-1);
}

appModule.directive("myRepeat", function($compile, $parse) {
    return {
        compile: compile.bind({
            $compile,
            $parse
        }),
    }
});
