def order_cheese(ch_weight):
    if ch_weight.isalpha() == True:
        print("please try again using numbers")
    elif float(ch_weight) > 112.99:
        print("Sorry, that is more than current cheese stock")
    elif float(ch_weight) < .15:
        print("Sorry, this is below the minimum order weight")
    else:
        total = float(ch_weight)*7.99
        print("Your cheese purchase comes out to " + "$" + str(total))

ch_weight = input("Enter cheese order weight. ")

order_cheese(ch_weight)