const btn=document.getElementById('button');
const url="https://api.fixer.io/latest?base=";



btn.addEventListener("click", (e)=> {
    e.preventDefault();
    localStorage.clear();
    
 const base=document.getElementById('base').value;
const conversion= document.getElementById('conversion').value; 
const amount=document.getElementById('initial').value;
const resort='CAD';


let a=JSON.stringify(amount);
localStorage.setItem('amount', a);

        
let res=JSON.stringify(resort);
localStorage.setItem('res', res);

    convert(base, conversion);
});



function convert(base, conversion) {
    
    let res=localStorage.getItem('res')
    let resort=JSON.parse(res);
    
    let a=localStorage.getItem('amount');
    let amount=JSON.parse(a);
    
let myAr=[];

 fetch(`${url}${base}`)   
 .then((res)=>res.json())
 .then((data) => {
       
        let list=(data.rates);
        console.log(list);
        
           myAr.push(conversion);
           if(myAr[0]==="") {
               myAr.splice(0, 1, resort);
           }
      
      function getConv(key){
      for (key in list){
          if(key===(myAr[0])){
              let rate=list[key];
          
               let result=rate*amount;
               let output=document.getElementById('results');
               output.value=result;
          }
      }
      }
    getConv();
   
    })
    .catch((e) => { console.log(e, "error");
    });
}