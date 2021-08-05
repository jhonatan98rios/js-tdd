// O describe é usado para agrupar methodos de uma classe ou função
describe('Main', function() {

  // Ele também é usado para divir os métodos
  describe('Method A', function(){

    // O context é usado para dividir os casos de uso daquele methodo
    context('Case 1', function(){

      // O it é a descrição do teste de fato.
      // O foco aqui aqui é descrever o dado que será recebido e o dado que será retornado
      it('Should happen...', function(){
        
      })
    })

    context('Case 2', function(){

      it('Should happen...', function(){

      })
    })

    // O método only desativa os outros métodos e permite que o teste execute somente ele
    //context.only('Case 3', ...)

    // O método skip desativa somente o teste marcado (describe, context, it)
    //context.skip('Case 4', ...)
  })

  describe('Method B', function(){
    
  })
})
