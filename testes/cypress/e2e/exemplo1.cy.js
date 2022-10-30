/// <reference types="cypress"/>

describe('Criando cenários de teste para o Google', () => {

  it('Caso de teste: Erro na criação de conta devido a email já utilizado', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.login').click()
    cy.get('#email_create').type('email123@gmail.com')
    cy.get('#SubmitCreate > span').click()
    cy.get('#create_account_error').should('contain.text', 'An account using this email address has already been registered.')
  })

  it('Caso de teste: Acessando o site e navegando para os itens mais vendidos', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.toggle-footer > :nth-child(3) > a').click()
    cy.get('.page-heading').should('have.text', 'Best sellers')
  })

  it('Caso de teste: Acessando o site, abrindo um produto e selecionando uma cor diferente', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('#homefeatured > :nth-child(2) > .product-container > .left-block > .product-image-container > .product_img_link > .replace-2x').click()
    cy.get('#color_8').click()
    cy.get('#thumb_6').should('be.visible')
  })
  
  it('Caso de teste: Acessando o site diretamente no produto e adicionando-o ao carrinho', () => {
    cy.visit('http://automationpractice.com/index.php?id_product=2&controller=product#')
    cy.get('.exclusive > span').click()
    cy.get('.layer_cart_product > h2').should('contain.text', 'Product successfully added to your shopping cart')
  })
  
  it('Caso de teste: Acessando o site e pesquisando por "shirt"', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('#search_query_top').type('shirt')
    cy.get('#searchbox > .btn').click()
    cy.get('.product_img_link > .replace-2x').should('be.visible')
  })
  
  it('Caso de teste: Acessando o site e listando as promoções', () => {
    cy.visit('http://automationpractice.com/index.php')
    cy.get('.row > a > .img-responsive').click()
    cy.get('.last-mobile-line > .product-container > .right-block > .content_price > .price-percent-reduction').should('be.visible')
  })
})