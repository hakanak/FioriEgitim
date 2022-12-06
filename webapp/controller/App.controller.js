sap.ui.define([
   "sap/ui/core/mvc/Controller",
   "sap/m/MessageToast"
], function (Controller,	MessageToast) {
   "use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onShowHello : function () {
         // show a native JavaScript alert
        // alert("Deneme Deneme");
        MessageToast.show("This message should appear in the message toast", {
         duration: 5000,                  // default
         width: "60em",                   // default
         my: "center bottom",             // default
         at: "center bottom",             // default
         of: window,                      // default
         offset: "0 0",                   // default
         collision: "fit fit",            // default
         onClose: null,                   // default
         autoClose: true,                 // default
         animationTimingFunction: "ease", // default
         animationDuration: 1000,         // default
         closeOnBrowserNavigation: true   // default
     });
      }
   });
});