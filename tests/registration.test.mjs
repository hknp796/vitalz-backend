// tests/registration.test.js
import chai from 'chai';
import chaiHttp from 'chai-http'
import app from '../index.mjs'
const expect = chai.expect;

chai.use(chaiHttp);

describe('User Registration', () => {
  it('should register a new user', (done) => {
    chai
      .request(app)
      .post('/register')
      .send({
        username: 'testusera',
        email: 'test@exampled.com',
        password: 'testpassword',
      })
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.have.property('token');
        done();
      });
  });
});
