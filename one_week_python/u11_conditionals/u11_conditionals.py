# A LITTLE MORE ON CONDITIONALS

# INDENTATION
# NOTE: indentation is not for style or ease of reading -- it has semantic meaning in python

# NESTING CONDITIONALS

unit = 'fahrenheit'
temp = 36

if unit == 'fahrenheit':
    if temp <= 32:
        print("it's freezing outside!")
    else:
        print("it's not freezing")
else:
    print("I don't understand celsius...")

# there is an if and else indented inside the body of the parent if
# if the parent if is false, then nothing inside will run!
