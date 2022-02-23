sap.ui.define(
  ["./BaseController", "sap/m/MessageToast"],
  function (BaseController, MessageToast) {
    "use strict";

    return BaseController.extend(
      "sap.ui.demo.walkthrough.controller.HelloPanel",
      {
        onShowHello: function () {
          // read msg from i18n model
          const oBundle = this.getView().getModel("i18n").getResourceBundle();
          const sRecipient = this.getView()
            .getModel()
            .getProperty("/recipient/name");
          const sMsg = oBundle.getText("helloMsg", [sRecipient]);

          // show msg
          MessageToast.show(sMsg);
        },
      }
    );
  }
);
