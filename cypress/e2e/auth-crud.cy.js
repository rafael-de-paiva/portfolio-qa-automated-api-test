/// <reference types="cypress"/>
const bodyAuth = require('../fixtures/auth.json')
const body1 = require('../fixtures/post1.json')
const body2 = require('../fixtures/post2.json')
  
let token = ''
let id = ''

describe('Crud test process', () => {
    
  
    it('should create a new booking', () => {
      cy.postInfo(body1).then((res) => {
        expect(res.status).to.equal(200)
        expect(res.body.booking).to.deep.equal(body1)
      })
    })
  
    it('should get a specific booking', () => {
      cy.postInfo(body1).then((res) => {
        id = res.body.bookingid
        cy.getSpecificInfo(id).then((res2) => {
          expect(res2.status).to.equal(200)
          expect(res2.body).to.deep.equal(body1)
        })
      })
    })
  
    describe('Authorized actions (PUT & DELETE)', () => {
      beforeEach(() => {
        return cy.postAuth(bodyAuth).then((res) => {
          token = res.body.token
          return cy.postInfo(body1)
        }).then((res2) => {
          id = res2.body.bookingid
        })
      })
  
      it('should update a booking', () => {
        cy.putInfo(id, body2, token).then((res) => {
          expect(res.status).to.equal(200)
          expect(res.body).to.deep.equal(body2)
        })
      })
  
      it('should delete a booking', () => {
        cy.deleteInfo(id, token).then((res) => {
          expect(res.status).to.equal(201)
        })
      })
    })
  })
  