function forLoop(array){
  for ( var num in array){
    if (array.first){
      console.log(`I am ${num} strange loop`)
    }
    else 
      console.log(`I am ${num} strange loops`)
  }
}

function whileLoop(num){
  while (num > 0 ){
    console.log(--num)
 }
  return num = 'done'
}

function doWhileLoop(array){
  let i = 0
  function incrementVariable() {
    i = i++
  }
  do {
    incrementVariable() 
  } while (array.length > 0 && array < 5)
}

