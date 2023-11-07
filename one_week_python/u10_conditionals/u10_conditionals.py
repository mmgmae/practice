# CONDITIONALS 
    #making decisions with code / have different outcomes

# THE IF KEYWORD
# foundation of an if statement: 
    #'if' followed by some condition AND a colon (all must be present) 

# if condition:

# body of an if statement:
    # MUST be indented, four spaces is standard, do what you want but stay consistent
    # block of code in body will only run if condition is true

# if condition:
#     body

age = 2

if age >= 21:
    print('You may enter the bar.')
print('program is complete')

# NOTE: any lines not indented will be run after the conditional, and will not be included in the body of the conditional

# THE ELIF KEYWORD
# ELIF => ELSE IF
    # if not the first thing, maybe this instead?
    # another option to try before continuing through the code
    # ONLY ONE will ever run
    # NOTE: elif would never be used on its own, always after an if
    # can have as many elifs as you want, just has to come after an if

# if test:
    # code if True
# elif test2:
    # code if True

color = 'black'

if color == 'green':
    print('Beginner Ski Run')
elif color == "blue":
    print('Intermediate Ski Run')
elif color == "black":
    print('Expert Ski Run')
    print('...Good luck')

# // Expert Ski Run
# // ... Good luck

# NOTE: elifs will only run if nothing before it is true. If anything meets the condition, code stops there and moves on

num = 3

if num > 0:
    print('FROM IF')
elif num == 3:
    print('ELIF 1')
elif num < 10:
    print('ELIF 2')

# // FROM IF
# code is met by first if, so it never even touches the next two elifs, even though all evaluate to True


# THE ELSE KEYWORD
# else -- if NOTHING above is True, just do this...

# if used, will go at the END of a conditional statement, after ifs and elifs
# NOTE: will only ever have ONE else, and it's always at the end
# same syntax as other conditionals

age2 = 50

if age2 < 10:
    print('Your child ticket is $10')
elif age2 > 65:
    print('Your senior ticket is $12')
else:
    print('Your adult ticket is $14')

#//Your adult ticket is $14



# NOTE: elif and else cannot stand on their own, MUST be after an if




# GENERATING RANDOM NUMBERS WITH RANDINT()

print('*** random integers ***')

import random
print(random.randint(1,6))  #// 1 (random)
print(random.randint(1,6))  #// 6 (random)

# NOTE: will not work without import -- will be covered in the modules section...

# random includes different methods, including rand int
# (2,4) -- will either do 2, 3, 4 -- from 2 to 4 or 1,6 1 to 6
# always an int, a whole number

# other syntax ...
# > from random import randint
# have access to random directly, dont have to call it with random.... ie:
# > randint(2,10)
