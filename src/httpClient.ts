import {stringify} from "query-string";
import axios from "axios";

class HttpError extends Error {
  constructor(message: any, status: any, body = null) {
    super(message);
    this.name = this.constructor.name;
    if (typeof Error.captureStackTrace === "function") {
      Error.captureStackTrace(this, this.constructor);
    } else {
      this.stack = new Error(message).stack;
    }
    this.stack = new Error().stack;
  }
}

export const fetchJson = (url: any, options: any) => {
  const requestHeaders =
    options.headers ||
    new Headers({
      Accept: "application/json",
    });
  if (
    !requestHeaders.has("Content-Type") &&
    !(options && options.body && options.body instanceof FormData)
  ) {
    requestHeaders["Content-Type"] = "application/json";
  }

  const token = localStorage.getItem("auth-token");
  requestHeaders["Authorization"] = `JWT ${token}`;

  return axios(url, {...options, headers: requestHeaders}).then(
    response => {
      let {status, statusText, data} = response;
      if (status < 200 || status >= 300) {
        return Promise.reject({
          data: data || statusText,
          status,
        });
      }
      return Promise.resolve(response);
    },
    error => {
      if (error.response) {
        let {status, statusText, data} = error.response;
        if (status < 200 || status >= 300) {
          return Promise.reject({
            data: data || statusText,
            status,
          });
        }
      }
    }
  );
};

export const queryParameters = stringify;

const isValidObject = (value: any) => {
  if (!value) {
    return false;
  }

  const isArray = Array.isArray(value);
  const isBuffer = typeof Buffer !== "undefined" && Buffer.isBuffer(value);
  const isObject = Object.prototype.toString.call(value) === "[object Object]";
  const hasKeys = !!Object.keys(value).length;

  return !isArray && !isBuffer && isObject && hasKeys;
};

export const flattenObject = (value: any, path = []): any => {
  if (isValidObject(value)) {
    return Object.assign(
      {},
      ...Object.keys(value).map(item => {
        //@ts-ignore
        return flattenObject(value[item], path.concat([item]));
      })
    );
  } else {
    return path.length ? {[path.join(".")]: value} : value;
  }
};
