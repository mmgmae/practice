age = float(input("What is your age? "))

# confirm if age is between 18 and 21

if age >= 18 and age < 21:
    print("You can enter the venue, but cannot drink")
elif age < 18:
    print("You can't enter the venue, sorry")
else:
    print("You're good to drink inside the venue")
