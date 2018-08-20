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
  do{
    delete array[0]
  } while (array.length > 1)
  return false
}

