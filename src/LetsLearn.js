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

    // well done! this number handling is nice and clean :) try to think about ways to make these
    // argument names more clear, bearing in mind possible collaborators on the code (including your future self
    // your most frequent collaborator). what does 'a' tell me about what this argument is for: consider
    // alternatives like 'operand1' or similar

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

    // really great to see you using conditionals so confidently! there's a shorter way to
    // implement these functions that doesn't use conditionals at all - can you (using some research!)
    // figure out what it is?

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

    // this is clever, but there's a super useful built in js method to do this -
    // can you find it and implement it?

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

    // see my notes on the tests who wrote in ../test/letsLearn.test.js






}

module.exports = new LetsLearn();
