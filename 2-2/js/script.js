
console.log("loading started...");

const fed = new Promise((resolve, reject) => {
    setTimeout(() => {
        const errors = false;
       if(!errors) {
const jsonDate = {
    name: 'Berbolot',
    your: 2001,
};
      const err = JSON.stringify(jsonDate)
        console.log("1", err);
        resolve (err)
             }else{
                  reject("Something has gone wrong");
             }
         }, 2000)
     });


fed
 .then((err) => {
    setTimeout(()=>{

const whith = JSON.parse(err)
    
    console.log("2", whith);
 
}, 1000)   
 })


.catch((erre) => {
    console.log("OOps sorry try again", erre);
})
.finally(() => {
    console.log("loeding ended");
});

