var Student = function(name, score) {
  this.firstName = name;
  this.scores = scores;
};

Student.prototype.averageScore = function() {
  var sum = this.scores.reduce((prev, curr) => prev + curr);
  // console.log(sum)
  var length = this.scores.length;
  // console.log(length)
  return Math.floor(sum / length);
};

Student.prototype.letterGrade = function() {
  if (this.averageScore() >= 90) {
    return "A";
  }
  else if (this.averageScore() >= 80) {
    return "B";
  }
  else if (this.averageScore() >= 70) {
    return "C";
  }
  else if (this.averageScore() >= 60) {
    return "D";
  }
  else {
    return "F";
  }
};
