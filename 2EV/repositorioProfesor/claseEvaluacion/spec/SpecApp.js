describe("App", function() {
  var app;
  
  beforeEach(function() {
    app = new App();
    app.createClassRooms(10);
  });

  it('it create classrooms',() => {
    expect(app.getClassRooms().length).toBe(10)
  })  
})