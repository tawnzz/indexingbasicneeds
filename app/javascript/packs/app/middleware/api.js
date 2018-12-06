import Requester from "./requester";

class API {
  static async ResourcesIndex(tags, order_method = "updated_desc") {
    if (order_method === "") {
      order_method = "updated_desc";
    }
    if (!tags || tags.length === 0) {
      return await Requester.get(`/api/resources?ordered=${order_method}`);
    }
    return await Requester.get(
      `/api/resources?by_tags=[${tags}]&ordered=${order_method}`
    );
  }

  static async ShowResource(id) {
    return await Requester.get(`/api/resources/${id}`);
  }

  static async CreateNewResource(resource) {
    const resourcePayload = { resource: resource };
    return await Requester.post("/api/resources", resourcePayload);
  }

  static async UpdateResource(id, resource) {
    const resourcePayload = { resource: resource };
    return await Requester.patch(`/api/resources/${id}`, resourcePayload);
  }

  static async GetResourceTags() {
    return await Requester.get("/api/resource_tags");
  }
}

export default API;
