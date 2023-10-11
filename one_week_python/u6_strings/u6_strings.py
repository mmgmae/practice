# STRINGS

# STRING SLICES
# access a portion of a string - two char, the entire string except 1, every other chararcter, ...
msg = 'I <3 Cats'

#[ start : stop ]
msg[2:6] # '<3 C'
#📌start slice at index 2, ends at index 6, goes UP TO but does NOT include 6

# syntax to get slice from beginning of string -> some index, or some index -> end of string 
msg[3:] # '3 Cats'  -> from 3 to the end of the string
msg[:4] # 'I <3' -> from beginning up to index of 4

#SLICES WITH A STEP
#[start: stop: step]
msg[2:8:2]  # '< a' -> step/interval to include every x character


# PRINT
print(' ')
print(' ')
print('*********' + (msg+ ' 🐈🐈🐈 ') * 4 + '*********')
print(' ')
print(' ')



# ESCAPE CHARACTERS
# start with \
# the regular characters will be 'escaped'
    # Newline - \n
    # Tab - \t
    # Double Quote - \"
    # Single Quote - \'
    # Backslash - \\

phrase = "HELLO\nWORLD\t💮"
print(phrase)


# TRIPLE QUOTES
# three ' or three " allow you to have a string across multiple lines, or allow any kind of "" or '' between
review = '''"Mary's sourdough bread is the best," Paul Hollywood stated.'''
print(review)

words = '''
hello world i can write out a very
long string on as many
lines as I would like
and python will accept it
line breaks will be replaced with backslash n
this is primarily for the convenience of human beings.
'''

print(words)