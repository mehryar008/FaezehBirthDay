

def calculate():
    shoes = input("Enter your shoes number: ")
    year = int(input("Enter your year of birth: "))
    shoes_zeros = int(shoes + "00")
    result_1 = shoes_zeros - year
    result_2 = result_1 + 1401
    result_text = str(result_2)
    print(shoes_zeros)
    print(result_1)
    print(result_2)
    print(
        f"your shoes number:{result_text[0:2]} & your age:{result_text[2:4]}")


calculate()
