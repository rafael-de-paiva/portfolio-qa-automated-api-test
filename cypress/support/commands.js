Cypress.Commands.add('postAuth', (payload) => {
    cy.request({
        method: 'POST',
        url: '/auth',
        failOnStatusCode: false,
        body: payload,
        headers: {
            'Content-Type': 'application/json'
        }
    })
}) 

Cypress.Commands.add('getSpecificInfo', (id) => {
    cy.request({
        method: 'GET',
        url: `/booking/${id}`,
        failOnStatusCode: false,
        headers: {
            'Accept': 'application/json'
        }
    })
})

Cypress.Commands.add('postInfo', (payload) => {
    cy.request({
        method: 'POST',
        url: '/booking',
        failOnStatusCode: false,
        body: payload,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
        }
    })
}) 

Cypress.Commands.add('putInfo', (id, payload, token) => {
    cy.request({
        method: 'PUT',
        url: `/booking/${id}`,
        failOnStatusCode: false,
        body: payload,
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json',
            'Cookie': `token=${token}`
        }
    })
})

Cypress.Commands.add('deleteInfo', (id, token) => {
    cy.request({
        method: 'DELETE',
        url: `/booking/${id}`,
        failOnStatusCode: false,
        headers: {
            'Cookie': `token=${token}`
        }
    })
})