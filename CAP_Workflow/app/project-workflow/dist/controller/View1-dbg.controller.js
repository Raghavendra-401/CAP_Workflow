sap.ui.define([
    "sap/ui/core/mvc/Controller"
],
    function (Controller) {
        "use strict";

        return Controller.extend("projectworkflow.controller.View1", {
            onInit: function () {
            },
            onTriggerWorkflow() {
                let appId = this.getOwnerComponent().getManifestEntry("/sap.app/id");
                let appPath = appId.replaceAll(".", "/");
                let appModulePath = jQuery.sap.getModulePath(appPath);
                let url = appModulePath + "/bpmworkflowruntime/v1";
                let workflowStartPayload = {
                    definitionId: "cap.workflow.myworkflow",
                    context: {
                        "text": "Hello from SAPUI5"
                    }
                }
                $.ajax({
                    url: `${url}/xsrf-token`,
                    method: 'GET',
                    headers: {
                        "X-CSRF-Token": "Fetch"
                    },
                    async: false,
                    success(result, xhr, data) {
                        let csrfToken = data.getResponseHeader('X-CSRF-Token');
                        console.log(csrfToken);
                        $.ajax({
                            url: `${url}/workflow-instances`,
                            type: "POST",
                            data: JSON.stringify(workflowStartPayload),
                            headers: {
                                "X-CSRF-Token": csrfToken,
                                "Content-Type": "application/json"
                            },
                            async: false,
                            success(data) {
                                new sap.m.MessageBox.information("The workflow has successfully started");
                            },
                            error: function (data) {

                            }
                        });
                    },
                    error(oError) {
                        let error = oError
                    }
                })
            }
        });
    });
