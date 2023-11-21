year = input("what year were you born? ")

if not year.isnumeric():
    year = input("That isn't a number. Try again please! What year were you born? ")

year = int(year)

print(f"You were born {2022 - year} years ago")