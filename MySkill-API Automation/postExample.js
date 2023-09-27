const request = require('supertest')
const baseurl = require('../../env')

describe('Post Request Example', () => {
    it('Success create user', async () => {
        const response = request(baseurl())
        .post('/user')
        .send({
            "id": 12345,
            "username": "myskill-auto",
            "firstName": "myskill",
            "lastName": "myskill",
            "email": "myskill@mailsace.com",
            "password": "myskill123",
            "phone": "08123123",
            "userStatus": 1
        })
        console.log((await response).status)
        console.log((await response).body)
    })
})
