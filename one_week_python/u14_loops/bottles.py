num = 99
while num > 0:
    print(f"{num} bottles of beer on the wall.")
    print(f"{num} bottles of beer.")

    if num == 1: 
        print(f"Take one down, pass it around, no more bottles of beer on the wall.")
    else:
        print(f"Take one down, pass it around, {num - 1} bottles of beer on the wall.")

    print(" " * 20)
    print("*🍻" * 20)
    print(" " * 20)
    num -= 1


# for num_bottles in range(99,0,-1):
#     print(f"{num_bottles} bottles of beer on the wall.")
#     print(f"{num_bottles} bottles of beer.")

#     if num_bottles == 1:
#         print(f"Take one down, pass it around, no more bottles of beer on the wall.")
#     else:
#         print(f"Take one down, pass it around, {num_bottles - 1} bottles of beer on the wall.")
#     print(" " * 20)
#     print("*🍻" * 20)
#     print(" " * 20)