sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("projectworkflow.controller.View1",{onInit:function(){},onTriggerWorkflow(){let e=this.getOwnerComponent().getManifestEntry("/sap.app/id");let o=e.replaceAll(".","/");let t=jQuery.sap.getModulePath(o);let n=t+"/bpmworkflowruntime/v1";let r={definitionId:"cap.workflow.myworkflow",context:{text:"Hello from SAPUI5"}};$.ajax({url:`${n}/xsrf-token`,method:"GET",headers:{"X-CSRF-Token":"Fetch"},async:false,success(e,o,t){let s=t.getResponseHeader("X-CSRF-Token");console.log(s);$.ajax({url:`${n}/workflow-instances`,type:"POST",data:JSON.stringify(r),headers:{"X-CSRF-Token":s,"Content-Type":"application/json"},async:false,success(e){new sap.m.MessageBox.information("The workflow has successfully started")},error:function(e){}})},error(e){let o=e}})}})});
//# sourceMappingURL=View1.controller.js.map