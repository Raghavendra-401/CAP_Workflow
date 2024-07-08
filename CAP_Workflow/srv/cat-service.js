const cds = require("@sap/cds");
// const axios = require('axios');
const cfenv = require('cfenv');
const sapCfAxios = require('sap-cf-axios').default;
const axios = sapCfAxios("sbpa_process_automation")


module.exports = cds.service.impl(function () {
    this.on('triggerWorkflow', async req => {
        // const service = cds.connect.to("sbpa_workflow");
        try {
            let response = await axios({
                method: "GET",
                url: '/bpmworkflowruntime/v1/xsrf-token',
                headers: {
                    "X-CSRF-Token": "Fetch"
                }
            });
            console.log(response);
            axios({
                method: 'POST',
                url: '/bpmworkflowruntime/v1/workflow-instances',
                data: JSON.stringify({
                    defintionId: "cap.workflow.myworkflow",
                    context: {
                        "text": "Hello from SAP CAPM"
                    }
                }),
                headers: {
                    "content-type": "application/json"
                }
            });
        } catch (oErr) {
            console.log(oErr);
        }
    })
})