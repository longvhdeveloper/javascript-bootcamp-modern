'use strict'

const getDataPromise = (num = 0) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      typeof num === 'number' ? resolve(num * 2) : reject('Number must be provided')
    }, 2000)
  })
}

const processData = async () => {
  let value = await getDataPromise('2')
  value = await getDataPromise(value)
  return value
}

processData()
  .then((data) => console.log(data))
  .catch((err) => console.error(err))
