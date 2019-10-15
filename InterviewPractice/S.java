public class S{
    public static void main(String[] args){
        String name = "Billy Bob";
        String temp = "";
        String total = "";
        
        for (int i = 0; i < name.length(); i++){
            // System.out.println(i);
            temp += name.charAt(i);
            if (name.charAt(i) == ' '){
                break;
            }
        }
        System.out.println(temp);

    }
}