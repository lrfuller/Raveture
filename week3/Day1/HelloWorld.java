package Day1;

public class HelloWorld{
    //The entry point for a Java program is PSVM :
    public static void main(String[] args){
        // public is an access modifer a keyword that means a member will be associated with the class rather then the object
        // also static members are loaded first
        // void is the return type for the main method. All methods in Java must specify their return type
        // main is the name of the method
        // String[] is the type of the parameter, in this case an array of Srings
        // args is just the name of the parameter
        System.out.println("Hello World");
        System.out.println("The first argument: ");
        System.out.print(args[0]);

        System.out.println("Lets call our static method: ");
        System.out.println(sum(3,5));

        //we need to create an instance of our object in order to access non-static members, in this case the minus function
        System.out.println("Lets call our non-static method");
        HelloWorld helloWorld = new HelloWorld();
        System.out.println(helloWorld.minus(3,5));
        //this won't work:      (since it's not static)
        // System.out.println(minus(3, 5));
    }

    // this static method takes 2 ints and returns an int
    public static int sum(int a, int b){
        return a + b;
    }

    // this non-static method takes 2 ints and returns an int
    public int minus(int a, int b){
        return a - b;
    }
}