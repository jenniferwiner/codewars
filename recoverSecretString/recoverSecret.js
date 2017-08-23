const recoverSecret = (triplets) => {
  // start at first array
  let array = [...triplets[0]]
  // make copy without triplets[0], will be decreceasin
  let copy = triplets.slice(1)
  while (copy.length > 0) {
    for (let i = 1; i < triplets.length; i++) {
      // check triplet[i][...] exists in array
      // order is important
    }
  }
}

module.exports = recoverSecret
