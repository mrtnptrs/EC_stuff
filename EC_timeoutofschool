#With this programm you can calculate the time you are out of the school at EC Boxmeer.

aantal_uren_invoer = int(input("Tot het hoeveelste uur heb je vandaag? Alleen maar gehele getallen van 1 t/m 9 invoeren!"))
minirooster = input("Heb je minirooster? (y/n)") #Wel of geen minirooster?
if minirooster == "y":  #hoe lang in minuten een lesuur duurt bij minirooster of zonder minirooster.
    een_uur = 40
elif minirooster == "n":
    een_uur = 50
else:
    print("Ongeldige invoer: geen y of n ingevuld om eventueel minirooster aan te geven. Je zult errors krijgen!")
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
    print("Error: input is too low or too high, You'll get errors!")
aantal_minuten = aantal_uren * een_uur

totaal_uren = (aantal_minuten+510)//60  #510 minuten zijn de 8 uur en 30 minuten van wanneer de school begint.
rest_minuten = (aantal_minuten+510) % 60

eindtijd = str(totaal_uren) + ":" + str(rest_minuten)

print("You're out today at",eindtijd)
