sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageBox",
	"sap/m/MessageToast",
   "sap/ui/model/json/JSONModel",
   "sap/ui/model/resource/ResourceModel"
], function (Controller,
	MessageBox,
	MessageToast,
	JSONModel,
	ResourceModel) {
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
         oModel.loadData("https://localhost:44325/api/Home/Motive2");
         this.getView().setModel(oModel);

        // this.byId("txt3").setValue("BY ID ILE ATTIK");

         // set i18n model on view
         var i18nModel = new ResourceModel({
            bundleName: "sap.ui.demo.walkthrough.i18n.i18n"
         });
         this.getView().setModel(i18nModel, "i18n");


      },
      onSave: function(){

         var oModel = this.getView().getModel();

         oModel.getData().recipient.name = "123456";
         oModel.refresh();

         MessageToast.show("Kaydedildi");


      },
      onShowHello : function () {
         // read msg from i18n model
         var oBundle = this.getView().getModel("i18n").getResourceBundle();
         var sRecipient = this.getView().getModel().getProperty("/soz");
         var sMsg = oBundle.getText("helloMsg", [sRecipient]);
         // show message
         MessageToast.show(sMsg);
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