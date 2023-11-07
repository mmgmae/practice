first_name = input('What is your first name? ')
last_name = input('What is your last name? ')

name_length = (len(first_name)) + (len(last_name))


# the average American name is 12 characters long

print("************************")

if name_length == 12:
    print(f'{first_name} {last_name} is exactly the average length of American names')
elif name_length < 12:
    print(f'{first_name} {last_name} is shorter than the average American name')
else:
    print(f'{first_name} {last_name} is longer than the average American name')
    
print("************************")





