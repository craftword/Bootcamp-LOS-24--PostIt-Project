const request = require("supertest");
const expect = require("chai").expect; 
const should = require("chai").should; 
const server = request.agent("http://localhost:6969");
//const app = require("../app.js").app;


// Test for Api message post
describe('Test for Posting messages for group 3', ()=> {
    it('respond with json', (done)=> {
        const prob = {message:"Group meeting will be in the next two weeks"};
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

// Test For Group Creation
describe('Test for create group', ()=> {
    it('respond with json', (done)=> {
        const prob = {name:"AngularJs", description:"build on angular", userId:2};
        server
            .post("/api/group")
            .send(prob)
            .end((err,res)=> {
                //const data = JSON.parse(res.text);
                expect(err).to.be.null;
                expect(res.body.name).to.be.equal(prob.name);
	            expect(res.body.description).to.be.equal(prob.description);                    
	            expect(res.body.createdAt).not.to.be.null;
                done();
            });
    });

});

