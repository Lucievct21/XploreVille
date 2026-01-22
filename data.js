/* data.js
   Contient toutes les données de contenu
   (langues, chapitres, sections, audios, textes).
*/

const uiTexts = {
  languageChoice: {
    fr: "Langue :",
    en: "Language :",
    it: "Lingua :"
  },
  startWalk: {
    fr: "Démarrer balade",
    en: "Start walk",
    it: "Inizio tour"
  },
  audioNumber: {
    fr: "Numéro audio :",
    en: "Audio number",
    it: "Numero audio"
  },
  sectionNotFound: {
    fr: "Section non trouvée !",
    en: "Section not found!",
    it: "Sezione non trovata!"
  },
  endButton: {
    fr: "Fin",
    en: "End",
    it: "Fine"
  },
  secretWalk: {
    fr: "Parcours secret 🕵️‍♀️",
    en: "Secret walk 🕵️‍♀️",
    it: "Percorso segreto 🕵️‍♀️"
  },
  backHome: {
    fr: "Retour accueil",
    en: "Back to home",
    it: "Torna alla home"
  }
};


const data = {
  languages: ["fr", "en", "it"],

  chapters: [
    {
      id: "testaccio",
      name: {
        fr: "Testaccio",
        en: "Testaccio",
        it: "Testaccio"
      },
      introAudio: {
        fr: "assets/audio/fr/fr_testaccio_intro.mp3",
        en: "assets/audio/en_ch1_intro.mp3",
        it: "assets/audio/it_ch1_intro.mp3"
      },
      introText: {
        fr: "Bonjour et bienvenue dans cette balade au cœur de Rome. Aujourd’hui, on part à la découverte de Testaccio, un quartier encore un peu à l’écart des sentiers touristiques, mais adoré des Romains. Entre histoire antique, héritage industriel, et cuisine bien vivante, tu verras : ici, chaque coin de rue a une histoire à raconter. Prêt ? Alors on y va !",
        en: "Hello and welcome to this walk through the heart of Rome. Today, we’re off to explore Testaccio, a neighborhood still slightly off the tourist trail, but beloved by Romans. Between ancient history, industrial heritage, and vibrant cuisine, you’ll see: every corner here has a story to tell. Ready? Let’s go!",
        it: "Ciao e benvenuto in questa passeggiata nel cuore di Roma. Oggi andiamo alla scoperta di Testaccio, un quartiere ancora un po’ fuori dai percorsi turistici, ma molto amato dai romani. Tra storia antica, eredità industriale e cucina vivace, vedrai: ogni angolo qui ha una storia da raccontare. Pronto? Allora andiamo!"
      },
      endAudio: {
        fr: "assets/audio/fr/fr_testaccio_fin.mp3",
        en: "assets/audio/en_ch1_fin.mp3",
        it: "assets/audio/it_ch1_fin.mp3"
      },
      endText: {
        fr: "Et voilà, la balade touche à sa fin. J’espère qu’elle t’a plu, et que tu as apprécié découvrir Testaccio, ce quartier unique où l’histoire, la gastronomie et la vie locale se réunissent. Merci d’avoir marché avec moi, et à très bientôt pour une prochaine exploration romaine !",
        en: "And here we are, the walk is coming to an end. I hope you enjoyed it and liked discovering Testaccio, this unique neighborhood where history, food, and local life come together.Thank you for walking with me, and see you soon for another Roman adventure!",
        it: "Ecco, la passeggiata sta per finire. Spero ti sia piaciuta e che ti sia divertito a scoprire Testaccio, questo quartiere unico dove storia, gastronomia e vita locale si incontrano. Grazie per aver camminato con me, e a presto per una nuova esplorazione romana!"
      },
      sections: [
        {
          number: 1,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s1.mp3",
            en: "assets/audio/en_ch1_s1.mp3",
            it: "assets/audio/it_ch1_s1.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s1.txt",
            en: "assets/texts/en/en_testaccio_s1.txt",
            it: "assets/texts/it/it_testaccio_s1.txt"
          }
        },
        {
          number: 2,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s2.mp3",
            en: "assets/audio/en_ch1_s2.mp3",
            it: "assets/audio/it_ch1_s2.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s2.txt",
            en: "assets/texts/en/en_testaccio_s2.txt",
            it: "assets/texts/it/it_testaccio_s2.txt"
          }
        },
        {
          number: 3,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s3.mp3",
            en: "assets/audio/en_ch1_s3.mp3",
            it: "assets/audio/it_ch1_s3.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s3.txt",
            en: "assets/texts/en/en_testaccio_s3.txt",
            it: "assets/texts/it/it_testaccio_s3.txt"
          }
        },
        {
          number: 4,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s4.mp3",
            en: "assets/audio/en_ch1_s4.mp3",
            it: "assets/audio/it_ch1_s4.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s4.txt",
            en: "assets/texts/en/en_testaccio_s4.txt",
            it: "assets/texts/it/it_testaccio_s4.txt"
          }
        },
        {
          number: 5,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s5.mp3",
            en: "assets/audio/en_ch1_s5.mp3",
            it: "assets/audio/it_ch1_s5.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s5.txt",
            en: "assets/texts/en/en_testaccio_s5.txt",
            it: "assets/texts/it/it_testaccio_s5.txt"
          }
        },
        {
          number: 6,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s6.mp3",
            en: "assets/audio/en_ch1_s6.mp3",
            it: "assets/audio/it_ch1_s6.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s6.txt",
            en: "assets/texts/en/en_testaccio_s6.txt",
            it: "assets/texts/it/it_testaccio_s6.txt"
          }
        },
        {
          number: 7,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s7.mp3",
            en: "assets/audio/en_ch1_s7.mp3",
            it: "assets/audio/it_ch1_s7.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s7.txt",
            en: "assets/texts/en/en_testaccio_s7.txt",
            it: "assets/texts/it/it_testaccio_s7.txt"
          }
        },
        {
          number: 8,
          audio: {
            fr: "assets/audio/fr/fr_testaccio_s8.mp3",
            en: "assets/audio/en_ch1_s8.mp3",
            it: "assets/audio/it_ch1_s8mp3"
          },
          textFile: {
            fr: "assets/texts/fr/fr_testaccio_s8.txt",
            en: "assets/texts/en/en_testaccio_s8.txt",
            it: "assets/texts/it/it_testaccio_s8.txt"
          }
        },
      ]
    },
    {
      id: "ch2",
      name: {
        fr: "En cours...",
        en: "Work in progress...",
        it: "In corso..."
      },
      introAudio: {
        fr: "assets/audio/fr_ch2_intro.mp3",
        en: "assets/audio/en_ch2_intro.mp3",
        it: "assets/audio/it_ch2_intro.mp3"
      },
      introText: {
        fr: "Bienvenue.",
        en: "Welcome.",
        it: "Benvenuti."
      },
      sections: [
        {
          number: 1,
          audio: {
            fr: "assets/audio/fr_ch2_s1.mp3",
            en: "assets/audio/en_ch2_s1.mp3",
            it: "assets/audio/it_ch2_s1.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch2_s1.txt",
            en: "assets/texts/en/ch2_s1.txt",
            it: "assets/texts/it/ch2_s1.txt"
          }
        },
        {
          number: 2,
          audio: {
            fr: "assets/audio/fr_ch2_s2.mp3",
            en: "assets/audio/en_ch2_s2.mp3",
            it: "assets/audio/it_ch2_s2.mp3"
          },
          textFile: {
            fr: "assets/texts/fr/ch2_s2.txt",
            en: "assets/texts/en/ch2_s2.txt",
            it: "assets/texts/it/ch2_s2.txt"
          }
        }
      ]
    },
    // autres chapitres à ajouter ici plus tard
  ]
};


const secretWalkTestaccio = {
  secretTitle: {
    fr: "Testaccio - Parcours secret",
    en: "Testaccio - Secret walk",
    it: "Testaccio - Percorso segreto"
  },
  pageAEnigma: {
    fr: "Sur ta gauche… Entre avec respect, liberté et courage…",
    en: "On your left… Enter with respect, freedom and courage…",
    it: "Alla tua sinistra… Entra con rispetto, libertà e coraggio…"
  },
  pageAButton: {
    fr: "Je suis entré",
    en: "I'm in",
    it: "Sono entrato"
  },
  pageBEnigma: {
    fr: "Bienvenue dans la “Città dell'altra economia” ou cité de l'économie alternative, un lieu jeune où se sont installés des cafés et associations. Sur ta gauche au loin, tu aperçois une grande structure cylindrique en acier: c'est le gazomètre, symbole du quartier Ostiense. Sur ta droite, entre thé et café, trouve l'entrée secrète vers le Mattatoio et avance... <br>Tu arrives devant le “Macello 3” - combien de crochets comptes-tu en face de toi ?",
    en: "Welcome to the “Città dell'altra economia”, the city of alternative economy, a cool spot that's home to cafés and local organizations. On your left in the distance, you can see a large cylindrical steel structure: this is the gasometer, symbol of the Ostiense district. On your right, between tea and coffee, look for the secret entrance to the Mattatoio and move forward... <br>You're now standing in front of the “Macello 3” - how many hooks can you count in front of you?",
    it: "Benvenuto nella “Città dell’Altra Economia”, un luogo giovane e alternativo, dove si sono stabiliti caffè e associazioni. Alla tua sinistra, in lontananza, puoi vedere una grande struttura cilindrica in acciaio: è il gazometro, simbolo del quartiere Ostiense. Alla tua destra, tra tè e caffè, trova l'ingresso segreto e avanza... <br>Sei ora di fronte al “Macello 3” - quanti ganci riesci a contare davanti a te?"
  },
  pageCEnigma: {
    fr: "Bien joué ! <br> Maintenant, atteint le pavillon 1, tourne à gauche, puis à droite. Fuis ce lieu par la grande porte et retrouve ta liberté, sain et sauf. <br>En face, les lieux de consommation des victimes du Mattatoio. De quand date le plus ancien ?",
    en: "Well done! <br> Now reach pavilion 1, turn left, then right. Escape this place through the big gate and regain your freedom, safe and sound. <br>In front of you, the places where the Mattatoio's victims were consumed. How old is the oldest one?",
    it: "Ben fatto! <br> Ora raggiungi il padiglione 1, gira a sinistra, poi a destra. Fuggi da questo luogo attraverso il grande portone e riconquista la tua libertà, sano e salvo. <br>Di fronte a te, i luoghi di consumo delle vittime del Mattatoio. Di quando è il più antico?"
  },
  pageDEnigma: {
    fr: "Exact ! Checchino fait partie des restaurants spécialisés, encore aujourd'hui, dans la cuisine du “quinto quarto” : trippes, intestins, cervelles, coeurs... rien ne se perd ! <br>A présent, continue ton chemin le long des amphores. Après l'invasion américaine, tourne à gauche.",
    en: "Exactly! Checchino is one of the restaurants still specializing today in “quinto quarto” cuisine: tripe, intestines, brains, hearts... nothing goes to waste! <br>Now, keep walking along the amphorae. After the American invasion, turn left.",
    it: "Esatto! Checchino è uno dei ristoranti che ancora oggi propone la cucina del “quinto quarto”: trippa, intestini, cervelli, cuori... non si butta via niente! <br>Ora, prosegui lungo le anfore. Dopo l’invasione americana, gira a sinistra."
  },
  pageDButton: {
    fr: "J'ai tourné",
    en: "I turned",
    it: "Ho girato"
  },
  pageEEnigma: {
    fr: "Sur le mur d'en face, celle qui a éduqué les fondateurs de la ville éternelle.",
    en: "On the wall opposite, the one who raised the founders of the Eternal City.",
    it: "Sul muro di fronte, quella che ha educato i fondatori della Città Eterna."
  },
  pageEAnswer: {
    fr: "louve",
    en: "walf",
    it: "lupa"
  },
  pageFEnigma: {
    fr: "Bravo ! C'est bien une louve qui, selon la légende, aurait reccueilli et allaité Remus et Romulus, les fondateurs de Rome.<br>Tu te trouves maintenant juste à côté du marché de Testaccio. N'hésite pas y faire une petite pause gourmande et reviens à ta position. <br> A ton retour, tourne le dos aux amphores et avance, Nord toute, jusqu'à apercevoir le fameux méridien :",
    en: "Great job! According to legend, it was indeed a she-wolf who took in and suckled Remus and Romulus, the founders of Rome. <br>You're now right next to the Testaccio market. Feel free to take a short gourmet break and then return to your position. <br> Once back, turn your back to the amphorae and head north, straight ahead, until you spot the famous meridian:",
    it: "Bravo! Secondo la leggenda, fu proprio una lupa ad accogliere e allattare Remo e Romolo, i fondatori di Roma. <br>Ora ti trovi proprio accanto al mercato di Testaccio. Non esitare a fare una piccola pausa golosa e poi torna alla tua posizione. <br> Al tuo ritorno, dai le spalle alle anfore e avanza dritto, verso nord, fino a scorgere il famoso meridiano:"
  },
  pageFAnswer: {
    fr: "greenwich",
    en: "greenwich",
    it: "greenwich"
  },
  pageGEnigma: {
    fr: "Tu as trouvé Greenwich, le cinéma du quartier ! Passe devant puis tourne à gauche sur la rue de...",
    en: "You’ve found Greenwich, the neighborhood cinema! Walk past it, then turn left onto the street of...",
    it: "Hai trovato il Greenwich, il cinema del quartiere! Passaci davanti, poi gira a sinistra nella via di..."
  },
  pageGImages: {
    fr: [
      "assets/images/fr/image_nid.jpg",
      "assets/images/fr/image_col.jpg",
      "assets/images/fr/image_A.jpg"
    ],
    en: [
      "assets/images/en/image_knee.jpg",
      "assets/images/en/image_call.jpg",
      "assets/images/en/image_A.jpg"
    ],
    it: [
      "assets/images/it/image_nid.jpg",
      "assets/images/it/image_col.jpg",
      "assets/images/it/image_A.jpg"
    ]
  },
  pageGAnswer: {
    fr: "nicola",
    en: "nicola",
    it: "nicola"
  },
  pageHEnding: {
    fr: "Félicitations ! Tu es arrivé à la fin de cette aventure secrète. <br>Tu peux maintenant rejoindre la piazza di Santa Maria Liberatrice au point n°6, où t'attend la fin de la balade.",
    en: "Congratulations! You’ve reached the end of this secret adventure. <br>You can now head to Piazza di Santa Maria Liberatrice on point 6, where the end of the walk awaits you.",
    it: "Complimenti! Sei arrivato alla fine di questa avventura segreta. <br>Ora puoi raggiungere la piazza di Santa Maria Liberatrice al punto n.6, dove ti aspetta la conclusione del percorso."
  },
  pageHImage: {
    fr: "assets/images/loupe.png",
    en: "assets/images/loupe.png",
    it: "assets/images/loupe.png"
  }
};
