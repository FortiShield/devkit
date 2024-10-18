/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { tokensCreate } from "../funcs/tokensCreate.js";
import { tokensDelete } from "../funcs/tokensDelete.js";
import { tokensGet } from "../funcs/tokensGet.js";
import { tokensList } from "../funcs/tokensList.js";
import { ClientSDK, RequestOptions } from "../lib/sdks.js";
import * as operations from "../models/operations/index.js";
import { unwrapAsync } from "../types/fp.js";

export class Tokens extends ClientSDK {
  /**
   * List Auth Tokens
   *
   * @remarks
   * Retrieve a list of the current User's authentication tokens.
   */
  async list(
    options?: RequestOptions,
  ): Promise<operations.ListAuthTokensResponseBody> {
    return unwrapAsync(tokensList(
      this,
      options,
    ));
  }

  /**
   * Create an Auth Token
   *
   * @remarks
   * Creates and returns a new authentication token for the currently authenticated User. The `bearerToken` property is only provided once, in the response body, so be sure to save it on the client for use with API requests.
   */
  async create(
    request: operations.CreateAuthTokenRequest,
    options?: RequestOptions,
  ): Promise<operations.CreateAuthTokenResponseBody> {
    return unwrapAsync(tokensCreate(
      this,
      request,
      options,
    ));
  }

  /**
   * Get Auth Token Metadata
   *
   * @remarks
   * Retrieve metadata about an authentication token belonging to the currently authenticated User.
   */
  async get(
    request: operations.GetAuthTokenRequest,
    options?: RequestOptions,
  ): Promise<operations.GetAuthTokenResponseBody> {
    return unwrapAsync(tokensGet(
      this,
      request,
      options,
    ));
  }

  /**
   * Delete an authentication token
   *
   * @remarks
   * Invalidate an authentication token, such that it will no longer be valid for future HTTP requests.
   */
  async delete(
    request: operations.DeleteAuthTokenRequest,
    options?: RequestOptions,
  ): Promise<operations.DeleteAuthTokenResponseBody> {
    return unwrapAsync(tokensDelete(
      this,
      request,
      options,
    ));
  }
}
