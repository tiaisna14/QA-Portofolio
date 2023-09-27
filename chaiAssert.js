const { expect } = require('chai')
const request = require('supertest')

describe('Post Request Example', () => {
    const response = request('https://petstore.swagger.io/v2')
    .post('/user')
    .send({
        "id": 12345,
        "username": "myskill-auto",
        "firstName": "myskill",
        "lastName": "myskill",
        "email": "myskill@mailsac.com",
        "password": "myskill123",
        "phone": "08123123",
        "userStatus": 1
    })

    it('response status equal to 200', async () => {
        //Check response status harus sama dengan 200
        expect((await response).status).to.equal(200)
    })

    it('response body to haveOwnProperty', async () =>{
        //Expect dalam body response terdapat value message
        expect((await response).body).to.haveOwnProperty('message')
    })

    //reporting in mochawesome
    
})