describe('Main', function(){

  var arr;

  // Roda uma vez antes do bloco
  before(function(){
    
  })

  // Roda uma vez depois do bloco
  after(function(){
    
  })

  // Roda toda vez depois de cada bloco
  beforeEach(function(){
    arr = [1, 2, 3]
  })

  // Roda toda vez antes de cada bloco
  afterEach(function(){
    
  })

  it('should have a size of 4 when push another value to the array', function() {
    arr.push(4)
    console.log(arr.length)
  })

  it('should have a size of 2 when pop a value to the array', function() {
    arr.pop()
    console.log(arr.length)
  })

  it('should remove 3 when use pop in the array', function() {
    console.log(arr.pop() === 3)
  })
})
