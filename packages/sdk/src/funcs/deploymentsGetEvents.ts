/*
 * Code generated by Speakeasy (https://speakeasy.com). DO NOT EDIT.
 */

import { VercelCore } from "../core.js";
import {
  encodeFormQuery as encodeFormQuery$,
  encodeSimple as encodeSimple$,
} from "../lib/encodings.js";
import * as m$ from "../lib/matchers.js";
import * as schemas$ from "../lib/schemas.js";
import { RequestOptions } from "../lib/sdks.js";
import { extractSecurity, resolveGlobalSecurity } from "../lib/security.js";
import { pathToFunc } from "../lib/url.js";
import {
  ConnectionError,
  InvalidRequestError,
  RequestAbortedError,
  RequestTimeoutError,
  UnexpectedClientError,
} from "../models/errors/httpclienterrors.js";
import { SDKError } from "../models/errors/sdkerror.js";
import { SDKValidationError } from "../models/errors/sdkvalidationerror.js";
import * as operations from "../models/operations/index.js";
import { Result } from "../types/fp.js";

export enum GetEventsAcceptEnum {
  applicationJson = "application/json",
  applicationStreamPlusJson = "application/stream+json",
}

/**
 * Get deployment events
 *
 * @remarks
 * Get the build logs of a deployment by deployment ID and build ID. It can work as an infinite stream of logs or as a JSON endpoint depending on the input parameters.
 */
export async function deploymentsGetEvents(
  client$: VercelCore,
  request: operations.GetDeploymentEventsRequest,
  options?: RequestOptions & { acceptHeaderOverride?: GetEventsAcceptEnum },
): Promise<
  Result<
    operations.GetDeploymentEventsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >
> {
  const input$ = request;

  const parsed$ = schemas$.safeParse(
    input$,
    (value$) =>
      operations.GetDeploymentEventsRequest$outboundSchema.parse(value$),
    "Input validation failed",
  );
  if (!parsed$.ok) {
    return parsed$;
  }
  const payload$ = parsed$.value;
  const body$ = null;

  const pathParams$ = {
    idOrUrl: encodeSimple$("idOrUrl", payload$.idOrUrl, {
      explode: false,
      charEncoding: "percent",
    }),
  };

  const path$ = pathToFunc("/v3/deployments/{idOrUrl}/events")(pathParams$);

  const query$ = encodeFormQuery$({
    "builds": payload$.builds,
    "delimiter": payload$.delimiter,
    "direction": payload$.direction,
    "follow": payload$.follow,
    "limit": payload$.limit,
    "name": payload$.name,
    "since": payload$.since,
    "slug": payload$.slug,
    "statusCode": payload$.statusCode,
    "teamId": payload$.teamId,
    "until": payload$.until,
  });

  const headers$ = new Headers({
    Accept: options?.acceptHeaderOverride
      || "application/json;q=1, application/stream+json;q=0",
  });

  const bearerToken$ = await extractSecurity(client$.options$.bearerToken);
  const security$ = bearerToken$ == null ? {} : { bearerToken: bearerToken$ };
  const context = {
    operationID: "getDeploymentEvents",
    oAuth2Scopes: [],
    securitySource: client$.options$.bearerToken,
  };
  const securitySettings$ = resolveGlobalSecurity(security$);

  const requestRes = client$.createRequest$(context, {
    security: securitySettings$,
    method: "GET",
    path: path$,
    headers: headers$,
    query: query$,
    body: body$,
    timeoutMs: options?.timeoutMs || client$.options$.timeoutMs || -1,
  }, options);
  if (!requestRes.ok) {
    return requestRes;
  }
  const request$ = requestRes.value;

  const doResult = await client$.do$(request$, {
    context,
    errorCodes: ["400", "401", "403", "404", "4XX", "5XX"],
    retryConfig: options?.retries
      || client$.options$.retryConfig,
    retryCodes: options?.retryCodes || ["429", "500", "502", "503", "504"],
  });
  if (!doResult.ok) {
    return doResult;
  }
  const response = doResult.value;

  const [result$] = await m$.match<
    operations.GetDeploymentEventsResponse,
    | SDKError
    | SDKValidationError
    | UnexpectedClientError
    | InvalidRequestError
    | RequestAbortedError
    | RequestTimeoutError
    | ConnectionError
  >(
    m$.json(200, operations.GetDeploymentEventsResponse$inboundSchema),
    m$.json(200, operations.GetDeploymentEventsResponse$inboundSchema, {
      ctype: "application/stream+json",
    }),
    m$.fail([400, 401, 403, 404, "4XX", "5XX"]),
  )(response);
  if (!result$.ok) {
    return result$;
  }

  return result$;
}
