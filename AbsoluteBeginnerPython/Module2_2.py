def make_greeting(name, greeting = "Hello"):
    return (greeting + " " + name + "!")

def get_name():
    name_entry = input("enter a name: ")
    return name_entry

def get_greeting():
    greeting_entry = input("enter a greeting: ")
    return greeting_entry

print(make_greeting(get_name(), get_greeting()))