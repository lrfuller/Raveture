package Day1;
public class OperatorApp{
    

[add 4 5]



arr 0 = add
arr 1 = 3
arr 2 = 5


    public static void main(String[] args){
        // logical operators in java are familiar:
        // & is and
        // | is or
        // ! is negation
        // && and || are and and or, but they're "short-circuit" logical operators.
        // This means they may not run their second operand.

        // common usage: if (object != null && object.property == whatever){}

        // relational operators are also familiar:
        // == and !=
        // >, <=, <, <=

        // We use the regular arithmetic operators as well:
        // +, - *, / %
        // +=, -=, *=, /=, %=
        // ++ and --

        // finally we have a ternary operator that is shorthand for if-then-else:
        // (condition) ? (if-true) : (if-false)
        int m = true ? 1 : 0;

        // quick type conversion: String to int
        // we'll just do the first arg:
        System.out.println("Add 5 to arg after converting to int: ");
        int argAsInt = Integer.parseInt(args[0]); //takes in an int and returns int

        System.out.println(argAsInt + 5);
        System.out.println("Add 5 to arg without converting to int: "); //will just add them together as a string. (inputted # + 5)
        System.out.println(args[0] + 5);
    }
}