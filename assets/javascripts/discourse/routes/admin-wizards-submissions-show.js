import { A } from "@ember/array";
import { service } from "@ember/service";
import DiscourseRoute from "discourse/routes/discourse";
import { formatModel } from "../lib/wizard-submission";
import CustomWizardAdmin from "../models/custom-wizard-admin";

export default DiscourseRoute.extend({
  router: service(),

  model(params) {
    return CustomWizardAdmin.submissions(params.wizardId);
  },

  afterModel(model) {
    if (model === null) {
      return this.router.transitionTo("adminWizardsSubmissions");
    }
  },

  setupController(controller, model) {
    const { fields, submissions } = formatModel(model);

    controller.setProperties({
      wizard: model.wizard,
      fields: A(fields),
      submissions: A(submissions),
      total: model.total,
    });
  },
});
