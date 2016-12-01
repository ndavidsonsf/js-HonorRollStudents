describe("Classroom", function() {
  var classroom, jalil, irene, kelvin, myra;

  beforeEach(function() {
    // Define student objects
    jalil = new Student("Jalil", [100, 100]);

    irene = new Student("Irene", [95, 95]);

    kelvin = new Student("Kelvin", [94, 94]);

    myra = new Student("Myra", [70, 70]);

    // Assign classroom
    classroom = new Classroom([jalil, irene, kelvin, myra]);
  });

  describe("students", function() {
    it("has students", function() {
      expect(classroom.students).toEqual([jalil, irene, kelvin, myra]);
    });
  });

});
