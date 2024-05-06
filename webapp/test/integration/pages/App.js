sap.ui.define(
  ["sap/ui/test/Opa5", "sap/ui/test/actions/Press"],
  (Opa5, Press) => {
    "use strict";

    const sViewName = "ui5.walkthrough.view.ClickPanel";

    Opa5.createPageObjects({
      onTheAppPage: {
        actions: {
          iPressTheSayHelloWithDialogButton() {
            return this.waitFor({
              id: "clickDialogButton",
              viewName: sViewName,
              actions: new Press(),
              errorMessage:
                "[ERR] ClickPanel View 에서 해당 메서드를 찾을 수 없습니다",
            });
          },
        },

        assertions: {
          iShouldSeeTheHelloDialog() {
            return this.waitFor({
              controlType: "sap.m.Dialog",
              success() {
                // we set the view busy, so we need to query the parent of the app
                Opa5.assert.ok(true, "The dialog is open");
              },
              errorMessage: "[ERR] Dialog Control 을 찾을 수 없습니다",
            });
          },
        },
      },
    });
  }
);
