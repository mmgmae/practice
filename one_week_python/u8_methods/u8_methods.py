# METHODS
# methods are functions that 'live' on objects
# thing.method()
# methods authomatically have access to the object they are called on


# HOW TO LEARN MORE
# 📌 NOTE: go to python.org documentation and access LIBRARY REFERENCE to see types and methods that they support ie: str -> lists methods that can be used on it
    # or learn directly from within Python -> help('str') will list string methods out
    # ipython -> var_name. + TAB will list all methods that can be used on that variable
    # ipython -> add a ? after any method | var_name.capitalize? | will give documentation

# STRING METHODS


# CAPITALIZATION METHODS
# capitalize, upper, lower
# note: doesn't change the variable itself in place, have to update to make the change
string = 'i like cats'
print(string.upper())  # // I LIKE CATS


# STRIP METHODS
# strip, lstrip (left - leading chars), rstrip (right - trailing chars)

msg = '    hello     '.strip()
print(msg)
#// 'hello' -> removes leading or trailing whitespace or tabs or newlines etc

# can specify what characters you want to remove
chars = ',.,.,.hello.,.,'.strip(',.')
print(chars)
# // hello

# FUNCTION SIGNATURE
# the specific syntax used in documentation to explain how a function works
# ie: str.ljust(width[, fillchar])  
    # [] around a value means it's optional, and if left empty will use default
    # empty () means accepts no arguments
    # etc ...


# REPLACE
# str.replace(OLD, NEW, [count]) 
# NOTE: old and new are required arguments

likes = 'I like 🐈'
print(likes)
likes = likes.replace("🐈", "🐕")
print("Now " + likes)

# can use replace to remove things from a string by replacing them with an empty string
empty = 'I❤️NY'
print(empty)
empty = empty.replace('❤️', '')
print(empty)

# adding the [count] argument will tell replace how many occurences to replace
count = '🐈🐈🐈'
print(count)
count = count.replace('🐈', '🍌', 2)
print(count)



message = 'Cat in a hat'
# FIND
message.find('a') # 1
    # find method tells us the first index where some substring is found
    # returns -1 if the substring is not found
message.rfind('a') # 10

# INDEX 
message.index('a') # 1

# COUNT
message.count('a') # 3
    # how many times a substring occurs within a string



# METHOD CHAINING
# many string methods return another string, that can then be passed into the next method

name = " joHN   "
clean_name = name.strip().capitalize()
print(clean_name) # John