var arr = ["jogar bola", "learn js", "learn boot"];

var removed = arr.splice(arr.indexOf("jogar bola"), 1);

arr.forEach((word,index)=>console.log(word,index))
