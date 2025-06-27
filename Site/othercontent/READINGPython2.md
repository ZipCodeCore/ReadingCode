# Python Fundamentals: Control Structures, Built-in Types, and Variables

This file contains beginner-friendly Python code examples focused on fundamental concepts: control structures, built-in types, and variables. These examples are designed to help you practice reading and understanding basic Python syntax and logic flow.

## How to Use This File

1. **Start with variables and types** - Understand how Python handles different data types
2. **Follow control flow** - Trace through if statements, loops, and logical operations
3. **Notice Python idioms** - See how Python's built-in types make code concise and readable
4. **Practice mental execution** - Try to predict what each code block will output
5. **Focus on patterns** - Recognize common Python programming patterns

---

## Example 1: Variables, Basic Types, and String Operations

### Code to Read:
```python
def process_student_info():
    """Demonstrate Python's built-in types and variable handling."""
    
    # Different variable types - Python infers the type
    student_name = "Alice Johnson"          # str
    age = 20                               # int
    gpa = 3.85                            # float
    is_enrolled = True                     # bool
    courses = ["Math", "Physics", "CS"]    # list
    grades = {"Math": 95, "Physics": 88, "CS": 92}  # dict
    
    # String operations and formatting
    first_name = student_name.split()[0]  # Split on whitespace, take first part
    last_initial = student_name.split()[1][0]  # Get first letter of last name
    
    # String methods and formatting
    display_name = f"{first_name} {last_initial}."  # f-string formatting
    email = f"{first_name.lower()}.{student_name.split()[1].lower()}@university.edu"
    
    # Working with numbers
    total_credits = len(courses) * 3  # Each course is 3 credits
    next_year_age = age + 1
    gpa_percentage = gpa / 4.0 * 100  # Convert 4.0 scale to percentage
    
    # Boolean operations
    is_honor_student = gpa >= 3.5 and is_enrolled
    needs_advising = gpa < 2.0 or total_credits < 12
    is_senior = age >= 21 and total_credits > 90
    
    # List operations
    course_count = len(courses)
    has_math = "Math" in courses  # Membership testing
    courses_upper = [course.upper() for course in courses]  # List comprehension
    
    # Dictionary operations
    math_grade = grades.get("Math", 0)  # Safe dictionary access
    average_grade = sum(grades.values()) / len(grades)  # Calculate average
    passing_courses = [course for course, grade in grades.items() if grade >= 60]
    
    # Print information using different formatting methods
    print("=== Student Information ===")
    print(f"Name: {display_name}")
    print(f"Age: {age} (will be {next_year_age} next year)")
    print(f"Email: {email}")
    print(f"GPA: {gpa} ({gpa_percentage:.1f}%)")
    print(f"Enrolled: {'Yes' if is_enrolled else 'No'}")
    
    print(f"\n=== Academic Status ===")
    print(f"Courses: {', '.join(courses)}")  # Join list into string
    print(f"Total Credits: {total_credits}")
    print(f"Average Grade: {average_grade:.1f}")
    print(f"Honor Student: {'Yes' if is_honor_student else 'No'}")
    print(f"Needs Advising: {'Yes' if needs_advising else 'No'}")
    
    # Return a summary dictionary
    return {
        'name': display_name,
        'email': email,
        'gpa': gpa,
        'courses': courses,
        'grades': grades,
        'status': {
            'honor_student': is_honor_student,
            'needs_advising': needs_advising,
            'is_senior': is_senior
        }
    }

# Example usage
if __name__ == "__main__":
    student_data = process_student_info()
    print(f"\nReturned data type: {type(student_data)}")
    print(f"Number of keys in returned dict: {len(student_data)}")
```

### What to Notice:
- **Dynamic Typing**: Variables don't need type declarations; Python infers types
- **String Methods**: `.split()`, `.lower()`, `.upper()` transform strings
- **F-string Formatting**: `f"{variable}"` is the modern way to format strings
- **List Operations**: `len()`, `in` operator, list comprehensions `[expr for item in list]`
- **Dictionary Methods**: `.get()` for safe access, `.values()`, `.items()` for iteration
- **Boolean Logic**: `and`, `or` operators with clear precedence
- **Membership Testing**: `in` operator works with lists, strings, dictionaries
- **Multiple Assignment**: Variables can be assigned in sequence
- **Conditional Expressions**: `'Yes' if condition else 'No'` is a ternary operator
- **Method Chaining**: `student_name.split()[1][0]` chains operations together

### Trace Through Example:
```python
student_name = "Alice Johnson"
first_name = "Alice"          # student_name.split()[0]
last_initial = "J"            # student_name.split()[1][0]
display_name = "Alice J."     # f-string combination
email = "alice.johnson@university.edu"  # lowercase formatting

gpa = 3.85
is_honor_student = True       # 3.85 >= 3.5 and True
needs_advising = False        # 3.85 < 2.0 or 9 < 12 → False or False
```

---

## Example 2: Control Structures and Conditional Logic

### Code to Read:
```python
def grade_calculator(scores):
    """Process a list of test scores and determine grades with various conditions."""
    
    if not scores:  # Check for empty list
        print("No scores provided")
        return None
    
    # Initialize counters and accumulators
    total_points = 0
    grade_counts = {'A': 0, 'B': 0, 'C': 0, 'D': 0, 'F': 0}
    failed_tests = []
    bonus_points = 0
    
    print("Processing individual scores:")
    
    # Process each score with different conditional logic
    for i, score in enumerate(scores):
        print(f"Test {i + 1}: {score} points", end=" → ")
        
        # Nested conditionals for grade assignment
        if score >= 90:
            letter_grade = 'A'
            print("Excellent!")
        elif score >= 80:
            letter_grade = 'B'
            print("Good work!")
        elif score >= 70:
            letter_grade = 'C'
            print("Satisfactory")
        elif score >= 60:
            letter_grade = 'D'
            print("Needs improvement")
        else:
            letter_grade = 'F'
            print("Failed - needs retake")
            failed_tests.append(i + 1)  # Store test number (1-indexed)
        
        # Update counters
        grade_counts[letter_grade] += 1
        total_points += score
        
        # Bonus points for exceptional performance
        if score >= 95:
            bonus_earned = 5
            bonus_points += bonus_earned
            print(f"    Bonus: +{bonus_earned} points for excellence!")
        elif score == 100:
            bonus_points += 10  # Extra bonus for perfect score
            print("    Perfect score bonus: +10 points!")
    
    # Calculate statistics
    average_score = total_points / len(scores)
    adjusted_average = (total_points + bonus_points) / len(scores)
    
    # Determine overall performance using compound conditions
    if average_score >= 90 and len(failed_tests) == 0:
        overall_grade = "Outstanding"
        recommendation = "Excellent work! Consider advanced coursework."
    elif average_score >= 80 and len(failed_tests) <= 1:
        overall_grade = "Strong"
        recommendation = "Good performance. Keep up the good work!"
    elif average_score >= 70 or (average_score >= 65 and bonus_points > 0):
        overall_grade = "Satisfactory"
        recommendation = "Adequate progress. Focus on consistent improvement."
    elif len(failed_tests) > len(scores) // 2:  # More than half failed
        overall_grade = "Concerning"
        recommendation = "Significant struggles. Recommend tutoring and study group."
    else:
        overall_grade = "Needs Improvement"
        recommendation = "Some challenges noted. Additional support recommended."
    
    # Create detailed report
    print(f"\n=== Grade Report ===")
    print(f"Total tests: {len(scores)}")
    print(f"Average score: {average_score:.1f}")
    
    if bonus_points > 0:
        print(f"Bonus points earned: {bonus_points}")
        print(f"Adjusted average: {adjusted_average:.1f}")
    
    print(f"Overall grade: {overall_grade}")
    print(f"Recommendation: {recommendation}")
    
    # Show grade distribution using conditional formatting
    print(f"\nGrade Distribution:")
    for grade, count in grade_counts.items():
        if count > 0:
            percentage = (count / len(scores)) * 100
            # Use different formatting based on grade
            if grade in ['A', 'B']:
                status = "✓"  # Good grades
            elif grade in ['C', 'D']:
                status = "○"  # Acceptable grades
            else:
                status = "✗"  # Failed grades
            
            print(f"  {status} {grade}: {count} tests ({percentage:.1f}%)")
    
    # Warning for failed tests
    if failed_tests:
        print(f"\n⚠️  Failed tests: {', '.join(map(str, failed_tests))}")
        print("   Consider retaking these assessments.")
    
    return {
        'average': average_score,
        'adjusted_average': adjusted_average,
        'overall_grade': overall_grade,
        'failed_tests': failed_tests,
        'bonus_points': bonus_points,
        'grade_distribution': grade_counts
    }

# Example usage with different scenarios
if __name__ == "__main__":
    # Test with various score patterns
    print("=== Scenario 1: Strong Student ===")
    strong_scores = [92, 88, 95, 87, 100, 89]
    result1 = grade_calculator(strong_scores)
    
    print("\n" + "="*50)
    print("=== Scenario 2: Struggling Student ===")
    struggling_scores = [45, 67, 55, 72, 58, 48]
    result2 = grade_calculator(struggling_scores)
    
    print("\n" + "="*50)
    print("=== Scenario 3: Empty List ===")
    result3 = grade_calculator([])
```

### What to Notice:
- **If-elif-else Chains**: Sequential condition checking with `elif` for mutually exclusive conditions
- **Compound Conditions**: Using `and`, `or` to combine multiple boolean expressions
- **Truthiness**: `if not scores:` leverages Python's truthiness (empty lists are False)
- **Enumerate Function**: `enumerate(scores)` provides both index and value in loops
- **String Concatenation**: `end=" → "` controls print output formatting
- **List Methods**: `.append()` adds items to lists
- **Floor Division**: `//` performs integer division for threshold calculations
- **Dictionary Iteration**: `for grade, count in grade_counts.items()` unpacks key-value pairs
- **Conditional Expressions**: Inline if-else for simple value assignments
- **String Formatting**: Multiple ways to format output (f-strings, `.join()`)
- **Range Comparisons**: Multiple comparison operators in logical expressions

### Trace Through Example:
```python
scores = [92, 88, 95]
# Loop iteration 1: i=0, score=92
#   92 >= 90 → letter_grade = 'A', grade_counts['A'] = 1
#   92 >= 95 → False, no bonus
# Loop iteration 2: i=1, score=88  
#   88 >= 80 → letter_grade = 'B', grade_counts['B'] = 1
# Loop iteration 3: i=2, score=95
#   95 >= 90 → letter_grade = 'A', grade_counts['A'] = 2
#   95 >= 95 → True, bonus_points = 5

# Final: total_points = 275, average = 91.7, failed_tests = []
# 91.7 >= 90 and 0 == 0 → overall_grade = "Outstanding"
```

---

## Example 3: Loops and Iteration Patterns

### Code to Read:
```python
def analyze_text_patterns(text):
    """Demonstrate different loop types and iteration patterns."""
    
    if not text or not text.strip():  # Check for empty or whitespace-only text
        return {"error": "No text provided"}
    
    # Initialize data structures for analysis
    char_counts = {}
    word_lengths = []
    line_stats = []
    vowels = "aeiouAEIOU"
    
    print("=== Text Analysis ===")
    print(f"Original text: '{text}'")
    
    # Character analysis using basic for loop
    print(f"\n1. Character Analysis:")
    for char in text:
        if char.isalpha():  # Only count alphabetic characters
            char_counts[char.lower()] = char_counts.get(char.lower(), 0) + 1
    
    # Display character frequency (sorted)
    sorted_chars = sorted(char_counts.items(), key=lambda x: x[1], reverse=True)
    for char, count in sorted_chars[:5]:  # Show top 5 most frequent
        print(f"   '{char}': {count} times")
    
    # Word analysis using split and list comprehension
    print(f"\n2. Word Analysis:")
    words = text.split()
    print(f"   Total words: {len(words)}")
    
    # Different ways to iterate over words
    for i in range(len(words)):  # Range-based loop with index
        word = words[i]
        clean_word = word.strip('.,!?";').lower()  # Remove punctuation
        word_lengths.append(len(clean_word))
        print(f"   Word {i+1}: '{word}' (length: {len(clean_word)})")
    
    # Line-by-line analysis using enumerate
    print(f"\n3. Line Analysis:")
    lines = text.split('\n') if '\n' in text else [text]
    
    for line_num, line in enumerate(lines, 1):  # Start counting from 1
        words_in_line = len(line.split())
        chars_in_line = len(line.strip())
        vowel_count = sum(1 for char in line if char in vowels)  # Generator expression
        
        line_info = {
            'number': line_num,
            'words': words_in_line,
            'characters': chars_in_line,
            'vowels': vowel_count
        }
        line_stats.append(line_info)
        
        print(f"   Line {line_num}: {words_in_line} words, {chars_in_line} chars, {vowel_count} vowels")
    
    # Pattern finding using while loop
    print(f"\n4. Pattern Search:")
    search_patterns = ['the', 'and', 'a', 'to', 'in']
    text_lower = text.lower()
    
    pattern_results = {}
    for pattern in search_patterns:
        count = 0
        start_pos = 0
        positions = []
        
        # Use while loop to find all occurrences
        while True:
            pos = text_lower.find(pattern, start_pos)
            if pos == -1:  # Pattern not found
                break
            positions.append(pos)
            count += 1
            start_pos = pos + 1  # Move past this occurrence
        
        if count > 0:
            pattern_results[pattern] = {'count': count, 'positions': positions}
            print(f"   '{pattern}' found {count} times at positions: {positions}")
    
    # Statistical analysis using various iteration techniques
    print(f"\n5. Statistics:")
    
    # Using built-in functions with iterables
    if word_lengths:
        avg_word_length = sum(word_lengths) / len(word_lengths)
        min_word_length = min(word_lengths)
        max_word_length = max(word_lengths)
        
        print(f"   Average word length: {avg_word_length:.1f}")
        print(f"   Shortest word: {min_word_length} characters")
        print(f"   Longest word: {max_word_length} characters")
    
    # Conditional loops and break/continue
    print(f"\n6. Unique Words (first 10):")
    unique_words = set()
    word_count = 0
    
    for word in words:
        clean_word = word.strip('.,!?";').lower()
        
        if len(clean_word) < 2:  # Skip very short words
            continue
        
        if clean_word not in unique_words:
            unique_words.add(clean_word)
            print(f"   {len(unique_words)}: {clean_word}")
            word_count += 1
            
            if word_count >= 10:  # Stop after 10 unique words
                break
    
    # Nested loops for character patterns
    print(f"\n7. Character Combinations:")
    common_pairs = {}
    
    for i in range(len(text) - 1):  # Stop one character before end
        if text[i].isalpha() and text[i+1].isalpha():
            pair = text[i:i+2].lower()
            common_pairs[pair] = common_pairs.get(pair, 0) + 1
    
    # Show most common character pairs
    if common_pairs:
        top_pairs = sorted(common_pairs.items(), key=lambda x: x[1], reverse=True)[:3]
        for pair, count in top_pairs:
            print(f"   '{pair}': {count} times")
    
    # Return comprehensive analysis
    return {
        'character_counts': char_counts,
        'word_count': len(words),
        'average_word_length': avg_word_length if word_lengths else 0,
        'line_stats': line_stats,
        'pattern_matches': pattern_results,
        'unique_word_count': len(unique_words),
        'common_pairs': dict(top_pairs) if common_pairs else {}
    }

# Example usage
if __name__ == "__main__":
    sample_text = """The quick brown fox jumps over the lazy dog.
    This sentence contains every letter of the alphabet.
    The dog was very lazy and slept all day."""
    
    results = analyze_text_patterns(sample_text)
    
    print(f"\n=== Summary ===")
    print(f"Total unique characters: {len(results.get('character_counts', {}))}")
    print(f"Total words: {results.get('word_count', 0)}")
    print(f"Total unique words: {results.get('unique_word_count', 0)}")
```

### What to Notice:
- **Multiple Loop Types**: `for char in text`, `for i in range()`, `while True`
- **Enumerate with Start**: `enumerate(lines, 1)` starts counting from 1 instead of 0
- **Generator Expressions**: `sum(1 for char in line if char in vowels)` creates temporary iterator
- **String Methods**: `.isalpha()`, `.strip()`, `.find()`, `.split()` for text processing
- **Loop Control**: `break` exits loop, `continue` skips to next iteration
- **Slice Notation**: `text[i:i+2]` extracts substring of 2 characters
- **Set Operations**: `set()` automatically handles uniqueness
- **Dictionary Comprehension**: Pattern for counting occurrences using `.get()`
- **Lambda Functions**: `key=lambda x: x[1]` for sorting by second element
- **Nested Loops**: Loop within loop for character pair analysis
- **Conditional Logic in Loops**: `if` statements control loop behavior
- **Range with Offset**: `range(len(text) - 1)` prevents index errors

### Trace Through Example:
```python
text = "The cat"
# Character loop: T->t:1, h->h:1, e->e:1, (space skipped), c->c:1, a->a:1, t->t:2
# Word loop: i=0 word="The" clean="the" length=3, i=1 word="cat" clean="cat" length=3
# Pattern search: "the" found at position 0
# Character pairs: "th":1, "he":1, "ca":1, "at":1
```

---

## Example 4: Built-in Data Types and Their Methods

### Code to Read:
```python
def explore_data_types():
    """Demonstrate Python's built-in data types and their common operations."""
    
    print("=== Python Built-in Data Types Demo ===\n")
    
    # 1. Strings - immutable sequence of characters
    print("1. STRING OPERATIONS:")
    message = "  Hello, Python World!  "
    print(f"Original: '{message}'")
    
    # String methods return new strings (strings are immutable)
    cleaned = message.strip()              # Remove whitespace
    lower_case = cleaned.lower()           # Convert to lowercase
    words = cleaned.split(", ")            # Split into list
    replaced = cleaned.replace("Python", "Amazing Python")  # Replace text
    
    print(f"Cleaned: '{cleaned}'")
    print(f"Lowercase: '{lower_case}'")
    print(f"Split on comma: {words}")
    print(f"Replaced: '{replaced}'")
    
    # String formatting and checking
    if "Python" in cleaned:
        print("✓ Contains 'Python'")
    
    print(f"Length: {len(cleaned)} characters")
    print(f"Starts with 'Hello': {cleaned.startswith('Hello')}")
    print(f"Ends with '!': {cleaned.endswith('!')}")
    
    # 2. Lists - mutable ordered collections
    print(f"\n2. LIST OPERATIONS:")
    numbers = [1, 3, 5, 7, 9]
    fruits = ["apple", "banana", "cherry"]
    
    print(f"Numbers: {numbers}")
    print(f"Fruits: {fruits}")
    
    # List modification methods (modify the original list)
    numbers.append(11)                     # Add to end
    numbers.insert(1, 2)                   # Insert at index 1
    fruits.extend(["date", "elderberry"])  # Add multiple items
    
    print(f"After modifications:")
    print(f"Numbers: {numbers}")
    print(f"Fruits: {fruits}")
    
    # List access and slicing
    print(f"First fruit: {fruits[0]}")
    print(f"Last number: {numbers[-1]}")      # Negative indexing
    print(f"First 3 fruits: {fruits[:3]}")   # Slice from start to index 3
    print(f"Numbers from index 2: {numbers[2:]}")  # Slice from index 2 to end
    print(f"Every other number: {numbers[::2]}")   # Step slicing
    
    # List comprehensions
    squared = [x**2 for x in numbers]         # Create new list
    long_fruits = [fruit for fruit in fruits if len(fruit) > 5]  # Filter list
    
    print(f"Squared numbers: {squared}")
    print(f"Long fruit names: {long_fruits}")
    
    # 3. Dictionaries - mutable key-value pairs
    print(f"\n3. DICTIONARY OPERATIONS:")
    student = {
        "name": "Alice",
        "age": 20,
        "courses": ["Math", "Physics"],
        "gpa": 3.8
    }
    
    print(f"Student: {student}")
    
    # Dictionary access and modification
    print(f"Name: {student['name']}")               # Direct access
    print(f"Age: {student.get('age', 'Unknown')}")  # Safe access with default
    
    student["major"] = "Computer Science"    # Add new key-value pair
    student["age"] += 1                      # Modify existing value
    
    print(f"After updates: {student}")
    
    # Dictionary iteration
    print("All keys and values:")
    for key, value in student.items():
        print(f"  {key}: {value}")
    
    # Dictionary comprehension
    grades = {"Math": 85, "Physics": 92, "CS": 88}
    letter_grades = {subject: "A" if grade >= 90 else "B" if grade >= 80 else "C" 
                    for subject, grade in grades.items()}
    
    print(f"Numeric grades: {grades}")
    print(f"Letter grades: {letter_grades}")
    
    # 4. Tuples - immutable ordered collections
    print(f"\n4. TUPLE OPERATIONS:")
    coordinates = (10, 20)
    rgb_color = (255, 128, 0)
    mixed_data = ("Alice", 20, True, 3.8)
    
    print(f"Coordinates: {coordinates}")
    print(f"RGB Color: {rgb_color}")
    print(f"Mixed data: {mixed_data}")
    
    # Tuple unpacking
    x, y = coordinates
    red, green, blue = rgb_color
    name, age, enrolled, gpa = mixed_data
    
    print(f"Unpacked coordinates: x={x}, y={y}")
    print(f"Unpacked color: R={red}, G={green}, B={blue}")
    print(f"Unpacked student: {name}, age {age}, enrolled: {enrolled}")
    
    # Tuples in functions (multiple return values)
    def get_stats(numbers):
        return len(numbers), min(numbers), max(numbers), sum(numbers)
    
    count, minimum, maximum, total = get_stats([1, 5, 3, 9, 2])
    print(f"Stats: count={count}, min={minimum}, max={maximum}, total={total}")
    
    # 5. Sets - mutable collections of unique items
    print(f"\n5. SET OPERATIONS:")
    colors1 = {"red", "green", "blue"}
    colors2 = {"blue", "yellow", "red"}
    
    print(f"Colors1: {colors1}")
    print(f"Colors2: {colors2}")
    
    # Set operations
    union = colors1 | colors2               # All unique colors
    intersection = colors1 & colors2        # Common colors
    difference = colors1 - colors2          # Colors in 1 but not 2
    
    print(f"Union (all colors): {union}")
    print(f"Intersection (common): {intersection}")
    print(f"Difference (1 - 2): {difference}")
    
    # Set membership and uniqueness
    all_numbers = [1, 2, 2, 3, 3, 3, 4, 5, 5]
    unique_numbers = set(all_numbers)       # Remove duplicates
    
    print(f"Original list: {all_numbers}")
    print(f"Unique numbers: {unique_numbers}")
    print(f"Contains 3: {3 in unique_numbers}")
    
    # 6. Booleans and None
    print(f"\n6. BOOLEAN AND NONE:")
    is_student = True
    has_graduated = False
    middle_name = None  # Represents absence of value
    
    print(f"Is student: {is_student}")
    print(f"Has graduated: {has_graduated}")
    print(f"Middle name: {middle_name}")
    
    # Boolean operations with different types
    empty_list = []
    empty_string = ""
    zero_number = 0
    
    print(f"Empty list is falsy: {not empty_list}")
    print(f"Empty string is falsy: {not empty_string}")
    print(f"Zero is falsy: {not zero_number}")
    
    # None checking
    if middle_name is None:
        print("No middle name provided")
    
    # Combining types in complex data structures
    print(f"\n7. COMPLEX DATA STRUCTURES:")
    school_data = {
        "name": "Tech University",
        "students": [
            {"name": "Alice", "courses": ["Math", "CS"], "active": True},
            {"name": "Bob", "courses": ["Physics"], "active": False}
        ],
        "departments": {"CS", "Math", "Physics", "Chemistry"},
        "coordinates": (40.7128, -74.0060),  # latitude, longitude
        "founded": 1985
    }
    
    print("School data structure:")
    for key, value in school_data.items():
        print(f"  {key}: {type(value).__name__} - {value}")
    
    # Accessing nested data
    first_student = school_data["students"][0]
    student_courses = first_student["courses"]
    
    print(f"\nFirst student's courses: {student_courses}")
    print(f"Student is active: {first_student['active']}")
    
    return {
        "string_example": cleaned,
        "list_example": numbers,
        "dict_example": student,
        "tuple_example": coordinates,
        "set_example": unique_numbers,
        "complex_example": school_data
    }

# Example usage
if __name__ == "__main__":
    results = explore_data_types()
    
    print(f"\n=== Summary of Examples ===")
    for key, value in results.items():
        print(f"{key}: {type(value).__name__}")
```

### What to Notice:
- **Immutable vs Mutable**: Strings and tuples can't be changed; lists, dicts, and sets can
- **Method Return Values**: String methods return new strings; list methods modify the original
- **Indexing and Slicing**: `[0]`, `[-1]`, `[:3]`, `[2:]`, `[::2]` for accessing subsequences
- **Dictionary Access**: `dict[key]` vs `dict.get(key, default)` for safe access
- **Tuple Unpacking**: Multiple assignment in one line: `x, y = coordinates`
- **Set Operations**: Mathematical operations like union `|`, intersection `&`, difference `-`
- **Truthiness**: Empty collections, zero, None are "falsy"; non-empty collections are "truthy"
- **Type Checking**: `type(value).__name__` gets the type name as a string
- **Nested Data Access**: Chaining `[0]["courses"]` to access nested structures
- **Comprehensions**: Concise way to create new collections from existing ones
- **Membership Testing**: `in` operator works across all collection types

### Trace Through Example:
```python
message = "  Hello, Python World!  "
cleaned = "Hello, Python World!"     # .strip() removes whitespace
words = ["Hello", " Python World!"]  # .split(", ") splits on comma-space

numbers = [1, 3, 5, 7, 9]
numbers.append(11)      # numbers becomes [1, 3, 5, 7, 9, 11]
numbers.insert(1, 2)    # numbers becomes [1, 2, 3, 5, 7, 9, 11]

coordinates = (10, 20)
x, y = coordinates      # x=10, y=20 (tuple unpacking)
```

---

## Example 5: Variable Scope and Function Parameters

### Code to Read:
```python
# Module-level variables (global scope)
COMPANY_NAME = "Tech Corp"  # Constants usually in ALL_CAPS
employee_count = 0          # Global counter
department_budgets = {"Engineering": 100000, "Marketing": 75000, "HR": 50000}

def demonstrate_variable_scope():
    """Show how variable scope works in Python."""
    
    # Local variables
    function_name = "demonstrate_variable_scope"
    local_counter = 0
    
    print(f"=== Variable Scope Demo ===")
    print(f"Function: {function_name}")
    print(f"Company: {COMPANY_NAME}")  # Accessing global constant
    
    # Reading global variable
    print(f"Current employee count: {employee_count}")
    
    # This creates a local variable, doesn't modify global
    employee_count = 5  # Local variable shadows global
    print(f"Local employee count: {employee_count}")
    
    return local_counter

def modify_global_variables():
    """Show how to properly modify global variables."""
    global employee_count  # Declare intention to modify global
    
    print(f"\n=== Modifying Global Variables ===")
    print(f"Before: employee_count = {employee_count}")
    
    employee_count += 10  # Now this modifies the global variable
    print(f"After: employee_count = {employee_count}")
    
    # Modifying mutable global objects (no 'global' needed)
    department_budgets["Engineering"] += 25000
    print(f"Updated Engineering budget: {department_budgets['Engineering']}")

def function_parameters_demo(required_param, optional_param="default", *args, **kwargs):
    """Demonstrate different types of function parameters."""
    
    print(f"\n=== Function Parameters Demo ===")
    print(f"Required parameter: {required_param}")
    print(f"Optional parameter: {optional_param}")
    
    # *args collects extra positional arguments into a tuple
    if args:
        print(f"Extra positional arguments: {args}")
        for i, arg in enumerate(args):
            print(f"  args[{i}]: {arg}")
    
    # **kwargs collects extra keyword arguments into a dictionary
    if kwargs:
        print(f"Extra keyword arguments: {kwargs}")
        for key, value in kwargs.items():
            print(f"  {key}: {value}")
    
    # Local variables in this function
    local_var = "I'm local to this function"
    print(f"Local variable: {local_var}")
    
    return f"Processed: {required_param}"

def nested_function_example():
    """Show nested functions and closures."""
    
    outer_variable = "I'm in the outer function"
    
    def inner_function(param):
        """Nested function that has access to outer scope."""
        inner_variable = "I'm in the inner function"
        
        # Can access outer function's variables
        print(f"Inner function can see: {outer_variable}")
        print(f"Inner function parameter: {param}")
        print(f"Inner function local: {inner_variable}")
        
        return f"Inner processed: {param}"
    
    print(f"\n=== Nested Function Example ===")
    print(f"Outer variable: {outer_variable}")
    
    # Call the inner function
    result = inner_function("test data")
    print(f"Result from inner function: {result}")
    
    return inner_function  # Return function object (closure)

def default_parameter_gotcha(items=None):
    """Show proper way to handle mutable default parameters."""
    
    # This is the correct way - don't use mutable objects as defaults
    if items is None:
        items = []  # Create new list each time
    
    items.append("new item")
    print(f"Items list: {items}")
    return items

def variable_assignment_patterns():
    """Demonstrate various variable assignment patterns."""
    
    print(f"\n=== Variable Assignment Patterns ===")
    
    # Simple assignment
    name = "Alice"
    age = 25
    
    # Multiple assignment
    x, y, z = 1, 2, 3
    print(f"Multiple assignment: x={x}, y={y}, z={z}")
    
    # Swapping variables
    a, b = 10, 20
    print(f"Before swap: a={a}, b={b}")
    a, b = b, a  # Pythonic way to swap
    print(f"After swap: a={a}, b={b}")
    
    # Unpacking collections
    coordinates = (100, 200)
    point_x, point_y = coordinates
    print(f"Unpacked coordinates: x={point_x}, y={point_y}")
    
    # Extended unpacking (Python 3+)
    numbers = [1, 2, 3, 4, 5]
    first, *middle, last = numbers
    print(f"Extended unpacking: first={first}, middle={middle}, last={last}")
    
    # Augmented assignment operators
    counter = 10
    counter += 5    # Same as: counter = counter + 5
    counter *= 2    # Same as: counter = counter * 2
    counter //= 3   # Integer division assignment
    print(f"After augmented assignments: {counter}")
    
    # Variable annotations (type hints)
    student_name: str = "Bob"
    student_age: int = 20
    student_gpa: float = 3.75
    is_enrolled: bool = True
    
    print(f"Annotated variables: {student_name}, {student_age}, {student_gpa}, {is_enrolled}")
    
    return {
        'simple': name,
        'multiple': (x, y, z),
        'swapped': (a, b),
        'unpacked': (point_x, point_y),
        'extended': (first, middle, last),
        'counter': counter
    }

# Example usage and testing
if __name__ == "__main__":
    print(f"Initial global employee_count: {employee_count}")
    
    # Test variable scope
    local_result = demonstrate_variable_scope()
    print(f"Global employee_count after function: {employee_count}")  # Still 0
    
    # Test global modification
    modify_global_variables()
    print(f"Final global employee_count: {employee_count}")  # Now 10
    
    # Test function parameters
    result1 = function_parameters_demo("hello")
    result2 = function_parameters_demo("world", "custom", "extra1", "extra2", 
                                     color="blue", size="large")
    
    # Test nested functions
    returned_function = nested_function_example()
    print(f"Returned function: {returned_function}")
    
    # Test default parameters
    list1 = default_parameter_gotcha()
    list2 = default_parameter_gotcha()  # Each call gets a fresh list
    print(f"Separate lists: {list1} vs {list2}")
    
    # Test assignment patterns
    assignment_results = variable_assignment_patterns()
    print(f"\nAssignment results: {assignment_results}")
    
    # Final state check
    print(f"\nFinal global state:")
    print(f"Employee count: {employee_count}")
    print(f"Department budgets: {department_budgets}")
```

### What to Notice:
- **Global vs Local Scope**: Variables inside functions are local unless declared with `global`
- **Variable Shadowing**: Local variables can "hide" global variables with the same name
- **Mutable Global Objects**: Lists and dicts can be modified without `global` keyword
- **Function Parameter Types**: Required, optional (with defaults), `*args`, `**kwargs`
- **Nested Function Access**: Inner functions can read (but not modify) outer function variables
- **Closure**: Returning a function that remembers its enclosing scope
- **Mutable Default Arguments**: Using `None` and checking inside function is safer
- **Multiple Assignment**: `x, y = 1, 2` assigns multiple variables at once
- **Extended Unpacking**: `first, *middle, last` captures variable-length sequences
- **Augmented Assignment**: `+=`, `*=`, `//=` modify variables in place
- **Type Hints**: Optional annotations that document expected types
- **Variable Lifetime**: Local variables exist only during function execution

### Trace Through Example:
```python
employee_count = 0  # Global variable

def demonstrate_variable_scope():
    employee_count = 5  # Creates new local variable, doesn't change global
    # Local employee_count = 5, global employee_count still = 0

modify_global_variables():
    global employee_count  # Now we can modify the global
    employee_count += 10   # Global becomes 10

# After functions: global employee_count = 10

a, b = 10, 20
a, b = b, a    # a becomes 20, b becomes 10 (swap)

first, *middle, last = [1, 2, 3, 4, 5]
# first = 1, middle = [2, 3, 4], last = 5
```

---

## Reading Practice Tips

After studying these fundamental examples:

1. **Trace variable changes**: Follow how variables get created, modified, and accessed
2. **Understand scope rules**: Know when variables are local vs global
3. **Practice loop patterns**: Recognize different iteration styles and when to use each
4. **Master data type operations**: Know what methods are available for each type
5. **Read control flow carefully**: Follow the logic through if-elif-else chains

Remember: These fundamentals form the building blocks of all Python programs. Understanding how variables, types, and control structures work will make reading more complex code much easier.
