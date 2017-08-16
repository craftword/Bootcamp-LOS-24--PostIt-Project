const request = require("supertest");
const expect = require("chai").expect; 
const should = require("chai").should; 
const server = request.agent("http://localhost:6969");
//const app = require("../app.js").app;


// Test for Api message post
describe('Test for Posting messages for group 3', ()=> {
    it('respond with json', (done)=> {
        const prob = { message:"Group meeting will be in the next two weeks"};
        server
            .post('/api/group/3/message')
            .send(prob)
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(err).to.be.null;
                expect(data.message).to.equal(prob.message);
                done();
            });
    });

});

// Test for Api Create Users
describe('Test for creating unique user', ()=> {
    it('respond with json', (done)=> {
        const prob = {username:""};
        server
            .post('/api/user/signup')
            .send(prob)
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(err).to.be.null;
                expect(data.message).to.equal(prob.message);
                done();
            });
    });

});


//Test for signIn user as a token
describe('Test for token when sign in', ()=> {
    it('respond with json', (done)=> {
        const prob = {username:"bole20", password:"godword20"};
        server
            .post('/api/user/signin')
            .send(prob)
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(err).to.be.null;
                expect(data.token).to.not.have.property(null);
                done();
            });
    });

});



