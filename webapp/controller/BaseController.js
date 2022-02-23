sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/core/Fragment",
    "sap/ui/core/syncStyleClass",
  ],
  function (Controller, Fragment, syncStyleClass) {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.walkthrough.controller.BaseController",
      {
        onOpenDialog: function () {
          // create dialog lazily
          if (!this.pDialog) {
            this.pDialog = this.loadFragment({
              name: "sap.ui.demo.walkthrough.view.HelloDialog",
            }).then(
              function (oDialog) {
                // forward compact/cozy style into dialog
                syncStyleClass(
                  this.getOwnerComponent().getContentDensityClass(),
                  this.getView(),
                  oDialog
                );
                console.log(this.getView().getViewName());
                return oDialog;
              }.bind(this)
            );
          }
          this.pDialog.then(function (oDialog) {
            oDialog.open();
          });
        },
        onCloseDialog: function () {
          this.byId("helloDialog").close();
        },
      }
    );
  }
);
