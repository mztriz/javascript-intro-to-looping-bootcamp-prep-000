function forLoop(array){
  for (let num = 0; num < 25; num++){
    if (num === 1){
      console.log(`I am ${num} strange loop`)
    }
    else 
      console.log(`I am ${num} strange loops`)
  }
  return array
}

function whileLoop(num){
  while (num > 0 ){
    console.log(--num)
 }
  return 'done'
}

function doWhileLoop(array){
  var i = 0
  function incrementVariable() {
    i = i + 1
  }
  do {
		console.log('array.length = ' + array.length + ' and i = ' + i)
		array = array.slice(1)
		incrementVariable()
	} while (array.length > 0 && i < 5)
	return array
}
