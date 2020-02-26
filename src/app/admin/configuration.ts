import { Injectable } from '@angular/core';


export class wazn_andEls3r{
  constructor(public width: number, public hight: number , public twl_el3wd: number , public wazn_el3wd) { }
 wazn_el7elkan(){
    let temp =   ((this.width/100+0.12))*2 + ((this.hight/100+0.12))*2 ;
    console.log(temp);
    let wazn = temp*(this.twl_el3wd/this.wazn_el3wd);
    return wazn;
  }

  wazn_eldalfa(){
    let wazn =   ((this.width/100)*4 + (this.hight/100)*4)*(this.twl_el3wd/this.wazn_el3wd);
    return wazn;
    }


  wazn_elsekena(){
    let wazn = ((this.hight/100)*2)*(this.twl_el3wd/this.wazn_el3wd);
    return wazn;
      }


  else3r(price){
    let els3r = (this.width/100)*(this.hight/100)*price;
    return els3r ;
  }

}
export interface ICalculate {
  calculate()
}
export const TYPES = [
  {
    name : 'ps صغير اتنين ضلفه',
    value : 'small_PS2',
  },
  {
    name : 'ps صغير اربعه ضلفه',
    value : 'small_PS4',
  },
  {
    name : 'ps كبير اتنين ضلفه',
    value : 'big_PS2',
  },
  {
    name : 'ps كبير اربعه ضلفه',
    value : 'big_PS4',
  },
  {
    name : 'جامبو اتنين ضلفه',
    value : 'jampo2',
  },
  {
    name : 'جامبو اربعه ضلفه',
    value : 'jampo4',
  },
  {
    name : 'تانجو اتنين ضلفه',
    value : 'Tango2',
  },
  {
    name : 'تانجو اربعه ضلفه',
    value : 'Tango4',
  },
]
export class calculate {
  constructor(public width: number, public hight: number) {

  
  }

  getCalculator( type: string){
    if (type == null) {
      return null;
    }
    if (type == 'small_PS2') {
      return new small_PS2(this.width, this.hight)
    }
    if (type == 'small_PS4') {
      return new small_PS4(this.width, this.hight)
    }

    if (type == 'big_PS2') {
      return new big_PS2(this.width, this.hight)
    }
    if (type == 'big_PS4') {
      return new big_PS4(this.width, this.hight)
    }

    if (type == 'jampo2') {
      return new jampo2(this.width, this.hight)
    }
    if (type == 'jampo4') {
      return new jampo4(this.width, this.hight)
    }

    if (type == 'Tango2') {
      return new Tango2(this.width, this.hight)
    }
    if (type == 'Tango4') {
      return new Tango4(this.width, this.hight)
    }
    else {
      return null
    }
  }




}




export class small_PS2 extends wazn_andEls3r implements ICalculate  {

  calculate() {
    return {
      "مقاس الضلفة": this.makas_eldalfa(),
      "مقاس الازاز": this.makas_elezaz()

    }
  }
  makas_eldalfa() {
    let mkas = { width: this.width / 2, hight: this.hight - 6.5 };
    //console.log(mkas);
    return mkas;
  }
  makas_elezaz() {
    let mkas = { width: (this.width / 2) - 11, hight: (this.hight - 6.5) - 11 };
    return mkas;
  }

}
export class small_PS4 extends wazn_andEls3r implements ICalculate{

 
  calculate() {
    return {
      "مقاس الضلفة الازاز": this.dalfa_elezaz(),
      "مقاس ضلفه السلك": this.dalfa_elselk(),
      "مقاس الازاز": this.makas_elezaz(),
      
      

    }
  }
  dalfa_elezaz() {
    let makas = { width: (this.width + 5.8) / 4, hight: this.hight - 6.5 };
    return makas;
  }


  dalfa_elselk() {
    let makas = { width: ((this.width + 5.8) / 4), hight: (this.hight - 6.5) + 0.3 };
    console.log(makas);
    return makas;

  }

  makas_elezaz() {
    let makas = { width: ((this.width + 5.8) / 4) - 11, hight: (this.hight - 6.5) - 11 };
    console.log(makas);
    return makas;
  }

}


export class big_PS2 extends wazn_andEls3r implements ICalculate{

 

  calculate() {
    return {
      "مقاس الضلفة الازاز": this.dalfa_elezaz(),
      "مقاس ضلفه السلك": this.dalfa_elselk(),
     
      

    }
  }
  dalfa_elezaz() {
    let makas = { width: (this.width + 2) / 2, hight: this.hight - 9.5 };
    console.log(makas);
    return makas;
  }


  dalfa_elselk() {
    let makas = { width: (this.width + 2) / 2, hight: (this.hight - 9.5) + 0.3 };
    console.log(makas);
    return makas;

  }


}



export class big_PS4 extends wazn_andEls3r implements ICalculate{

 
  calculate() {
    return {
      "مقاس الضلفة الازاز": this.dalfa_elezaz(),
      "مقاس ضلفه السلك": this.dalfa_elselk(),

    }
  }

  dalfa_elezaz() {
    let makas = { width: (this.width + 2.5) / 4, hight: this.hight - 9.5 };
    console.log(makas);
    return makas;
  }


  dalfa_elselk() {
    let makas = { width: (this.width + 2.5) / 4, hight: (this.hight - 9.5) + 0.3 };
    console.log(makas);
    return makas;

  }

}

export class jampo2 extends wazn_andEls3r implements ICalculate{

 


  calculate() {
    return {
      "مقاس الضلفة الازاز": this.dalfa_elezaz(),
      "مقاس ضلفه السلك": this.dalfa_elselk(),
      "مقاس الازاز": this.makas_elezaz(),
      
      

    }
  }

  dalfa_elezaz() {
    let makas = { width: (this.width - .6) / 2, hight: this.hight - 8.4 };
    console.log(makas);
    return makas;
  }


  dalfa_elselk() {
    let makas = { width: ((this.width - 4.4) / 2), hight: (this.hight - 0.9) };
    console.log(makas);
    return makas;

  }

  makas_elezaz() {
    let makas = { width: ((this.width - 29.5) / 2), hight: (this.hight - 22.8) };
    console.log(makas);
    return makas;
  }
}


export class jampo4 extends wazn_andEls3r implements ICalculate{

 
  calculate() {
    return {
      "مقاس الضلفة الازاز": this.dalfa_elezaz(),
      "مقاس ضلفه السلك": this.dalfa_elselk(),
      "مقاس الازاز": this.makas_elezaz(),
      
      

    }
  }


  dalfa_elezaz() {
    let makas = { width: (this.width + 6) / 4, hight: this.hight - 0.84 };
    console.log(makas);
    return makas;
  }


  dalfa_elselk() {
    let makas = { width: ((this.width - 1.8) / 4), hight: (this.hight - 1.8) / 4 };
    console.log(makas);
    return makas;

  }

  makas_elezaz() {
    let makas = { width: ((this.width - 51.6) / 4), hight: (this.hight - 22.8) };
    console.log(makas);
    return makas;
  }
}

export class Tango2 extends wazn_andEls3r implements ICalculate{

  calculate() {
    return {
      "مقاس الضلفة الازاز": this.dalfa_elezaz(),
      "مقاس ضلفه السلك": this.dalfa_elselk(),
      "مقاس الازاز": this.makas_elezaz(),
      
      

    }
  }


 
  dalfa_elezaz() {
    let makas = { width: (this.width + 1) / 2, hight: this.hight - 7.3 };
    console.log(makas);
    return makas;
  }


  dalfa_elselk() {
    let makas = { width: ((this.width + 1) / 2), hight: (this.hight - 6.7) };
    console.log(makas);
    return makas;

  }

  makas_elezaz() {
    let makas = { width: ((this.width - 21) / 2), hight: (this.hight - 18) };
    console.log(makas);
    return makas;
  }

}


export class Tango4 extends wazn_andEls3r implements ICalculate{
  calculate() {
    return {
      "مقاس الضلفة الازاز": this.dalfa_elezaz(),
      "مقاس ضلفه السلك": this.dalfa_elselk(),
      "مقاس الازاز": this.makas_elezaz(),
      
      

    }
  }


 
  dalfa_elezaz() {
    let makas = { width: (this.width + 5.5) / 4, hight: this.hight - 7.3 };
    console.log(makas);
    return makas;
  }


  dalfa_elselk() {
    let makas = { width: ((this.width + 10) / 4), hight: (this.hight - 6.7) };
    console.log(makas);
    return makas;

  }

  makas_elezaz() {
    let makas = { width: ((this.width - 37) / 4), hight: (this.hight - 18) };
    console.log(makas);
    return makas;
  }

}