{
	"contents": {
		"db5ed9a0-1141-464e-8122-527791060d55": {
			"classDefinition": "com.sap.bpm.wfs.Model",
			"id": "cap.workflow.myworkflow",
			"subject": "MyWorkflow",
			"name": "MyWorkflow",
			"documentation": "",
			"lastIds": "62d7f4ed-4063-4c44-af8b-39050bd44926",
			"events": {
				"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
					"name": "StartEvent1"
				},
				"2798f4e7-bc42-4fad-a248-159095a2f40a": {
					"name": "EndEvent1"
				}
			},
			"activities": {
				"d76adeaa-eb28-4dcf-b74f-d0ed65f6549e": {
					"name": "User Task 1"
				}
			},
			"sequenceFlows": {
				"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
					"name": "SequenceFlow1"
				},
				"541d5785-7b33-4f52-919f-5f487960ecb4": {
					"name": "SequenceFlow2"
				}
			},
			"diagrams": {
				"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {}
			}
		},
		"11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3": {
			"classDefinition": "com.sap.bpm.wfs.StartEvent",
			"id": "startevent1",
			"name": "StartEvent1"
		},
		"2798f4e7-bc42-4fad-a248-159095a2f40a": {
			"classDefinition": "com.sap.bpm.wfs.EndEvent",
			"id": "endevent1",
			"name": "EndEvent1"
		},
		"c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow1",
			"name": "SequenceFlow1",
			"sourceRef": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3",
			"targetRef": "d76adeaa-eb28-4dcf-b74f-d0ed65f6549e"
		},
		"42fa7a2d-c526-4a02-b3ba-49b5168ba644": {
			"classDefinition": "com.sap.bpm.wfs.ui.Diagram",
			"symbols": {
				"df898b52-91e1-4778-baad-2ad9a261d30e": {},
				"53e54950-7757-4161-82c9-afa7e86cff2c": {},
				"6bb141da-d485-4317-93b8-e17711df4c32": {},
				"4fce78df-ab64-4c34-9772-fd56d4e0de6c": {},
				"f87692ed-160f-421a-93cd-dac43f11b155": {}
			}
		},
		"df898b52-91e1-4778-baad-2ad9a261d30e": {
			"classDefinition": "com.sap.bpm.wfs.ui.StartEventSymbol",
			"x": 99,
			"y": 155,
			"width": 32,
			"height": 32,
			"object": "11a9b5ee-17c0-4159-9bbf-454dcfdcd5c3"
		},
		"53e54950-7757-4161-82c9-afa7e86cff2c": {
			"classDefinition": "com.sap.bpm.wfs.ui.EndEventSymbol",
			"x": 595,
			"y": 153,
			"width": 35,
			"height": 35,
			"object": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"6bb141da-d485-4317-93b8-e17711df4c32": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "115,170.875 363.2490529759482,170.875",
			"sourceSymbol": "df898b52-91e1-4778-baad-2ad9a261d30e",
			"targetSymbol": "4fce78df-ab64-4c34-9772-fd56d4e0de6c",
			"object": "c6b99f32-5fe6-4ab6-b60a-80fba1b9ae0f"
		},
		"62d7f4ed-4063-4c44-af8b-39050bd44926": {
			"classDefinition": "com.sap.bpm.wfs.LastIDs",
			"sequenceflow": 2,
			"startevent": 1,
			"endevent": 1,
			"usertask": 1
		},
		"d76adeaa-eb28-4dcf-b74f-d0ed65f6549e": {
			"classDefinition": "com.sap.bpm.wfs.UserTask",
			"subject": "Task 1",
			"priority": "MEDIUM",
			"isHiddenInLogForParticipant": false,
			"supportsForward": false,
			"userInterface": "sapui5://workflow_approuter.workflowuimodule/workflowuimodule",
			"recipientGroups": "workflow_user",
			"id": "usertask1",
			"name": "User Task 1"
		},
		"4fce78df-ab64-4c34-9772-fd56d4e0de6c": {
			"classDefinition": "com.sap.bpm.wfs.ui.UserTaskSymbol",
			"x": 313.2490529759482,
			"y": 140.75,
			"width": 100,
			"height": 60,
			"object": "d76adeaa-eb28-4dcf-b74f-d0ed65f6549e"
		},
		"541d5785-7b33-4f52-919f-5f487960ecb4": {
			"classDefinition": "com.sap.bpm.wfs.SequenceFlow",
			"id": "sequenceflow2",
			"name": "SequenceFlow2",
			"sourceRef": "d76adeaa-eb28-4dcf-b74f-d0ed65f6549e",
			"targetRef": "2798f4e7-bc42-4fad-a248-159095a2f40a"
		},
		"f87692ed-160f-421a-93cd-dac43f11b155": {
			"classDefinition": "com.sap.bpm.wfs.ui.SequenceFlowSymbol",
			"points": "363.2490529759482,170.625 612.5,170.625",
			"sourceSymbol": "4fce78df-ab64-4c34-9772-fd56d4e0de6c",
			"targetSymbol": "53e54950-7757-4161-82c9-afa7e86cff2c",
			"object": "541d5785-7b33-4f52-919f-5f487960ecb4"
		}
	}
}