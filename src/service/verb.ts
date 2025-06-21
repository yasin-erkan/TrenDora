import axiosClient from './instance';

export async function getRequest(URL: string, params: object) {
  const response = await axiosClient.get(URL, { params: params });
  return response;
}

export async function postRequest(URL: string, payload: object) {
  const response = await axiosClient.post(URL, payload);
  return response;
}

export async function putRequest(URL: string, payload: object) {
  const response = await axiosClient.put(URL, payload);
  return response;
}

export async function patchRequest(URL: string, payload: object) {
  const response = await axiosClient.patch(URL, payload);
  return response;
}
