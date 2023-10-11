# years = input('\nHow old are you (in years)? ')
# days = float(years) * 365
# days = str(days)
# print('\nYou are ' + days + ' days old. 🤖\n')
#REFACTORED WITH F STRING

years = input('\nHow old are you (in years)? ')

days = float(years) * 365

print(f'\nYou are {days} days old. 🤖\n')