---
title: "Python Beginner Examples: Numbers, Strings, Lists, and Dictionaries"
description: "Learn Python fundamentals through practical examples focused on basic data types"
difficulty: "beginner"
topics: ["numbers", "strings", "lists", "dictionaries", "data types"]
weight: 10
readingTime: 18
---

This content contains beginner-friendly Python code examples focused on working with basic data types: numbers, strings, lists, and dictionaries. These examples emphasize fundamental operations and Pythonic patterns.

## How to Use These Examples

1. **Start with basic operations** - Understand how Python handles numbers and strings
2. **Follow data manipulation** - See how to process and transform data
3. **Notice Python patterns** - Learn Python's dynamic typing and built-in methods
4. **Practice reading collections** - Understand list and dictionary operations
5. **Trace through examples** - Follow the step-by-step execution

---

## Example 1: Number Operations and Calculations

### Code to Read:
```python
def process_shopping_data():
    """Demonstrate Python number operations with shopping cart calculations."""
    
    # Basic number types and operations
    item_count = 12
    unit_price = 15.99
    tax_rate = 0.08
    shipping_threshold = 50.0
    
    print("=== Shopping Cart Calculation ===")
    print(f"Items: {item_count}")
    print(f"Unit price: ${unit_price}")
    print(f"Tax rate: {tax_rate * 100}%")
    
    # Mathematical calculations
    subtotal = unit_price * item_count
    tax_amount = subtotal * tax_rate
    total_before_shipping = subtotal + tax_amount
    
    # Conditional shipping calculation
    if total_before_shipping >= shipping_threshold:
        shipping_cost = 0.0
        shipping_message = "Free shipping!"
    else:
        shipping_cost = 8.99
        needed_for_free = shipping_threshold - total_before_shipping
        shipping_message = f"Add ${needed_for_free:.2f} for free shipping"
    
    final_total = total_before_shipping + shipping_cost
    
    print(f"\n=== Price Breakdown ===")
    print(f"Subtotal: ${subtotal:.2f}")
    print(f"Tax: ${tax_amount:.2f}")
    print(f"Shipping: ${shipping_cost:.2f}")
    print(f"Final total: ${final_total:.2f}")
    print(f"Shipping note: {shipping_message}")
    
    # Number formatting and rounding
    rounded_total = round(final_total, 2)
    whole_dollars = int(final_total)
    cents = final_total - whole_dollars
    
    print(f"\n=== Detailed Analysis ===")
    print(f"Rounded total: ${rounded_total}")
    print(f"Whole dollars: ${whole_dollars}")
    print(f"Cents portion: {cents:.2f}")

# Call the function
if __name__ == "__main__":
    process_shopping_data()
```

### What to Notice:
- **Dynamic Typing**: No need to declare variable types explicitly
- **F-strings**: `f"Text {variable}"` for clean string formatting
- **Built-in Functions**: `round()`, `int()`, `max()`, `min()` work directly
- **Docstrings**: Triple-quoted strings document function purpose
- **Conditional Expressions**: Clean if/else logic for business rules
- **Decimal Formatting**: `:.2f` controls decimal places in f-strings

### Trace Through Example:
```python
item_count = 12
unit_price = 15.99
tax_rate = 0.08

# Calculations:
subtotal = 15.99 * 12 = 191.88
tax_amount = 191.88 * 0.08 = 15.3504
total_before_shipping = 191.88 + 15.3504 = 207.2304

# Since 207.23 >= 50.0, shipping_cost = 0.0
final_total = 207.2304 + 0.0 = 207.2304
```

---

## Example 2: String Processing and Text Analysis

### Code to Read:
```python
def analyze_customer_feedback():
    """Process and analyze customer feedback text."""
    
    # Sample customer feedback
    feedback = "The product quality is EXCELLENT! Fast shipping, great customer service."
    customer_name = "Alice Johnson"
    rating = "5 stars"
    
    print("=== Customer Feedback Analysis ===")
    print(f"Customer: {customer_name}")
    print(f"Rating: {rating}")
    print(f"Feedback: {feedback}")
    
    # Basic string properties
    feedback_length = len(feedback)
    word_count = len(feedback.split())
    has_exclamation = "!" in feedback
    is_positive = "excellent" in feedback.lower()
    
    print(f"\n=== Text Properties ===")
    print(f"Character count: {feedback_length}")
    print(f"Word count: {word_count}")
    print(f"Contains exclamation: {has_exclamation}")
    print(f"Appears positive: {is_positive}")
    
    # String transformations
    clean_feedback = feedback.lower().strip()
    words = feedback.split()
    first_three_words = " ".join(words[:3])
    last_word = words[-1]
    
    print(f"\n=== Text Processing ===")
    print(f"Cleaned feedback: {clean_feedback}")
    print(f"First three words: {first_three_words}")
    print(f"Last word: {last_word}")
    
    # Extract specific information
    positive_words = ["excellent", "great", "fast", "good", "amazing"]
    found_positive_words = []
    
    for word in words:
        clean_word = word.lower().strip(".,!?")
        if clean_word in positive_words:
            found_positive_words.append(clean_word)
    
    print(f"\n=== Sentiment Analysis ===")
    print(f"Positive words found: {found_positive_words}")
    print(f"Positive word count: {len(found_positive_words)}")
    
    # Customer name processing
    name_parts = customer_name.split()
    first_name = name_parts[0]
    last_name = name_parts[1] if len(name_parts) > 1 else ""
    initials = first_name[0] + (last_name[0] if last_name else "")
    
    print(f"\n=== Customer Info ===")
    print(f"First name: {first_name}")
    print(f"Last name: {last_name}")
    print(f"Initials: {initials}")

# Call the function
if __name__ == "__main__":
    analyze_customer_feedback()
```

### What to Notice:
- **String Methods**: `.lower()`, `.strip()`, `.split()` transform strings
- **List Slicing**: `words[:3]` gets first three elements, `words[-1]` gets last
- **String Membership**: `"text" in string` checks if substring exists
- **List Comprehension Alternative**: Traditional loop to build list of matches
- **String Cleaning**: Removing punctuation with `.strip(".,!?")`
- **Conditional Assignment**: Safe handling of optional last name

### Trace Through Example:
```python
feedback = "The product quality is EXCELLENT! Fast shipping, great customer service."
words = feedback.split()
# words = ["The", "product", "quality", "is", "EXCELLENT!", "Fast", "shipping,", "great", "customer", "service."]

first_three_words = " ".join(words[:3])
# first_three_words = "The product quality"

# For positive word detection:
for word in ["The", "product", "quality", ...]:
    clean_word = word.lower().strip(".,!?")
    # "EXCELLENT!" becomes "excellent", which is in positive_words
    # found_positive_words = ["excellent", "fast", "great"]
```

---

## Example 3: List Operations and Data Management

### Code to Read:
```python
def manage_playlist():
    """Demonstrate list operations with a music playlist."""
    
    # Initial playlist setup
    playlist = ["Bohemian Rhapsody", "Hotel California", "Imagine", "Sweet Child O' Mine"]
    genres = ["Rock", "Rock", "Pop", "Rock"]
    durations = [355, 391, 183, 356]  # in seconds
    
    print("=== Original Playlist ===")
    for i, song in enumerate(playlist):
        minutes = durations[i] // 60
        seconds = durations[i] % 60
        print(f"{i+1}. {song} ({genres[i]}) - {minutes}:{seconds:02d}")
    
    # List operations
    playlist_length = len(playlist)
    total_duration = sum(durations)
    average_duration = total_duration / playlist_length
    
    print(f"\n=== Playlist Statistics ===")
    print(f"Number of songs: {playlist_length}")
    print(f"Total duration: {total_duration // 60}:{total_duration % 60:02d}")
    print(f"Average duration: {average_duration:.1f} seconds")
    
    # Adding new songs
    new_songs = ["Stairway to Heaven", "Purple Haze"]
    new_genres = ["Rock", "Rock"]
    new_durations = [482, 167]
    
    # Extend lists with new data
    playlist.extend(new_songs)
    genres.extend(new_genres)
    durations.extend(new_durations)
    
    print(f"\n=== After Adding Songs ===")
    print(f"Updated playlist length: {len(playlist)}")
    print(f"Last song: {playlist[-1]}")
    
    # Searching and filtering
    rock_songs = []
    rock_indices = []
    
    for i, genre in enumerate(genres):
        if genre == "Rock":
            rock_songs.append(playlist[i])
            rock_indices.append(i)
    
    print(f"\n=== Rock Songs ===")
    print(f"Rock songs: {rock_songs}")
    print(f"Count: {len(rock_songs)}")
    
    # List slicing and manipulation
    first_three = playlist[:3]
    last_two = playlist[-2:]
    middle_songs = playlist[2:4]
    
    print(f"\n=== Playlist Segments ===")
    print(f"First three: {first_three}")
    print(f"Last two: {last_two}")
    print(f"Middle songs: {middle_songs}")
    
    # Sort by duration (create new sorted list)
    song_duration_pairs = list(zip(playlist, durations))
    sorted_by_duration = sorted(song_duration_pairs, key=lambda x: x[1])
    
    print(f"\n=== Sorted by Duration ===")
    for song, duration in sorted_by_duration[:3]:  # Show shortest 3
        minutes = duration // 60
        seconds = duration % 60
        print(f"{song}: {minutes}:{seconds:02d}")

# Call the function
if __name__ == "__main__":
    manage_playlist()
```

### What to Notice:
- **List Indexing**: Access elements with `[index]`, negative indices count from end
- **List Methods**: `.extend()` adds multiple elements, `.append()` adds one
- **Enumerate**: `enumerate(list)` provides both index and value in loops
- **List Slicing**: `[:3]` first three, `[-2:]` last two, `[2:4]` middle range
- **Zip Function**: `zip()` combines multiple lists element-wise
- **Lambda Functions**: Anonymous functions for sorting criteria
- **List Building**: Traditional loop to build filtered lists

### Trace Through Example:
```python
playlist = ["Bohemian Rhapsody", "Hotel California", "Imagine", "Sweet Child O' Mine"]
durations = [355, 391, 183, 356]

# Statistics:
playlist_length = len(playlist) = 4
total_duration = sum(durations) = 355 + 391 + 183 + 356 = 1285
average_duration = 1285 / 4 = 321.25

# After extending:
playlist.extend(["Stairway to Heaven", "Purple Haze"])
# playlist = ["Bohemian Rhapsody", "Hotel California", "Imagine", "Sweet Child O' Mine", "Stairway to Heaven", "Purple Haze"]
```

---

## Example: Python Variables, Types, and Basic Operations

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
{{< details "Python's Dynamic Type System" >}}
- **No type declarations needed**: Python infers types automatically
- **Built-in data types**: `str`, `int`, `float`, `bool`, `list`, `dict`
- **Type flexibility**: Variables can be reassigned to different types
- **Runtime type checking**: `type()` function reveals actual types
{{< /details >}}

{{< details "String Operations and F-strings" >}}
- **String methods**: `.split()`, `.lower()`, `.upper()` for transformations
- **F-string formatting**: `f"{variable}"` is modern, readable syntax
- **String slicing**: `student_name.split()[1][0]` chains operations
- **Formatted numbers**: `{gpa_percentage:.1f}` controls decimal places
{{< /details >}}

{{< details "List and Dictionary Operations" >}}
- **List comprehensions**: `[course.upper() for course in courses]` - concise transformation
- **Membership testing**: `"Math" in courses` - readable boolean operations
- **Dictionary methods**: 
  - `.get("Math", 0)` - safe access with default
  - `.values()` and `.items()` for iteration
  - `.keys()` for key access
{{< /details >}}

{{< details "Boolean Logic and Conditionals" >}}
- **Readable operators**: `and`, `or` instead of `&&`, `||`
- **Truthiness**: Empty lists, None, 0 are "falsy"
- **Conditional expressions**: `'Yes' if condition else 'No'` (ternary operator)
- **Chained comparisons**: `60 <= grade <= 100` more readable than `grade >= 60 and grade <= 100`
{{< /details >}}

### Trace Through Example:
```python
# Initial assignments:
student_name = "Alice Johnson"
courses = ["Math", "Physics", "CS"]
grades = {"Math": 95, "Physics": 88, "CS": 92}

# String processing:
first_name = "Alice Johnson".split()[0]  # → "Alice"
last_initial = "Alice Johnson".split()[1][0]  # → "J"
display_name = f"Alice J."  # → "Alice J."

# List operations:
course_count = len(["Math", "Physics", "CS"])  # → 3
total_credits = 3 * 3  # → 9
has_math = "Math" in ["Math", "Physics", "CS"]  # → True

# Dictionary operations:
math_grade = grades.get("Math", 0)  # → 95
average_grade = sum([95, 88, 92]) / 3  # → 91.67
passing_courses = ["Math", "Physics", "CS"]  # All >= 60

# Boolean logic:
is_honor_student = 3.85 >= 3.5 and True  # → True
needs_advising = 3.85 < 2.0 or 9 < 12  # → False or True → True
```

---

## Reading Practice Tips

After studying these Python examples:

1. **Notice dynamic typing**: Python infers types automatically, no declarations needed
2. **Follow list operations**: Understand how lists grow, shrink, and get processed
3. **Practice string formatting**: Master f-strings and format specifiers
4. **Trace data flow**: Follow how data moves through functions and transformations
5. **Experiment with code**: Try modifying values and see how outputs change

These foundational Python patterns form the building blocks of most Python programs. Understanding them will help you read more complex Python code with confidence.
