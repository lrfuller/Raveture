package Day2;

import Day2.interfaces.BasicCalc;
import Day2.implementations.EfficientBasicCalcImpl;
import Day2.implementations.AdamBasicCalcImpl;
import Day2.Exceptions.InsufficientArgumentsException;
import Day2.Exceptions.ExampleCheckedException;

public class App{


    public static void main(String[] args){

        //this line will cause a compile error unless we catch or throw our checked exception:
        try{
            throw new ExampleCheckedException();
        } catch (ExampleCheckedException e){
            System.err.println("We caught the example exception");
        }
        

        //using implementation to create an object
        // using polymorphism
        BasicCalc basicCalc = new AdamBasicCalcImpl();

        if (args.length < 3){
            String msg = "Requires 3 args and you gave: " + args.length;
            throw new InsufficientArgumentsException(msg);
        }


        switch(args[0]){
            case "add":
            System.out.println("The sum is: ");
            System.out.println(basicCalc.add(
                Integer.parseInt(args[1]), Integer.parseInt(args[2])));
            break;

            case "subtract":
            System.out.println("The difference is: ");
            System.out.println(basicCalc.subtract(
                Integer.parseInt(args[1]), Integer.parseInt(args[2])));
            break;

            case "multiply":
            System.out.println("The quotient is: ");
            System.out.println(basicCalc.multiply(
                Integer.parseInt(args[1]), Integer.parseInt(args[2])));
            break;

            case "divide":
            System.out.println("The quotient is: ");
            // use try-catch to handle exceptions
            // we can have multiple catch statements to catch different types of exceptions
            
            //we have to go from more specific to less specific exceptions in further catch blocks (not less to more)
            // big Exception goes at the end, otherwise that exception would always print
            // catch(Exception e){ < this one goes last not first
            
            // we can also add a finally block that runs regardless of how the try-catch exits:
            // whether or not an exception/error happens, the finally block will always run.

            // the finally block only doesn't run when:
            //      -something kills the process "System.exit(0)"
            //      -the power goes out
            //      -you have an infinite loop in your try or catch
            try{
                System.out.println(basicCalc.divide(
                Integer.parseInt(args[1]), Integer.parseInt(args[2])));
            } catch(ArithmeticException e){
                System.err.println("Cannot divide by 0");
                e.printStackTrace();
            } catch(ArrayIndexOutOfBoundsException e){
                System.err.println("Divide needs more arguments");
            } catch(Exception e){
                System.err.println("Something else went wrong");
            } finally {
                System.out.println("This line always runs");
            }
            System.out.println("this line still runs after the errors"); //it wouldn't if we didn't catch
            break;

            
        }
    }
}