//@ui5-bundle projectworkflow/Component-preload.js
sap.ui.require.preload({
	"projectworkflow/Component.js":function(){
sap.ui.define(["sap/ui/core/UIComponent","sap/ui/Device","projectworkflow/model/models"],function(e,t,i){"use strict";return e.extend("projectworkflow.Component",{metadata:{manifest:"json"},init:function(){e.prototype.init.apply(this,arguments);this.getRouter().initialize();this.setModel(i.createDeviceModel(),"device")}})});
},
	"projectworkflow/controller/App.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(n){"use strict";return n.extend("projectworkflow.controller.App",{onInit:function(){}})});
},
	"projectworkflow/controller/View1.controller.js":function(){
sap.ui.define(["sap/ui/core/mvc/Controller"],function(e){"use strict";return e.extend("projectworkflow.controller.View1",{onInit:function(){},onTriggerWorkflow(){let e=this.getOwnerComponent().getManifestEntry("/sap.app/id");let o=e.replaceAll(".","/");let t=jQuery.sap.getModulePath(o);let n=t+"/bpmworkflowruntime/v1";let r={definitionId:"cap.workflow.myworkflow",context:{text:"Hello from SAPUI5"}};$.ajax({url:`${n}/xsrf-token`,method:"GET",headers:{"X-CSRF-Token":"Fetch"},async:false,success(e,o,t){let s=t.getResponseHeader("X-CSRF-Token");console.log(s);$.ajax({url:`${n}/workflow-instances`,type:"POST",data:JSON.stringify(r),headers:{"X-CSRF-Token":s,"Content-Type":"application/json"},async:false,success(e){new sap.m.MessageBox.information("The workflow has successfully started")},error:function(e){}})},error(e){let o=e}})}})});
},
	"projectworkflow/i18n/i18n.properties":'# This is the resource bundle for projectworkflow\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=App Title\n\n#YDES: Application description\nappDescription=An SAP Fiori application.\n#XTIT: Main view title\ntitle=App Title',
	"projectworkflow/manifest.json":'{"_version":"1.59.0","sap.app":{"id":"projectworkflow","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"{{appTitle}}","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:basic","version":"1.14.1","toolsId":"e3d3f258-a875-4c3f-942a-327dcf5eae8b"},"dataSources":{"mainService":{"uri":"odata/v4/catalog/","type":"OData","settings":{"annotations":[],"odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"capworkflow":{"action":"display","semanticObject":"capworkflow","title":"capworkflow","signature":{"additionalParameters":"allowed","parameters":{}}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.125.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.f":{},"sap.suite.ui.generic.template":{},"sap.ui.comp":{},"sap.ui.generic.app":{},"sap.ui.table":{},"sap.ushell":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"projectworkflow.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}}},"resources":{"css":[{"uri":"css/style.css"}]},"routing":{"config":{"routerClass":"sap.m.routing.Router","viewType":"XML","async":true,"viewPath":"projectworkflow.view","controlAggregation":"pages","controlId":"app","clearControlAggregation":false},"routes":[{"name":"RouteView1","pattern":":?query:","target":["TargetView1"]}],"targets":{"TargetView1":{"viewType":"XML","transition":"slide","clearControlAggregation":false,"viewId":"View1","viewName":"View1"}}},"rootView":{"viewName":"projectworkflow.view.App","type":"XML","async":true,"id":"App"}},"sap.cloud":{"public":true,"service":"workflow_approuter"}}',
	"projectworkflow/model/models.js":function(){
sap.ui.define(["sap/ui/model/json/JSONModel","sap/ui/Device"],function(e,n){"use strict";return{createDeviceModel:function(){var i=new e(n);i.setDefaultBindingMode("OneWay");return i}}});
},
	"projectworkflow/view/App.view.xml":'<mvc:View controllerName="projectworkflow.controller.App"\n    xmlns:html="http://www.w3.org/1999/xhtml"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><App id="app"></App></mvc:View>\n',
	"projectworkflow/view/View1.view.xml":'<mvc:View controllerName="projectworkflow.controller.View1"\n    xmlns:mvc="sap.ui.core.mvc" displayBlock="true"\n    xmlns="sap.m"><Page id="page" title="{i18n>title}"><content ><Button text="Trigger Workflow" press="onTriggerWorkflow"/></content></Page></mvc:View>\n'
});
//# sourceMappingURL=Component-preload.js.map
