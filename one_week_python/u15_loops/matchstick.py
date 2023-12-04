# MATCHSTICK GAME

print("*" * 25)
print("WELCOME TO THE GAME")
print("*" * 25)

# REFACTOR -- remove redundancy 

num_left = 13
player1_name = input("enter player 1's name: ")
player2_name = input("enter player 2's name: ")
current_player = player1_name

while True:
    print("| " * num_left)
    print(f"there are {num_left} matchsticks left")
    choice = int(input(f"{current_player}, how many toothpicks do you take? "))
    while choice != 1 and choice != 2 and choice != 3:
        choice = int(input("you can only take 1, 2, or 3: "))
    num_left -= choice
    if num_left <= 0:
        print(f"{current_player} wins the game!")
        break
    if current_player == player1_name:
        current_player = player2_name
    else: 
        current_player = player1_name

print("GAME OVER")
print("*" * 25)



# SECOND ATTEMPT -- working, but repetative
# num_left = 13
# player1_name = input("enter player 1's name: ")
# player2_name = input("enter player 2's name: ")

# while True:
#     print("| " * num_left)
#     print(f"there are {num_left} matchsticks left")
#     p1_choice = int(input(f"{player1_name}, how many toothpicks do you take? "))
#     num_left -= p1_choice
#     if num_left <= 0:
#         print(f"{player1_name} wins the game!")
#         break
#     print("| " * num_left)
#     print(f"there are {num_left} matchsticks left")
#     p2_choice = int(input(f"{player2_name}, how many toothpicks do you take? "))
#     num_left -= p2_choice
#     if num_left <= 0:
#         print(f"{player2_name} wins the game!")
#         break

# print("GAME OVER")
# print("*" * 25)

# FIRST ATTEMPT
# matchstick_num = 13
#
# player1 = input("enter player 1's name: ")
# player2 = input("enter player 2's name: ")
# game = True
#
#
# # game loop until someone wins
# while game is True:
#     print("| " * matchstick_num)
#     print(f"there are {matchstick_num} matchsticks left")
#     print(f"how many do you take, {player1}? ")
#     num_take = int(input( ))
#     while num_take > 3:
#         num_take = int(input("you can only take 1, 2, or 3: "))
#     matchstick_num = matchstick_num - num_take
#     if matchstick_num == 0:
#         winner = player1
#         game = False
#     print("| " * matchstick_num)
#     print(f"there are {matchstick_num} matchsticks left")
#     print(f"how many do you take, {player2}? ")
#     num_take = int(input( ))
#     while num_take > 3:
#         num_take = int(input("you can only take 1, 2, or 3: "))
#     matchstick_num = matchstick_num - num_take
#     if matchstick_num == 0:
#         winner = player2
#         game = False
# print("*" * 25)
# print(f"{winner} wins!!!")
# print("GAME OVER")



