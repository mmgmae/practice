# STRINGS - basic data type
# strings are text wrapped in quotes -- strings of characters
color = "Magenta"
# double or single quotes, both are ok

# anything between the quotes are considered a string
type("7")
#string
type(7)
#integer

# quote type must be consistent - open and close with single OR double quotes, must match together

# if you want to include quotes internally, be careful what quotes you surround your string with
quote = 'he said "haha"'
quote_2 = "I can't do it"


# STRING VARIABLES
# note: python doesn't care what we put inside of variables! You can change the type whenever you want

age = 57
age = "fifty-seven"


# STRING OPERATORS

"hello" + "world"
'helloworld'

# + is still an operator, but it doesn't mathematically add the two strings together, instead concatonates them

"4" + "5"
'45'

# the operator behaves differently depending on the operands

"ha" * 3
'hahaha'
# note: cannot multiply two strings, cannot + a string and an integer


# STRING INDEXING
# all strings are indexed, each character has a corresponding index (includes spaces)
# (0)(1)(2)(3)(4)(5)(6)(7)(8)(9)(10)
#  H  e  l  l  o     w  o  r  l  d

# use brackets to nativgate with the index
msg = 'I <3 Cats'
msg[0] # 'I'
msg[5] # 'C'

msg[99] # error: string index out of range, no character at that index

# can also use negative index
# would be used to get the last character of any string ie for an address, to get the zipcode
#  (-5)(-4)(-3)(-2)(-1)
#   H   e   l   l    o


# None
# a specific value in python that denotes the LACK OF VALUE. Not zero, not an empty string, but the lack of a value ie null

active_user = None

# represents the lack of a value, nothingness, emptyness
# NOTE: capitalization is important