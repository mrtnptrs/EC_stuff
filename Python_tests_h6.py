#importing test possibility
import sys

def test(did_pass):
    """  Print the result of a test.  """
    linenum = sys._getframe(1).f_lineno   # Get the caller's line number.
    if did_pass:
        msg = "Test at line {0} ok.".format(linenum)
    else:
        msg = ("Test at line {0} FAILED.".format(linenum))
    print(msg)

#wind
def turn_clockwise(richting):
    richting = input(str("vul windrichting in, N, W, E of S "))
    if richting == "N":
        final = "E"
    elif richting == "E":
        final = "S"
    elif richting == "S":
        final ="W"
    elif richting == "W":
        final = "N"
    else:
        print("verkeerde waarde ingevoerd.")
    return final

#some tests
##test(turn_clockwise("N") == "E")
##test(turn_clockwise("W") == "N")

#Number to day
def day_name(day_number):
    if day_number == 0:
        return "Sunday"
    elif day_number == 1:
        return "Monday"
    elif day_number == 2:
        return "Tuesday"
    elif day_number == 3:
        return "Wednesday"
    elif day_number == 4:
        return "Thursday"
    elif day_number == 5:
        return "Friday"
    elif day_number == 6:
        return "Saturday"
    else:
        return None

#Day to number
def day_number(day_name):
    if day_name == "Sunday":
        return 0
    elif day_name == "Monday":
        return 1
    elif day_name == "Tuesday":
        return 2
    elif day_name == "Wednesday":
        return 3
    elif day_name == "Thursday":
        return 4
    elif day_name == "Friday":
        return 5
    elif day_name == "Saturday":
        return 6
    else:
        return None

#Answer questions like ‘“Today is Wednesday. I leave on holiday in 19 days time. What day will that be?”’

def dag_optellen(dag, delta):
    nummer_begin = day_number(dag)
    nummer_eind = nummer_begin + delta
    nummer_dag = nummer_eind % 7
    final_day_name = day_name(nummer_dag)
    print(final_day_name)
    return final_day_name

#Give number of days in a month.
def days_in_month(month_name):
    if month_name == "februari":
        return 28
    elif month_name == "april" or month_name == "juni" or month_name == "september" or month_name == "november":
        return 30
    elif month_name == "januari" or month_name == "maart" or month_name == "mei" or month_name == "juli" or month_name == "august" or month_name == "oktober" or month_name == "december":
        return 31
    else:
        return None

#some tests
##test(days_in_month("februari") == 28)
##test(days_in_month("december") == 31)

#Hours, minutes and seconds to seconds
def to_secs(hours, minutes, seconds):
    seconds = int((hours*3600) + (minutes*60) + seconds)
    print(seconds)
    return seconds

#Some tests
##test(to_secs(2, 30, 10) == 9010)
##test(to_secs(2, 0, 0) == 7200)
##test(to_secs(0, 2, 0) == 120)
##test(to_secs(0, 0, 42) == 42)
##test(to_secs(0, -10, 10) == -590)
##
##test(to_secs(2.5, 0, 10.71) == 9010)
##test(to_secs(2.433,0,0) == 8758)

    

