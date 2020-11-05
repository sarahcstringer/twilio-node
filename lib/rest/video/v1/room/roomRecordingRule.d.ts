/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */

import Page = require('../../../../base/Page');
import Response = require('../../../../http/response');
import V1 = require('../../V1');
import { SerializableClass } from '../../../../interfaces';

/**
 * Initialize the RecordingRulesList
 *
 * PLEASE NOTE that this class contains beta products that are subject to change.
 * Use them with caution.
 *
 * @param version - Version of the resource
 * @param roomSid - The SID of the Room resource for the Recording Rules
 */
declare function RecordingRulesList(version: V1, roomSid: string): RecordingRulesListInstance;

interface RecordingRulesListInstance {
  /**
   * fetch a RecordingRulesInstance
   *
   * @param callback - Callback to handle processed record
   */
  fetch(callback?: (error: Error | null, items: RecordingRulesListInstance) => any): Promise<RecordingRulesInstance>;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
  /**
   * update a RecordingRulesInstance
   *
   * @param callback - Callback to handle processed record
   */
  update(callback?: (error: Error | null, items: RecordingRulesListInstance) => any): Promise<RecordingRulesInstance>;
  /**
   * update a RecordingRulesInstance
   *
   * @param opts - Options for request
   * @param callback - Callback to handle processed record
   */
  update(opts?: RecordingRulesListInstanceUpdateOptions, callback?: (error: Error | null, items: RecordingRulesListInstance) => any): Promise<RecordingRulesInstance>;
}

/**
 * Options to pass to update
 *
 * @property rules - A JSON-encoded array of recording rules
 */
interface RecordingRulesListInstanceUpdateOptions {
  rules?: object;
}

interface RecordingRulesPayload extends RecordingRulesResource, Page.TwilioResponsePayload {
}

interface RecordingRulesResource {
  date_created: Date;
  date_updated: Date;
  room_sid: string;
  rules: string[];
}

interface RecordingRulesSolution {
  roomSid?: string;
}


declare class RecordingRulesInstance extends SerializableClass {
  /**
   * Initialize the RecordingRulesContext
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param payload - The instance payload
   * @param roomSid - The SID of the Room resource for the Recording Rules
   */
  constructor(version: V1, payload: RecordingRulesPayload, roomSid: string);

  dateCreated: Date;
  dateUpdated: Date;
  roomSid: string;
  rules: string[];
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}


declare class RecordingRulesPage extends Page<V1, RecordingRulesPayload, RecordingRulesResource, RecordingRulesInstance> {
  /**
   * Initialize the RecordingRulesPage
   *
   * PLEASE NOTE that this class contains beta products that are subject to change.
   * Use them with caution.
   *
   * @param version - Version of the resource
   * @param response - Response from the API
   * @param solution - Path solution
   */
  constructor(version: V1, response: Response<string>, solution: RecordingRulesSolution);

  /**
   * Build an instance of RecordingRulesInstance
   *
   * @param payload - Payload response from the API
   */
  getInstance(payload: RecordingRulesPayload): RecordingRulesInstance;
  /**
   * Provide a user-friendly representation
   */
  toJSON(): any;
}

export { RecordingRulesInstance, RecordingRulesList, RecordingRulesListInstance, RecordingRulesListInstanceUpdateOptions, RecordingRulesPage, RecordingRulesPayload, RecordingRulesResource, RecordingRulesSolution }
