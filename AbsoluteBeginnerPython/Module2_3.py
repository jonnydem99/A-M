#fishstore() takes 2 string arguments: fish & price
#fishstore returns a string in sentence form
#gather input for fish_entry and price_entry to use in calling fishstore()
#print the return value of fishstore()

def fishstore(fish, price):
    return("The fish is " + fish + " and the price is " + price)

ask_fish = input("Name a fish.")
ask_price = input("What is the price?")

print(fishstore(ask_fish, ask_price))