
//Named function with optional parameters

function buildName1(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}

//let result1 = buildName1("Bob");  //ok
//let result2 = buildName1("Bob", "Adams", "Sr.");  //error, too many parameters
//var result3 = buildName1("Bob", "Adams");  //also ok

function bros(one: string, two?: string):string {
    if(one){
        return one + two;
    }
    else {
        return one;
    }
}
console.log(bros("Sadiq"))//optional param ka matlb ham chahen to value den ya na den 

//anonymous function type with optional parameters

var buildName2 : (firstName: string, lastName?: string) => string = 
function(firstName: string, lastName?: string) : string {
    if (lastName)
        return firstName + " " + lastName;
    else
        return firstName;
}
console.log(buildName2("sain"))	
    
var vagetables: (bhaji:string, salen?: string) => string = //parameter names koi bhi likh skty hn 
    function(subzi: string, favrtsubzi?: string): string {
    if(favrtsubzi) {
        return subzi + favrtsubzi;
    }
     else {
        return subzi;
     }
}
console.log(vagetables("Guwar"));
//agr explicit type ko optional nahi rakhty to function type optional bhi ho pr wo work nahi kregi, aapko us param mn value lazman deni hogi nahi to error aayega jese k neechy h

var func: (a:number, b: number) => number = //explicit type
    function(a: number, b?: number): number { //anonymous function
        if(b){
            return a + b;
        } else {
            return a;
        }
    }
    //console.log(func(1,))//error