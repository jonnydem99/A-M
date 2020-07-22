total = 0
array = []
quit = "n"
def tloop(uInput):
    if uInput.isdigit():
        uInput = int(uInput)
        array.append(uInput)
    elif uInput.isalpha():
        if uInput.startswith("Q"):
            print("Are you sure? Type 'Y' if sure.")
        elif uInput.startswith("Y"):
            addTotal()

def addTotal():
    print("items = ", *array)
    print("total = ", sum(array))
    quit = "y"

uInput = input("Input Integer or 'Q'. ")

while quit == "n":
    tloop(uInput)
    uInput = input("Input Integer or 'Q'. ")

