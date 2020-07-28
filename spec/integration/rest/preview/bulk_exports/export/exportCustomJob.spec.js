'use strict';

/* jshint ignore:start */
/**
 * This code was generated by
 * \ / _    _  _|   _  _
 *  | (_)\/(_)(_|\/| |(/_  v1.0.0
 *       /       /
 */
/* jshint ignore:end */

var Holodeck = require('../../../../holodeck');  /* jshint ignore:line */
var Request = require(
    '../../../../../../lib/http/request');  /* jshint ignore:line */
var Response = require(
    '../../../../../../lib/http/response');  /* jshint ignore:line */
var RestException = require(
    '../../../../../../lib/base/RestException');  /* jshint ignore:line */
var Twilio = require('../../../../../../lib');  /* jshint ignore:line */


var client;
var holodeck;

describe('ExportCustomJob', function() {
  beforeEach(function() {
    holodeck = new Holodeck();
    client = new Twilio('ACXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX', 'AUTHTOKEN', {
      httpClient: holodeck
    });
  });
  it('should treat the first each arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'jobs',
              'first_page_url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'next_page_url': null,
              'page': 0
          },
          'jobs': [
              {
                  'start_day': 'start_day',
                  'job_sid': 'JSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'webhook_method': 'webhook_method',
                  'details': {},
                  'end_day': 'end_day',
                  'webhook_url': 'webhook_url',
                  'email': 'email',
                  'resource_type': 'resource_type'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.preview.bulk_exports.exports('resource_type')
                                 .exportCustomJobs.each(() => done());
    }
  );
  it('should treat the second arg as a callback',
    function(done) {
      var body = {
          'meta': {
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'jobs',
              'first_page_url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'next_page_url': null,
              'page': 0
          },
          'jobs': [
              {
                  'start_day': 'start_day',
                  'job_sid': 'JSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'webhook_method': 'webhook_method',
                  'details': {},
                  'end_day': 'end_day',
                  'webhook_url': 'webhook_url',
                  'email': 'email',
                  'resource_type': 'resource_type'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.preview.bulk_exports.exports('resource_type')
                                 .exportCustomJobs.each({pageSize: 20}, () => done());
      holodeck.assertHasRequest(new Request({
          method: 'GET',
          url: 'https://preview.twilio.com/BulkExports/Exports/${resourceType}/Jobs',
          params: {PageSize: 20},
      }));
    }
  );
  it('should find the callback in the opts object',
    function(done) {
      var body = {
          'meta': {
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'jobs',
              'first_page_url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'next_page_url': null,
              'page': 0
          },
          'jobs': [
              {
                  'start_day': 'start_day',
                  'job_sid': 'JSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'webhook_method': 'webhook_method',
                  'details': {},
                  'end_day': 'end_day',
                  'webhook_url': 'webhook_url',
                  'email': 'email',
                  'resource_type': 'resource_type'
              }
          ]
      };
      holodeck.mock(new Response(200, body));
      client.preview.bulk_exports.exports('resource_type')
                                 .exportCustomJobs.each({callback: () => done()}, () => fail('wrong callback!'));
    }
  );
  it('should generate valid list request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.preview.bulk_exports.exports('resource_type')
                                               .exportCustomJobs.list();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var resourceType = 'resource_type';
      var url = `https://preview.twilio.com/BulkExports/Exports/${resourceType}/Jobs`;

      holodeck.assertHasRequest(new Request({
        method: 'GET',
        url: url
      }));
    }
  );
  it('should generate valid read_empty response',
    function(done) {
      var body = {
          'meta': {
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'jobs',
              'first_page_url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'next_page_url': null,
              'page': 0
          },
          'jobs': []
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.bulk_exports.exports('resource_type')
                                               .exportCustomJobs.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid read_full response',
    function(done) {
      var body = {
          'meta': {
              'previous_page_url': null,
              'url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'page_size': 50,
              'key': 'jobs',
              'first_page_url': 'https://preview.twilio.com/BulkExports/Exports/Messages/Jobs?PageSize=50&Page=0',
              'next_page_url': null,
              'page': 0
          },
          'jobs': [
              {
                  'start_day': 'start_day',
                  'job_sid': 'JSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
                  'friendly_name': 'friendly_name',
                  'webhook_method': 'webhook_method',
                  'details': {},
                  'end_day': 'end_day',
                  'webhook_url': 'webhook_url',
                  'email': 'email',
                  'resource_type': 'resource_type'
              }
          ]
      };

      holodeck.mock(new Response(200, body));

      var promise = client.preview.bulk_exports.exports('resource_type')
                                               .exportCustomJobs.list();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
  it('should generate valid create request',
    function(done) {
      holodeck.mock(new Response(500, {}));

      var promise = client.preview.bulk_exports.exports('resource_type')
                                               .exportCustomJobs.create();
      promise.then(function() {
        throw new Error('failed');
      }, function(error) {
        expect(error.constructor).toBe(RestException.prototype.constructor);
        done();
      }).done();

      var resourceType = 'resource_type';
      var url = `https://preview.twilio.com/BulkExports/Exports/${resourceType}/Jobs`;

      holodeck.assertHasRequest(new Request({
        method: 'POST',
        url: url
      }));
    }
  );
  it('should generate valid create response',
    function(done) {
      var body = {
          'start_day': 'start_day',
          'job_sid': 'JSaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
          'friendly_name': 'friendly_name',
          'webhook_method': 'webhook_method',
          'details': {},
          'end_day': 'end_day',
          'webhook_url': 'webhook_url',
          'email': 'email',
          'resource_type': 'resource_type'
      };

      holodeck.mock(new Response(201, body));

      var promise = client.preview.bulk_exports.exports('resource_type')
                                               .exportCustomJobs.create();
      promise.then(function(response) {
        expect(response).toBeDefined();
        done();
      }, function() {
        throw new Error('failed');
      }).done();
    }
  );
});