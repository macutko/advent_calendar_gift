const quotes = [
    {
        "day": 1,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=sUzadoEVQBM&ab_channel=LondonReal",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "\"Jeane, pohár vody, prosím.\" \"Nech sa páči, pane.\" \"Ďakujem, Jeane. Jeane, ďalší pohár vody, prosím.\" \"Nech sa páči, pane.\" \"Ďakujem, Jeane. Jeane, ešte jeden pohár vody, prosím.\" \"Nech sa páči, pane.\" \"Ďakujem, Jeane. Jeane?\" \"Áno, pane.\" \"Zavolaj hasičov. Toto sami neuhasíme.\"\n"
            }
        }
    },
    {
        "day": 2,
        "data": {
            "motivation": {
                "type": "text",
                "data": "Love is patient, love is kind. It does not envy, it does not boast, it is not proud. It does not dishonor others, it is not self-seeking, it is not easily angered, it keeps no record of wrongs. Love does not delight in evil but rejoices with the truth. It always protects, always trusts, always hopes, always perseveres. Love never fails. But where there are prophecies, they will cease; where there are tongues, they will be stilled; where there is knowledge, it will pass away.",
                "author": "1 Corinthians 13:4-8"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=ap9Zu_HXz-M&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 3,
        "data": {
            "motivation": {
                "type": "text",
                "data": " Now listen, you who say, “Today or tomorrow we will go to this or that city, spend a year there, carry on business and make money.” 14 Why, you do not even know what will happen tomorrow. What is your life? You are a mist that appears for a little while and then vanishes. 15 Instead, you ought to say, “If it is the Lord’s will, we will live and do this or that.” 16 As it is, you boast in your arrogant schemes. All such boasting is evil. 17 If anyone, then, knows the good they ought to do and doesn’t do it, it is sin for them.",
                "author": "James 4:13-17"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=obphkbG5FIo&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 4,
        "data": {
            "motivation": {
                "type": "text",
                "data": "The secret of getting ahead is getting started",
                "author": "Mark Twain"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=Tu_m5diSk4k&ab_channel=GabrielIglesias"
            }
        }
    },
    {
        "day": 5,
        "data": {
            "motivation": {
                "type": "text",
                "data": "I’ve missed more than 9,000 shots in my career. I’ve lost almost 300 games. 26 times I’ve been trusted to take the game winning shot and missed. I’ve failed over and over and over again in my life and that is why I succeed",
                "author": "Michael Jordan"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=MjXChWKKQUw&ab_channel=GabrielIglesias"
            }
        }
    },
    {
        "day": 6,
        "data": {
            "motivation": {
                "type": "text",
                "data": "As water reflects the face, so one’s life reflects the heart.",
                "author": "Proverbs 27:19"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=u3CCo3X5yVA&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 7,
        "data": {
            "motivation": {
                "type": "text",
                "data": "The best time to plant a tree was 20 years ago. The second best time is now",
                "author": "Chinese Proverb"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=pH1Zaef7XXA&ab_channel=JeffDunham"
            }
        }
    },

    {
        "day": 8,
        "data": {
            "motivation": {
                "type": "text",
                "data": "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth",
                "author": "William W. Purkey"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=1G9hHhqHm5s&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 9,
        "data": {
            "motivation": {
                "type": "text",
                "data": "Impossible is just an opinion",
                "author": "Paulo Coelho"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=hFBNXY9_9lQ&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 10,
        "data": {
            "motivation": {
                "type": "text",
                "data": "Creativity doesn't wait for that perfect moment. It fashions its own perfect moments out of ordinary ones.",
                "author": " Bruce Garrabrandt"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=BaDG4VD7S8A&ab_channel=JeffDunham"
            }
        }
    },
    {
        "day": 11,
        "data": {
            "motivation": {
                "type": "text",
                "data": "Above all, love each other deeply, because love covers over a multitude of sins.",
                "author": "1 Peter 4:8"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=GBvfiCdk-jc&ab_channel=JeffDunham"
            }
        }
    },
    {
        "day": 12,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=e9dZQelULDk&ab_channel=SteveCutts",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Pride chlapik do obchodu a vravi: \" \n Poprosim vas, kilo hrozna a kilo ribezli \" \n Predavac na neho zmatene pozera a vravi \n \" Ale my nie sme " +
                    "zelovoc ale vinoteka\" \n \" Okay, snaha bola, tak dve flasky poprosim \""
            }
        }
    },
    {
        "day": 13,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=vBkBS4O3yvY&ab_channel=Sploid",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Príde blondínka do obchodu a pýta sa predavača :,, Čo je to oranžové? ... Pomaranče. Tak si prosím kilo, každý zabaliť zvlášť.\" Obzrie sa a znova sa pýta :,,Čo je to žlté? ...Citróny. Tak si prosím kilo.Každý zabaliť zvlášť.\" Pozrie sa hore a hovorí :,,Čo je to čierne? ...Ser nato, to je mak! "
            }
        }
    },
    {

        "day": 14,
        "data": {
            "motivation": {
                "type": "text",
                "data": "Trust in the LORD with all your heart and lean not on your own understanding; 6 in all your ways submit to him, and he will make your paths straight",
                "author": "Proverbs 3:5-6"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=BhfBRq7v3IA&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 15,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=eOFeSM1E2F0&list=WL&index=20&ab_channel=TheGift",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Ide Jožo na starom žuguli a má dosť vypité, v tom ho zastavuje policajt, Jožo si tak v hlave hovorí,,no Jožo čo teraz urobíš, máš vypité, papiere ti zoberú no čo spravíš, no čo spravím zrazím ho\" bác zrazí ho hodí do kufra a ide dalej, čo čert nechcel o 500 metrov druhý policajt, Jožo si znovu hovorí ,,no čo správíš Jožo vypité máš, policajta v kufri zoberú ti papiere no čo spravíš Jožo, no čo spravím, zrazím ho\" bác zrazí ho, hodí do kufra a ide dalej. O kúsok dalej sváko na oračine krumple sadí, tak sa ho opyta ,,sváko zakopete mi tu jedného policajta\" a svako ,,zakopem čo by som nezakopal\" tak jedného policajta mu hodí na oráčinu a druhého len tak nakraj ku kríkom, tak sváko vykope jamu, hodí tam policajta, zakope ho zasadí krumple a ked sa otočí na kraji pri kríku leží policajt ,,a čo som ťa do tej jami nehodil alebo si sa vyhrabal alebo čo. tak vykope druhú jamu hodí do nej druhého policajta nasadí krumple a v tom ho niekto chytí za plece sváko sa otočí a tam policajt ,,sváko nevideli ste tu takých dvoch policajtov\" sváko chyti motiku, jednu mu napriahne do hlavy a hovorí ,,a čo ťa ja dneska nezakopem\"\n"
            }
        }
    },
    {
        "day": 16,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=4-079YIasck&list=WL&index=18&ab_channel=TEDxTalks",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Zajac prišiel ku zmrzlinovému stánku a pýta sa ujo máte mrkvičkovu zmrzlinu? Nie nemám. Zajac príde na druhý deň a pýta sa ujo máte mrkvičkovu zmrzlinu? Nie nemám. Zajac príde na tretí deň a pýta sa ujo máte mrkvičkovú zmrzlinu?\n" +
                    "Nie nemám. A ujo si povie a urobím tomu zajacovi mrkvičkovú zmrzlinu. A zajac príde na štvrtý deň a pýta sa ujo máte mrkvičkovú zmrzlinu? Áno mám. Fuj ale je hnusná čo?"
            }
        }
    },
    {
        "day": 17,
        "data": {
            "motivation": {
                "type": "text",
                "data": "For I know the plans I have for you, declares the Lord, plans for welfare and not for evil, to give you a future and a hope.",
                "author": "Jeremiah 29:11"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=RdvecFyCnYU&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 18,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=01ZCnCXpG4A&list=WL&index=24&ab_channel=FearlessSoul",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": " -Čo myslíte, je zviera na reklame čokolády Milka krava alebo býk?\n" +
                    "- Vôl. Nikto iný by sa nedal nafarbiť na fialovo."
            }
        }
    },
    {
        "day": 19,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=ZidGozDhOjg&list=WL&index=30&ab_channel=TEDxTalks",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Viete čo je najväčšie sebavedomie?\n" +
                    "Keď ide dážďovka na ryby."
            }
        }
    },
    {
        "day": 20,
        "data": {
            "motivation": {
                "type": "text",
                "data": "Therefore I tell you, do not be anxious about your life, what you will eat or what you will drink, nor about your body, what you will put on. Is not life more than food, and the body more than clothing? Look at the birds of the air: they neither sow nor reap nor gather into barns, and yet your heavenly Father feeds them. Are you not of more value than they? And which of you by being anxious can add a single hour to his span of life? And why are you anxious about clothing? Consider the lilies of the field, how they grow: they neither toil nor spin, yet I tell you, even Solomon in all his glory was not arrayed like one of these\n",
                "author": "Matthew 6:25-34"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=q_22tPwd0dE&ab_channel=DryBarComedy"
            }
        }
    },
    {
        "day": 21,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=ZjI7vqizTRc&list=WL&index=18&ab_channel=AfterSkool",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Je to červené a kazí to zuby. Čo to je?\n" +
                    "Červená tehla."
            }
        }
    },
    {
        "day": 22,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=-iqiRCQWRmA&list=WL&index=16&ab_channel=FightMediocrity",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Čo je to dážďovka?\n" +
                    "Je to motorizovaný makarón."
            }
        }
    },
    {
        "day": 23,
        "data": {
            "motivation": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=o7w5r5PfBKo&list=WL&index=15&ab_channel=FightMediocrity",
                "author": ""
            },
            "joke": {
                "type": "text",
                "data": "Kral ma 3 dcery ruzenku hrustenku a tehlenku\n" +
                    "\n" +
                    "Ruzenka dojde za oteckom a pyta sa : Oci preco som ruzenka. Lebo ked si bola mala padla ti do kocika ruza\n" +
                    "\n" +
                    "Hrustenka dojde za oteckom a pyta sa : Oci preco som hrustenka. Lebo ked si bola mala padla ti do kocika hruska\n" +
                    "\n" +
                    "Pride tehlenka a vravi: uuuuuuuuuuea uuuuuua uuuuuu eeeeeee?\n"
            }
        }
    },
    {
        "day": 24,
        "data": {
            "motivation": {
                "type": "text",
                "data": "So God created man in his own image, in the image of God he created him; male and female he created them. And God blessed them. And God said to them, ‘Be fruitful and multiply and fill the earth and subdue it and have dominion over the fish of the sea and over the birds of the heavens and over every living thing that moves on the earth.",
                "author": "Genesis 1:27-28"
            },
            "joke": {
                "type": "link",
                "data": "https://www.youtube.com/watch?v=lOSQvNDIGaU&t=311s&ab_channel=JustForLaughs"
            }
        }
    },


]


export default quotes

//jokes:
//https://www.youtube.com/watch?v=2QumSLdE2c4&ab_channel=JeffDunham
//https://www.youtube.com/watch?v=6XrTj7g714g&ab_channel=ErosRyanOfficial