import React from "react";
import {
  Button,
  FormGroup,
  H1,
  InputGroup,
  Intent,
  Toaster,
} from "@blueprintjs/core";
import update from "immutability-helper";

import CreateResourcePage from "./CreateResourcePage";

import API from "../middleware/api";

class UpdateResourcePage extends CreateResourcePage {
  async componentDidMount() {
    await this.getResourceTags();

    let id = this.props.match.params.id;
    let { json, headers } = await API.ShowResource(id);
    let resource = json;

    // Prepopulate selected resoruce tags
    let selectedResourceTags = {};
    resource.resource_tags.forEach(tag => {
      selectedResourceTags[tag.id] = tag.name;
    });

    // Update current formFields with the values previously stored in DB
    this.setState({
      formFields: {
        title: resource.title,
        description: resource.description,
        body: resource.body,
      },
      selectedResourceTags: selectedResourceTags,
    });
  }

  getPageTitle() {
    return "Update Resource";
  }

  submit = async () => {
    let resourceTagInstancesAttributes = Object.keys(
      this.state.selectedResourceTags
    ).map(resourceTagId => {
      return {
        resource_tag_id: resourceTagId,
      };
    });

    let resource = {
      ...this.state.formFields,
      resource_tag_instances_attributes: resourceTagInstancesAttributes,
    };

    let toaster = Toaster.create();
    let id = this.props.match.params.id;
    try {
      await API.UpdateResource(id, resource);
      toaster.show({ message: "Success!", intent: Intent.SUCCESS });
      this.props.history.push("/");
    } catch (error) {
      toaster.show({ message: `Error: ${error}`, intent: Intent.DANGER });
      console.error(error);
    }
  };
}

export default UpdateResourcePage;
