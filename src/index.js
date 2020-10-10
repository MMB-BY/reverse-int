module.exports = function reverse (n) {
    if (n < 0){
        n *= -1;
    }
  let buf = n.toString().split('');
  let res = [];
  for (let i = buf.length - 1; i >= 0 ; i--){
    res.push(buf[i]);
  }
  res = res.join('');
  return +res;
}
