---
title: "Java Beginner Basics: Numbers, Strings, Lists, and Maps"
description: "Practice reading Java code focused on fundamental data types and operations"
weight: 10
bookToc: true
---

# Java Beginner Basics: Numbers, Strings, Lists, and Maps

This section contains beginner-friendly Java code examples focused on working with basic data types: numbers, strings, collections (Lists), and Maps. These examples emphasize fundamental operations and common patterns.

{{< hint info >}}
**Learning Approach**: Each example builds on previous concepts. Read the code first, then check the explanations, and finally try the suggested modifications.
{{< /hint >}}

## How to Use These Examples

{{< tabs "approach" >}}
{{< tab "Read First" >}}
**Start with basic operations** - Understand how Java handles numbers and strings
{{< /tab >}}
{{< tab "Follow Data" >}}  
**Follow data manipulation** - See how to process and transform data
{{< /tab >}}
{{< tab "Notice Patterns" >}}
**Notice Java syntax patterns** - Learn Java's explicit typing and method calls
{{< /tab >}}
{{< tab "Practice Collections" >}}
**Practice reading collections** - Understand Lists and Maps operations
{{< /tab >}}
{{< tab "Trace Execution" >}}
**Trace through examples** - Follow the step-by-step execution
{{< /tab >}}
{{< /tabs >}}

---

## Example 1: Number Operations and Math

### Code to Read:
```java
public class NumberProcessor {
    
    public static void processNumberData() {
        // Basic number types and operations
        int totalItems = 45;
        double price = 12.99;
        float discount = 0.15f;
        long bigNumber = 1000000L;
        
        System.out.println("=== Basic Number Operations ===");
        System.out.println("Items: " + totalItems);
        System.out.println("Price: $" + price);
        System.out.println("Discount: " + (discount * 100) + "%");
        
        // Mathematical calculations
        double discountAmount = price * discount;
        double finalPrice = price - discountAmount;
        double totalCost = finalPrice * totalItems;
        
        // Rounding and formatting
        double roundedPrice = Math.round(finalPrice * 100.0) / 100.0;
        int wholeDollars = (int) finalPrice;  // Type casting
        double cents = finalPrice - wholeDollars;
        
        System.out.println("\n=== Calculations ===");
        System.out.println("Discount amount: $" + String.format("%.2f", discountAmount));
        System.out.println("Final price: $" + String.format("%.2f", finalPrice));
        System.out.println("Total cost: $" + String.format("%.2f", totalCost));
        System.out.println("Rounded price: $" + roundedPrice);
        System.out.println("Whole dollars: $" + wholeDollars);
        System.out.println("Cents portion: " + String.format("%.2f", cents));
        
        // Number comparisons and conditions
        if (totalCost > 500.0) {
            System.out.println("Eligible for free shipping!");
        } else {
            double needed = 500.0 - totalCost;
            System.out.println("Need $" + String.format("%.2f", needed) + " more for free shipping");
        }
    }
    
    public static void main(String[] args) {
        processNumberData();
    }
}
```

### What to Notice:
- **Type Declarations**: Each number has an explicit type (`int`, `double`, `float`, `long`)
- **Type Casting**: `(int) finalPrice` converts double to int, losing decimal precision
- **String Formatting**: `String.format("%.2f", value)` controls decimal places
- **Math Library**: `Math.round()` for calculations
- **Arithmetic Operations**: Standard operators `+`, `-`, `*`, `/` work with numbers

### Trace Through Example:
```java
int totalItems = 45;
double price = 12.99;
float discount = 0.15f;

// Calculations:
double discountAmount = 12.99 * 0.15 = 1.9485
double finalPrice = 12.99 - 1.9485 = 11.0415
double totalCost = 11.0415 * 45 = 496.8675

// Formatting:
String.format("%.2f", discountAmount) = "1.95"
String.format("%.2f", finalPrice) = "11.04"
```

---

## Example 2: String Processing and Text Analysis

### Code to Read:
```java
public class TextProcessor {
    
    public static void processCustomerData() {
        // Basic string operations
        String customerName = "John Smith";
        String email = "john.smith@email.com";
        String phone = "(555) 123-4567";
        
        System.out.println("=== Customer Information ===");
        System.out.println("Name: " + customerName);
        System.out.println("Email: " + email);
        System.out.println("Phone: " + phone);
        
        // String analysis
        int nameLength = customerName.length();
        boolean hasLongName = nameLength > 10;
        String upperName = customerName.toUpperCase();
        String lowerEmail = email.toLowerCase();
        
        System.out.println("\n=== String Analysis ===");
        System.out.println("Name length: " + nameLength + " characters");
        System.out.println("Has long name: " + hasLongName);
        System.out.println("Uppercase name: " + upperName);
        System.out.println("Lowercase email: " + lowerEmail);
        
        // String parsing and extraction
        String[] nameParts = customerName.split(" ");
        String firstName = nameParts[0];
        String lastName = nameParts[1];
        
        // Extract domain from email
        int atIndex = email.indexOf("@");
        String username = email.substring(0, atIndex);
        String domain = email.substring(atIndex + 1);
        
        System.out.println("\n=== String Parsing ===");
        System.out.println("First name: " + firstName);
        System.out.println("Last name: " + lastName);
        System.out.println("Username: " + username);
        System.out.println("Domain: " + domain);
        
        // String validation
        boolean validEmail = email.contains("@") && email.contains(".");
        boolean validPhone = phone.length() == 14; // Format: (xxx) xxx-xxxx
        boolean nameContainsNumbers = !customerName.matches("[a-zA-Z ]+");
        
        System.out.println("\n=== Validation ===");
        System.out.println("Valid email format: " + validEmail);
        System.out.println("Valid phone format: " + validPhone);
        System.out.println("Name contains numbers: " + nameContainsNumbers);
    }
    
    public static void main(String[] args) {
        processCustomerData();
    }
}
```

### What to Notice:
- **String Immutability**: Operations like `.toUpperCase()` return new strings
- **Method Chaining**: Can call multiple string methods in sequence
- **Array Access**: `split()` returns an array, accessed with `[index]`
- **Index-based Operations**: `substring(start, end)` extracts portions of strings
- **Boolean Logic**: String validation using multiple conditions
- **Regular Expressions**: `.matches()` checks if string follows a pattern

### Trace Through Example:
```java
String customerName = "John Smith";
String email = "john.smith@email.com";

// String operations:
int nameLength = "John Smith".length() = 10
String[] nameParts = {"John", "Smith"}  // from split(" ")
String firstName = nameParts[0] = "John"
String lastName = nameParts[1] = "Smith"

// Email parsing:
int atIndex = email.indexOf("@") = 10
String username = email.substring(0, 10) = "john.smith"
String domain = email.substring(11) = "email.com"
```

---

## Example: Variables, Primitive Types, and String Operations

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
    }
}
```

### What to Notice:
{{< details "Java Type System in Action" >}}
- **Explicit type declarations**: Every variable must declare its type (`int age`, `String name`)
- **Primitive vs. Reference types**: `int`, `double`, `boolean`, `char` are primitives; `String` is a reference type
- **Type casting**: `(int) Math.round(gpaPercentage)` explicitly converts double to int
- **String immutability**: String operations create new String objects, don't modify existing ones
{{< /details >}}

{{< details "String Operations and Methods" >}}
- **Method chaining**: `firstName.toLowerCase()` calls method on String object
- **Array access**: `studentName.split(" ")[0]` splits string and accesses first element
- **String formatting**: Multiple ways to format output (`+` concatenation, `String.format()`)
- **Boolean methods**: `contains()`, `length()` return boolean or int values
{{< /details >}}

{{< details "Boolean Logic and Operators" >}}
- **Logical operators**: `&&` (and), `||` (or) for combining boolean expressions
- **Comparison operators**: `>=`, `<`, `==` for comparing values
- **Ternary operator**: `condition ? valueIfTrue : valueIfFalse` for concise conditionals
- **Parentheses**: Used to control evaluation order in complex expressions
{{< /details >}}

{{< details "Variable Scope and Lifecycle" >}}
- **Method scope**: Variables declared in method are accessible throughout method
- **Block scope**: Variables in `if` blocks only accessible within that block
- **Compilation errors**: Java prevents access to out-of-scope variables at compile time
- **Initialization**: All variables must be initialized before use
{{< /details >}}

### Trace Through Example:
```java
// Starting values:
String studentName = "Alice Johnson";   // → "Alice Johnson"
int age = 20;                          // → 20
double gpa = 3.85;                     // → 3.85

// String processing:
firstName = "Alice Johnson".split(" ")[0]  // → "Alice"
lastName = "Alice Johnson".split(" ")[1]   // → "Johnson"
lastInitial = "Johnson".charAt(0)          // → 'J'

// Boolean calculations:
isHonorStudent = (3.85 >= 3.5) && true    // → true && true → true
needsAdvising = (3.85 < 2.0) || (15 < 12) // → false || false → false
```
