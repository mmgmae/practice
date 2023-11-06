# BOOLEANS

# decision making -> broken down into true or false, yes or no decisions
# True and False with exact casing and spelling is a boolean
isAlive = True
# type(True) >>> bool

# COMPARISON OPERATORS
    # > greater than
        # a > b -> truthy if a is greater than b
    # < less than
    # >= greather than or equal to
    # <= less than or equal to

# EQUALITY OPERATORS
    # == equal to
    # != not equal to

# IDENTITY
    # is  -> evaluates to True is a and b both refer to the same object in memory
    # is not  -> evaluates to True is a  and b do NOT refer to the same object in memory

# COMPARING ACROSS TYPES
4.0 == 4  # // True
# will evaluate to True even though these are different types, float and int
'4' == 4  # // False
# will evaluate to False, if you want to compare, one of these two must be changed into comparable types

# TRUTH AND FALSEYNESS
# NOTE: every value in Python is inherently Truth-y or False-y
# False-y Values :
    # False, 0.0, 0, None, range(0), Empty Strings: '', Empty Data Structures: [], {}, (), set()
# Truth-y Values:
    # Everything else!

# converting values into booleans
bool(0)  # // False
# can use bool() to cast a value to a Boolean
# This is one way to determine whether Python considers a value to be Truth-y or False-y

# THE 'IN' OPERATOR
# the 'in' operator looks to see if an item is a member of a sequence (string is one example of a sequence, also lists, etc...)
'a' in 'bat'  #// True
# checks to see if the left value is contained or is a member of the right value
'H' in 'peach' #// False

# COMPARING STRINGS
'a' < 'w' #// True
'a' < 'A' #// False
    # Why? -> It has to do with how Python stores characters... Unicode!
    # Each char, even space, has an associated Unicode number

# ord() 
# Python uses Unicode for encoding chars used in the string data type
#The function ord() will return the number for any character

ord('a') #// 97
ord('A') #// 65

# Python uses these 'Unicode code point numbers' to compare strings numerically