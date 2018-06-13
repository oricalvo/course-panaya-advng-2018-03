function compile(element, attrs) {
    const {$compile, $parse} = this;
    const metadata = [];
    const columns = element.find("column");

    const dataExpr = $parse(attrs.data);
    const dataItemExpr = $parse(attrs.item);

    columns.each(function() {
        const column = $(this);

        const title = column.find("title");
        const template = column.find("template");

        const columnInfo = {
            title: title.text(),
            templateFn: $compile(template.html()),
        };

        metadata.push(columnInfo);
    });

    element.html("");

    const table = angular.element("<table />");
    element.append(table);

    const thead = angular.element("<thead />");
    table.append(thead);

    const tr = angular.element("<tr />");
    thead.append(tr);

    for(const columnInfo of metadata) {
        const td = angular.element("<td />");
        td.text(columnInfo.title);
        tr.append(td);
    }

    const tbody = angular.element("<tbody />");
    table.append(tbody);

    return {
        pre: function() {
        },
        post: function() {
        }
    }
}

function link(scope, element, attrs) {
    const {metadata, dataExpr, dataItemExpr} = this;

    const tbody = element.find("tbody");

    scope.$watchCollection(dataExpr, function(data) {
        for(const dataItem of data) {
            const tr = angular.element("<tr />");
            tbody.append(tr);

            const childScope = scope.$new(false);

            dataItemExpr.assign(childScope, dataItem);

            for (const columnInfo of metadata) {
                const td = angular.element("<td />");
                tr.append(td);

                const elementCell = columnInfo.templateFn(childScope, function(clone){});
                td.append(elementCell);
            }
        }
    });
}

appModule.directive("grid", function($compile, $parse) {
    return {
        compile: compile.bind({
            $compile,
            $parse,
        }),
    };
});

