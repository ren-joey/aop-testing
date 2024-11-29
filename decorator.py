def decorator(func):
    def wrapper():
        print("Before calling the function")
        func()
        print("After calling the function")
    return wrapper

@decorator
def decorated():
    print("Hello from decorated")

decorated()
