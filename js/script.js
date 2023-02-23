const err = new Promise((resolve) => {
    setTimeout(() => {
       
const jsonDate = {
    name: 'Berbolot',
    your: 2001,
};
      const wer = JSON.stringify(jsonDate)
        console.log("1", wer);
        resolve (wer)
    }, 2000)
 });

 err
 .then((wer) => {
   setTimeout(() => {
    const ded = JSON.parse(wer)
    console.log("2", ded);
  }, 1000);
})

