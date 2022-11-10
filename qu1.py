def input_num():
    num = int(input(">>> "))
    return num


def say_result(num1, num2):
    if num1 > num2:
        print(f"even is winner! even:{num1} & odd:{num2}")
    else:
        print(f"even is lose! even:{num1} & odd:{num2}")


def sum_li():
    evens = []
    odds = []
    number = ""
    while number != 0:
        number = input_num()
        if number == 0:
            break
        if number % 2 == 0:
            evens.append(number)
        else:
            odds.append(number)
    sum_odds = sum(odds)
    sum_evens = sum(evens)
    print(f"odds:{odds} & evens:{evens}")
    say_result(sum_evens, sum_odds)


sum_li()
