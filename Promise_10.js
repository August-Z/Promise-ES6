(function () {

  const AsyncEvent = (item) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve(item)
      }, 1000)
    })
  }

  const AsyncQueue = async () => {
    for (const value of [0, 1, 2, 3, 4]) {
      await AsyncEvent(value)
        .then(res => console.log(res))
        .catch(err => console.log(err))
    }
  }

  AsyncQueue();


})()