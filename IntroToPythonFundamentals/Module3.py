
def poemJam(input_poem):
    words = input_poem.split()
    word_list = []
    for word in words:
        if len(word) < 6:
            word = word.lower()
            word_list.append(word)
        else:
            word = word.upper()
            word_list.append(word)
    word_mixer(word_list)
    print(word_list)

def word_mixer(word_list):
    while len(word_list) > 5:
        word_list.pop(-5)
        word_list.pop(0)
        word_list.pop(-1)
    if len(word_list) <= 5:
        return word_list

input_poem = input("Input poem.")
poemJam(input_poem)


