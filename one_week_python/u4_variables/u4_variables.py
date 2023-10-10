# VARIABLES - like labels for values
    # store values and give them a label - can refer back to the name tag and get / change the value inside the jar

snake_age = 48
 # variable name, assignment operator(=), value

 # VARIABLE NAMING
    # can break your code if you're not careful with naming variables

    # ✅ variable123 |  first_name  |  player_1
        # numbers ok, but not at the beginning of a variable
        # underscores allowed in variable names, not spaces : use snake casing 🐍

    # ❌ 123variable  |  first name  |  False  |  def
        # variables cannot start with a number
        # no spaces allowed in variable name, use underscore instead
        # cannot use python keywords in variables (ie: False await else import pass None...)
            # use   help('keywords')  to see a list of keywords you can't use
        
    # 🟡 |  |  O  |  x  |  FirstName  |  FIRSTNAME
        # make sure variable names make sense, ie don't use X. Valid, but hard to read
        # use snake_casing instead of camel etc.
        # uppercase letters are allowed, but not preferred
        # NOTE: constants are usually written in all caps, ie: PI = 3.14159, this is a convention

# ASSIGNMENT OPERATORS
    # operator + a =
    # +=, -=, *=, /=, //=, **=, %=
    # allow us to change a value that is currently in an existing variable using that value

prize_money = 500
prize_money += 50  #take current value, add 50, and update the value
prize_money  #550

# += and -= are the most common, used often as COUNTER VARIABLES
site_visitors = 0
site_visitors += 1  #everytime someone visits the website, increment by one


# print() function
print('hello')
# takes whatever values we pass to it and prints them out to STANDARD OUTPUT
print(4 + 4 / 3)
# ACTUALLY prints to the terminal when run
