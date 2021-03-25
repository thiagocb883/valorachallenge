const path = require('path')

/**
 * Verifica se a pasta baixada possui um arquivo com o nome fornecido
 * e o tamanho fornecido em bytes.
 * @param {string} filename O nome do arquivo baixado
 * @param {number} expectedSize Tamanho do arquivo binário esperado em bytes
 */
export const validateBinaryFile = (filename, expectedSize) => {
  expect(filename, 'filename').to.be.a('string')
  expect(expectedSize, 'file size').to.be.a('number').and.be.gt(0)

  const downloadsFolder = Cypress.config('downloadsFolder')
  const downloadedFilename = path.join(downloadsFolder, filename)

  // Verificando o tamanho do arquivo
  cy.readFile(downloadedFilename, 'binary', { timeout: 15000 })
  .should((buffer) => {
    if (buffer.length !== expectedSize) {
      throw new Error(`File size ${buffer.length} is not ${expectedSize}`)
    }
  })
}
