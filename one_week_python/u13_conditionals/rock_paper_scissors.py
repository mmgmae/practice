from random import randint

rock = """
    _______
---'   ____)
      (_____)
      (_____)
      (____)
---.__(___)"""

paper = """
    _______
---'   ____)____
          ______)
          _______)
         _______)
---.__________)
"""

scissors = """
    _______
---'   ____)____
          ______)
       __________)
      (____)
---.__(___)
"""
# Pick a random number from 1 to 3
num = randint(1,3)

# Turn that random number into the computer's RPS move

if num == 1:
    computer_move = rock;
elif num == 2:
    computer_move = paper;
elif num == 3:
    computer_move = scissors;

# Ask a user to enter their move

user_move = input("enter your move: ").lower()

# Print the rock, paper, or scissors ASCII art that corresponds to the player's move

print("YOUR MOVE:")

if user_move == "rock":
    user_move = rock
    print(rock);
elif user_move == "paper":
    user_move = paper
    print(paper);
elif user_move == "scissors":
    user_move = scissors
    print(scissors);
else:
    print("sorry i don't know that one...")


# Print the rock, paper, or scissors ASCII art that corresponds to the computer's move

print("   ")
print("COMPUTER MOVE:")

if computer_move == rock:
    print(rock);
elif computer_move == paper:
    print(paper);
elif computer_move == scissors:
    print(scissors);


# Figure out who wins and print the result!

print("   ")

if computer_move == user_move:
    print("It's a tie!")
elif computer_move == rock and user_move == paper:
    print("You win!")
elif computer_move == paper and user_move == scissors:
    print("You win!")
elif computer_move == scissors and user_move == rock:
    print("You win!")
else: 
    print('You lose!')


print("   ")