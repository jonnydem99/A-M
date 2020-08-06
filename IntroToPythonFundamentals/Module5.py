guesses = 0

periodic_write = open("periodic.txt", "w")
periodic_write.write("hydrogen/n helium/n lithium/n beryllium/n boron/n carbon/n nitrogen/n oxygen/n fluorine/n neon/n sodium/n magnesium/n aluminum/n silicon/n phosphorus/n sulfur/n chlorine/n argon/n potassium/n calcium/n")
close("periodic.txt")

perodic_read = open("periodic.txt", "r")
periodic_lines = periodic_read.readline()

def get_names
    while guesses < 5:
        user_answer = input("list any 5 of the first 20 elements in the Periodic Table.")
        if user_answer.lower(),isalpha:
            for line in periodic_read:
                if user_answer == 


