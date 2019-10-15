package Day2.interfaces;

public interface BasicCalc{
    //we only provide method signatures and return types
    // any class that implements this interface will have to implement all the method.
    
    // interface methods are by default public and abstract
    // public: accessible anywhere
    // abstract: the method needs to be impelmented
    // final class can't have a subclass
    // final value can't be changed
    int add(int a, int b);
    int subtract(int a, int b);
    int multiply(int a, int b);
    int divide(int a, int b);
    int modulo(int a, int b);
}