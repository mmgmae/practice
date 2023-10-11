print('\n******** 🏪 WELCOME TO THE STORE 🏪 ********\n')

item = input("What item are you purchasing? ")
price = input(f"What is the price of a(n) {item}? ")
quantity = input(f'How many {item}(s) are you buying? ')

quantity = int(quantity)
price = float(price)

print(f'\n\nAdded {quantity} {item}(s) to shopping cart 🛒')
print(f'Subtotal: ${quantity * price} 💸')

print('\n******** 🏪 THANK YOU 🏪 ********\n')