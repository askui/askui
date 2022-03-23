import os 

def SayHello():
    print("Hello world")
    

def add_one(number):
    return number + 1

def dataPath():
    return  os.path.join(os.path.split(__file__)[0], "data")

    