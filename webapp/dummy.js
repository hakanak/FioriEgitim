sap.ui.define([
"sap/ui/core/mvc/XMLView"
], function (XMLView) {
	"use strict";  // bir kural kullan. js kurallarini kullan anlaminda
    XMLView.create({
        viewName: "sap.ui.demo.walkthrough.view.App"
            }).then(function (oView){
                oView.placeAt("content");
            })

});


/* sap.ui.define([
    "sap/m/Text"
    ], function (Text) {
        "use strict";  // bir kural kullan. js kurallarini kullan anlaminda
    
    
        new Text({
            text:"Tırsan SAP Fiori Egitimi"
        }).placeAt("content");
    
    
    }); */