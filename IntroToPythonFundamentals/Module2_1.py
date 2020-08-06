user_input = ""

def list_o_matic(user_input):
    if user_input == "":
        animal_list.pop()
    elif user_input in animal_list:
        animal_list.remove(user_input)
    else:
        animal_list.append(user_input)

def list_matic(user_input):
    global animal_list
    animal_list = ["cat"]
    user_input = input("Enter animal name or 'quit'")
    while animal_list != "":
        user_input = input("Enter animal name or 'quit'")
        if user_input.lower() == "quit":
            animal_list = ""
            print("Game Over")
        else:
            list_o_matic(user_input)
            print(animal_list)

list_matic(user_input)
