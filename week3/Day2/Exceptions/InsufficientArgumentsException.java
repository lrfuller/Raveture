package Day2.Exceptions;

public class InsufficientArgumentsException extends RuntimeException {
    // Exceptions in Java have more than one constructor. (Their constructors are overloaded)
    // One such constructor is the no-args constructor
    //      usage: throw new Exception
    // We can also construct an Exception with a message attached
    //      usage: throw new Exception("heres a message")
    

    //our no-args constructor calls the no-args constructor of Runtime Exception
    public InsufficientArgumentsException(){
        super();
    }

    // this constructor calls the RuntimeException constructor that takes a String.
    public InsufficientArgumentsException(String msg){
        super(msg);
    }


}