import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main.es6.js'


describe('Calc', () => {
  
  // Smoke tests
  describe('smoke tests', () => {


    it('should exists the method sum', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })

    it('should exists the method sub', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })

    it('should exists the method mult', () => {
      expect(mult).to.exist
      expect(mult).to.be.a('function')
    })

    it('should exists the method div', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })
  })

  describe('Sum', () => {
    it('should return 4 when sum(2,2)', () => {
      expect(sum(2,2)).to.be.equal(4)
    })
  })

  describe('Sub', () => {
    it('Should return 4 when sub(8, 4)', () => {
      expect(sub(8,4)).to.be.equal(4)
    })

    it('Should return -4 when sub(6, 10)', () => {
      expect(sub(6, 10)).to.be.equal(-4)
    })
  })

  describe('Mult', () => {
    it('Should return 4 when mult(2, 2)', () => {
      expect(mult(2,2)).to.be.equal(4)
    })
  })

  describe('Div', () => {
    it('Should return 4 when div(8, 2)', () => {
      expect(div(8,2)).to.be.equal(4)
    })

    it('Should return `Não é possível divisão por zero`', () => {
      expect(div(8,0)).to.be.equal('Não é possível divisão por zero')
    })
  })
  

})
