def int_alpha(user_input):
    if user_input.isdigit():
        user_input = int(user_input)
        if user_input > 99:
            print("That's a big number, bro!")
        elif user_input < 50:
            print("That's a small number. Do you even count, bro?")
        else:
            print("That's about right. Good job, bro.")
    elif user_input.isalpha():
        user_input = str(user_input)
        print("Those are words. Cool.")
    else:
        print("Not what we were looking for but that's cool.")

user_input = input("Enter an integer or word. ")

while user_input != "":
    int_alpha(user_input)
    user_input = input("Enter an integer or word. ")