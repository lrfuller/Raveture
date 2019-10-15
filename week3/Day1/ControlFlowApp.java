package Day1;

public class ControlFlowApp{
    public static void main(String[] args){
        // whileLoop();
        // System.out.println("======");
        // argForLoop(args);

        // System.out.println("======");
        // switchStatement(1);
        // switchStatement(2);
        // switchStatement(3);
        // switchStatementV2(args);
    }

    private static void switchStatementV2(String[] args){
        int num1 = Integer.parseInt(args[1]);
        int num2 = Integer.parseInt(args[2]);
        int result = 0;

        switch(args[0]){
            case "add": result = num1 + num2; break;
            case "subtract": result = num1 - num2; break;
            case "multiply": result = num1 * num2; break;
            case "divide": result = num1 / num2; break;
            case "mod": result = num1 % num2; break;
        }
        System.out.println(result);
    }
    private static void switchStatement(int number){
        //a switch statement branches your code into more than 2 possible branches
        // they can take ints, Strings, shorts, chars, bytes and enums
        switch(number){
            case 1: System.out.println("number is 1"); break;
            case 2: System.out.println("number is 2"); break;
            case 500: System.out.println("number is 500"); break;
            //we can have an optional default that runs if no matching case is found:
            default: System.out.println("None of the above"); break;
        }
        //breaks are optional, but they prevent the code after the switch from running, (if you don't and get the 1st case, all others
        // will print as well)
    }

    private static void argForLoop(String[] args){
        // A for loop runs the same block of code after adjusting (usually incrementing) a variable each time
        //This for loop will print all given args unless the arg is "skip"
        for (int i=0; i < args.length; i++){
            //access arrays the same way we do in JS
            // use == for equality:
            // use .equals() to compare objects' values
            // the continue keywords skips the rest of the block, but continues looping afterwards
            if (args[i].equals("skip")) {
                continue;
            }
            System.out.println(args[i]);
        }
    }

    public static void whileLoop(){
        //a while loop continues execution until the evaluated condition becomes false(or the break keyword is used)
        int a = 0;
        System.out.println("basic while loop");
        while(a < 5){
            //while a is less then 5, keep running
            System.out.println(a);
            a++;
        }

        //using break:
        while(true){
            //Math.random() produces a random number between 0 and 1
            boolean b = (Math.random() > 0.75);
            if(b) {
                break; //this exits the loop
            }
            System.out.println("loop hasn't exited yet");
        }
        System.out.println("Our while loop with break has exited");

        // similar to the while loop is the do-while loop. This runs the content of the block before checking the condition
        do {
            System.out.println("do-while executes at least once.");
        }while(false);

        //something to note: unreachable code is a compile time error. This will not compile:
        // while(false){
        //     //do something
        //     int variableInWhile;
        // }
    }
}