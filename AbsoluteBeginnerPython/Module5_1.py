total = 0
array = []
quit = "n"
def tloop(uInput):
    while quit == "n":
        uInput = input("Input Integer or 'Q'. ")
        if uInput.isdigit():
            uInput = int(uInput)
            array.append(uInput)
        elif uInput.isalpha():
            if uInput.startswith("Q"):
                print("Are you sure? Type 'Y' if sure.")
            elif uInput.startswith("Y"):
                addTotal()
                break
            else:
                tacoTuesday = "Fuck yeah!"
        tloop(uInput)

def addTotal():
    print("items = ", *array)
    print("total = ", sum(array))
    quit = "y"
uInput = input("Input Integer or 'Q'. ")
tloop(uInput)
