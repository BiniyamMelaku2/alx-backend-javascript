const request = require('request');
const { expect } = require('chai');

describe('Deep equality & Post integration testing', () => {
  describe('GET /', () => {
    it('Code: 200 | Body: Welcome to the payment system', (done) => {
      const options = {
        url: 'http://localhost:7865',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome to the payment system');
        done();
      });
    });
  });
  describe('GET /cart/12', () => {
    it('Code: 200 | Body: Payment methods for cart :12', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/12',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Payment methods for cart 12');
        done();
      });
    });
  });
  describe('GET /cart/1b2', () => {
    it('responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/1b2',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('GET /cart/hello', () => {
    it('responds with 404', (done) => {
      const options = {
        url: 'http://localhost:7865/cart/hello',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(404);
        done();
      });
    });
  });
  describe('GET /available_payments JSON string', () => {
    it('Code: 200 | Body: JSON string', (done) => {
      const options = {
        url: 'http://localhost:7865/available_payments',
        method: 'GET',
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal(
          '{"payment_methods":{"credit_cards":true,"paypal":false}}'
        );
        done();
      });
    });
  });
  describe('POST /login bddy', () => {
    it('Code: 200 | Body: name Betty', (done) => {
      const options = {
        url: 'http://localhost:7865/login',
        method: 'POST',
        json: {
          userName: 'Betty',
        },
      };

      request(options, function (error, response, body) {
        expect(response.statusCode).to.equal(200);
        expect(body).to.equal('Welcome Betty');
        done();
      });
    });
  });
});
