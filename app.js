function myFunction() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Async/Await Success!");
    }, 1000);
  });
}

async function callFunction() {
  try {
    const result = await myFunction();
    console.log(result);
  } catch (error) {
    console.log(error);
  }
}

callFunction();