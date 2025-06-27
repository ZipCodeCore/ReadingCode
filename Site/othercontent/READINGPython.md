# Python Code Reading Practice Examples

This file contains beginner-friendly Python code examples designed to help you practice reading and understanding code. Each example includes guidance on what to notice and understand.

## How to Use This File

1. **Read each example slowly** - Don't rush to understand everything at once
2. **Trace through execution** - Follow the code line by line with sample inputs
3. **Pay attention to the "What to Notice" sections** - These highlight important patterns and concepts
4. **Try to predict output** before looking at the comments
5. **Explain the code out loud** to test your understanding

---

## Example 1: Basic Class with Methods and Properties

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
- **Constructor (`__init__`)**: Python's way of initializing objects, note the `self` parameter
- **Protected Attributes**: `_balance` (single underscore) indicates "internal use" by convention
- **Default Parameters**: `initial_balance=0.0` provides a default value
- **String Formatting**: `f"${amount:.2f}"` formats numbers to 2 decimal places
- **Property Decorator**: `@property` makes `balance` accessible like an attribute but read-only
- **Magic Methods**: `__str__` for user-friendly display, `__repr__` for developer debugging
- **List Methods**: `append()` adds items, `copy()` prevents external modification
- **Early Returns**: Functions return `False` immediately when validation fails
- **Main Guard**: `if __name__ == "__main__":` runs code only when script is executed directly

### Trace Through Example:
```python
account = BankAccount("Alice Johnson", 12345, 100.0)
# Creates: account_holder="Alice Johnson", account_number=12345, _balance=100.0, _transaction_history=[]

account.deposit(50.0)    # _balance becomes 150.0, adds "Deposited $50.00" to history
account.withdraw(25.0)   # _balance becomes 125.0, adds "Withdrew $25.00" to history
print(account.balance)   # Outputs: 125.0 (using the property)
```

---

## Example 2: List Processing with Functions and Comprehensions

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
    
    # Calculate basic statistics
    total_students = len(valid_grades)
    average = sum(valid_grades) / total_students
    highest = max(valid_grades)
    lowest = min(valid_grades)
    
    # Count grades by letter grade
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
    
    print("=" * 40)
    print("GRADE ANALYSIS REPORT")
    print("=" * 40)
    print(f"Total Students: {analysis['count']}")
    print(f"Average Grade: {analysis['average']}")
    print(f"Highest Grade: {analysis['highest']}")
    print(f"Lowest Grade: {analysis['lowest']}")
    print(f"Passing Rate: {analysis['passing_rate']}%")
    
    print("\nGrade Distribution:")
    for letter, count in sorted(analysis['grade_distribution'].items()):
        percentage = count / analysis['count'] * 100
        print(f"  {letter}: {count} students ({percentage:.1f}%)")

# Example usage
if __name__ == "__main__":
    class_grades = [85.5, 92.0, 78.5, 65.0, 88.5, 95.0, 72.5, 55.0, None, 102.0, -5.0]
    results = analyze_student_grades(class_grades)
    display_grade_analysis(results)
```

### What to Notice:
- **Docstrings**: Triple-quoted strings document what functions do
- **Truthiness**: `if not grades:` is more Pythonic than checking `len(grades) == 0`
- **List Comprehensions**: `[grade for grade in grades if condition]` filters and transforms in one line
- **Multiple Conditions**: `0 <= grade <= 100` is a Python-specific chained comparison
- **Built-in Functions**: `sum()`, `max()`, `min()`, `len()` work directly on iterables
- **Nested Functions**: `get_letter_grade()` defined inside for local scope
- **Import Statement**: `from collections import Counter` imports specific functionality
- **Dictionary Return**: Functions can return complex data structures
- **String Multiplication**: `"=" * 40` creates a line of 40 equal signs
- **F-string Formatting**: Different format specifiers (`:2f`, `:.1f`) for precision control

### Trace Through Example:
```python
Input: [85.5, 92.0, 78.5, 65.0, 88.5, 95.0, 72.5, 55.0, None, 102.0, -5.0]
valid_grades: [85.5, 92.0, 78.5, 65.0, 88.5, 95.0, 72.5, 55.0]  # Filtered invalid values
letter_grades: ['B', 'A', 'C', 'D', 'B', 'A', 'C', 'F']
grade_distribution: {'A': 2, 'B': 2, 'C': 2, 'D': 1, 'F': 1}
passing_rate: 87.5% (7 out of 8 students)
```

---

## Example 3: Object-Oriented Design with Inheritance

### Code to Read:
```python
from abc import ABC, abstractmethod
from typing import List, Optional

class Animal(ABC):
    """Abstract base class for all animals."""
    
    def __init__(self, name: str, age: int, species: str):
        self.name = name
        self.age = age
        self.species = species
        self._energy = 100  # Protected attribute
    
    def sleep(self, hours: int = 8) -> None:
        """All animals can sleep to restore energy."""
        energy_restored = min(hours * 10, 100 - self._energy)
        self._energy += energy_restored
        print(f"{self.name} slept for {hours} hours and restored {energy_restored} energy")
    
    @abstractmethod
    def make_sound(self) -> str:
        """Abstract method - each animal makes a different sound."""
        pass
    
    def eat(self, food_type: str = "food") -> None:
        """Default eating behavior - can be overridden."""
        energy_gain = 20
        self._energy = min(self._energy + energy_gain, 100)
        print(f"{self.name} ate {food_type} and gained {energy_gain} energy")
    
    @property
    def energy(self) -> int:
        return self._energy
    
    def __str__(self) -> str:
        return f"{self.name} the {self.species} (Age: {self.age}, Energy: {self._energy})"

class Dog(Animal):
    def __init__(self, name: str, age: int, breed: str, is_trained: bool = False):
        super().__init__(name, age, "Dog")  # Call parent constructor
        self.breed = breed
        self.is_trained = is_trained
        self.tricks: List[str] = []
    
    def make_sound(self) -> str:
        sound = "Woof! Woof!"
        print(f"{self.name} barks: {sound}")
        return sound
    
    def eat(self, food_type: str = "dog food") -> None:
        """Override parent method with dog-specific behavior."""
        super().eat(food_type)  # Call parent method first
        if food_type == "treats":
            print(f"{self.name} is extra excited about treats!")
    
    def fetch(self, item: str = "ball") -> bool:
        """Dog-specific method."""
        if self._energy < 20:
            print(f"{self.name} is too tired to fetch")
            return False
        
        self._energy -= 15
        print(f"{self.name} fetched the {item}!")
        return True
    
    def learn_trick(self, trick: str) -> None:
        """Teach the dog a new trick."""
        if self.is_trained and trick not in self.tricks:
            self.tricks.append(trick)
            print(f"{self.name} learned '{trick}'!")
        elif not self.is_trained:
            print(f"{self.name} needs training first")
        else:
            print(f"{self.name} already knows '{trick}'")

class Cat(Animal):
    def __init__(self, name: str, age: int, is_indoor: bool = True):
        super().__init__(name, age, "Cat")
        self.is_indoor = is_indoor
        self.lives_remaining = 9
    
    def make_sound(self) -> str:
        sound = "Meow!"
        print(f"{self.name} meows: {sound}")
        return sound
    
    def climb(self, location: Optional[str] = None) -> None:
        """Cat-specific method."""
        if self._energy < 10:
            print(f"{self.name} is too tired to climb")
            return
        
        if location is None:
            location = "cat tree" if self.is_indoor else "tree"
        
        self._energy -= 10
        print(f"{self.name} climbed the {location}")
    
    def purr(self) -> None:
        """Cats can purr when content."""
        if self._energy > 50:
            print(f"{self.name} purrs contentedly")
        else:
            print(f"{self.name} is too tired to purr")

# Example usage
if __name__ == "__main__":
    # Create animals
    pets: List[Animal] = [
        Dog("Buddy", 3, "Golden Retriever", is_trained=True),
        Cat("Whiskers", 2, is_indoor=True),
        Dog("Rex", 5, "German Shepherd")
    ]
    
    # Demonstrate polymorphism
    print("All pets making sounds:")
    for pet in pets:
        pet.make_sound()  # Calls the correct implementation for each type
        pet.eat()
        print(f"Energy: {pet.energy}")
        print()
    
    # Demonstrate specific behaviors
    buddy = pets[0]  # This is a Dog
    if isinstance(buddy, Dog):  # Type checking
        buddy.learn_trick("roll over")
        buddy.fetch("frisbee")
```

### What to Notice:
- **Abstract Base Class**: `ABC` and `@abstractmethod` enforce that subclasses implement certain methods
- **Type Hints**: `name: str`, `-> None` help document expected types
- **Super() Calls**: `super().__init__()` and `super().eat()` call parent class methods
- **Default Parameters**: Methods can have optional parameters with defaults
- **List Type Annotation**: `List[str]` indicates a list of strings
- **Optional Type**: `Optional[str]` means parameter can be string or None
- **Property Decorator**: `@property` creates read-only access to private attributes
- **Method Overriding**: Child classes can override parent methods while calling original
- **Isinstance Check**: `isinstance(buddy, Dog)` safely checks object type before using Dog-specific methods
- **Polymorphism**: Same method call (`make_sound()`) behaves differently based on object type
- **Protected Attributes**: `_energy` convention indicates internal use
- **List Methods**: `append()`, membership testing with `in`

### Trace Through Example:
```python
buddy = Dog("Buddy", 3, "Golden Retriever", is_trained=True)
# Creates: name="Buddy", age=3, species="Dog", breed="Golden Retriever", _energy=100, tricks=[]

buddy.make_sound()  # Prints "Buddy barks: Woof! Woof!", returns "Woof! Woof!"
buddy.eat("treats") # Calls parent eat() then adds extra excitement message
buddy.fetch()       # Returns True, reduces energy to 85, prints fetch message
```

---

## Example 4: File Processing with Context Managers and Error Handling

### Code to Read:
```python
import json
import csv
from pathlib import Path
from typing import Dict, List, Any, Optional
from collections import defaultdict
import logging

# Set up logging
logging.basicConfig(level=logging.INFO, format='%(asctime)s - %(levelname)s - %(message)s')
logger = logging.getLogger(__name__)

class DataProcessor:
    """Process various file formats and analyze data."""
    
    def __init__(self, data_directory: str):
        self.data_dir = Path(data_directory)
        self.data_dir.mkdir(exist_ok=True)  # Create directory if it doesn't exist
        self.processed_files: Dict[str, Any] = {}
    
    def read_json_file(self, filename: str) -> Optional[Dict]:
        """Read and parse a JSON file."""
        file_path = self.data_dir / filename
        
        try:
            with open(file_path, 'r', encoding='utf-8') as file:
                data = json.load(file)
                logger.info(f"Successfully loaded JSON file: {filename}")
                return data
        except FileNotFoundError:
            logger.error(f"File not found: {filename}")
            return None
        except json.JSONDecodeError as e:
            logger.error(f"Invalid JSON in {filename}: {e}")
            return None
        except Exception as e:
            logger.error(f"Unexpected error reading {filename}: {e}")
            return None
    
    def read_csv_file(self, filename: str, delimiter: str = ',') -> Optional[List[Dict]]:
        """Read a CSV file and return list of dictionaries."""
        file_path = self.data_dir / filename
        
        try:
            with open(file_path, 'r', encoding='utf-8', newline='') as file:
                # Use DictReader to get dictionaries instead of lists
                reader = csv.DictReader(file, delimiter=delimiter)
                data = list(reader)  # Convert iterator to list
                logger.info(f"Successfully loaded CSV file: {filename} ({len(data)} rows)")
                return data
        except FileNotFoundError:
            logger.error(f"CSV file not found: {filename}")
            return None
        except Exception as e:
            logger.error(f"Error reading CSV {filename}: {e}")
            return None
    
    def analyze_sales_data(self, sales_data: List[Dict]) -> Dict[str, Any]:
        """Analyze sales data and return summary statistics."""
        if not sales_data:
            return {'error': 'No sales data provided'}
        
        # Use defaultdict to avoid key checking
        monthly_sales = defaultdict(float)
        product_sales = defaultdict(float)
        total_revenue = 0
        
        for sale in sales_data:
            try:
                # Extract and validate data
                amount = float(sale.get('amount', 0))
                month = sale.get('month', 'Unknown')
                product = sale.get('product', 'Unknown')
                
                # Accumulate data
                monthly_sales[month] += amount
                product_sales[product] += amount
                total_revenue += amount
                
            except (ValueError, TypeError) as e:
                logger.warning(f"Invalid sale record: {sale} - {e}")
                continue
        
        # Find top performers
        top_month = max(monthly_sales.items(), key=lambda x: x[1]) if monthly_sales else ('None', 0)
        top_product = max(product_sales.items(), key=lambda x: x[1]) if product_sales else ('None', 0)
        
        return {
            'total_revenue': round(total_revenue, 2),
            'total_transactions': len(sales_data),
            'average_transaction': round(total_revenue / len(sales_data), 2) if sales_data else 0,
            'monthly_breakdown': dict(monthly_sales),
            'product_breakdown': dict(product_sales),
            'top_month': {'month': top_month[0], 'revenue': top_month[1]},
            'top_product': {'product': top_product[0], 'revenue': top_product[1]}
        }
    
    def save_analysis(self, analysis: Dict, output_filename: str) -> bool:
        """Save analysis results to a JSON file."""
        output_path = self.data_dir / output_filename
        
        try:
            with open(output_path, 'w', encoding='utf-8') as file:
                json.dump(analysis, file, indent=2, ensure_ascii=False)
                logger.info(f"Analysis saved to: {output_filename}")
                return True
        except Exception as e:
            logger.error(f"Failed to save analysis: {e}")
            return False
    
    def process_files(self, file_patterns: List[str]) -> Dict[str, Any]:
        """Process multiple files and return combined analysis."""
        all_data = []
        
        for pattern in file_patterns:
            # Use glob to find matching files
            matching_files = list(self.data_dir.glob(pattern))
            
            for file_path in matching_files:
                filename = file_path.name
                
                if filename.endswith('.json'):
                    data = self.read_json_file(filename)
                    if data and 'sales' in data:
                        all_data.extend(data['sales'])
                
                elif filename.endswith('.csv'):
                    data = self.read_csv_file(filename)
                    if data:
                        all_data.extend(data)
        
        return self.analyze_sales_data(all_data)

# Example usage
if __name__ == "__main__":
    # Create sample data for demonstration
    processor = DataProcessor("./sample_data")
    
    # Sample sales data
    sample_sales = [
        {'amount': '150.50', 'month': 'January', 'product': 'Widget A'},
        {'amount': '200.00', 'month': 'January', 'product': 'Widget B'},
        {'amount': '175.25', 'month': 'February', 'product': 'Widget A'},
        {'amount': 'invalid', 'month': 'February', 'product': 'Widget C'},  # This will be skipped
        {'amount': '300.00', 'month': 'March', 'product': 'Widget B'},
    ]
    
    # Analyze the data
    analysis = processor.analyze_sales_data(sample_sales)
    
    # Save results
    processor.save_analysis(analysis, "sales_analysis.json")
    
    print("Analysis Results:")
    for key, value in analysis.items():
        print(f"{key}: {value}")
```

### What to Notice:
- **Context Managers**: `with open()` automatically closes files even if errors occur
- **Pathlib**: `Path` objects provide clean file path manipulation
- **Type Hints**: Complex types like `Dict[str, Any]` and `Optional[List[Dict]]`
- **Logging**: Better than print statements for debugging and monitoring
- **Exception Handling**: Multiple `except` blocks catch different error types
- **Defaultdict**: Automatically creates missing keys with default values
- **Dictionary Methods**: `.get()` with defaults, `.items()` for key-value pairs
- **Lambda Functions**: `key=lambda x: x[1]` defines inline sorting functions
- **List Comprehensions**: `list(reader)` converts iterator to list
- **String Methods**: `.endswith()` for file extension checking
- **Glob Patterns**: `*.csv` matches all CSV files in directory
- **Method Chaining**: Multiple operations on same object
- **JSON Handling**: `json.load()` and `json.dump()` with formatting options

### Trace Through Example:
```python
processor = DataProcessor("./sample_data")
# Creates Path object, creates directory if needed

sample_sales = [{'amount': '150.50', 'month': 'January', 'product': 'Widget A'}, ...]
analysis = processor.analyze_sales_data(sample_sales)
# Processes each sale, accumulates in defaultdicts:
# monthly_sales = {'January': 350.50, 'February': 175.25, 'March': 300.00}
# product_sales = {'Widget A': 325.75, 'Widget B': 500.00}
# total_revenue = 825.75
```

---

## Example 5: Web Scraper with Classes and Decorators

### Code to Read:
```python
import time
import requests
from functools import wraps
from typing import List, Dict, Optional, Callable
from dataclasses import dataclass
from datetime import datetime, timedelta

def retry_on_failure(max_retries: int = 3, delay: float = 1.0):
    """Decorator that retries a function on failure."""
    def decorator(func: Callable) -> Callable:
        @wraps(func)
        def wrapper(*args, **kwargs):
            last_exception = None
            
            for attempt in range(max_retries):
                try:
                    return func(*args, **kwargs)
                except Exception as e:
                    last_exception = e
                    if attempt < max_retries - 1:  # Don't sleep on last attempt
                        print(f"Attempt {attempt + 1} failed: {e}. Retrying in {delay}s...")
                        time.sleep(delay)
                    else:
                        print(f"All {max_retries} attempts failed")
            
            raise last_exception
        return wrapper
    return decorator

@dataclass
class NewsArticle:
    """Data class to represent a news article."""
    title: str
    url: str
    publish_date: datetime
    summary: str = ""
    category: str = "General"
    
    def __post_init__(self):
        """Called after initialization to validate data."""
        if not self.title.strip():
            raise ValueError("Title cannot be empty")
        if not self.url.startswith(('http://', 'https://')):
            raise ValueError("URL must be valid")
    
    @property
    def age_in_days(self) -> int:
        """Calculate how many days old this article is."""
        return (datetime.now() - self.publish_date).days
    
    def is_recent(self, days: int = 7) -> bool:
        """Check if article was published within specified days."""
        return self.age_in_days <= days

class NewsAggregator:
    """Aggregate news from multiple sources."""
    
    def __init__(self, sources: List[str], cache_timeout: int = 3600):
        self.sources = sources
        self.cache_timeout = cache_timeout
        self._cache: Dict[str, tuple] = {}  # (data, timestamp)
        self.articles: List[NewsArticle] = []
        
        # Configure session for connection pooling
        self.session = requests.Session()
        self.session.headers.update({
            'User-Agent': 'NewsAggregator/1.0 (Python)'
        })
    
    def _is_cache_valid(self, source: str) -> bool:
        """Check if cached data is still valid."""
        if source not in self._cache:
            return False
        
        data, timestamp = self._cache[source]
        age = time.time() - timestamp
        return age < self.cache_timeout
    
    @retry_on_failure(max_retries=3, delay=2.0)
    def _fetch_from_source(self, source_url: str) -> Dict:
        """Fetch data from a single news source."""
        print(f"Fetching from: {source_url}")
        
        # Check cache first
        if self._is_cache_valid(source_url):
            print(f"Using cached data for {source_url}")
            return self._cache[source_url][0]
        
        # Make HTTP request
        response = self.session.get(source_url, timeout=10)
        response.raise_for_status()  # Raises exception for bad status codes
        
        # Simulate JSON API response
        data = response.json()
        
        # Cache the result
        self._cache[source_url] = (data, time.time())
        
        return data
    
    def fetch_all_articles(self) -> List[NewsArticle]:
        """Fetch articles from all configured sources."""
        all_articles = []
        
        for source in self.sources:
            try:
                data = self._fetch_from_source(source)
                articles = self._parse_articles(data, source)
                all_articles.extend(articles)
                print(f"Fetched {len(articles)} articles from {source}")
                
            except Exception as e:
                print(f"Failed to fetch from {source}: {e}")
                continue  # Continue with other sources
        
        # Remove duplicates based on URL
        seen_urls = set()
        unique_articles = []
        
        for article in all_articles:
            if article.url not in seen_urls:
                unique_articles.append(article)
                seen_urls.add(article.url)
        
        self.articles = unique_articles
        return unique_articles
    
    def _parse_articles(self, data: Dict, source: str) -> List[NewsArticle]:
        """Parse JSON data into NewsArticle objects."""
        articles = []
        
        for item in data.get('articles', []):
            try:
                # Parse date string to datetime object
                date_str = item.get('publishedAt', '')
                publish_date = datetime.fromisoformat(date_str.replace('Z', '+00:00'))
                
                article = NewsArticle(
                    title=item.get('title', '').strip(),
                    url=item.get('url', ''),
                    publish_date=publish_date,
                    summary=item.get('description', ''),
                    category=item.get('category', 'General')
                )
                
                articles.append(article)
                
            except (ValueError, KeyError) as e:
                print(f"Skipping invalid article from {source}: {e}")
                continue
        
        return articles
    
    def get_recent_articles(self, days: int = 7, category: Optional[str] = None) -> List[NewsArticle]:
        """Get recent articles, optionally filtered by category."""
        filtered = [
            article for article in self.articles
            if article.is_recent(days) and (category is None or article.category == category)
        ]
        
        # Sort by publish date (newest first)
        return sorted(filtered, key=lambda x: x.publish_date, reverse=True)
    
    def get_article_stats(self) -> Dict[str, int]:
        """Get statistics about collected articles."""
        if not self.articles:
            return {'total': 0}
        
        # Count articles by category
        category_counts = {}
        for article in self.articles:
            category_counts[article.category] = category_counts.get(article.category, 0) + 1
        
        # Count recent articles
        recent_count = len([a for a in self.articles if a.is_recent()])
        
        return {
            'total': len(self.articles),
            'recent_7_days': recent_count,
            'by_category': category_counts,
            'oldest_days': max(article.age_in_days for article in self.articles),
            'newest_days': min(article.age_in_days for article in self.articles)
        }
    
    def __del__(self):
        """Cleanup when object is destroyed."""
        if hasattr(self, 'session'):
            self.session.close()

# Example usage
if __name__ == "__main__":
    # Sample news sources (in reality these would be real API endpoints)
    sources = [
        "https://api.example-news.com/v1/articles",
        "https://api.another-news.com/latest"
    ]
    
    aggregator = NewsAggregator(sources, cache_timeout=1800)  # 30 minutes cache
    
    try:
        articles = aggregator.fetch_all_articles()
        print(f"\nFetched {len(articles)} unique articles")
        
        recent = aggregator.get_recent_articles(days=3)
        print(f"Recent articles (last 3 days): {len(recent)}")
        
        stats = aggregator.get_article_stats()
        print(f"\nArticle Statistics: {stats}")
        
        # Display first few recent articles
        for article in recent[:3]:
            print(f"\n- {article.title}")
            print(f"  Published: {article.publish_date.strftime('%Y-%m-%d %H:%M')}")
            print(f"  Age: {article.age_in_days} days")
            print(f"  Category: {article.category}")
        
    except Exception as e:
        print(f"Error running aggregator: {e}")
```

### What to Notice:
- **Decorators**: `@retry_on_failure` modifies function behavior without changing the function itself
- **Dataclasses**: `@dataclass` automatically generates `__init__`, `__repr__`, etc.
- **Higher-order Functions**: Decorator returns a function that returns a function
- **Context Management**: Automatic cleanup with `__del__` method
- **Caching Strategy**: Stores data with timestamps to avoid unnecessary requests
- **Session Management**: Reuses HTTP connections for efficiency
- **Exception Propagation**: `raise_for_status()` converts HTTP errors to Python exceptions
- **Set Operations**: Using `set()` for fast duplicate detection
- **Generator Expressions**: List comprehensions with filtering conditions
- **Lambda with Key**: `key=lambda x: x.publish_date` for custom sorting
- **String Methods**: `.strip()`, `.startswith()`, `.replace()` for text processing
- **Date Handling**: Converting ISO strings to datetime objects
- **Default Parameters**: Multiple methods use defaults for flexibility
- **Private Methods**: `_fetch_from_source()` indicates internal implementation

### Trace Through Example:
```python
aggregator = NewsAggregator(["https://api.news.com"], cache_timeout=1800)
# Creates session, empty cache, empty articles list

articles = aggregator.fetch_all_articles()
# For each source:
#   1. Checks cache (empty first time)
#   2. Makes HTTP request with retry decorator
#   3. Parses JSON into NewsArticle objects
#   4. Removes duplicates by URL
#   5. Stores in self.articles

recent = aggregator.get_recent_articles(days=3)
# Filters articles where age_in_days <= 3, sorts by date descending
```

---

## Reading Practice Tips

After studying these examples:

1. **Understand Python idioms**: Notice Pythonic patterns like `if not items:` and list comprehensions
2. **Follow the data flow**: Trace how data transforms through different functions and methods
3. **Recognize design patterns**: Observer decorators, factory methods, data classes
4. **Study error handling**: See how Python handles different exception types gracefully
5. **Notice type hints**: Understand how they make code more readable and maintainable

Remember: Python code emphasizes readability and expressiveness. Focus on understanding the intent and logic flow rather than memorizing syntax.
