/// <reference types="cypress" />
/// <reference types = "cypress-downloadfile" />

import { validateBinaryFile } from '../support/utils'
import { generateName } from '../support/generateNAME'
import { getRandomNumbersSize } from '../support/getRandomNumbers'
import { getRandomText } from '../support/getRandomText'

describe('1 - Automação Valora', () => {

  it('1.1 - Validando carregamento da pág e video', () => {

    //Visitando a página e validando o seu tempo de carregamento
    cy.visit('/', { timeout: 1500 })
    cy.log('Tempo de carregamento menor que 1.5 segundos ')

    //Validando o video da tela inicial
    cy.get('.wrapper')
      .should('be.visible')
    cy.get('.video')
      .should('be.visible')
    cy.get('.playpause')
      .should('be.visible')
    cy.log('video inicial não está quebrado')
  })

  it('1.2 - Download dos cases e artigos', () => {    

    //Download da Case da empresa ClickBus
    cy.downloadFile('https://valora.cc/downloads/case-clickbus.pdf','cypress/downloads','case-clickbus.pdf')
      validateBinaryFile('case-clickbus.pdf', 4737527)

    //Download da Case da empresa Garcia
    cy.downloadFile('https://valora.cc/downloads/case-garcia.pdf','cypress/downloads','case-garcia.pdf')
      validateBinaryFile('case-garcia.pdf', 1598768)

    //Download da Case da empresa Eletrosom
    cy.downloadFile('https://valora.cc/downloads/case-eletrosom.pdf','cypress/downloads','case-eletrosom.pdf')
      validateBinaryFile('case-eletrosom.pdf', 1156895)
    })

  it('1.3 - Validando envio de formluário', () => {

    //Variaveis para preenchimento do form
    let name = generateName();
    let numberCell = '1699' + getRandomNumbersSize(7);
    let email = 'testeE2E' + getRandomNumbersSize(4) + '@teste.com';
    let empresaName = 'Oliveira TEC - ' + getRandomNumbersSize(3) + getRandomText(3);
    let mensagem = 'Thiago Oliveira teste E2E - ' + getRandomNumbersSize(3) + getRandomText(3);

    //Visitando a página e validando o seu tempo de carregamento
    cy.visit('/', {timeout: 1500})

    //Acessando o form de contato
    cy.get('.text-center > .btn')
      .click();

    //Dados para o form de contato
    cy.get('[placeholder="Nome*"]')
      .type(name);
    cy.get('[placeholder="Nome da empresa*"]')
      .type(empresaName);
    cy.get('[placeholder="E-mail*"]')
      .type(email);
    cy.get('[placeholder="Telefone"]')
      .type(numberCell);
    cy.get('[placeholder="Sua mensagem*"]')
      .type(mensagem); 

    //Enviar
    cy.get('.enviar')
      .click();
    //Confirmando envio
    cy.url()
      .should('include', '/confirmacao.html')
    });
});
