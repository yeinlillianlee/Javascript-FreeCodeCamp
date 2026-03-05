let score = 0;

function getAverage(array) {
  score = 0;

  for (let singleScore of array) {
    score = score + singleScore;
  }

  score = score / array.length;
  console.log(score);
  return score;
}

function getGrade(score) {
  if (score === 100) {
    return "A+"
  } else if (90 <= score && score <= 99) {
    return "A"
  } else if (80 <= score && score <= 89) {
    return "B"
  } else if (70 <= score && score <= 79) {
    return "C"
  } else if (60 <= score && score <= 69) {
    return "D"
  } else if (0 <= score && score <= 59) {
    return "F"
  }
}

function hasPassingGrade(score) {
  if (getGrade(score) !== "F") {
    return true;
  } else {
    return false;
  }
}

function studentMsg(classArray, studentScore) {
  if (hasPassingGrade(studentScore) === true) {
    return `Class average: ${getAverage(classArray)}. Your grade: ${getGrade(studentScore)}. You passed the course.`
  } else if (hasPassingGrade(studentScore) === false) {
    return `Class average: ${getAverage(classArray)}. Your grade: ${getGrade(studentScore)}. You failed the course.`
  }
}

getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89])

getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95])

studentMsg([92, 88, 12, 77, 57, 100, 67, 38, 97, 89], 37)

studentMsg([56, 23, 89, 42, 75, 11, 68, 34, 91, 19], 100)

