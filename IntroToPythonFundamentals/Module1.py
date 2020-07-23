word = ""

quote = input("Input quote: ")
quote = quote + " "
for letter in quote:
    if letter.lower().isalpha():
        word += letter.lower()
    elif word.lower() >= "h":
        print(word.upper())
        word = ""
    elif word.lower() < "h":
        word = ""

    
