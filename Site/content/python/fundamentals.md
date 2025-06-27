---
title: "Python Fundamentals: Classes, Functions, and Data Structures"
description: "Practice reading Python code with classes, functions, and built-in data structures"
weight: 15
bookToc: true
---

# Python Fundamentals: Classes, Functions, and Data Structures

This section focuses on reading Python code that demonstrates object-oriented programming, function design, and Python's powerful built-in data structures.

{{< hint info >}}
**Python Reading Strategy**: Pay attention to Python's readable syntax, built-in functions, and how the language promotes clear, concise code. Notice the use of conventions like underscore prefixes and descriptive variable names.
{{< /hint >}}

## How to Read Python Code

{{< tabs "approach" >}}
{{< tab "Follow the Flow" >}}
**Start with function/class purpose** - Read docstrings and comments first
{{< /tab >}}
{{< tab "Notice Pythonic Patterns" >}}  
**Look for Python idioms** - List comprehensions, built-in functions, context managers
{{< /tab >}}
{{< tab "Understand Data Flow" >}}
**Track data transformations** - How data moves through functions and methods
{{< /tab >}}
{{< tab "Observe Conventions" >}}
**Notice Python conventions** - Naming, structure, and style patterns
{{< /tab >}}
{{< /tabs >}}

---

## Example 1: Object-Oriented Design with Properties and Methods

### Code to Read:
```python
class BankAccount:
    def __init__(self, account_holder, account_number, initial_balance=0.0):
        self.account_holder = account_holder
        self.account_number = account_number
        self._balance = initial_balance  # Protected attribute
        self._transaction_history = []
    
    def deposit(self, amount):
        if amount <= 0:
            print("Invalid deposit amount")
            return False
        
        self._balance += amount
        self._transaction_history.append(f"Deposited ${amount:.2f}")
        print(f"Deposited ${amount:.2f}. New balance: ${self._balance:.2f}")
        return True
    
    def withdraw(self, amount):
        if amount <= 0:
            print("Invalid withdrawal amount")
            return False
        
        if amount > self._balance:
            print("Insufficient funds")
            return False
        
        self._balance -= amount
        self._transaction_history.append(f"Withdrew ${amount:.2f}")
        print(f"Withdrew ${amount:.2f}. Remaining balance: ${self._balance:.2f}")
        return True
    
    @property
    def balance(self):
        """Read-only access to balance"""
        return self._balance
    
    def get_transaction_history(self):
        return self._transaction_history.copy()  # Return a copy for safety
    
    def __str__(self):
        return f"Account({self.account_holder}, #{self.account_number}, ${self._balance:.2f})"
    
    def __repr__(self):
        return f"BankAccount('{self.account_holder}', {self.account_number}, {self._balance})"

# Usage example
if __name__ == "__main__":
    account = BankAccount("Alice Johnson", 12345, 100.0)
    account.deposit(50.0)
    account.withdraw(25.0)
    print(account)
    print("History:", account.get_transaction_history())
```

### What to Notice:

{{< details "Python Class Structure and Conventions" >}}
**Constructor (`__init__`)**: Python's object initialization method
- `self` parameter represents the instance being created
- Default parameters: `initial_balance=0.0` provides sensible defaults

**Attribute naming conventions**:
- `self.account_holder` - public attribute
- `self._balance` - protected attribute (single underscore convention)
- `self._transaction_history` - internal data structure

**Magic methods**:
- `__str__()` - user-friendly string representation
- `__repr__()` - developer/debugging string representation
{{< /details >}}

{{< details "Property Decorators and Encapsulation" >}}
**@property decorator**: Makes `balance` accessible like an attribute
```python
# Instead of: account.get_balance()
# You can write: account.balance
```

**Data protection patterns**:
- `_balance` is protected (convention, not enforced)
- `get_transaction_history()` returns a copy to prevent external modification
- Methods validate input before modifying state
{{< /details >}}

{{< details "String Formatting and F-strings" >}}
**F-string formatting**: `f"Deposited ${amount:.2f}"`
- `:.2f` formats floating point to 2 decimal places
- More readable than older `%` or `.format()` methods

**Early returns for validation**:
```python
if amount <= 0:
    print("Invalid deposit amount")
    return False  # Exit early on invalid input
```
{{< /details >}}

{{< details "List Operations and Data Safety" >}}
**List methods**:
- `append()` adds items to transaction history
- `copy()` creates shallow copy for data protection

**Main guard**: `if __name__ == "__main__":` 
- Runs code only when script is executed directly
- Prevents execution when module is imported
{{< /details >}}

### Trace Through Example:
```python
# Object creation:
account = BankAccount("Alice Johnson", 12345, 100.0)
# → account_holder="Alice Johnson", account_number=12345, 
#   _balance=100.0, _transaction_history=[]

# Deposit operation:
account.deposit(50.0)
# → amount > 0: True, _balance = 100.0 + 50.0 = 150.0
# → _transaction_history = ["Deposited $50.00"]
# → returns True

# Withdraw operation:
account.withdraw(25.0)
# → amount > 0: True, amount <= _balance: True
# → _balance = 150.0 - 25.0 = 125.0
# → _transaction_history = ["Deposited $50.00", "Withdrew $25.00"]
# → returns True

# Property access:
print(account.balance)  # → 125.0 (calls the @property method)
```

---

## Example 2: Functional Programming with List Processing

### Code to Read:
```python
def analyze_student_grades(grades):
    """Analyze a list of student grades and return statistics."""
    if not grades:  # Pythonic way to check for empty list
        return {
            'error': 'No grades to analyze',
            'count': 0
        }
    
    # Filter out invalid grades (None, negative, or > 100)
    valid_grades = [grade for grade in grades 
                   if grade is not None and 0 <= grade <= 100]
    
    if not valid_grades:
        return {'error': 'No valid grades found', 'count': 0}
    
    # Calculate basic statistics using built-in functions
    total_students = len(valid_grades)
    average = sum(valid_grades) / total_students
    highest = max(valid_grades)
    lowest = min(valid_grades)
    
    # Nested function for letter grade calculation
    def get_letter_grade(score):
        if score >= 90: return 'A'
        elif score >= 80: return 'B'
        elif score >= 70: return 'C'
        elif score >= 60: return 'D'
        else: return 'F'
    
    # Use Counter for frequency counting
    from collections import Counter
    letter_grades = [get_letter_grade(grade) for grade in valid_grades]
    grade_distribution = Counter(letter_grades)
    
    # Calculate passing rate (>= 60)
    passing_grades = [grade for grade in valid_grades if grade >= 60]
    passing_rate = len(passing_grades) / total_students * 100
    
    return {
        'count': total_students,
        'average': round(average, 2),
        'highest': highest,
        'lowest': lowest,
        'passing_rate': round(passing_rate, 1),
        'grade_distribution': dict(grade_distribution),
        'valid_grades': valid_grades
    }

def display_grade_analysis(analysis):
    """Display the grade analysis in a formatted way."""
    if 'error' in analysis:
        print(f"Error: {analysis['error']}")
        return
    
    print("=== Grade Analysis ===")
    print(f"Total students: {analysis['count']}")
    print(f"Average grade: {analysis['average']}")
    print(f"Highest grade: {analysis['highest']}")
    print(f"Lowest grade: {analysis['lowest']}")
    print(f"Passing rate: {analysis['passing_rate']}%")
    
    print("\nGrade Distribution:")
    for letter, count in sorted(analysis['grade_distribution'].items()):
        percentage = (count / analysis['count']) * 100
        print(f"  {letter}: {count} students ({percentage:.1f}%)")

# Example usage
if __name__ == "__main__":
    # Test with various scenarios
    test_grades = [85, 92, 78, 67, 94, 81, 88, 76, 90, 82]
    analysis = analyze_student_grades(test_grades)
    display_grade_analysis(analysis)
    
    # Test with invalid data
    print("\n" + "="*40)
    invalid_grades = [85, None, -5, 110, 78]
    analysis2 = analyze_student_grades(invalid_grades)
    display_grade_analysis(analysis2)
```

### What to Notice:

{{< details "List Comprehensions and Filtering" >}}
**List comprehension with filtering**:
```python
valid_grades = [grade for grade in grades 
               if grade is not None and 0 <= grade <= 100]
```
- Combines iteration, filtering, and list creation in one line
- More concise than equivalent for loop with if statements
- `grade is not None` checks for None values specifically

**Multiple filtering patterns**:
```python
passing_grades = [grade for grade in valid_grades if grade >= 60]
letter_grades = [get_letter_grade(grade) for grade in valid_grades]
```
{{< /details >}}

{{< details "Built-in Functions and Data Processing" >}}
**Statistical functions**:
- `len()` - count items
- `sum()` - add all numbers  
- `max()` / `min()` - find extremes
- `round()` - control decimal precision

**Collections module**:
- `Counter()` automatically counts frequency of items
- More efficient than manual counting loops
{{< /details >}}

{{< details "Function Design Patterns" >}}
**Nested function**: `get_letter_grade()` defined inside `analyze_student_grades()`
- Only accessible within the parent function
- Encapsulates helper logic
- Has access to parent function's variables

**Return dictionary pattern**:
- Functions return structured data as dictionaries
- Makes it easy to access specific results
- Self-documenting with key names
{{< /details >}}

{{< details "Error Handling and Edge Cases" >}}
**Defensive programming**:
```python
if not grades:  # Handle empty input
if not valid_grades:  # Handle no valid data
if 'error' in analysis:  # Handle error conditions
```

**Truthiness in Python**:
- `if not grades:` - empty lists are "falsy"
- More Pythonic than `if len(grades) == 0:`
{{< /details >}}

### Trace Through Example:
```python
# Input: [85, 92, 78, 67, 94]
grades = [85, 92, 78, 67, 94]

# Filtering step:
valid_grades = [85, 92, 78, 67, 94]  # All valid (0-100, not None)

# Statistics:
total_students = 5
average = (85 + 92 + 78 + 67 + 94) / 5 = 83.2
highest = 94, lowest = 67

# Letter grades:
[get_letter_grade(85), get_letter_grade(92), ...] 
= ['B', 'A', 'C', 'D', 'A']

# Counter result:
grade_distribution = {'A': 2, 'B': 1, 'C': 1, 'D': 1}

# Passing rate:
passing_grades = [85, 92, 78, 67, 94]  # All >= 60
passing_rate = 5/5 * 100 = 100.0
```

---

## Practice Exercises

{{< hint tip >}}
**Reading Exercise 1**: Trace through the BankAccount class with these operations:
```python
account = BankAccount("Bob", 54321, 200.0)
account.withdraw(250.0)  # What happens?
account.deposit(-50.0)   # What happens?
```

**Reading Exercise 2**: Predict the output of `analyze_student_grades([95, None, 105, 45, 88])`. What gets filtered out and why?

**Reading Exercise 3**: Identify all the places where Python's "Pythonic" style makes the code more readable than equivalent Java code would be.
{{< /hint >}}

{{< button href="/python/beginner-basics/" >}}← Previous: Beginner Basics{{< /button >}} {{< button href="/python/control-structures/" >}}Next: Control Structures →{{< /button >}}
