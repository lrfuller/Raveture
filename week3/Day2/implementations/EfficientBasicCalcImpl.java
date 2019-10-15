package Day2.implementations;

// extending a class makes this a subclass. It gives us access to all the method
// we don't need to import, since it's within the same implementations package

// Since we're inheriting from a class that implements an interface, this class will also implement that interface
public class EfficientBasicCalcImpl extends AdamBasicCalcImpl{
    
    @Override // this is called an annotation
    public int subtract(int a, int b){
        System.out.println("efficient subtract being called");
        return a-b;
    }

}