# roll two dice and keep rolling until both dice are 1 - 1 - "snake eyes"

import random
roll1 = random.randint(1,6)
roll2 = random.randint(1,6)
count = 1

while roll1 != 1 or roll2 != 1:
    print(roll1, roll2)
    # **** be sure to re-roll IE update values for roll 1 and 2 otherwise it's an infinite loop
    roll1 = random.randint(1,6)
    roll2 = random.randint(1,6)
    count += 1

print(roll1, roll2)
print("You got snake eyes! 🐍")
print(f"It only took {count} rolls")
