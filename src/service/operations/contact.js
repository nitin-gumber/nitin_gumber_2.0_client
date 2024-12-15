import { apiConnector } from "../apiConnector";
import { contactusEndpoint } from "../api";

export const contactus = async (data) => {
  try {
    const response = await apiConnector(
      "POST",
      contactusEndpoint.CONTACT_US_API,
      data
    );
    return response.data;
  } catch (error) {
    throw error;
  }
};
