# Java Beginner Examples: Numbers, Strings, Lists, and Maps

This file contains beginner-friendly Java code examples focused on working with basic data types: numbers, strings, collections (Lists), and Maps. These examples emphasize fundamental operations and common patterns.

## How to Use This File

1. **Start with basic operations** - Understand how Java handles numbers and strings
2. **Follow data manipulation** - See how to process and transform data
3. **Notice Java syntax patterns** - Learn Java's explicit typing and method calls
4. **Practice reading collections** - Understand Lists and Maps operations
5. **Trace through examples** - Follow the step-by-step execution

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
        
        // Math library functions
        double squareRoot = Math.sqrt(totalItems);
        double powerOf2 = Math.pow(totalItems, 2);
        int maxValue = Math.max(totalItems, wholeDollars);
        int minValue = Math.min(totalItems, wholeDollars);
        
        System.out.println("\n=== Math Functions ===");
        System.out.println("Square root of items: " + String.format("%.2f", squareRoot));
        System.out.println("Items squared: " + String.format("%.0f", powerOf2));
        System.out.println("Max value: " + maxValue);
        System.out.println("Min value: " + minValue);
        
        // Number parsing from strings
        String numberString = "25";
        String priceString = "19.95";
        
        try {
            int parsedNumber = Integer.parseInt(numberString);
            double parsedPrice = Double.parseDouble(priceString);
            
            System.out.println("\n=== String to Number Conversion ===");
            System.out.println("Parsed number: " + parsedNumber);
            System.out.println("Parsed price: $" + parsedPrice);
            System.out.println("Sum: " + (parsedNumber + parsedPrice));
            
        } catch (NumberFormatException e) {
            System.out.println("Error parsing numbers: " + e.getMessage());
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
- **Math Library**: `Math.round()`, `Math.sqrt()`, `Math.pow()` for calculations
- **Exception Handling**: `try-catch` for safe string-to-number conversion
- **Arithmetic Operations**: Standard operators `+`, `-`, `*`, `/` work with numbers
- **Comparison Operators**: `>`, `<`, `>=`, `<=` for conditional logic
- **Method Calls**: `Math.max()`, `Math.min()` take multiple parameters

### Trace Through Example:
```java
int totalItems = 45;
double price = 12.99;
float discount = 0.15f;

double discountAmount = 12.99 * 0.15 = 1.9485
double finalPrice = 12.99 - 1.9485 = 11.0415
double totalCost = 11.0415 * 45 = 496.8675

int wholeDollars = (int) 11.0415 = 11  // Truncation, not rounding
double cents = 11.0415 - 11 = 0.0415
```

---

## Example 2: String Manipulation and Processing

### Code to Read:
```java
public class TextProcessor {
    
    public static void processCustomerData() {
        // Basic string operations
        String customerName = "John Michael Smith";
        String email = "  JOHN.SMITH@EXAMPLE.COM  ";
        String phoneNumber = "(555) 123-4567";
        String address = "123 Main Street, City, State 12345";
        
        System.out.println("=== Original Data ===");
        System.out.println("Name: '" + customerName + "'");
        System.out.println("Email: '" + email + "'");
        System.out.println("Phone: '" + phoneNumber + "'");
        System.out.println("Address: '" + address + "'");
        
        // String cleaning and formatting
        String cleanEmail = email.trim().toLowerCase();
        String formattedName = customerName.toUpperCase();
        String initials = getInitials(customerName);
        
        // String length and character operations
        int nameLength = customerName.length();
        char firstChar = customerName.charAt(0);
        char lastChar = customerName.charAt(customerName.length() - 1);
        
        System.out.println("\n=== Processed Data ===");
        System.out.println("Clean email: '" + cleanEmail + "'");
        System.out.println("Formatted name: '" + formattedName + "'");
        System.out.println("Initials: " + initials);
        System.out.println("Name length: " + nameLength + " characters");
        System.out.println("First character: '" + firstChar + "'");
        System.out.println("Last character: '" + lastChar + "'");
        
        // String searching and validation
        boolean hasMiddleName = customerName.contains(" ");
        boolean isValidEmail = cleanEmail.contains("@") && cleanEmail.contains(".");
        boolean hasAreaCode = phoneNumber.startsWith("(");
        boolean isLocalNumber = phoneNumber.endsWith("4567");
        
        System.out.println("\n=== Validation ===");
        System.out.println("Has middle name: " + hasMiddleName);
        System.out.println("Valid email format: " + isValidEmail);
        System.out.println("Has area code: " + hasAreaCode);
        System.out.println("Ends with 4567: " + isLocalNumber);
        
        // String splitting and parsing
        String[] nameParts = customerName.split(" ");
        String[] addressParts = address.split(", ");
        String[] phoneParts = phoneNumber.replaceAll("[^0-9]", "").split("");
        
        System.out.println("\n=== String Parsing ===");
        System.out.println("Name parts count: " + nameParts.length);
        for (int i = 0; i < nameParts.length; i++) {
            System.out.println("  Part " + (i + 1) + ": '" + nameParts[i] + "'");
        }
        
        System.out.println("Address parts:");
        for (String part : addressParts) {
            System.out.println("  '" + part.trim() + "'");
        }
        
        // String building and concatenation
        StringBuilder report = new StringBuilder();
        report.append("Customer Report\n");
        report.append("===============\n");
        report.append("Name: ").append(customerName).append("\n");
        report.append("Email: ").append(cleanEmail).append("\n");
        report.append("Initials: ").append(initials).append("\n");
        report.append("Character count: ").append(nameLength).append("\n");
        
        System.out.println("\n=== Generated Report ===");
        System.out.println(report.toString());
        
        // String replacement and modification
        String maskedPhone = phoneNumber.replaceAll("\\d{4}$", "XXXX");
        String noSpacesName = customerName.replace(" ", "_");
        String shortEmail = cleanEmail.substring(0, cleanEmail.indexOf("@"));
        
        System.out.println("=== Modified Strings ===");
        System.out.println("Masked phone: " + maskedPhone);
        System.out.println("No spaces name: " + noSpacesName);
        System.out.println("Email username: " + shortEmail);
    }
    
    public static String getInitials(String fullName) {
        if (fullName == null || fullName.trim().isEmpty()) {
            return "";
        }
        
        String[] words = fullName.trim().split(" ");
        StringBuilder initials = new StringBuilder();
        
        for (String word : words) {
            if (!word.isEmpty()) {
                initials.append(word.charAt(0));
            }
        }
        
        return initials.toString().toUpperCase();
    }
    
    public static void main(String[] args) {
        processCustomerData();
    }
}
```

### What to Notice:
- **String Immutability**: Methods like `.toLowerCase()` return new strings
- **Method Chaining**: `email.trim().toLowerCase()` applies operations in sequence
- **String Methods**: `.contains()`, `.startsWith()`, `.endsWith()` for pattern checking
- **Array Creation**: `.split()` creates String arrays from delimited text
- **StringBuilder**: Efficient for building strings with multiple concatenations
- **Regular Expressions**: `.replaceAll("\\d{4}$", "XXXX")` uses regex patterns
- **Enhanced For Loop**: `for (String part : addressParts)` iterates over arrays
- **Null Safety**: Checking for null and empty strings before processing
- **Index Access**: `.charAt(index)` and `.substring()` for character/substring extraction

### Trace Through Example:
```java
String customerName = "John Michael Smith";
String[] nameParts = customerName.split(" ");
// nameParts = ["John", "Michael", "Smith"]

String initials = getInitials(customerName);
// Loop: "John".charAt(0) = 'J', "Michael".charAt(0) = 'M', "Smith".charAt(0) = 'S'
// Result: "JMS"

String maskedPhone = "(555) 123-4567".replaceAll("\\d{4}$", "XXXX");
// Replaces last 4 digits: "(555) 123-XXXX"
```

---

## Example 3: ArrayList Operations and Data Management

### Code to Read:
```java
import java.util.*;

public class InventoryManager {
    
    public static void manageProductList() {
        // Create and initialize ArrayList
        ArrayList<String> products = new ArrayList<>();
        ArrayList<Double> prices = new ArrayList<>();
        ArrayList<Integer> quantities = new ArrayList<>();
        
        // Adding items to lists
        products.add("Laptop");
        products.add("Mouse");
        products.add("Keyboard");
        products.add("Monitor");
        
        prices.add(899.99);
        prices.add(25.50);
        prices.add(75.00);
        prices.add(299.99);
        
        quantities.add(5);
        quantities.add(20);
        quantities.add(15);
        quantities.add(8);
        
        System.out.println("=== Initial Inventory ===");
        displayInventory(products, prices, quantities);
        
        // List operations and modifications
        products.add(1, "Tablet");  // Insert at index 1
        prices.add(1, 549.99);
        quantities.add(1, 12);
        
        System.out.println("\n=== After Adding Tablet ===");
        displayInventory(products, prices, quantities);
        
        // Searching and finding items
        String searchItem = "Keyboard";
        int index = products.indexOf(searchItem);
        
        if (index != -1) {
            System.out.println("\n=== Item Found ===");
            System.out.println("Product: " + products.get(index));
            System.out.println("Price: $" + prices.get(index));
            System.out.println("Quantity: " + quantities.get(index));
            System.out.println("Position in list: " + (index + 1));
        } else {
            System.out.println("Item '" + searchItem + "' not found");
        }
        
        // List size and capacity operations
        System.out.println("\n=== List Information ===");
        System.out.println("Total products: " + products.size());
        System.out.println("Is inventory empty: " + products.isEmpty());
        System.out.println("Contains 'Mouse': " + products.contains("Mouse"));
        
        // Calculating totals and statistics
        double totalValue = 0.0;
        int totalItems = 0;
        double highestPrice = 0.0;
        String mostExpensive = "";
        
        for (int i = 0; i < products.size(); i++) {
            double itemValue = prices.get(i) * quantities.get(i);
            totalValue += itemValue;
            totalItems += quantities.get(i);
            
            if (prices.get(i) > highestPrice) {
                highestPrice = prices.get(i);
                mostExpensive = products.get(i);
            }
        }
        
        System.out.println("\n=== Statistics ===");
        System.out.println("Total inventory value: $" + String.format("%.2f", totalValue));
        System.out.println("Total items in stock: " + totalItems);
        System.out.println("Most expensive item: " + mostExpensive + " ($" + highestPrice + ")");
        System.out.println("Average price: $" + String.format("%.2f", totalValue / totalItems));
        
        // Removing items
        String itemToRemove = "Mouse";
        index = products.indexOf(itemToRemove);
        
        if (index != -1) {
            String removed = products.remove(index);
            double removedPrice = prices.remove(index);
            int removedQty = quantities.remove(index);
            
            System.out.println("\n=== Removed Item ===");
            System.out.println("Removed: " + removed + " ($" + removedPrice + ", qty: " + removedQty + ")");
        }
        
        System.out.println("\n=== Final Inventory ===");
        displayInventory(products, prices, quantities);
        
        // Creating filtered lists
        ArrayList<String> expensiveItems = new ArrayList<>();
        ArrayList<String> lowStockItems = new ArrayList<>();
        
        for (int i = 0; i < products.size(); i++) {
            if (prices.get(i) > 100.0) {
                expensiveItems.add(products.get(i));
            }
            if (quantities.get(i) < 10) {
                lowStockItems.add(products.get(i));
            }
        }
        
        System.out.println("\n=== Filtered Lists ===");
        System.out.println("Expensive items (>$100): " + expensiveItems);
        System.out.println("Low stock items (<10): " + lowStockItems);
        
        // List copying and sorting
        ArrayList<String> sortedProducts = new ArrayList<>(products);
        Collections.sort(sortedProducts);
        
        System.out.println("Original order: " + products);
        System.out.println("Alphabetical order: " + sortedProducts);
    }
    
    public static void displayInventory(ArrayList<String> products, 
                                      ArrayList<Double> prices, 
                                      ArrayList<Integer> quantities) {
        System.out.println("Product\t\tPrice\t\tQuantity\tValue");
        System.out.println("-------\t\t-----\t\t--------\t-----");
        
        for (int i = 0; i < products.size(); i++) {
            String product = products.get(i);
            double price = prices.get(i);
            int quantity = quantities.get(i);
            double value = price * quantity;
            
            System.out.printf("%-10s\t$%.2f\t\t%d\t\t$%.2f%n", 
                            product, price, quantity, value);
        }
    }
    
    public static void main(String[] args) {
        manageProductList();
    }
}
```

### What to Notice:
- **Generic Types**: `ArrayList<String>` specifies the type of elements stored
- **Index Operations**: `.get(index)`, `.add(index, item)`, `.remove(index)` for position-based access
- **Size Methods**: `.size()`, `.isEmpty()` for list information
- **Search Methods**: `.indexOf()`, `.contains()` for finding elements
- **Enhanced For Loop**: Alternative to index-based iteration
- **Collections Class**: `Collections.sort()` for sorting operations
- **Copy Constructor**: `new ArrayList<>(existingList)` creates a copy
- **Printf Formatting**: `System.out.printf()` for aligned table output
- **Parallel Lists**: Using multiple ArrayLists to store related data
- **List Modifications**: Adding, removing, and inserting elements

### Trace Through Example:
```java
ArrayList<String> products = new ArrayList<>();
products.add("Laptop");     // products = ["Laptop"]
products.add("Mouse");      // products = ["Laptop", "Mouse"]
products.add(1, "Tablet");  // products = ["Laptop", "Tablet", "Mouse"]

int index = products.indexOf("Mouse");  // index = 2
String item = products.get(2);          // item = "Mouse"
products.remove(2);                     // products = ["Laptop", "Tablet"]
```

---

## Example 4: HashMap Operations and Key-Value Processing

### Code to Read:
```java
import java.util.*;

public class StudentRecords {
    
    public static void processStudentData() {
        // Create and populate HashMap
        HashMap<String, Integer> grades = new HashMap<>();
        HashMap<String, String> subjects = new HashMap<>();
        HashMap<Integer, String> studentNames = new HashMap<>();
        
        // Adding key-value pairs
        grades.put("Alice", 95);
        grades.put("Bob", 87);
        grades.put("Charlie", 92);
        grades.put("Diana", 78);
        grades.put("Eva", 89);
        
        subjects.put("Alice", "Mathematics");
        subjects.put("Bob", "Physics");
        subjects.put("Charlie", "Chemistry");
        subjects.put("Diana", "Biology");
        subjects.put("Eva", "Computer Science");
        
        studentNames.put(101, "Alice");
        studentNames.put(102, "Bob");
        studentNames.put(103, "Charlie");
        studentNames.put(104, "Diana");
        studentNames.put(105, "Eva");
        
        System.out.println("=== Student Records ===");
        displayStudentRecords(grades, subjects);
        
        // HashMap size and basic operations
        System.out.println("\n=== Map Information ===");
        System.out.println("Total students: " + grades.size());
        System.out.println("Is grades map empty: " + grades.isEmpty());
        System.out.println("Contains student 'Alice': " + grades.containsKey("Alice"));
        System.out.println("Contains grade 95: " + grades.containsValue(95));
        
        // Accessing and checking values
        String studentName = "Bob";
        if (grades.containsKey(studentName)) {
            int grade = grades.get(studentName);
            String subject = subjects.get(studentName);
            System.out.println("\n=== Student Lookup ===");
            System.out.println("Student: " + studentName);
            System.out.println("Grade: " + grade);
            System.out.println("Subject: " + subject);
        }
        
        // Safe access with default values
        int frankGrade = grades.getOrDefault("Frank", 0);
        String frankSubject = subjects.getOrDefault("Frank", "Unknown");
        System.out.println("Frank's grade: " + frankGrade + " (default value)");
        System.out.println("Frank's subject: " + frankSubject + " (default value)");
        
        // Iterating through HashMap
        System.out.println("\n=== All Students (using keySet) ===");
        for (String student : grades.keySet()) {
            int grade = grades.get(student);
            String subject = subjects.get(student);
            System.out.println(student + ": " + grade + " in " + subject);
        }
        
        // Using entrySet for efficient iteration
        System.out.println("\n=== Grade Analysis (using entrySet) ===");
        int totalGrades = 0;
        int highestGrade = 0;
        String topStudent = "";
        int passingStudents = 0;
        
        for (Map.Entry<String, Integer> entry : grades.entrySet()) {
            String student = entry.getKey();
            int grade = entry.getValue();
            
            totalGrades += grade;
            
            if (grade > highestGrade) {
                highestGrade = grade;
                topStudent = student;
            }
            
            if (grade >= 80) {
                passingStudents++;
            }
        }
        
        double averageGrade = (double) totalGrades / grades.size();
        
        System.out.println("Average grade: " + String.format("%.1f", averageGrade));
        System.out.println("Highest grade: " + highestGrade + " (" + topStudent + ")");
        System.out.println("Students with A/B grades: " + passingStudents);
        
        // Modifying HashMap values
        System.out.println("\n=== Grade Updates ===");
        
        // Update existing grade
        grades.put("Diana", 85);  // Overwrites previous value
        System.out.println("Updated Diana's grade to: " + grades.get("Diana"));
        
        // Add new student
        grades.put("Frank", 91);
        subjects.put("Frank", "History");
        System.out.println("Added new student Frank: " + grades.get("Frank"));
        
        // Remove a student
        Integer removedGrade = grades.remove("Bob");
        String removedSubject = subjects.remove("Bob");
        if (removedGrade != null) {
            System.out.println("Removed Bob: grade " + removedGrade + " in " + removedSubject);
        }
        
        System.out.println("Students remaining: " + grades.size());
        
        // Creating derived maps
        HashMap<String, String> gradeLetters = new HashMap<>();
        HashMap<String, Boolean> passingStatus = new HashMap<>();
        
        for (String student : grades.keySet()) {
            int numericGrade = grades.get(student);
            
            // Convert to letter grade
            String letterGrade;
            if (numericGrade >= 90) {
                letterGrade = "A";
            } else if (numericGrade >= 80) {
                letterGrade = "B";
            } else if (numericGrade >= 70) {
                letterGrade = "C";
            } else if (numericGrade >= 60) {
                letterGrade = "D";
            } else {
                letterGrade = "F";
            }
            
            gradeLetters.put(student, letterGrade);
            passingStatus.put(student, numericGrade >= 70);
        }
        
        System.out.println("\n=== Final Report ===");
        for (String student : grades.keySet()) {
            int numericGrade = grades.get(student);
            String letterGrade = gradeLetters.get(student);
            boolean isPassing = passingStatus.get(student);
            String subject = subjects.get(student);
            
            System.out.println(student + ": " + numericGrade + " (" + letterGrade + ") " +
                             "in " + subject + " - " + (isPassing ? "PASSING" : "FAILING"));
        }
        
        // Getting all values
        System.out.println("\n=== Summary ===");
        System.out.println("All students: " + grades.keySet());
        System.out.println("All grades: " + grades.values());
        System.out.println("All subjects: " + new HashSet<>(subjects.values())); // Remove duplicates
    }
    
    public static void displayStudentRecords(HashMap<String, Integer> grades, 
                                           HashMap<String, String> subjects) {
        System.out.println("Student\t\tGrade\tSubject");
        System.out.println("-------\t\t-----\t-------");
        
        for (String student : grades.keySet()) {
            int grade = grades.get(student);
            String subject = subjects.getOrDefault(student, "Unknown");
            System.out.printf("%-10s\t%d\t%s%n", student, grade, subject);
        }
    }
    
    public static void main(String[] args) {
        processStudentData();
    }
}
```

### What to Notice:
- **Generic HashMap**: `HashMap<String, Integer>` specifies key and value types
- **Key-Value Operations**: `.put()`, `.get()`, `.remove()` for basic operations
- **Null Safety**: `.getOrDefault()` provides safe access with fallback values
- **Existence Checking**: `.containsKey()` and `.containsValue()` for validation
- **Iteration Methods**: `.keySet()`, `.values()`, `.entrySet()` for different iteration needs
- **Map.Entry**: `Map.Entry<String, Integer>` for efficient key-value pair access
- **Overwriting Values**: `.put()` with existing key replaces the value
- **Type Casting**: `(double) totalGrades` for proper division
- **HashSet Creation**: `new HashSet<>(collection)` removes duplicates
- **Multiple Related Maps**: Using separate maps for related data

### Trace Through Example:
```java
HashMap<String, Integer> grades = new HashMap<>();
grades.put("Alice", 95);    // grades = {"Alice": 95}
grades.put("Bob", 87);      // grades = {"Alice": 95, "Bob": 87}

int aliceGrade = grades.get("Alice");           // aliceGrade = 95
boolean hasCharlie = grades.containsKey("Charlie");  // hasCharlie = false
int defaultGrade = grades.getOrDefault("Charlie", 0); // defaultGrade = 0

grades.put("Alice", 98);    // grades = {"Alice": 98, "Bob": 87} (overwrites)
Integer removed = grades.remove("Bob");  // removed = 87, grades = {"Alice": 98}
```

---

## Example 5: Data Processing with Collections

### Code to Read:
```java
import java.util.*;

public class SalesAnalyzer {
    
    public static void analyzeSalesData() {
        // Sample sales data using multiple collections
        ArrayList<String> products = new ArrayList<>(Arrays.asList(
            "Coffee", "Tea", "Sandwich", "Muffin", "Coffee", "Tea", "Juice", "Coffee"
        ));
        
        ArrayList<Double> prices = new ArrayList<>(Arrays.asList(
            3.50, 2.25, 8.99, 4.50, 3.50, 2.25, 3.75, 3.50
        ));
        
        ArrayList<Integer> quantities = new ArrayList<>(Arrays.asList(
            2, 1, 1, 3, 1, 2, 1, 4
        ));
        
        System.out.println("=== Raw Sales Data ===");
        displayTransactions(products, prices, quantities);
        
        // Process data into summary maps
        HashMap<String, Integer> productCounts = new HashMap<>();
        HashMap<String, Double> productRevenue = new HashMap<>();
        HashMap<String, Double> productPrices = new HashMap<>();
        
        // Calculate summaries
        for (int i = 0; i < products.size(); i++) {
            String product = products.get(i);
            double price = prices.get(i);
            int quantity = quantities.get(i);
            double revenue = price * quantity;
            
            // Update counts
            productCounts.put(product, productCounts.getOrDefault(product, 0) + quantity);
            
            // Update revenue
            productRevenue.put(product, productRevenue.getOrDefault(product, 0.0) + revenue);
            
            // Store price (assuming same product has same price)
            productPrices.put(product, price);
        }
        
        System.out.println("\n=== Product Summary ===");
        displayProductSummary(productCounts, productRevenue, productPrices);
        
        // Find top performing products
        String bestSellingProduct = "";
        int maxQuantity = 0;
        String highestRevenueProduct = "";
        double maxRevenue = 0.0;
        
        for (String product : productCounts.keySet()) {
            int totalQuantity = productCounts.get(product);
            double totalRevenue = productRevenue.get(product);
            
            if (totalQuantity > maxQuantity) {
                maxQuantity = totalQuantity;
                bestSellingProduct = product;
            }
            
            if (totalRevenue > maxRevenue) {
                maxRevenue = totalRevenue;
                highestRevenueProduct = product;
            }
        }
        
        System.out.println("\n=== Top Performers ===");
        System.out.println("Best selling product: " + bestSellingProduct + 
                          " (" + maxQuantity + " units)");
        System.out.println("Highest revenue product: " + highestRevenueProduct + 
                          " ($" + String.format("%.2f", maxRevenue) + ")");
        
        // Calculate overall statistics
        double totalRevenue = 0.0;
        int totalItems = 0;
        
        for (double revenue : productRevenue.values()) {
            totalRevenue += revenue;
        }
        
        for (int quantity : productCounts.values()) {
            totalItems += quantity;
        }
        
        double averageTransactionValue = totalRevenue / products.size();
        double averageItemPrice = totalRevenue / totalItems;
        
        System.out.println("\n=== Overall Statistics ===");
        System.out.println("Total transactions: " + products.size());
        System.out.println("Total revenue: $" + String.format("%.2f", totalRevenue));
        System.out.println("Total items sold: " + totalItems);
        System.out.println("Average transaction value: $" + String.format("%.2f", averageTransactionValue));
        System.out.println("Average item price: $" + String.format("%.2f", averageItemPrice));
        
        // Create filtered lists based on criteria
        ArrayList<String> expensiveProducts = new ArrayList<>();
        ArrayList<String> popularProducts = new ArrayList<>();
        ArrayList<String> premiumProducts = new ArrayList<>();
        
        for (String product : productCounts.keySet()) {
            double price = productPrices.get(product);
            int quantity = productCounts.get(product);
            double revenue = productRevenue.get(product);
            
            if (price > 3.0) {
                expensiveProducts.add(product);
            }
            
            if (quantity >= 3) {
                popularProducts.add(product);
            }
            
            if (price > 3.0 && quantity >= 2) {
                premiumProducts.add(product);
            }
        }
        
        System.out.println("\n=== Product Categories ===");
        System.out.println("Expensive products (>$3.00): " + expensiveProducts);
        System.out.println("Popular products (≥3 units): " + popularProducts);
        System.out.println("Premium products (expensive + popular): " + premiumProducts);
        
        // Sort products by different criteria
        ArrayList<String> uniqueProducts = new ArrayList<>(productCounts.keySet());
        
        // Sort by name
        Collections.sort(uniqueProducts);
        System.out.println("\n=== Sorted by Name ===");
        System.out.println("Alphabetical order: " + uniqueProducts);
        
        // Create custom sorted lists (manual sorting by quantity)
        ArrayList<String> sortedByQuantity = new ArrayList<>();
        HashMap<String, Integer> tempCounts = new HashMap<>(productCounts);
        
        while (!tempCounts.isEmpty()) {
            String topProduct = "";
            int topQuantity = 0;
            
            for (Map.Entry<String, Integer> entry : tempCounts.entrySet()) {
                if (entry.getValue() > topQuantity) {
                    topQuantity = entry.getValue();
                    topProduct = entry.getKey();
                }
            }
            
            sortedByQuantity.add(topProduct);
            tempCounts.remove(topProduct);
        }
        
        System.out.println("Sorted by quantity (highest first): " + sortedByQuantity);
        
        // Generate final report
        generateSalesReport(productCounts, productRevenue, productPrices, 
                           totalRevenue, totalItems);
    }
    
    public static void displayTransactions(ArrayList<String> products, 
                                         ArrayList<Double> prices, 
                                         ArrayList<Integer> quantities) {
        System.out.println("Transaction\tProduct\t\tPrice\tQuantity\tTotal");
        System.out.println("-----------\t-------\t\t-----\t--------\t-----");
        
        for (int i = 0; i < products.size(); i++) {
            double total = prices.get(i) * quantities.get(i);
            System.out.printf("%d\t\t%-10s\t$%.2f\t%d\t\t$%.2f%n", 
                            (i + 1), products.get(i), prices.get(i), 
                            quantities.get(i), total);
        }
    }
    
    public static void displayProductSummary(HashMap<String, Integer> counts,
                                           HashMap<String, Double> revenue,
                                           HashMap<String, Double> prices) {
        System.out.println("Product\t\tUnit Price\tQuantity\tRevenue");
        System.out.println("-------\t\t----------\t--------\t-------");
        
        for (String product : counts.keySet()) {
            double price = prices.get(product);
            int quantity = counts.get(product);
            double totalRevenue = revenue.get(product);
            
            System.out.printf("%-10s\t$%.2f\t\t%d\t\t$%.2f%n", 
                            product, price, quantity, totalRevenue);
        }
    }
    
    public static void generateSalesReport(HashMap<String, Integer> counts,
                                         HashMap<String, Double> revenue,
                                         HashMap<String, Double> prices,
                                         double totalRevenue,
                                         int totalItems) {
        System.out.println("\n" + "=".repeat(50));
        System.out.println("DAILY SALES REPORT");
        System.out.println("=".repeat(50));
        
        for (String product : counts.keySet()) {
            int quantity = counts.get(product);
            double productRevenue = revenue.get(product);
            double percentage = (productRevenue / totalRevenue) * 100;
            
            System.out.printf("%-15s: %2d units, $%6.2f revenue (%4.1f%%)%n",
                            product, quantity, productRevenue, percentage);
        }
        
        System.out.println("-".repeat(50));
        System.out.printf("%-15s: %2d units, $%6.2f revenue%n", 
                         "TOTAL", totalItems, totalRevenue);
        System.out.println("=".repeat(50));
    }
    
    public static void main(String[] args) {
        analyzeSalesData();
    }
}
```

### What to Notice:
- **Arrays.asList()**: Quick way to initialize ArrayList with values
- **Multiple Data Structures**: Combining ArrayList and HashMap for complex data processing
- **Data Aggregation**: Using maps to accumulate counts and totals from raw data
- **Collection Iteration**: Different patterns for processing data in collections
- **Custom Sorting**: Manual sorting algorithm using HashMap operations
- **Statistical Calculations**: Computing averages, totals, and percentages
- **Filtering**: Creating new lists based on criteria from existing data
- **Report Generation**: Formatting data for presentation
- **String Methods**: `String.repeat()` for creating formatted output
- **Complex Data Relationships**: Managing relationships between different data points

### Trace Through Example:
```java
// Processing transaction: "Coffee", 3.50, 2
String product = "Coffee";
double price = 3.50;
int quantity = 2;
double revenue = 3.50 * 2 = 7.00;

// Update productCounts
int currentCount = productCounts.getOrDefault("Coffee", 0);  // 0 first time
productCounts.put("Coffee", currentCount + 2);              // becomes 2

// Update productRevenue  
double currentRevenue = productRevenue.getOrDefault("Coffee", 0.0);  // 0.0 first time
productRevenue.put("Coffee", currentRevenue + 7.00);                // becomes 7.00
```

---

## Reading Practice Tips

After studying these beginner examples:

1. **Trace data transformations**: Follow how data moves between variables and collections
2. **Understand type requirements**: Notice when explicit type casting or declarations are needed
3. **Practice collection patterns**: Recognize common operations like searching, filtering, and aggregating
4. **Follow method calls**: Understand what each method returns and how to use the result
5. **Read iteration carefully**: Different loop styles serve different purposes

Remember: These examples show fundamental patterns you'll see in most Java programs. Focus on understanding how data flows through the code and how different data structures are used for different purposes.
