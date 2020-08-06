class Dog:
    def __init__(self, name, breed, age):
        self._name = name;
        self._breed = breed;
        self._age = age;
    def bark(self):
        print(str(self._name)+" says 'woof woof'");
    def toString(self):
        return "name="+str(self._name)+",breed="+str(self._breed)+",age="+str(self._age);
wolfee = Dog("Wolfee","Huskie",13)
princess = Dog("Princess","Yorkee",3)
print(wolfee.toString())
print(princess.toString())
wolfee.bark();
princess.bark();
