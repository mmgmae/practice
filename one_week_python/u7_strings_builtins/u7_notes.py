# STRINGS & BUILT-INS

# FUNCTIONS 
    # reusable actions that have a name
    # func_name()
    # to execute a function, we use parens ()
# ARGUMENTS -> fancy word for inputs, what goes between the (), separated by functions
    # some functions accept infinite arguemnts, some just one, some none


# get information on built in functions
#help(len) #//Return the number of items in a container.


# THE LEN FUNCTION -> length
    # len()
    # will return the length of whatever item we pass to it (numbers don't have length, but strings and lists etc do)

word = 'Chicken'
len(word) # // 7


# THE INPUT FUNCTION
    # age = input("how old are you?")
    # prompts a user to enter some input, converts it into a string, then returns it

    #NOTE: capture the result from the user by saving it to a variable...
feeling = input('How are you?')
print("🤖 You are " + feeling + ".")


# TYPE CASTING
# the type() function accepts an input object and will return the type of that object

type('hi') # //str
type(65) # //int

# CASTING TYPES - change the type of a variable ie: string -> int
int('12') 
float('3.3')
str(44.5)
# NOTE: float -> int will simply truncate the number, no rounding, just chop off after the decimal


# F STRINGS - F is for FORMATTING
# f-strings are an easy way to generate strings that contain interpolated expressions. Any code between curly braces {} will be evaluated and then the result will be turned into a string and inserted into the overall string

print(f"there are {24*60*60} seconds in a day") #//there are 86400 seconds in a day



