// first solution
function nameShuffler(str) {
  return str.split(' ')[1] + ' ' + str.split(' ')[0]
}


// next solution, best practice

function nameShuffler(str) {
  return str.split(' ').reverse().join(' ')
}
