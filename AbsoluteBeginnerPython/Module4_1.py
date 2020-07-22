def str_analysis(s):

   if s.isdigit():

       s = int(s)

       if s > 99:

           message = str(s) + " is a pretty big number"

       else:

           message = str(s) + " is a smaller number than expected"

       

   elif s.isalpha():

       message = s + " is all alphabetical characters!"

   else:

           message = "There are multiple character types"

   

   return message;

   

s = input("enter word or integer: ")

while s != "":

   print(str_analysis(s))

   s = input("enter word or integer: ")