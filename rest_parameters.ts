function buildName3(firstName: string, ...restOfName: string[]) {//Named function with Rest parameters
	return firstName + " " + restOfName.join(" ");
}

console.log(buildName3("Raqeeb","Ajmal","Hanif","Hamzah"));//rest param mn ham jitni values chahen de skty hn assign kara 
//join is a function method
//rest param must have array 
//you can declare as ...anyName[]
//0 se lekr indefinite assign values kr skty hn

function players(d: string, ...f: number[]):string {
	return d + " " + f.join(" ");  
}
console.log(players("good",20,30,40,50,));//rest param mn ham same type ki bhot si values de skty hn
//console.log(players(,20,30,40,50))//error Q k 1st param string type ka h 

//anonymous function type with Rest parameters

var buildNameFun: (fname: string, ...rest: string[])=>string =
function (firstName: string, ...restOfName: string[]) {
	return firstName + " " + restOfName.join(" ");
}

//Note: Rest, optional and default parameters can only
// be at the end of the parameter list
											
var games: (kk: string, jk: string)=> string =
    function(kl: string,...lk: string[]): string {
     return kl + " " + lk.join(" ");
}						
console.log(games("Badminton","Cricket",));
//yaha py aap sirf 2 arguments use kr skty hn Q k aapny explicit type mn sirf 2 param assing kiye hwy hn






