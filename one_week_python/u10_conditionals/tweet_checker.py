# CONDITIONALS TWEET CHECKER EXERCISE

max_chars = 140

print('************************')

# Promt user to enter potential tweet

tweet = input('enter your tweet: ')
tweet_len = len(tweet)

print('- - - - - - - - - - -')

# print out whether the tweet is short enough to work, or too long to post --> under 140 chars
if tweet_len <= max_chars:
    print(f'That {tweet_len} character tweet will work!')
# if tweet is over 140 chars, tell them how many it is over
else:
    print(f'Your {tweet_len} character tweet is {(tweet_len - max_chars)} characters too long...')


print('************************')