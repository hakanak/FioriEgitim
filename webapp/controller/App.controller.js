sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
   "sap/ui/model/json/JSONModel"
], function (Controller, MessageBox, MessageToast,JSONModel) {
	"use strict";
   return Controller.extend("sap.ui.demo.walkthrough.controller.App", {
      onInit: function(){

         let oData = {
            recipient:{
               name:"DENEME BLA BLA",
               name1:"HELLO BLA BLA"
            }
         };

         let oModel = new JSONModel(oData);

         this.getView().setModel(oModel);

      },
      onSave: function(){

         var oModel = this.getView().getModel();

         oModel.getData().recipient.name = "123456";
         oModel.refresh();

         MessageToast.show("Kaydedildi");


      },

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