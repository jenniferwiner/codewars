const assert = require('chai').assert
const expect = require('chai').expect
const recoverSecret = require('./recoverSecret')

describe('Recover Secret', function() {
  let secret1 = 'whatisup'
  let triplets1 = [
    ['t', 'u', 'p'],
    ['w', 'h', 'i'],
    ['t', 's', 'u'],
    ['a', 't', 's'],
    ['h', 'a', 'p'],
    ['t', 'i', 's'],
    ['w', 'h', 's']
  ]
  it('find the secret "whatisup" in the array', function() {
    expect(recoverSecret(triplets1)).to.deep.equal(secret1)
  })
})
