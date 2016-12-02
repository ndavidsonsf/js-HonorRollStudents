var Classroom = function(students) {
  this.students = students;
};

Classroom.prototype.find = function(name) {
  for (var i in this.students) {
    if (this.students[i].firstName == name) {
      return this.students[i];
    };
  };
};

Classroom.prototype.honorRollStudents = function() {
  honorArray = [];
  for (var i in this.students) {
    if (this.students[i].averageScore() >= 95) {
      honorArray.push(this.students[i]);
    };
  };
};
