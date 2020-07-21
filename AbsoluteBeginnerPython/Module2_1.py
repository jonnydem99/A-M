# [ ] define and call a function short_rhyme() that prints a 2 line rhyme
def short_rhyme():
    print('One two three \nfour five six')
short_rhyme()


# [ ] define (def) a simple function: title_it() and call the function
# - has a string parameter: msg
# - prints msg in Title Case
def title_it(msg):
    print(msg.title())
message = 'some thing to title'
title_it(message)


# [ ] get user input with prompt "what is the title?" 
# [ ] call title_it() using input for the string argument
message = input("what is the title? ")
title_it(message)


# [ ] define title_it_rtn() which returns a titled string instead of printing
def title_it_rtn(msg):
    return msg.title()

# [ ] call title_it_rtn() using input for the string argumetnt and print the result
print(title_it_rtn(input()))
