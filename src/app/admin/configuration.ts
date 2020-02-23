import { Injectable } from '@angular/core';


export class small_PS2{

    constructor(){}

    makas_eldalfa(width ,hight){
        let mkas = { width : width/2 , hight : hight-6.5};
        //console.log(mkas);
        return mkas ;
      }
      makas_elezaz(width ,hight)
      {
        let mkas = { width : (width/2)-11 , hight : (hight-6.5)-11};
        return mkas;
      }
      
      wazn_el7elkan(width ,hight){
        let temp =   ((width/100+0.12))*2 + ((hight/100+0.12))*2 ;
        console.log(temp);
        let wazn = temp*(6/6.5);
        return wazn;
      }
     
      wazn_eldalfa(width ,hight){
        let wazn =   ((width/100)*4 + (hight/100)*4)*(3.3/6.5);
        return wazn;
        }
      
      
      wazn_elsekena(width ,hight){
        let wazn = ((hight/100)*2)*(2/6.5);
        return wazn;
          }
      
      
      else3r(width ,hight,price){
        let els3r = (width/100)*(hight/100)*price;
        return els3r ;
      }
}
export class small_PS4{
  
      constructor(){}

dalfa_elezaz(width , hight){
 let makas = { width : (width+5.8)/4 , hight: hight-6.5};
 console.log(makas);
 return makas;
}


dalfa_elselk(width , hight){
  let makas = { width : ((width+5.8)/4) , hight: (hight-6.5)+0.3};
  console.log(makas);
  return makas;

}

makas_elezaz(width , hight){
  let makas = { width : ((width+5.8)/4)-11 , hight: (hight-6.5)-11};
  console.log(makas);
  return makas;
}

}


export class big_PS2{
  
      constructor(){}
dalfa_elezaz(width , hight){
 let makas = { width : (width+2)/2 , hight: hight-9.5};
 console.log(makas);
 return makas;
}


dalfa_elselk(width , hight){
  let makas = { width : (width+2)/2 , hight: (hight-9.5)+0.3};
  console.log(makas);
  return makas;

}


}



export class big_PS4{
  
      constructor(){}


      dalfa_elezaz(width , hight){
        let makas = { width : (width+2.5)/4 , hight: hight-9.5};
        console.log(makas);
        return makas;
       }
       
       
       dalfa_elselk(width , hight){
        let makas = { width :  (width+2.5)/4 , hight: (hight-9.5)+0.3};
         console.log(makas);
         return makas;
       
       }

}

export class jampo2{

  constructor(){}

  dalfa_elezaz(width , hight){
    let makas = { width : (width-.6)/2 , hight: hight-8.4};
    console.log(makas);
    return makas;
   }
   
   
   dalfa_elselk(width , hight){
     let makas = { width : ((width-4.4)/2) , hight: (hight-0.9)};
     console.log(makas);
     return makas;
   
   }
   
   makas_elezaz(width , hight){
     let makas = { width : ((width-29.5)/2) , hight: (hight-22.8) };
     console.log(makas);
     return makas;
   }
}


export class jampo4{
  
    constructor(){}
  
    dalfa_elezaz(width , hight){
      let makas = { width : (width+6)/4 , hight: hight-0.84};
      console.log(makas);
      return makas;
     }
     
     
     dalfa_elselk(width , hight){
      let makas = { width : ((width-1.8)/4) , hight: (hight-1.8)/4};
      console.log(makas);
      return makas;
    
    }
    
    makas_elezaz(width , hight){
      let makas = { width : ((width-51.6)/4) , hight: (hight-22.8) };
      console.log(makas);
      return makas;
    }
  }