interface IAddress {
    city: string,
    state:string,
    country: string,
    pin:number
 }
    interface IPerson {
        firstName:string,
        lastName:string,
        gender:string,
   }
   interface IEmployee extends IAddress,IPerson{
    employeeId: number,
    firstName: string,
    lastName: string,
    emailAddress: string
    }
   let employeeObj: IEmployee ={
    city:"Pune",
    state:"Maharashtra",
    country:"India",
    pin: 413304,
 employeeId: 100,
 firstName:"sujata",
 lastName: "Bagal",
 gender: "Female",
 emailAddress: "sujatabagal5@gmail.com"

   }
   console.log(employeeObj);
   