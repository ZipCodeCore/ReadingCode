---
title: "Python Control Structures: Loops, Conditionals, and Data Processing"
description: "Practice reading Python code with loops, conditional statements, and data processing patterns"
weight: 20
bookToc: true
---

# Python Control Structures: Loops, Conditionals, and Data Processing

This section focuses on reading Python code that demonstrates control structures in a Pythonic way - emphasizing readability, built-in functions, and elegant data processing patterns.

{{< hint info >}}
**Python Reading Strategy**: Notice how Python's syntax makes control flow very readable. Pay attention to indentation, built-in functions like `enumerate()` and `zip()`, and list comprehensions that replace traditional loops.
{{< /hint >}}

## How to Read Python Control Structures

{{< tabs "approach" >}}
{{< tab "Follow Indentation" >}}
**Python uses indentation for structure** - No braces needed, indentation shows control flow
{{< /tab >}}
{{< tab "Notice Built-ins" >}}  
**Built-in functions simplify loops** - `enumerate()`, `zip()`, `range()` make code cleaner
{{< /tab >}}
{{< tab "Read Comprehensions" >}}
**List/dict comprehensions** - Compact way to transform data, replace many loops
{{< /tab >}}
{{< tab "Watch for Pythonic Patterns" >}}
**Idiomatic Python** - `for item in collection`, `if not list`, truthiness patterns
{{< /tab >}}
{{< /tabs >}}

---

## Example 1: Shopping Cart with Complex Conditional Logic

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
    
    # Number formatting and mathematical operations
    price_per_item_with_tax = (subtotal + tax_amount) / item_count
    rounded_total = round(final_total, 2)
    whole_dollars = int(final_total)
    cents = final_total - whole_dollars
    
    print(f"\n=== Detailed Analysis ===")
    print(f"Price per item (with tax): ${price_per_item_with_tax:.3f}")
    print(f"Rounded total: ${rounded_total}")
    print(f"Whole dollars: ${whole_dollars}")
    print(f"Cents portion: {cents:.2f}")
    
    # Mathematical functions
    import math
    
    sqrt_items = math.sqrt(item_count)
    items_squared = item_count ** 2
    max_value = max(item_count, whole_dollars)
    min_value = min(item_count, whole_dollars)
    absolute_difference = abs(item_count - whole_dollars)
    
    print(f"\n=== Math Operations ===")
    print(f"Square root of items: {sqrt_items:.2f}")
    print(f"Items squared: {items_squared}")
    print(f"Maximum value: {max_value}")
    print(f"Minimum value: {min_value}")
    print(f"Absolute difference: {absolute_difference}")
    
    # String to number conversion with error handling
    price_string = "24.95"
    quantity_string = "7"
    
    try:
        parsed_price = float(price_string)
        parsed_quantity = int(quantity_string)
        combined_value = parsed_price * parsed_quantity
        
        print(f"\n=== String to Number Conversion ===")
        print(f"Parsed price: ${parsed_price}")
        print(f"Parsed quantity: {parsed_quantity}")
        print(f"Combined value: ${combined_value:.2f}")
        
    except ValueError as e:
        print(f"Error converting strings to numbers: {e}")
    
    # Percentage calculations
    discount_percent = 15
    discount_amount = subtotal * (discount_percent / 100)
    discounted_price = subtotal - discount_amount
    savings_ratio = discount_amount / subtotal
    
    print(f"\n=== Discount Analysis ===")
    print(f"Original subtotal: ${subtotal:.2f}")
    print(f"Discount ({discount_percent}%): ${discount_amount:.2f}")
    print(f"After discount: ${discounted_price:.2f}")
    print(f"Savings ratio: {savings_ratio:.1%}")
    
    return {
        'subtotal': subtotal,
        'tax': tax_amount,
        'shipping': shipping_cost,
        'total': final_total,
        'item_count': item_count
    }

# Example usage
if __name__ == "__main__":
    cart_data = process_shopping_data()
    print(f"\nReturned data: {cart_data}")
    print(f"Average cost per item: ${cart_data['total'] / cart_data['item_count']:.2f}")
```

### What to Notice:

{{< details "Python's Readable Conditional Logic" >}}
**Clean if-else structure**:
```python
if total_before_shipping >= shipping_threshold:
    shipping_cost = 0.0
    shipping_message = "Free shipping!"
else:
    shipping_cost = 8.99
    # Complex calculation inside conditional
    needed_for_free = shipping_threshold - total_before_shipping
    shipping_message = f"Add ${needed_for_free:.2f} for free shipping"
```

**F-string formatting with calculations**:
- Variables can be calculated inside f-strings
- `:.2f` formats numbers to 2 decimal places
- `:.1%` automatically converts decimals to percentages
{{< /details >}}

{{< details "Built-in Functions and Error Handling" >}}
**Mathematical functions**:
- `round()`, `max()`, `min()`, `abs()` work directly with numbers
- `math.sqrt()` and `**` operator for exponentiation
- Type conversion: `int()`, `float()` for string parsing

**Exception handling**:
```python
try:
    parsed_price = float(price_string)
    # ... more operations
except ValueError as e:
    print(f"Error converting strings to numbers: {e}")
```
{{< /details >}}

{{< details "Dictionary Return Patterns" >}}
**Structured data return**:
```python
return {
    'subtotal': subtotal,
    'tax': tax_amount,
    'shipping': shipping_cost,
    'total': final_total,
    'item_count': item_count
}
```
- Functions return dictionaries for structured data
- Keys provide self-documenting access to results
- Easier to extend than returning multiple values
{{< /details >}}

### Trace Through Example:
```python
# Initial values:
item_count = 12, unit_price = 15.99, tax_rate = 0.08

# Calculations:
subtotal = 15.99 * 12 = 191.88
tax_amount = 191.88 * 0.08 = 15.35 (rounded)
total_before_shipping = 191.88 + 15.35 = 207.23

# Conditional logic:
if 207.23 >= 50.0:  # True
    shipping_cost = 0.0
    shipping_message = "Free shipping!"

final_total = 207.23 + 0.0 = 207.23
```

---

## Example 2: List Processing with Loops and Comprehensions

### Code to Read:
```python
def analyze_customer_feedback():
    """Demonstrate string operations and list processing with customer feedback."""
    
    # Sample customer feedback data
    reviews = [
        "  EXCELLENT service and fast delivery! Really happy with my purchase.  ",
        "good product, but shipping was slow",
        "Amazing quality! Will definitely buy again. 5 stars!!!",
        "Poor packaging, item arrived damaged :(",
        "Best online store ever! Great customer service.",
        "Product was okay, nothing special"
    ]
    
    print("=== Original Feedback ===")
    for i, review in enumerate(reviews, 1):  # Start numbering at 1
        print(f"{i}. '{review}'")
    
    # String cleaning using list comprehension
    cleaned_reviews = []
    for review in reviews:
        cleaned = review.strip().lower()
        # Remove excessive punctuation
        cleaned = cleaned.replace('!!!', '!').replace('!!', '!')
        cleaned_reviews.append(cleaned)
    
    print(f"\n=== Cleaned Reviews ===")
    for i, review in enumerate(cleaned_reviews, 1):
        print(f"{i}. '{review}'")
    
    # List comprehension for length analysis
    review_lengths = [len(review) for review in cleaned_reviews]
    total_characters = sum(review_lengths)
    longest_review = max(cleaned_reviews, key=len)
    shortest_review = min(cleaned_reviews, key=len)
    
    print(f"\n=== Length Analysis ===")
    print(f"Total reviews: {len(reviews)}")
    print(f"Review lengths: {review_lengths}")
    print(f"Total characters: {total_characters}")
    print(f"Average length: {total_characters / len(reviews):.1f}")
    print(f"Longest: '{longest_review}'")
    print(f"Shortest: '{shortest_review}'")
    
    # Word frequency analysis
    all_words = []
    for review in cleaned_reviews:
        words = review.split()
        all_words.extend(words)
    
    # Count word frequencies using dictionary
    word_counts = {}
    for word in all_words:
        # Remove punctuation for counting
        clean_word = word.strip('.,!:();')
        if clean_word:  # Skip empty strings
            word_counts[clean_word] = word_counts.get(clean_word, 0) + 1
    
    # Find most common words
    sorted_words = sorted(word_counts.items(), key=lambda x: x[1], reverse=True)
    
    print(f"\n=== Word Frequency (Top 10) ===")
    for word, count in sorted_words[:10]:
        print(f"'{word}': {count}")
    
    # Sentiment analysis (simple keyword-based)
    positive_words = ['excellent', 'good', 'amazing', 'great', 'best', 'happy']
    negative_words = ['poor', 'slow', 'damaged', 'bad', 'terrible', 'awful']
    
    sentiment_scores = []
    for review in cleaned_reviews:
        positive_score = sum(1 for word in positive_words if word in review)
        negative_score = sum(1 for word in negative_words if word in review)
        net_sentiment = positive_score - negative_score
        sentiment_scores.append(net_sentiment)
    
    print(f"\n=== Sentiment Analysis ===")
    for i, (review, score) in enumerate(zip(cleaned_reviews, sentiment_scores), 1):
        sentiment = "Positive" if score > 0 else "Negative" if score < 0 else "Neutral"
        print(f"{i}. {sentiment} ({score:+d}): '{review[:50]}...'")
    
    # Statistics
    positive_count = sum(1 for score in sentiment_scores if score > 0)
    negative_count = sum(1 for score in sentiment_scores if score < 0)
    neutral_count = len(sentiment_scores) - positive_count - negative_count
    
    print(f"\n=== Overall Statistics ===")
    print(f"Total reviews: {len(reviews)}")
    print(f"Positive: {positive_count} ({positive_count/len(reviews)*100:.1f}%)")
    print(f"Negative: {negative_count} ({negative_count/len(reviews)*100:.1f}%)")
    print(f"Neutral: {neutral_count} ({neutral_count/len(reviews)*100:.1f}%)")
    print(f"Total unique words: {len(word_counts)}")
    print(f"Average words per review: {len(all_words) / len(reviews):.1f}")
    
    return {
        'reviews': cleaned_reviews,
        'word_counts': word_counts,
        'sentiment_scores': sentiment_scores,
        'stats': {
            'positive': positive_count,
            'negative': negative_count,
            'neutral': neutral_count
        }
    }

# Example usage
if __name__ == "__main__":
    analysis = analyze_customer_feedback()
    print(f"\nMost positive review score: {max(analysis['sentiment_scores'])}")
    print(f"Most negative review score: {min(analysis['sentiment_scores'])}")
```

### What to Notice:

{{< details "Python Loop Patterns and Built-ins" >}}
**enumerate() for indexed loops**:
```python
for i, review in enumerate(reviews, 1):  # Start at 1
    print(f"{i}. '{review}'")
```
- More Pythonic than `for i in range(len(reviews))`
- Automatically provides both index and value

**zip() for parallel iteration**:
```python
for i, (review, score) in enumerate(zip(cleaned_reviews, sentiment_scores), 1):
```
- Combines multiple iterables
- Automatically stops at shortest sequence
{{< /details >}}

{{< details "List Comprehensions and Data Processing" >}}
**List comprehension for transformation**:
```python
review_lengths = [len(review) for review in cleaned_reviews]
```
- More concise than equivalent for loop
- Creates new list from existing data

**Conditional expressions in comprehensions**:
```python
positive_count = sum(1 for score in sentiment_scores if score > 0)
```
- Combines iteration, filtering, and counting
- `sum()` with generator expression for efficiency
{{< /details >}}

{{< details "Dictionary Operations and Frequency Counting" >}}
**Dictionary.get() for safe counting**:
```python
word_counts[clean_word] = word_counts.get(clean_word, 0) + 1
```
- Avoids KeyError when key doesn't exist
- More concise than if/else checking

**Sorting with lambda functions**:
```python
sorted_words = sorted(word_counts.items(), key=lambda x: x[1], reverse=True)
```
- `lambda x: x[1]` sorts by count (second element of tuple)
- `reverse=True` for descending order
{{< /details >}}

{{< details "String Processing Methods" >}}
**String cleaning pipeline**:
```python
cleaned = review.strip().lower()
cleaned = cleaned.replace('!!!', '!').replace('!!', '!')
```
- Method chaining for multiple transformations
- `strip()` removes whitespace, `lower()` normalizes case

**String splitting and joining**:
```python
words = review.split()  # Split on whitespace
clean_word = word.strip('.,!:();')  # Remove punctuation
```
{{< /details >}}

### Trace Through Example:
```python
# Initial data:
reviews = ["  EXCELLENT service...", "good product...", ...]

# Processing first review:
review = "  EXCELLENT service and fast delivery! Really happy..."
cleaned = review.strip().lower()  # "excellent service and fast delivery!..."
words = cleaned.split()  # ["excellent", "service", "and", "fast", ...]

# Sentiment analysis:
positive_words in "excellent service..." → finds "excellent" → +1
negative_words in "excellent service..." → finds none → 0
net_sentiment = 1 - 0 = 1 (Positive)

# Final statistics:
positive_count = sum([1, 0, 1, -1, 1, 0])  # Count scores > 0
# Result: 3 positive reviews out of 6 total
```

---

## Practice Exercises

{{< hint tip >}}
**Reading Exercise 1**: Trace through the shopping cart calculation with `item_count=5`, `unit_price=9.99`. Will shipping be free?

**Reading Exercise 2**: In the feedback analyzer, what happens if you add the word "great" to a review? How does it affect the sentiment score?

**Reading Exercise 3**: Compare the Python list comprehension `[len(review) for review in reviews]` with the equivalent Java code. Which is more readable?

**Reading Exercise 4**: Identify all the places where Python's built-in functions (`enumerate`, `zip`, `sum`, `max`, `min`) simplify the code compared to manual loops.
{{< /hint >}}

{{< button href="/python/fundamentals/" >}}← Previous: Fundamentals{{< /button >}} {{< button href="/python/beginner-basics/" >}}Next: Advanced Examples →{{< /button >}}
