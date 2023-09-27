const request = require('supertest')
const baseurl = require('../../env')

describe('Get Request example', () => {
    it('Find Pets by Status', async () => {
        const response = request(baseurl())
        .get('/store/inventory')
        console.log((await response).status)
        console.log((await response).body)
    })
})
