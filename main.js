function solution(str){
  let arr = str.split('');
  let result = "";
  for(let i = arr.length - 1; i >= 0; i--){
    result = result+arr[i]
  }
  return result;
}
console.log(solution('world'));