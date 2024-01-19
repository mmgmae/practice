header = """
  _____         _           
 |_   _|__   __| | ___  ___ 
   | |/ _ \ / _` |/ _ \/ __|
   | | (_) | (_| | (_) \__ \\
   |_|\___/ \__,_|\___/|___/
                            
"""
print(header)

todos = []
completed = []

while True:
    for i in range(len(todos)):
        print(f"{i+1}) {todos[i]}")
    print("***********************************")
    print("Enter a command. Type 'h' for help:")
    command = input("> ")

    if command == "q":
        break

    elif command == 'h':
        print("TODO LIST HELP")
        print("Type 'q' to quit")
        print("To add a todo to the list, type it and hit enter")
        print("To complete a todo enter its number")

    elif command.isnumeric():
        idx = int(command) - 1
        if idx >= len(todos):
            print("THERE IS NO TODO WITH THAT NUMBER")
        else:
            done_todo = todos.pop(idx)
            completed.append(done_todo)

    else:
        todos.append(command)

if completed:
    print(f"You completed {len(completed)} todos today: ")
    for todo in completed:
        print(f"* {todo}")

# this loop does not allow for todos to be checked off
# quit = False
# todos = []

# while not quit:
#     print("***********************************")
#     print("Enter a command. Type 'h' for help:")
#     user = input("> ")

#     if user == 'h':
#         print("""
# TODO LIST HELP
# Type 'q' to quit
# To add a todo to the list, type it and hit enter
# To complete a todo enter its number
#               """)
#     if user == 'q':
#         quit = True

#     else:
#         todos.append(user)
#         for todo in todos:
#             print(f"{todos.index(todo) + 1}) {todo}")
#             if user == todos.index(todo):
#                 print(todo)

            
