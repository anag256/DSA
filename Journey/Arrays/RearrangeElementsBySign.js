//variety 1- only even array- equal pos & negative nos
//brute
//tc - o(n) + o(n/2)
//sc - o(n)
function RearrangeElementsBySign(ar) {
  let pos = [],
    neg = [];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 0) pos.push(ar[i]);
    else neg.push(ar[i]);
  }
  //storing positive at even, negatives at odd
  for (let i = 0; i < parseInt(ar.length / 2); i++) {
    ar[2 * i] = pos[i];
    ar[2 * i + 1] = neg[i];
  }

  return ar;
}

//optimal
//tc-o(n)
//sc-o(n)
function RearrangeElementsBySignOptimal(ar) {
  let ans = [],
    posIndex = 0,
    negIndex = 1;
  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 0) {
      ans[posIndex] = ar[i];
      posIndex += 2;
    } else {
      ans[negIndex] = ar[i];
      negIndex += 2;
    }
  }
  return ans;
}
console.log(RearrangeElementsBySign([3, 1, -2, -5, 2, -4]));
console.log(RearrangeElementsBySignOptimal([3, 1, -2, -5, 2, -4]));

//variety2- odd array
//tc - o(n) + o(min(pos,neg)) + o(leftovers)-o(2n)
//sc - o(n)
function RearrangeElementsBySignOdd(ar) {
  let pos = [],
    neg = [];

  for (let i = 0; i < ar.length; i++) {
    if (ar[i] > 0) pos.push(ar[i]);
    else neg.push(ar[i]);
  }

  if(pos.length===neg.length) return ar;
  if(pos.length>neg.length){
    let index=2*neg.length;
    for(let i=0;i<neg.length;i++){
        ar[2*i]=pos[i];
        ar[2*i+1]=neg[i];
    }
    for(let i=neg.length;i<pos.length;i++){
        ar[index]=pos[i];
        index++;
    }
  }
  else{
    let index=2*pos.length;
    for(let i=0;i<pos.length;i++){
        ar[2*i]=pos[i];
        ar[2*i+1]=neg[i];
    }
    for(let i=pos.length;i<neg.length;i++){
        ar[index]=neg[i];
        index++;
    }
  }
  return ar;
}

console.log(RearrangeElementsBySignOdd([3, 1, -2,9, -5, 2, -4,8]));