/// <reference types="cypress"/>

const bodyAuth = require('../fixtures/authfail.json')
const body1 = require('../fixtures/postfail.json')

describe('Failed test process', () => {

    it('should fail to authenticate', () => {
        cy.postAuth(bodyAuth).then((res) => {
            expect(res.status).to.equal(200)
            expect(res.body.reason).to.equal('Bad credentials')
        })
    })

    it('should fail to create a new booking', () => {
        cy.postInfo(body1).then((res) => {
            expect(res.status).to.equal(500)
            expect(res.body).to.equal('Internal Server Error')
        })
    })

    it('should fail to get a specific booking', () => {
        cy.getSpecificInfo('5000').then((res) => {
            expect(res.status).to.equal(404)
            expect(res.body).to.equal('Not Found')
        })
    })

    it('should fail to update a specific booking', () => {
        cy.putInfo('123', body1, 'wrongtoken').then((res) => {
            expect(res.status).to.equal(403)
            expect(res.body).to.equal('Forbidden')
        })
    })

    it('should fail to delete a specific booking', () => {
        cy.deleteInfo('123', 'wrongtoken').then((res) => {
            expect(res.status).to.equal(403)
            expect(res.body).to.equal('Forbidden')
        })
    })
})


