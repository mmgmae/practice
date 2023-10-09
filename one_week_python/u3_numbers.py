#Intro to Data Types
    # strings, booleans, floats, integers, frozenset, bytes, dictionary, complex, range, list, tuple, set ...
    # 4 fundamental: strings, integers, booleans, floats

# Integers and Floats
    # INTEGERS - whole numbers only, no decimal points, positive or negative - integers are unbounded (as large as we want)
        # ex: 9  378  -21  0
        # 📌 ints cannot start with leading zero: 777 ✅ |  0777 ❌

    # FLOATS - written with a decimal point, positive or negative - floats are NOT unbounded (there is a limit of precision)
        #ex:  1.5  9.99  -2.0  0.0
        # 📌 floats can start with leading zero, don't have to: 0.8 ✅ | .8 ✅

type(6) #int
type(6.8) #float

# Numeric Notations 
    # large numbers that are usually notated with commas are separated with _ underscore in python, are ignored by the language, and are simply for the human brain to see the groups of numbers
        # ie: 1_000 ✅  |  1,000 ❌
        # ie: 1_000.55 ✅ | 1,000.55 ❌

    # scientific notation : python will represent large enough numbers in scientific notation, and can also accept numbers in scientific notation
        # ie: 6.7e-3 --> 0.0067

# 📌 Basic Operators
    # operators are special characters that perform operations on values(operands), commonly include... + * != /= etc...

    # note: math can be performed with or without spaces between operators and operands

    # 1 + 4  // 5
    # 5 - 1.0 // 3.0
        # note: if there's ever a float involved, the answer will be a float
    # 45 * 45  // 2025
    # 5 / 2  // 2.5

    # ORDER OF OPERATIONS - pemdas
        # 1 parentheses ()
        # 2 multiplication and division
        # 3 addition and subtraction

# Lesser Known Operators
    # 📌 spacing matters: do not put spaces between the operators

    #  //  integer division
        # 10/3 = 3.333333333  |  10//3 = 3
        # // will round down and provide and integer
            # 4/5 = 0.8  |  4//5 = 0
            # negative numbers: 10/-3 = -3.333333  |  10//-3 = -4  --> here rounding down means further from zero
    #  **  exponentiation
        # raise a number to the x power : 4 ** 3  // 64
        
    #  %   modulo
        # the remainder operator
        # ex: 38%10 = 8 -> 10 goes into 38... 3 times, with a remainder of 8
        # note: commonly used to determine if a number is even or odd
            # X%2 --> if the modulo answer is 0, no remainder, X is even. If the answer is 1, there is a remainder, and X is odd.


# Comments are any lines starting with the # symbol, and will be ignored by python