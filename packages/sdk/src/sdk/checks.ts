/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { checksCreate } from "../funcs/checksCreate.js";
import { checksGet } from "../funcs/checksGet.js";
import { checksList } from "../funcs/checksList.js";
import { checksRerequest } from "../funcs/checksRerequest.js";
import { checksUpdate } from "../funcs/checksUpdate.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Checks extends ClientSDK {
  /**
   * Creates a new Check
   *
   * @remarks
   * Creates a new check. This endpoint must be called with an OAuth2 or it will produce a 400 error.
   */
  async create(
    request: operations.CreateCheckRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateCheckResponseBody> {
    return unwrapAsync(checksCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Retrieve a list of all checks
   *
   * @remarks
   * List all of the checks created for a deployment.
   */
  async list(
    request: operations.GetAllChecksRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAllChecksResponseBody> {
    return unwrapAsync(checksList(
      this,
      request,
      options,
    ));
  }

  /**
   * Get a single check
   *
   * @remarks
   * Return a detailed response for a single check.
   */
  async get(
    request: operations.GetCheckRequest,
    options?: RequestOptions,
  ): Promise<operations.GetCheckResponseBody> {
    return unwrapAsync(checksGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Update a check
   *
   * @remarks
   * Update an existing check. This endpoint must be called with an OAuth2 or it will produce a 400 error.
   */
  async update(
    request: operations.UpdateCheckRequest,
    options?: RequestOptions,
  ): Promise<operations.UpdateCheckResponseBody> {
    return unwrapAsync(checksUpdate(
      this,
      request,
      options,
    ));
  }

  /**
   * Rerequest a check
   *
   * @remarks
   * Rerequest a selected check that has failed.
   */
  async rerequest(
    request: operations.RerequestCheckRequest,
    options?: RequestOptions,
  ): Promise<operations.RerequestCheckResponseBody> {
    return unwrapAsync(checksRerequest(
      this,
      request,
      options,
    ));
  }
}
