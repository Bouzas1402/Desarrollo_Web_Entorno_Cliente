describe("Person", function() {
  var person;
  
  beforeEach(function() {
    person = new Person("pepe",36);
  });

  it('it create person',() => {
    expect(person.name).toBe("pepe")
    
  })

  it('it create person age',() => {
    expect((new Person("pepe",36)).age).not.toBeLessThan(36)
  })

})