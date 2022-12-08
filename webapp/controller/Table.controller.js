sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast"
], function (Controller, MessageBox, MessageToast) {
	"use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      
      onShowHello : function () {   

         MessageToast.show("This message should appear in the message toast");

      },
      	onErrorMessageBoxPress: function () {
			MessageBox.error("Select a team in the \"Development\" area.\n\"Marketing\" isn't assigned to this area.");
		},

      onRetEt : function () {
      
         MessageToast.show("Talebiniz Ret Edilmiştir.", {
            duration: 5000,                  // default
            width: "60em",                   // default
            my: "center center",             // default
            at: "center center",             // default
            of: window,                      // default
            offset: "0 0",                   // default
            collision: "fit fit",            // default
            onClose: null,                   // default
            autoClose: true,                 // default
            animationTimingFunction: "ease", // default
            animationDuration: 2000,         // default
            closeOnBrowserNavigation: true   // default
         });






      }



   });
});