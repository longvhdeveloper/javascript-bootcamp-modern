const calculateGrade = (studentScore = 0, totalScore = 0) => {
  if (typeof studentScore !== 'number' || typeof totalScore !== 'number') {
    throw Error('Student score and total score must be a number')
  }

  if (totalScore <= 0) {
    return 'Please provide totalScore'
  }
  const percent = (studentScore / totalScore) * 100
  let grade
  if (percent >= 90) {
    grade = 'A'
  } else if (percent >= 80) {
    grade = 'B'
  } else if (percent >= 70) {
    grade = 'C'
  } else if (percent >= 60) {
    grade = 'D'
  } else {
    grade = 'F'
  }

  return `${studentScore}/${totalScore} -> You got a ${grade} (${percent}%)`
}
try {
  console.log(calculateGrade('test', 20))
} catch (e) {
  console.log(e.message)
}
