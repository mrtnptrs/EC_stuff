#With this programm you can calculate the time you are out of the school at EC Boxmeer.

debug = "False" #Let this program print the hours and some more info if it's true.
calculate_day = "True" #Set to True to let it calculate your minutes you spend on tussenuren, kwt's, pauzes, lessons etc.

aantal_uren_invoer = int(input("Until which hour do you have today? Only insert values 1 till 9."))

if calculate_day == "True":
    tussenuren_question = int(input("Hoeveel tussenuren heb je? (van 0 tot 8 uur maximaal, 0 is geen een.)"))

    kwt_question = int(input("Hoeveel kwt's heb je? (van 0 tot 8 uur maximaal, 0 is geen een.)"))

    if aantal_uren_invoer <= tussenuren_question or aantal_uren_invoer < kwt_question:
        raise SystemExit("Error: you can't have more kwt's or tussenuren then your actual total of school hours!")
else:
    print("You set calculate_day to something else then True, your exact minutes you spend on what in a day won't be calculated.")

minirooster = input("Do you have minirooster (y/n)")

if minirooster == "y":  #How long a school hour is with or without minirooster.
    een_uur = 40
elif minirooster == "n":
    een_uur = 50
else:
    raise SystemExit("Error: wrong input of minirooster detected! Operation will now be cancelled!")

if aantal_uren_invoer == 1 or aantal_uren_invoer == 2 or aantal_uren_invoer == 3: #Als je maar maximaal 3 uur hebt.
    aantal_uren = aantal_uren_invoer
    pauze_tijd = 0
    if debug == "True":
        print(aantal_uren, "  1, 2, 3")

elif aantal_uren_invoer>=4 and aantal_uren_invoer<=6 and minirooster == "y":
    aantal_uren = aantal_uren_invoer + 0.5   #Eventuele kleine pauze meerekenen.
    pauze_tijd = 20
    if debug == "True":
        print(aantal_uren, "  4, 5, y")

elif aantal_uren_invoer>=4 and aantal_uren_invoer<=5 and minirooster == "n":
    aantal_uren = aantal_uren_invoer + 0.4   #Eventuele kleine pauze meerekenen.
    pauze_tijd = 20
    if debug == "True":
        print(aantal_uren, "  4, 5, n")

elif aantal_uren_invoer>6 and aantal_uren_invoer<=9 and minirooster == "y":
    aantal_uren = aantal_uren_invoer + 1.25   #Eventuele kleine en grote pauze meerekenen.
    pauze_tijd = 50
    if debug == "True":
        print(aantal_uren, "  six till nine, n")

elif aantal_uren_invoer>=6 and aantal_uren_invoer<=9 and minirooster == "n":
    aantal_uren = aantal_uren_invoer + 1   #Eventuele kleine en grote pauze meerekenen.
    pauze_tijd = 50
    if debug == "True":
        print(aantal_uren, "  six till nine, n")

else:
    raise SystemExit("Error: input of numbers of hours is too low or too high, the operation will now be cancelled!")

aantal_minuten = aantal_uren * een_uur

totaal_uren = int((aantal_minuten+510)/60)  #510 minutes are the eight hours and 30 minutes from the time when the school begins.
rest_minuten = int(aantal_minuten+510) % 60

if rest_minuten == 0: #Hack: to let python display times like 11:00 correctly.
    rest_minuten = "00"

eindtijd = str(totaal_uren) + ":" + str(rest_minuten) #The time you're out of school.

print("You're out today at",eindtijd)

if calculate_day == "True":

    print("You had spend today at school:")

    if tussenuren_question > 0:
        tussenuren_min = tussenuren_question * een_uur
        print(" *with",tussenuren_min,"minutes of tussenuren.")
    else:
        print(" *with no tussenuren.")
        tussenuren_min = 0

    if kwt_question > 0:
        kwt_min = kwt_question * een_uur
        print(" *with",kwt_min,"minutes of kwt's.")
    else:
        print(" *with no kwt's.")
        kwt_min = 0

    if pauze_tijd > 0:
        print(" *with",pauze_tijd,"minutes of pauzes.")
    else:
        print(" *with no pauzes.")

    les_minuten = aantal_minuten - kwt_min - pauze_tijd - tussenuren_min
    print(" *with",les_minuten,"minutes of actual lessons.")
