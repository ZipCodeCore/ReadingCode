# Python Beginner Examples: Numbers, Strings, Lists, and Dictionaries

This file contains beginner-friendly Python code examples focused on working with basic data types: numbers, strings, lists, and dictionaries. These examples emphasize fundamental operations and Pythonic patterns.

## How to Use This File

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
    
    # Number conversions and parsing
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
- **Dynamic Typing**: Variables don't need type declarations (`item_count = 12`)
- **F-string Formatting**: `f"${value:.2f}"` for currency formatting with 2 decimal places
- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `**` (exponentiation), `//` (floor division)
- **Built-in Functions**: `round()`, `max()`, `min()`, `abs()` work directly with numbers
- **Math Module**: `import math` for advanced mathematical functions
- **Percentage Formatting**: `{value:.1%}` automatically converts decimal to percentage
- **Exception Handling**: `try-except` for safe string-to-number conversion
- **Conditional Logic**: `if-else` for business logic (shipping calculation)
- **Multiple Assignment**: Returning and accessing dictionary values

### Trace Through Example:
```python
item_count = 12
unit_price = 15.99
tax_rate = 0.08

subtotal = 15.99 * 12 = 191.88
tax_amount = 191.88 * 0.08 = 15.3504
total_before_shipping = 191.88 + 15.35 = 207.23

# total_before_shipping (207.23) >= shipping_threshold (50.0) → True
shipping_cost = 0.0
final_total = 207.23 + 0.0 = 207.23
```

---

## Example 2: String Processing and Text Analysis

### Code to Read:
```python
def analyze_customer_feedback():
    """Demonstrate string operations with customer feedback analysis."""
    
    # Sample customer feedback data
    reviews = [
        "  EXCELLENT service and fast delivery! Really happy with my purchase.  ",
        "good product, but shipping was slow",
        "Amazing quality! Will definitely buy again. 5 stars!!!",
        "Poor packaging, item arrived damaged :(",
        "Best online store ever! Great customer service.",
        "Product was okay, nothing special"
    ]
    
    feedback_email = "customer.support@example.com"
    customer_name = "Sarah Johnson-Smith"
    
    print("=== Original Feedback ===")
    for i, review in enumerate(reviews, 1):
        print(f"{i}. '{review}'")
    
    # String cleaning and normalization
    cleaned_reviews = []
    for review in reviews:
        cleaned = review.strip().lower()
        # Remove excessive punctuation
        cleaned = cleaned.replace('!!!', '!').replace('!!', '!')
        cleaned_reviews.append(cleaned)
    
    print(f"\n=== Cleaned Reviews ===")
    for i, review in enumerate(cleaned_reviews, 1):
        print(f"{i}. '{review}'")
    
    # String length and character analysis
    review_lengths = [len(review) for review in cleaned_reviews]
    total_characters = sum(review_lengths)
    longest_review = max(cleaned_reviews, key=len)
    shortest_review = min(cleaned_reviews, key=len)
    
    print(f"\n=== Length Analysis ===")
    print(f"Total reviews: {len(reviews)}")
    print(f"Review lengths: {review_lengths}")
    print(f"Total characters: {total_characters}")
    print(f"Average length: {total_characters / len(reviews):.1f} characters")
    print(f"Longest review: '{longest_review}' ({len(longest_review)} chars)")
    print(f"Shortest review: '{shortest_review}' ({len(shortest_review)} chars)")
    
    # String searching and pattern matching
    positive_words = ['excellent', 'amazing', 'great', 'best', 'happy', 'good']
    negative_words = ['poor', 'slow', 'damaged', 'bad', 'terrible', 'awful']
    
    sentiment_scores = []
    for review in cleaned_reviews:
        positive_count = sum(1 for word in positive_words if word in review)
        negative_count = sum(1 for word in negative_words if word in review)
        sentiment_score = positive_count - negative_count
        sentiment_scores.append(sentiment_score)
    
    print(f"\n=== Sentiment Analysis ===")
    for i, (review, score) in enumerate(zip(cleaned_reviews, sentiment_scores), 1):
        if score > 0:
            sentiment = "Positive"
        elif score < 0:
            sentiment = "Negative"
        else:
            sentiment = "Neutral"
        print(f"Review {i}: {sentiment} (score: {score})")
    
    # String splitting and word analysis
    all_words = []
    for review in cleaned_reviews:
        # Remove punctuation and split into words
        words = review.replace(',', ' ').replace('.', ' ').replace('!', ' ').replace(':', '').replace('(', '').replace(')', '')
        word_list = words.split()
        all_words.extend(word_list)
    
    # Word frequency counting
    word_counts = {}
    for word in all_words:
        if len(word) > 2:  # Only count words longer than 2 characters
            word_counts[word] = word_counts.get(word, 0) + 1
    
    # Find most common words
    sorted_words = sorted(word_counts.items(), key=lambda x: x[1], reverse=True)
    
    print(f"\n=== Word Analysis ===")
    print(f"Total words: {len(all_words)}")
    print(f"Unique words (>2 chars): {len(word_counts)}")
    print(f"Top 5 words:")
    for word, count in sorted_words[:5]:
        print(f"  '{word}': {count} times")
    
    # String formatting and template creation
    customer_first_name = customer_name.split()[0]
    customer_last_name = customer_name.split()[-1]
    initials = ''.join([name[0] for name in customer_name.split()])
    
    # Email processing
    email_username = feedback_email.split('@')[0]
    email_domain = feedback_email.split('@')[1]
    
    print(f"\n=== Customer Information ===")
    print(f"Full name: {customer_name}")
    print(f"First name: {customer_first_name}")
    print(f"Last name: {customer_last_name}")
    print(f"Initials: {initials}")
    print(f"Email username: {email_username}")
    print(f"Email domain: {email_domain}")
    
    # String replacement and masking
    masked_email = feedback_email.replace(email_username, '*' * len(email_username))
    formal_name = customer_name.replace('-', ' ')
    
    print(f"Masked email: {masked_email}")
    print(f"Formal name: {formal_name}")
    
    # Generate summary report
    positive_reviews = sum(1 for score in sentiment_scores if score > 0)
    negative_reviews = sum(1 for score in sentiment_scores if score < 0)
    neutral_reviews = len(sentiment_scores) - positive_reviews - negative_reviews
    
    report = f"""
CUSTOMER FEEDBACK SUMMARY
========================
Customer: {customer_name}
Email: {feedback_email}
Total Reviews Analyzed: {len(reviews)}

Sentiment Breakdown:
- Positive: {positive_reviews} reviews
- Negative: {negative_reviews} reviews  
- Neutral: {neutral_reviews} reviews

Text Statistics:
- Total Words: {len(all_words)}
- Average Review Length: {total_characters / len(reviews):.1f} characters
- Most Common Word: '{sorted_words[0][0]}' ({sorted_words[0][1]} times)

Top Concerns: {', '.join([word for word, count in sorted_words[:3]])}
    """.strip()
    
    print(f"\n=== Generated Report ===")
    print(report)
    
    return {
        'total_reviews': len(reviews),
        'positive_count': positive_reviews,
        'negative_count': negative_reviews,
        'word_count': len(all_words),
        'top_words': sorted_words[:5]
    }

# Example usage
if __name__ == "__main__":
    analysis_result = analyze_customer_feedback()
    print(f"\nAnalysis summary: {analysis_result}")
```

### What to Notice:
- **String Methods**: `.strip()`, `.lower()`, `.replace()`, `.split()` for text processing
- **List Comprehensions**: `[len(review) for review in cleaned_reviews]` creates new lists
- **Enumerate with Start**: `enumerate(reviews, 1)` starts counting from 1
- **Key Functions**: `max(items, key=len)` finds item with maximum length
- **Generator Expressions**: `sum(1 for word in positive_words if word in review)` for counting
- **Dictionary Operations**: `.get(key, default)` for safe counting
- **String Concatenation**: `''.join([...])` efficiently combines strings
- **Lambda Functions**: `key=lambda x: x[1]` for custom sorting
- **String Slicing**: Accessing parts of strings with `[0]`, `[-1]`, `[:3]`
- **Multi-line Strings**: Triple quotes for formatted text blocks

### Trace Through Example:
```python
review = "  EXCELLENT service and fast delivery! Really happy with my purchase.  "
cleaned = review.strip().lower()
# cleaned = "excellent service and fast delivery! really happy with my purchase."

customer_name = "Sarah Johnson-Smith"
words = customer_name.split()  # ["Sarah", "Johnson-Smith"]
first_name = words[0]          # "Sarah"
last_name = words[-1]          # "Johnson-Smith"
initials = ''.join([name[0] for name in words])  # "SJ"
```

---

## Example 3: List Operations and Data Management

### Code to Read:
```python
def manage_playlist():
    """Demonstrate list operations with a music playlist manager."""
    
    # Creating and initializing lists
    song_titles = [
        "Bohemian Rhapsody", "Hotel California", "Stairway to Heaven",
        "Sweet Child O' Mine", "Smells Like Teen Spirit"
    ]
    
    artists = [
        "Queen", "Eagles", "Led Zeppelin", "Guns N' Roses", "Nirvana"
    ]
    
    durations = [355, 391, 482, 356, 301]  # in seconds
    ratings = [5, 5, 5, 4, 4]
    years = [1975, 1976, 1971, 1987, 1991]
    
    print("=== Original Playlist ===")
    display_playlist(song_titles, artists, durations, ratings, years)
    
    # List operations and modifications
    print(f"\nPlaylist has {len(song_titles)} songs")
    print(f"Is playlist empty? {len(song_titles) == 0}")
    
    # Adding new songs
    song_titles.append("Imagine")
    artists.append("John Lennon")
    durations.append(183)
    ratings.append(5)
    years.append(1971)
    
    print(f"\n=== After Adding 'Imagine' ===")
    print(f"Now has {len(song_titles)} songs")
    print(f"Latest addition: {song_titles[-1]} by {artists[-1]}")
    
    # Inserting at specific position
    song_titles.insert(2, "Yesterday")
    artists.insert(2, "The Beatles")
    durations.insert(2, 125)
    ratings.insert(2, 5)
    years.insert(2, 1965)
    
    print(f"\n=== After Inserting 'Yesterday' at position 3 ===")
    display_playlist(song_titles, artists, durations, ratings, years)
    
    # Searching and finding items
    search_song = "Hotel California"
    if search_song in song_titles:
        index = song_titles.index(search_song)
        print(f"\n=== Found '{search_song}' ===")
        print(f"Position: {index + 1}")
        print(f"Artist: {artists[index]}")
        print(f"Duration: {format_duration(durations[index])}")
        print(f"Rating: {ratings[index]}/5 stars")
        print(f"Year: {years[index]}")
    else:
        print(f"'{search_song}' not found in playlist")
    
    # List slicing and subsets
    first_three_songs = song_titles[:3]
    last_two_songs = song_titles[-2:]
    middle_songs = song_titles[2:5]
    every_other_song = song_titles[::2]
    
    print(f"\n=== List Slicing ===")
    print(f"First 3 songs: {first_three_songs}")
    print(f"Last 2 songs: {last_two_songs}")
    print(f"Middle songs (3-5): {middle_songs}")
    print(f"Every other song: {every_other_song}")
    
    # Calculating statistics
    total_duration = sum(durations)
    average_duration = total_duration / len(durations)
    longest_song_index = durations.index(max(durations))
    shortest_song_index = durations.index(min(durations))
    
    average_rating = sum(ratings) / len(ratings)
    five_star_count = ratings.count(5)
    
    print(f"\n=== Playlist Statistics ===")
    print(f"Total duration: {format_duration(total_duration)}")
    print(f"Average song length: {format_duration(int(average_duration))}")
    print(f"Longest song: {song_titles[longest_song_index]} ({format_duration(durations[longest_song_index])})")
    print(f"Shortest song: {song_titles[shortest_song_index]} ({format_duration(durations[shortest_song_index])})")
    print(f"Average rating: {average_rating:.1f}/5")
    print(f"Five-star songs: {five_star_count}")
    
    # Filtering and creating new lists
    classic_songs = []  # Songs from before 1980
    long_songs = []     # Songs longer than 5 minutes (300 seconds)
    top_rated = []      # 5-star songs
    
    for i in range(len(song_titles)):
        if years[i] < 1980:
            classic_songs.append(song_titles[i])
        
        if durations[i] > 300:
            long_songs.append(song_titles[i])
        
        if ratings[i] == 5:
            top_rated.append(song_titles[i])
    
    print(f"\n=== Filtered Lists ===")
    print(f"Classic songs (before 1980): {classic_songs}")
    print(f"Long songs (>5 minutes): {long_songs}")
    print(f"Top rated songs (5 stars): {top_rated}")
    
    # List comprehensions for filtering
    modern_songs = [song for i, song in enumerate(song_titles) if years[i] >= 1980]
    short_titles = [song for song in song_titles if len(song) <= 15]
    high_rated_artists = [artists[i] for i, rating in enumerate(ratings) if rating >= 4]
    
    print(f"\n=== List Comprehensions ===")
    print(f"Modern songs (1980+): {modern_songs}")
    print(f"Short titles (≤15 chars): {short_titles}")
    print(f"High-rated artists: {list(set(high_rated_artists))}")  # Remove duplicates
    
    # Removing items
    song_to_remove = "Smells Like Teen Spirit"
    if song_to_remove in song_titles:
        index = song_titles.index(song_to_remove)
        removed_song = song_titles.pop(index)
        removed_artist = artists.pop(index)
        removed_duration = durations.pop(index)
        removed_rating = ratings.pop(index)
        removed_year = years.pop(index)
        
        print(f"\n=== Removed Song ===")
        print(f"Removed: {removed_song} by {removed_artist}")
        print(f"Duration: {format_duration(removed_duration)}")
        print(f"Rating: {removed_rating}/5, Year: {removed_year}")
    
    print(f"\nPlaylist now has {len(song_titles)} songs")
    
    # Sorting and organizing
    # Create combined data for sorting
    combined_data = list(zip(song_titles, artists, durations, ratings, years))
    
    # Sort by year
    sorted_by_year = sorted(combined_data, key=lambda x: x[4])
    
    # Sort by rating (highest first), then by duration
    sorted_by_rating = sorted(combined_data, key=lambda x: (-x[3], -x[2]))
    
    print(f"\n=== Sorted by Year ===")
    for song, artist, duration, rating, year in sorted_by_year:
        print(f"{year}: {song} by {artist}")
    
    print(f"\n=== Sorted by Rating & Duration ===")
    for song, artist, duration, rating, year in sorted_by_rating[:3]:
        print(f"{rating}⭐ {song} by {artist} ({format_duration(duration)})")
    
    # Creating a final summary
    summary_stats = {
        'total_songs': len(song_titles),
        'total_duration': total_duration,
        'average_rating': average_rating,
        'top_song': song_titles[0],  # First in current list
        'artists_count': len(set(artists))
    }
    
    return summary_stats

def format_duration(seconds):
    """Convert seconds to MM:SS format."""
    minutes = seconds // 60
    remaining_seconds = seconds % 60
    return f"{minutes}:{remaining_seconds:02d}"

def display_playlist(titles, artists, durations, ratings, years):
    """Display playlist in a formatted table."""
    print("Track  Song Title               Artist            Duration  Rating  Year")
    print("-" * 70)
    
    for i in range(len(titles)):
        print(f"{i+1:2d}.   {titles[i]:<25} {artists[i]:<15} {format_duration(durations[i]):>7} "
              f"{ratings[i]:>4}/5   {years[i]}")

# Example usage
if __name__ == "__main__":
    playlist_stats = manage_playlist()
    print(f"\n=== Final Summary ===")
    for key, value in playlist_stats.items():
        print(f"{key}: {value}")
```

### What to Notice:
- **List Indexing**: `list[0]` (first), `list[-1]` (last), `list[index]` (specific position)
- **List Methods**: `.append()`, `.insert()`, `.pop()`, `.index()`, `.count()` for modifications
- **List Slicing**: `list[:3]`, `list[-2:]`, `list[2:5]`, `list[::2]` for subsets
- **Built-in Functions**: `len()`, `sum()`, `max()`, `min()` work directly with lists
- **Membership Testing**: `item in list` checks if element exists
- **Parallel Lists**: Managing related data across multiple lists with same indices
- **List Comprehensions**: `[expr for item in list if condition]` for filtering/transforming
- **Enumerate**: `enumerate(list)` provides both index and value
- **Zip Function**: `zip(list1, list2, list3)` combines multiple lists
- **Lambda Functions**: `key=lambda x: x[4]` for custom sorting

### Trace Through Example:
```python
song_titles = ["Song A", "Song B", "Song C"]
durations = [200, 300, 250]

song_titles.append("Song D")     # ["Song A", "Song B", "Song C", "Song D"]
song_titles.insert(1, "Song X")  # ["Song A", "Song X", "Song B", "Song C", "Song D"]

first_two = song_titles[:2]      # ["Song A", "Song X"]
last_song = song_titles[-1]      # "Song D"

index = song_titles.index("Song B")  # index = 2
removed = song_titles.pop(2)         # removed = "Song B"
# song_titles is now ["Song A", "Song X", "Song C", "Song D"]
```

---

## Example 4: Dictionary Operations and Data Analysis

### Code to Read:
```python
def analyze_restaurant_orders():
    """Demonstrate dictionary operations with restaurant order analysis."""
    
    # Create sample order data using dictionaries
    menu_items = {
        'burger': 12.99,
        'pizza': 15.50,
        'salad': 9.75,
        'pasta': 13.25,
        'sandwich': 8.99,
        'soup': 6.50,
        'fries': 4.99,
        'drink': 2.99
    }
    
    # Order tracking dictionaries
    orders_today = {
        'burger': 25,
        'pizza': 18,
        'salad': 12,
        'pasta': 22,
        'sandwich': 15,
        'soup': 8,
        'fries': 35,
        'drink': 45
    }
    
    customer_ratings = {
        'burger': [5, 4, 5, 3, 4, 5, 4],
        'pizza': [4, 5, 4, 4, 3, 5],
        'salad': [5, 5, 4, 5, 4],
        'pasta': [4, 3, 4, 5, 4, 4],
        'sandwich': [3, 4, 4, 3, 4],
        'soup': [5, 4, 5, 5],
        'fries': [4, 4, 3, 4, 5, 4],
        'drink': [4, 3, 4, 4, 3, 4, 3]
    }
    
    print("=== Restaurant Menu ===")
    display_menu(menu_items)
    
    print(f"\n=== Today's Order Summary ===")
    print(f"Total menu items: {len(menu_items)}")
    print(f"Items ordered today: {len(orders_today)}")
    print(f"Menu has ratings: {len(customer_ratings)} items")
    
    # Calculate revenue for each item
    item_revenues = {}
    for item in menu_items:
        if item in orders_today:
            revenue = menu_items[item] * orders_today[item]
            item_revenues[item] = revenue
        else:
            item_revenues[item] = 0.0
    
    print(f"\n=== Revenue Analysis ===")
    for item, revenue in item_revenues.items():
        orders = orders_today.get(item, 0)
        price = menu_items[item]
        print(f"{item.capitalize():12} | {orders:2d} orders | ${price:5.2f} each | ${revenue:6.2f} total")
    
    # Find best and worst performers
    total_revenue = sum(item_revenues.values())
    total_orders = sum(orders_today.values())
    
    best_selling_item = max(orders_today, key=orders_today.get)
    highest_revenue_item = max(item_revenues, key=item_revenues.get)
    
    print(f"\n=== Performance Highlights ===")
    print(f"Total revenue today: ${total_revenue:.2f}")
    print(f"Total orders: {total_orders}")
    print(f"Average order value: ${total_revenue / total_orders:.2f}")
    print(f"Best selling item: {best_selling_item} ({orders_today[best_selling_item]} orders)")
    print(f"Highest revenue item: {highest_revenue_item} (${item_revenues[highest_revenue_item]:.2f})")
    
    # Calculate average ratings
    average_ratings = {}
    for item, ratings_list in customer_ratings.items():
        if ratings_list:  # Check if list is not empty
            average_rating = sum(ratings_list) / len(ratings_list)
            average_ratings[item] = average_rating
    
    # Sort items by rating
    sorted_by_rating = sorted(average_ratings.items(), key=lambda x: x[1], reverse=True)
    
    print(f"\n=== Customer Ratings ===")
    for item, rating in sorted_by_rating:
        rating_count = len(customer_ratings[item])
        stars = "⭐" * int(rating)
        print(f"{item.capitalize():12} | {rating:.1f}/5 {stars} ({rating_count} reviews)")
    
    # Create performance categories
    high_performers = {}   # High sales AND high ratings
    underperformers = {}   # Low sales OR low ratings
    premium_items = {}     # High price items
    
    for item in menu_items:
        price = menu_items[item]
        orders = orders_today.get(item, 0)
        rating = average_ratings.get(item, 0)
        
        # Categorize items
        if orders >= 20 and rating >= 4.0:
            high_performers[item] = {'orders': orders, 'rating': rating, 'price': price}
        
        if orders < 15 or rating < 4.0:
            underperformers[item] = {'orders': orders, 'rating': rating, 'price': price}
        
        if price >= 12.0:
            premium_items[item] = {'orders': orders, 'rating': rating, 'price': price}
    
    print(f"\n=== Performance Categories ===")
    print(f"High performers (20+ orders, 4+ rating): {list(high_performers.keys())}")
    print(f"Underperformers (<15 orders or <4 rating): {list(underperformers.keys())}")
    print(f"Premium items ($12+): {list(premium_items.keys())}")
    
    # Dictionary manipulation and updates
    print(f"\n=== Menu Updates ===")
    
    # Add new item
    new_item = 'dessert'
    menu_items[new_item] = 7.99
    orders_today[new_item] = 0  # No orders yet today
    customer_ratings[new_item] = []  # No ratings yet
    
    print(f"Added new item: {new_item} (${menu_items[new_item]})")
    
    # Update existing price
    old_price = menu_items['soup']
    menu_items['soup'] = 7.25
    print(f"Updated soup price: ${old_price} → ${menu_items['soup']}")
    
    # Remove an item
    if 'fries' in menu_items:
        removed_price = menu_items.pop('fries')
        removed_orders = orders_today.pop('fries', 0)
        removed_ratings = customer_ratings.pop('fries', [])
        print(f"Removed fries: was ${removed_price}, had {removed_orders} orders")
    
    # Create summary report
    summary_data = {
        'menu_size': len(menu_items),
        'total_revenue': total_revenue,
        'total_orders': total_orders,
        'average_order_value': total_revenue / total_orders,
        'top_item': highest_revenue_item,
        'best_rated': sorted_by_rating[0][0] if sorted_by_rating else 'none',
        'items_needing_attention': len(underperformers)
    }
    
    # Advanced dictionary operations
    # Filter dictionaries based on conditions
    expensive_items = {item: price for item, price in menu_items.items() if price > 10.0}
    popular_items = {item: orders for item, orders in orders_today.items() if orders > 20}
    
    # Merge dictionaries with item details
    item_details = {}
    for item in menu_items:
        item_details[item] = {
            'price': menu_items.get(item, 0),
            'orders': orders_today.get(item, 0),
            'revenue': item_revenues.get(item, 0),
            'rating': average_ratings.get(item, 0),
            'review_count': len(customer_ratings.get(item, []))
        }
    
    print(f"\n=== Expensive Items (>$10) ===")
    for item, price in expensive_items.items():
        print(f"{item}: ${price}")
    
    print(f"\n=== Popular Items (>20 orders) ===")
    for item, orders in popular_items.items():
        print(f"{item}: {orders} orders")
    
    print(f"\n=== Complete Item Details ===")
    for item, details in list(item_details.items())[:3]:  # Show first 3 items
        print(f"{item}:")
        for key, value in details.items():
            print(f"  {key}: {value}")
    
    return summary_data

def display_menu(menu_dict):
    """Display menu items in a formatted way."""
    print("Item          Price")
    print("-" * 20)
    for item, price in menu_dict.items():
        print(f"{item.capitalize():<12} ${price:5.2f}")

# Example usage
if __name__ == "__main__":
    restaurant_summary = analyze_restaurant_orders()
    
    print(f"\n=== Daily Summary Report ===")
    for metric, value in restaurant_summary.items():
        print(f"{metric.replace('_', ' ').title()}: {value}")
```

### What to Notice:
- **Dictionary Creation**: `{'key': value, 'key2': value2}` syntax for initialization
- **Key-Value Access**: `dict[key]`, `dict.get(key, default)` for safe access
- **Dictionary Methods**: `.keys()`, `.values()`, `.items()` for iteration
- **Membership Testing**: `key in dict` checks if key exists
- **Dictionary Modification**: `dict[key] = value`, `dict.pop(key)` for updates
- **Max/Min with Key**: `max(dict, key=dict.get)` finds key with maximum value
- **Dictionary Comprehensions**: `{k: v for k, v in dict.items() if condition}`
- **Nested Dictionaries**: Dictionaries containing other dictionaries as values
- **Multiple Dictionary Operations**: Working with related dictionaries
- **Lambda with Dictionaries**: Custom sorting and filtering operations

### Trace Through Example:
```python
menu_items = {'burger': 12.99, 'pizza': 15.50}
orders_today = {'burger': 25, 'pizza': 18}

# Calculate revenue
item_revenues = {}
for item in menu_items:
    if item in orders_today:
        revenue = menu_items[item] * orders_today[item]  # 12.99 * 25 = 324.75
        item_revenues[item] = revenue

# item_revenues = {'burger': 324.75, 'pizza': 279.0}

best_selling = max(orders_today, key=orders_today.get)  # 'burger' (25 > 18)
highest_revenue = max(item_revenues, key=item_revenues.get)  # 'burger' (324.75 > 279.0)
```

---

## Example 5: Integrated Data Processing

### Code to Read:
```python
def process_library_system():
    """Demonstrate integrated use of numbers, strings, lists, and dictionaries."""
    
    # Library book data using multiple data structures
    books = [
        "To Kill a Mockingbird", "1984", "Pride and Prejudice", 
        "The Great Gatsby", "Harry Potter", "Lord of the Rings"
    ]
    
    authors = [
        "Harper Lee", "George Orwell", "Jane Austen",
        "F. Scott Fitzgerald", "J.K. Rowling", "J.R.R. Tolkien"
    ]
    
    publication_years = [1960, 1949, 1813, 1925, 1997, 1954]
    page_counts = [376, 328, 432, 180, 309, 1216]
    ratings = [4.8, 4.6, 4.4, 4.2, 4.7, 4.9]
    
    # Checkout tracking
    checkout_data = {
        "To Kill a Mockingbird": {"checked_out": True, "due_date": "2024-07-15", "borrower": "Alice Johnson"},
        "1984": {"checked_out": False, "due_date": None, "borrower": None},
        "Pride and Prejudice": {"checked_out": True, "due_date": "2024-07-10", "borrower": "Bob Smith"},
        "The Great Gatsby": {"checked_out": False, "due_date": None, "borrower": None},
        "Harry Potter": {"checked_out": True, "due_date": "2024-07-20", "borrower": "Carol Davis"},
        "Lord of the Rings": {"checked_out": False, "due_date": None, "borrower": None}
    }
    
    # Library statistics
    late_fees = {"Alice Johnson": 2.50, "Bob Smith": 0.0, "Carol Davis": 1.25}
    membership_types = {"Alice Johnson": "premium", "Bob Smith": "standard", "Carol Davis": "student"}
    
    print("=== Library Catalog ===")
    display_catalog(books, authors, publication_years, page_counts, ratings)
    
    # Process checkout information
    checked_out_books = []
    available_books = []
    overdue_books = []
    
    current_date = "2024-07-12"  # Simulated current date
    
    for book in books:
        checkout_info = checkout_data[book]
        if checkout_info["checked_out"]:
            checked_out_books.append(book)
            # Check if overdue (simplified date comparison)
            due_date = checkout_info["due_date"]
            if due_date and due_date < current_date:
                overdue_books.append(book)
        else:
            available_books.append(book)
    
    print(f"\n=== Checkout Status (as of {current_date}) ===")
    print(f"Total books: {len(books)}")
    print(f"Checked out: {len(checked_out_books)}")
    print(f"Available: {len(available_books)}")
    print(f"Overdue: {len(overdue_books)}")
    
    print(f"\nAvailable books: {available_books}")
    print(f"Overdue books: {overdue_books}")
    
    # Analyze book characteristics
    total_pages = sum(page_counts)
    average_pages = total_pages / len(page_counts)
    longest_book_index = page_counts.index(max(page_counts))
    shortest_book_index = page_counts.index(min(page_counts))
    
    average_rating = sum(ratings) / len(ratings)
    highest_rated_index = ratings.index(max(ratings))
    
    # Calculate age of books
    current_year = 2024
    book_ages = [current_year - year for year in publication_years]
    oldest_book_index = book_ages.index(max(book_ages))
    newest_book_index = book_ages.index(min(book_ages))
    
    print(f"\n=== Book Statistics ===")
    print(f"Total pages in collection: {total_pages:,}")
    print(f"Average pages per book: {average_pages:.0f}")
    print(f"Longest book: {books[longest_book_index]} ({page_counts[longest_book_index]} pages)")
    print(f"Shortest book: {books[shortest_book_index]} ({page_counts[shortest_book_index]} pages)")
    print(f"Highest rated: {books[highest_rated_index]} ({ratings[highest_rated_index]}/5)")
    print(f"Average rating: {average_rating:.2f}/5")
    print(f"Oldest book: {books[oldest_book_index]} ({book_ages[oldest_book_index]} years old)")
    print(f"Newest book: {books[newest_book_index]} ({book_ages[newest_book_index]} years old)")
    
    # Process borrower information
    active_borrowers = set()
    borrower_books = {}
    
    for book, checkout_info in checkout_data.items():
        if checkout_info["checked_out"]:
            borrower = checkout_info["borrower"]
            active_borrowers.add(borrower)
            
            if borrower not in borrower_books:
                borrower_books[borrower] = []
            borrower_books[borrower].append(book)
    
    print(f"\n=== Borrower Analysis ===")
    print(f"Active borrowers: {len(active_borrowers)}")
    
    for borrower in active_borrowers:
        books_borrowed = borrower_books[borrower]
        membership = membership_types.get(borrower, "unknown")
        fees = late_fees.get(borrower, 0.0)
        
        print(f"\n{borrower} ({membership} member):")
        print(f"  Books checked out: {len(books_borrowed)}")
        for book in books_borrowed:
            due_date = checkout_data[book]["due_date"]
            status = "OVERDUE" if book in overdue_books else "On time"
            print(f"    - {book} (due: {due_date}) [{status}]")
        print(f"  Outstanding fees: ${fees:.2f}")
    
    # Create recommendation system based on ratings and availability
    # Filter for highly rated available books
    recommendations = []
    for i, book in enumerate(books):
        if book in available_books and ratings[i] >= 4.5:
            recommendations.append({
                'title': book,
                'author': authors[i],
                'rating': ratings[i],
                'pages': page_counts[i],
                'year': publication_years[i]
            })
    
    # Sort recommendations by rating
    recommendations.sort(key=lambda x: x['rating'], reverse=True)
    
    print(f"\n=== Recommended Available Books (Rating ≥ 4.5) ===")
    for rec in recommendations:
        print(f"{rec['title']} by {rec['author']}")
        print(f"  Rating: {rec['rating']}/5 | Pages: {rec['pages']} | Year: {rec['year']}")
    
    # Generate financial summary
    total_fees_owed = sum(late_fees.values())
    premium_members = len([m for m in membership_types.values() if m == "premium"])
    standard_members = len([m for m in membership_types.values() if m == "standard"])
    student_members = len([m for m in membership_types.values() if m == "student"])
    
    # Calculate potential revenue based on membership
    membership_rates = {"premium": 50.0, "standard": 25.0, "student": 15.0}
    annual_revenue = 0
    for member, membership_type in membership_types.items():
        annual_revenue += membership_rates.get(membership_type, 0)
    
    print(f"\n=== Financial Summary ===")
    print(f"Outstanding late fees: ${total_fees_owed:.2f}")
    print(f"Membership breakdown:")
    print(f"  Premium members: {premium_members} (${premium_members * membership_rates['premium']:.2f})")
    print(f"  Standard members: {standard_members} (${standard_members * membership_rates['standard']:.2f})")
    print(f"  Student members: {student_members} (${student_members * membership_rates['student']:.2f})")
    print(f"Total annual membership revenue: ${annual_revenue:.2f}")
    
    # Create comprehensive report
    library_report = {
        'catalog_size': len(books),
        'checkout_rate': len(checked_out_books) / len(books) * 100,
        'overdue_count': len(overdue_books),
        'average_rating': average_rating,
        'total_pages': total_pages,
        'active_borrowers': len(active_borrowers),
        'outstanding_fees': total_fees_owed,
        'annual_revenue': annual_revenue,
        'recommendations_available': len(recommendations)
    }
    
    # Generate text summary
    summary_text = f"""
LIBRARY SYSTEM DAILY REPORT
===========================
Collection: {library_report['catalog_size']} books with {library_report['total_pages']:,} total pages
Checkout Rate: {library_report['checkout_rate']:.1f}% of collection currently borrowed
Overdue Items: {library_report['overdue_count']} books need immediate attention
Member Activity: {library_report['active_borrowers']} borrowers with books checked out
Financial Status: ${library_report['outstanding_fees']:.2f} in late fees, ${library_report['annual_revenue']:.2f} annual revenue
Quality: Average book rating is {library_report['average_rating']:.2f}/5 stars
Recommendations: {library_report['recommendations_available']} highly-rated books available for checkout
    """.strip()
    
    print(f"\n{summary_text}")
    
    return library_report

def display_catalog(titles, authors, years, pages, ratings):
    """Display the library catalog in a formatted table."""
    print("Title                    Author              Year   Pages  Rating")
    print("-" * 65)
    
    for i in range(len(titles)):
        print(f"{titles[i]:<24} {authors[i]:<18} {years[i]:4d} {pages[i]:5d}  {ratings[i]:.1f}/5")

# Example usage
if __name__ == "__main__":
    library_stats = process_library_system()
    
    print(f"\n=== Final System Metrics ===")
    for key, value in library_stats.items():
        formatted_key = key.replace('_', ' ').title()
        if isinstance(value, float):
            print(f"{formatted_key}: {value:.2f}")
        else:
            print(f"{formatted_key}: {value}")
```

### What to Notice:
- **Multi-Structure Integration**: Using lists, dictionaries, and sets together effectively
- **Parallel Data Management**: Maintaining related data across multiple structures with consistent indexing
- **Complex Data Processing**: Converting between different data representations
- **Statistical Calculations**: Computing averages, totals, and percentages from multiple sources
- **Filtering and Sorting**: Creating derived datasets based on multiple criteria
- **String Processing**: Date comparisons and text formatting
- **Dictionary Nesting**: Complex data structures with dictionaries containing dictionaries
- **Set Operations**: Using sets for unique value tracking
- **List Comprehensions with Conditions**: Advanced filtering patterns
- **Data Validation**: Checking for existence and handling missing data safely

### Trace Through Example:
```python
# Processing checkout data
books = ["Book A", "Book B", "Book C"]
checkout_data = {
    "Book A": {"checked_out": True, "due_date": "2024-07-10"},
    "Book B": {"checked_out": False, "due_date": None},
    "Book C": {"checked_out": True, "due_date": "2024-07-15"}
}

checked_out_books = []
for book in books:
    if checkout_data[book]["checked_out"]:
        checked_out_books.append(book)

# checked_out_books = ["Book A", "Book C"]

# Date comparison (simplified)
current_date = "2024-07-12"
overdue_books = []
for book in checked_out_books:
    due_date = checkout_data[book]["due_date"]
    if due_date and due_date < current_date:  # "2024-07-10" < "2024-07-12"
        overdue_books.append(book)

# overdue_books = ["Book A"]
```

---

## Reading Practice Tips

After studying these beginner examples:

1. **Follow data transformations**: Trace how data changes as it moves through different operations
2. **Understand data structure choices**: Notice when to use lists vs dictionaries vs sets
3. **Practice method chaining**: Recognize how operations can be combined efficiently
4. **Master iteration patterns**: Different loop styles serve different purposes
5. **Read error handling**: Understand how Python prevents and manages errors

Remember: These examples demonstrate fundamental patterns you'll see in most Python programs. Focus on understanding how different data types work together to solve real problems.
