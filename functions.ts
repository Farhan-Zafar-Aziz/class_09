
// //Functions

//Note: All parameters are required

//Named function

function add(x: string, y: number) {
    return x+y;
  }
  add("3",3);
  let s=(add("w",3));//w3
  console.log(s);
  
  //Anonymous function
  let myAdd1 = function(x: number, y: number): number { 
        return x+y; 
  };
  
  let dua = function(s:string, u: string):string{
     return s + u;
  }
  console.log(dua("3","3"))
  
  //Anonymous function with explict type
  let myAdd2: (x:number, y:number)=>number = 	function(x: number, y: number): number { 
                        return x+y; 
                      };
     let myfunc: (o:number, i:number)=>number = function(o:number,i:number){
      return o+i;
     }                 
  
  //type names dont matter
  //explicit type mn koi bhi parameter name de sakty hn
  let myAdd3: (baseValue:number, increment:number)=>number = 	function(x: number, y: number): number { 
                                return x+y; 
                              };
  
  let gone: (as:number, sd: number)=>number = function(s:number,j:number): number{
    return s+j;
  }
  
  //Lambda functions															
  let myAdd4 = (a : number, b : number) => a + b;
  //output will be: var myAdd4 = function(a : number, b : number) {return a + b};
  
  let adding = (a:number, b: number) => a+b;
  console.log(adding(1,3));//4
  //this is a almda function in which we take only params & type using arrow function to return parem
  
  type GreetFunction = (a: string) => void;
  function greeter(fn: GreetFunction) {
  
  }
  
  // type customFunction = (s: string) => void;
  // function myName(s:customFunction) {
  //    return s;
     
  // }
  // console.log(myName("ert"))                 
            
  