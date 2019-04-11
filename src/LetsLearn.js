class LetsLearn {
    greeting(name) {
        if (name == null) {
            return "let's learn!";
        }
        else {
            return "let's learn, " + name + "!";
        }
    }

    gimmeFive() {
        return 5;
    }

    thinkOfANumber(num) {
        return num;
    }

    addMe(num1, num2) {
        return num1 + num2;
    }

    subtractMe(a, b) {
        return a - b;
    }

    multiplyMe(a, b) {
        return a * b;
    }

    divideMe(a, b) {
        return a/b;
    }

    isEvenlyDivisible (a,b) {
        if (a % b == 0) {
            return true;
        }

        else {
            return false;
        }
    }

    areWeTwins (a, b) {
        if (a == b) {
            return true;
        }

        else {
            return false;
        }
    }

    switchMe (bool) {
        if (bool == true) {
            return false;
        }

        if (bool == false) {
            return true;
        }
    }

    writeDownThisNumber (num) {
        return String (num);
    }

    hello (name) {
        return "my name is " + name;
    }

    showLastValue (list) {
        var lenlist = list.length;
        return list[lenlist-1];
    }

    valueAtIndex (list, num) {
        return list[num];
    }

    howLongIsThisList (list) {
        return list.length;
    }

    amIOnTheList (name) {
        if (name == 'suze') {
            return true
        }
        else if (name == 'andrew') {
            return true
        }
        else if (name == 'walter') {
            return true
        }
    }






}

module.exports = new LetsLearn();
