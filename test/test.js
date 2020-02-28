const { expect } = require('chai');
const tags = require('mocha-tags');
const request = require('supertest');
const api = request('http://localhost:5000');

tags('/api/ticket').describe('get all tickets', () => {
  it('should have status 200', async () => {
    const response = await api
      .get('/api/ticket')
      .set('Content-Type', 'application/json');

    expect(response.status).to.be.equal(200);
  });

  it('Should be an array', async () => {
    const response = await api
      .get('/api/ticket')
      .set('Content-Type', 'application/json');

    expect(response.body).to.be.a('array');
  });
});
