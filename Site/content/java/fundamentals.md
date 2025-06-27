---
title: "Java Fundamentals: Control Structures, Built-in Types, and Variables"
description: "Practice reading Java code focused on fundamental concepts: control structures, primitive types, and variables"
difficulty: "beginner"
topics: ["variables", "data types", "control structures", "strings", "arrays", "methods"]
weight: 20
readingTime: 25
---

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

## Reading Practice Tips

After studying these fundamental examples:

1. **Trace variable changes**: Follow how variables get declared, modified, and go out of scope
2. **Understand type rules**: Know when explicit casting is needed and why
3. **Practice array patterns**: Recognize different ways to iterate and process arrays
4. **Follow method calls**: Understand parameter passing and return values
5. **Read control flow carefully**: Follow the logic through nested if-else and loops

Remember: These Java fundamentals form the foundation of all Java programs. Understanding how variables, types, arrays, and control structures work will make reading more complex Java code much easier.
