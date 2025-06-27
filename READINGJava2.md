# Java Fundamentals: Control Structures, Built-in Types, and Variables

This file contains beginner-friendly Java code examples focused on fundamental concepts: control structures, primitive types, and variables. These examples are designed to help you practice reading and understanding basic Java syntax and logic flow.

## How to Use This File

1. **Start with variables and types** - Understand how Java handles different data types
2. **Follow control flow** - Trace through if statements, loops, and logical operations
3. **Notice Java patterns** - See how Java's type system and syntax work
4. **Practice mental execution** - Try to predict what each code block will output
5. **Focus on patterns** - Recognize common Java programming patterns

---

## Example 1: Variables, Primitive Types, and String Operations

### Code to Read:
```java
public class StudentInfoProcessor {
    
    public static void processStudentInfo() {
        // Primitive data types - must be explicitly declared
        String studentName = "Alice Johnson";       // Reference type
        int age = 20;                              // int primitive
        double gpa = 3.85;                         // double primitive
        boolean isEnrolled = true;                 // boolean primitive
        char gradeLevel = 'S';                     // char primitive (S for Senior)
        
        // Working with strings
        String firstName = studentName.split(" ")[0];  // Get first part
        String lastName = studentName.split(" ")[1];   // Get second part
        char lastInitial = lastName.charAt(0);         // Get first character
        
        // String formatting and concatenation
        String displayName = firstName + " " + lastInitial + ".";
        String email = firstName.toLowerCase() + "." + lastName.toLowerCase() + "@university.edu";
        
        // Working with numbers and type casting
        int totalCredits = 15;  // Current semester credits
        int nextYearAge = age + 1;
        double gpaPercentage = (gpa / 4.0) * 100;  // Convert to percentage
        int roundedGpa = (int) Math.round(gpaPercentage);  // Explicit casting
        
        // Boolean operations
        boolean isHonorStudent = (gpa >= 3.5) && isEnrolled;
        boolean needsAdvising = (gpa < 2.0) || (totalCredits < 12);
        boolean isSenior = (age >= 21) && (totalCredits > 90);
        
        // String operations
        int nameLength = studentName.length();
        boolean hasLongName = nameLength > 15;
        String upperName = studentName.toUpperCase();
        boolean containsJohnson = studentName.contains("Johnson");
        
        // Conditional (ternary) operator
        String enrollmentStatus = isEnrolled ? "Enrolled" : "Not Enrolled";
        String honorStatus = isHonorStudent ? "Honor Student" : "Regular Student";
        
        // Print information using different formatting methods
        System.out.println("=== Student Information ===");
        System.out.println("Name: " + displayName);
        System.out.println("Age: " + age + " (will be " + nextYearAge + " next year)");
        System.out.println("Email: " + email);
        System.out.println("GPA: " + gpa + " (" + String.format("%.1f", gpaPercentage) + "%)");
        System.out.println("Status: " + enrollmentStatus);
        System.out.println("Grade Level: " + gradeLevel);
        
        System.out.println("\n=== Academic Status ===");
        System.out.println("Total Credits: " + totalCredits);
        System.out.println("Honor Student: " + (isHonorStudent ? "Yes" : "No"));
        System.out.println("Needs Advising: " + (needsAdvising ? "Yes" : "No"));
        System.out.println("Is Senior: " + (isSenior ? "Yes" : "No"));
        
        System.out.println("\n=== String Analysis ===");
        System.out.println("Name length: " + nameLength + " characters");
        System.out.println("Has long name: " + hasLongName);
        System.out.println("Uppercase name: " + upperName);
        System.out.println("Contains 'Johnson': " + containsJohnson);
        
        // Demonstrate variable scope within method
        if (gpa >= 3.0) {
            String message = "Good academic standing";  // Local to this block
            System.out.println("Academic note: " + message);
        }
        // message is not accessible here - would cause compilation error
    }
    
    public static void main(String[] args) {
        processStudentInfo();
        
        // Show variable types
        System.out.println("\n=== Variable Types Demo ===");
        int intVar = 42;
        double doubleVar = 3.14159;
        boolean boolVar = true;
        char charVar = 'A';
        String stringVar = "Hello";
        
        System.out.println("int: " + intVar + " (type: int)");
        System.out.println("double: " + doubleVar + " (type: double)");
        System.out.println("boolean: " + boolVar + " (type: boolean)");
        System.out.println("char: " + charVar + " (type: char)");
        System.out.println("String: " + stringVar + " (type: String)");
    }
}
```

### What to Notice:
- **Explicit Type Declaration**: Every variable must have a declared type (`int age`, `String name`)
- **Primitive vs Reference Types**: `int`, `double`, `boolean`, `char` are primitives; `String` is a reference type
- **String Immutability**: String operations like `.toLowerCase()` return new strings
- **Type Casting**: `(int) Math.round()` explicitly converts double to int
- **Array Access**: `split(" ")[0]` accesses array elements by index
- **Method Chaining**: Can chain methods like `studentName.split(" ")[0]`
- **Boolean Operators**: `&&` (and), `||` (or) for logical operations
- **Ternary Operator**: `condition ? valueIfTrue : valueIfFalse`
- **String Concatenation**: Using `+` operator to combine strings
- **Block Scope**: Variables declared inside `if` blocks are only accessible within that block

### Trace Through Example:
```java
String studentName = "Alice Johnson";
String firstName = "Alice";          // studentName.split(" ")[0]
String lastName = "Johnson";         // studentName.split(" ")[1]
char lastInitial = 'J';             // lastName.charAt(0)
String displayName = "Alice J.";    // firstName + " " + lastInitial + "."

double gpa = 3.85;
boolean isEnrolled = true;
boolean isHonorStudent = true;       // (3.85 >= 3.5) && true → true && true
boolean needsAdvising = false;       // (3.85 < 2.0) || (15 < 12) → false || false
```

---

## Example 2: Control Structures and Conditional Logic

### Code to Read:
```java
import java.util.Scanner;

public class GradeCalculator {
    
    public static void calculateGrades(int[] scores) {
        // Check for null or empty array
        if (scores == null || scores.length == 0) {
            System.out.println("No scores provided");
            return;  // Early return - exit method
        }
        
        // Initialize counters and accumulators
        int totalPoints = 0;
        int[] gradeCounts = new int[5];  // A, B, C, D, F counts (indices 0-4)
        int failedTestCount = 0;
        int bonusPoints = 0;
        
        System.out.println("Processing individual scores:");
        
        // Process each score with different conditional logic
        for (int i = 0; i < scores.length; i++) {
            int score = scores[i];
            char letterGrade;
            String feedback;
            
            System.out.print("Test " + (i + 1) + ": " + score + " points → ");
            
            // Nested if-else chain for grade assignment
            if (score >= 90) {
                letterGrade = 'A';
                feedback = "Excellent!";
                gradeCounts[0]++;  // Increment A count
            } else if (score >= 80) {
                letterGrade = 'B';
                feedback = "Good work!";
                gradeCounts[1]++;  // Increment B count
            } else if (score >= 70) {
                letterGrade = 'C';
                feedback = "Satisfactory";
                gradeCounts[2]++;  // Increment C count
            } else if (score >= 60) {
                letterGrade = 'D';
                feedback = "Needs improvement";
                gradeCounts[3]++;  // Increment D count
            } else {
                letterGrade = 'F';
                feedback = "Failed - needs retake";
                gradeCounts[4]++;  // Increment F count
                failedTestCount++;
            }
            
            System.out.println(letterGrade + " - " + feedback);
            
            // Add to total
            totalPoints += score;
            
            // Bonus points for exceptional performance
            if (score >= 95) {
                int bonus = 5;
                bonusPoints += bonus;
                System.out.println("    Bonus: +" + bonus + " points for excellence!");
                
                // Extra bonus for perfect score
                if (score == 100) {
                    int perfectBonus = 5;  // Additional bonus
                    bonusPoints += perfectBonus;
                    System.out.println("    Perfect score bonus: +" + perfectBonus + " points!");
                }
            }
        }
        
        // Calculate statistics
        double averageScore = (double) totalPoints / scores.length;  // Cast to avoid integer division
        double adjustedAverage = (double) (totalPoints + bonusPoints) / scores.length;
        
        // Determine overall performance using compound conditions
        String overallGrade;
        String recommendation;
        
        if (averageScore >= 90 && failedTestCount == 0) {
            overallGrade = "Outstanding";
            recommendation = "Excellent work! Consider advanced coursework.";
        } else if (averageScore >= 80 && failedTestCount <= 1) {
            overallGrade = "Strong";
            recommendation = "Good performance. Keep up the good work!";
        } else if (averageScore >= 70 || (averageScore >= 65 && bonusPoints > 0)) {
            overallGrade = "Satisfactory";
            recommendation = "Adequate progress. Focus on consistent improvement.";
        } else if (failedTestCount > scores.length / 2) {  // More than half failed
            overallGrade = "Concerning";
            recommendation = "Significant struggles. Recommend tutoring and study group.";
        } else {
            overallGrade = "Needs Improvement";
            recommendation = "Some challenges noted. Additional support recommended.";
        }
        
        // Create detailed report
        System.out.println("\n=== Grade Report ===");
        System.out.println("Total tests: " + scores.length);
        System.out.printf("Average score: %.1f%n", averageScore);  // printf formatting
        
        if (bonusPoints > 0) {
            System.out.println("Bonus points earned: " + bonusPoints);
            System.out.printf("Adjusted average: %.1f%n", adjustedAverage);
        }
        
        System.out.println("Overall grade: " + overallGrade);
        System.out.println("Recommendation: " + recommendation);
        
        // Show grade distribution using loops and conditionals
        System.out.println("\nGrade Distribution:");
        String[] gradeLetters = {"A", "B", "C", "D", "F"};
        String[] symbols = {"✓", "✓", "○", "○", "✗"};  // Different symbols for different grades
        
        for (int i = 0; i < gradeCounts.length; i++) {
            if (gradeCounts[i] > 0) {
                double percentage = ((double) gradeCounts[i] / scores.length) * 100;
                System.out.printf("  %s %s: %d tests (%.1f%%)%n", 
                    symbols[i], gradeLetters[i], gradeCounts[i], percentage);
            }
        }
        
        // Warning for failed tests using conditional
        if (failedTestCount > 0) {
            System.out.println("\n⚠️  Failed " + failedTestCount + " out of " + scores.length + " tests");
            System.out.println("   Consider retaking these assessments.");
        }
    }
    
    public static void demonstrateLoopTypes() {
        System.out.println("\n=== Loop Types Demonstration ===");
        
        // Standard for loop
        System.out.println("1. Standard for loop (counting):");
        for (int i = 1; i <= 5; i++) {
            System.out.print(i + " ");
        }
        System.out.println();
        
        // Enhanced for loop (for-each)
        System.out.println("2. Enhanced for loop (for-each):");
        int[] numbers = {10, 20, 30, 40, 50};
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();
        
        // While loop
        System.out.println("3. While loop:");
        int count = 1;
        while (count <= 3) {
            System.out.print("Round " + count + " ");
            count++;
        }
        System.out.println();
        
        // Do-while loop
        System.out.println("4. Do-while loop (executes at least once):");
        int value = 1;
        do {
            System.out.print("Value: " + value + " ");
            value++;
        } while (value <= 2);
        System.out.println();
    }
    
    public static void main(String[] args) {
        // Test with different score scenarios
        System.out.println("=== Scenario 1: Strong Student ===");
        int[] strongScores = {92, 88, 95, 87, 100, 89};
        calculateGrades(strongScores);
        
        System.out.println("\n" + "=".repeat(50));
        System.out.println("=== Scenario 2: Struggling Student ===");
        int[] strugglingScores = {45, 67, 55, 72, 58, 48};
        calculateGrades(strugglingScores);
        
        System.out.println("\n" + "=".repeat(50));
        System.out.println("=== Scenario 3: Empty Array ===");
        int[] emptyScores = {};
        calculateGrades(emptyScores);
        
        // Demonstrate different loop types
        demonstrateLoopTypes();
    }
}
```

### What to Notice:
- **Array Declaration**: `int[] scores` declares an array of integers
- **Null Checking**: Always check for `null` before using reference types
- **Array Length**: Use `.length` property (not a method) for arrays
- **Enhanced For Loop**: `for (int score : scores)` iterates over values
- **Type Casting**: `(double) totalPoints` converts int to double for division
- **Printf Formatting**: `System.out.printf("%.1f%n", value)` for formatted output
- **String Repeat**: `"=".repeat(50)` creates a string of 50 equal signs (Java 11+)
- **Compound Conditions**: Using `&&` and `||` with parentheses for clarity
- **Array Initialization**: `int[] gradeCounts = new int[5]` creates array with default values (0)
- **Loop Variable Scope**: Variables declared in for loops are scoped to the loop
- **Early Return**: `return` statement exits method immediately

### Trace Through Example:
```java
int[] scores = {92, 88, 95};
// Loop iteration 1: i=0, score=92
//   92 >= 90 → letterGrade='A', gradeCounts[0]=1, feedback="Excellent!"
//   92 >= 95 → false, no bonus
// Loop iteration 2: i=1, score=88
//   88 >= 80 → letterGrade='B', gradeCounts[1]=1, feedback="Good work!"
// Loop iteration 3: i=2, score=95
//   95 >= 90 → letterGrade='A', gradeCounts[0]=2, feedback="Excellent!"
//   95 >= 95 → true, bonusPoints=5

// Final: totalPoints=275, averageScore=91.7, failedTestCount=0
// 91.7 >= 90 && 0 == 0 → overallGrade="Outstanding"
```

---

## Example 3: Arrays and Iteration Patterns

### Code to Read:
```java
public class ArrayProcessor {
    
    public static void analyzeNumberArray(int[] numbers) {
        // Check for valid input
        if (numbers == null) {
            System.out.println("Error: Array is null");
            return;
        }
        
        if (numbers.length == 0) {
            System.out.println("Error: Array is empty");
            return;
        }
        
        System.out.println("=== Array Analysis ===");
        System.out.print("Original array: ");
        
        // Print array using enhanced for loop
        for (int number : numbers) {
            System.out.print(number + " ");
        }
        System.out.println();
        
        // Initialize tracking variables
        int sum = 0;
        int max = numbers[0];        // Start with first element
        int min = numbers[0];        // Start with first element
        int evenCount = 0;
        int oddCount = 0;
        int positiveCount = 0;
        int negativeCount = 0;
        
        // Analyze each element using standard for loop
        System.out.println("\nElement-by-element analysis:");
        for (int i = 0; i < numbers.length; i++) {
            int current = numbers[i];
            
            // Add to sum
            sum += current;
            
            // Check for max and min
            if (current > max) {
                max = current;
            }
            if (current < min) {
                min = current;
            }
            
            // Count even/odd using modulo operator
            if (current % 2 == 0) {
                evenCount++;
                System.out.println("  Index " + i + ": " + current + " (even)");
            } else {
                oddCount++;
                System.out.println("  Index " + i + ": " + current + " (odd)");
            }
            
            // Count positive/negative
            if (current > 0) {
                positiveCount++;
            } else if (current < 0) {
                negativeCount++;
            }
            // Note: zero is neither positive nor negative
        }
        
        // Calculate statistics
        double average = (double) sum / numbers.length;
        
        // Display results
        System.out.println("\n=== Statistics ===");
        System.out.println("Array length: " + numbers.length);
        System.out.println("Sum: " + sum);
        System.out.printf("Average: %.2f%n", average);
        System.out.println("Maximum: " + max);
        System.out.println("Minimum: " + min);
        System.out.println("Even numbers: " + evenCount);
        System.out.println("Odd numbers: " + oddCount);
        System.out.println("Positive numbers: " + positiveCount);
        System.out.println("Negative numbers: " + negativeCount);
    }
    
    public static void demonstrateArrayOperations() {
        System.out.println("\n=== Array Operations Demo ===");
        
        // Array creation and initialization
        int[] scores = {85, 92, 78, 96, 88};  // Array literal
        int[] grades = new int[5];            // Array with default values (0)
        
        // Fill grades array using loop
        for (int i = 0; i < grades.length; i++) {
            grades[i] = 70 + (i * 5);  // 70, 75, 80, 85, 90
        }
        
        System.out.print("Scores array: ");
        printArray(scores);
        
        System.out.print("Grades array: ");
        printArray(grades);
        
        // Array copying
        int[] scoresCopy = new int[scores.length];
        for (int i = 0; i < scores.length; i++) {
            scoresCopy[i] = scores[i];
        }
        
        System.out.print("Copied scores: ");
        printArray(scoresCopy);
        
        // Modify original and show copy is independent
        scores[0] = 100;
        System.out.print("After modifying original scores[0] to 100:");
        System.out.print("  Original: ");
        printArray(scores);
        System.out.print("  Copy: ");
        printArray(scoresCopy);
    }
    
    public static void printArray(int[] array) {
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {  // Don't print comma after last element
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
    
    public static void searchAndSortDemo() {
        System.out.println("\n=== Search and Sort Demo ===");
        
        int[] numbers = {64, 34, 25, 12, 22, 11, 90};
        System.out.print("Original array: ");
        printArray(numbers);
        
        // Linear search
        int target = 25;
        int foundIndex = -1;
        
        for (int i = 0; i < numbers.length; i++) {
            if (numbers[i] == target) {
                foundIndex = i;
                break;  // Exit loop early when found
            }
        }
        
        if (foundIndex != -1) {
            System.out.println("Found " + target + " at index " + foundIndex);
        } else {
            System.out.println(target + " not found in array");
        }
        
        // Simple bubble sort (for demonstration)
        int[] sortedNumbers = new int[numbers.length];
        // Copy array first
        for (int i = 0; i < numbers.length; i++) {
            sortedNumbers[i] = numbers[i];
        }
        
        // Bubble sort algorithm
        for (int i = 0; i < sortedNumbers.length - 1; i++) {
            for (int j = 0; j < sortedNumbers.length - 1 - i; j++) {
                if (sortedNumbers[j] > sortedNumbers[j + 1]) {
                    // Swap elements
                    int temp = sortedNumbers[j];
                    sortedNumbers[j] = sortedNumbers[j + 1];
                    sortedNumbers[j + 1] = temp;
                }
            }
        }
        
        System.out.print("Sorted array: ");
        printArray(sortedNumbers);
    }
    
    public static void main(String[] args) {
        // Test array analysis
        int[] testNumbers = {15, -3, 8, 0, 22, -7, 14, 9};
        analyzeNumberArray(testNumbers);
        
        // Test edge cases
        System.out.println("\n" + "=".repeat(40));
        analyzeNumberArray(null);     // Null array
        analyzeNumberArray(new int[0]); // Empty array
        
        // Demonstrate array operations
        demonstrateArrayOperations();
        
        // Search and sort demonstration
        searchAndSortDemo();
    }
}
```

### What to Notice:
- **Array Bounds**: Always check `i < array.length` to avoid IndexOutOfBoundsException
- **Default Values**: `new int[5]` creates array with default values (0 for integers)
- **Array Literals**: `{1, 2, 3}` is shorthand for creating and initializing arrays
- **Modulo Operator**: `number % 2 == 0` checks if number is even
- **Loop Break**: `break` statement exits the loop immediately
- **Nested Loops**: Loop inside another loop for algorithms like bubble sort
- **Variable Swapping**: Classic three-step swap using temporary variable
- **Array Independence**: Copying arrays creates separate memory locations
- **Linear Search**: Sequential checking of each element
- **Boundary Conditions**: Handle first/last elements carefully in loops
- **Method Parameters**: Arrays are passed by reference, modifications affect original

### Trace Through Example:
```java
int[] numbers = {15, -3, 8};
// Loop iteration 1: i=0, current=15
//   sum=15, max=15, min=15, 15%2!=0 → oddCount=1, positiveCount=1
// Loop iteration 2: i=1, current=-3
//   sum=12, max=15, min=-3, (-3)%2!=0 → oddCount=2, negativeCount=1
// Loop iteration 3: i=2, current=8
//   sum=20, max=15, min=-3, 8%2==0 → evenCount=1, positiveCount=2

// Final: sum=20, average=6.67, evenCount=1, oddCount=2
```

---

## Example 4: Methods and Parameter Passing

### Code to Read:
```java
public class MethodExamples {
    
    // Class variables (static fields)
    private static int totalStudents = 0;
    private static final String SCHOOL_NAME = "Tech University";  // Constant
    
    // Method with no parameters, returns void
    public static void displayWelcomeMessage() {
        System.out.println("Welcome to " + SCHOOL_NAME + "!");
        System.out.println("Current total students: " + totalStudents);
    }
    
    // Method with parameters, returns a value
    public static double calculateGPA(int[] grades) {
        if (grades == null || grades.length == 0) {
            return 0.0;  // Return default value for invalid input
        }
        
        int sum = 0;
        for (int grade : grades) {
            sum += grade;
        }
        
        return (double) sum / grades.length;  // Explicit type conversion
    }
    
    // Method that modifies class variable
    public static void addStudent(String studentName, int studentAge) {
        totalStudents++;  // Modify class variable
        System.out.println("Added student: " + studentName + " (age " + studentAge + ")");
        System.out.println("Total students now: " + totalStudents);
    }
    
    // Method with multiple return statements
    public static String determineGradeLevel(int age, int credits) {
        if (age < 0 || credits < 0) {
            return "Invalid input";  // Early return for invalid data
        }
        
        if (credits >= 90) {
            return "Senior";
        } else if (credits >= 60) {
            return "Junior";
        } else if (credits >= 30) {
            return "Sophomore";
        } else {
            return "Freshman";
        }
        // Note: no need for final else - all paths return
    }
    
    // Method demonstrating parameter passing
    public static void demonstrateParameterPassing() {
        System.out.println("\n=== Parameter Passing Demo ===");
        
        // Primitive types are passed by value
        int originalNumber = 10;
        System.out.println("Before calling modifyPrimitive: " + originalNumber);
        modifyPrimitive(originalNumber);
        System.out.println("After calling modifyPrimitive: " + originalNumber);  // Still 10
        
        // Arrays are passed by reference
        int[] originalArray = {1, 2, 3};
        System.out.print("Before calling modifyArray: ");
        printArray(originalArray);
        modifyArray(originalArray);
        System.out.print("After calling modifyArray: ");
        printArray(originalArray);  // Array is modified!
        
        // Strings are immutable, but references can be reassigned
        String originalString = "Hello";
        System.out.println("Before calling modifyString: " + originalString);
        String result = modifyString(originalString);
        System.out.println("After calling modifyString:");
        System.out.println("  Original: " + originalString);  // Still "Hello"
        System.out.println("  Returned: " + result);          // "Hello World"
    }
    
    // Helper method - modifies primitive parameter
    private static void modifyPrimitive(int number) {
        number = number * 2;  // Only modifies local copy
        System.out.println("Inside modifyPrimitive: " + number);
    }
    
    // Helper method - modifies array contents
    private static void modifyArray(int[] array) {
        if (array != null && array.length > 0) {
            array[0] = 999;  // Modifies the original array
            System.out.println("Inside modifyArray, changed first element to: " + array[0]);
        }
    }
    
    // Helper method - returns new string
    private static String modifyString(String str) {
        String newString = str + " World";  // Creates new string
        System.out.println("Inside modifyString: " + newString);
        return newString;
    }
    
    // Method with method overloading (same name, different parameters)
    public static void printInfo(String message) {
        System.out.println("Message: " + message);
    }
    
    public static void printInfo(String title, String message) {
        System.out.println(title + ": " + message);
    }
    
    public static void printInfo(int number) {
        System.out.println("Number: " + number);
    }
    
    // Utility method for printing arrays
    private static void printArray(int[] array) {
        System.out.print("[");
        for (int i = 0; i < array.length; i++) {
            System.out.print(array[i]);
            if (i < array.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println("]");
    }
    
    // Method demonstrating local variable scope
    public static void demonstrateScope() {
        System.out.println("\n=== Variable Scope Demo ===");
        
        int methodVariable = 100;
        System.out.println("Method variable: " + methodVariable);
        
        // Block scope
        if (true) {
            int blockVariable = 200;
            methodVariable = 150;  // Can modify method variable
            System.out.println("Inside block - method variable: " + methodVariable);
            System.out.println("Inside block - block variable: " + blockVariable);
        }
        
        // blockVariable is not accessible here
        System.out.println("After block - method variable: " + methodVariable);
        
        // Loop scope
        for (int i = 0; i < 3; i++) {
            int loopVariable = i * 10;
            System.out.println("Loop iteration " + i + ", loop variable: " + loopVariable);
        }
        
        // i and loopVariable are not accessible here
        System.out.println("After loop - method variable: " + methodVariable);
    }
    
    public static void main(String[] args) {
        // Test basic methods
        displayWelcomeMessage();
        
        // Test method with return value
        int[] studentGrades = {85, 92, 78, 96, 88};
        double gpa = calculateGPA(studentGrades);
        System.out.printf("Calculated GPA: %.2f%n", gpa);
        
        // Test method that modifies class variable
        addStudent("Alice Johnson", 20);
        addStudent("Bob Smith", 19);
        
        // Test method with multiple returns
        System.out.println("\n=== Grade Level Examples ===");
        System.out.println("Student with 95 credits: " + determineGradeLevel(21, 95));
        System.out.println("Student with 45 credits: " + determineGradeLevel(19, 45));
        System.out.println("Student with 15 credits: " + determineGradeLevel(18, 15));
        System.out.println("Invalid student: " + determineGradeLevel(-1, 50));
        
        // Test method overloading
        System.out.println("\n=== Method Overloading Examples ===");
        printInfo("Hello World");
        printInfo("Status", "All systems operational");
        printInfo(42);
        
        // Test parameter passing
        demonstrateParameterPassing();
        
        // Test variable scope
        demonstrateScope();
        
        // Final state
        displayWelcomeMessage();
    }
}
```

### What to Notice:
- **Static Methods**: `public static` methods belong to the class, not instances
- **Method Signatures**: Method name + parameter types determine unique methods
- **Return Types**: Methods must declare return type; `void` means no return value
- **Early Returns**: Multiple `return` statements can exit method at different points
- **Parameter Passing**: Primitives passed by value, objects/arrays passed by reference
- **Method Overloading**: Same method name with different parameter types
- **Variable Scope**: Variables exist only within their declaring block
- **Constants**: `final` variables cannot be changed after initialization
- **Private Methods**: `private` methods can only be called within the same class
- **String Immutability**: String operations create new strings, don't modify originals
- **Access Modifiers**: `public`, `private` control visibility of methods and variables

### Trace Through Example:
```java
int originalNumber = 10;
modifyPrimitive(originalNumber);  // Passes copy of 10
// Inside method: number = 10 * 2 = 20 (only local copy)
// originalNumber still = 10 (unchanged)

int[] originalArray = {1, 2, 3};
modifyArray(originalArray);  // Passes reference to array
// Inside method: array[0] = 999 (modifies original array)
// originalArray becomes {999, 2, 3}

totalStudents = 0;
addStudent("Alice", 20);  // totalStudents becomes 1
addStudent("Bob", 19);    // totalStudents becomes 2
```

---

## Example 5: String Processing and Character Operations

### Code to Read:
```java
public class StringProcessor {
    
    public static void analyzeText(String text) {
        // Input validation
        if (text == null) {
            System.out.println("Error: Text is null");
            return;
        }
        
        if (text.isEmpty()) {
            System.out.println("Error: Text is empty");
            return;
        }
        
        System.out.println("=== Text Analysis ===");
        System.out.println("Original text: \"" + text + "\"");
        
        // Basic string properties
        int length = text.length();
        System.out.println("Length: " + length + " characters");
        
        // Character-by-character analysis
        int letterCount = 0;
        int digitCount = 0;
        int spaceCount = 0;
        int punctuationCount = 0;
        int vowelCount = 0;
        
        System.out.println("\nCharacter analysis:");
        for (int i = 0; i < text.length(); i++) {
            char ch = text.charAt(i);
            
            // Classify each character
            if (Character.isLetter(ch)) {
                letterCount++;
                // Check if vowel
                char lowerCh = Character.toLowerCase(ch);
                if (lowerCh == 'a' || lowerCh == 'e' || lowerCh == 'i' || 
                    lowerCh == 'o' || lowerCh == 'u') {
                    vowelCount++;
                }
            } else if (Character.isDigit(ch)) {
                digitCount++;
            } else if (Character.isWhitespace(ch)) {
                spaceCount++;
            } else {
                punctuationCount++;
            }
            
            // Show first 10 characters with their properties
            if (i < 10) {
                System.out.printf("  [%d] '%c' - ", i, ch);
                if (Character.isLetter(ch)) {
                    System.out.print("letter");
                    if (Character.isUpperCase(ch)) {
                        System.out.print(" (uppercase)");
                    } else {
                        System.out.print(" (lowercase)");
                    }
                } else if (Character.isDigit(ch)) {
                    System.out.print("digit");
                } else if (Character.isWhitespace(ch)) {
                    System.out.print("whitespace");
                } else {
                    System.out.print("punctuation");
                }
                System.out.println();
            }
        }
        
        // Display counts
        System.out.println("\n=== Character Counts ===");
        System.out.println("Letters: " + letterCount);
        System.out.println("Digits: " + digitCount);
        System.out.println("Spaces: " + spaceCount);
        System.out.println("Punctuation: " + punctuationCount);
        System.out.println("Vowels: " + vowelCount);
        System.out.println("Consonants: " + (letterCount - vowelCount));
    }
    
    public static void demonstrateStringMethods(String input) {
        if (input == null) {
            input = "  Hello, Java World! 123  ";
        }
        
        System.out.println("\n=== String Methods Demo ===");
        System.out.println("Original: \"" + input + "\"");
        
        // String transformation methods
        String trimmed = input.trim();                    // Remove leading/trailing whitespace
        String upperCase = input.toUpperCase();           // Convert to uppercase
        String lowerCase = input.toLowerCase();           // Convert to lowercase
        String replaced = input.replace("Java", "Programming");  // Replace substring
        
        System.out.println("Trimmed: \"" + trimmed + "\"");
        System.out.println("Upper case: \"" + upperCase + "\"");
        System.out.println("Lower case: \"" + lowerCase + "\"");
        System.out.println("Replaced: \"" + replaced + "\"");
        
        // String query methods
        boolean containsJava = input.contains("Java");
        boolean startsWithHello = trimmed.startsWith("Hello");
        boolean endsWithExclamation = trimmed.endsWith("!");
        int indexOfWorld = input.indexOf("World");
        int lastIndexOfL = input.lastIndexOf("l");
        
        System.out.println("\n=== String Queries ===");
        System.out.println("Contains 'Java': " + containsJava);
        System.out.println("Starts with 'Hello': " + startsWithHello);
        System.out.println("Ends with '!': " + endsWithExclamation);
        System.out.println("Index of 'World': " + indexOfWorld);
        System.out.println("Last index of 'l': " + lastIndexOfL);
        
        // String splitting and substring
        String[] words = trimmed.split(" ");  // Split on spaces
        String firstWord = words.length > 0 ? words[0] : "";
        String substring = input.substring(2, 7);  // Characters from index 2 to 6
        
        System.out.println("\n=== String Parsing ===");
        System.out.print("Words: ");
        for (int i = 0; i < words.length; i++) {
            System.out.print("\"" + words[i] + "\"");
            if (i < words.length - 1) {
                System.out.print(", ");
            }
        }
        System.out.println();
        System.out.println("First word: \"" + firstWord + "\"");
        System.out.println("Substring (2-6): \"" + substring + "\"");
    }
    
    public static String reverseString(String str) {
        if (str == null || str.length() <= 1) {
            return str;  // Nothing to reverse
        }
        
        // Build reversed string character by character
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        
        return reversed;
    }
    
    public static boolean isPalindrome(String str) {
        if (str == null) {
            return false;
        }
        
        // Clean the string: remove spaces and convert to lowercase
        String cleaned = str.replace(" ", "").toLowerCase();
        
        // Check if string reads the same forwards and backwards
        int left = 0;
        int right = cleaned.length() - 1;
        
        while (left < right) {
            if (cleaned.charAt(left) != cleaned.charAt(right)) {
                return false;  // Characters don't match
            }
            left++;
            right--;
        }
        
        return true;  // All characters matched
    }
    
    public static int countOccurrences(String text, String pattern) {
        if (text == null || pattern == null || pattern.isEmpty()) {
            return 0;
        }
        
        int count = 0;
        int index = 0;
        
        // Find all occurrences of pattern
        while ((index = text.indexOf(pattern, index)) != -1) {
            count++;
            index += pattern.length();  // Move past this occurrence
        }
        
        return count;
    }
    
    public static void main(String[] args) {
        // Test text analysis
        String sampleText = "Hello, World! This is Java 123.";
        analyzeText(sampleText);
        
        // Test string methods
        demonstrateStringMethods(sampleText);
        
        // Test string algorithms
        System.out.println("\n=== String Algorithms ===");
        
        String testString = "programming";
        String reversed = reverseString(testString);
        System.out.println("Original: \"" + testString + "\"");
        System.out.println("Reversed: \"" + reversed + "\"");
        
        // Test palindrome detection
        String[] palindromeTests = {"racecar", "A man a plan a canal Panama", "hello", "madam"};
        System.out.println("\nPalindrome tests:");
        for (String test : palindromeTests) {
            boolean isPalin = isPalindrome(test);
            System.out.println("\"" + test + "\" is palindrome: " + isPalin);
        }
        
        // Test pattern counting
        String longText = "The quick brown fox jumps over the lazy dog. The dog was lazy.";
        String pattern = "the";
        int occurrences = countOccurrences(longText.toLowerCase(), pattern);
        System.out.println("\nPattern counting:");
        System.out.println("Text: \"" + longText + "\"");
        System.out.println("Pattern \"" + pattern + "\" occurs " + occurrences + " times");
        
        // Test edge cases
        System.out.println("\n=== Edge Cases ===");
        analyzeText("");      // Empty string
        analyzeText(null);    // Null string
        
        System.out.println("Reverse of null: \"" + reverseString(null) + "\"");
        System.out.println("Reverse of empty: \"" + reverseString("") + "\"");
    }
}
```

### What to Notice:
- **Character Class Methods**: `Character.isLetter()`, `Character.isDigit()`, etc. for character classification
- **String Immutability**: String operations return new strings, original unchanged
- **String Comparison**: Use `.equals()` for content comparison, not `==`
- **Index-based Access**: `charAt(i)` gets character at index `i`
- **Substring Methods**: `substring(start, end)` extracts characters from start to end-1
- **Array from Split**: `split()` returns String array, always check length
- **Loop Patterns**: Different loop styles for string processing
- **Edge Case Handling**: Always check for null and empty strings
- **Character Arithmetic**: Can compare characters directly (`ch == 'a'`)
- **String Building**: Concatenating in loops is inefficient but readable
- **Pattern Searching**: `indexOf()` returns -1 when pattern not found

### Trace Through Example:
```java
String text = "Hi!";
// Character analysis loop:
// i=0: ch='H', Character.isLetter('H')=true, letterCount=1
// i=1: ch='i', Character.isLetter('i')=true, letterCount=2, vowelCount=1
// i=2: ch='!', none of the conditions, punctuationCount=1

// Final counts: letters=2, digits=0, spaces=0, punctuation=1, vowels=1

String reversed = reverseString("abc");
// Loop: i=2, reversed="" + 'c' = "c"
//       i=1, reversed="c" + 'b' = "cb"  
//       i=0, reversed="cb" + 'a' = "cba"
// Returns "cba"
```

---

## Reading Practice Tips

After studying these fundamental examples:

1. **Trace variable changes**: Follow how variables get declared, modified, and go out of scope
2. **Understand type rules**: Know when explicit casting is needed and why
3. **Practice array patterns**: Recognize different ways to iterate and process arrays
4. **Follow method calls**: Understand parameter passing and return values
5. **Read control flow carefully**: Follow the logic through nested if-else and loops

Remember: These Java fundamentals form the foundation of all Java programs. Understanding how variables, types, arrays, and control structures work will make reading more complex Java code much easier.
