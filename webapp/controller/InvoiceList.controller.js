sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/ui/model/json/JSONModel",
    "../model/formatter",
    "sap/ui/model/Filter",
    "sap/ui/model/FilterOperator",
  ],
  (Controller, JSONModel, formatter, Filter, FilterOperator) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.InvoiceList", {
      formatter: formatter,
      onInit() {
        const oViewModel = new JSONModel({
          currency: "KRW",
        });
        this.getView().setModel(oViewModel, "view");
      },

      // filter 기능 구현을 위한 코드부

      onFilterInvoices(oEvent) {
        // build filter array - sap/ui/model 네임스페이스의 필터오퍼레이터 모델을 바인딩
        const aFilter = [];
        const sQuery = oEvent.getParameter("query");
        if (sQuery) {
          aFilter.push(
            new Filter("ProductName", FilterOperator.Contains, sQuery)
          );
        }

        // Filter binding - sap/ui/model 네임스페이스의 필터 모델을 바인딩
        const oList = this.byId("invoiceList");
        const oBinding = oList.getBinding("items");
        oBinding.filter(aFilter);
      },
    });
  }
);
