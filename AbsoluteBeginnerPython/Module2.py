

def bird_check(bird):
    bird_available = "crow robin parrot eagle sandpiper hawk pigeon"
    return(bird.lower() in bird_available)
input_bird = input("input a bird name to check for availability ")
user_bird = bird_check(input_bird)
print("available?", user_bird)