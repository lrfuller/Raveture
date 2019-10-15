package Day2.implementations;

//getting our interface
import Day2.interfaces.BasicCalc;

public class AdamBasicCalcImpl implements BasicCalc{
    
    // The @Override annotation lets us know we're override a method elsewhere
    // it's used for methods from interfaces and superclasses.

    // since by default interface methods are public and abstract, our overriding method must also be public
    // We can only make methods more accessible when we override them
    @Override
    public int add(int a, int b){
        return a+b;
    }

    @Override
    public int subtract(int a, int b){
        // create a variable with method scope
        int out = a;
        for(int i = 0; i < b; i++){
            out--;
        }
        return out;
    }

    @Override
    public int multiply(int a, int b){
        return a*b;
    }

    @Override
    public int divide(int a, int b){
        return a/b;
    }

    @Override
    public int modulo(int a, int b){
        return a%b;
    }
}