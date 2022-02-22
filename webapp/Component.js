sap.ui.define(
  ["sap/ui/core/UIComponent", "sap/ui/model/json/JSONModel"],
  function (UIComponent, JSONModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        manifest: "json",
      },
      /**
       * @override
       */
      init: function () {
        UIComponent.prototype.init.apply(this, arguments);
        // set data model on view
        const oData = {
          recipient: {
            name: "UI5",
          },
        };

        const oModel = new JSONModel(oData);

        this.setModel(oModel);

        // create the views based on the url/hash
        this.getRouter().initialize();
      },
    });
  }
);
