//1

function isOdd(num) {
    return new Promise((resolve, reject) => {
      if (Number.isInteger(num) && num % 2 !== 0) {
        resolve(true);
      } else {
        reject(false);
      }
    });
  }
  
  const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  
  numbers.forEach(async (num) => {
    try {
      const result = await isOdd(num);
      if (result) {
        console.log(`${num} isOdd.`);
      }
    } catch (error) {
    }
  });


//2

function getRandomCharacter() {
    return new Promise((resolve, reject) => {
      const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
      const randomIndex = Math.floor(Math.random() * characters.length);
      const randomCharacter = characters[randomIndex];
  
      setTimeout(() => {
        resolve(randomCharacter);
      }, 500);
    });
  }
  
  (async () => {
    try {
      const randomCharacter = await getRandomCharacter();
      console.log(randomCharacter);
    } catch (error) {
      console.error('Error:', error);
    }
  })();

  //3

  function getData() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.floor(Math.random() * 100);
        if (randomNumber % 2 === 0) {
          reject(randomNumber);
        } else {
          resolve(randomNumber);
        }
      }, 500);
    });
  }
  
  (async () => {
    try {
      const result = await getData();
      console.log('Result:', result);
    } catch (error) {
      console.error('Error:', error);
    }
  })();


  //4


  function rejectResolve() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        const randomNumber = Math.random();
        if (randomNumber > 0.5) {
          resolve(randomNumber);
        } else {
          reject(randomNumber);
        }
      }, 500);
    });
  }
  
  rejectResolve().then(result => {
    console.log('Promise resolved with value:', result);
  }).catch(error => {
    console.log('Promise rejected with value:', error);
  });


  


