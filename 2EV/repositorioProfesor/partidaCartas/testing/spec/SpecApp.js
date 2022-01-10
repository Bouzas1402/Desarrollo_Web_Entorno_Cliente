describe("App", function() {
  var app;
  
  beforeEach(function() {
    app = new App();
    
  });

  it('it create classrooms',() => {
    expect(app.getClassRooms().length).toBe(10)
  })  
})