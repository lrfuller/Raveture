package assignment;

public class MathStuff{

    public static void main(String[] args){
        Operation(args);
        // switchStatement(args);
    }

    private static void switchStatement(String[] args){
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

    public static void Operation(String[] args){
        //holds the 2nd and 3rd value that will 
        int num1 = Integer.parseInt(args[1]);
        int num2 = Integer.parseInt(args[2]);
        int result = 0;
        

        for (int i = 0; i < args.length; i++){
            //checks for addition
            if (args[i].equals("add")){
                result = num1 + num2;
            }
            if (args[i].equals("subtract")){
                result = num1 - num2;
            }
            if (args[i].equals("multiply")){
                result = num1 * num2;
            }
            if (args[i].equals("divide")){
                result = num1 / num2;
            }
            if (args[i].equals("mod")){
                result = num1 % num2;
            }
        }
        System.out.println(result);
    }
}