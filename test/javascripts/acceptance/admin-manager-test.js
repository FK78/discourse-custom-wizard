import { click, find, findAll, visit } from "@ember/test-helpers";
import { test } from "qunit";
import { acceptance, query } from "discourse/tests/helpers/qunit-helpers";
import {
  getSuppliers,
  getWizard,
  getWizardTestingLog,
} from "../helpers/admin-wizard";

acceptance("Admin | Manager", function (needs) {
  needs.user();
  needs.settings({
    custom_wizard_enabled: true,
    available_locales: JSON.stringify([{ name: "English", value: "en" }]),
  });
  needs.pretender((server, helper) => {
    server.get("/admin/wizards/manager/this_is_testing_wizard", () => {
      return helper.response(getWizardTestingLog);
    });
    server.get("/admin/wizards/wizard", () => {
      return helper.response(getWizard);
    });
    server.delete("/admin/wizards/manager/destroy", () => {
      return helper.response({
        success: "OK",
        destroyed: [
          { id: "this_is_testing_wizard", name: "This is testing wizard" },
        ],
        failures: [],
      });
    });
    server.get("/admin/plugins/subscription-client/suppliers", () => {
      return helper.response(getSuppliers);
    });
  });

  test("viewing manager fields content", async (assert) => {
    await visit("/admin/wizards/manager");
    assert.ok(
      query(".message-content").innerText.includes(
        "Export, import or destroy wizards"
      ),
      "it displays manager message"
    );
    assert.ok(
      find('table tr[data-wizard-id="this-is-testing-wizard"]'),
      "table shows the wizard content list"
    );

    const checkbox = findAll(
      'table tr[data-wizard-id="this-is-testing-wizard"] input[type="checkbox"]'
    );
    const exportCheck = checkbox[0];
    const destroyCheck = checkbox[1];

    const exportButton = find("#export-button");
    assert.ok(
      exportButton.hasAttribute("disabled"),
      "the export button is disabled when export checkbox is unchecked"
    );

    await click(exportCheck);
    assert.ok(
      !exportButton.hasAttribute("disabled"),
      "the export button is enabled when export checkbox is clicked"
    );
    await click(exportCheck);
    assert.ok(
      exportButton.hasAttribute("disabled"),
      "the export button is disabled when export checkbox is unchecked"
    );
    const destroyButton = find("#destroy-button");
    assert.ok(
      destroyButton.hasAttribute("disabled"),
      "the destroy button is disabled when destroy checkbox is unchecked"
    );
    await click(destroyCheck);
    assert.ok(
      !destroyButton.hasAttribute("disabled"),
      "the destroy button is enabled when destroy checkbox is clicked"
    );
    await click("#destroy-button");

    assert.notOk(
      find('table tr[data-wizard-id="this-is-testing-wizard"]'),
      "the wizard row is removed after destroy button is clicked"
    );
  });
});
