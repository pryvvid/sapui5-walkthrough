sap.ui.define(
  [
    "sap/ui/core/UIComponent",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel",
  ],
  function (UIComponent, JSONModel, ResourceModel) {
    "use strict";

    return UIComponent.extend("sap.ui.demo.walkthrough.Component", {
      metadata: {
        interfaces: ["sap.ui.core.IAsyncContentCreation"],
        rootView: {
          viewName: "sap.ui.demo.walkthrough.view.App",
          type: "XML",
          /*"async": true, // implicitly set via the sap.ui.core.IAsyncContentCreation interface*/
          id: "app",
        },
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

        // set i18n model on view
        const i18nModel = new ResourceModel({
          bundleName: "sap.ui.demo.walkthrough.i18n.i18n",
          supportedLocales: [""],
          fallbackLocale: "",
        });

        this.setModel(i18nModel, "i18n");
      },
    });
  }
);
