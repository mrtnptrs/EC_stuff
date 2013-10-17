#With this programm you can calculate the time you are out of the school at EC Boxmeer.

aantal_uren_invoer = int(input("Until which hour do you have today? Only insert values 1 till 9."))
minirooster = input("Do you have minirooster (y/n)")
if minirooster == "y":  #How loang a school hour is with or without minirooster.
    een_uur = 40
elif minirooster == "n":
    een_uur = 50
else:
    raise SystemExit("Error: wrong input of minirooster detected! Operation will now be cancelled!")

if aantal_uren_invoer == 1 or 2 or 3:
    aantal_uren = aantal_uren_invoer

elif aantal_uren_invoer>3 and aantal_uren_invoer<6 and minirooster == "y":
    aantal_uren = aantal_uren_invoer + (2/4)   #Eventuele kleine pauze meerekenen.

elif aantal_uren_invoer>3 and aantal_uren_invoer<6 and minirooster == "n":
    aantal_uren = aantal_uren_invoer + (2/5)   #Eventuele kleine pauze meerekenen.

elif aantal_uren_invoer>5 and aantal_uren_invoer<10 and minirooster == "y":
    aantal_uren = aantal_uren_invoer + (5/4)   #Eventuele kleine en grote pauze meerekenen.

elif aantal_uren_invoer>5 and aantal_uren_invoer<10 and minirooster == "n":
    aantal_uren = aantal_uren_invoer + (5/5)   #Eventuele kleine en grote pauze meerekenen.

if aantal_uren_invoer>9 or aantal_uren_invoer<1:
    raise SystemExit("Error: input of numbers of hours is too low or too high, the operation will now be cancelled!")

aantal_minuten = aantal_uren * een_uur

totaal_uren = (aantal_minuten+510)//60  #510 minutes are the eight hours and 30 minutes from the time when the school begins.
rest_minuten = (aantal_minuten+510) % 60

eindtijd = str(totaal_uren) + ":" + str(rest_minuten)

print("You're out today at",eindtijd)
