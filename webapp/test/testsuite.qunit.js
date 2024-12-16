sap.ui.define(function () {
	"use strict";

	return {
		name: "QUnit test suite for the UI5 Application: clone",
		defaults: {
			page: "ui5://test-resources/clone/Test.qunit.html?testsuite={suite}&test={name}",
			qunit: {
				version: 2
			},
			sinon: {
				version: 1
			},
			ui5: {
				language: "EN",
				theme: "sap_horizon"
			},
			coverage: {
				only: "clone/",
				never: "test-resources/clone/"
			},
			loader: {
				paths: {
					"clone": "../"
				}
			}
		},
		tests: {
			"unit/unitTests": {
				title: "Unit tests for clone"
			},
			"integration/opaTests": {
				title: "Integration tests for clone"
			}
		}
	};
});
