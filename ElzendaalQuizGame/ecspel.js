document.getElementById("container1").style.display = "none"; //Verbergt de asides en het vragenscherm
document.getElementById("eind").style.display = "none"; //Verbergt het eindscherm
document.getElementById("cheat").style.display = "none"; //Verberg standaard de cheat-knop. Wordt geactiveerd in naamspeler(); bij de gebruikersnaam "Cheat"
document.getElementById("godmode").style.display = "none"; //Verbergt de godmode knop standaard.
document.getElementById('gemakkelijk').focus(); //Focus op de "gemakkelijk"-knop

var achtergrond = new Audio("music/achtergrondmuziek.mp3"); //Laadt muziek, laat het in een loop draaien en start het, dit muziekje is een placeholder!
achtergrond.loop = true; //Dit laat de muziek in een loop lopen.
achtergrond.play(); //Start de muziek.

var gewonnen = new Audio("music/cheer.mp3"); //Laadt muziek, laat het in een loop draaien en start het, dit muziekje is een placeholder!
var verloren = new Audio("music/verliezen.mp3");
var win = new Audio("music/win.mp3");
var goed = new Audio("music/goed.mp3"); //Zorgt dat het "goed" geluid geladen wordt, dit is een placeholder!
var button1 = new Audio("music/button1.mp3");
var button2 = new Audio("music/button2.mp3");
var button3 = new Audio("music/button3.mp3");
var button4 = new Audio("music/button4.mp3");
var button5 = new Audio("music/button5.mp3");


function stopmusic(){
	achtergrond.pause(); //Pauzeer het muziekje
	achtergrond.currentTime = 0; //Zet de tijd van de muziek op nul, zodat de muziek dus eigenlijk gestopt is.
	gewonnen.pause();
	gewonnen.currentTime = 0;
	verloren.pause();
	verloren.currentTime = 0;
	win.pause();
	win.currentTime = 0;
}

var context = ["De eerste schooldag is aangebroken. Je loopt je klas binnen maar kent niemand van je medeleerlingen. Die enige vriend die je over hebt gehouden aan de basisschool is in een andere klas ingedeeld. Je wilt nieuwe vrienden maken, maar bent bang om afgewezen te worden.",
 "Je hebt binnenkort je allereerste toets op de middelbare school. Je doet het in de broek van de spanning. Je zit zo druk in je planning dat je je niet je hebt kunnen leren. Ook heb je niet  kunnen leren omdat Bertus van Diggelen niks heeft uitgelegd. Daarom moet je het zelf maar doen. Je hebt een hekel aan Bertus van Diggelen. Tevens heeft hij een oerlelijk kapsel met zwarte babykrulletjes. ", 
 "Je hebt de toets finaal verprutst en je bent er ook wel even klaar mee. Dus je doet voorlopig ook even niet al te veel meer voor school. Wat een gezeik, denk je elke keer. Maar dan heb je gehoord dat je favoriete Youtuber vanavond aan het streamen is. Het enige probleem is dat je je huiswerk voor de volgende dag nog niet af hebt. Maar hier heb je voorlopig eigenlijk even geen zin in. ",
 "Je maakt na een paar weken ook kennis met het leukste vak van school: Informatica! De welbekende man Greef van Moll geeft hier les. Je vindt het vak helemaal geweldig. Je hebt ook gehoord dat GvM aan judo doet. Daarom heb je vanavond een van de belangrijkste judowedstrijden van het jaar tegen je favoriete zweetleraar GvM!, maar je hebt een heel erg belangrijk proefwerk de volgende dag. De trainer heeft je erg nodig, omdat jij uitblinkt in je sport.",
 "GvM heeft een sportblessure en stelt zich zo aan dat hij van school getrapt wordt. Daarom krijg je een nieuwe informaticadocent. Er is nog niet zoveel bekend over hem. Behalve het feit dat hij geen frisse lucht/adem heeft. Ook staat hij erom bekend dat hij een uur lang naar het bord staat te hallucineren en op niks reageert. Achteraf zei hij dat hij aan het mediteren was. Je zit met een hele dringende vraag en je moet hem kost wat kost spreken. ",
 "Na een jaar op het Elzendaal heb je al een hele hoop meegemaakt. Van de meeste vieze, grappige en leuke dingen tot aan de saaiste en vervelendste dingen. Je bent er inmiddels al te vaak uitgestuurd en je hebt te veel stoute dingen uitgehaald. Binnenkort staat er een toetsweek op het programma. Maar je ouders willen dat je in de herfstvakantie mee op vakantie gaat naar Frankrijk. Je bent toe aan wat rust, maar je moet je toch goed voorbereiden op de aankomende proefwerkweek.",
 "Je hebt de toetsweek overleefd en je staat er goed voor. Alleen heb je niet al te veel vrienden in de klas en word je flink gepest. Een jongen zit je de hele tijd te irriteren en nare opmerkingen te maken. Je staat op het punt om in te grijpen maar je weet niet wat de gevolgen daar van zijn. Je bent helemaal klaar met dit soort mensen.",
 "Dit dilemma heb je ook weer overleefd. Je komt vrolijk thuis en gaat ook weer optijd naar bed. De volgende ochtend fiets je naar school. Je komt bijna te laat. Je komt bij het spoor aan, maar die is net open gegaan. Je ziet alle fietsers al aan de andere kant fietsen. Je hoort ze nog roepen: 'Kom, kom kom'. Je zit te twijfelen wat je moet doen. Er komen aan de lopende band auto’s langs, maar je wilt wel op tijd op school zijn. ",
 "Je hebt de laatste tijd heel veel last van buikpijn. Sommige mensen noemen dit ook wel obstipatie. Je zit dus weer met een probleem. Je hebt les en je moet nodig naar de WC. Maar je hebt gehoord dat iemand voor jou een mundige drol het neergelegd. Daarnaast tocht het altijd op de WC en hangt er een rotte eierenlucht. Oh ja, driekwart van de WC’s doen het niet. ",
 "Gelukkig heb je deze dag ook weer overleefd. Je bent heel blij als je weer terug naar huis gaat. De volgende ochtend ga je weer naar school. Je moeder is vergeten je boterham te smeren, hierdoor heb je hele erge honger. Je scheldt je moeder helemaal uit via WhatsApp. Wat is ze toch ook een domme jongen…. Daarnaast heb je ook nog eens het negende uur een hele saaie Informaticatoets.",
 "Je begint te puberen. Hierbij komen een paar dingen om de hoek kijken. Je krijgt gevoelens voor meisjes en één in het bijzonder: het mooiste meisje van de klas. Je gebruikt een van je beste openingszinnen. Die gaat namelijk als volgt: Volgens mijn horloge heb je geen slipje aan, waarop het meisje antwoordde: oh jawel.  'Oh sorry, loopt ie weer een uur voor'. Ze moet erom lachen maar je vriend die naast je staat is niet geamuseerd. Hij heeft namelijk ook een oogje op haar. Er komt een strijd tussen jouw en je maat.",
 "Doordat je het zo laat heb gemaakt met je vriendin ben je echt enorm moe de volgende ochtend. Daarom ben je de volgende dag te laat gekomen op school en je zou dus eigenlijk 8.00 uur moeten melden de volgende dag. Op Magister staat alleen nog niet aangegeven dat je moet melden.",
 "De week is alweer bijna voorbij. Het gaat zo snel allemaal. Je zit in de les bij geschiedenis en je zit naar het eindeloze lange geleuter van je 67 jaar oude lerares te luisteren. Om dit alles nog erger te maken, krijg je te horen dat je volgende week een uitstapje met je klas gaat maken. Je zit hier totaal niet op te wachten. Al helemaal niet als je hoor dat je naar kamp Vught gaat. Je hebt zo’n hekel aan uitstapjes en al helemaal uitstapjes met school. Bovendien gaat je vriendin niet mee.",
 "Op het Elzendaal College worden altijd veel uitstapjes geregeld. Een keer een paar dagen naar Ameland, Praag, Marokko, Oostenrijk etc… Het enige nadeel hiervan is dat er nooit alcohol genuttigd mag worden. Dit vinden de leerlingen heel erg jammer. Iedere leerling wil natuurlijk gewoon gaan pilsen. De mooiste verhalen komen natuurlijk bovenwater wanneer je finaal naar de klote bent. Er gebeuren allerlei dingen. Hier gaan wij onze mond niet vuil aan maken. Daarom vind jij het een schande dat er niet gedronken mag worden. Jij zit in de medezeggenschapsraad en mag de beslissing hierover maken.", 
 "De carnavals vakantie komt eraan en je hebt de keus om te gaan skiën met school of carnaval te vieren met je maten. Als je gaat skiën met school zullen de leraren dat leuk vinden. Als je carnaval gaat vieren met je maten is er 40% kans dat je een maagpomp nodig zal hebben, omdat je 24 pils op een dag zal gaan drinken.",
 "Na de carnavalsvakantie komt iedereen weer naar school toe. Iedereen deelt zijn of haar verhalen met elkaar. Op deze eerste dag heb je ook weer Informatica. Dit is altijd zo’n drama. Het vak is zo saai, maar dan krijg je te horen dat de docent Informatica ineens verdwenen is. Je krijgt dus niet meer te maken met urenlange hallucinaties naar het bord. Of met hele leuke woedeaanvallen. En wat je bovendien het meeste gaat missen is natuurlijk zijn zwetende oksels. Je vindt dit zo vervelend dat hij er niet meer is. ",
 "Je lerares Scheikunde is chagrijnig en geeft een hele moeilijke PO op over zuren en basen. Dit interesseert je helemaal geen bout. Het liefst wil je helemaal niks met Scheikunde te maken hebben. Maar je moest dit kiezen van je ouders.  ",
 "Je hebt pauze maar je bent je gymspullen vergeten voor het volgende uur. Je hebt ontzettende honger maar  als je je gymspullen gaat halen heb je geen tijd om te eten. Gym is je favoriete vak dus je wilt het niet missen. Als je de pauze skipt heb je de rest van de dag honger en gaan je schoolprestaties achteruit. Het liefst wil je natuurlijk maximaal gaan lopen bikken bij Alanya in boxmeer. Maar deze keet is pas vanaf 16:00 open.",
 "Sinds kort is er een nieuwe schoolregel erbij komen. Je mag niet meer tijdens de pauzes of schooluren het schoolplein verlaten. Je kunt dus ook niet meer blaken, want dat mocht al niet op school. Maar je wilt toch heel even van school weg. Je hebt ook nog eens ontzettend stomme maten waar je in de pauze niet bij wilt gaan zitten. Zij praten alleen over poep, pies en plas.",
 "Het galafeest komt eraan en je wilt er erg graag naartoe. Je hebt alleen afgesproken dat je die avond met je ouders naar een verjaardag zou gaan. Je ouders zouden het erg op prijs stellen als je ze zou vergezellen. Jijzelf hebt er niet veel zin in en gaat liever drinken met je maten. Je zit allerlei smoesjes te verzinnen, maar dit heeft geen enkele zin. Ook is je vriendin aanwezig op het galafeest en die wil je ook nog wel even zien. Je hebt nog wat zaken met haar die moeten worden opgelost :).  ",
 "Na het galafeest is het schoolgebouw van het  Elzendaalcollege nodig toe aan vervanging. Door de bezopen jongeren is het hele gebouw naar de klote. De verbouwing gaat wel ten koste van de leerlingen. Zij moeten een aantal jaren doorbrengen in een verrot gebouw aan de overkant van de straat. Dit heeft mogelijk gevolgen voor de prestaties van de leerlingen. Er wordt aan de leerlingen gevraagd wat zij willen.",
 "Je bent natuurlijk gewoon hopeloos genegeerd en een jaar laten is de verbouwing achter de rug en hierdoor heb je toegang tot de nieuwe computer lokalen van de school. Je moet dan ook meteen een praktische opdracht maken voor het vak informatica. Jij en je groepje besluiten een spel te maken over het leven van een scholier. Jullie willen de naam van de coördinator meneer De Lange gebruiken voor in het spel. De leraar zegt dat je dat eerst aan De Lange moet vragen. Je durft eigenlijk niet.",
 "Je krijgt naast je praktische opdracht van informatica ook het profielwerkstuk waar je nu je aandacht op moet vestigen. Daarvoor moet je eerst  van de leraar een partner en een vak kiezen. Informatica vind je een ontzettend leuk vak. Een partner kiezen vindt je wat lastiger. Je kent niemand die met jou zou willen samenwerken. Je twijfelt om dit aan de leraar te vertellen. De leraar is erg chagrijnig vandaag.",
 "Je profielwerkstuk is afgerond. Je hebt eindelijk weer tijd om in de kroeg bier te gaan tanken. Daarom overweeg je om met een paar vrienden naar de stad te gaan. Het is alleen wel doordeweeks. De volgende dag wordt je om 8:30 op school verwacht. Je hebt geen zin om met een kater op school te verschijnen, maar je wilt toch even vieren dat je het profielwerkstuk succesvol hebt afgerond.",
 "Binnenkort komen de examens eraan voor jou. Je kijkt er heel erg tegenop. Je hebt van verschillende oud-leerlingen gehoord dat het heel veel leren is.  Nou blijkt het zo dat in het weekend van te voren jouw favoriete festival is. Dit festival is maar 1 keer in de 5 jaar in jouw land. Dit is dus de enigste kans dat je er naar toe kunt. Al je vrienden gaan er naar toe. ",
 "Je hebt je examen gehaald en dat belooft dat er een hoop examenfeestjes aankomen. Je hebt zin om je aandacht helemaal ergens anders op te richten. Het eerste feest wordt gehouden in het huis van je mentor. Je zit met een paar medeleerlingen in het zwembad ontzettend veel bier te drinken. Je moet heel nodig naar de WC,  maar je hebt geen zin om uit het zwembad te klimmen en naar binnen te gaan. Je overweegt om het gewoon in het zwembad te doen. Je bent bang dat medeleerlingen de warmte voelen en weten dat je in het zwembad hebt gepist."];

//De vragen een voor een.
var vragen = ["1. Wat doe je?", 
"2. Maar wil je wel gaan leren?", 
"3. Ga je de stream kijken of ga je huiswerk maken?",
"4. Ga je naar de wedstrijd of ga je leren voor het proefwerk?",
"5. Wat doe je?",
"6. Ga je met je ouders mee op vakantie en maak je de hele toetsweek slecht of blijf je thuis om te leren voor school? ",
"7. Wat doe je?",
"8. Wat doe je?",
"9. Wat doe je?",
"10. Wat doe je?",
"11. Wat doe je?",
"12. Neem je risico om niet te gaan?",
"13. Wat ga je doen?",
"14. Wat stel je voor?",
"15. Wat doe je?",
"16. Wat ga je doen?",
"17. Wat doe je?",
"18. Wat doe je?",
"19. Wat doe je?",
"20. Wat doe je?",
"21. Wat zou jij adviseren in de medezeggenschapsraad?",
"22. Wat doe je?",
"23. Wat doe je?",
"24. Wat doe je?",
"25. Wat ga je doen?",
"26. Wat doe je?"];

//Lijst met een lijst erin voor elke vraag, hoeveelheid in een lijst hangt af van het aantal antwoorden.
var antwoorden = [["Je stelt je voor aan iedereen (60% kans dat ze je raar vinden en dat ze je gaan pesten)", "Je gaat alleen zitten aan een tafeltje voorin in het lokaal en je haalt hierdoor goede cijfers omdat niemand je afleidt. Je wordt zo wel het doelwit van de vele propjesschieters", "Je meldt je ziek de eerste hele week"], 
["Leren", "Gamen", "Sporten", "Ziek melden (25% dat Johannes erachter komt", "Te laat naar bed om te surfen op het  internet, waardoor je te laat op school komt volgende dag"], 
["Huiswerk maken", "Stream kijken en de volgende dag moe zijn", "Stream kijken en ondertussen huiswerk proberen te maken (65% kans dat je je huiswerk helemaal verprutst)"],
["Leren en wedstrijd afzeggen", "Naar wedstrijd gaan, maar stiekem tussendoor iedere keer naar de WC gaan om even adem te kunnen halen en in je boek te kunnen kijken. Hierdoor haal je een 5.4", "Naar wedstrijd gaan en een slecht punt halen"],
["Hem storen tijdens het mediteren", "Je probeert het via telephatie, maar het lukt niet", "De leraar met rust laten"], 
["Op vakantie gaan", "Thuisblijven en leren", "Je neemt je boeken mee op vakantie (75% kans dat je niet aan leren toekomt)"],
["Je inhouden en hem negeren. Je laat je dan dus hopeloos vernederen", "Je gaat het gesprek met hem aan (75% kans dat je hem weet te overbluffen)", "Je slaat hem keihard op z’n bakkes, zodat hij gelijk waterpas afgevoerd kan worden. Alle leerlingen juichen je toe"],
["Je fietst gewoon over met je ogen dicht en hoopt dat de auto stopt (60% kans dat je wordt aangereden)", "Je wacht gewoon tot alle auto’s voorbij zijn en komt te laat, je moet de volgende dag 8:00 uur melden", "Je neemt een andere route (60% kans dat je niet optijd komt)"],
["Je vraagt of de IBN het opruimt en kun je daarna naar de WC toe", "Je schijt de WC vol en spoelt niet door, maar helaas ziet een IBN’er dit (25% kans dat hij/zij een ordinaire klikspaan is)", "je gaat eerst naar de Jumbo, je haalt daar een 3 liter luchtverfrisser, een poepschep en een mondkapje en gaat dan naar de WC"],
["Je haalt een rubberachtig worstenbroodje bij de kantine, hierdoor zou je fit genoeg moeten zijn om de toets te kunnen maken. Ook zijn die dingen godsellendig duur en kost het dus bijna al je zakgeld (50% kans dat je hiervan ziek wordt en je de toets slecht zal maken, omdat je deze helemaal onderkotst)", "Je verhongert op school en maakt de toets slecht", "Je haalt i.p.v. van een rubberachtig worstenbroodje een stenen broodje bapao hierdoor vallen al je tanden eruit, maar je honger is gelukkig wel gestild"],
["Je slaat je vriend op zijn bek en zal dit weer doen als hij tegen het meisje praat (50% kans dat Johannes dit met zijn arendsogen zal zien)", "Je laat het meisje kiezen en wacht af", "Je geeft het meisje aan je vriend, waardoor je zwaar depressief wordt"],
["Je gaat je gewoon netjes melden de volgende dag (je ouders weten dus dat je vorige dag te laat bent gekomen)", "Je gaat je niet om 8.00 uur melden en je ouders komen er niet achter", "Je gaat klagen bij Johannes omdat je het er niet mee eens bent (2% kans dat hij je gelijk geeft)"],
["Je meldt je ziek en gaat thuis lekker gamen. Je zegt tegen je ouders dat ze een studiedag hebben op school (50% dat iemand erachter komt)", "Je gaat toch mee naar Kamp Vught", "Je gaat mee naar Kamp Vught, maar gaat allerlei streken uithalen zodat je nog wat plezier hebt"],
["Je stelt voor dat er voortaan alcohol geschonken mag worden", "Je stelt voor dat alcohol voortaan verboden is, waardoor iedereen je een mietje vindt", "Je stapt uit de medezeggenschapsraad, omdat je niets meer met deze onzin te maken wil hebben"],
["Je gaat skiën met school", "Je gaat carnaval vieren (40% kans dat je een maagpomp nodig zal hebben)"],
["Je zegt helemaal niets en gaat keihard feesten in je klas (50% kans dat Johannes je betrapt en je straf geeft)", "Je gaat naar Johannes als verklikker en laat hem een vervanger regelen, de gehele klas treitert jouw de rest van de dag", "Je doet niets en gaat heel serieus aan informatica werken"],
["Je leest je boek door en maakt een zeer sterke basische oplossing. Hiermee los je de lerares op", "Je maakt de PO toch en levert hem goed in, hierdoor heb je bijna geen vrije tijd meer", "Je negeert de PO, gaat gamen en de dag daarna ruziën met de lerares"],
["Je gaat je gymspullen halen", "Je gaat pauze houden"],
["Je gaat naar de Jumbo (60% kans dat je gepakt wordt)", "Je blijft toch op school", "Je gaat na school even naar de Jumbo"],
["Je gaat naar het galafeest", "Je gaat naar de verjaardag"],
["Verbouwen", "Niet verbouwen", "De leerlingen vrij geven (25% kans dat je moeder overspannen raakt van jou in deze periode)"],
["Je vraag het niet en gebruikt de naam toch (35% kans dat Johannes erachter komt en je straf geeft)", "Je vraag het aan Johannes en het mag niet"],
["Je vraagt het niet aan de leraar. Je maakt het profielwerkstuk alleen", "Je vraag het aan de leraar (50% kans dat hij je waterpas slaat, 50% kans dat hij een partner voor je kan vinden)"],
["Je gaat gewoon mee op stap", "Je drinkt niks terwijl je op stap gaat", "Je blijft thuis en gaat op tijd naar bed"],
["Je gaat naar het festival toe (70% kans dat je niet slaagt)", "Je blijft thuis en je gaat keihard leren", "Je neemt je boeken mee naar het festival"],
["Je rent snel het zwembad uit maar je hebt niet genoeg tijd om naar binnen te gaan. Je pist in de tuin", "Je plast in het zwembad (45% kans dat je medeleerlingen het niet merken)"]]; //Lijsten in een lijst: bij elke vraag weer een aparte lijst met antwoorden. Dit zorgt ervoor dat we minder variabelen aan hoeven te maken.

var kans = [0.60, 0.25, 0.65, 1, 1, 0.75, 0.75, 0.60, 0.25, 0.50, 0.50, 0.02, 0.50, 1, 0.40, 0.50, 1, 1, 0.60, 1, 0.25, 0.35, 0.50, 1, 0.70, 0.45]; //kans dat de lijst van scores2 wordt gekozen!

//Kansen: elke regel één vraag en voor elk antwoord één lijst met voor jezelf, ouders en jordannos de scoreverandering.
var scores1 = [[[20, 10, 0], [-5, -5, 15], [20, -10, -3]],
[[-10, 10, 11], [15, -7, -5], [10, 0, -3], [15, -10, -3], [10, -5, -10]], 
[[-9, 10, 11], [14, 0, -6], [6, 0, -6]],
[[-12, 4, 12], [14, -11, 0], [15, -9, -8]],
[[13, 0, -7], [-9, -7, -7], [-13, -8, 0]],
[[16, 7, -12], [-21, -7, 23], [1, 5, 2]],
[[-15, 6, 0], [18, 7, 10], [23, -6, -18]],
[[15, 12, 9], [-11, -5, -12], [-12, -4, -11]],
[[10, 6, -4], [13, 0, 0], [12, -7, -8]],
[[-4, 8, 15], [-9, -7, -10], [3, -7, 12]],
[[13, -6, 0], [-14, 13, 4], [-24, 0, 13]],
[[-12, -7, 15], [14, 0, 0], [61, 17, 10]],
[[22, 0, 0], [-12, 11, 13], [8, -9, -7]],
[[15, -5, -10], [-13, 10, 9], [-3, 0, -5]],
[[2, 8, 16], [15, 5, -6]],
[[18, 0, 0], [-10, 7, 22], [-9, 8, 13]],
[[35, -20, -15], [-15, 10, 17], [23, -11, -12]],
[[6, -7, -11], [14, -8, -15]],
[[18, 0, 0], [-15, 0, 8], [-9, 5, 0]],
[[14, -12, 9], [-11, 15, 0]],
[[-17, -13, 26], [11, 5, -10], [27, -8, -14]],
[[-17, -7, -12], [-5, 0, -5]],
[[-11, 0, 5], [-18, -7, 5]],
[[19, -8, -9], [-9, 4, 7], [-15, 6, 16]],
[[17, -9, -7], [-8, 9, 4], [-2, 3, 1]],
[[12, 0, -10], [-21, 0, 0]]]

//Alternatieve scorelijst, voor als het negatief uitvalt voor de speler.
var scores2 = [[[-20, -10, 0], [-5, -5, 15], [20, -10, -3]],
[[-10, 10, 11], [15, -7, -5], [10, 0, -3], [15, -10, -30], [10, -5, -10]],
[[-9, 10, 11], [14, 0, -6], [-10, -5, -19]],
[[-12, 4, 12], [14, -11, 0], [15, -9, -8]],
[[13, 0, -7], [-9, -7, -7], [-13, -8, 0]],
[[16, 7, -12], [-21, -7, 23], [-11, -5, -10]],
[[-15, 6, 0], [-10, -5, 6], [23, -6, -18]],
[[-21, -16, -9], [-11, -5, -12], [-12, -4, -11]],
[[10, 6, -4], [7, -3, -9], [12, -7, -8]],
[[-12, -6, -13], [-9, -7, -10], [3, -7, 12]],
[[12, -11, -14], [-14, 13, 4], [-24, 0, 13]],
[[-12, -7, 15], [14, 0, 0], [-5, -3, -12]],
[[-9, -11, -14], [-12, 11, 13], [8, -9, -7]],
[[15, -5, -10], [-13, 10, 9], [-3, 0, -5]],
[[2, 8, 16], [5, -11, -7]],
[[5, -10, -15], [-10, 7, 22], [-9, 8, 13]],
[[35, -20, -15], [-15, 10, 17], [23, -11, -12]],
[[6, -7, -11], [14, -8, -15]],
[[-7, -12, -23], [-15, 0, 8], [-9, 5, 0]],
[[14, -12, 9], [-11, 15, 0]],
[[-17, -13, 26], [11, 5, -10], [10, -23, -15]],
[[17, 0, 0], [-5, 0, -5]],
[[-11, 0, 5], [15, 8, 4]],
[[19, -8, -9], [-9, 4, 7], [-15, 6, 16]],
[[-18, -11, -9], [-8, 9, 4], [-2, 3, 1]],
[[12, 0, -10], [17, 0, 0]]]

function kanscalc(kanswaarde){ //kans in de vorm van 0.xx moet je als parameter meegeven.
	return Math.random() <= kanswaarde; //Math.random kiest een random getal van 0 TOT 1, dus het getal bereikt nooit precies de 1!
	//Geeft true terug als de opgegeven kans groter is dan de berekende kans >>> scores1, bij false is de opgegeven kans kleiner dan de berekende kans >>> scores1
	//Bij 50% kans >>> kansnulpuntxx = 0.50 en bij 75% >>> kansnulpuntxx = 0.75
}

function geluidcheck(){ //Checkt of het geluid wel of niet aan staat, nodig voor of we wel of niet muziek en geluidseffecten moeten afspelen.
	var geluid = document.getElementById('geluidbutton').value; //Haal de waarde van de geluidsbutton op.
	if (geluid == "Geluid uitzetten"){ //Dus als geluid aan staat.
		return true; //Geluid staat aan.
	}
	else if (geluid == "Geluid aanzetten"){ //Dus als geluid uit staat.
		return false; //Geluid staat uit.
	}
}

function geluidaanuitknop(){ //Geluid wordt hier uitgezet of aangezet als je de knop hiervoor indrukt.
	var geluid = document.getElementById('geluidbutton').value;
	if (geluid == "Geluid uitzetten"){ //Dus als het geluid nu aan staat.
		document.getElementById('geluidbutton').value = "Geluid aanzetten"; //Tekst in de buttons wordt veranderd
		document.getElementById('geluidbuttonwelkom').value = "Geluid aanzetten"; //Tekst in de buttons wordt veranderd
		document.getElementById('geluidbuttoneind').value = "Geluid aanzetten"; //Tekst in de buttons wordt veranderd
		stopmusic();
	}
	else if (geluid == "Geluid aanzetten"){ //Dus als het geluid nu uit staat
		document.getElementById('geluidbutton').value = "Geluid uitzetten"; //Tekst in de buttons wordt veranderd
		document.getElementById('geluidbuttonwelkom').value = "Geluid uitzetten"; //Tekst in de buttons wordt veranderd
		document.getElementById('geluidbuttoneind').value = "Geluid uitzetten"; //Tekst in de buttons wordt veranderd
		achtergrond.play();
	}
}

function startspel(){
	if (geluidcheck()){ //Als geluid aan staat hoor je het geluid
		goed.play();
	}
	document.getElementById('welkom').style.display = 'none'; //Verberg het welkoms/introscherm.
	document.getElementById('container1').style.display = 'block'; //toont gedeeltes met de vragen en de zijvakken met de scores, die allemaal in 1 container staan.
	document.getElementById("vragen").style.display = "none"; //Verbergt vragen in bovenstaande container. 
	document.getElementById("instructies").style.display = "block";//Toont de asides en het vragenscherm
	document.getElementById("eind").style.display = "none"; //Verbergt de asides en het vragenscherm
	document.getElementById('gemakkelijk').blur(); //Focus niet meer op de "gemakkelijk"-knop.
	document.getElementById('knopinstructies').focus(); //Focus op de doorgaanknop in het instructiescherm, zodat je hier snel met "enter" doorheen kunt.
}

document.getElementById('knopinstructies').onclick = function(){ //Als je de button aanklikt om de naam te veranderen
	document.getElementById("instructies").style.display = "none"; //Instructiescherm verbergen
	document.getElementById("vragen").style.display = "block"; //Vragen zichtbaar maken.
	document.getElementById('knopinstructies').blur(); //Fucus niet meer op de doorgaanknop bij het introductiescherm.
}

function leegmaken(){
	//Zoekt een voor een de velden op en maakt ze leeg
	var context = document.getElementById("context");
	context.innerHTML = "";
	var vraag = document.getElementById("vraag");
	vraag.innerHTML = "";
	var antwoord1  = document.getElementById("antwoord1");
	antwoord1.innerHTML = "";
	var antwoord2 = document.getElementById("antwoord2");
	antwoord2.innerHTML = "";
	var antwoord3 = document.getElementById("antwoord3");
	antwoord3.innerHTML = "";
	var antwoord4 = document.getElementById("antwoord4");
	antwoord4.innerHTML = "";
	var antwoord5 = document.getElementById("antwoord5");
	antwoord5.innerHTML = "";	
}

function disablebuttons(){
	//css van de buttons wordt geregeld in stylesheet.css
	//Alle buttons worden uitgezet om later alleen de bonodigde buttons weer aan te zetten in vraagprint();
	document.getElementById("button1").disabled = true;
	document.getElementById("button2").disabled = true;
	document.getElementById("button3").disabled = true;
	document.getElementById("button4").disabled = true;
	document.getElementById("button5").disabled = true;
}

function vraagprint(v){
	//Kijkt eerst hoeveel antwoorden er zijn bij de desbetreffende vraag.
	if (antwoorden[v].length == 2){ //Als het antwoord een lengte van 2 heeft.
		var tekst = document.getElementById("context"); //Haal de locatie van de context in de html op
		tekst.innerHTML = context[v]; //Vul de context bij de bijbehorende vraag.
		var vraag = document.getElementById("vraag"); //Haal de locatie van de vraag in de html op
		vraag.innerHTML = vragen[v]; //Vul de vraag in bij het bijbehorende vraagnummer.
		
		var antwoord1  = document.getElementById("antwoord1"); //Haal de locatie van het eerste antwoord in de html op
		antwoord1.innerHTML = "1. " + antwoorden[v][0]; //Vul het eerste antwoord in bij het bijbehorende vraagnummer.
		var antwoord2  = document.getElementById("antwoord2"); //Haal de locatie van het tweede antwoord in de html op
		antwoord2.innerHTML = "2. " + antwoorden[v][1]; //Vul het tweede antwoord in bij het bijbehorende vraagnummer.
		
		//Maak de buttons weer klikbaar; hetzelfde aantal buttons als dat er antwoorden zijn.
		document.getElementById("button1").disabled = false;
		document.getElementById("button2").disabled = false;
	}
	else if (antwoorden[v].length == 3){
		var tekst = document.getElementById("context");
		tekst.innerHTML = context[v];
		var vraag = document.getElementById("vraag");
		vraag.innerHTML = vragen[v];
		
		var antwoord1  = document.getElementById("antwoord1");
		antwoord1.innerHTML = "1. " + antwoorden[v][0];
		var antwoord2  = document.getElementById("antwoord2");
		antwoord2.innerHTML = "2. " + antwoorden[v][1];
		var antwoord3  = document.getElementById("antwoord3");
		antwoord3.innerHTML = "3. " + antwoorden[v][2];
		
		document.getElementById("button1").disabled = false;
		document.getElementById("button2").disabled = false;
		document.getElementById("button3").disabled = false;
	}
	else if (antwoorden[v].length == 4){
		var tekst = document.getElementById("context");
		tekst.innerHTML = context[v];
		var vraag = document.getElementById("vraag");
		vraag.innerHTML = vragen[v];
		
		var antwoord1  = document.getElementById("antwoord1");
		antwoord1.innerHTML = "1. " + antwoorden[v][0];
		var antwoord2  = document.getElementById("antwoord2");
		antwoord2.innerHTML = "2. " + antwoorden[v][1];
		var antwoord3  = document.getElementById("antwoord3");
		antwoord3.innerHTML = "3. " + antwoorden[v][2];
		var antwoord4  = document.getElementById("antwoord4");
		antwoord4.innerHTML = "4. " + antwoorden[v][3];
		
		document.getElementById("button1").disabled = false;
		document.getElementById("button2").disabled = false;
		document.getElementById("button3").disabled = false;
		document.getElementById("button4").disabled = false;
	}
	else if (antwoorden[v].length == 5){
		var tekst = document.getElementById("context");
		tekst.innerHTML = context[v];
		var vraag = document.getElementById("vraag");
		vraag.innerHTML = vragen[v];
		
		var antwoord1  = document.getElementById("antwoord1");
		antwoord1.innerHTML = "1. " + antwoorden[v][0];
		var antwoord2  = document.getElementById("antwoord2");
		antwoord2.innerHTML = "2. " + antwoorden[v][1];
		var antwoord3  = document.getElementById("antwoord3");
		antwoord3.innerHTML = "3. " + antwoorden[v][2];
		var antwoord4  = document.getElementById("antwoord4");
		antwoord4.innerHTML = "4. " + antwoorden[v][3];
		var antwoord5  = document.getElementById("antwoord5");
		antwoord5.innerHTML = "5. " + antwoorden[v][4];
		
		document.getElementById("button1").disabled = false;
		document.getElementById("button2").disabled = false;
		document.getElementById("button3").disabled = false;
		document.getElementById("button4").disabled = false;
		document.getElementById("button5").disabled = false;
	}
}

function reset(){ //Reset het spel
	stopmusic();
	if (geluidcheck()){
		achtergrond.play();
	}
	document.getElementById('reseteind').blur(); //Fucus niet meer op de opnieuwknop bij het eindscherm.
	document.getElementById('knopinstructies').blur(); //Fucus niet meer op de doorgaanknop bij het introductiescherm.
	document.getElementById('welkom').style.display = 'block'; //Toont welkomsscherm weer
	document.getElementById('container1').style.display = 'none'; //Verbergt asides en vragenscherm
	document.getElementById("eind").style.display = "none"; // Verbergt verliezersscherm.
	document.getElementById('gemakkelijk').focus(); //Focus op de knop van de moeilijkheid gemakkelijk bij het welkomsscherm.
	document.getElementById("vragenscherm").style.display = "block"; //Verbergt het speeldscherm
	
	var eraferbijspeler = document.getElementById("eraferbijspeler"); 
	eraferbijspeler.innerHTML = ""; //Zorgt ervoor dat de scoreverschillen-strings allemaal leeg zijn
	var eraferbijouders = document.getElementById("eraferbijouders");
	eraferbijouders.innerHTML = ""; //Zorgt ervoor dat de scoreverschillen-strings allemaal leeg zijn
	var eraferbijjohannes = document.getElementById("eraferbijjohannes");
	eraferbijjohannes.innerHTML = ""; //Zorgt ervoor dat de scoreverschillen-strings allemaal leeg zijn
	
	disablebuttons();
	leegmaken();
	v = 0; //Zodat we weer bij vraag 1 kunnen beginnen
	vraagprint(v); //zet vraag 1 er alvast neer, ook al is dit nog niet zichtbaar.
}

String.prototype.firsttouppercase = function() //Wordt in naamspeler() aangeroepen of van de eerste letter een hoofdletter te maken
{
    return this.charAt(0).toUpperCase() + this.substr(1);
}

var vraagnaam = ""; //Maakt de variabele aan voor de naam van de speler, standaard leeg
function naamspeler(){ //Kan aangeroepen worden aan het begin van het spel en om de naam van de speler te weten te komen, d.m.v. naamspeler();
	if (vraagnaam == ""){ //Als naam nog niet is ingevuld of is leeggemaakt in de onclick-functie onder deze functie.
		vraagnaam = prompt("Wat is je naam?"); //Vraagt naam
		while (vraagnaam == "" || !vraagnaam){ //Of de invoer niet leeg is of dat er op annuleren is gedrukt.
			vraagnaam = prompt("Wat is je naam nou eigenlijk? Anders wordt het moeilijk praten!"); 
		}
		if (vraagnaam != "" && vraagnaam){ //Als er een naam in is gevoerd en op "ok" is gedrukt
			while (vraagnaam.length > 15){ //Checkt of opgegeven naam te lang is, zo ja, dan laat hij je een nieuwe naam invoeren.
				vraagnaam = prompt("Je ingevoerde naam was te lang! Voer een kortere naam in!");
				while (vraagnaam == "" || !vraagnaam){ //Of de invoer niet leeg is of dat er op annuleren is gedrukt.
					vraagnaam = prompt("Eerst was je naam te lang en nu weer niks ingevuld!? Doe het nu eens een keer goed!"); 
				}
			}
			vraagnaam = vraagnaam.firsttouppercase(); //Maakt van de eerste letter een hoofdletter
		}
		var naam = document.getElementById("naam");
		naam.innerHTML = vraagnaam; //Vult de naam in in de header van de aside van de speler.
		
		if (vraagnaam == "Cheat" || vraagnaam == "CHEAT"){ //Checkt of de naam gelijk is aan "cheat"
			document.getElementById("allecheats").style.display = "block"; //Cheat wordt zichtbaar als de username "Cheat" is.
			document.getElementById("godmode").style.display = "block";
			document.getElementById("cheat").style.display = "block";
			document.getElementById("cheatmakkelijk").style.display = "none";
			document.getElementById("cheatgemiddeld").style.display = "none";
			document.getElementById("cheatmoeilijk").style.display = "none";
		}
		else{
			document.getElementById("allecheats").style.display = "none"; //Cheat is niet zichtbaar.
		}
		return vraagnaam; //Geeft de naam van de speler terug, nodig voor verwerking in vragen en context
	}
	else { //Als de naam al ingevuld was als je het spel herstart, via de resetknop
		return document.getElementById("naam").innerHTML; //Geeft de naam van de speler terug, nodig voor verwerking in vragen en context
	}
}

function cheatmoeilijkheid(){
	if (document.getElementById("cheatmakkelijk").style.display == "block"){ //Check of een van de moeilijkheidsgraad-cheats al zichtbaar is, want dan moet de rest ook zichtbaar zijn.
		document.getElementById("cheatmakkelijk").style.display = "none"; //Maakt de moeilijkheidsgraden-cheats onzichtbaar.
		document.getElementById("cheatgemiddeld").style.display = "none";
		document.getElementById("cheatmoeilijk").style.display = "none";
	}
	else{ //Maak alle moeilijkheidsgraden-cheats zichtbaar.
		document.getElementById("cheatmakkelijk").style.display = "block";
		document.getElementById("cheatgemiddeld").style.display = "block";
		document.getElementById("cheatmoeilijk").style.display = "block";
	}
}

document.getElementById('naambutton').onclick = function(){ //Als je de button aanklikt om de naam te veranderen
	vraagnaam = ""; //Zorgt dat de naam leeggelaten wordt.
	naamspeler(); //User kan hier de nieuwe naam invoeren
}

document.getElementById('godmode').onclick = function(){ //Als je de button aanklikt om Godmode te activeren, verandert de waarde van de knop.
	var neverfail = document.getElementById("godmode").value;
	if (neverfail == "Godmode aanzetten"){ //Als de waarde van de knop dat is
		document.getElementById("godmode").value = "Godmode uitzetten"; //Waarde veranderen.
	}
	else if (neverfail == "Godmode uitzetten"){ //Anders kijken of de knop deze waarde heeft.
		document.getElementById("godmode").value = "Godmode aanzetten"; //Waarde veranderen.
	}
}

function scoreset(speler, ouders, johannes){ //Deze functie veranderd de scores, de progress-bars en de kleur van de string van het scoreverschil, met als variabele de nieuwe scores. Wordt aangeroepen in scorecalc()
	document.getElementById("progressspeler").style.width = speler + "%"; //Veranderdt de lengte van de ingevulde progress bar aan de hand van de scores.
	document.getElementById("progressouders").style.width = ouders + "%";
	document.getElementById("progressjohannes").style.width = johannes + "%";
	
	//Onderstaande is niet makkelijker te maken met een for-loop, aangezien iedere keer de variabele naam verandert, maar ook de id-naam.
	var scorespeler = document.getElementById("progressspeler"); //Veranderdt de tekst in de progress bar naar de nieuwe waarde, waarbij het eerst de invulplaats zoekt en daarna invult met de nieuwe waarde.
	scorespeler.innerHTML = speler;
	var scoreouders = document.getElementById("progressouders");
	scoreouders.innerHTML = ouders;
	var scorejohannes = document.getElementById("progressjohannes");
	scorejohannes.innerHTML = johannes;
	
	//Onderstaande is niet makkelijker te maken met een for-loop, aangezien iedere keer de variabele naam verandert, de smiley, de kleur van de progressbar, maar ook de id-naam. Een for-loop zou te ingewikkeld worden.
	if (speler <= 35){ //Veranderdt kleur progress bar aan de hand van de scores en verandert hierbij ook de smilies.
		document.getElementById("progressspeler").className = "progress-bar progress-bar-danger progress-bar-striped active";
		document.getElementById("smileyspeler").src = "img/smileyfout.png"; //Verandert de source/bron van de afbeelding.
	}
	else if (speler > 35 && speler < 70){
		document.getElementById("progressspeler").className = "progress-bar progress-bar-warning progress-bar-striped active";
		document.getElementById("smileyspeler").src = "img/smileytwijfel.png";
	}
	else if (speler >= 70){
		document.getElementById("progressspeler").className = "progress-bar progress-bar-success progress-bar-striped active";
		document.getElementById("smileyspeler").src = "img/smileygoed.png";
	}
	if (ouders <= 35){
		document.getElementById("progressouders").className = "progress-bar progress-bar-danger progress-bar-striped active";
		document.getElementById("smileyouders").src = "img/smileyfout.png";
	}
	else if (ouders > 35 && ouders < 70){
		document.getElementById("progressouders").className = "progress-bar progress-bar-warning progress-bar-striped active";
		document.getElementById("smileyouders").src = "img/smileytwijfel.png";
	}
	else if (ouders >= 70){
		document.getElementById("progressouders").className = "progress-bar progress-bar-success progress-bar-striped active";
		document.getElementById("smileyouders").src = "img/smileygoed.png";
	}
	if (johannes <= 35){
		document.getElementById("progressjohannes").className = "progress-bar progress-bar-danger progress-bar-striped active";
		document.getElementById("smileyjohannes").src = "img/smileyfout.png";
	}
	else if (johannes > 35 && johannes < 70){
		document.getElementById("progressjohannes").className = "progress-bar progress-bar-warning progress-bar-striped active";
		document.getElementById("smileyjohannes").src = "img/smileytwijfel.png";
	}
	else if (johannes >= 70){
		document.getElementById("progressjohannes").className = "progress-bar progress-bar-success progress-bar-striped active";
		document.getElementById("smileyjohannes").src = "img/smileygoed.png";
	}
	
	if (speler <= 3){ //Verandert de kleur van de scores in de progress bars in zwart als deze onder de drie komt, zodat dit zichtbaar blijft, anders blijft de score wit.
		document.getElementById("progressspeler").style.color = "black";
	}
	else {
		document.getElementById("progressspeler").style.color = "white";
	}
	if (ouders <= 3){
		document.getElementById("progressouders").style.color = "black";
	}
	else {
		document.getElementById("progressouders").style.color = "white";
	}
	if (johannes <= 3){
		document.getElementById("progressjohannes").style.color = "black";
	}
	else {
		document.getElementById("progressjohannes").style.color = "white";
	}
}

function winlosecheck(vraagnummer, speler, ouders, johannes){ //Checkt of je wint of verliest.
	var titeleind = document.getElementById("titel"); //Haalt de locatie van de titel van het eindscherm op.
	var inhoudeind = document.getElementById("inhoud"); //Haalt de locatie van de inhoud van het eindscherm op
	var god = document.getElementById("godmode").value; //Haalt de waarde van de godmodeknop op, om te zien of het wel of niet is geactiveerd.
	
	//If en else if, omdat de inhoud steeds anders is en de drie waardes elk een aparte inhoud heeft van het eindscherm.
	//god == "Godmode aanzetten" checkt of godmode uitstaat, want anders kun je niet verliezen.
	if (speler == 0 && god == "Godmode aanzetten"){ //Checkt of Speler de nul heeft bereikt, zodat je verliest.
		document.getElementById("vragenscherm").style.display = "none"; //Verbergt het speeldscherm
		document.getElementById("eind").style.display = "block";
		titeleind.innerHTML = "Je hebt het spel verloren!"; //Titel invullen.
		//Inhoud invullen.
		inhoudeind.innerHTML = "Je bent zo depressief geworden dat je het leven op het Elzendaal niet meer ziet zitten. Je klimt daarom het dak op om ervanaf te springen, maar net op het moment dat je wilt springen, stort het dak onder je in. Je stort zo 3 verdiepingen naar beneden om voor de deur bij P01 terecht te komen. Je bent gelukkig niet ernstig gewond.";
		document.getElementById('reseteind').focus(); //Focus op de reset button van het eindscherm.
		if (geluidcheck()){
			achtergrond.pause();
			verloren.play();
		}
	}
	else if (ouders == 0 && god == "Godmode aanzetten"){ //Checkt of Ouders de nul heeft bereikt, zodat je verliest.
		document.getElementById("vragenscherm").style.display = "none"; //Verbergt het speeldscherm
		document.getElementById("eind").style.display = "block";
		titeleind.innerHTML = "Je hebt het spel verloren!";
		inhoudeind.innerHTML = "Je ouders zijn je helemaal beu. Ze hebben je op de adoptielijst gezet. Er zijn twee mogelijke kandidaten: Johannes de Lange en Mohammed Abayomi (een boer uit Afrika). Aan jou de keuze en na een lange tijd nagedacht te hebben kies je voor de boer uit Afrika. Je vertrekt naar Afrika en je ziet de verotte heer Abayomi staan. Je moet hem helpen bij zijn werk. Je ziet het leven na een week al niet meer zitten. Je gaat op het rieten dak staan en zakt uiteindelijk erdoor heen. Je hele moel zit onder de stront.";
		document.getElementById('reseteind').focus();
		if (geluidcheck()){
			achtergrond.pause();
			verloren.play();
		}
	}
	else if (johannes == 0 && god == "Godmode aanzetten"){
		document.getElementById("vragenscherm").style.display = "none"; //Verbergt het speeldscherm
		document.getElementById("eind").style.display = "block";
		titeleind.innerHTML = "Je hebt het spel verloren!";
		inhoudeind.innerHTML = "Johannes is helemaal klaar met jou en gooit je de school uit. Je bent voor 35 jaar geschorst van het Elzendaal door de vele fratsen die je hebt uitgehaald. Na 35 jaar begint je avontuur weer opnieuw als brugger. Helaas is Johannes dat jaar net vervangen door Mohammed Abayomi (een boer uit Afrika). De school gaat meteen failliet. Abayomi wordt met een fruitmand teruggestuurd naar Afrika.";
		document.getElementById('reseteind').focus();
		if (geluidcheck()){
			achtergrond.pause();
			verloren.play();
		}
	}
	else if ((speler != 0 && ouders != 0 && johannes != 0 && vraagnummer == vragen.length)||(god == "Godmode uitzetten" && vraagnummer == vragen.length && (johannes == 0 || speler == 0 || ouders == 0))){
		if (geluidcheck()){
			achtergrond.pause();
			gewonnen.play();
			gewonnen.onended=function(){win.play();};
		}
		document.getElementById("vragenscherm").style.display = "none"; //Verbergt het speeldscherm
		document.getElementById("eind").style.display = "block";
		titeleind.innerHTML = "Je hebt het spel uitgespeeld";
		inhoudeind.innerHTML = "Je bent geslaagd! Je ouders zijn superblij en belonen je met Call of Duty Black Ops 3. Johannes de Lange zoals altijd maar matig positief, maar ja, je ziet hem toch nooit meer. Je gaat nu naar de Uni: het Ratbout. Je hebt het hier al heel snel naar je zin. Je staat aan het begin van je nieuwe carrière.";
		document.getElementById('reseteind').focus();
	}
}

function scoreverschil(spelerminplus, oudersminplus, johannesminplus){ //Zet het scoreverschil er juist neer, met de juiste kleur.
	//Geen for-loop vanwege de veranderende variabelen en de veranderende id's.
	var eraferbijspeler = document.getElementById("eraferbijspeler"); //Zoekt de plaats van de scoreveranderings-string
	if (spelerminplus == 0){ //Als de scoreverandering gelijk is aan nul
		eraferbijspeler.innerHTML = "Scoreverschil: " + spelerminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijspeler").style.color = "black"; //Maakt de scoreveranderingsstring de kleur zwart
    }
	else if (spelerminplus > 0){ //Als het scoreverschil boven de nul is
		eraferbijspeler.innerHTML = "Scoreverschil: +" + spelerminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijspeler").style.color = "green"; //Maakt de scoreveranderingsstring de kleur groen
	}
	else if (spelerminplus < 0){ //Als het scoreverschil onder de nul is
		eraferbijspeler.innerHTML = "Scoreverschil: " + spelerminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijspeler").style.color = "red"; //Maakt de scoreveranderingsstring de kleur rood
	}
	
	var eraferbijouders = document.getElementById("eraferbijouders"); //Zoekt de plaats van de scoreveranderings-string
	if (oudersminplus == 0){ //Als de scoreverandering gelijk is aan nul
		eraferbijouders.innerHTML = "Scoreverschil: " + oudersminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijouders").style.color = "black"; //Maakt de scoreveranderingsstring de kleur zwart
    }
	else if (oudersminplus > 0){ //Als het scoreverschil boven de nul is
		eraferbijouders.innerHTML = "Scoreverschil: +" + oudersminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijouders").style.color = "green"; //Maakt de scoreveranderingsstring de kleur groen
	}
	else if (oudersminplus < 0){ //Als het scoreverschil onder de nul is
		eraferbijouders.innerHTML = "Scoreverschil: " + oudersminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijouders").style.color = "red"; //Maakt de scoreveranderingsstring de kleur rood
	}
	
	var eraferbijjohannes = document.getElementById("eraferbijjohannes"); //Zoekt de plaats van de scoreveranderings-string
	if (johannesminplus == 0){ //Als de scoreverandering gelijk is aan nul
		eraferbijjohannes.innerHTML = "Scoreverschil: " + johannesminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijjohannes").style.color = "black"; //Maakt de scoreveranderingsstring de kleur zwart
    }
	else if (johannesminplus > 0){ //Als het scoreverschil boven de nul is
		eraferbijjohannes.innerHTML = "Scoreverschil: +" + johannesminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijjohannes").style.color = "green"; //Maakt de scoreveranderingsstring de kleur groen
	}
	else if (johannesminplus < 0){ //Als het scoreverschil onder de nul is
		eraferbijjohannes.innerHTML = "Scoreverschil: " + johannesminplus; //Maakt de string met het scoreverschil erin.
		document.getElementById("eraferbijjohannes").style.color = "red"; //Maakt de scoreveranderingsstring de kleur rood
	}
}

function scorecalc(vraagnummer, spelerminplus, oudersminplus, johannesminplus){ //Deze functie rekent de scores uit aan de hand van de oorspronkelijke scores -/+ de waarde die er af of bij komen (de parameters in deze functie).
	
	//Haal de waarde op waarin staat welke spelmode is geactieveerd.
	var spelmode = document.getElementById("spelmodus").innerHTML; 
	
	if (spelmode == "Spelmodus: makkelijk"){ //Als de spelmode makkelijk is.
		if (spelerminplus < 0){
			spelerminplus *= 1.00; //Alle negatieve waardes hoger maken.
		}
		else if (spelerminplus > 0){
			spelerminplus *= 1.10; //Alle positieve waardes groter maken.
		}
		if (oudersminplus < 0){
			oudersminplus *= 1.00; //Alle negatieve waardes hoger maken.
		}
		else if (oudersminplus > 0){
			oudersminplus *= 1.10; //Alle positieve waardes groter maken.
		}
		if (johannesminplus < 0){
			johannesminplus *= 1.00; //Alle negatieve waardes hoger maken.
		}
		else if (johannesminplus > 0){
			johannesminplus *= 1.10; //Alle positieve waardes groter maken.
		}
	}
	if (spelmode == "Spelmodus: moeilijk"){ //Als de spelmode moeilijk is.
		if (spelerminplus < 0){
			spelerminplus *= 1.25; //Alle negatieve waardes nog negatiever maken.
		}
		else if (spelerminplus > 0){
			spelerminplus *= 0.75; //Alle positieve waardes kleiner maken.
		}
		if (oudersminplus < 0){
			oudersminplus *= 1.25; //Alle negatieve waardes nog negatiever maken.
		}
		else if (oudersminplus > 0){
			oudersminplus *= 0.75; //Alle positieve waardes kleiner maken.
		}
		if (johannesminplus < 0){
			johannesminplus *= 1.25; //Alle negatieve waardes nog negatiever maken.
		}
		else if (johannesminplus > 0){
			johannesminplus *= 0.75; //Alle positieve waardes kleiner maken.
		}
	}
	
	spelerminplus = Math.round(spelerminplus); //Rond de waardes een voor een af tot een geheel getal.
	oudersminplus = Math.round(oudersminplus); //Rond de waardes een voor een af tot een geheel getal.
	johannesminplus = Math.round(johannesminplus); //Rond de waardes een voor een af tot een geheel getal.
	
	var speler = Number(document.getElementById("progressspeler").innerHTML) + spelerminplus; //Deze drie variabelen tellen de oorspronkelijk scores op bij de behaalde scores, behaalde scores kunnen ook negatief zijn!
	var ouders = Number(document.getElementById("progressouders").innerHTML) + oudersminplus;
	var johannes = Number(document.getElementById("progressjohannes").innerHTML) + johannesminplus;
	
	//Scores mogen nooit onder nul of boven de honderd komen en het scoreverschil moet hierop aangepast worden!
	//Als de score boven de honderd komt, dan de score is 100.
	//Als de score onder de nul komt, dan is de score 0
	if (speler > 100){ 
		spelerminplus -= (speler%100); //Totaal van de scoreverandering - het aantal punten dat de score over de 100 gaat
		speler = 100;
	}
	else if (speler <= 0){
		spelerminplus -= speler; //Totaal van de scoreverandering - de hoeveelheid dat de score onder de nul komt (in dit geval is dit negatief, dus -- is gelijk aan +)
		speler = 0;
	}
	if (ouders > 100){
		oudersminplus -= (ouders%100); //Totaal van de scoreverandering - het aantal punten dat de score over de 100 gaat
		ouders = 100;
	}
	else if (ouders <= 0){
		oudersminplus -= ouders; //Totaal van de scoreverandering - de hoeveelheid dat de score onder de nul komt (in dit geval is dit negatief, dus -- is gelijk aan +)
		ouders = 0;
	}
	if (johannes > 100){
		johannesminplus -= (johannes%100); //Totaal van de scoreverandering - het aantal punten dat de score over de 100 gaat
		johannes = 100;
	}
	else if (johannes <= 0){
		johannesminplus -= johannes; //Totaal van de scoreverandering - de hoeveelheid dat de score onder de nul komt (in dit geval is dit negatief, dus -- is gelijk aan +)
		johannes = 0;
	}
	scoreverschil(spelerminplus, oudersminplus, johannesminplus); //Zet het scoreverschil correct in de asides.
	scoreset(speler, ouders, johannes); //scores worden doorgegeven aan de asides, variabelen zijn de nieuwe scores
	winlosecheck(vraagnummer, speler, ouders, johannes); //checkt of je hebt verloren of gewonnen.
}

function starten(startgetal){ //Functie om spel te starten
	naamspeler(); //Vraagt naam speler.
	scoreset(startgetal, startgetal, startgetal); //Scores zetten op de beginwaarde die horen bij elke moeilijkheidsgraad.
	var moeilijkheid = document.getElementById("spelmodus"); //Haal de locatie van de moeilijkheids-string op in de zijvakken van het vragenscherm.
	if (startgetal == 55){ //Vergelijkt het startgetal dat meegegeven is bij het klikken op de moeilijkheidsgraad.
		moeilijkheid.innerHTML = "Spelmodus: makkelijk";
	}
	else if (startgetal == 45){
		moeilijkheid.innerHTML = "Spelmodus: gemiddeld";
	}
	else if (startgetal == 35){
		moeilijkheid.innerHTML = "Spelmodus: moeilijk"
	}
	startspel(); //Start spel
}

//Onderstaande wordt op de achtergrond uitgevoerd direct na het laden/tijdens het laden van de pagina om alles klaar te maken om te starten.
/*validatevars();*/ //Variabelen worden gevalideerd
disablebuttons(); //Alle buttons worden onklikbaar gemaakt.
leegmaken(); //Vragenscherm leeg laten staan, alleen buttons blijven staan.
var v = 0; //Vragennummer begint met nul, want een lijst begint altijd met nummer nul.
vraagprint(v); //Print de eerste vraag.

function answer(antwoordnummer){
	if (kanscalc(kans[v])){ //lijst met scores kiezen waarmee speler, ouders en martens omhoog of omlaag gaan.
		var scores = scores1;
	}
	else{
		var scores = scores2;
	}
	if (v+1 == vragen.length){ //Als de laatste vraag is bereikt.
		scorecalc(v+1, scores[v][antwoordnummer][0], scores[v][antwoordnummer][1], scores[v][antwoordnummer][2]); //Berekent de scores. Er komen geen andere vragen meer.
	}
	else {
		scorecalc(v+1, scores[v][antwoordnummer][0], scores[v][antwoordnummer][1], scores[v][antwoordnummer][2]);
		//onderstaande omdat hierna nog een andere vraag komt.
		v += 1; //verhoog het vragennummer met 1
		leegmaken(); //Vragenscherm leeg laten staan, alleen buttons blijven staan.
		disablebuttons(); //Buttons worden onklikbaar gemaakt; 
		vraagprint(v); //Context, vraag en de antwoorden worden geprint, de benodigde buttons worden weer klikbaar gemaakt, zodat er antwoord gegven kan worden.
	}
}

function randomsound(){ //Zorgt dat een random geluid wordt afgespeeld als je op een knop drukt.
	var soundkans = Math.random();
	if (soundkans <= 0.20){
		button1.play()
	}
	else if (soundkans <= 0.40){
		button2.play()
	}
	else if (soundkans <= 0.60){
		button3.play()
	}
	else if (soundkans <= 0.80){
		button4.play()
	}
	else if (soundkans <= 1.00){
		button5.play()
	}
}

document.getElementById('button1').onclick = function(){ //Als je op de antwoordknop klikt, wordt de answer-functie geactiveerd. Antwoordnummer wordt als argument meegegeven.
	if (geluidcheck()){ //Als geluid aan staat hoor je het geluid
		randomsound();
	}
	answer(0);
}
document.getElementById('button2').onclick = function(){ 
	if (geluidcheck()){ //Als geluid aan staat hoor je het geluid
		randomsound();
	}
	answer(1);
}
document.getElementById('button3').onclick = function(){ 
	if (geluidcheck()){ //Als geluid aan staat hoor je het geluid
		randomsound();
	}
	answer(2);
}
document.getElementById('button4').onclick = function(){ 
	if (geluidcheck()){ //Als geluid aan staat hoor je het geluid
		randomsound();
	}
	answer(3);
}
document.getElementById('button5').onclick = function(){ 
	if (geluidcheck()){ //Als geluid aan staat hoor je het geluid
		randomsound();
	}
	answer(4);
}

