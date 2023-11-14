# Practicing nesting conditionals...

unit = input("What unit are you using? ")
temp = int(input("What temperature is the water? "))

# calculate whether the water is boling...
# f - 212
# c - 100
# k - 373

if unit == 'f':
    if temp == 212:
        print("WATER IS BOILING!")
    else: 
        print("Water is not boiling, must hit 212F")
elif unit == 'c':
    if temp == 100:
        print("WATER IS BOILING!")
    else: 
        print("Water is not boiling, must hit 100C")
elif unit == 'k':
    if temp == 373:
        print("WATER IS BOILING!")
    else: 
        print("Water is not boiling, must hit 373K")
else:
    print("I don't know those units...")
