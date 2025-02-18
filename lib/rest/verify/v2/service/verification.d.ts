/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V2 = require('../../V2');
import { SerializableClass } from '../../../../interfaces';

type VerificationChannel = 'sms'|'call'|'email'|'whatsapp';

type VerificationStatus = 'canceled'|'approved';

/**
 * Initialize the VerificationList
 *
 * @param version - Version of the resource
 * @param serviceSid - The SID of the Service that the resource is associated with
 */
declare function VerificationList(version: V2, serviceSid: string): VerificationListInstance;

/**
 * Options to pass to update
 *
 * @property status - The new status of the resource
 */
interface VerificationInstanceUpdateOptions {
  status: VerificationStatus;
}

interface VerificationListInstance {
  /**
   * @param sid - sid of instance
   */
  (sid: string): VerificationContext;
  /**
   * create a VerificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  create(opts: VerificationListInstanceCreateOptions, callback?: (error: Error | null, item: VerificationInstance) => any): Promise<VerificationInstance>;
  /**
   * Constructs a verification
   *
   * @param sid - The unique string that identifies the resource
   */
  get(sid: string): VerificationContext;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

/**
 * Options to pass to create
 *
 * @property amount - The amount of the associated PSD2 compliant transaction.
 * @property appHash - Your App Hash to be appended at the end of an SMS.
 * @property channel - The verification method to use
 * @property channelConfiguration - Channel specific configuration in json format.
 * @property customCode - A pre-generated code
 * @property customFriendlyName - A custom user defined friendly name
 * @property customMessage - The text of a custom message to use for the verification
 * @property locale - The locale to use for the verification SMS, WhatsApp or call
 * @property payee - The payee of the associated PSD2 compliant transaction
 * @property rateLimits - The custom key-value pairs of Programmable Rate Limits.
 * @property sendDigits - The digits to send after a phone call is answered
 * @property to - The phone number or email to verify
 */
interface VerificationListInstanceCreateOptions {
  amount?: string;
  appHash?: string;
  channel: string;
  channelConfiguration?: object;
  customCode?: string;
  customFriendlyName?: string;
  customMessage?: string;
  locale?: string;
  payee?: string;
  rateLimits?: object;
  sendDigits?: string;
  to: string;
}

interface VerificationPayload extends VerificationResource, Page.TwilioResponsePayload {
}

interface VerificationResource {
  account_sid: string;
  amount: string;
  channel: VerificationChannel;
  date_created: Date;
  date_updated: Date;
  lookup: object;
  payee: string;
  send_code_attempts: object[];
  service_sid: string;
  sid: string;
  status: string;
  to: string;
  url: string;
  valid: boolean;
}

interface VerificationSolution {
  serviceSid?: string;
}


declare class VerificationContext {
  /**
   * Initialize the VerificationContext
   *
   * @param version - Version of the resource
   * @param serviceSid - The SID of the verification Service to fetch the resource from
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, serviceSid: string, sid: string);

  /**
   * fetch a VerificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: VerificationInstance) => any): Promise<VerificationInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a VerificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: VerificationInstanceUpdateOptions, callback?: (error: Error | null, items: VerificationInstance) => any): Promise<VerificationInstance>;
}


declare class VerificationInstance extends SerializableClass {
  /**
   * Initialize the VerificationContext
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param serviceSid - The SID of the Service that the resource is associated with
   * @param sid - The unique string that identifies the resource
   */
  constructor(version: V2, payload: VerificationPayload, serviceSid: string, sid: string);

  private _proxy: VerificationContext;
  accountSid: string;
  amount: string;
  channel: VerificationChannel;
  dateCreated: Date;
  dateUpdated: Date;
  /**
   * fetch a VerificationInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: VerificationInstance) => any): Promise<VerificationInstance>;
  lookup: any;
  payee: string;
  sendCodeAttempts: object[];
  serviceSid: string;
  sid: string;
  status: string;
  to: string;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a VerificationInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts: VerificationInstanceUpdateOptions, callback?: (error: Error | null, items: VerificationInstance) => any): Promise<VerificationInstance>;
  url: string;
  valid: boolean;
}


declare class VerificationPage extends Page<V2, VerificationPayload, VerificationResource, VerificationInstance> {
  /**
   * Initialize the VerificationPage
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V2, response: Response<string>, solution: VerificationSolution);

  /**
   * Build an instance of VerificationInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: VerificationPayload): VerificationInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { VerificationChannel, VerificationContext, VerificationInstance, VerificationInstanceUpdateOptions, VerificationList, VerificationListInstance, VerificationListInstanceCreateOptions, VerificationPage, VerificationPayload, VerificationResource, VerificationSolution, VerificationStatus }
