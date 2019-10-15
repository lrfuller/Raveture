//goal: pull the first name from the string without knowing the number of letters

public class PullNameFromString{
    public static void main(String[] args){
        String temp = "";
        String phrase = "Bob Joe";
        String total = "";

        //for loop does all the work. Basically once the loop runs into a space character then it will end
        for (int i = 1; i <= phrase.length(); i++) {
            temp += phrase.charAt(i);
            if (phrase.charAt(i) == ' ') {
                break;
            }
        }
        total = temp;				
		System.out.println(total);
    }
}





//used from code during Revature java training, week 3 assignment

/**
	 * 1. Convert a phrase to its acronym. Teachers love their TLA (Three Letter
	 * Acronyms)! Help generate some jargon by writing a program that converts a
	 * long name like Portable Network Graphics to its acronym (PNG).
	 * 
	 * @param phrase
	 * @return
	 */

	/*public String acronym(String phrase) {
		// TODO Write an implementation for this method declaration
		char acronymL = ' ';
		String acronym = "";
		
		
		// loop through the string
		//grab the first character of the string as well as eah after a space or hyphen and append it the total
		
		//total string used after converting the temp string to uppercase
		String total = "";
		String temp = "";
		
		//adds the first character in the String. Freebie
		temp += phrase.charAt(0);
        
        for (int i = 1; i <= phrase.length() - 1; i++) {
        	//during the loop, if there's a space or a hyphen, increment the current character into the acronym string
            if (phrase.charAt(i - 1) == ' ' || phrase.charAt(i - 1) == '-') {
                temp += phrase.charAt(i);
            }
        }
        total = temp.toUpperCase(); 
				
		System.out.println(total);
		return null;
	}*/