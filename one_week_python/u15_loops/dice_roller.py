from random import randint

num_dice = int(input("How many dice are we rolling? "))
num_sides = int(input("How many sides on each die? "))

# my first attemp...
# while num_dice:
#     if num_dice >= 1:
#         roll = randint(1, num_sides)
#         print("|", roll, "|")
#         num_dice -= 1
#     # quit = input("Roll again? ('q' to quit) ")
#     # if quit == "q":
#     #     break

while True:
    result = "|"
    for die in range(num_dice):
        rand = randint(1,num_sides)
        result += f"{rand}|"
    print(result)
    reply = input("Roll again? ('q' to quit) ")
    if reply == "q":
        break
    