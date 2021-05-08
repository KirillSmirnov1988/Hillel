class Calculator {
    constructor(){
        this.firstNum;
        this.secondNum;
    }

    set setFirstNum(fNum){
        this.firstNum = fNum;
    }

    get getFirstNum(){
        return this.firstNum;
    }

    set setSecondNum(sNum){
        this.secondNum = sNum;
    }

    get getSecondNum(){
        return this.secondNum;
    }

    mul(fNum = this.firstNum, sNum = this.secondNum){
        return (fNum * sNum );
    }

    dev (fNum = this.firstNum, sNum = this.secondNum){
        if(sNum){
            return (fNum / sNum );
        }
        else{
            return ("You cannot divide by zero !!!!")
        }
    }

    sum(fNum = this.firstNum, sNum = this.secondNum){
        return (fNum + sNum );
    }

    sub(fNum = this.firstNum, sNum = this.secondNum){
        return (fNum - sNum );
   }
   sum2(fNum = this.firstNum, sNum = this.secondNum){
       sum2.bind(this)();
   }
}

class improvedCalculator extends Calculator {
    constructor(){
        super();
    }
    mul(fNum = this.firstNum, sNum = this.setSecondNum){
        return super.mul(fNum, sNum);
    }
    dev(fNum = this.firstNum, sNum = this.setSecondNum){
        return super.dev(fNum, sNum);
    }
    sum(fNum = this.firstNum, sNum = this.setSecondNum){
        return super.sum(fNum, sNum);
    }
    sub(fNum, sNum){
        return super.sub(fNum, sNum);
    }

    mySqrt(num = this.firstNum){
        return Math.sqrt(num);
    }

    multInverse(num = this.firstNum){
        return ( 1 / num );
    }
    
}




