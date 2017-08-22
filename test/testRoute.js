process.env.NODE_ENV = 'test';

import request from "supertest";
import { expect } from 'chai'
import models from "../server/models";
import app from "../app";

const server = request.agent("http://localhost:6969");


// Test for Api 
describe('Test for api', ()=> {
    it('respond with json after posting messages', (done)=> {
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
    it('respond with json after listing messages', (done)=> {
        server
            .get('/api/group/3/message')
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(data).to.be.json;
                expect(data.body).to.be.a('array');
                done();
            });
    });
    it('respond with json after signing', (done)=> {
        const prob = {username:"bole20", password:"godword20"};
        server
            .post('/api/user/signin')
            .send(prob)
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(res.status).to.equal(201);
                expect(err).to.be.null;
                expect(data.token).to.not.have.property(null);
                done();
            });
    });
    it('respond with json after signup', (done)=> {
        const prob = {
            username:"dummy100", 
            password:"dummy120",
            fullname:"dummy Dum",
            email:"dummy@gmail.com",
            phone:"08967353892",
            picture:"img/default.jpg"
        };
        server
            .post('/api/user/signup')
            .send(prob)
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(res.status).to.equal(200);
                expect(err).to.be.null;
                expect(data.username).to.equal("dummy100");
                expect(data.fullname).to.equal("dummy Dum");
                expect(data.email).to.equal("dummy@magil.com");
                expect(data.phone).to.equal("08967353892");
                expect(data.picture).to.equal("img/default.jpg");
                done();
            });
    });

});

// Test for Pages
describe('Test for pages', ()=> {
    it('respond with json', (done)=> {
        server
            .get('/')
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(err).to.be.null;
                expect(res.status).to.equal(200);
                expect(data).to.be.json;
                expect(data.message).to.equal('Welcome to the beginning of nothingness.');
                done();
            });
    });

});


//Test for Models
describe('Test for Models', ()=> {
    it('respond with json', (done)=> {
        const prob = {username:"bole20", password:"godword20"};
        server
            .post('/api/user/signin')
            .send(prob)
            .end((err,res)=> {
                const data = JSON.parse(res.text);
                expect(res.status).to.equal(200);
                expect(err).to.be.null;
                expect(data.token).to.not.have.property(null);
                done();
            });
    });

});




