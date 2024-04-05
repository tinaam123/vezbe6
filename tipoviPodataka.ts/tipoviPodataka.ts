//Primitivni - osnovni tipovi

let god:number = 25;
let ime:string = "ime";
let studira:boolean = true;


//Nizovi

let premeti:string[] = ["epos", "klijentske", "cloud"];
let ocene:number[] = [10,6,3];


//Tupels

let tuple:[string,number] = ["Saska",25];


//Enum

enum Modul{
    TEHEP,
    SI,
    IS,
}

let student:{ime:string, godine:number, studira:boolean} = {
    ime:"Danica",
    godine:24,
    studira:true
}

//Unija tipova

let brojIliString:number|string=10;
let biloSta:any = "Moze bilo koji tip";

//void 
function cao():void{
    console.log("cao");
}


//numm undefined

let n:null = null;
