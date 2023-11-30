
#  ----------
#    PART 1
#  ----------
word = "supercalifragilisticexpialidocious"

# Write a for loop that prints out each character in the above "word" variable

print("for loop")
for char in word:
    print(char)

# Write a while loop that does the same thing!

print("while loop")
idx = 0
while idx < len(word):
    print(word[idx])
    idx += 1


#  ----------
#    PART 2
#  ----------
# Write a while loop that prints the even numbers from 100 to 140 (including 140)

print("while loop")
num_while = 100
while num_while <= 140:
    print(num_while)
    num_while += 2


# Write a for loop that does the same thing (with range())

print("for loop")
for num_for in range(100,141,2):
    print(num_for)

#  ----------
#    PART 3
#  ----------
# Write a loop that asks a user to input the passphrase "sillygoose" and keeps asking them to do so until they comply:

user_input = input("Write the password (no spaces!) 🤪🪿: ")
password = "sillygoose"

while user_input != password:
    user_input = input("Write the password (no spaces!) 🤪🪿: ")
print("You did it!")