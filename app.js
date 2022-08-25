function Calculator() {

    this.read = function(){
        this.first = +prompt("Ваше первое цифра?", 0 );
        this.second = +prompt("Ваша вторая цифра?", 0 );
    }

    this.plus = function(){
        return this.first + this.second;
    }

    this.minus = function(){
        return this.first - this.second;
    }

    this.multip = function(){
        return this.first * this.second;
    }

    this.division = function(){
        return this.first / this.second;
    }

    this.interest = function(){
        return this.first % this.second;
    };
 }

let calculator = new Calculator();
calculator.read();

alert( "Plus = " + calculator.plus());
alert( "Minus = " + calculator.minus());
alert( "Multip = " + calculator.multip());
alert( "Division = " + calculator.division());
alert( "Interest = " + calculator.interest());
