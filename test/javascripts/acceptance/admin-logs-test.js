import { click, visit } from "@ember/test-helpers";
import { test } from "qunit";
import {
  acceptance,
  query,
  queryAll,
} from "discourse/tests/helpers/qunit-helpers";
import selectKit from "discourse/tests/helpers/select-kit-helper";
import {
  getSuppliers,
  getWizard,
  getWizardTestingLog,
} from "../helpers/admin-wizard";

acceptance("Admin | Logs", function (needs) {
  needs.user();
  needs.settings({
    custom_wizard_enabled: true,
    available_locales: JSON.stringify([{ name: "English", value: "en" }]),
  });
  needs.pretender((server, helper) => {
    server.get("/admin/wizards/logs", () => {
      return helper.response([
        { id: "this_is_testing_wizard", name: "This is testing wizard" },
      ]);
    });
    server.get("/admin/wizards/logs/this_is_testing_wizard", () => {
      return helper.response(getWizardTestingLog);
    });
    server.get("/admin/wizards/wizard", () => {
      return helper.response(getWizard);
    });
    server.get("/admin/plugins/subscription-client/suppliers", () => {
      return helper.response(getSuppliers);
    });
  });
  test("viewing logs fields tab", async (assert) => {
    await visit("/admin/wizards/logs");
    const wizards = selectKit(".select-kit");
    assert.ok(
      query(".message-content").innerText.includes(
        "Select a wizard to see its logs"
      ),
      "it displays logs message"
    );
    assert.ok(
      query(".message-content").innerText.includes("Select a wizard"),
      "it displays list of logs"
    );
    await wizards.expand();
    await wizards.selectRowByValue("this_is_testing_wizard");
    assert.ok(
      query(".message-content").innerText.includes(
        "View recent logs for wizards on the forum"
      ),
      "it displays logs for a selected wizard"
    );
    assert.ok(queryAll("table"));
    assert.ok(queryAll("table tbody tr").length === 2, "Displays logs list");

    await click(".refresh.btn");
    assert.ok(queryAll("table"));
    assert.ok(
      queryAll("table tbody tr").length === 2,
      "Refresh button works correctly"
    );

    await wizards.expand();
    await click('[data-name="Select a wizard"]');
    const wizardContainerDiv = queryAll(".admin-wizard-container");
    assert.ok(wizardContainerDiv.children().length === 0, "the div is empty");
  });
});
