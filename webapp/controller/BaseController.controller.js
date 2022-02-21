sap.ui.define(
  ["sap/ui/core/mvc/Controller", "sap/ui/core/Fragment"],
  function (Controller, Fragment) {
    "use strict";

    return Controller.extend(
      "sap.ui.demo.walkthrough.controller.BaseController",
      {
        onOpenDialog: function () {
          // create dialog lazily
          if (!this.pDialog) {
            this.pDialog = this.loadFragment({
              name: "sap.ui.demo.walkthrough.view.HelloDialog",
            });
          }
          this.pDialog.then(function (oDialog) {
            oDialog.open();
          });
        },
      }
    );
  }
);
