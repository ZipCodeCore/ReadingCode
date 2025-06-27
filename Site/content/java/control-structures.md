---
title: "Java Control Structures: Loops, Conditionals, and Logic Flow"
description: "Practice reading Java code with loops, conditional statements, and complex logic flows"
weight: 15
bookToc: true
---

# Java Control Structures: Loops, Conditionals, and Logic Flow

This section focuses on reading Java code that demonstrates control structures - the building blocks that control how your program flows and makes decisions.

{{< hint info >}}
**Reading Strategy**: For control structures, always trace through the logic step by step. Pay attention to conditions, loop boundaries, and how variables change over time.
{{< /hint >}}

## How to Read Control Structure Code

{{< tabs "approach" >}}
{{< tab "Conditions First" >}}
**Start with the conditions** - Understand what triggers each branch
{{< /tab >}}
{{< tab "Follow the Flow" >}}  
**Trace execution paths** - Follow different scenarios through the code
{{< /tab >}}
{{< tab "Watch Variables" >}}
**Monitor variable changes** - See how values change in loops and conditions
{{< /tab >}}
{{< tab "Find Patterns" >}}
**Recognize patterns** - Look for common control structure idioms
{{< /tab >}}
{{< /tabs >}}

---

## Example 1: Complex Conditional Logic with Grade Processing

### Code to Read:
```java
public class GradeProcessor {
    
    public static void processStudentGrades() {
        // Array of test scores to process
        int[] scores = {95, 78, 82, 67, 91, 88, 45, 92, 76, 89};
        
        // Initialize counters and accumulators
        int totalPoints = 0;
        int bonusPoints = 0;
        int failedTestCount = 0;
        int[] gradeCounts = new int[5];  // Count A, B, C, D, F grades
        
        System.out.println("=== Processing Individual Scores ===");
        
        // Enhanced for loop to process each score
        for (int i = 0; i < scores.length; i++) {
            int score = scores[i];
            totalPoints += score;
            
            System.out.print("Test " + (i + 1) + ": " + score + " - ");
            
            // Nested conditional structure for grade assignment
            char letterGrade;
            String performance;
            
            if (score >= 90) {
                letterGrade = 'A';
                performance = "Excellent";
                gradeCounts[0]++;
                
                // Bonus points for exceptional performance
                if (score >= 95) {
                    int bonus = 2;
                    bonusPoints += bonus;
                    System.out.println(letterGrade + " (" + performance + ") +bonus: " + bonus);
                } else {
                    System.out.println(letterGrade + " (" + performance + ")");
                }
                
                // Extra bonus for perfect score
                if (score == 100) {
                    int perfectBonus = 5;  // Additional bonus
                    bonusPoints += perfectBonus;
                    System.out.println("    Perfect score bonus: +" + perfectBonus + " points!");
                }
            } else if (score >= 80) {
                letterGrade = 'B';
                performance = "Good";
                gradeCounts[1]++;
                System.out.println(letterGrade + " (" + performance + ")");
            } else if (score >= 70) {
                letterGrade = 'C';
                performance = "Satisfactory";
                gradeCounts[2]++;
                System.out.println(letterGrade + " (" + performance + ")");
            } else if (score >= 60) {
                letterGrade = 'D';
                performance = "Needs Improvement";
                gradeCounts[3]++;
                System.out.println(letterGrade + " (" + performance + ")");
            } else {
                letterGrade = 'F';
                performance = "Failed";
                gradeCounts[4]++;
                failedTestCount++;
                System.out.println(letterGrade + " (" + performance + ")");
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
    
    public static void main(String[] args) {
        processStudentGrades();
    }
}
```

### What to Notice:

{{< details "Multi-Level Conditional Logic" >}}
**Nested if-else structures**: 
- Main grade assignment (`if (score >= 90)`)
- Bonus calculation within grade categories (`if (score >= 95)`)
- Special case handling (`if (score == 100)`)

**Compound boolean expressions**:
- `averageScore >= 90 && failedTestCount == 0` - requires both conditions
- `averageScore >= 70 || (averageScore >= 65 && bonusPoints > 0)` - complex OR logic with grouped conditions
{{< /details >}}

{{< details "Loop Patterns and Array Processing" >}}
**Enhanced for loop**: `for (int i = 0; i < scores.length; i++)` - standard indexed iteration
- Access both index (`i`) and value (`scores[i]`)
- Used when you need position information

**Array accumulation patterns**:
- `totalPoints += score` - running total
- `gradeCounts[1]++` - frequency counting
- `failedTestCount++` - conditional counting
{{< /details >}}

{{< details "Type Casting and Calculations" >}}
**Explicit casting**: `(double) totalPoints / scores.length`
- Prevents integer division truncation
- Ensures accurate decimal results

**Formatted output**: `System.out.printf("%.1f%n", averageScore)`
- `%.1f` formats to 1 decimal place
- `%n` is platform-independent newline
{{< /details >}}

{{< details "Variable Scope and Lifecycle" >}}
**Loop-local variables**: `char letterGrade`, `String performance` declared inside loop
- New instances created each iteration
- Only accessible within loop body

**Method-level arrays**: `gradeCounts`, `scores` accessible throughout method
- Arrays maintain state across loop iterations
{{< /details >}}

### Trace Through Example:
```java
// First iteration (i=0, score=95):
totalPoints = 0 + 95 = 95
score >= 90 → true → letterGrade = 'A'
score >= 95 → true → bonusPoints = 0 + 2 = 2
gradeCounts[0] = 0 + 1 = 1

// Second iteration (i=1, score=78):
totalPoints = 95 + 78 = 173
score >= 90 → false
score >= 80 → false  
score >= 70 → true → letterGrade = 'C'
gradeCounts[2] = 0 + 1 = 1

// Final calculations:
averageScore = 173.0 / 2 = 86.5 (with proper casting)
failedTestCount == 0 && averageScore >= 80 → "Strong" grade
```

---

## Example 2: Different Loop Types and Patterns

### Code to Read:
```java
public class LoopDemonstration {
    
    public static void demonstrateLoopTypes() {
        System.out.println("=== Loop Types Demonstration ===");
        
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
        } while (value <= 3);
        System.out.println();
        
        // Nested loops
        System.out.println("5. Nested loops (multiplication table):");
        for (int i = 1; i <= 3; i++) {
            for (int j = 1; j <= 3; j++) {
                System.out.print(i * j + "\t");
            }
            System.out.println();  // New line after each row
        }
    }
    
    public static void main(String[] args) {
        demonstrateLoopTypes();
    }
}
```

### What to Notice:

{{< details "Loop Type Selection" >}}
**Standard for loop**: Best when you need an index or specific iteration count
- `for (int i = 1; i <= 5; i++)` - controlled iteration with counter

**Enhanced for loop**: Best for processing all elements without needing index
- `for (int number : numbers)` - cleaner syntax, no array bounds to manage

**While loop**: Best when iteration depends on a condition that might change
- Check condition before each iteration
- Risk of infinite loop if condition never becomes false

**Do-while loop**: Guarantees at least one execution
- Check condition after each iteration
- Useful for input validation or menu systems
{{< /details >}}

{{< details "Nested Loop Patterns" >}}
**Outer loop controls rows**: `for (int i = 1; i <= 3; i++)`
**Inner loop controls columns**: `for (int j = 1; j <= 3; j++)`

**Execution order**:
- i=1, j=1,2,3 → first row
- i=2, j=1,2,3 → second row  
- i=3, j=1,2,3 → third row

**Time complexity**: O(n×m) where n and m are loop bounds
{{< /details >}}

---

## Practice Exercises

{{< hint tip >}}
**Reading Exercise 1**: Trace through the grade processor with these scores: `[85, 92, 67, 78]`. Calculate the expected `totalPoints`, `bonusPoints`, and `overallGrade`.

**Reading Exercise 2**: Predict the output of each loop type. What would happen if you changed the loop conditions?

**Reading Exercise 3**: Identify all the places where the code makes decisions based on calculated values rather than direct input.
{{< /hint >}}

{{< button href="/java/beginner-basics/" >}}← Previous: Beginner Basics{{< /button >}} {{< button href="/java/fundamentals/" >}}Next: Fundamentals →{{< /button >}}
