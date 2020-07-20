'use strict'

// Callback
const getDataCallback = (num, cb) => {
  setTimeout(() => {
    if (typeof num === 'number') {
      cb(undefined, num * 2)
    } else {
      cb('Number must be provided')
    }
  }, 2000)
}

getDataCallback(2, (err, data) => {
  if (err) {
    console.error(err)
  } else {
    getDataCallback(data, (err, data) => {
      if (err) {
        console.log(err)
      } else {
        console.log(data)
      }
    })
  }
})

// Promise
const getDataPromise = (num) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
  })
}

//const myPromise = getDataPromise(2)

//myPromise
//  .then((data) => {
//    console.log(data)
//  })
//  .catch((err) => {
//    console.error(err)
//  })

getDataPromise(2)
  .then((data) => {
    getDataPromise(data).then((rs) => console.log(rs))
  })
  .catch((err) => console.error(err))

getDataPromise(10)
  .then((data) => getDataPromise(data))
  .then((rs) => console.log(rs))
  .catch((err) => console.error(err))
