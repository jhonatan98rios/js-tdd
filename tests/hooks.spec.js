describe('Main', function(){

  // Roda uma vez antes do bloco
  before(function(){
    console.log('before')
  })

  // Roda uma vez depois do bloco
  after(function(){
    console.log('after')
  })

  // Roda toda vez depois de cada bloco
  beforeEach(function(){
    console.log('before each')
  })

  // Roda toda vez antes de cada bloco
  afterEach(function(){
    console.log('after each')
  })

  it('test 1', function() {
    console.log('teste 1')

  })

  it('test 2', function() {
    console.log('teste 2')
    
  })
})

// before, before each, teste 1, after each, before each, teste 2, after each, after
