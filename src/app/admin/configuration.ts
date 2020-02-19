import { Injectable } from '@angular/core';


export class configuration{

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
        let temp =   ((width+12)/100)*2 + ((hight+12)/100)*2;
        let wazn = temp**(6/6.5);
        return wazn;
      }
      2.64
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