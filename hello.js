function oddCount(n){
  count = 0
  for (let i = 0; i < n; n++) {
    if (i % 2 != 0) {
      count++
    }
  }
  return count * 2
}