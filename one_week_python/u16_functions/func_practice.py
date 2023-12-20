# is even

# def is_even(num):
#     if num % 2 == 0:
#         return True
#     else:
#         return False

# unnecessary return -- because only one return statement will run and then the rest will be ignored

# def is_even(num):
#     if num % 2 == 0:
#         return True
#     return False

# simplify even more -- because it's a boolean expression, it will result in True or False on it's own

def is_even(num):
    return num % 2 == 0

print("test is even for 10")
print(is_even(10))

print("test is even for 13")
print(is_even(13))


# slugify

def slugify(string):
    return string.lower().strip().replace(" ", "-")

phrase = slugify("     I L O V E cats    ")

print(phrase)

# count vowels

# def count_vowels(message):
#     count = 0
#     count += message.count("a")
#     count += message.count("e")
#     count += message.count("i")
#     count += message.count("o")
#     count += message.count("u")
#     return count

def count_vowels(message):
    count = 0
    for char in message:
        if char in "aeiou":
            count += 1
    return count

print(count_vowels("hello wooooorld"))