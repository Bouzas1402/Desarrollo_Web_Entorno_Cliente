describe("ClassRoom", function() {
  var app;
  
  beforeEach(function() {
    app = new App();
    app.createClassRooms(10);
  });

  it('it create students',() => {
    app.getClassRooms().forEach(element => {
      expect(element.students.length).toBe(element.maxStudents)  
    });
  })

  it('it create students correct age',() => {
    app.getClassRooms().forEach(classroom => {
      classroom.students.forEach(student => {
        expect(student.age).not.toBeLessThan(13)    
        expect(student.age).toBeLessThan(61)    
      });
      
    });
  })
})