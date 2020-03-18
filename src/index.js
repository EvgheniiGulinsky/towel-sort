module.exports = function towelSort (matrix) {
  if (!matrix) 
  return []
  matrix.forEach(element =>  matrix.indexOf(element)%2!==0 ? element.reverse() : element = element)
  const sortedArray = []
  matrix.forEach(element => element.forEach(element => sortedArray.push(element)))
  return sortedArray
}
