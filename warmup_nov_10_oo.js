function indexToObj(arrOfObj) {
  var outputObj = {}
  arrOfObj.forEach(function(obj){
    outputObj[obj['id']] = obj
  })
  return outputObj
}

var customers = [
  {id: 1, name: 'Gertrude'},
  {id: 2, name: 'Taurean'},
  {id: 3, name: 'Vincent'},
  {id: 4, name: 'Blaze'},
  {id: 5, name: 'Carli'},
  {id: 6, name: 'Rebekah'},
]

console.log(indexToObj(customers))