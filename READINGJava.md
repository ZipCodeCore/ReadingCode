# Java Code Reading Practice Examples

This file contains beginner-friendly Java code examples designed to help you practice reading and understanding code. Each example includes guidance on what to notice and understand.

## How to Use This File

1. **Read each example slowly** - Don't rush to understand everything at once
2. **Trace through execution** - Follow the code line by line with sample inputs
3. **Pay attention to the "What to Notice" sections** - These highlight important patterns and concepts
4. **Try to predict output** before looking at the comments
5. **Explain the code out loud** to test your understanding

---

## Example 1: Basic Class with Constructor and Methods

### Code to Read:
```java
public class BankAccount {
    private String accountHolder;
    private double balance;
    private int accountNumber;
    
    // Constructor
    public BankAccount(String holder, int accNum, double initialBalance) {
        this.accountHolder = holder;
        this.accountNumber = accNum;
        this.balance = initialBalance;
    }
    
    // Method to deposit money
    public void deposit(double amount) {
        if (amount > 0) {
            balance += amount;
            System.out.println("Deposited $" + amount + ". New balance: $" + balance);
        } else {
            System.out.println("Invalid deposit amount");
        }
    }
    
    // Method to withdraw money
    public boolean withdraw(double amount) {
        if (amount > 0 && amount <= balance) {
            balance -= amount;
            System.out.println("Withdrew $" + amount + ". Remaining balance: $" + balance);
            return true;
        } else {
            System.out.println("Insufficient funds or invalid amount");
            return false;
        }
    }
    
    // Getter method
    public double getBalance() {
        return balance;
    }
    
    // Method to display account info
    public void displayAccountInfo() {
        System.out.println("Account Holder: " + accountHolder);
        System.out.println("Account Number: " + accountNumber);
        System.out.println("Current Balance: $" + balance);
    }
}
```

### What to Notice:
- **Access Modifiers**: `private` fields protect data, `public` methods provide controlled access
- **Constructor Pattern**: Takes parameters and initializes all fields using `this.fieldName = parameter`
- **Input Validation**: Both `deposit()` and `withdraw()` check if amounts are valid before proceeding
- **Return Values**: `withdraw()` returns boolean to indicate success/failure, while `deposit()` returns void
- **Encapsulation**: Balance can only be changed through controlled methods, not direct access
- **Consistent Naming**: Method names clearly describe what they do (`deposit`, `withdraw`, `getBalance`)

### Trace Through Example:
```java
BankAccount account = new BankAccount("Alice", 12345, 100.0);
account.deposit(50.0);    // Balance becomes 150.0
account.withdraw(25.0);   // Balance becomes 125.0
account.withdraw(200.0);  // Fails, balance stays 125.0
```

---

## Example 2: Array Processing with Control Structures

### Code to Read:
```java
public class StudentGrades {
    
    public static void analyzeGrades(double[] grades) {
        if (grades == null || grades.length == 0) {
            System.out.println("No grades to analyze");
            return;
        }
        
        double sum = 0;
        double highest = grades[0];
        double lowest = grades[0];
        int passingCount = 0;
        
        // Process each grade
        for (int i = 0; i < grades.length; i++) {
            double currentGrade = grades[i];
            
            // Add to sum for average calculation
            sum += currentGrade;
            
            // Track highest and lowest
            if (currentGrade > highest) {
                highest = currentGrade;
            }
            if (currentGrade < lowest) {
                lowest = currentGrade;
            }
            
            // Count passing grades (>= 60)
            if (currentGrade >= 60.0) {
                passingCount++;
            }
        }
        
        double average = sum / grades.length;
        double passingRate = (double) passingCount / grades.length * 100;
        
        // Display results
        System.out.println("Grade Analysis:");
        System.out.println("Total students: " + grades.length);
        System.out.println("Average grade: " + String.format("%.2f", average));
        System.out.println("Highest grade: " + highest);
        System.out.println("Lowest grade: " + lowest);
        System.out.println("Passing rate: " + String.format("%.1f", passingRate) + "%");
    }
    
    public static void main(String[] args) {
        double[] classGrades = {85.5, 92.0, 78.5, 65.0, 88.5, 95.0, 72.5, 55.0};
        analyzeGrades(classGrades);
    }
}
```

### What to Notice:
- **Null Safety**: Method checks for `null` and empty arrays before processing
- **Early Return**: Using `return` to exit early when there's nothing to process
- **Loop Structure**: Classic for-loop with index access to array elements
- **Variable Initialization**: `highest` and `lowest` start with first element, not arbitrary values
- **Accumulator Pattern**: `sum` accumulates total, `passingCount` counts occurrences
- **Type Casting**: `(double) passingCount` ensures floating-point division
- **String Formatting**: `String.format()` controls decimal places in output
- **Single Responsibility**: Method does one thing - analyzes grades completely

### Trace Through Example:
```
Input: [85.5, 92.0, 78.5, 65.0, 88.5, 95.0, 72.5, 55.0]
After processing:
- sum = 632.0
- highest = 95.0
- lowest = 55.0
- passingCount = 7 (all except 55.0)
- average = 79.00
- passingRate = 87.5%
```

---

## Example 3: Object-Oriented Design with Inheritance

### Code to Read:
```java
// Base class
abstract class Animal {
    protected String name;
    protected int age;
    
    public Animal(String name, int age) {
        this.name = name;
        this.age = age;
    }
    
    // Method all animals share
    public void sleep() {
        System.out.println(name + " is sleeping");
    }
    
    // Abstract method - must be implemented by subclasses
    public abstract void makeSound();
    
    // Method that can be overridden
    public void eat() {
        System.out.println(name + " is eating");
    }
    
    public String getName() {
        return name;
    }
}

// Concrete subclass
class Dog extends Animal {
    private String breed;
    
    public Dog(String name, int age, String breed) {
        super(name, age);  // Call parent constructor
        this.breed = breed;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " barks: Woof! Woof!");
    }
    
    @Override
    public void eat() {
        System.out.println(name + " is eating dog food");
    }
    
    // Dog-specific method
    public void fetch() {
        System.out.println(name + " is fetching the ball");
    }
    
    public String getBreed() {
        return breed;
    }
}

// Another concrete subclass
class Cat extends Animal {
    private boolean isIndoor;
    
    public Cat(String name, int age, boolean isIndoor) {
        super(name, age);
        this.isIndoor = isIndoor;
    }
    
    @Override
    public void makeSound() {
        System.out.println(name + " meows: Meow!");
    }
    
    // Cat-specific method
    public void climb() {
        if (isIndoor) {
            System.out.println(name + " climbs the cat tree");
        } else {
            System.out.println(name + " climbs a real tree");
        }
    }
}
```

### What to Notice:
- **Abstract Class**: `Animal` cannot be instantiated directly, serves as a template
- **Protected Fields**: Subclasses can access `name` and `age` directly
- **Super Constructor**: `super(name, age)` calls the parent class constructor
- **Abstract Method**: `makeSound()` must be implemented by every subclass
- **Method Overriding**: `@Override` annotation shows intentional method replacement
- **Polymorphism**: Same method name (`makeSound`, `eat`) behaves differently in each class
- **Specialized Methods**: Each subclass adds its own unique methods (`fetch`, `climb`)
- **Different Constructor Parameters**: Each subclass takes different additional parameters

### Trace Through Example:
```java
Animal[] pets = {
    new Dog("Buddy", 3, "Golden Retriever"),
    new Cat("Whiskers", 2, true)
};

for (Animal pet : pets) {
    pet.makeSound();  // Calls correct version based on actual object type
    pet.eat();        // May call overridden version
    pet.sleep();      // Same for all animals
}
```

---

## Example 4: File Processing with Exception Handling

### Code to Read:
```java
import java.io.*;
import java.util.*;

public class WordCounter {
    
    public static Map<String, Integer> countWords(String filename) {
        Map<String, Integer> wordCount = new HashMap<>();
        BufferedReader reader = null;
        
        try {
            reader = new BufferedReader(new FileReader(filename));
            String line;
            
            while ((line = reader.readLine()) != null) {
                // Clean and split the line into words
                String[] words = line.toLowerCase()
                                    .replaceAll("[^a-zA-Z\\s]", "")
                                    .split("\\s+");
                
                for (String word : words) {
                    if (!word.isEmpty()) {
                        // Update count in map
                        wordCount.put(word, wordCount.getOrDefault(word, 0) + 1);
                    }
                }
            }
            
        } catch (FileNotFoundException e) {
            System.err.println("File not found: " + filename);
            return null;
        } catch (IOException e) {
            System.err.println("Error reading file: " + e.getMessage());
            return null;
        } finally {
            // Always close the file, even if an exception occurred
            if (reader != null) {
                try {
                    reader.close();
                } catch (IOException e) {
                    System.err.println("Error closing file: " + e.getMessage());
                }
            }
        }
        
        return wordCount;
    }
    
    public static void displayTopWords(Map<String, Integer> wordCount, int topN) {
        if (wordCount == null || wordCount.isEmpty()) {
            System.out.println("No words to display");
            return;
        }
        
        // Convert map to list of entries for sorting
        List<Map.Entry<String, Integer>> sortedWords = new ArrayList<>(wordCount.entrySet());
        
        // Sort by count (descending), then by word (ascending) for ties
        sortedWords.sort((entry1, entry2) -> {
            int countCompare = entry2.getValue().compareTo(entry1.getValue());
            if (countCompare == 0) {
                return entry1.getKey().compareTo(entry2.getKey());
            }
            return countCompare;
        });
        
        System.out.println("Top " + Math.min(topN, sortedWords.size()) + " words:");
        for (int i = 0; i < Math.min(topN, sortedWords.size()); i++) {
            Map.Entry<String, Integer> entry = sortedWords.get(i);
            System.out.println((i + 1) + ". " + entry.getKey() + ": " + entry.getValue());
        }
    }
    
    public static void main(String[] args) {
        String filename = "sample.txt";
        Map<String, Integer> words = countWords(filename);
        displayTopWords(words, 10);
    }
}
```

### What to Notice:
- **Resource Management**: File reader must be closed in `finally` block to prevent resource leaks
- **Exception Handling**: Different catch blocks for different types of errors
- **Null Safety**: Multiple checks for null values before processing
- **String Processing**: Chained method calls to clean text (toLowerCase, replaceAll, split)
- **Map Operations**: `getOrDefault()` provides safe way to increment counters
- **Collections Framework**: Using `HashMap`, `ArrayList`, and custom sorting
- **Lambda Expression**: `(entry1, entry2) -> {...}` defines custom sorting logic
- **Boundary Checking**: `Math.min()` prevents index out of bounds errors
- **Method Separation**: Logic is split into focused methods with clear responsibilities

### Trace Through Example:
```
Input file contains: "Hello world! Hello Java world."
After processing:
- Line becomes: "hello world hello java world"
- Words array: ["hello", "world", "hello", "java", "world"]
- Final map: {hello=2, world=2, java=1}
- Sorted output: 1. hello: 2, 2. world: 2, 3. java: 1
```

---

## Example 5: Simple Data Structure Implementation

### Code to Read:
```java
public class SimpleStack<T> {
    private static final int DEFAULT_CAPACITY = 10;
    private Object[] elements;
    private int size;
    
    public SimpleStack() {
        this(DEFAULT_CAPACITY);
    }
    
    public SimpleStack(int capacity) {
        if (capacity < 1) {
            throw new IllegalArgumentException("Capacity must be at least 1");
        }
        elements = new Object[capacity];
        size = 0;
    }
    
    public void push(T item) {
        if (size >= elements.length) {
            resize();
        }
        elements[size++] = item;
    }
    
    @SuppressWarnings("unchecked")
    public T pop() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        T item = (T) elements[--size];
        elements[size] = null;  // Prevent memory leak
        return item;
    }
    
    @SuppressWarnings("unchecked")
    public T peek() {
        if (isEmpty()) {
            throw new RuntimeException("Stack is empty");
        }
        return (T) elements[size - 1];
    }
    
    public boolean isEmpty() {
        return size == 0;
    }
    
    public int size() {
        return size;
    }
    
    private void resize() {
        int newCapacity = elements.length * 2;
        Object[] newArray = new Object[newCapacity];
        
        // Copy existing elements
        for (int i = 0; i < size; i++) {
            newArray[i] = elements[i];
        }
        
        elements = newArray;
    }
    
    @Override
    public String toString() {
        if (isEmpty()) {
            return "[]";
        }
        
        StringBuilder sb = new StringBuilder();
        sb.append("[");
        for (int i = 0; i < size; i++) {
            sb.append(elements[i]);
            if (i < size - 1) {
                sb.append(", ");
            }
        }
        sb.append("]");
        return sb.toString();
    }
}
```

### What to Notice:
- **Generics**: `<T>` allows stack to hold any type safely
- **Constructor Overloading**: Two constructors with different parameters
- **Input Validation**: Constructor checks for valid capacity
- **Dynamic Resizing**: Array grows when capacity is exceeded
- **Memory Management**: Setting elements to `null` after popping prevents memory leaks
- **Type Casting**: `(T)` cast needed because of generic type erasure
- **Pre/Post Increment**: `elements[size++]` vs `elements[--size]` - notice the difference
- **Error Handling**: Throws exceptions for invalid operations
- **StringBuilder**: Efficient string building for `toString()` method
- **Encapsulation**: `resize()` is private - internal implementation detail

### Trace Through Example:
```java
SimpleStack<String> stack = new SimpleStack<>(2);
stack.push("first");   // elements[0] = "first", size = 1
stack.push("second");  // elements[1] = "second", size = 2
stack.push("third");   // Triggers resize, then elements[2] = "third", size = 3
String item = stack.pop(); // Returns "third", size = 2, elements[2] = null
```

---

## Reading Practice Tips

After studying these examples:

1. **Try variations**: What happens if you change parameter types or add validation?
2. **Trace edge cases**: What if arrays are empty, files don't exist, or stacks are full?
3. **Identify patterns**: Notice how similar concepts appear across different examples
4. **Question design decisions**: Why use `protected` vs `private`? Why catch specific exceptions?
5. **Practice explaining**: Can you teach these concepts to someone else?

Remember: The goal isn't to memorize these examples, but to develop the skill of quickly understanding unfamiliar code by recognizing patterns and following logical flow.
