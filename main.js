const QUESTION_THEMES = {
  "schmerz": {
    "label": "Schmerz",
    "questions": [
      {
        "question": "Was ist Schmerz?",
        "answers": {
          "a": "Nur ein körperliches Erlebnis",
          "b": "Nur ein psychisches Erlebnis",
          "c": "Ein unangenehmes sensorisches und emotionales Erlebnis",
          "d": "Nur eine Verletzung"
        },
        "correct": "c"
      },
      {
        "question": "Wodurch kann Schmerz entstehen?",
        "answers": {
          "a": "Tatsächliche Gewebeschädigung",
          "b": "Potentielle Gewebeschädigung",
          "c": "Emotionale Belastung",
          "d": "Alle Antworten sind richtig"
        },
        "correct": "d"
      },
      {
        "question": "Wie nennt man den ersten Schmerz?",
        "answers": {
          "a": "Dumpfer Schmerz",
          "b": "Warnsignal",
          "c": "Chronischer Schmerz",
          "d": "Viszeraler Schmerz"
        },
        "correct": "b"
      },
      {
        "question": "Wie wird der erste Schmerz beschrieben?",
        "answers": {
          "a": "Dumpf",
          "b": "Stechend",
          "c": "Krampfartig",
          "d": "Brennend"
        },
        "correct": "b"
      },
      {
        "question": "Wie wird der zweite Schmerz beschrieben?",
        "answers": {
          "a": "Stechend",
          "b": "Dumpf",
          "c": "Elektrisierend",
          "d": "Pulsierend"
        },
        "correct": "b"
      },
      {
        "question": "Wie lange liegen erster und zweiter Schmerz ungefähr auseinander?",
        "answers": {
          "a": "5–10 Sekunden",
          "b": "10–20 Sekunden",
          "c": "1–3 Sekunden",
          "d": "30 Sekunden"
        },
        "correct": "c"
      },
      {
        "question": "Warum entsteht der zeitliche Unterschied?",
        "answers": {
          "a": "Unterschiedliche Schmerzstärke",
          "b": "Unterschiedliche Nervenfasern",
          "c": "Unterschiedliche Organe",
          "d": "Unterschiedliche Blutversorgung"
        },
        "correct": "b"
      },
      {
        "question": "Welche Fasern leiten den ersten Schmerz?",
        "answers": {
          "a": "C-Fasern",
          "b": "A-Delta-Fasern",
          "c": "Motorische Fasern",
          "d": "Vegetative Fasern"
        },
        "correct": "b"
      },
      {
        "question": "Welche Fasern leiten den zweiten Schmerz?",
        "answers": {
          "a": "A-Delta-Fasern",
          "b": "C-Fasern",
          "c": "Motorische Fasern",
          "d": "Alpha-Fasern"
        },
        "correct": "b"
      },
      {
        "question": "Was nehmen Nozizeptoren wahr?",
        "answers": {
          "a": "Druck",
          "b": "Schmerzreize",
          "c": "Licht",
          "d": "Geräusche"
        },
        "correct": "b"
      },
      {
        "question": "Wo befinden sich Nozizeptoren?",
        "answers": {
          "a": "Nur im Gehirn",
          "b": "Nur im Rückenmark",
          "c": "Im Gewebe des Körpers",
          "d": "Nur in Muskeln"
        },
        "correct": "c"
      },
      {
        "question": "Was aktiviert Nozizeptoren?",
        "answers": {
          "a": "Kalium und Entzündungsmediatoren",
          "b": "Sauerstoff",
          "c": "Zucker",
          "d": "Insulin"
        },
        "correct": "a"
      },
      {
        "question": "Was entsteht zusätzlich an einer verletzten Stelle?",
        "answers": {
          "a": "Ödem",
          "b": "Tumor",
          "c": "Fibrose",
          "d": "Narbe"
        },
        "correct": "a"
      },
      {
        "question": "Warum verursacht ein Ödem Schmerzen?",
        "answers": {
          "a": "Es kühlt das Gewebe.",
          "b": "Es drückt auf Nozizeptoren.",
          "c": "Es erhöht den Blutzucker.",
          "d": "Es zerstört Knochen."
        },
        "correct": "b"
      },
      {
        "question": "Welche Aussage trifft zu?",
        "answers": {
          "a": "Schmerz entsteht immer im Gehirn.",
          "b": "Schmerz beginnt an den Nozizeptoren.",
          "c": "Schmerz beginnt im Herzen.",
          "d": "Schmerz beginnt in der Lunge."
        },
        "correct": "b"
      },
      {
        "question": "Was passiert zuerst?",
        "answers": {
          "a": "Thalamus",
          "b": "Großhirnrinde",
          "c": "Nozizeptor",
          "d": "Emotion"
        },
        "correct": "c"
      },
      {
        "question": "Welches Organ entscheidet, ob Schmerz weitergeleitet wird?",
        "answers": {
          "a": "Herz",
          "b": "Rückenmark",
          "c": "Leber",
          "d": "Lunge"
        },
        "correct": "b"
      },
      {
        "question": "Wo entstehen Reflexe?",
        "answers": {
          "a": "Großhirn",
          "b": "Rückenmark",
          "c": "Herz",
          "d": "Kleinhirn"
        },
        "correct": "b"
      },
      {
        "question": "Welches Gehirnzentrum bewertet Schmerz emotional?",
        "answers": {
          "a": "Kleinhirn",
          "b": "Limbisches System",
          "c": "Hirnstamm",
          "d": "Hypophyse"
        },
        "correct": "b"
      },
      {
        "question": "Wo wird Schmerz bewusst wahrgenommen?",
        "answers": {
          "a": "Rückenmark",
          "b": "Großhirnrinde",
          "c": "Thalamus",
          "d": "Kleinhirn"
        },
        "correct": "b"
      },
      {
        "question": "Was ist ein akuter Schmerz?",
        "answers": {
          "a": "Schmerz über mehrere Jahre",
          "b": "Schmerz nach einer frischen Verletzung",
          "c": "Immer Nervenschmerz",
          "d": "Phantomschmerz"
        },
        "correct": "b"
      },
      {
        "question": "Wann spricht man von chronischem Schmerz?",
        "answers": {
          "a": "Nach 24 Stunden",
          "b": "Nach einer Woche",
          "c": "Nach etwa 3 Monaten",
          "d": "Nach einem Jahr"
        },
        "correct": "c"
      },
      {
        "question": "Warum werden chronische Schmerzen schlimmer?",
        "answers": {
          "a": "Die Nerven lernen den Schmerz schneller weiterzuleiten.",
          "b": "Das Blut fließt schneller.",
          "c": "Die Muskeln wachsen.",
          "d": "Die Knochen werden härter."
        },
        "correct": "a"
      },
      {
        "question": "Was ist ein neuropathischer Schmerz?",
        "answers": {
          "a": "Hautschmerz",
          "b": "Nervenschmerz",
          "c": "Muskelschmerz",
          "d": "Gelenkschmerz"
        },
        "correct": "b"
      },
      {
        "question": "Welches Beispiel gehört zum neuropathischen Schmerz?",
        "answers": {
          "a": "Bandscheibenvorfall",
          "b": "Prellung",
          "c": "Verstauchung",
          "d": "Muskelkater"
        },
        "correct": "a"
      },
      {
        "question": "Wie ist ein somatischer Schmerz?",
        "answers": {
          "a": "Gut lokalisierbar",
          "b": "Gar nicht lokalisierbar",
          "c": "Immer psychisch",
          "d": "Immer chronisch"
        },
        "correct": "a"
      },
      {
        "question": "Wie ist ein viszeraler Schmerz?",
        "answers": {
          "a": "Gut lokalisierbar",
          "b": "Dumpf und schlecht lokalisierbar",
          "c": "Immer stechend",
          "d": "Immer elektrisch"
        },
        "correct": "b"
      },
      {
        "question": "Welches Beispiel ist viszeraler Schmerz?",
        "answers": {
          "a": "Magenschmerzen",
          "b": "Schnittwunde",
          "c": "Fingerverletzung",
          "d": "Muskelkater"
        },
        "correct": "a"
      },
      {
        "question": "Was ist Phantomschmerz?",
        "answers": {
          "a": "Eingebildeter Schmerz",
          "b": "Schmerz nach einer Amputation",
          "c": "Gelenkschmerz",
          "d": "Muskelkater"
        },
        "correct": "b"
      },
      {
        "question": "Ist Phantomschmerz real?",
        "answers": {
          "a": "Ja",
          "b": "Nein",
          "c": "Nur bei Kindern",
          "d": "Nur bei alten Menschen"
        },
        "correct": "a"
      },
      {
        "question": "Welcher Schmerz entsteht durch Hitze?",
        "answers": {
          "a": "Thermischer Schmerz",
          "b": "Mechanischer Schmerz",
          "c": "Chemischer Schmerz",
          "d": "Viszeraler Schmerz"
        },
        "correct": "a"
      },
      {
        "question": "Welcher Schmerz entsteht durch einen Schnitt?",
        "answers": {
          "a": "Mechanischer Schmerz",
          "b": "Chemischer Schmerz",
          "c": "Thermischer Schmerz",
          "d": "Neuropathischer Schmerz"
        },
        "correct": "a"
      },
      {
        "question": "Welcher Schmerz entsteht durch Säure?",
        "answers": {
          "a": "Thermisch",
          "b": "Chemisch",
          "c": "Mechanisch",
          "d": "Viszeral"
        },
        "correct": "b"
      },
      {
        "question": "Welcher Schmerz entsteht durch Strahlung?",
        "answers": {
          "a": "Chemisch",
          "b": "Physikalisch",
          "c": "Mechanisch",
          "d": "Somatisch"
        },
        "correct": "b"
      },
      {
        "question": "Welcher Faktor beeinflusst die Schmerzwahrnehmung?",
        "answers": {
          "a": "Angst",
          "b": "Schlaf",
          "c": "Erfahrung",
          "d": "Alle Antworten sind richtig"
        },
        "correct": "d"
      },
      {
        "question": "Welche Aussage stimmt?",
        "answers": {
          "a": "Kultur beeinflusst das Schmerzempfinden.",
          "b": "Kultur hat keinen Einfluss.",
          "c": "Schmerz ist überall gleich.",
          "d": "Männer empfinden keinen Schmerz."
        },
        "correct": "a"
      },
      {
        "question": "Welcher Faktor kann Schmerzen verstärken?",
        "answers": {
          "a": "Depression",
          "b": "Gute Laune",
          "c": "Ausreichender Schlaf",
          "d": "Entspannung"
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage stimmt?",
        "answers": {
          "a": "Schmerz ist immer objektiv.",
          "b": "Schmerz ist subjektiv.",
          "c": "Schmerz ist messbar wie Blutdruck.",
          "d": "Schmerz ist eingebildet."
        },
        "correct": "b"
      },
      {
        "question": "Welche Skala wird bei Erwachsenen häufig verwendet?",
        "answers": {
          "a": "NRS",
          "b": "APGAR",
          "c": "Glasgow",
          "d": "Barthel"
        },
        "correct": "a"
      },
      {
        "question": "Was bedeutet NRS?",
        "answers": {
          "a": "Numerische Ratingskala",
          "b": "Neurologische Reflexskala",
          "c": "Nationale Schmerzskala",
          "d": "Neue Reizskala"
        },
        "correct": "a"
      },
      {
        "question": "Welche Werte umfasst die NRS?",
        "answers": {
          "a": "0–5",
          "b": "1–5",
          "c": "0–10",
          "d": "1–20"
        },
        "correct": "c"
      },
      {
        "question": "Welche Skala eignet sich besonders für Kinder?",
        "answers": {
          "a": "Faces-Skala",
          "b": "Glasgow",
          "c": "Braden",
          "d": "Norton"
        },
        "correct": "a"
      },
      {
        "question": "Welche Skala eignet sich besonders für Menschen mit Demenz?",
        "answers": {
          "a": "NRS",
          "b": "BESD",
          "c": "Glasgow",
          "d": "APGAR"
        },
        "correct": "b"
      },
      {
        "question": "Was wird bei der BESD beurteilt?",
        "answers": {
          "a": "Blutdruck",
          "b": "Mimik und Verhalten",
          "c": "Blutzucker",
          "d": "Gewicht"
        },
        "correct": "b"
      },
      {
        "question": "Was muss nach der Schmerzerfassung erfolgen?",
        "answers": {
          "a": "Dokumentation",
          "b": "Intervention",
          "c": "Evaluation",
          "d": "Alle Antworten sind richtig"
        },
        "correct": "d"
      },
      {
        "question": "Was bedeutet Evaluation?",
        "answers": {
          "a": "Schmerz ignorieren",
          "b": "Wirkung der Maßnahme kontrollieren",
          "c": "Medikament absetzen",
          "d": "Arzt wechseln"
        },
        "correct": "b"
      },
      {
        "question": "Welche Maßnahmen gehören zur WHO-Stufe 1?",
        "answers": {
          "a": "Nicht-Opioide",
          "b": "Physikalische Maßnahmen",
          "c": "Beide Antworten sind richtig",
          "d": "Nur Morphin"
        },
        "correct": "c"
      },
      {
        "question": "Welches Medikament gehört zur WHO-Stufe 1?",
        "answers": {
          "a": "Morphin",
          "b": "Fentanyl",
          "c": "Paracetamol",
          "d": "Oxycodon"
        },
        "correct": "c"
      },
      {
        "question": "Welches Medikament gehört ebenfalls zur WHO-Stufe 1?",
        "answers": {
          "a": "Metamizol",
          "b": "Morphin",
          "c": "Tilidin",
          "d": "Fentanyl"
        },
        "correct": "a"
      },
      {
        "question": "Welches Medikament gehört zur WHO-Stufe 2?",
        "answers": {
          "a": "Tilidin",
          "b": "Morphin",
          "c": "Fentanyl",
          "d": "Oxycodon"
        },
        "correct": "a"
      },
      {
        "question": "Welches Medikament gehört zur WHO-Stufe 2?",
        "answers": {
          "a": "Tramadol",
          "b": "Morphin",
          "c": "Fentanyl",
          "d": "Buprenorphin"
        },
        "correct": "a"
      },
      {
        "question": "Welches Medikament gehört zur WHO-Stufe 3?",
        "answers": {
          "a": "Paracetamol",
          "b": "Ibuprofen",
          "c": "Morphin",
          "d": "Diclofenac"
        },
        "correct": "c"
      },
      {
        "question": "Welches Medikament gehört ebenfalls zur WHO-Stufe 3?",
        "answers": {
          "a": "Fentanyl",
          "b": "Tramadol",
          "c": "Tilidin",
          "d": "Novalgin"
        },
        "correct": "a"
      },
      {
        "question": "Welche Wirkung hat Paracetamol?",
        "answers": {
          "a": "Analgetisch und antipyretisch",
          "b": "Nur entzündungshemmend",
          "c": "Antibiotisch",
          "d": "Blutverdünnend"
        },
        "correct": "a"
      },
      {
        "question": "Welche zusätzliche Wirkung hat Ibuprofen?",
        "answers": {
          "a": "Antiphlogistisch",
          "b": "Beruhigend",
          "c": "Antidepressiv",
          "d": "Hustenstillend"
        },
        "correct": "a"
      },
      {
        "question": "Warum wird in jeder WHO-Stufe ein Nicht-Opioid weitergegeben?",
        "answers": {
          "a": "Weil es an einem anderen Angriffspunkt wirkt.",
          "b": "Weil es billiger ist.",
          "c": "Weil Opioide verboten sind.",
          "d": "Damit der Patient mehr Tabletten bekommt."
        },
        "correct": "a"
      },
      {
        "question": "Warum hilft eine immer höhere Morphindosis irgendwann nicht mehr?",
        "answers": {
          "a": "Alle Opioidrezeptoren sind besetzt.",
          "b": "Der Körper braucht Zucker.",
          "c": "Das Medikament wirkt im Magen.",
          "d": "Morphin wirkt nur einmal."
        },
        "correct": "a"
      },
      {
        "question": "Welche physikalische Maßnahme gehört zur Schmerztherapie?",
        "answers": {
          "a": "Lagerung",
          "b": "Wärme",
          "c": "Kälte",
          "d": "Alle Antworten sind richtig"
        },
        "correct": "d"
      },
      {
        "question": "Welche Aussage ist richtig?",
        "answers": {
          "a": "Schmerz muss immer ernst genommen werden.",
          "b": "Schmerz ist immer eingebildet.",
          "c": "Schmerz ist nur psychisch.",
          "d": "Schmerz entsteht nur bei Wunden."
        },
        "correct": "a"
      },
      {
        "question": "Welcher Merksatz ist richtig?",
        "answers": {
          "a": "Schmerz ist das, was der Patient sagt, wenn er Schmerzen hat.",
          "b": "Nur der Arzt entscheidet, ob jemand Schmerzen hat.",
          "c": "Schmerz kann man immer messen.",
          "d": "Schmerzen sind objektiv."
        },
        "correct": "a"
      },
      {
        "question": "Welcher Stoff tritt bei einer Gewebeschädigung unter anderem aus den Zellen aus?",
        "answers": {
          "a": "Natrium",
          "b": "Kalium",
          "c": "Calcium",
          "d": "Magnesium"
        },
        "correct": "b"
      },
      {
        "question": "Was bewirken freigesetzte Mediatoren?",
        "answers": {
          "a": "Sie hemmen Nozizeptoren.",
          "b": "Sie aktivieren Nozizeptoren.",
          "c": "Sie zerstören Nerven.",
          "d": "Sie bilden Narben."
        },
        "correct": "b"
      },
      {
        "question": "Warum entsteht nach einer Verletzung ein Ödem?",
        "answers": {
          "a": "Wegen Sauerstoffmangel",
          "b": "Durch Flüssigkeitseinlagerung",
          "c": "Durch Fieber",
          "d": "Durch Blutarmut"
        },
        "correct": "b"
      },
      {
        "question": "Welche Aufgabe haben A-Delta-Fasern?",
        "answers": {
          "a": "Langsame Schmerzleitung",
          "b": "Schnelle Schmerzleitung",
          "c": "Motorik",
          "d": "Tastempfinden"
        },
        "correct": "b"
      },
      {
        "question": "Welche Eigenschaft besitzen A-Delta-Fasern?",
        "answers": {
          "a": "Keine Myelinscheide",
          "b": "Myelinscheide vorhanden",
          "c": "Sehr dick",
          "d": "Keine Nervenleitung"
        },
        "correct": "b"
      },
      {
        "question": "Warum leiten C-Fasern langsamer?",
        "answers": {
          "a": "Sie besitzen keine Myelinscheide.",
          "b": "Sie sind motorische Nerven.",
          "c": "Sie liegen im Gehirn.",
          "d": "Sie enthalten kein Kalium."
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage trifft auf C-Fasern zu?",
        "answers": {
          "a": "Sie vermitteln den dumpfen Schmerz.",
          "b": "Sie vermitteln den ersten Schmerz.",
          "c": "Sie vermitteln Berührung.",
          "d": "Sie leiten Reflexe."
        },
        "correct": "a"
      },
      {
        "question": "Welcher Schmerz tritt zuerst auf?",
        "answers": {
          "a": "Dumpfer Schmerz",
          "b": "Stechender Schmerz",
          "c": "Chronischer Schmerz",
          "d": "Viszeraler Schmerz"
        },
        "correct": "b"
      },
      {
        "question": "Welcher Schmerz hält länger an?",
        "answers": {
          "a": "Erster Schmerz",
          "b": "Zweiter Schmerz",
          "c": "Akuter Schmerz",
          "d": "Reflexschmerz"
        },
        "correct": "b"
      },
      {
        "question": "Was geschieht im Rückenmark?",
        "answers": {
          "a": "Schmerz wird bewusst wahrgenommen.",
          "b": "Reflexe werden ausgelöst.",
          "c": "Hormone werden produziert.",
          "d": "Blut wird gebildet."
        },
        "correct": "b"
      },
      {
        "question": "Welche Aussage zu Reflexen stimmt?",
        "answers": {
          "a": "Reflexe werden im Großhirn ausgelöst.",
          "b": "Reflexe entstehen im Rückenmark.",
          "c": "Reflexe entstehen im Herzen.",
          "d": "Reflexe entstehen in der Leber."
        },
        "correct": "b"
      },
      {
        "question": "Welche Struktur filtert Schmerzreize?",
        "answers": {
          "a": "Thalamus",
          "b": "Milz",
          "c": "Pankreas",
          "d": "Hypophyse"
        },
        "correct": "a"
      },
      {
        "question": "Warum kann Schmerz Übelkeit verursachen?",
        "answers": {
          "a": "Wegen des Cortex",
          "b": "Wegen des Hirnstamms",
          "c": "Wegen der Leber",
          "d": "Wegen der Milz"
        },
        "correct": "b"
      },
      {
        "question": "Wo wird der Schmerz emotional bewertet?",
        "answers": {
          "a": "Rückenmark",
          "b": "Limbisches System",
          "c": "Niere",
          "d": "Herz"
        },
        "correct": "b"
      },
      {
        "question": "Was entscheidet darüber, ob Schmerz angenehm oder unangenehm empfunden wird?",
        "answers": {
          "a": "Die Muskulatur",
          "b": "Das emotionale Zentrum",
          "c": "Die Haut",
          "d": "Die Leber"
        },
        "correct": "b"
      },
      {
        "question": "Was beeinflusst das Schmerzempfinden NICHT?",
        "answers": {
          "a": "Kultur",
          "b": "Stimmung",
          "c": "Erfahrungen",
          "d": "Augenfarbe"
        },
        "correct": "d"
      },
      {
        "question": "Welcher psychische Faktor beeinflusst Schmerzen besonders?",
        "answers": {
          "a": "Angst",
          "b": "Haarfarbe",
          "c": "Blutgruppe",
          "d": "Schuhgröße"
        },
        "correct": "a"
      },
      {
        "question": "Warum empfinden Menschen Schmerzen unterschiedlich?",
        "answers": {
          "a": "Unterschiedliche Kultur",
          "b": "Unterschiedliche Erfahrungen",
          "c": "Unterschiedliche Erziehung",
          "d": "Alle Antworten sind richtig"
        },
        "correct": "d"
      },
      {
        "question": "Welche Aussage über Kultur stimmt?",
        "answers": {
          "a": "Kultur beeinflusst die Schmerzwahrnehmung.",
          "b": "Kultur spielt keine Rolle.",
          "c": "Schmerz ist weltweit identisch.",
          "d": "Nur Kinder reagieren unterschiedlich."
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage zur Erziehung stimmt?",
        "answers": {
          "a": "Erziehung kann das Schmerzverhalten beeinflussen.",
          "b": "Erziehung hat keinen Einfluss.",
          "c": "Nur Gene beeinflussen Schmerzen.",
          "d": "Nur Medikamente beeinflussen Schmerzen."
        },
        "correct": "a"
      },
      {
        "question": "Welchen Einfluss hat Schlafmangel?",
        "answers": {
          "a": "Schmerzen werden oft stärker wahrgenommen.",
          "b": "Schmerzen verschwinden.",
          "c": "Schmerzen werden immer chronisch.",
          "d": "Es gibt keinen Einfluss."
        },
        "correct": "a"
      },
      {
        "question": "Was kann die Schmerzwahrnehmung verstärken?",
        "answers": {
          "a": "Depression",
          "b": "Gute Laune",
          "c": "Urlaub",
          "d": "Sport"
        },
        "correct": "a"
      },
      {
        "question": "Was versteht man unter sekundärem Krankheitsgewinn?",
        "answers": {
          "a": "Der Patient erhält Aufmerksamkeit.",
          "b": "Die Krankheit verschwindet.",
          "c": "Der Blutdruck steigt.",
          "d": "Die Wunde heilt schneller."
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage über Kinder trifft zu?",
        "answers": {
          "a": "Kinder können Schmerzen oft schlechter lokalisieren.",
          "b": "Kinder empfinden keine Schmerzen.",
          "c": "Kinder haben keine Nozizeptoren.",
          "d": "Kinder haben nur Nervenschmerzen."
        },
        "correct": "a"
      },
      {
        "question": "Warum zeigen kleine Kinder häufig auf den Bauch?",
        "answers": {
          "a": "Sie können Schmerzen noch schlecht lokalisieren.",
          "b": "Sie haben immer Bauchschmerzen.",
          "c": "Der Bauch ist empfindlicher.",
          "d": "Weil dort die meisten Nozizeptoren liegen."
        },
        "correct": "a"
      },
      {
        "question": "Welcher Schmerz ist gut lokalisierbar?",
        "answers": {
          "a": "Somatischer Schmerz",
          "b": "Viszeraler Schmerz",
          "c": "Phantomschmerz",
          "d": "Psychischer Schmerz"
        },
        "correct": "a"
      },
      {
        "question": "Welcher Schmerz strahlt häufig aus?",
        "answers": {
          "a": "Viszeraler Schmerz",
          "b": "Somatischer Schmerz",
          "c": "Mechanischer Schmerz",
          "d": "Thermischer Schmerz"
        },
        "correct": "a"
      },
      {
        "question": "Wie wird viszeraler Schmerz häufig beschrieben?",
        "answers": {
          "a": "Krampfartig",
          "b": "Dumpf",
          "c": "Beide Antworten sind richtig",
          "d": "Stechend"
        },
        "correct": "c"
      },
      {
        "question": "Welcher Schmerz verändert sich häufig bei einer Komplikation nach einer OP?",
        "answers": {
          "a": "Stechender Schmerz wird dumpf.",
          "b": "Dumpfer Schmerz wird stechend.",
          "c": "Schmerz verschwindet sofort.",
          "d": "Schmerz bleibt immer gleich."
        },
        "correct": "b"
      },
      {
        "question": "Warum sollte ein dumpfer Bauchschmerz nach einer OP ernst genommen werden?",
        "answers": {
          "a": "Er kann auf Komplikationen hinweisen.",
          "b": "Er bedeutet Heilung.",
          "c": "Er ist immer normal.",
          "d": "Er hat keine Bedeutung."
        },
        "correct": "a"
      },
      {
        "question": "Wie viele Stufen besitzt das WHO-Stufenschema?",
        "answers": {
          "a": "2",
          "b": "3",
          "c": "4",
          "d": "5"
        },
        "correct": "b"
      },
      {
        "question": "Welche Medikamentengruppe findet sich in jeder WHO-Stufe?",
        "answers": {
          "a": "Nicht-Opioide",
          "b": "Antibiotika",
          "c": "Insulin",
          "d": "Kortison"
        },
        "correct": "a"
      },
      {
        "question": "Welche Maßnahme gehört immer zusätzlich dazu?",
        "answers": {
          "a": "Physikalische Maßnahmen",
          "b": "Beatmung",
          "c": "Dialyse",
          "d": "Chemotherapie"
        },
        "correct": "a"
      },
      {
        "question": "Welche physikalische Maßnahme lindert Schmerzen?",
        "answers": {
          "a": "Lagerung",
          "b": "Wärme",
          "c": "Kälte",
          "d": "Alle Antworten sind richtig"
        },
        "correct": "d"
      },
      {
        "question": "Welches Medikament gehört NICHT zur WHO-Stufe 1?",
        "answers": {
          "a": "Paracetamol",
          "b": "Ibuprofen",
          "c": "Morphin",
          "d": "Novalgin"
        },
        "correct": "c"
      },
      {
        "question": "Welches Medikament ist ein schwach wirksames Opioid?",
        "answers": {
          "a": "Tramadol",
          "b": "Morphin",
          "c": "Fentanyl",
          "d": "Ibuprofen"
        },
        "correct": "a"
      },
      {
        "question": "Welches Medikament zählt zu den stark wirksamen Opioiden?",
        "answers": {
          "a": "Fentanyl",
          "b": "Tramadol",
          "c": "Tilidin",
          "d": "Diclofenac"
        },
        "correct": "a"
      },
      {
        "question": "Warum werden Opioide mit Nicht-Opioiden kombiniert?",
        "answers": {
          "a": "Unterschiedliche Wirkorte",
          "b": "Wegen des Geschmacks",
          "c": "Wegen der Farbe",
          "d": "Wegen des Preises"
        },
        "correct": "a"
      },
      {
        "question": "Wo wirken Nicht-Opioide hauptsächlich?",
        "answers": {
          "a": "Peripher",
          "b": "Ausschließlich im Gehirn",
          "c": "Nur im Rückenmark",
          "d": "Nur im Herzen"
        },
        "correct": "a"
      },
      {
        "question": "Wo wirken Opioide hauptsächlich?",
        "answers": {
          "a": "Zentral",
          "b": "Ausschließlich in den Muskeln",
          "c": "Nur im Magen",
          "d": "Nur in den Gelenken"
        },
        "correct": "a"
      },
      {
        "question": "Wann sollte Schmerz erneut beurteilt werden?",
        "answers": {
          "a": "Nach jeder Intervention",
          "b": "Nur bei Aufnahme",
          "c": "Nie",
          "d": "Einmal pro Woche"
        },
        "correct": "a"
      },
      {
        "question": "Warum wird Schmerz dokumentiert?",
        "answers": {
          "a": "Zur Verlaufskontrolle",
          "b": "Nur für die Krankenkasse",
          "c": "Nur für den Arzt",
          "d": "Es ist freiwillig."
        },
        "correct": "a"
      },
      {
        "question": "Welche Reihenfolge ist richtig?",
        "answers": {
          "a": "Messen – Dokumentieren – Intervenieren – Evaluieren",
          "b": "Intervenieren – Dokumentieren – Vergessen",
          "c": "Nur Medikament geben",
          "d": "Nur Dokumentieren"
        },
        "correct": "a"
      },
      {
        "question": "Was bedeutet NRS 0?",
        "answers": {
          "a": "Stärkster Schmerz",
          "b": "Kein Schmerz",
          "c": "Mittlerer Schmerz",
          "d": "Chronischer Schmerz"
        },
        "correct": "b"
      },
      {
        "question": "Was bedeutet NRS 10?",
        "answers": {
          "a": "Kein Schmerz",
          "b": "Leichter Schmerz",
          "c": "Stärkster vorstellbarer Schmerz",
          "d": "Chronischer Schmerz"
        },
        "correct": "c"
      },
      {
        "question": "Welche Aussage zur BESD stimmt?",
        "answers": {
          "a": "Sie eignet sich für Menschen mit Demenz.",
          "b": "Sie eignet sich nur für Kinder.",
          "c": "Sie misst den Blutdruck.",
          "d": "Sie misst Fieber."
        },
        "correct": "a"
      },
      {
        "question": "Welche Beobachtung gehört NICHT zur BESD?",
        "answers": {
          "a": "Mimik",
          "b": "Gestik",
          "c": "Blutdruck",
          "d": "Lautäußerungen"
        },
        "correct": "c"
      },
      {
        "question": "Welche Skala ist für Säuglinge geeignet?",
        "answers": {
          "a": "KUSS",
          "b": "Glasgow",
          "c": "Braden",
          "d": "Norton"
        },
        "correct": "a"
      },
      {
        "question": "Warum entsteht Phantomschmerz?",
        "answers": {
          "a": "Wegen verbleibender Nervenenden",
          "b": "Wegen Muskelkater",
          "c": "Wegen Fieber",
          "d": "Wegen Blutarmut"
        },
        "correct": "a"
      },
      {
        "question": "Was kann Phantomschmerzen verstärken?",
        "answers": {
          "a": "Wetterwechsel",
          "b": "Kaltes Wasser trinken",
          "c": "Schlaf",
          "d": "Essen"
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage über Schmerz ist richtig?",
        "answers": {
          "a": "Schmerz ist subjektiv.",
          "b": "Schmerz ist immer objektiv.",
          "c": "Schmerz kann nicht beschrieben werden.",
          "d": "Schmerz ist immer gleich."
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage trifft zu?",
        "answers": {
          "a": "Schmerz kann ohne sichtbare Verletzung auftreten.",
          "b": "Schmerz entsteht nur bei offenen Wunden.",
          "c": "Schmerz entsteht nur bei Brüchen.",
          "d": "Schmerz entsteht nur bei Operationen."
        },
        "correct": "a"
      },
      {
        "question": "Welcher Satz beschreibt Schmerz am besten?",
        "answers": {
          "a": "Schmerz ist immer messbar.",
          "b": "Schmerz ist das, was der Patient angibt.",
          "c": "Nur Ärzte können Schmerz beurteilen.",
          "d": "Schmerz ist Einbildung."
        },
        "correct": "b"
      },
      {
        "question": "Welche Aussage stimmt?",
        "answers": {
          "a": "Schmerz kann psychische und körperliche Ursachen haben.",
          "b": "Schmerz ist nur psychisch.",
          "c": "Schmerz ist nur körperlich.",
          "d": "Schmerz ist immer eingebildet."
        },
        "correct": "a"
      },
      {
        "question": "Warum sollte Schmerz früh behandelt werden?",
        "answers": {
          "a": "Weil sich Schmerz chronifizieren kann.",
          "b": "Weil Medikamente sonst nicht wirken.",
          "c": "Weil Patienten sonst schlafen.",
          "d": "Weil Schmerzen immer verschwinden."
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage zu chronischem Schmerz stimmt?",
        "answers": {
          "a": "Er kann sich verselbstständigen.",
          "b": "Er verschwindet immer nach 24 Stunden.",
          "c": "Er betrifft nur alte Menschen.",
          "d": "Er entsteht nur nach Operationen."
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage trifft auf chronische Schmerzen zu?",
        "answers": {
          "a": "Nerven leiten den Schmerz mit der Zeit schneller.",
          "b": "Nerven leiten immer gleich schnell.",
          "c": "Nerven hören auf zu arbeiten.",
          "d": "Nerven sterben sofort ab."
        },
        "correct": "a"
      },
      {
        "question": "Welche Aussage zu Nozizeptoren stimmt?",
        "answers": {
          "a": "Sie sind Schmerzrezeptoren.",
          "b": "Sie sind Muskelzellen.",
          "c": "Sie produzieren Hormone.",
          "d": "Sie bilden Blut."
        },
        "correct": "a"
      },
      {
        "question": "Warum wird Schmerz immer individuell beurteilt?",
        "answers": {
          "a": "Jeder Mensch empfindet Schmerz unterschiedlich.",
          "b": "Jeder Mensch hat dieselben Schmerzen.",
          "c": "Schmerz hängt nur von der Verletzung ab.",
          "d": "Schmerz ist objektiv messbar."
        },
        "correct": "a"
      },
      {
        "question": "Welcher Satz ist für die Pflege besonders wichtig?",
        "answers": {
          "a": "Schmerzen ernst nehmen und regelmäßig evaluieren.",
          "b": "Schmerzen ignorieren.",
          "c": "Schmerzen nur dokumentieren.",
          "d": "Schmerzen nur auf Nachfrage behandeln."
        },
        "correct": "a"
      }
    ]
  },
  "100_mc_fragen_pflegeprozess": {
    "label": "100 Multiple-Choice-Fragen -- Pflegeprozess",
    "questions": [
      {
        "question": "Was umfasst professionelle Pflege nach ICN?",
        "answers": {
          "a": "Nur Behandlung",
          "b": "Nur Grundpflege",
          "c": "Gesundheitsförderung, Prävention und Versorgung",
          "d": "Nur Dokumentation"
        },
        "correct": "c",
        "explanation": "Pflege umfasst weit mehr als die Behandlung von Krankheiten."
      },
      {
        "question": "Zu den Aufgaben der Pflege gehört ...",
        "answers": {
          "a": "Advocacy",
          "b": "Steuerberatung",
          "c": "Hausmeisterdienst",
          "d": "Rechtsvertretung"
        },
        "correct": "a",
        "explanation": "Advocacy bedeutet Interessenvertretung der Pflegeempfänger."
      },
      {
        "question": "Pflege richtet sich an ...",
        "answers": {
          "a": "nur Erwachsene",
          "b": "Menschen aller Altersgruppen",
          "c": "nur Senioren",
          "d": "nur Kinder"
        },
        "correct": "b",
        "explanation": "Die Definition gilt für alle Altersgruppen."
      },
      {
        "question": "Pflege findet statt ...",
        "answers": {
          "a": "nur im Krankenhaus",
          "b": "in allen Settings",
          "c": "nur im Heim",
          "d": "nur ambulant"
        },
        "correct": "b",
        "explanation": "Pflege erfolgt in allen Lebenssituationen."
      },
      {
        "question": "Wie viele Schritte hat der Pflegeprozess?",
        "answers": {
          "a": "4",
          "b": "5",
          "c": "6",
          "d": "7"
        },
        "correct": "c",
        "explanation": "Nach Fiechter und Meyer sind es sechs Schritte."
      },
      {
        "question": "Erster Schritt?",
        "answers": {
          "a": "Evaluation",
          "b": "Informationssammlung",
          "c": "Durchführung",
          "d": "Pflegeziele"
        },
        "correct": "b",
        "explanation": "Die Informationssammlung bildet die Grundlage."
      },
      {
        "question": "Letzter Schritt?",
        "answers": {
          "a": "Evaluation",
          "b": "Diagnose",
          "c": "Planung",
          "d": "Durchführung"
        },
        "correct": "a",
        "explanation": "Am Ende wird evaluiert."
      },
      {
        "question": "Der Pflegeprozess ist ...",
        "answers": {
          "a": "zufällig",
          "b": "systematisch",
          "c": "freiwillig",
          "d": "einmalig"
        },
        "correct": "b",
        "explanation": "Er ist ein systematischer Problemlösungsprozess."
      },
      {
        "question": "Objektive Information ist ...",
        "answers": {
          "a": "Schmerz",
          "b": "Angst",
          "c": "Blutdruck",
          "d": "Übelkeit"
        },
        "correct": "c",
        "explanation": "Messbare Werte sind objektiv."
      },
      {
        "question": "Subjektive Information ist ...",
        "answers": {
          "a": "Puls",
          "b": "Temperatur",
          "c": "Schmerz",
          "d": "Gewicht"
        },
        "correct": "c",
        "explanation": "Schmerz wird individuell empfunden."
      },
      {
        "question": "Informationssammlung erfolgt ...",
        "answers": {
          "a": "nur bei Aufnahme",
          "b": "bei jedem Kontakt",
          "c": "monatlich",
          "d": "nie"
        },
        "correct": "b",
        "explanation": "Neue Informationen entstehen laufend."
      },
      {
        "question": "Keine geeignete Quelle?",
        "answers": {
          "a": "Arztbrief",
          "b": "Übergabe",
          "c": "Internetforum",
          "d": "Assessment"
        },
        "correct": "c",
        "explanation": "Internetforen sind keine professionelle Quelle."
      },
      {
        "question": "Ein aktuelles Pflegeproblem ist ...",
        "answers": {
          "a": "akut vorhanden",
          "b": "mögliches Risiko",
          "c": "versteckt",
          "d": "zukünftig"
        },
        "correct": "a",
        "explanation": "Es besteht bereits."
      },
      {
        "question": "Dekubitusrisiko ist ...",
        "answers": {
          "a": "aktuell",
          "b": "potentiell",
          "c": "verdeckt",
          "d": "individuell"
        },
        "correct": "b",
        "explanation": "Es handelt sich um ein Risiko."
      },
      {
        "question": "Verdeckte Pflegeprobleme ...",
        "answers": {
          "a": "sind immer sichtbar",
          "b": "werden verborgen",
          "c": "existieren nicht",
          "d": "sind Diagnosen"
        },
        "correct": "b",
        "explanation": "Sie werden verschwiegen."
      },
      {
        "question": "Pflegediagnosen können mit ... klassifiziert werden.",
        "answers": {
          "a": "NANDA",
          "b": "ICD nur",
          "c": "OPS",
          "d": "ATC"
        },
        "correct": "a",
        "explanation": "NANDA ist ein Klassifikationssystem."
      },
      {
        "question": "Ressourcen sind ...",
        "answers": {
          "a": "nur Geld",
          "b": "Fähigkeiten und Hilfen",
          "c": "nur Medikamente",
          "d": "nur Geräte"
        },
        "correct": "b",
        "explanation": "Sie unterstützen den Pflegeempfänger."
      },
      {
        "question": "Familie ist eine ... Ressource.",
        "answers": {
          "a": "soziale",
          "b": "körperliche",
          "c": "ökonomische",
          "d": "räumliche"
        },
        "correct": "a",
        "explanation": "Angehörige gehören zu sozialen Ressourcen."
      },
      {
        "question": "Rollator ist ...",
        "answers": {
          "a": "körperliche",
          "b": "Hilfsmittel/Ressource",
          "c": "Diagnose",
          "d": "Problem"
        },
        "correct": "b",
        "explanation": "Hilfsmittel sind Ressourcen."
      },
      {
        "question": "Glaube ist ... Ressource.",
        "answers": {
          "a": "spirituelle",
          "b": "körperliche",
          "c": "ökonomische",
          "d": "soziale"
        },
        "correct": "a",
        "explanation": "Religion kann Kraft geben."
      },
      {
        "question": "Pflegeziele sollen sein ...",
        "answers": {
          "a": "negativ",
          "b": "realistisch",
          "c": "unmessbar",
          "d": "ungenau"
        },
        "correct": "b",
        "explanation": "Sie müssen erreichbar sein."
      },
      {
        "question": "SMART: S bedeutet ...",
        "answers": {
          "a": "Sicher",
          "b": "Spezifisch",
          "c": "Schnell",
          "d": "Sozial"
        },
        "correct": "b",
        "explanation": "S = Spezifisch."
      },
      {
        "question": "SMART: M bedeutet ...",
        "answers": {
          "a": "Möglich",
          "b": "Messbar",
          "c": "Modern",
          "d": "Mehr"
        },
        "correct": "b",
        "explanation": "M = Messbar."
      },
      {
        "question": "Positiv formuliertes Ziel?",
        "answers": {
          "a": "Nicht stürzen",
          "b": "Patient bleibt sturzfrei",
          "c": "Keine Schmerzen haben",
          "d": "Kein Dekubitus"
        },
        "correct": "b",
        "explanation": "Positive Soll-Beschreibung."
      },
      {
        "question": "Maßnahmen orientieren sich an ...",
        "answers": {
          "a": "Wünschen der Pflegekraft",
          "b": "Bedarf des Patienten",
          "c": "Zufall",
          "d": "Arzt allein"
        },
        "correct": "b",
        "explanation": "Sie sind individuell."
      },
      {
        "question": "Leitfrage lautet ...",
        "answers": {
          "a": "Wer? Was? Wann? Wie?",
          "b": "Nur Warum?",
          "c": "Nur Wo?",
          "d": "Nur Womit?"
        },
        "correct": "a",
        "explanation": "Die Planung beschreibt Durchführung eindeutig."
      },
      {
        "question": "Durchführung erfolgt durch ...",
        "answers": {
          "a": "alle beteiligten Pflegefachkräfte",
          "b": "nur Ärzte",
          "c": "nur Schüler",
          "d": "niemand"
        },
        "correct": "a",
        "explanation": "Alle setzen die Planung um."
      },
      {
        "question": "Abweichungen ...",
        "answers": {
          "a": "dürfen nie vorkommen",
          "b": "werden dokumentiert",
          "c": "werden ignoriert",
          "d": "sind verboten"
        },
        "correct": "b",
        "explanation": "Abweichungen müssen dokumentiert werden."
      },
      {
        "question": "Evaluation bedeutet ...",
        "answers": {
          "a": "Diagnose",
          "b": "Soll-Ist-Vergleich",
          "c": "Aufnahme",
          "d": "Entlassung"
        },
        "correct": "b",
        "explanation": "Ziele werden überprüft."
      },
      {
        "question": "Wenn Ziel nicht erreicht ...",
        "answers": {
          "a": "Pflege endet",
          "b": "Maßnahmen anpassen",
          "c": "nichts tun",
          "d": "Patient entlassen"
        },
        "correct": "b",
        "explanation": "Pflegeprozess wird angepasst."
      },
      {
        "question": "Wenn Ziel erreicht ...",
        "answers": {
          "a": "abschließen",
          "b": "ignorieren",
          "c": "neu aufnehmen",
          "d": "löschen"
        },
        "correct": "a",
        "explanation": "Erreichte Ziele können beendet werden."
      },
      {
        "question": "Der Pflegeprozess ist ein ...",
        "answers": {
          "a": "Regelkreis",
          "b": "Einmalschritt",
          "c": "Gesetz",
          "d": "Algorithmus"
        },
        "correct": "a",
        "explanation": "Er wird wiederholt."
      },
      {
        "question": "Was umfasst professionelle Pflege nach ICN?",
        "answers": {
          "a": "Nur Behandlung",
          "b": "Nur Grundpflege",
          "c": "Gesundheitsförderung, Prävention und Versorgung",
          "d": "Nur Dokumentation"
        },
        "correct": "c",
        "explanation": "Pflege umfasst weit mehr als die Behandlung von Krankheiten."
      },
      {
        "question": "Zu den Aufgaben der Pflege gehört ...",
        "answers": {
          "a": "Advocacy",
          "b": "Steuerberatung",
          "c": "Hausmeisterdienst",
          "d": "Rechtsvertretung"
        },
        "correct": "a",
        "explanation": "Advocacy bedeutet Interessenvertretung der Pflegeempfänger."
      },
      {
        "question": "Pflege richtet sich an ...",
        "answers": {
          "a": "nur Erwachsene",
          "b": "Menschen aller Altersgruppen",
          "c": "nur Senioren",
          "d": "nur Kinder"
        },
        "correct": "b",
        "explanation": "Die Definition gilt für alle Altersgruppen."
      },
      {
        "question": "Pflege findet statt ...",
        "answers": {
          "a": "nur im Krankenhaus",
          "b": "in allen Settings",
          "c": "nur im Heim",
          "d": "nur ambulant"
        },
        "correct": "b",
        "explanation": "Pflege erfolgt in allen Lebenssituationen."
      },
      {
        "question": "Wie viele Schritte hat der Pflegeprozess?",
        "answers": {
          "a": "4",
          "b": "5",
          "c": "6",
          "d": "7"
        },
        "correct": "c",
        "explanation": "Nach Fiechter und Meyer sind es sechs Schritte."
      },
      {
        "question": "Erster Schritt?",
        "answers": {
          "a": "Evaluation",
          "b": "Informationssammlung",
          "c": "Durchführung",
          "d": "Pflegeziele"
        },
        "correct": "b",
        "explanation": "Die Informationssammlung bildet die Grundlage."
      },
      {
        "question": "Letzter Schritt?",
        "answers": {
          "a": "Evaluation",
          "b": "Diagnose",
          "c": "Planung",
          "d": "Durchführung"
        },
        "correct": "a",
        "explanation": "Am Ende wird evaluiert."
      },
      {
        "question": "Der Pflegeprozess ist ...",
        "answers": {
          "a": "zufällig",
          "b": "systematisch",
          "c": "freiwillig",
          "d": "einmalig"
        },
        "correct": "b",
        "explanation": "Er ist ein systematischer Problemlösungsprozess."
      },
      {
        "question": "Objektive Information ist ...",
        "answers": {
          "a": "Schmerz",
          "b": "Angst",
          "c": "Blutdruck",
          "d": "Übelkeit"
        },
        "correct": "c",
        "explanation": "Messbare Werte sind objektiv."
      },
      {
        "question": "Subjektive Information ist ...",
        "answers": {
          "a": "Puls",
          "b": "Temperatur",
          "c": "Schmerz",
          "d": "Gewicht"
        },
        "correct": "c",
        "explanation": "Schmerz wird individuell empfunden."
      },
      {
        "question": "Informationssammlung erfolgt ...",
        "answers": {
          "a": "nur bei Aufnahme",
          "b": "bei jedem Kontakt",
          "c": "monatlich",
          "d": "nie"
        },
        "correct": "b",
        "explanation": "Neue Informationen entstehen laufend."
      },
      {
        "question": "Keine geeignete Quelle?",
        "answers": {
          "a": "Arztbrief",
          "b": "Übergabe",
          "c": "Internetforum",
          "d": "Assessment"
        },
        "correct": "c",
        "explanation": "Internetforen sind keine professionelle Quelle."
      },
      {
        "question": "Ein aktuelles Pflegeproblem ist ...",
        "answers": {
          "a": "akut vorhanden",
          "b": "mögliches Risiko",
          "c": "versteckt",
          "d": "zukünftig"
        },
        "correct": "a",
        "explanation": "Es besteht bereits."
      },
      {
        "question": "Dekubitusrisiko ist ...",
        "answers": {
          "a": "aktuell",
          "b": "potentiell",
          "c": "verdeckt",
          "d": "individuell"
        },
        "correct": "b",
        "explanation": "Es handelt sich um ein Risiko."
      },
      {
        "question": "Verdeckte Pflegeprobleme ...",
        "answers": {
          "a": "sind immer sichtbar",
          "b": "werden verborgen",
          "c": "existieren nicht",
          "d": "sind Diagnosen"
        },
        "correct": "b",
        "explanation": "Sie werden verschwiegen."
      },
      {
        "question": "Pflegediagnosen können mit ... klassifiziert werden.",
        "answers": {
          "a": "NANDA",
          "b": "ICD nur",
          "c": "OPS",
          "d": "ATC"
        },
        "correct": "a",
        "explanation": "NANDA ist ein Klassifikationssystem."
      },
      {
        "question": "Ressourcen sind ...",
        "answers": {
          "a": "nur Geld",
          "b": "Fähigkeiten und Hilfen",
          "c": "nur Medikamente",
          "d": "nur Geräte"
        },
        "correct": "b",
        "explanation": "Sie unterstützen den Pflegeempfänger."
      },
      {
        "question": "Familie ist eine ... Ressource.",
        "answers": {
          "a": "soziale",
          "b": "körperliche",
          "c": "ökonomische",
          "d": "räumliche"
        },
        "correct": "a",
        "explanation": "Angehörige gehören zu sozialen Ressourcen."
      },
      {
        "question": "Rollator ist ...",
        "answers": {
          "a": "körperliche",
          "b": "Hilfsmittel/Ressource",
          "c": "Diagnose",
          "d": "Problem"
        },
        "correct": "b",
        "explanation": "Hilfsmittel sind Ressourcen."
      },
      {
        "question": "Glaube ist ... Ressource.",
        "answers": {
          "a": "spirituelle",
          "b": "körperliche",
          "c": "ökonomische",
          "d": "soziale"
        },
        "correct": "a",
        "explanation": "Religion kann Kraft geben."
      },
      {
        "question": "Pflegeziele sollen sein ...",
        "answers": {
          "a": "negativ",
          "b": "realistisch",
          "c": "unmessbar",
          "d": "ungenau"
        },
        "correct": "b",
        "explanation": "Sie müssen erreichbar sein."
      },
      {
        "question": "SMART: S bedeutet ...",
        "answers": {
          "a": "Sicher",
          "b": "Spezifisch",
          "c": "Schnell",
          "d": "Sozial"
        },
        "correct": "b",
        "explanation": "S = Spezifisch."
      },
      {
        "question": "SMART: M bedeutet ...",
        "answers": {
          "a": "Möglich",
          "b": "Messbar",
          "c": "Modern",
          "d": "Mehr"
        },
        "correct": "b",
        "explanation": "M = Messbar."
      },
      {
        "question": "Positiv formuliertes Ziel?",
        "answers": {
          "a": "Nicht stürzen",
          "b": "Patient bleibt sturzfrei",
          "c": "Keine Schmerzen haben",
          "d": "Kein Dekubitus"
        },
        "correct": "b",
        "explanation": "Positive Soll-Beschreibung."
      },
      {
        "question": "Maßnahmen orientieren sich an ...",
        "answers": {
          "a": "Wünschen der Pflegekraft",
          "b": "Bedarf des Patienten",
          "c": "Zufall",
          "d": "Arzt allein"
        },
        "correct": "b",
        "explanation": "Sie sind individuell."
      },
      {
        "question": "Leitfrage lautet ...",
        "answers": {
          "a": "Wer? Was? Wann? Wie?",
          "b": "Nur Warum?",
          "c": "Nur Wo?",
          "d": "Nur Womit?"
        },
        "correct": "a",
        "explanation": "Die Planung beschreibt Durchführung eindeutig."
      },
      {
        "question": "Durchführung erfolgt durch ...",
        "answers": {
          "a": "alle beteiligten Pflegefachkräfte",
          "b": "nur Ärzte",
          "c": "nur Schüler",
          "d": "niemand"
        },
        "correct": "a",
        "explanation": "Alle setzen die Planung um."
      },
      {
        "question": "Abweichungen ...",
        "answers": {
          "a": "dürfen nie vorkommen",
          "b": "werden dokumentiert",
          "c": "werden ignoriert",
          "d": "sind verboten"
        },
        "correct": "b",
        "explanation": "Abweichungen müssen dokumentiert werden."
      },
      {
        "question": "Evaluation bedeutet ...",
        "answers": {
          "a": "Diagnose",
          "b": "Soll-Ist-Vergleich",
          "c": "Aufnahme",
          "d": "Entlassung"
        },
        "correct": "b",
        "explanation": "Ziele werden überprüft."
      },
      {
        "question": "Wenn Ziel nicht erreicht ...",
        "answers": {
          "a": "Pflege endet",
          "b": "Maßnahmen anpassen",
          "c": "nichts tun",
          "d": "Patient entlassen"
        },
        "correct": "b",
        "explanation": "Pflegeprozess wird angepasst."
      },
      {
        "question": "Wenn Ziel erreicht ...",
        "answers": {
          "a": "abschließen",
          "b": "ignorieren",
          "c": "neu aufnehmen",
          "d": "löschen"
        },
        "correct": "a",
        "explanation": "Erreichte Ziele können beendet werden."
      },
      {
        "question": "Der Pflegeprozess ist ein ...",
        "answers": {
          "a": "Regelkreis",
          "b": "Einmalschritt",
          "c": "Gesetz",
          "d": "Algorithmus"
        },
        "correct": "a",
        "explanation": "Er wird wiederholt."
      },
      {
        "question": "Was umfasst professionelle Pflege nach ICN?",
        "answers": {
          "a": "Nur Behandlung",
          "b": "Nur Grundpflege",
          "c": "Gesundheitsförderung, Prävention und Versorgung",
          "d": "Nur Dokumentation"
        },
        "correct": "c",
        "explanation": "Pflege umfasst weit mehr als die Behandlung von Krankheiten."
      },
      {
        "question": "Zu den Aufgaben der Pflege gehört ...",
        "answers": {
          "a": "Advocacy",
          "b": "Steuerberatung",
          "c": "Hausmeisterdienst",
          "d": "Rechtsvertretung"
        },
        "correct": "a",
        "explanation": "Advocacy bedeutet Interessenvertretung der Pflegeempfänger."
      },
      {
        "question": "Pflege richtet sich an ...",
        "answers": {
          "a": "nur Erwachsene",
          "b": "Menschen aller Altersgruppen",
          "c": "nur Senioren",
          "d": "nur Kinder"
        },
        "correct": "b",
        "explanation": "Die Definition gilt für alle Altersgruppen."
      },
      {
        "question": "Pflege findet statt ...",
        "answers": {
          "a": "nur im Krankenhaus",
          "b": "in allen Settings",
          "c": "nur im Heim",
          "d": "nur ambulant"
        },
        "correct": "b",
        "explanation": "Pflege erfolgt in allen Lebenssituationen."
      },
      {
        "question": "Wie viele Schritte hat der Pflegeprozess?",
        "answers": {
          "a": "4",
          "b": "5",
          "c": "6",
          "d": "7"
        },
        "correct": "c",
        "explanation": "Nach Fiechter und Meyer sind es sechs Schritte."
      },
      {
        "question": "Erster Schritt?",
        "answers": {
          "a": "Evaluation",
          "b": "Informationssammlung",
          "c": "Durchführung",
          "d": "Pflegeziele"
        },
        "correct": "b",
        "explanation": "Die Informationssammlung bildet die Grundlage."
      },
      {
        "question": "Letzter Schritt?",
        "answers": {
          "a": "Evaluation",
          "b": "Diagnose",
          "c": "Planung",
          "d": "Durchführung"
        },
        "correct": "a",
        "explanation": "Am Ende wird evaluiert."
      },
      {
        "question": "Der Pflegeprozess ist ...",
        "answers": {
          "a": "zufällig",
          "b": "systematisch",
          "c": "freiwillig",
          "d": "einmalig"
        },
        "correct": "b",
        "explanation": "Er ist ein systematischer Problemlösungsprozess."
      },
      {
        "question": "Objektive Information ist ...",
        "answers": {
          "a": "Schmerz",
          "b": "Angst",
          "c": "Blutdruck",
          "d": "Übelkeit"
        },
        "correct": "c",
        "explanation": "Messbare Werte sind objektiv."
      },
      {
        "question": "Subjektive Information ist ...",
        "answers": {
          "a": "Puls",
          "b": "Temperatur",
          "c": "Schmerz",
          "d": "Gewicht"
        },
        "correct": "c",
        "explanation": "Schmerz wird individuell empfunden."
      },
      {
        "question": "Informationssammlung erfolgt ...",
        "answers": {
          "a": "nur bei Aufnahme",
          "b": "bei jedem Kontakt",
          "c": "monatlich",
          "d": "nie"
        },
        "correct": "b",
        "explanation": "Neue Informationen entstehen laufend."
      },
      {
        "question": "Keine geeignete Quelle?",
        "answers": {
          "a": "Arztbrief",
          "b": "Übergabe",
          "c": "Internetforum",
          "d": "Assessment"
        },
        "correct": "c",
        "explanation": "Internetforen sind keine professionelle Quelle."
      },
      {
        "question": "Ein aktuelles Pflegeproblem ist ...",
        "answers": {
          "a": "akut vorhanden",
          "b": "mögliches Risiko",
          "c": "versteckt",
          "d": "zukünftig"
        },
        "correct": "a",
        "explanation": "Es besteht bereits."
      },
      {
        "question": "Dekubitusrisiko ist ...",
        "answers": {
          "a": "aktuell",
          "b": "potentiell",
          "c": "verdeckt",
          "d": "individuell"
        },
        "correct": "b",
        "explanation": "Es handelt sich um ein Risiko."
      },
      {
        "question": "Verdeckte Pflegeprobleme ...",
        "answers": {
          "a": "sind immer sichtbar",
          "b": "werden verborgen",
          "c": "existieren nicht",
          "d": "sind Diagnosen"
        },
        "correct": "b",
        "explanation": "Sie werden verschwiegen."
      },
      {
        "question": "Pflegediagnosen können mit ... klassifiziert werden.",
        "answers": {
          "a": "NANDA",
          "b": "ICD nur",
          "c": "OPS",
          "d": "ATC"
        },
        "correct": "a",
        "explanation": "NANDA ist ein Klassifikationssystem."
      },
      {
        "question": "Ressourcen sind ...",
        "answers": {
          "a": "nur Geld",
          "b": "Fähigkeiten und Hilfen",
          "c": "nur Medikamente",
          "d": "nur Geräte"
        },
        "correct": "b",
        "explanation": "Sie unterstützen den Pflegeempfänger."
      },
      {
        "question": "Familie ist eine ... Ressource.",
        "answers": {
          "a": "soziale",
          "b": "körperliche",
          "c": "ökonomische",
          "d": "räumliche"
        },
        "correct": "a",
        "explanation": "Angehörige gehören zu sozialen Ressourcen."
      },
      {
        "question": "Rollator ist ...",
        "answers": {
          "a": "körperliche",
          "b": "Hilfsmittel/Ressource",
          "c": "Diagnose",
          "d": "Problem"
        },
        "correct": "b",
        "explanation": "Hilfsmittel sind Ressourcen."
      },
      {
        "question": "Glaube ist ... Ressource.",
        "answers": {
          "a": "spirituelle",
          "b": "körperliche",
          "c": "ökonomische",
          "d": "soziale"
        },
        "correct": "a",
        "explanation": "Religion kann Kraft geben."
      },
      {
        "question": "Pflegeziele sollen sein ...",
        "answers": {
          "a": "negativ",
          "b": "realistisch",
          "c": "unmessbar",
          "d": "ungenau"
        },
        "correct": "b",
        "explanation": "Sie müssen erreichbar sein."
      },
      {
        "question": "SMART: S bedeutet ...",
        "answers": {
          "a": "Sicher",
          "b": "Spezifisch",
          "c": "Schnell",
          "d": "Sozial"
        },
        "correct": "b",
        "explanation": "S = Spezifisch."
      },
      {
        "question": "SMART: M bedeutet ...",
        "answers": {
          "a": "Möglich",
          "b": "Messbar",
          "c": "Modern",
          "d": "Mehr"
        },
        "correct": "b",
        "explanation": "M = Messbar."
      },
      {
        "question": "Positiv formuliertes Ziel?",
        "answers": {
          "a": "Nicht stürzen",
          "b": "Patient bleibt sturzfrei",
          "c": "Keine Schmerzen haben",
          "d": "Kein Dekubitus"
        },
        "correct": "b",
        "explanation": "Positive Soll-Beschreibung."
      },
      {
        "question": "Maßnahmen orientieren sich an ...",
        "answers": {
          "a": "Wünschen der Pflegekraft",
          "b": "Bedarf des Patienten",
          "c": "Zufall",
          "d": "Arzt allein"
        },
        "correct": "b",
        "explanation": "Sie sind individuell."
      },
      {
        "question": "Leitfrage lautet ...",
        "answers": {
          "a": "Wer? Was? Wann? Wie?",
          "b": "Nur Warum?",
          "c": "Nur Wo?",
          "d": "Nur Womit?"
        },
        "correct": "a",
        "explanation": "Die Planung beschreibt Durchführung eindeutig."
      },
      {
        "question": "Durchführung erfolgt durch ...",
        "answers": {
          "a": "alle beteiligten Pflegefachkräfte",
          "b": "nur Ärzte",
          "c": "nur Schüler",
          "d": "niemand"
        },
        "correct": "a",
        "explanation": "Alle setzen die Planung um."
      },
      {
        "question": "Abweichungen ...",
        "answers": {
          "a": "dürfen nie vorkommen",
          "b": "werden dokumentiert",
          "c": "werden ignoriert",
          "d": "sind verboten"
        },
        "correct": "b",
        "explanation": "Abweichungen müssen dokumentiert werden."
      },
      {
        "question": "Evaluation bedeutet ...",
        "answers": {
          "a": "Diagnose",
          "b": "Soll-Ist-Vergleich",
          "c": "Aufnahme",
          "d": "Entlassung"
        },
        "correct": "b",
        "explanation": "Ziele werden überprüft."
      },
      {
        "question": "Wenn Ziel nicht erreicht ...",
        "answers": {
          "a": "Pflege endet",
          "b": "Maßnahmen anpassen",
          "c": "nichts tun",
          "d": "Patient entlassen"
        },
        "correct": "b",
        "explanation": "Pflegeprozess wird angepasst."
      },
      {
        "question": "Wenn Ziel erreicht ...",
        "answers": {
          "a": "abschließen",
          "b": "ignorieren",
          "c": "neu aufnehmen",
          "d": "löschen"
        },
        "correct": "a",
        "explanation": "Erreichte Ziele können beendet werden."
      },
      {
        "question": "Der Pflegeprozess ist ein ...",
        "answers": {
          "a": "Regelkreis",
          "b": "Einmalschritt",
          "c": "Gesetz",
          "d": "Algorithmus"
        },
        "correct": "a",
        "explanation": "Er wird wiederholt."
      },
      {
        "question": "Was umfasst professionelle Pflege nach ICN?",
        "answers": {
          "a": "Nur Behandlung",
          "b": "Nur Grundpflege",
          "c": "Gesundheitsförderung, Prävention und Versorgung",
          "d": "Nur Dokumentation"
        },
        "correct": "c",
        "explanation": "Pflege umfasst weit mehr als die Behandlung von Krankheiten."
      },
      {
        "question": "Zu den Aufgaben der Pflege gehört ...",
        "answers": {
          "a": "Advocacy",
          "b": "Steuerberatung",
          "c": "Hausmeisterdienst",
          "d": "Rechtsvertretung"
        },
        "correct": "a",
        "explanation": "Advocacy bedeutet Interessenvertretung der Pflegeempfänger."
      },
      {
        "question": "Pflege richtet sich an ...",
        "answers": {
          "a": "nur Erwachsene",
          "b": "Menschen aller Altersgruppen",
          "c": "nur Senioren",
          "d": "nur Kinder"
        },
        "correct": "b",
        "explanation": "Die Definition gilt für alle Altersgruppen."
      },
      {
        "question": "Pflege findet statt ...",
        "answers": {
          "a": "nur im Krankenhaus",
          "b": "in allen Settings",
          "c": "nur im Heim",
          "d": "nur ambulant"
        },
        "correct": "b",
        "explanation": "Pflege erfolgt in allen Lebenssituationen."
      }
    ]
  },
  "demenz": {
    "label": "Demenz",
    "questions": [
      {
        "question": "Was bedeutet der Begriff **Demenz**?",
        "answers": {
          "a": "Entzündung des Gehirns",
          "b": "Ohne Geist",
          "c": "Gedächtnistraining",
          "d": "Nervenentzündung"
        },
        "correct": "b",
        "explanation": "Demenz stammt vom lateinischen *de mens* und bedeutet „ohne Geist“."
      },
      {
        "question": "Welche Aussage beschreibt Demenz am besten?",
        "answers": {
          "a": "Akute Infektion des Gehirns",
          "b": "Organisch bedingte neurodegenerative Erkrankung",
          "c": "Psychische Erkrankung ohne Hirnveränderung",
          "d": "Stoffwechselerkrankung"
        },
        "correct": "b",
        "explanation": "Demenz entsteht durch einen fortschreitenden Abbau von Hirngewebe."
      },
      {
        "question": "Welche Fähigkeit geht bei einer Demenz typischerweise verloren?",
        "answers": {
          "a": "Sehvermögen",
          "b": "Kognitive Fähigkeiten",
          "c": "Hörvermögen",
          "d": "Geschmackssinn"
        },
        "correct": "b",
        "explanation": "Denken, Erinnern und Orientierung werden zunehmend eingeschränkt."
      },
      {
        "question": "Welche Bereiche gehören zu den kognitiven Fähigkeiten?",
        "answers": {
          "a": "Atmung und Puls",
          "b": "Denken, Erinnern und Orientierung",
          "c": "Verdauung",
          "d": "Muskelkraft"
        },
        "correct": "b",
        "explanation": "Diese Fähigkeiten werden bei Demenz zunehmend beeinträchtigt."
      },
      {
        "question": "Welche Aussage zu den Alltagskompetenzen trifft zu?",
        "answers": {
          "a": "Sie bleiben immer erhalten.",
          "b": "Sie verbessern sich.",
          "c": "Sie nehmen im Krankheitsverlauf ab.",
          "d": "Sie sind nur im Krankenhaus betroffen."
        },
        "correct": "c",
        "explanation": "Mit Fortschreiten der Erkrankung werden alltägliche Tätigkeiten schwieriger."
      },
      {
        "question": "Wer ist häufiger von Demenz betroffen?",
        "answers": {
          "a": "Männer",
          "b": "Frauen",
          "c": "Beide gleich häufig",
          "d": "Nur Männer über 90"
        },
        "correct": "b",
        "explanation": "Frauen sind häufiger betroffen, unter anderem aufgrund ihrer höheren Lebenserwartung."
      },
      {
        "question": "Wie hoch ist das Demenzrisiko bei den 65–69-Jährigen ungefähr?",
        "answers": {
          "a": "0,5 %",
          "b": "1,5 %",
          "c": "10 %",
          "d": "20 %"
        },
        "correct": "b",
        "explanation": "Das Risiko liegt in dieser Altersgruppe bei etwa 1,5 %."
      },
      {
        "question": "Wie verändert sich das Demenzrisiko mit zunehmendem Alter?",
        "answers": {
          "a": "Es sinkt.",
          "b": "Es bleibt gleich.",
          "c": "Es verdoppelt sich etwa alle fünf Jahre.",
          "d": "Es verschwindet."
        },
        "correct": "c",
        "explanation": "Das Erkrankungsrisiko steigt deutlich mit dem Alter."
      },
      {
        "question": "Wie hoch ist das Demenzrisiko bei über 90-Jährigen ungefähr?",
        "answers": {
          "a": "5 %",
          "b": "10 %",
          "c": "Über 30 %",
          "d": "Über 80 %"
        },
        "correct": "c",
        "explanation": "Bei Menschen über 90 Jahren liegt das Risiko bei über 30 %."
      },
      {
        "question": "Welche Störung gehört zur Primärsymptomatik?",
        "answers": {
          "a": "Depression",
          "b": "Orientierungslosigkeit",
          "c": "Aggressivität",
          "d": "Angst"
        },
        "correct": "b",
        "explanation": "Orientierungsstörungen entstehen direkt durch die Hirnveränderungen."
      },
      {
        "question": "Welche Orientierung kann gestört sein?",
        "answers": {
          "a": "Räumliche Orientierung",
          "b": "Zeitliche Orientierung",
          "c": "Orientierung zur Person",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle drei Orientierungsformen können betroffen sein."
      },
      {
        "question": "Welche Erkrankung gehört zur Sekundärsymptomatik?",
        "answers": {
          "a": "Reaktive Depression",
          "b": "Amnesie",
          "c": "Gedächtnisstörung",
          "d": "Orientierungsstörung"
        },
        "correct": "a",
        "explanation": "Depressionen entstehen häufig als Reaktion auf die Erkrankung."
      },
      {
        "question": "Warum entwickeln viele Betroffene Angst?",
        "answers": {
          "a": "Wegen Fieber",
          "b": "Wegen Orientierungslosigkeit",
          "c": "Wegen Bluthochdruck",
          "d": "Wegen Schmerzen"
        },
        "correct": "b",
        "explanation": "Orientierungslosigkeit führt häufig zu Unsicherheit und Angst."
      },
      {
        "question": "Aggressivität entsteht häufig durch ...",
        "answers": {
          "a": "zu wenig Schlaf",
          "b": "Angst und Fehleinschätzung von Situationen",
          "c": "Fieber",
          "d": "Hunger"
        },
        "correct": "b",
        "explanation": "Angst kann aggressive Reaktionen auslösen."
      },
      {
        "question": "Warum entwickeln manche Menschen mit Demenz Wahnvorstellungen?",
        "answers": {
          "a": "Wegen Infektionen",
          "b": "Als Versuch, Situationen zu erklären",
          "c": "Wegen Diabetes",
          "d": "Wegen Fieber"
        },
        "correct": "b",
        "explanation": "Fehlende Erinnerungen werden häufig durch Erklärungsversuche ersetzt."
      },
      {
        "question": "Welche Demenzform ist die häufigste?",
        "answers": {
          "a": "Lewy-Body-Demenz",
          "b": "Frontotemporale Demenz",
          "c": "Alzheimer-Demenz",
          "d": "Reversible Demenz"
        },
        "correct": "c",
        "explanation": "Rund 55 % aller Demenzen sind Alzheimer-Demenzen."
      },
      {
        "question": "Welchen Anteil macht die Alzheimer-Demenz ungefähr aus?",
        "answers": {
          "a": "15 %",
          "b": "30 %",
          "c": "55 %",
          "d": "80 %"
        },
        "correct": "c",
        "explanation": "Sie ist mit etwa 55 % die häufigste Form."
      },
      {
        "question": "Wer beschrieb die Alzheimer-Demenz erstmals?",
        "answers": {
          "a": "Sigmund Freud",
          "b": "Alois Alzheimer",
          "c": "Robert Koch",
          "d": "Paul Ehrlich"
        },
        "correct": "b",
        "explanation": "Alois Alzheimer beschrieb die Erkrankung im Jahr 1907."
      },
      {
        "question": "Welche Ablagerungen finden sich bei Alzheimer?",
        "answers": {
          "a": "Cholesterin",
          "b": "Beta-Amyloid-Plaques",
          "c": "Harnsäure",
          "d": "Kalzium"
        },
        "correct": "b",
        "explanation": "Beta-Amyloid-Plaques sind typisch für Alzheimer."
      },
      {
        "question": "Welcher Neurotransmitter ist bei Alzheimer vermindert?",
        "answers": {
          "a": "Dopamin",
          "b": "Serotonin",
          "c": "Acetylcholin",
          "d": "Adrenalin"
        },
        "correct": "c",
        "explanation": "Die verminderte Acetylcholin-Ausschüttung verschlechtert die Signalübertragung."
      },
      {
        "question": "Wie verläuft die Alzheimer-Demenz meistens?",
        "answers": {
          "a": "Plötzlich",
          "b": "Schubförmig",
          "c": "Langsam fortschreitend",
          "d": "Rückläufig"
        },
        "correct": "c",
        "explanation": "Der Verlauf ist meist schleichend."
      },
      {
        "question": "Was ist die häufigste Ursache einer vaskulären Demenz?",
        "answers": {
          "a": "Virusinfektion",
          "b": "Durchblutungsstörung des Gehirns",
          "c": "Vergiftung",
          "d": "Vitaminmangel"
        },
        "correct": "b",
        "explanation": "Hirninfarkte und Gefäßerkrankungen führen zum Untergang von Hirngewebe."
      },
      {
        "question": "Welcher Verlauf ist typisch für die vaskuläre Demenz?",
        "answers": {
          "a": "Schleichend",
          "b": "Schubförmig",
          "c": "Immer heilbar",
          "d": "Plötzlich vollständig"
        },
        "correct": "b",
        "explanation": "Nach Gefäßereignissen verschlechtert sich der Zustand häufig schubweise."
      },
      {
        "question": "Wie wird eine vaskuläre Demenz häufig diagnostiziert?",
        "answers": {
          "a": "Ultraschall",
          "b": "MRT oder CT",
          "c": "EKG",
          "d": "Blutbild"
        },
        "correct": "b",
        "explanation": "Bildgebung zeigt Gefäßschäden und Hirninfarkte."
      },
      {
        "question": "Welcher Neurotransmitter ist bei der Lewy-Body-Demenz vermindert?",
        "answers": {
          "a": "Acetylcholin",
          "b": "Dopamin",
          "c": "Serotonin",
          "d": "Histamin"
        },
        "correct": "b",
        "explanation": "Der Dopaminmangel verursacht Parkinson-Symptome."
      },
      {
        "question": "Welche Halluzinationen treten häufig bei der Lewy-Body-Demenz auf?",
        "answers": {
          "a": "Akustische",
          "b": "Optische",
          "c": "Geschmackshalluzinationen",
          "d": "Keine"
        },
        "correct": "b",
        "explanation": "Besonders typisch sind optische Halluzinationen."
      },
      {
        "question": "Welcher Gang ist typisch für die Lewy-Body-Demenz?",
        "answers": {
          "a": "Stolzieren",
          "b": "Schlurfender Gang",
          "c": "Zehengang",
          "d": "Hüpfen"
        },
        "correct": "b",
        "explanation": "Die Bewegungsstörungen ähneln Parkinson."
      },
      {
        "question": "Welche Demenz war früher als Pick-Krankheit bekannt?",
        "answers": {
          "a": "Alzheimer",
          "b": "Lewy-Body",
          "c": "Frontotemporale Demenz",
          "d": "Vaskuläre Demenz"
        },
        "correct": "c",
        "explanation": "Die frühere Bezeichnung lautet Pick-Krankheit."
      },
      {
        "question": "Was steht bei der frontotemporalen Demenz häufig NICHT im Vordergrund?",
        "answers": {
          "a": "Verhaltensänderungen",
          "b": "Gedächtnisstörungen",
          "c": "Normverletzungen",
          "d": "Sozial auffälliges Verhalten"
        },
        "correct": "b",
        "explanation": "Zu Beginn dominieren Persönlichkeits- und Verhaltensänderungen."
      },
      {
        "question": "Was ist ein Delir?",
        "answers": {
          "a": "Chronische Demenz",
          "b": "Akuter Verwirrtheitszustand",
          "c": "Depression",
          "d": "Schlaganfall"
        },
        "correct": "b",
        "explanation": "Das Delir beginnt plötzlich und ist meist behandelbar."
      },
      {
        "question": "Welche Aussage beschreibt das Delir am besten?",
        "answers": {
          "a": "Es entwickelt sich über viele Jahre.",
          "b": "Es beginnt akut und ist häufig reversibel.",
          "c": "Es betrifft nur ältere Menschen.",
          "d": "Es ist eine Form der Alzheimer-Demenz."
        },
        "correct": "b",
        "explanation": "Ein Delir entwickelt sich plötzlich und die Ursache kann häufig behandelt werden."
      },
      {
        "question": "Welche Ursache kann ein Delir auslösen?",
        "answers": {
          "a": "Herz-Kreislauf-Erkrankungen",
          "b": "Medikamente oder Narkose",
          "c": "Entzugserscheinungen",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Ein Delir kann viele Ursachen haben, die abgeklärt werden müssen."
      },
      {
        "question": "Warum ist die Ursachenabklärung beim Delir besonders wichtig?",
        "answers": {
          "a": "Weil ein Delir immer heilbar ist.",
          "b": "Weil häufig eine behandelbare Ursache vorliegt.",
          "c": "Weil keine Therapie notwendig ist.",
          "d": "Weil Delir und Demenz identisch sind."
        },
        "correct": "b",
        "explanation": "Durch Behandlung der Ursache kann sich das Delir häufig zurückbilden."
      },
      {
        "question": "Welches Krankheitsstadium ist durch Ratlosigkeit und Angst gekennzeichnet?",
        "answers": {
          "a": "Frühstadium",
          "b": "Mittleres Stadium",
          "c": "Spätstadium",
          "d": "Endstadium"
        },
        "correct": "a",
        "explanation": "Zu Beginn erleben viele Betroffene ihre Einschränkungen bewusst."
      },
      {
        "question": "Welche Fähigkeit ist im Frühstadium meist noch vorhanden?",
        "answers": {
          "a": "Kommunikation mit der Umwelt",
          "b": "Vollständige Pflegebedürftigkeit",
          "c": "Keine Orientierung mehr",
          "d": "Sprachverlust"
        },
        "correct": "a",
        "explanation": "Die Kommunikation ist im Frühstadium häufig noch gut möglich."
      },
      {
        "question": "Was ist typisch für das mittlere Stadium?",
        "answers": {
          "a": "Vollständige Bettlägerigkeit",
          "b": "Verkennung von Situationen und Personen",
          "c": "Keine Gedächtnisstörungen",
          "d": "Normales Alltagsleben"
        },
        "correct": "b",
        "explanation": "Im mittleren Stadium nehmen Orientierungs- und Wahrnehmungsstörungen zu."
      },
      {
        "question": "Welche Aussage trifft auf das Spätstadium zu?",
        "answers": {
          "a": "Der Patient lebt völlig selbstständig.",
          "b": "Alltägliche Aufgaben können nicht mehr eigenständig durchgeführt werden.",
          "c": "Die Krankheit heilt aus.",
          "d": "Gedächtnis und Orientierung verbessern sich."
        },
        "correct": "b",
        "explanation": "Im Spätstadium besteht meist vollständige Pflegebedürftigkeit."
      },
      {
        "question": "Welche Aussage über den Krankheitsverlauf ist richtig?",
        "answers": {
          "a": "Alle Patienten haben denselben Verlauf.",
          "b": "Jeder Verlauf ist individuell.",
          "c": "Es gibt nur drei exakt definierte Stadien.",
          "d": "Jeder Patient erreicht das Spätstadium gleich schnell."
        },
        "correct": "b",
        "explanation": "Verlauf und Geschwindigkeit unterscheiden sich von Person zu Person."
      },
      {
        "question": "Welches Merkmal gehört zur leichten Demenz?",
        "answers": {
          "a": "Vollständiger Sprachverlust",
          "b": "Wortfindungsstörungen",
          "c": "Bettlägerigkeit",
          "d": "Angehörige werden nicht erkannt."
        },
        "correct": "b",
        "explanation": "Frühe Sprachprobleme sind typisch."
      },
      {
        "question": "Welche Gedächtnisleistung ist bei einer leichten Demenz zuerst betroffen?",
        "answers": {
          "a": "Langzeitgedächtnis",
          "b": "Kurzzeitgedächtnis",
          "c": "Kindheitserinnerungen",
          "d": "Motorisches Gedächtnis"
        },
        "correct": "b",
        "explanation": "Neue Informationen können schlechter gespeichert werden."
      },
      {
        "question": "Was passiert häufig mit Gegenständen bei einer leichten Demenz?",
        "answers": {
          "a": "Sie werden bewusst verschenkt.",
          "b": "Sie werden häufig verlegt.",
          "c": "Sie werden verkauft.",
          "d": "Sie gehen nie verloren."
        },
        "correct": "b",
        "explanation": "Das Verlegen von Gegenständen ist ein frühes Symptom."
      },
      {
        "question": "Welche Orientierung nimmt bereits bei einer leichten Demenz ab?",
        "answers": {
          "a": "Räumliche Orientierung",
          "b": "Geschmack",
          "c": "Gehör",
          "d": "Schmerzempfinden"
        },
        "correct": "a",
        "explanation": "Die räumliche Orientierung verschlechtert sich früh."
      },
      {
        "question": "Welche Tätigkeiten bereiten bei leichter Demenz zuerst Schwierigkeiten?",
        "answers": {
          "a": "Einfache Bewegungen",
          "b": "Komplexe Aufgaben",
          "c": "Essen",
          "d": "Atmen"
        },
        "correct": "b",
        "explanation": "Anspruchsvolle Tätigkeiten sind zuerst betroffen."
      },
      {
        "question": "Wie erleben Betroffene ihre Einschränkungen im Frühstadium?",
        "answers": {
          "a": "Gar nicht",
          "b": "Sie sind sich der Defizite meist bewusst.",
          "c": "Sie erkennen niemanden mehr.",
          "d": "Sie verlieren sofort die Sprache."
        },
        "correct": "b",
        "explanation": "Das Krankheitsbewusstsein ist anfangs meist vorhanden."
      },
      {
        "question": "Was bedeutet „die Fassade aufrechterhalten\"?",
        "answers": {
          "a": "Das Haus renovieren",
          "b": "Einschränkungen vor anderen verbergen",
          "c": "Mehr Sport treiben",
          "d": "Medikamente verstecken"
        },
        "correct": "b",
        "explanation": "Viele Betroffene versuchen ihre Defizite zu überspielen."
      },
      {
        "question": "Welches Merkmal gehört zur mittelschweren Demenz?",
        "answers": {
          "a": "Ausgeprägte Gedächtnisstörung",
          "b": "Vollständige Selbstständigkeit",
          "c": "Keine Sprachprobleme",
          "d": "Keine Orientierungseinschränkungen"
        },
        "correct": "a",
        "explanation": "Die Gedächtnisstörungen nehmen deutlich zu."
      },
      {
        "question": "Welche Orientierung verschlechtert sich bei der mittelschweren Demenz zusätzlich?",
        "answers": {
          "a": "Nur räumlich",
          "b": "Räumlich und zeitlich",
          "c": "Nur örtlich",
          "d": "Gar nicht"
        },
        "correct": "b",
        "explanation": "Beide Orientierungsformen nehmen weiter ab."
      },
      {
        "question": "Welche Fähigkeit bleibt häufig noch erhalten?",
        "answers": {
          "a": "Komplexe Haushaltsführung",
          "b": "Einfache Nahrungsaufnahme",
          "c": "Autofahren",
          "d": "Medikamentenmanagement"
        },
        "correct": "b",
        "explanation": "Essen gelingt oft noch, während andere Tätigkeiten nicht mehr möglich sind."
      },
      {
        "question": "Welche Verhaltensweise ist typisch für die mittelschwere Demenz?",
        "answers": {
          "a": "Umherlaufen",
          "b": "Leistungssport",
          "c": "Autofahren",
          "d": "Arbeiten im Büro"
        },
        "correct": "a",
        "explanation": "Unruhe und Weglauftendenz treten häufig auf."
      },
      {
        "question": "Welcher Rhythmus ist häufig gestört?",
        "answers": {
          "a": "Herzrhythmus",
          "b": "Schlaf-Wach-Rhythmus",
          "c": "Atemrhythmus",
          "d": "Essensrhythmus"
        },
        "correct": "b",
        "explanation": "Schlafstörungen gehören zu den häufigen Symptomen."
      },
      {
        "question": "Was geschieht mit der Krankheitseinsicht im mittleren Stadium?",
        "answers": {
          "a": "Sie verbessert sich.",
          "b": "Sie geht weitgehend verloren.",
          "c": "Sie bleibt unverändert.",
          "d": "Sie verschwindet sofort."
        },
        "correct": "b",
        "explanation": "Viele Betroffene erkennen ihre Erkrankung kaum noch."
      },
      {
        "question": "Welches Merkmal kennzeichnet die schwere Demenz?",
        "answers": {
          "a": "Verbesserte Merkfähigkeit",
          "b": "Kaum noch Erinnerungen vorhanden",
          "c": "Vollständige Selbstständigkeit",
          "d": "Gute Orientierung"
        },
        "correct": "b",
        "explanation": "Erinnerungen gehen weitgehend verloren."
      },
      {
        "question": "Was passiert häufig im schweren Stadium?",
        "answers": {
          "a": "Angehörige werden nicht mehr erkannt.",
          "b": "Das Gedächtnis verbessert sich.",
          "c": "Patienten werden wieder selbstständig.",
          "d": "Die Krankheit stoppt."
        },
        "correct": "a",
        "explanation": "Selbst nahe Angehörige werden häufig nicht mehr erkannt."
      },
      {
        "question": "Welche Sprachveränderung tritt häufig auf?",
        "answers": {
          "a": "Sprachgewandtheit",
          "b": "Vollständiger Sprachverlust",
          "c": "Fremdsprachenlernen",
          "d": "Lauteres Sprechen"
        },
        "correct": "b",
        "explanation": "Die Sprachfähigkeit nimmt zunehmend ab."
      },
      {
        "question": "Was nimmt im schweren Stadium deutlich zu?",
        "answers": {
          "a": "Pflegebedürftigkeit",
          "b": "Selbstständigkeit",
          "c": "Mobilität",
          "d": "Konzentration"
        },
        "correct": "a",
        "explanation": "Der Verlust motorischer Fähigkeiten erhöht den Pflegebedarf."
      },
      {
        "question": "Welche Körperfunktion lässt häufig nach?",
        "answers": {
          "a": "Blutdruck",
          "b": "Kontrolle der Ausscheidung",
          "c": "Sehschärfe",
          "d": "Körpergröße"
        },
        "correct": "b",
        "explanation": "Harn- und Stuhlinkontinenz treten häufig auf."
      },
      {
        "question": "Welche Demenzform zeigt häufig Parkinson-Symptome?",
        "answers": {
          "a": "Alzheimer-Demenz",
          "b": "Lewy-Body-Demenz",
          "c": "Frontotemporale Demenz",
          "d": "Vaskuläre Demenz"
        },
        "correct": "b",
        "explanation": "Der Dopaminmangel führt zu typischen Parkinson-Symptomen."
      },
      {
        "question": "Welche Demenzform verläuft meist schleichend?",
        "answers": {
          "a": "Alzheimer-Demenz",
          "b": "Delir",
          "c": "Vaskuläre Demenz",
          "d": "Schlaganfall"
        },
        "correct": "a",
        "explanation": "Alzheimer entwickelt sich langsam über Jahre."
      },
      {
        "question": "Welche Demenzform verläuft häufig schubförmig?",
        "answers": {
          "a": "Alzheimer-Demenz",
          "b": "Vaskuläre Demenz",
          "c": "Lewy-Body-Demenz",
          "d": "Frontotemporale Demenz"
        },
        "correct": "b",
        "explanation": "Neue Gefäßereignisse verschlechtern den Zustand schubweise."
      },
      {
        "question": "Welche Aussage ist richtig?",
        "answers": {
          "a": "Demenz ist immer heilbar.",
          "b": "Alle Demenzen verlaufen gleich.",
          "c": "Es gibt über 50 verschiedene Demenzformen und Ausprägungen.",
          "d": "Es existieren nur zwei Demenzformen."
        },
        "correct": "c",
        "explanation": "Es werden über 50 verschiedene Formen und Ausprägungen der Demenz beschrieben."
      },
      {
        "question": "Welche Demenzform macht etwa 15 % aller Demenzen aus?",
        "answers": {
          "a": "Alzheimer-Demenz",
          "b": "Vaskuläre Demenz",
          "c": "Frontotemporale Demenz",
          "d": "Lewy-Body-Demenz"
        },
        "correct": "b",
        "explanation": "Die vaskuläre Demenz ist nach Alzheimer die zweithäufigste Form und macht etwa 15 % aus."
      },
      {
        "question": "Welcher Anteil entfällt ungefähr auf gemischte Demenzen?",
        "answers": {
          "a": "5 %",
          "b": "10 %",
          "c": "15 %",
          "d": "30 %"
        },
        "correct": "c",
        "explanation": "Gemischte Demenzen machen etwa 15 % aller Demenzen aus."
      },
      {
        "question": "Welchen Anteil haben reversible Demenzen ungefähr?",
        "answers": {
          "a": "5 %",
          "b": "20 %",
          "c": "35 %",
          "d": "55 %"
        },
        "correct": "a",
        "explanation": "Etwa 5 % der Demenzen gelten als reversibel."
      },
      {
        "question": "Warum ist Ursachenforschung bei Demenz wichtig?",
        "answers": {
          "a": "Weil jede Demenz heilbar ist.",
          "b": "Weil nicht jede Ursache direkt im Gehirn liegt.",
          "c": "Weil Medikamente immer helfen.",
          "d": "Weil Demenz ansteckend ist."
        },
        "correct": "b",
        "explanation": "Sekundäre bzw. reversible Ursachen müssen erkannt werden."
      },
      {
        "question": "Welche Aussage beschreibt primäre Demenzen?",
        "answers": {
          "a": "Sie entstehen direkt durch Erkrankungen des Gehirns.",
          "b": "Sie werden ausschließlich durch Medikamente verursacht.",
          "c": "Sie sind immer heilbar.",
          "d": "Sie treten nur bei Kindern auf."
        },
        "correct": "a",
        "explanation": "Primäre Demenzen entstehen durch Veränderungen im Gehirn."
      },
      {
        "question": "Welche Aussage beschreibt sekundäre Demenzen?",
        "answers": {
          "a": "Sie entstehen ausschließlich im Alter.",
          "b": "Sie werden durch andere Erkrankungen oder Ursachen ausgelöst.",
          "c": "Sie sind immer Alzheimer.",
          "d": "Sie verlaufen immer schubförmig."
        },
        "correct": "b",
        "explanation": "Sekundäre Demenzen können Folge anderer Erkrankungen sein."
      },
      {
        "question": "Welche Veränderung findet sich bei Alzheimer im Gehirn?",
        "answers": {
          "a": "Wachstum neuer Nervenzellen",
          "b": "Atrophie der Großhirnrinde",
          "c": "Vergrößerung des Kleinhirns",
          "d": "Knochenabbau"
        },
        "correct": "b",
        "explanation": "Durch den Nervenzellverlust schrumpft die Großhirnrinde."
      },
      {
        "question": "Bis zu wie viel Prozent des Nervengewebes können bei Alzheimer zugrunde gehen?",
        "answers": {
          "a": "10 %",
          "b": "20 %",
          "c": "40 %",
          "d": "90 %"
        },
        "correct": "c",
        "explanation": "Im Verlauf können bis zu 40 % des Nervengewebes verloren gehen."
      },
      {
        "question": "Welches Protein lagert sich neben Beta-Amyloid ebenfalls ab?",
        "answers": {
          "a": "Albumin",
          "b": "Tau-Protein",
          "c": "Insulin",
          "d": "Ferritin"
        },
        "correct": "b",
        "explanation": "Tau-Proteine bilden zusammen mit Beta-Amyloid typische Veränderungen."
      },
      {
        "question": "Welche Folge hat die erhöhte Glutamat-Ausschüttung?",
        "answers": {
          "a": "Nervenzellen werden geschützt.",
          "b": "Dauerreizung der Synapsen.",
          "c": "Verbesserte Merkfähigkeit.",
          "d": "Schnellere Wundheilung."
        },
        "correct": "b",
        "explanation": "Die Dauerreizung schädigt Nervenzellen zusätzlich."
      },
      {
        "question": "Warum verschlechtert sich die Informationsübertragung bei Alzheimer?",
        "answers": {
          "a": "Mehr Dopamin",
          "b": "Weniger Acetylcholin",
          "c": "Mehr Sauerstoff",
          "d": "Weniger Blut"
        },
        "correct": "b",
        "explanation": "Acetylcholin ist wichtig für die Signalübertragung zwischen Nervenzellen."
      },
      {
        "question": "Mit welchem Symptom beginnt Alzheimer meist?",
        "answers": {
          "a": "Halbseitenlähmung",
          "b": "Gedächtnisstörungen",
          "c": "Sprachverlust",
          "d": "Blindheit"
        },
        "correct": "b",
        "explanation": "Frühe Gedächtnisprobleme sind typisch."
      },
      {
        "question": "Welche Veränderung kann im Verlauf der Alzheimer-Demenz zusätzlich auftreten?",
        "answers": {
          "a": "Persönlichkeitsveränderung",
          "b": "Knochenbruch",
          "c": "Schwerhörigkeit",
          "d": "Herzinfarkt"
        },
        "correct": "a",
        "explanation": "Veränderungen der Persönlichkeit sind möglich."
      },
      {
        "question": "Warum ist Alzheimer im Frühstadium oft schwer zu diagnostizieren?",
        "answers": {
          "a": "Es gibt keine Symptome.",
          "b": "Die ersten Symptome entwickeln sich schleichend.",
          "c": "Es gibt keine Untersuchungen.",
          "d": "Betroffene sind immer bewusstlos."
        },
        "correct": "b",
        "explanation": "Anfangs sind die Beschwerden oft unspezifisch."
      },
      {
        "question": "Was ist die Ursache der vaskulären Demenz?",
        "answers": {
          "a": "Infektion",
          "b": "Durchblutungsstörung",
          "c": "Vergiftung",
          "d": "Tumor"
        },
        "correct": "b",
        "explanation": "Gefäßschäden führen zum Untergang von Hirngewebe."
      },
      {
        "question": "Welche Stimmungsschwankung ist typisch für die vaskuläre Demenz?",
        "answers": {
          "a": "Wechsel zwischen Lachen und Weinen",
          "b": "Euphorie ohne Unterbrechung",
          "c": "Ständige Aggression",
          "d": "Dauerhafte Schlaflosigkeit"
        },
        "correct": "a",
        "explanation": "Stimmungsschwankungen treten häufig auf."
      },
      {
        "question": "Welches neurologische Symptom kann bei vaskulärer Demenz auftreten?",
        "answers": {
          "a": "Halbseitenlähmung",
          "b": "Kurzsichtigkeit",
          "c": "Hörverlust",
          "d": "Hautausschlag"
        },
        "correct": "a",
        "explanation": "Schlaganfälle verursachen häufig Halbseitenlähmungen."
      },
      {
        "question": "Welche weitere Störung kann bei vaskulärer Demenz vorkommen?",
        "answers": {
          "a": "Sprachstörung",
          "b": "Blinddarmentzündung",
          "c": "Nierenversagen",
          "d": "Asthma"
        },
        "correct": "a",
        "explanation": "Sprachstörungen gehören zu den typischen neurologischen Ausfällen."
      },
      {
        "question": "Welche Eigenschaft bleibt bei vaskulärer Demenz häufig länger erhalten?",
        "answers": {
          "a": "Sozialverhalten und Persönlichkeit",
          "b": "Kurzzeitgedächtnis",
          "c": "Orientierung",
          "d": "Merkfähigkeit"
        },
        "correct": "a",
        "explanation": "Persönlichkeit und Sozialverhalten bleiben häufig länger erhalten."
      },
      {
        "question": "Welche Untersuchung ist für die vaskuläre Demenz besonders wichtig?",
        "answers": {
          "a": "EKG",
          "b": "MRT oder CT",
          "c": "Lungenfunktion",
          "d": "Gastroskopie"
        },
        "correct": "b",
        "explanation": "Gefäßveränderungen werden mit bildgebenden Verfahren dargestellt."
      },
      {
        "question": "Wodurch entstehen Lewy-Körperchen?",
        "answers": {
          "a": "Veränderungen der Eiweißzellen im Gehirn",
          "b": "Bakterien",
          "c": "Viren",
          "d": "Kalziummangel"
        },
        "correct": "a",
        "explanation": "Lewy-Körperchen sind krankhafte Eiweißablagerungen."
      },
      {
        "question": "Welches typische Bewegungsbild zeigt die Lewy-Body-Demenz?",
        "answers": {
          "a": "Parkinson-Symptomatik",
          "b": "Spastik",
          "c": "Ataxie",
          "d": "Tetraplegie"
        },
        "correct": "a",
        "explanation": "Die Bewegungsstörungen ähneln Morbus Parkinson."
      },
      {
        "question": "Welche Wahrnehmungsstörung ist typisch?",
        "answers": {
          "a": "Geschmacksverlust",
          "b": "Optische Halluzinationen",
          "c": "Hörverlust",
          "d": "Geruchsstörung"
        },
        "correct": "b",
        "explanation": "Besonders häufig treten visuelle Halluzinationen auf."
      },
      {
        "question": "Welcher Hirnbereich ist bei der frontotemporalen Demenz besonders betroffen?",
        "answers": {
          "a": "Frontotemporaler Bereich",
          "b": "Kleinhirn",
          "c": "Hirnstamm",
          "d": "Rückenmark"
        },
        "correct": "a",
        "explanation": "Die Erkrankung betrifft hauptsächlich Stirn- und Schläfenlappen."
      },
      {
        "question": "Wie hieß die frontotemporale Demenz früher?",
        "answers": {
          "a": "Alzheimer-Krankheit",
          "b": "Pick-Krankheit",
          "c": "Korsakow-Syndrom",
          "d": "Creutzfeldt-Jakob-Krankheit"
        },
        "correct": "b",
        "explanation": "Die ältere Bezeichnung lautet Pick-Krankheit."
      },
      {
        "question": "Was steht bei der frontotemporalen Demenz häufig im Vordergrund?",
        "answers": {
          "a": "Gedächtnisstörungen",
          "b": "Verhaltensauffälligkeiten",
          "c": "Blindheit",
          "d": "Tremor"
        },
        "correct": "b",
        "explanation": "Persönlichkeits- und Verhaltensänderungen sind typisch."
      },
      {
        "question": "Welche Veränderung fällt oft zuerst auf?",
        "answers": {
          "a": "Regel- und Normverletzungen",
          "b": "Lähmungen",
          "c": "Fieber",
          "d": "Schwerhörigkeit"
        },
        "correct": "a",
        "explanation": "Sozial unangepasstes Verhalten ist charakteristisch."
      },
      {
        "question": "Welche Aussage trifft auf das Delir zu?",
        "answers": {
          "a": "Es entwickelt sich langsam.",
          "b": "Es beginnt plötzlich.",
          "c": "Es ist immer dauerhaft.",
          "d": "Es betrifft nur Menschen mit Alzheimer."
        },
        "correct": "b",
        "explanation": "Das Delir beginnt akut."
      },
      {
        "question": "Welche Bewusstseinslage ist beim Delir typisch?",
        "answers": {
          "a": "Unverändert",
          "b": "Bewusstseinsstörung",
          "c": "Tiefschlaf",
          "d": "Wachkoma"
        },
        "correct": "b",
        "explanation": "Eine gestörte Aufmerksamkeit und Bewusstseinslage sind Leitsymptome."
      },
      {
        "question": "Wie lange kann ein Delir laut Vorlesung anhalten?",
        "answers": {
          "a": "24 Stunden",
          "b": "1 Woche",
          "c": "Bis zu 6 Monate",
          "d": "Lebenslang"
        },
        "correct": "c",
        "explanation": "Ein Delir kann sich über Wochen bis Monate hinziehen, wenn die Ursache nicht behandelt wird."
      },
      {
        "question": "Welches Symptom tritt bei einer leichten Demenz häufig zuerst auf?",
        "answers": {
          "a": "Vollständiger Sprachverlust",
          "b": "Störungen des Kurzzeitgedächtnisses",
          "c": "Bettlägerigkeit",
          "d": "Vollständige Orientierungslosigkeit"
        },
        "correct": "b",
        "explanation": "Das Kurzzeitgedächtnis ist meist als erstes betroffen."
      },
      {
        "question": "Ein Patient vergisst regelmäßig Termine und verlegt Gegenstände. Welchem Schweregrad entspricht dies am ehesten?",
        "answers": {
          "a": "Keine Demenz",
          "b": "Leichte Demenz",
          "c": "Mittelschwere Demenz",
          "d": "Schwere Demenz"
        },
        "correct": "b",
        "explanation": "Vergesslichkeit und das Verlegen von Gegenständen sind typische Frühsymptome."
      },
      {
        "question": "Welches Merkmal spricht für eine mittelschwere Demenz?",
        "answers": {
          "a": "Vollständige Selbstständigkeit",
          "b": "Deutliche Wortfindungsstörungen",
          "c": "Keine Gedächtnisstörungen",
          "d": "Keine Orientierungsprobleme"
        },
        "correct": "b",
        "explanation": "Sprach- und Gedächtnisstörungen nehmen deutlich zu."
      },
      {
        "question": "Welche Fähigkeit bleibt bei einer mittelschweren Demenz häufig noch erhalten?",
        "answers": {
          "a": "Autofahren",
          "b": "Medikamenteneinnahme selbst organisieren",
          "c": "Einfache Nahrungsaufnahme",
          "d": "Selbstständige Haushaltsführung"
        },
        "correct": "c",
        "explanation": "Essen gelingt häufig noch selbstständig."
      },
      {
        "question": "Welches Verhalten ist bei einer mittelschweren Demenz typisch?",
        "answers": {
          "a": "Umherlaufen",
          "b": "Vollständige Bettlägerigkeit",
          "c": "Leistungssport",
          "d": "Berufstätigkeit"
        },
        "correct": "a",
        "explanation": "Unruhe und Weglauftendenzen treten häufig auf."
      },
      {
        "question": "Welches Merkmal spricht für eine schwere Demenz?",
        "answers": {
          "a": "Gute Orientierung",
          "b": "Angehörige werden nicht mehr erkannt",
          "c": "Normale Sprache",
          "d": "Selbstständige Körperpflege"
        },
        "correct": "b",
        "explanation": "Das Erkennen naher Angehöriger geht häufig verloren."
      },
      {
        "question": "Welche Fähigkeit nimmt bei schwerer Demenz deutlich ab?",
        "answers": {
          "a": "Motorische Fähigkeiten",
          "b": "Sehvermögen",
          "c": "Hörvermögen",
          "d": "Geschmackssinn"
        },
        "correct": "a",
        "explanation": "Die zunehmenden motorischen Einschränkungen erhöhen die Pflegebedürftigkeit."
      },
      {
        "question": "Welche Folge tritt häufig im Endstadium auf?",
        "answers": {
          "a": "Verbesserte Merkfähigkeit",
          "b": "Harn- und Stuhlinkontinenz",
          "c": "Vollständige Heilung",
          "d": "Verbesserte Sprache"
        },
        "correct": "b",
        "explanation": "Der Verlust der Kontrolle über die Ausscheidung ist typisch."
      },
      {
        "question": "Warum versuchen viele Menschen mit leichter Demenz ihre Einschränkungen zu verbergen?",
        "answers": {
          "a": "Sie möchten ihre Fassade aufrechterhalten.",
          "b": "Sie haben keine Beschwerden.",
          "c": "Sie merken nichts von der Erkrankung.",
          "d": "Sie möchten Medikamente vermeiden."
        },
        "correct": "a",
        "explanation": "Viele Betroffene schämen sich für ihre Defizite."
      },
      {
        "question": "Welche Aussage über die Krankheitseinsicht trifft zu?",
        "answers": {
          "a": "Sie nimmt im Verlauf meist ab.",
          "b": "Sie verbessert sich ständig.",
          "c": "Sie bleibt immer gleich.",
          "d": "Sie fehlt bereits im Frühstadium vollständig."
        },
        "correct": "a",
        "explanation": "Mit Fortschreiten der Erkrankung geht die Krankheitseinsicht verloren."
      },
      {
        "question": "Ein Patient sieht Menschen im Zimmer, obwohl niemand dort ist. Welche Demenzform ist besonders typisch?",
        "answers": {
          "a": "Alzheimer-Demenz",
          "b": "Lewy-Body-Demenz",
          "c": "Vaskuläre Demenz",
          "d": "Frontotemporale Demenz"
        },
        "correct": "b",
        "explanation": "Optische Halluzinationen sind ein Leitsymptom der Lewy-Body-Demenz."
      },
      {
        "question": "Ein Patient zeigt plötzlich Halbseitenlähmungen und anschließend Gedächtnisprobleme. Welche Demenzform ist am wahrscheinlichsten?",
        "answers": {
          "a": "Alzheimer-Demenz",
          "b": "Frontotemporale Demenz",
          "c": "Vaskuläre Demenz",
          "d": "Lewy-Body-Demenz"
        },
        "correct": "c",
        "explanation": "Schlaganfälle und Gefäßschäden sprechen für eine vaskuläre Demenz."
      },
      {
        "question": "Welches Verhalten spricht besonders für eine frontotemporale Demenz?",
        "answers": {
          "a": "Starkes Zittern",
          "b": "Sozial unangemessenes Verhalten",
          "c": "Früher Sprachverlust",
          "d": "Akute Bewusstseinsstörung"
        },
        "correct": "b",
        "explanation": "Persönlichkeits- und Verhaltensänderungen stehen im Vordergrund."
      },
      {
        "question": "Welche Aussage unterscheidet Demenz und Delir?",
        "answers": {
          "a": "Beide beginnen plötzlich.",
          "b": "Demenz beginnt schleichend, Delir akut.",
          "c": "Beide sind heilbar.",
          "d": "Beide verlaufen gleich."
        },
        "correct": "b",
        "explanation": "Das Delir entwickelt sich akut, Demenz meist langsam."
      },
      {
        "question": "Welche Aussage über Demenz ist richtig?",
        "answers": {
          "a": "Demenz betrifft nur das Gedächtnis.",
          "b": "Demenz beeinflusst Denken, Orientierung und Alltagskompetenz.",
          "c": "Demenz ist immer heilbar.",
          "d": "Demenz tritt nur nach Schlaganfällen auf."
        },
        "correct": "b",
        "explanation": "Die Erkrankung betrifft zahlreiche kognitive Bereiche."
      },
      {
        "question": "Welche Aussage zur Epidemiologie stimmt?",
        "answers": {
          "a": "Das Risiko sinkt im Alter.",
          "b": "Frauen sind häufiger betroffen.",
          "c": "Nur Männer erkranken.",
          "d": "Unter 90-Jährige können keine Demenz entwickeln."
        },
        "correct": "b",
        "explanation": "Frauen sind aufgrund ihrer höheren Lebenserwartung häufiger betroffen."
      },
      {
        "question": "Welcher Begriff beschreibt das Fortschreiten der Erkrankung?",
        "answers": {
          "a": "Akut",
          "b": "Neurodegenerativ",
          "c": "Allergisch",
          "d": "Bakteriell"
        },
        "correct": "b",
        "explanation": "Nervenzellen gehen schrittweise zugrunde."
      },
      {
        "question": "Warum wird die Pflege von Menschen mit Demenz immer wichtiger?",
        "answers": {
          "a": "Weil die Bevölkerung altert.",
          "b": "Weil Demenz ansteckend ist.",
          "c": "Weil Kinder häufiger betroffen sind.",
          "d": "Weil die Krankheit ausgerottet wird."
        },
        "correct": "a",
        "explanation": "Mit steigender Lebenserwartung nimmt die Zahl der Betroffenen zu."
      },
      {
        "question": "Ein Patient erkennt seine Wohnung nicht mehr wieder. Welche Orientierungsstörung liegt vor?",
        "answers": {
          "a": "Zeitliche Orientierung",
          "b": "Räumliche Orientierung",
          "c": "Orientierung zur Person",
          "d": "Situative Orientierung"
        },
        "correct": "b",
        "explanation": "Das Nichterkennen bekannter Orte spricht für eine räumliche Desorientierung."
      },
      {
        "question": "Ein Patient weiß nicht mehr, welcher Wochentag heute ist. Welche Orientierung ist gestört?",
        "answers": {
          "a": "Räumliche Orientierung",
          "b": "Zeitliche Orientierung",
          "c": "Orientierung zur Person",
          "d": "Körperorientierung"
        },
        "correct": "b",
        "explanation": "Die zeitliche Orientierung betrifft Datum, Uhrzeit und Wochentag."
      },
      {
        "question": "Ein Patient erkennt seine Tochter nicht mehr. Welche Orientierung ist betroffen?",
        "answers": {
          "a": "Zeitliche Orientierung",
          "b": "Räumliche Orientierung",
          "c": "Orientierung zur Person",
          "d": "Situative Orientierung"
        },
        "correct": "c",
        "explanation": "Personen werden nicht mehr richtig erkannt."
      },
      {
        "question": "Welche Demenzform ist die häufigste?",
        "answers": {
          "a": "Lewy-Body-Demenz",
          "b": "Frontotemporale Demenz",
          "c": "Alzheimer-Demenz",
          "d": "Reversible Demenz"
        },
        "correct": "c",
        "explanation": "Etwa 55 % aller Demenzen sind Alzheimer-Demenzen."
      },
      {
        "question": "Welcher Neurotransmitter ist bei der Lewy-Body-Demenz vermindert?",
        "answers": {
          "a": "Dopamin",
          "b": "Acetylcholin",
          "c": "Adrenalin",
          "d": "Serotonin"
        },
        "correct": "a",
        "explanation": "Der Dopaminmangel führt zu den Parkinson-ähnlichen Symptomen."
      },
      {
        "question": "Welche Aussage trifft auf Alzheimer zu?",
        "answers": {
          "a": "Der Verlauf ist meist schubförmig.",
          "b": "Der Verlauf ist langsam fortschreitend.",
          "c": "Die Krankheit beginnt plötzlich.",
          "d": "Es treten zuerst Lähmungen auf."
        },
        "correct": "b",
        "explanation": "Alzheimer entwickelt sich schleichend über viele Jahre."
      },
      {
        "question": "Welche Aussage über vaskuläre Demenz ist richtig?",
        "answers": {
          "a": "Sie entsteht durch Beta-Amyloid.",
          "b": "Sie entsteht durch Durchblutungsstörungen.",
          "c": "Sie betrifft nur junge Menschen.",
          "d": "Sie beginnt immer mit Halluzinationen."
        },
        "correct": "b",
        "explanation": "Gefäßschäden sind die Ursache."
      },
      {
        "question": "Welche Aussage beschreibt eine reversible Demenz?",
        "answers": {
          "a": "Sie ist immer erblich.",
          "b": "Sie kann bei Beseitigung der Ursache rückgängig sein.",
          "c": "Sie ist immer Alzheimer.",
          "d": "Sie tritt nur im Pflegeheim auf."
        },
        "correct": "b",
        "explanation": "Manche Demenzen sind behandelbar, wenn die Ursache beseitigt wird."
      },
      {
        "question": "Welche Aussage zur Frontotemporalen Demenz stimmt?",
        "answers": {
          "a": "Gedächtnisstörungen stehen immer im Vordergrund.",
          "b": "Verhaltensänderungen treten häufig früh auf.",
          "c": "Sie beginnt immer mit Halluzinationen.",
          "d": "Sie ist eine Form des Delirs."
        },
        "correct": "b",
        "explanation": "Frühe Veränderungen der Persönlichkeit sind typisch."
      },
      {
        "question": "Warum ist die Unterscheidung zwischen Delir und Demenz wichtig?",
        "answers": {
          "a": "Weil beide gleich behandelt werden.",
          "b": "Weil ein Delir oft behandelbar ist.",
          "c": "Weil Demenz immer heilbar ist.",
          "d": "Weil beide identisch sind."
        },
        "correct": "b",
        "explanation": "Ein Delir ist häufig reversibel und muss rasch behandelt werden."
      },
      {
        "question": "Welche Aussage beschreibt den Verlauf der Demenz am besten?",
        "answers": {
          "a": "Immer gleich.",
          "b": "Individuell unterschiedlich.",
          "c": "Immer innerhalb eines Jahres abgeschlossen.",
          "d": "Immer heilbar."
        },
        "correct": "b",
        "explanation": "Verlauf und Geschwindigkeit unterscheiden sich zwischen den Betroffenen."
      },
      {
        "question": "Welches Ziel verfolgt die Pflege von Menschen mit Demenz?",
        "answers": {
          "a": "Ausschließlich Medikamente verabreichen.",
          "b": "Selbstständigkeit und Lebensqualität möglichst lange erhalten.",
          "c": "Nur Dokumentation durchführen.",
          "d": "Die Erkrankung vollständig heilen."
        },
        "correct": "b",
        "explanation": "Die professionelle Pflege unterstützt Ressourcen, Selbstständigkeit und Lebensqualität möglichst lange."
      }
    ]
  },
  "expertenstandards_in_der_pflege": {
    "label": "Expertenstandards in der Pflege",
    "questions": [
      {
        "question": "Was ist das Hauptziel von Expertenstandards?",
        "answers": {
          "a": "Kosten senken",
          "b": "Pflegequalität sichern und weiterentwickeln",
          "c": "Medikamente einsparen",
          "d": "Personal reduzieren"
        },
        "correct": "b",
        "explanation": "Expertenstandards dienen der Sicherung und Weiterentwicklung der Pflegequalität."
      },
      {
        "question": "Wer entwickelt die Expertenstandards?",
        "answers": {
          "a": "Krankenkassen",
          "b": "Bundesärztekammer",
          "c": "Deutsches Netzwerk für Qualitätsentwicklung in der Pflege (DNQP)",
          "d": "Robert Koch-Institut"
        },
        "correct": "c",
        "explanation": "Das DNQP entwickelt die Expertenstandards auf wissenschaftlicher Grundlage."
      },
      {
        "question": "Auf welcher Grundlage beruhen Expertenstandards?",
        "answers": {
          "a": "Erfahrungen einzelner Pflegekräfte",
          "b": "Wissenschaftliche Erkenntnisse und Praxiserfahrung",
          "c": "Patientenmeinungen",
          "d": "Krankenhausregeln"
        },
        "correct": "b",
        "explanation": "Sie basieren auf aktueller Pflegewissenschaft und praktischer Erprobung."
      },
      {
        "question": "Für welche Bereiche gelten Expertenstandards?",
        "answers": {
          "a": "Nur Krankenhäuser",
          "b": "Nur Pflegeheime",
          "c": "Stationäre und ambulante Pflege",
          "d": "Nur Intensivstationen"
        },
        "correct": "c",
        "explanation": "Sie gelten in allen pflegerischen Versorgungsbereichen."
      },
      {
        "question": "Welche Kriterien enthalten Expertenstandards?",
        "answers": {
          "a": "Preislisten",
          "b": "Struktur-, Prozess- und Ergebniskriterien",
          "c": "Dienstpläne",
          "d": "Medikamentenlisten"
        },
        "correct": "b",
        "explanation": "Diese drei Qualitätsbereiche bilden den Aufbau der Expertenstandards."
      },
      {
        "question": "Welches Gesetz stärkte die Bedeutung der Expertenstandards?",
        "answers": {
          "a": "Infektionsschutzgesetz",
          "b": "Pflege-Weiterentwicklungsgesetz",
          "c": "BGB",
          "d": "Arbeitsschutzgesetz"
        },
        "correct": "b",
        "explanation": "Das Pflege-Weiterentwicklungsgesetz stärkte ihre Rolle im Qualitätsmanagement."
      },
      {
        "question": "Wofür dienen Expertenstandards in Pflegeeinrichtungen?",
        "answers": {
          "a": "Freizeitgestaltung",
          "b": "Qualitätsmanagement",
          "c": "Dienstplanung",
          "d": "Medikamentenbestellung"
        },
        "correct": "b",
        "explanation": "Sie sind zentrale Instrumente der Qualitätssicherung."
      },
      {
        "question": "Wer entwickelt einrichtungsinterne Pflegestandards?",
        "answers": {
          "a": "DNQP",
          "b": "Jede Einrichtung selbst",
          "c": "Bundesministerium",
          "d": "MD"
        },
        "correct": "b",
        "explanation": "Pflegestandards werden individuell von jeder Einrichtung erstellt."
      },
      {
        "question": "Was ist der wichtigste Unterschied zwischen Experten- und Pflegestandards?",
        "answers": {
          "a": "Expertenstandards gelten bundesweit.",
          "b": "Pflegestandards gelten bundesweit.",
          "c": "Beide sind identisch.",
          "d": "Expertenstandards gelten nur im Krankenhaus."
        },
        "correct": "a",
        "explanation": "Expertenstandards sind übergreifend gültig, Pflegestandards sind einrichtungsintern."
      },
      {
        "question": "Expertenstandards dienen als Grundlage für ...",
        "answers": {
          "a": "Dienstpläne",
          "b": "Hausstandards",
          "c": "Medikamentenpläne",
          "d": "Urlaubsplanung"
        },
        "correct": "b",
        "explanation": "Haus- bzw. Pflegestandards werden auf Basis der Expertenstandards entwickelt."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit Druckgeschwüren?",
        "answers": {
          "a": "Mobilität",
          "b": "Dekubitusprophylaxe",
          "c": "Schmerzmanagement",
          "d": "Demenz"
        },
        "correct": "b",
        "explanation": "Ziel ist die Vermeidung von Dekubitus."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit Stürzen?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Sturzprophylaxe",
          "c": "Harnkontinenz",
          "d": "Mundgesundheit"
        },
        "correct": "b",
        "explanation": "Er dient der Vermeidung von Stürzen."
      },
      {
        "question": "Welcher Expertenstandard unterstützt Menschen mit Demenz?",
        "answers": {
          "a": "Mobilität",
          "b": "Beziehungsgestaltung bei Menschen mit Demenz",
          "c": "Harnkontinenz",
          "d": "Entlassungsmanagement"
        },
        "correct": "b",
        "explanation": "Ziel ist eine personenzentrierte Beziehungsgestaltung."
      },
      {
        "question": "Welcher Expertenstandard fördert die selbstständige Bewegung?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Mobilität",
          "c": "Dekubitus",
          "d": "Ernährung"
        },
        "correct": "b",
        "explanation": "Ziel ist die Erhaltung und Förderung der Mobilität."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit Mangelernährung?",
        "answers": {
          "a": "Ernährungsmanagement",
          "b": "Schmerzmanagement",
          "c": "Harnkontinenz",
          "d": "Entlassungsmanagement"
        },
        "correct": "a",
        "explanation": "Ziel ist die Sicherung der oralen Ernährung."
      },
      {
        "question": "Welcher Expertenstandard behandelt Harninkontinenz?",
        "answers": {
          "a": "Mobilität",
          "b": "Förderung der Harnkontinenz",
          "c": "Demenz",
          "d": "Dekubitus"
        },
        "correct": "b",
        "explanation": "Schwerpunkt ist die Förderung bzw. Erhaltung der Kontinenz."
      },
      {
        "question": "Welcher Expertenstandard behandelt akute Schmerzen?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Ernährung",
          "c": "Mobilität",
          "d": "Entlassungsmanagement"
        },
        "correct": "a",
        "explanation": "Er soll unnötiges Leiden vermeiden und Chronifizierung verhindern."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit chronischen Wunden?",
        "answers": {
          "a": "Wundversorgung",
          "b": "Versorgung von Menschen mit chronischen Wunden",
          "c": "Mobilität",
          "d": "Schmerzmanagement"
        },
        "correct": "b",
        "explanation": "Ziel ist Selbstmanagement und fachgerechte Wundversorgung."
      },
      {
        "question": "Welcher Expertenstandard richtet sich an Hebammen?",
        "answers": {
          "a": "Förderung der physiologischen Geburt",
          "b": "Dekubitusprophylaxe",
          "c": "Mobilität",
          "d": "Demenz"
        },
        "correct": "a",
        "explanation": "Er unterstützt die physiologische Geburt."
      },
      {
        "question": "Warum sind Expertenstandards wichtig?",
        "answers": {
          "a": "Sie erleichtern Prüfungen und sichern eine einheitliche Pflegequalität.",
          "b": "Sie ersetzen alle Gesetze.",
          "c": "Sie gelten nur für Auszubildende.",
          "d": "Sie ersetzen ärztliche Anordnungen."
        },
        "correct": "a",
        "explanation": "Sie schaffen bundesweit vergleichbare Qualitätsstandards und dienen als Grundlage für Qualitätsprüfungen."
      },
      {
        "question": "Welche Organisation ist für die wissenschaftliche Entwicklung der Expertenstandards verantwortlich?",
        "answers": {
          "a": "WHO",
          "b": "Deutsches Netzwerk für Qualitätsentwicklung in der Pflege (DNQP)",
          "c": "Bundesärztekammer",
          "d": "Deutscher Pflegerat allein"
        },
        "correct": "b",
        "explanation": "Das DNQP entwickelt die Expertenstandards unter Beteiligung von Experten und Praxisvertretern."
      },
      {
        "question": "Wer unterstützt die Entwicklung der Expertenstandards finanziell?",
        "answers": {
          "a": "Europäische Union",
          "b": "Bundesministerium für Gesundheit",
          "c": "Krankenkassen",
          "d": "Bundeswehr"
        },
        "correct": "b",
        "explanation": "Das Bundesministerium für Gesundheit fördert die Entwicklung finanziell."
      },
      {
        "question": "Welche Aussage über Expertenstandards ist richtig?",
        "answers": {
          "a": "Sie gelten nur für Pflegeheime.",
          "b": "Sie gelten bundesweit als fachlicher Referenzrahmen.",
          "c": "Sie gelten nur für Krankenhäuser.",
          "d": "Sie sind freiwillige Empfehlungen ohne Bedeutung."
        },
        "correct": "b",
        "explanation": "Expertenstandards dienen bundesweit als fachlicher Qualitätsmaßstab."
      },
      {
        "question": "Welche Qualitätsbereiche werden in Expertenstandards beschrieben?",
        "answers": {
          "a": "Struktur-, Prozess- und Ergebnisqualität",
          "b": "Personal-, Kosten- und Zeitqualität",
          "c": "Pflege-, Arzt- und Therapiekosten",
          "d": "Hygiene-, Bau- und Brandschutz"
        },
        "correct": "a",
        "explanation": "Expertenstandards orientieren sich an Struktur-, Prozess- und Ergebniskriterien."
      },
      {
        "question": "Warum werden Expertenstandards regelmäßig aktualisiert?",
        "answers": {
          "a": "Damit sie an neue wissenschaftliche Erkenntnisse angepasst werden.",
          "b": "Damit sie länger werden.",
          "c": "Damit sie jedes Jahr neue Namen erhalten.",
          "d": "Damit Pflegekräfte mehr Dokumentation schreiben."
        },
        "correct": "a",
        "explanation": "Pflegewissenschaft entwickelt sich ständig weiter."
      },
      {
        "question": "Wer profitiert von Expertenstandards?",
        "answers": {
          "a": "Nur Pflegekräfte",
          "b": "Nur Patienten",
          "c": "Pflegekräfte, Einrichtungen und Pflegebedürftige",
          "d": "Nur Krankenkassen"
        },
        "correct": "c",
        "explanation": "Sie verbessern die Pflegequalität für alle Beteiligten."
      },
      {
        "question": "Welche Aussage beschreibt einen Pflegestandard?",
        "answers": {
          "a": "Er wird bundesweit vom DNQP entwickelt.",
          "b": "Er wird von der jeweiligen Einrichtung erstellt.",
          "c": "Er ersetzt Expertenstandards.",
          "d": "Er gilt europaweit."
        },
        "correct": "b",
        "explanation": "Pflegestandards sind hausinterne Regelungen."
      },
      {
        "question": "Welche Aussage beschreibt einen Expertenstandard?",
        "answers": {
          "a": "Er gilt nur auf einer Station.",
          "b": "Er ist wissenschaftlich begründet und bundesweit anwendbar.",
          "c": "Er wird nur von Ärzten geschrieben.",
          "d": "Er gilt nur in NRW."
        },
        "correct": "b",
        "explanation": "Expertenstandards beruhen auf wissenschaftlicher Evidenz und gelten bundesweit."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit der Entlassung eines Patienten?",
        "answers": {
          "a": "Entlassungsmanagement",
          "b": "Mobilität",
          "c": "Schmerzmanagement",
          "d": "Harnkontinenz"
        },
        "correct": "a",
        "explanation": "Ziel ist eine sichere Versorgung nach der Entlassung."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Entlassungsmanagement?",
        "answers": {
          "a": "Krankenhausaufenthalte verlängern",
          "b": "Eine sichere Weiterbetreuung nach der Entlassung gewährleisten",
          "c": "Medikamente reduzieren",
          "d": "Pflegebedürftigkeit erhöhen"
        },
        "correct": "b",
        "explanation": "Die Versorgung soll nach der Entlassung lückenlos weitergeführt werden."
      },
      {
        "question": "Was ist das Hauptziel der Dekubitusprophylaxe?",
        "answers": {
          "a": "Schmerzen behandeln",
          "b": "Druckgeschwüre verhindern",
          "c": "Mobilität fördern",
          "d": "Ernährung verbessern"
        },
        "correct": "b",
        "explanation": "Durch geeignete Maßnahmen sollen Dekubitalulzera verhindert werden."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Sturzprophylaxe?",
        "answers": {
          "a": "Stürze möglichst vermeiden",
          "b": "Medikamente einsparen",
          "c": "Mobilität einschränken",
          "d": "Bettlägerigkeit fördern"
        },
        "correct": "a",
        "explanation": "Ziel ist die Vermeidung von Stürzen und deren Folgen."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Harnkontinenz?",
        "answers": {
          "a": "Mehr Katheter legen",
          "b": "Kontinenz erhalten oder fördern",
          "c": "Flüssigkeitszufuhr vermeiden",
          "d": "Bettruhe fördern"
        },
        "correct": "b",
        "explanation": "Kontinenz hat Vorrang vor der reinen Kompensation einer Inkontinenz."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Mobilität?",
        "answers": {
          "a": "Patienten im Bett halten",
          "b": "Mobilität erhalten und fördern",
          "c": "Rollstühle abschaffen",
          "d": "Gehtraining verbieten"
        },
        "correct": "b",
        "explanation": "Bewegung erhält Selbstständigkeit und Lebensqualität."
      },
      {
        "question": "Warum ist Mobilität wichtig?",
        "answers": {
          "a": "Sie reduziert das Risiko vieler Erkrankungen.",
          "b": "Sie verbessert nur die Muskulatur.",
          "c": "Sie ist nur für junge Menschen wichtig.",
          "d": "Sie verhindert jede Krankheit."
        },
        "correct": "a",
        "explanation": "Bewegung senkt u. a. das Risiko für Dekubitus, Stürze und Depressionen."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Ernährungsmanagement?",
        "answers": {
          "a": "Gewichtsabnahme fördern",
          "b": "Mangelernährung verhindern",
          "c": "Fasten unterstützen",
          "d": "Nur Getränke anbieten"
        },
        "correct": "b",
        "explanation": "Eine ausreichende orale Ernährung soll gesichert werden."
      },
      {
        "question": "Welche Berufsgruppen arbeiten beim Ernährungsmanagement zusammen?",
        "answers": {
          "a": "Nur Pflegekräfte",
          "b": "Pflege, Ärzte, Küche, Ernährungsberatung u. a.",
          "c": "Nur Ärzte",
          "d": "Nur Angehörige"
        },
        "correct": "b",
        "explanation": "Ernährungsmanagement ist eine interprofessionelle Aufgabe."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Schmerzmanagement?",
        "answers": {
          "a": "Schmerzen ignorieren",
          "b": "Schmerzen verhindern oder auf ein erträgliches Maß reduzieren",
          "c": "Nur Medikamente geben",
          "d": "Patienten ruhigstellen"
        },
        "correct": "b",
        "explanation": "Unnötiges Leiden und Schmerzchronifizierung sollen vermieden werden."
      },
      {
        "question": "Welche Schmerzskala wird häufig von 0 bis 10 angegeben?",
        "answers": {
          "a": "Glasgow Coma Scale",
          "b": "Numerische Ratingskala (NRS)",
          "c": "Barthel-Index",
          "d": "Braden-Skala"
        },
        "correct": "b",
        "explanation": "Die NRS dient der subjektiven Schmerzeinschätzung."
      },
      {
        "question": "Warum sind Expertenstandards in Prüfungen besonders wichtig?",
        "answers": {
          "a": "Weil sie die wissenschaftliche Grundlage professioneller Pflege darstellen.",
          "b": "Weil sie nur Theorie enthalten.",
          "c": "Weil sie nur für PDL gelten.",
          "d": "Weil sie freiwillig sind."
        },
        "correct": "a",
        "explanation": "Expertenstandards definieren den aktuellen Stand professioneller Pflege und sind Grundlage für Qualitätsprüfungen sowie Examina."
      },
      {
        "question": "Welcher Expertenstandard fördert die Beziehung zu Menschen mit Demenz?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Beziehungsgestaltung in der Pflege von Menschen mit Demenz",
          "c": "Dekubitusprophylaxe",
          "d": "Mobilität"
        },
        "correct": "b",
        "explanation": "Ziel ist, dass Menschen mit Demenz sich angenommen, verstanden und sicher fühlen."
      },
      {
        "question": "Welche Aussage trifft auf Expertenstandards zu?",
        "answers": {
          "a": "Sie sind ausschließlich theoretisch.",
          "b": "Sie werden wissenschaftlich entwickelt und praktisch erprobt.",
          "c": "Sie gelten nur für Pflegeheime.",
          "d": "Sie gelten nur für Auszubildende."
        },
        "correct": "b",
        "explanation": "Expertenstandards beruhen auf wissenschaftlicher Evidenz und werden modellhaft in der Praxis getestet."
      },
      {
        "question": "Wer arbeitet an der Entwicklung eines Expertenstandards mit?",
        "answers": {
          "a": "Nur Ärzte",
          "b": "Pflegewissenschaftler, Pflegefachkräfte und Patientenvertreter",
          "c": "Nur Politiker",
          "d": "Nur Krankenkassen"
        },
        "correct": "b",
        "explanation": "Die Expertenarbeitsgruppen bestehen aus Wissenschaft, Praxis und Patientenvertretung."
      },
      {
        "question": "Wie beginnt die Entwicklung eines neuen Expertenstandards?",
        "answers": {
          "a": "Mit einer MD-Prüfung",
          "b": "Mit der Themenfindung",
          "c": "Mit einer Fortbildung",
          "d": "Mit einer Gesetzesänderung"
        },
        "correct": "b",
        "explanation": "Der erste Schritt ist die Auswahl eines relevanten Pflegethemas."
      },
      {
        "question": "Was geschieht nach dem ersten Entwurf eines Expertenstandards?",
        "answers": {
          "a": "Er wird sofort verpflichtend.",
          "b": "Er wird in einer Konsensuskonferenz diskutiert.",
          "c": "Er wird gelöscht.",
          "d": "Er wird nur im Krankenhaus getestet."
        },
        "correct": "b",
        "explanation": "Fachleute diskutieren und bewerten den Entwurf öffentlich."
      },
      {
        "question": "Warum wird ein Expertenstandard modellhaft implementiert?",
        "answers": {
          "a": "Um Werbung zu machen.",
          "b": "Um seine Praxistauglichkeit zu überprüfen.",
          "c": "Um Kosten zu sparen.",
          "d": "Um Personal zu ersetzen."
        },
        "correct": "b",
        "explanation": "Vor der endgültigen Veröffentlichung wird die Umsetzbarkeit getestet."
      },
      {
        "question": "Welche Aussage beschreibt Strukturqualität?",
        "answers": {
          "a": "Durchführung der Pflege",
          "b": "Personelle und materielle Voraussetzungen",
          "c": "Pflegeergebnis",
          "d": "Dokumentation der Evaluation"
        },
        "correct": "b",
        "explanation": "Strukturqualität umfasst Personal, Kompetenzen und Ausstattung."
      },
      {
        "question": "Welche Aussage beschreibt Prozessqualität?",
        "answers": {
          "a": "Durchführung der pflegerischen Maßnahmen",
          "b": "Anzahl der Mitarbeiter",
          "c": "Größe der Einrichtung",
          "d": "Kosten der Pflege"
        },
        "correct": "a",
        "explanation": "Prozessqualität beschreibt, wie Pflege durchgeführt wird."
      },
      {
        "question": "Welche Aussage beschreibt Ergebnisqualität?",
        "answers": {
          "a": "Anzahl der Pflegekräfte",
          "b": "Erfolg der pflegerischen Maßnahmen",
          "c": "Dienstplan",
          "d": "Stationsgröße"
        },
        "correct": "b",
        "explanation": "Ergebnisqualität bewertet, ob die Pflegeziele erreicht wurden."
      },
      {
        "question": "Welche Aussage über Expertenstandards ist richtig?",
        "answers": {
          "a": "Sie ersetzen den Pflegeprozess.",
          "b": "Sie unterstützen den Pflegeprozess.",
          "c": "Sie ersetzen die Pflegeplanung.",
          "d": "Sie machen Dokumentation überflüssig."
        },
        "correct": "b",
        "explanation": "Expertenstandards werden innerhalb des Pflegeprozesses angewendet."
      },
      {
        "question": "Welcher Expertenstandard unterstützt die Vermeidung von Dekubitus?",
        "answers": {
          "a": "Mobilität",
          "b": "Dekubitusprophylaxe",
          "c": "Schmerzmanagement",
          "d": "Ernährungsmanagement"
        },
        "correct": "b",
        "explanation": "Er beschreibt Maßnahmen zur Vermeidung von Druckgeschwüren."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit chronischen Schmerzen?",
        "answers": {
          "a": "Schmerzmanagement bei chronischen Schmerzen",
          "b": "Schmerzmanagement bei akuten Schmerzen",
          "c": "Mobilität",
          "d": "Mundgesundheit"
        },
        "correct": "a",
        "explanation": "Akute und chronische Schmerzen besitzen jeweils eigene Expertenstandards."
      },
      {
        "question": "Welche Aussage trifft auf den Expertenstandard Mobilität zu?",
        "answers": {
          "a": "Mobilität soll möglichst eingeschränkt werden.",
          "b": "Bewegung wird in den Alltag integriert.",
          "c": "Bewegung ist nur Aufgabe der Physiotherapie.",
          "d": "Mobilität spielt in der Pflege keine Rolle."
        },
        "correct": "b",
        "explanation": "Mobilitätsförderung soll Bestandteil aller pflegerischen Handlungen sein."
      },
      {
        "question": "Welche Folge kann Bewegungsmangel haben?",
        "answers": {
          "a": "Mehr Selbstständigkeit",
          "b": "Dekubitus und Sturzrisiko",
          "c": "Verbesserte Mobilität",
          "d": "Schnellere Wundheilung"
        },
        "correct": "b",
        "explanation": "Bewegungsmangel erhöht das Risiko zahlreicher Folgeerkrankungen."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Ernährungsmanagement?",
        "answers": {
          "a": "Nur Gewichtskontrolle",
          "b": "Sicherung einer bedarfsgerechten oralen Ernährung",
          "c": "Ausschließlich künstliche Ernährung",
          "d": "Gewichtsreduktion"
        },
        "correct": "b",
        "explanation": "Ziel ist die Vermeidung von Mangelernährung durch ausreichende orale Ernährung."
      },
      {
        "question": "Welche Maßnahme gehört zum Ernährungsmanagement?",
        "answers": {
          "a": "Geschützte Essenszeiten",
          "b": "Bettruhe während der Mahlzeit",
          "c": "Verzicht auf Getränke",
          "d": "Mahlzeiten auslassen"
        },
        "correct": "a",
        "explanation": "Eine ruhige Essenssituation verbessert die Nahrungsaufnahme."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Harnkontinenz?",
        "answers": {
          "a": "Katheter möglichst dauerhaft legen",
          "b": "Kontinenz fördern und Selbstständigkeit erhalten",
          "c": "Flüssigkeitsaufnahme einschränken",
          "d": "Toilettengänge vermeiden"
        },
        "correct": "b",
        "explanation": "Kontinenzerhalt steht vor der Kompensation einer Inkontinenz."
      },
      {
        "question": "Welche Haltung ist bei Harninkontinenz besonders wichtig?",
        "answers": {
          "a": "Strenge",
          "b": "Respekt und Schutz der Intimsphäre",
          "c": "Schnelligkeit",
          "d": "Kontrolle"
        },
        "correct": "b",
        "explanation": "Harninkontinenz ist ein schambehaftetes Thema und erfordert Einfühlungsvermögen."
      },
      {
        "question": "Welche Aussage zum Schmerzmanagement ist richtig?",
        "answers": {
          "a": "Schmerz ist objektiv messbar.",
          "b": "Schmerz ist immer subjektiv.",
          "c": "Schmerz ist nur körperlich.",
          "d": "Schmerz kann nicht eingeschätzt werden."
        },
        "correct": "b",
        "explanation": "Nur der Patient kann die Stärke seines Schmerzes zuverlässig beurteilen."
      },
      {
        "question": "Welche Aufgabe hat die Pflegefachkraft im Schmerzmanagement?",
        "answers": {
          "a": "Schmerzen ignorieren",
          "b": "Schmerzen regelmäßig einschätzen, dokumentieren und Maßnahmen durchführen",
          "c": "Nur Medikamente verteilen",
          "d": "Ausschließlich den Arzt informieren"
        },
        "correct": "b",
        "explanation": "Schmerzassessment, Dokumentation und Evaluation gehören zu den Kernaufgaben der Pflege."
      },
      {
        "question": "Welcher Expertenstandard befindet sich seit 2018 in einer modellhaften Probephase?",
        "answers": {
          "a": "Dekubitusprophylaxe",
          "b": "Förderung der Mobilität",
          "c": "Schmerzmanagement",
          "d": "Harnkontinenz"
        },
        "correct": "b",
        "explanation": "Der Expertenstandard „Erhaltung und Förderung der Mobilität“ wurde zunächst modellhaft erprobt."
      },
      {
        "question": "Wie definiert der Expertenstandard Mobilität?",
        "answers": {
          "a": "Ausschließlich Gehen",
          "b": "Eigenbewegung zur Fortbewegung oder Lageveränderung",
          "c": "Sportliche Aktivität",
          "d": "Treppensteigen"
        },
        "correct": "b",
        "explanation": "Mobilität umfasst jede selbstständige Bewegung des Körpers."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Mobilität?",
        "answers": {
          "a": "Pflegeaufwand erhöhen",
          "b": "Selbstständigkeit und Mobilität erhalten oder fördern",
          "c": "Bettlägerigkeit akzeptieren",
          "d": "Rollstuhlnutzung fördern"
        },
        "correct": "b",
        "explanation": "Die Mobilität soll möglichst lange erhalten bleiben."
      },
      {
        "question": "Was erfolgt im Prozesskriterium P1 des Expertenstandards Mobilität?",
        "answers": {
          "a": "Medikamentengabe",
          "b": "Einschätzung der Mobilität",
          "c": "Entlassung",
          "d": "Wundversorgung"
        },
        "correct": "b",
        "explanation": "Zu Beginn erfolgt ein Assessment der Mobilität, Probleme und Ressourcen."
      },
      {
        "question": "Was wird in P2 geplant?",
        "answers": {
          "a": "Dienstplan",
          "b": "Individueller Maßnahmenplan zur Mobilitätsförderung",
          "c": "Medikamentenliste",
          "d": "Pflegegrad"
        },
        "correct": "b",
        "explanation": "Maßnahmen werden individuell geplant und koordiniert."
      },
      {
        "question": "Was ist Inhalt von P3?",
        "answers": {
          "a": "Beratung von Patient und Angehörigen",
          "b": "Medikamentengabe",
          "c": "Blutabnahme",
          "d": "Entlassung"
        },
        "correct": "a",
        "explanation": "Pflegefachkräfte beraten über Mobilität und deren Förderung."
      },
      {
        "question": "Was geschieht in P4?",
        "answers": {
          "a": "Evaluation",
          "b": "Umsetzung der geplanten Maßnahmen",
          "c": "Diagnose",
          "d": "Aufnahmegespräch"
        },
        "correct": "b",
        "explanation": "Die vereinbarten Maßnahmen werden durchgeführt und dokumentiert."
      },
      {
        "question": "Was geschieht in P5?",
        "answers": {
          "a": "Neue Diagnose",
          "b": "Erfolgskontrolle und Anpassung des Maßnahmenplans",
          "c": "Entlassung",
          "d": "Medikamentenbestellung"
        },
        "correct": "b",
        "explanation": "Die Maßnahmen werden evaluiert und ggf. angepasst."
      },
      {
        "question": "Welches Assessment erfolgt zu Beginn des Ernährungsmanagements?",
        "answers": {
          "a": "Braden-Skala",
          "b": "Screening auf Mangelernährung",
          "c": "MMST",
          "d": "Barthel-Index"
        },
        "correct": "b",
        "explanation": "Zunächst wird auf Anzeichen einer Mangelernährung gescreent."
      },
      {
        "question": "Was erfolgt nach einem auffälligen Screening?",
        "answers": {
          "a": "Keine Maßnahmen",
          "b": "Vertieftes Assessment",
          "c": "Entlassung",
          "d": "Schmerzskala"
        },
        "correct": "b",
        "explanation": "Ein positives Screening erfordert eine genauere Einschätzung."
      },
      {
        "question": "Welches Ziel hat das Ernährungsmanagement?",
        "answers": {
          "a": "Gewichtsabnahme",
          "b": "Vermeidung von Mangelernährung",
          "c": "Fasten",
          "d": "Flüssigkeitsreduktion"
        },
        "correct": "b",
        "explanation": "Ziel ist eine bedarfsgerechte orale Ernährung."
      },
      {
        "question": "Warum sind geschützte Essenszeiten wichtig?",
        "answers": {
          "a": "Weniger Arbeit",
          "b": "Ruhige Umgebung verbessert die Nahrungsaufnahme",
          "c": "Weniger Personal",
          "d": "Schnellere Essensausgabe"
        },
        "correct": "b",
        "explanation": "Ruhe und Zeit fördern die selbstständige Nahrungsaufnahme."
      },
      {
        "question": "Welche Berufsgruppe gehört NICHT zwingend zum Ernährungsmanagement?",
        "answers": {
          "a": "Pflege",
          "b": "Küche",
          "c": "Ernährungsberatung",
          "d": "Feuerwehr"
        },
        "correct": "d",
        "explanation": "Ernährungsmanagement ist interprofessionell, die Feuerwehr gehört nicht dazu."
      },
      {
        "question": "Welche Aussage zur Harnkontinenz stimmt?",
        "answers": {
          "a": "Alter allein ist eine Ursache.",
          "b": "Alter gilt seit 2014 nicht mehr als Risikofaktor.",
          "c": "Nur Männer sind betroffen.",
          "d": "Harninkontinenz ist immer heilbar."
        },
        "correct": "b",
        "explanation": "Das Alter allein gilt nicht mehr als eigenständiger Risikofaktor."
      },
      {
        "question": "Wie definiert der Expertenstandard Harnkontinenz?",
        "answers": {
          "a": "Freiwilliger Urinverlust",
          "b": "Unwillkürlicher Harnverlust",
          "c": "Schmerz beim Wasserlassen",
          "d": "Häufiges Wasserlassen"
        },
        "correct": "b",
        "explanation": "Harninkontinenz ist jeder unwillkürliche Harnverlust."
      },
      {
        "question": "Welche Maßnahme gehört zur Kontinenzförderung?",
        "answers": {
          "a": "Blasentraining",
          "b": "Bettruhe",
          "c": "Flüssigkeitsverbot",
          "d": "Dauerkatheter für alle"
        },
        "correct": "a",
        "explanation": "Blasentraining ist eine wissenschaftlich empfohlene Maßnahme."
      },
      {
        "question": "Welche weitere Maßnahme fördert die Kontinenz?",
        "answers": {
          "a": "Beckenbodentraining",
          "b": "Schlafmittel",
          "c": "Nahrungskarenz",
          "d": "Bewegungsverbot"
        },
        "correct": "a",
        "explanation": "Das Training stärkt die Beckenbodenmuskulatur."
      },
      {
        "question": "Welche Aussage über Schmerz trifft zu?",
        "answers": {
          "a": "Schmerz ist objektiv messbar.",
          "b": "Schmerz ist subjektiv.",
          "c": "Schmerz ist immer gleich stark.",
          "d": "Schmerz hat keine Warnfunktion."
        },
        "correct": "b",
        "explanation": "Schmerz wird individuell erlebt."
      },
      {
        "question": "Welche Schmerzskala verwendet Zahlen von 0 bis 10?",
        "answers": {
          "a": "VAS",
          "b": "NRS",
          "c": "Braden",
          "d": "MMST"
        },
        "correct": "b",
        "explanation": "Die Numerische Ratingskala (NRS) nutzt Werte von 0–10."
      },
      {
        "question": "Welches Ziel verfolgt der Expertenstandard Schmerzmanagement?",
        "answers": {
          "a": "Schmerzen ignorieren",
          "b": "Schmerzen verhindern, lindern und einer Chronifizierung vorbeugen",
          "c": "Nur Medikamente geben",
          "d": "Nur dokumentieren"
        },
        "correct": "b",
        "explanation": "Ziel ist ein wirksames, systematisches Schmerzmanagement und die Vermeidung unnötigen Leidens."
      },
      {
        "question": "Welcher Expertenstandard dient der Vermeidung von Druckgeschwüren?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Dekubitusprophylaxe",
          "c": "Harnkontinenz",
          "d": "Mobilität"
        },
        "correct": "b",
        "explanation": "Ziel ist die Vermeidung eines Dekubitus durch geeignete prophylaktische Maßnahmen."
      },
      {
        "question": "Welche Aussage beschreibt den Expertenstandard Dekubitusprophylaxe?",
        "answers": {
          "a": "Er behandelt chronische Schmerzen.",
          "b": "Er verhindert möglichst die Entstehung von Dekubitus.",
          "c": "Er behandelt ausschließlich Wunden.",
          "d": "Er dient nur der Dokumentation."
        },
        "correct": "b",
        "explanation": "Der Schwerpunkt liegt auf der Vorbeugung von Druckgeschwüren."
      },
      {
        "question": "Welche Aussage zum Expertenstandard Schmerzmanagement ist richtig?",
        "answers": {
          "a": "Er gilt nur für chronische Schmerzen.",
          "b": "Er gilt für Patienten mit akuten oder zu erwartenden Schmerzen.",
          "c": "Er gilt nur auf Intensivstationen.",
          "d": "Er richtet sich ausschließlich an Ärzte."
        },
        "correct": "b",
        "explanation": "Der Standard bezieht sich auf akute bzw. zu erwartende Schmerzen."
      },
      {
        "question": "Wann beginnt laut Expertenstandard das Schmerzassessment?",
        "answers": {
          "a": "Erst bei der Entlassung.",
          "b": "Zu Beginn des pflegerischen Auftrags.",
          "c": "Nach einer Woche.",
          "d": "Nur auf ärztliche Anordnung."
        },
        "correct": "b",
        "explanation": "Schmerzen müssen bereits zu Beginn systematisch erfasst werden."
      },
      {
        "question": "Welche Aufgabe gehört NICHT zum Schmerzmanagement?",
        "answers": {
          "a": "Schmerzeinschätzung",
          "b": "Dokumentation",
          "c": "Verlaufskontrolle",
          "d": "Medikamentenverordnung durch die Pflegefachkraft"
        },
        "correct": "d",
        "explanation": "Medikamente werden ärztlich verordnet, die Pflege setzt sie um und überwacht ihre Wirkung."
      },
      {
        "question": "Welche nicht-medikamentöse Maßnahme gehört zum Schmerzmanagement?",
        "answers": {
          "a": "Lagerung",
          "b": "Wärme- oder Kälteanwendungen",
          "c": "Entspannungsverfahren",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Nicht-medikamentöse Maßnahmen ergänzen die medikamentöse Schmerztherapie."
      },
      {
        "question": "Warum wird Schmerz regelmäßig neu eingeschätzt?",
        "answers": {
          "a": "Um Dokumente zu füllen.",
          "b": "Um Wirkung und Nebenwirkungen der Therapie zu beurteilen.",
          "c": "Wegen gesetzlicher Vorgaben.",
          "d": "Damit Patienten beschäftigt sind."
        },
        "correct": "b",
        "explanation": "Nur regelmäßige Assessments zeigen, ob die Behandlung erfolgreich ist."
      },
      {
        "question": "Welche Aussage über Schmerzen ist richtig?",
        "answers": {
          "a": "Jeder Mensch empfindet Schmerzen gleich.",
          "b": "Schmerz ist eine subjektive Wahrnehmung.",
          "c": "Schmerzen können technisch exakt gemessen werden.",
          "d": "Schmerzen haben keine Schutzfunktion."
        },
        "correct": "b",
        "explanation": "Schmerz wird individuell erlebt und kann nicht objektiv gemessen werden."
      },
      {
        "question": "Welche Folge können unzureichend behandelte Schmerzen haben?",
        "answers": {
          "a": "Schnellere Heilung",
          "b": "Chronifizierung",
          "c": "Verbesserte Mobilität",
          "d": "Höhere Belastbarkeit"
        },
        "correct": "b",
        "explanation": "Unzureichende Schmerztherapie erhöht das Risiko chronischer Schmerzen."
      },
      {
        "question": "Welche Aussage zur Numerischen Ratingskala (NRS) ist richtig?",
        "answers": {
          "a": "Sie misst den Blutdruck.",
          "b": "Sie bewertet Schmerzen von 0 bis 10.",
          "c": "Sie misst die Mobilität.",
          "d": "Sie bewertet das Sturzrisiko."
        },
        "correct": "b",
        "explanation": "Die NRS ist die am häufigsten verwendete Schmerzskala."
      },
      {
        "question": "Welche Aussage über den Expertenstandard Ernährungsmanagement ist richtig?",
        "answers": {
          "a": "Er betrifft nur Menschen mit Diabetes.",
          "b": "Er gilt für alle Menschen mit pflegerischem Unterstützungsbedarf.",
          "c": "Er gilt nur im Krankenhaus.",
          "d": "Er beschäftigt sich nur mit Trinkmengen."
        },
        "correct": "b",
        "explanation": "Jeder pflegebedürftige Mensch soll hinsichtlich einer drohenden Mangelernährung eingeschätzt werden."
      },
      {
        "question": "Welches Ziel verfolgt das Screening im Ernährungsmanagement?",
        "answers": {
          "a": "Schmerzen erkennen.",
          "b": "Mangelernährung frühzeitig erkennen.",
          "c": "Dekubitus erkennen.",
          "d": "Demenz diagnostizieren."
        },
        "correct": "b",
        "explanation": "Das Screening dient der frühzeitigen Erkennung eines Ernährungsrisikos."
      },
      {
        "question": "Welche Maßnahme unterstützt eine gute Nahrungsaufnahme?",
        "answers": {
          "a": "Ruhige Essensatmosphäre",
          "b": "Hektik während der Mahlzeiten",
          "c": "Mahlzeiten im Stehen",
          "d": "Keine Unterstützung anbieten"
        },
        "correct": "a",
        "explanation": "Eine angenehme Umgebung verbessert die Nahrungsaufnahme."
      },
      {
        "question": "Welche Aussage über Mobilität trifft zu?",
        "answers": {
          "a": "Sie beeinflusst die Lebensqualität.",
          "b": "Sie ist nur für junge Menschen wichtig.",
          "c": "Sie verhindert jede Erkrankung.",
          "d": "Sie spielt in der Pflege kaum eine Rolle."
        },
        "correct": "a",
        "explanation": "Mobilität trägt wesentlich zu Selbstständigkeit und Wohlbefinden bei."
      },
      {
        "question": "Welche Folge hat eingeschränkte Mobilität häufig?",
        "answers": {
          "a": "Mehr Selbstständigkeit",
          "b": "Höheres Dekubitus- und Sturzrisiko",
          "c": "Schnellere Heilung",
          "d": "Verbesserte Ausdauer"
        },
        "correct": "b",
        "explanation": "Bewegungsmangel begünstigt zahlreiche Folgeerkrankungen."
      },
      {
        "question": "Welche Aussage zur Harnkontinenz ist richtig?",
        "answers": {
          "a": "Harninkontinenz ist ein normales Zeichen des Alterns.",
          "b": "Harninkontinenz sollte professionell behandelt werden.",
          "c": "Es gibt keine Behandlungsmöglichkeiten.",
          "d": "Pflegekräfte dürfen das Thema nicht ansprechen."
        },
        "correct": "b",
        "explanation": "Kontinenzförderung ist ein wichtiger Bestandteil professioneller Pflege."
      },
      {
        "question": "Welche Maßnahme unterstützt die Kontinenzförderung?",
        "answers": {
          "a": "Toilettentraining",
          "b": "Flüssigkeitsverbot",
          "c": "Dauerhafte Bettruhe",
          "d": "Bewegungsverbot"
        },
        "correct": "a",
        "explanation": "Toilettentraining gehört zu den empfohlenen Maßnahmen."
      },
      {
        "question": "Warum sollten Pflegekräfte regelmäßig Fortbildungen zu Expertenstandards besuchen?",
        "answers": {
          "a": "Nur wegen der Prüfungen.",
          "b": "Damit aktuelles wissenschaftliches Wissen umgesetzt werden kann.",
          "c": "Nur für mehr Dokumentation.",
          "d": "Es besteht kein Nutzen."
        },
        "correct": "b",
        "explanation": "Expertenstandards werden regelmäßig aktualisiert und beruhen auf neuer Evidenz."
      },
      {
        "question": "Welche Aussage beschreibt professionelle Pflege nach Expertenstandards am besten?",
        "answers": {
          "a": "Jede Pflegekraft arbeitet nach eigenen Vorstellungen.",
          "b": "Pflege orientiert sich an wissenschaftlich fundierten Standards.",
          "c": "Dokumentation ist wichtiger als der Patient.",
          "d": "Expertenstandards ersetzen Fachwissen."
        },
        "correct": "b",
        "explanation": "Expertenstandards verbinden wissenschaftliche Erkenntnisse mit professioneller Pflegepraxis."
      },
      {
        "question": "Warum solltest du für das Examen die Expertenstandards kennen?",
        "answers": {
          "a": "Weil sie nur im Unterricht vorkommen.",
          "b": "Weil sie die Grundlage für qualitätsgesicherte professionelle Pflege bilden und häufig Prüfungsstoff sind.",
          "c": "Weil sie nur für Pflegedienstleitungen gelten.",
          "d": "Weil sie freiwillig sind."
        },
        "correct": "b",
        "explanation": "Expertenstandards gehören zu den wichtigsten Grundlagen der Pflegefachausbildung und werden regelmäßig in schriftlichen, mündlichen und praktischen Prüfungen abgefragt."
      },
      {
        "question": "Wer überprüft regelmäßig, ob Expertenstandards in der Praxis umgesetzt werden?",
        "answers": {
          "a": "Die Feuerwehr",
          "b": "MD (Medizinischer Dienst) und interne Qualitätssicherung",
          "c": "Die Polizei",
          "d": "Das Finanzamt"
        },
        "correct": "b",
        "explanation": "Expertenstandards sind Grundlage für interne Audits und Qualitätsprüfungen durch den MD."
      },
      {
        "question": "Warum sind Expertenstandards haftungsrechtlich bedeutsam?",
        "answers": {
          "a": "Sie ersetzen Gesetze.",
          "b": "Sie gelten als Maßstab fachgerechten Handelns.",
          "c": "Sie gelten nur für Auszubildende.",
          "d": "Sie schützen nur den Arbeitgeber."
        },
        "correct": "b",
        "explanation": "Bei Haftungsfragen wird geprüft, ob nach anerkannten pflegewissenschaftlichen Standards gehandelt wurde."
      },
      {
        "question": "Welche Aussage trifft auf Hausstandards zu?",
        "answers": {
          "a": "Sie gelten bundesweit.",
          "b": "Sie werden aus Expertenstandards entwickelt.",
          "c": "Sie ersetzen Expertenstandards.",
          "d": "Sie werden vom DNQP veröffentlicht."
        },
        "correct": "b",
        "explanation": "Hausstandards setzen die Expertenstandards einrichtungsspezifisch um."
      },
      {
        "question": "Was bedeutet DNQP?",
        "answers": {
          "a": "Deutsches Netzwerk für Qualitätsentwicklung in der Pflege",
          "b": "Deutsches Netzwerk für Qualität und Patienten",
          "c": "Deutsche Normen für Qualitätsprüfung",
          "d": "Deutscher Nachweis qualifizierter Pflege"
        },
        "correct": "a",
        "explanation": "Das DNQP entwickelt die nationalen Expertenstandards."
      },
      {
        "question": "Wie viele Experten arbeiten typischerweise in einer Expertenarbeitsgruppe?",
        "answers": {
          "a": "2–4",
          "b": "8–12",
          "c": "20–30",
          "d": "Über 100"
        },
        "correct": "b",
        "explanation": "Eine Expertenarbeitsgruppe besteht in der Regel aus 8–12 Mitgliedern sowie einer Patientenvertretung."
      },
      {
        "question": "Welches Kriterium muss ein Expertenstandard erfüllen?",
        "answers": {
          "a": "Er muss möglichst kurz sein.",
          "b": "Er muss messbar und wissenschaftlich begründet sein.",
          "c": "Er muss nur wirtschaftlich sein.",
          "d": "Er muss nur von Ärzten akzeptiert werden."
        },
        "correct": "b",
        "explanation": "Expertenstandards orientieren sich an wissenschaftlicher Evidenz und messbaren Qualitätskriterien."
      },
      {
        "question": "Welche Aussage trifft auf den Pflegeprozess zu?",
        "answers": {
          "a": "Expertenstandards ersetzen den Pflegeprozess.",
          "b": "Expertenstandards unterstützen den Pflegeprozess.",
          "c": "Der Pflegeprozess ist nicht mehr notwendig.",
          "d": "Nur Expertenstandards werden dokumentiert."
        },
        "correct": "b",
        "explanation": "Der Pflegeprozess bleibt Grundlage professioneller Pflege; Expertenstandards geben fachliche Orientierung."
      },
      {
        "question": "Welche Reihenfolge ist richtig?",
        "answers": {
          "a": "Hausstandard → Expertenstandard",
          "b": "Expertenstandard → Hausstandard",
          "c": "Pflegeplanung → Expertenstandard",
          "d": "Evaluation → Expertenstandard"
        },
        "correct": "b",
        "explanation": "Hausstandards werden auf Basis der Expertenstandards entwickelt."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit der Mundgesundheit?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Mundgesundheit",
          "c": "Mobilität",
          "d": "Harnkontinenz"
        },
        "correct": "b",
        "explanation": "Der Expertenstandard fördert die Erhaltung der Mundgesundheit und Lebensqualität."
      },
      {
        "question": "Warum ist Mundgesundheit in der Pflege wichtig?",
        "answers": {
          "a": "Sie hat keinen Einfluss.",
          "b": "Sie beeinflusst Ernährung, Wohlbefinden und Lebensqualität.",
          "c": "Sie betrifft nur Zahnärzte.",
          "d": "Sie ist nur kosmetisch wichtig."
        },
        "correct": "b",
        "explanation": "Eine gute Mundgesundheit erleichtert Essen, Sprechen und trägt zur Lebensqualität bei."
      },
      {
        "question": "Welche Aussage über Expertenstandards ist FALSCH?",
        "answers": {
          "a": "Sie beruhen auf Wissenschaft.",
          "b": "Sie gelten bundesweit.",
          "c": "Sie werden regelmäßig aktualisiert.",
          "d": "Jede Pflegeeinrichtung entwickelt eigene Expertenstandards."
        },
        "correct": "d",
        "explanation": "Einrichtungen entwickeln Hausstandards, nicht Expertenstandards."
      },
      {
        "question": "Welche Aussage ist richtig?",
        "answers": {
          "a": "Pflegestandards und Expertenstandards sind dasselbe.",
          "b": "Expertenstandards bilden die Grundlage für Pflegestandards.",
          "c": "Pflegestandards ersetzen Expertenstandards.",
          "d": "Expertenstandards gelten nur für Krankenhäuser."
        },
        "correct": "b",
        "explanation": "Expertenstandards dienen als fachliche Grundlage für einrichtungsspezifische Standards."
      },
      {
        "question": "Welche Qualitätsdimension beantwortet die Frage „Mit welchen Voraussetzungen wird gepflegt?“",
        "answers": {
          "a": "Ergebnisqualität",
          "b": "Strukturqualität",
          "c": "Prozessqualität",
          "d": "Pflegequalität"
        },
        "correct": "b",
        "explanation": "Strukturqualität beschreibt Personal, Ausstattung und Organisation."
      },
      {
        "question": "Welche Qualitätsdimension beantwortet die Frage „Wie wird gepflegt?“",
        "answers": {
          "a": "Prozessqualität",
          "b": "Strukturqualität",
          "c": "Ergebnisqualität",
          "d": "Dokumentationsqualität"
        },
        "correct": "a",
        "explanation": "Prozessqualität beschreibt die Durchführung der Pflege."
      },
      {
        "question": "Welche Qualitätsdimension beantwortet die Frage „Was wurde erreicht?“",
        "answers": {
          "a": "Strukturqualität",
          "b": "Ergebnisqualität",
          "c": "Prozessqualität",
          "d": "Organisationsqualität"
        },
        "correct": "b",
        "explanation": "Ergebnisqualität bewertet den Erfolg der Pflege."
      },
      {
        "question": "Welcher Expertenstandard wird besonders häufig mit Sturzprophylaxe kombiniert?",
        "answers": {
          "a": "Mobilität",
          "b": "Schmerzmanagement",
          "c": "Harnkontinenz",
          "d": "Entlassungsmanagement"
        },
        "correct": "a",
        "explanation": "Mobilität und Sturzprophylaxe ergänzen sich gegenseitig."
      },
      {
        "question": "Welcher Expertenstandard unterstützt die Selbstständigkeit beim Essen?",
        "answers": {
          "a": "Ernährungsmanagement",
          "b": "Schmerzmanagement",
          "c": "Demenz",
          "d": "Mobilität"
        },
        "correct": "a",
        "explanation": "Ziel ist die möglichst selbstständige und ausreichende orale Ernährung."
      },
      {
        "question": "Welcher Satz beschreibt den Sinn aller Expertenstandards am besten?",
        "answers": {
          "a": "Mehr Bürokratie.",
          "b": "Wissenschaftlich fundierte Verbesserung der Pflegequalität.",
          "c": "Einsparung von Personal.",
          "d": "Vereinfachung der Medikamentengabe."
        },
        "correct": "b",
        "explanation": "Expertenstandards verbinden wissenschaftliche Erkenntnisse mit professioneller Pflegepraxis."
      },
      {
        "question": "Warum werden Expertenstandards in der Ausbildung intensiv behandelt?",
        "answers": {
          "a": "Weil sie Prüfungsstoff und Grundlage professioneller Pflege sind.",
          "b": "Weil sie freiwillig sind.",
          "c": "Weil sie nur Theorie enthalten.",
          "d": "Weil sie nur im Pflegeheim gelten."
        },
        "correct": "a",
        "explanation": "Expertenstandards gehören zu den wichtigsten Inhalten des Pflegeexamens."
      },
      {
        "question": "Welche Aussage fasst Expertenstandards am besten zusammen?",
        "answers": {
          "a": "Expertenstandards sind wissenschaftlich entwickelte Leitlinien zur Sicherung und Weiterentwicklung der Pflegequalität und bilden die Grundlage für professionelle Pflege.",
          "b": "Expertenstandards sind freiwillige Empfehlungen ohne Bedeutung.",
          "c": "Expertenstandards ersetzen den Pflegeprozess.",
          "d": "Expertenstandards gelten nur in Krankenhäusern."
        },
        "correct": "a",
        "explanation": "Diese Aussage fasst Definition, Ziel und Bedeutung der Expertenstandards vollständig zusammen."
      }
    ]
  },
  "hygiene": {
    "label": "Hygiene in der Pflege",
    "questions": [
      {
        "question": "Was ist das wichtigste Ziel der Hygiene in der Pflege?",
        "answers": {
          "a": "Kosten senken",
          "b": "Infektionen verhindern und Gesundheit erhalten",
          "c": "Dokumentation vereinfachen",
          "d": "Arbeitszeit verkürzen"
        },
        "correct": "b",
        "explanation": "Hygiene dient der Vorbeugung von Infektionen und dem Schutz von Patienten und Personal."
      },
      {
        "question": "Wer profitiert von guter Hygiene?",
        "answers": {
          "a": "Nur Patienten",
          "b": "Nur Pflegekräfte",
          "c": "Patienten, Besucher und Pflegekräfte",
          "d": "Nur Ärzte"
        },
        "correct": "c",
        "explanation": "Hygiene schützt alle Beteiligten."
      },
      {
        "question": "Welche Einrichtung gibt Empfehlungen zur Krankenhaushygiene heraus?",
        "answers": {
          "a": "WHO",
          "b": "KRINKO am Robert Koch-Institut",
          "c": "Bundeswehr",
          "d": "Feuerwehr"
        },
        "correct": "b",
        "explanation": "Die KRINKO veröffentlicht Empfehlungen zur Infektionsprävention."
      },
      {
        "question": "Wofür steht KRINKO?",
        "answers": {
          "a": "Krankenhaus-Richtlinien-Kommission",
          "b": "Kommission für Krankenhaushygiene und Infektionsprävention",
          "c": "Kommission für Krankentransporte",
          "d": "Krankenhauskontrolle"
        },
        "correct": "b",
        "explanation": "KRINKO ist die Kommission für Krankenhaushygiene und Infektionsprävention."
      },
      {
        "question": "Welche Hygienemaßnahme ist laut WHO die wichtigste?",
        "answers": {
          "a": "Flächendesinfektion",
          "b": "Händedesinfektion",
          "c": "Mundschutz",
          "d": "Handschuhe"
        },
        "correct": "b",
        "explanation": "Händedesinfektion gilt als wirksamste Einzelmaßnahme gegen Infektionen."
      },
      {
        "question": "Wie viele „Momente der Händehygiene“ beschreibt die WHO?",
        "answers": {
          "a": "3",
          "b": "4",
          "c": "5",
          "d": "6"
        },
        "correct": "c",
        "explanation": "Die WHO definiert die „5 Momente der Händehygiene“."
      },
      {
        "question": "Wann erfolgt Händedesinfektion?",
        "answers": {
          "a": "Vor Patientenkontakt",
          "b": "Nach Patientenkontakt",
          "c": "Vor aseptischen Tätigkeiten",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle gehören zu den 5 Momenten der WHO."
      },
      {
        "question": "Wie lange sollten Hände mindestens gewaschen werden?",
        "answers": {
          "a": "10 Sekunden",
          "b": "15 Sekunden",
          "c": "30 Sekunden",
          "d": "60 Sekunden"
        },
        "correct": "c",
        "explanation": "Mindestens 30 Sekunden werden empfohlen."
      },
      {
        "question": "Was gehört NICHT zur Händehygiene?",
        "answers": {
          "a": "Schmuck ablegen",
          "b": "Fingernägel sauber halten",
          "c": "Lange künstliche Fingernägel tragen",
          "d": "Händedesinfektion"
        },
        "correct": "c",
        "explanation": "Lange oder künstliche Nägel erhöhen das Infektionsrisiko."
      },
      {
        "question": "Was ist der wichtigste Selbstschutz einer Pflegekraft?",
        "answers": {
          "a": "Schutzbrille",
          "b": "Händedesinfektion",
          "c": "Schutzschuhe",
          "d": "Arbeitskleidung"
        },
        "correct": "b",
        "explanation": "Die Händedesinfektion schützt am effektivsten vor Erregern."
      },
      {
        "question": "Was bedeutet Fremdschutz?",
        "answers": {
          "a": "Schutz der Pflegekraft",
          "b": "Schutz von Patienten und anderen Personen",
          "c": "Schutz der Einrichtung",
          "d": "Schutz von Medikamenten"
        },
        "correct": "b",
        "explanation": "Fremdschutz verhindert die Übertragung von Krankheitserregern."
      },
      {
        "question": "Welche Barrieremaßnahme gehört zur Hygiene?",
        "answers": {
          "a": "Einmalhandschuhe",
          "b": "Mund-Nasen-Schutz",
          "c": "Schutzkittel",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle zählen zur persönlichen Schutzausrüstung."
      },
      {
        "question": "Wann müssen Einmalhandschuhe getragen werden?",
        "answers": {
          "a": "Bei Kontakt mit Blut oder Körperflüssigkeiten",
          "b": "Beim Schreiben",
          "c": "Beim Essen",
          "d": "Beim Telefonieren"
        },
        "correct": "a",
        "explanation": "Handschuhe schützen vor infektiösem Material."
      },
      {
        "question": "Was ist MRSA?",
        "answers": {
          "a": "Ein Virus",
          "b": "Ein multiresistentes Bakterium",
          "c": "Ein Pilz",
          "d": "Ein Parasit"
        },
        "correct": "b",
        "explanation": "MRSA steht für Methicillin-resistenter *Staphylococcus aureus*."
      },
      {
        "question": "Warum ist MRSA besonders gefährlich?",
        "answers": {
          "a": "Weil es gegen viele Antibiotika resistent ist.",
          "b": "Weil es fliegen kann.",
          "c": "Weil es nur Kinder befällt.",
          "d": "Weil es nicht übertragbar ist."
        },
        "correct": "a",
        "explanation": "Resistenzen erschweren die Behandlung erheblich."
      },
      {
        "question": "Wer trägt die Verantwortung für das Hygienemanagement?",
        "answers": {
          "a": "Nur Pflegekräfte",
          "b": "Der Betreiber der Einrichtung",
          "c": "Nur Ärzte",
          "d": "Angehörige"
        },
        "correct": "b",
        "explanation": "Die Gesamtverantwortung liegt beim Träger der Einrichtung."
      },
      {
        "question": "Welches Dokument regelt Hygienemaßnahmen in einer Einrichtung?",
        "answers": {
          "a": "Dienstplan",
          "b": "Hygieneplan",
          "c": "Medikamentenplan",
          "d": "Pflegeplanung"
        },
        "correct": "b",
        "explanation": "Der Hygieneplan enthält verbindliche Hygieneregeln."
      },
      {
        "question": "Welches Gesetz verpflichtet Einrichtungen zu Hygienemaßnahmen?",
        "answers": {
          "a": "BGB",
          "b": "Infektionsschutzgesetz (IfSG)",
          "c": "StGB",
          "d": "Arbeitszeitgesetz"
        },
        "correct": "b",
        "explanation": "Das IfSG bildet die rechtliche Grundlage der Infektionsprävention."
      },
      {
        "question": "Welche Aussage über Hygiene ist richtig?",
        "answers": {
          "a": "Hygiene betrifft nur Krankenhäuser.",
          "b": "Hygiene betrifft stationäre und ambulante Pflege.",
          "c": "Hygiene betrifft nur Intensivstationen.",
          "d": "Hygiene betrifft nur Ärzte."
        },
        "correct": "b",
        "explanation": "Hygieneregeln gelten in allen Pflegebereichen."
      },
      {
        "question": "Welches Ziel verfolgt Hygienemanagement?",
        "answers": {
          "a": "Infektionen vermeiden und Patienten sowie Personal schützen",
          "b": "Dienstpläne vereinfachen",
          "c": "Medikamente einsparen",
          "d": "Dokumentation reduzieren"
        },
        "correct": "a",
        "explanation": "Hygienemanagement dient der Infektionsprävention und der Patientensicherheit."
      },
      {
        "question": "Was versteht man unter einer nosokomialen Infektion?",
        "answers": {
          "a": "Eine Infektion, die bereits zu Hause bestand.",
          "b": "Eine Infektion, die im Zusammenhang mit einem Aufenthalt in einer medizinischen Einrichtung erworben wurde.",
          "c": "Eine genetische Erkrankung.",
          "d": "Eine Allergie."
        },
        "correct": "b",
        "explanation": "Nosokomiale Infektionen entstehen während oder nach einem Aufenthalt in einer Gesundheitseinrichtung."
      },
      {
        "question": "Welcher Übertragungsweg ist in der Pflege am häufigsten?",
        "answers": {
          "a": "Wasser",
          "b": "Schmier- bzw. Kontaktinfektion",
          "c": "Nahrung",
          "d": "Insekten"
        },
        "correct": "b",
        "explanation": "Die meisten Erreger werden über die Hände übertragen."
      },
      {
        "question": "Welche Maßnahme unterbricht die Infektionskette am effektivsten?",
        "answers": {
          "a": "Fenster öffnen",
          "b": "Händedesinfektion",
          "c": "Bett beziehen",
          "d": "Handschuhe ausziehen"
        },
        "correct": "b",
        "explanation": "Die Händedesinfektion verhindert die Übertragung von Krankheitserregern."
      },
      {
        "question": "Wann muss eine hygienische Händedesinfektion durchgeführt werden?",
        "answers": {
          "a": "Nur nach der Arbeit",
          "b": "Vor und nach Patientenkontakt",
          "c": "Nur nach dem Toilettengang",
          "d": "Nur vor dem Essen"
        },
        "correct": "b",
        "explanation": "Sie erfolgt entsprechend den 5 Momenten der Händehygiene."
      },
      {
        "question": "Wie lange sollte ein alkoholisches Händedesinfektionsmittel eingerieben werden?",
        "answers": {
          "a": "5 Sekunden",
          "b": "10 Sekunden",
          "c": "Mindestens 30 Sekunden",
          "d": "2 Minuten"
        },
        "correct": "c",
        "explanation": "Nur bei ausreichender Einwirkzeit werden Erreger sicher reduziert."
      },
      {
        "question": "Wann ersetzt das Tragen von Handschuhen die Händedesinfektion?",
        "answers": {
          "a": "Immer",
          "b": "Nie",
          "c": "Nur bei Blutkontakt",
          "d": "Nur im OP"
        },
        "correct": "b",
        "explanation": "Handschuhe ersetzen niemals die Händedesinfektion."
      },
      {
        "question": "Wann muss nach dem Ausziehen von Handschuhen eine Händedesinfektion erfolgen?",
        "answers": {
          "a": "Nie",
          "b": "Immer",
          "c": "Nur bei sichtbarer Verschmutzung",
          "d": "Nur nach Isolationspatienten"
        },
        "correct": "b",
        "explanation": "Beim Ausziehen können die Hände kontaminiert werden."
      },
      {
        "question": "Wann sollten Hände mit Wasser und Seife gewaschen werden?",
        "answers": {
          "a": "Vor jeder Desinfektion",
          "b": "Nur bei sichtbarer Verschmutzung oder nach Kontakt mit sporenbildenden Erregern",
          "c": "Ausschließlich nach Dienstende",
          "d": "Gar nicht"
        },
        "correct": "b",
        "explanation": "Im Normalfall reicht Händedesinfektion aus; Waschen ist bei sichtbarer Verschmutzung notwendig."
      },
      {
        "question": "Welche Fingernägel sind im Pflegeberuf erlaubt?",
        "answers": {
          "a": "Lange Gelnägel",
          "b": "Kurze, natürliche Fingernägel",
          "c": "Künstliche Fingernägel",
          "d": "Lange lackierte Nägel"
        },
        "correct": "b",
        "explanation": "Künstliche oder lange Nägel erhöhen die Keimzahl."
      },
      {
        "question": "Warum darf im Patientenkontakt kein Schmuck an Händen und Unterarmen getragen werden?",
        "answers": {
          "a": "Wegen der Optik",
          "b": "Er erschwert die Händedesinfektion und bietet Keimen Halt.",
          "c": "Er stört den Patienten.",
          "d": "Wegen des Gewichts."
        },
        "correct": "b",
        "explanation": "Unter Schmuck bleiben häufig Krankheitserreger zurück."
      },
      {
        "question": "Welche Kleidung gehört zur persönlichen Schutzausrüstung (PSA)?",
        "answers": {
          "a": "Schutzkittel",
          "b": "Handschuhe",
          "c": "Mund-Nasen-Schutz",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle gehören zur PSA."
      },
      {
        "question": "Wann wird ein Schutzkittel getragen?",
        "answers": {
          "a": "Bei Gefahr der Kontamination der Kleidung",
          "b": "Beim Essen",
          "c": "Beim Dokumentieren",
          "d": "Nur im OP"
        },
        "correct": "a",
        "explanation": "Der Schutzkittel verhindert die Verschleppung von Erregern."
      },
      {
        "question": "Wann sollte ein Mund-Nasen-Schutz getragen werden?",
        "answers": {
          "a": "Bei möglicher Tröpfchenübertragung",
          "b": "Nur im Winter",
          "c": "Nur im OP",
          "d": "Nur im Labor"
        },
        "correct": "a",
        "explanation": "Er schützt vor Tröpfcheninfektionen."
      },
      {
        "question": "Wann wird eine FFP2-Maske benötigt?",
        "answers": {
          "a": "Bei aerogen übertragbaren Erkrankungen",
          "b": "Nur bei Operationen",
          "c": "Immer",
          "d": "Nie"
        },
        "correct": "a",
        "explanation": "FFP2-Masken schützen vor luftgetragenen Erregern."
      },
      {
        "question": "Welche Aussage zur Flächendesinfektion ist richtig?",
        "answers": {
          "a": "Sie ersetzt die Händedesinfektion.",
          "b": "Sie erfolgt nach Kontamination oder laut Hygieneplan.",
          "c": "Sie ist täglich verboten.",
          "d": "Sie wird nur im OP durchgeführt."
        },
        "correct": "b",
        "explanation": "Flächen werden nach Hygieneplan oder bei Verschmutzung desinfiziert."
      },
      {
        "question": "Welche Flächen müssen besonders häufig desinfiziert werden?",
        "answers": {
          "a": "Fußboden",
          "b": "Kontaktflächen wie Bettgitter oder Türklinken",
          "c": "Fenster",
          "d": "Decken"
        },
        "correct": "b",
        "explanation": "Kontaktflächen übertragen besonders häufig Keime."
      },
      {
        "question": "Was bedeutet aseptisches Arbeiten?",
        "answers": {
          "a": "Steriles bzw. keimarmes Arbeiten zur Vermeidung von Infektionen",
          "b": "Schnelles Arbeiten",
          "c": "Schmerzfreies Arbeiten",
          "d": "Arbeiten ohne Handschuhe"
        },
        "correct": "a",
        "explanation": "Aseptik verhindert das Eindringen von Krankheitserregern."
      },
      {
        "question": "Was bedeutet Antiseptik?",
        "answers": {
          "a": "Abtöten oder Hemmen von Keimen auf lebendem Gewebe",
          "b": "Sterilisation von Instrumenten",
          "c": "Reinigung von Fußböden",
          "d": "Händewaschen"
        },
        "correct": "a",
        "explanation": "Antiseptika werden auf Haut oder Schleimhaut angewendet."
      },
      {
        "question": "Welche Aussage zur Sterilisation ist richtig?",
        "answers": {
          "a": "Sie reduziert nur die Keimzahl.",
          "b": "Sie tötet alle vermehrungsfähigen Mikroorganismen einschließlich Sporen ab.",
          "c": "Sie ersetzt Reinigung.",
          "d": "Sie erfolgt nur mit Alkohol."
        },
        "correct": "b",
        "explanation": "Sterilisation führt zur Keimfreiheit."
      },
      {
        "question": "Was bedeutet Desinfektion?",
        "answers": {
          "a": "Vollständige Keimfreiheit",
          "b": "Reduktion krankmachender Keime auf ein ungefährliches Maß",
          "c": "Reinigung mit Wasser",
          "d": "Entfernung von Staub"
        },
        "correct": "b",
        "explanation": "Ziel der Desinfektion ist die Unterbrechung von Infektionsketten."
      },
      {
        "question": "Was ist der Unterschied zwischen Reinigung und Desinfektion?",
        "answers": {
          "a": "Es gibt keinen Unterschied.",
          "b": "Reinigung entfernt Schmutz, Desinfektion reduziert Krankheitserreger.",
          "c": "Reinigung tötet alle Keime ab.",
          "d": "Desinfektion entfernt nur Staub."
        },
        "correct": "b",
        "explanation": "Reinigung entfernt sichtbare Verschmutzungen, Desinfektion reduziert die Keimzahl auf ein ungefährliches Maß."
      },
      {
        "question": "Welche Reihenfolge ist bei verschmutzten Instrumenten richtig?",
        "answers": {
          "a": "Desinfektion → Reinigung",
          "b": "Reinigung → Desinfektion → Sterilisation (wenn erforderlich)",
          "c": "Sterilisation → Reinigung",
          "d": "Nur Reinigung"
        },
        "correct": "b",
        "explanation": "Erst werden Verschmutzungen entfernt, danach erfolgt die Desinfektion bzw. Sterilisation."
      },
      {
        "question": "Was bedeutet Kontamination?",
        "answers": {
          "a": "Vollständige Keimfreiheit",
          "b": "Verunreinigung mit Krankheitserregern",
          "c": "Steriles Arbeiten",
          "d": "Reinigung eines Raumes"
        },
        "correct": "b",
        "explanation": "Kontamination bedeutet das Vorhandensein von Mikroorganismen auf Personen oder Gegenständen."
      },
      {
        "question": "Welcher Übertragungsweg erfolgt durch Husten oder Niesen?",
        "answers": {
          "a": "Schmierinfektion",
          "b": "Tröpfcheninfektion",
          "c": "Kontaktinfektion",
          "d": "Blutübertragung"
        },
        "correct": "b",
        "explanation": "Beim Husten oder Niesen werden erregerhaltige Tröpfchen verbreitet."
      },
      {
        "question": "Welche Erkrankung wird hauptsächlich durch Tröpfchen übertragen?",
        "answers": {
          "a": "Influenza",
          "b": "Diabetes mellitus",
          "c": "Dekubitus",
          "d": "Osteoporose"
        },
        "correct": "a",
        "explanation": "Influenzaviren verbreiten sich überwiegend über Tröpfchen."
      },
      {
        "question": "Welche Erkrankung wird über Aerosole übertragen?",
        "answers": {
          "a": "Tuberkulose",
          "b": "Harnwegsinfektion",
          "c": "Dekubitus",
          "d": "Herzinfarkt"
        },
        "correct": "a",
        "explanation": "Tuberkulose gehört zu den aerogen übertragenen Erkrankungen."
      },
      {
        "question": "Was versteht man unter einer Kontaktisolierung?",
        "answers": {
          "a": "Der Patient darf Besuch empfangen.",
          "b": "Maßnahmen zur Verhinderung einer Übertragung durch direkten oder indirekten Kontakt.",
          "c": "Nur Fenster öffnen.",
          "d": "Bettruhe."
        },
        "correct": "b",
        "explanation": "Kontaktisolierung verhindert die Weitergabe von Erregern über Berührungen."
      },
      {
        "question": "Wann ist eine Händedesinfektion nach den WHO-Momenten erforderlich?",
        "answers": {
          "a": "Nach Kontakt mit der Patientenumgebung",
          "b": "Nur nach dem Toilettengang",
          "c": "Nur vor dem Essen",
          "d": "Nur bei sichtbarer Verschmutzung"
        },
        "correct": "a",
        "explanation": "Auch nach Kontakt mit der unmittelbaren Patientenumgebung muss desinfiziert werden."
      },
      {
        "question": "Welcher WHO-Moment lautet?",
        "answers": {
          "a": "Vor aseptischen Tätigkeiten",
          "b": "Vor Dienstbeginn",
          "c": "Nach der Frühstückspause",
          "d": "Vor der Übergabe"
        },
        "correct": "a",
        "explanation": "Vor aseptischen Tätigkeiten gehört zu den fünf WHO-Momenten."
      },
      {
        "question": "Welcher WHO-Moment lautet?",
        "answers": {
          "a": "Nach Kontakt mit potenziell infektiösem Material",
          "b": "Vor Dienstende",
          "c": "Vor der Dokumentation",
          "d": "Nach dem Mittagessen"
        },
        "correct": "a",
        "explanation": "Nach Kontakt mit Körperflüssigkeiten ist Händedesinfektion Pflicht."
      },
      {
        "question": "Warum dürfen Desinfektionsmittel nicht sofort wieder abgewaschen werden?",
        "answers": {
          "a": "Wegen des Geruchs",
          "b": "Sie benötigen die vorgeschriebene Einwirkzeit.",
          "c": "Damit die Hände feucht bleiben.",
          "d": "Um Wasser zu sparen."
        },
        "correct": "b",
        "explanation": "Nur bei ausreichender Einwirkzeit entfalten sie ihre volle Wirkung."
      },
      {
        "question": "Wann sollte ein Händedesinfektionsmittel vollständig eingerieben sein?",
        "answers": {
          "a": "Wenn die Hände trocken sind.",
          "b": "Nach 5 Sekunden.",
          "c": "Sofort nach dem Auftragen.",
          "d": "Nach dem Händewaschen."
        },
        "correct": "a",
        "explanation": "Erst trockene Hände zeigen, dass die erforderliche Einwirkzeit erreicht wurde."
      },
      {
        "question": "Welche Aussage zu Arbeitskleidung ist richtig?",
        "answers": {
          "a": "Arbeitskleidung darf privat getragen werden.",
          "b": "Arbeitskleidung soll regelmäßig gewechselt werden.",
          "c": "Arbeitskleidung muss nur einmal pro Woche gewechselt werden.",
          "d": "Arbeitskleidung ersetzt Schutzkleidung."
        },
        "correct": "b",
        "explanation": "Saubere Arbeitskleidung reduziert das Infektionsrisiko."
      },
      {
        "question": "Wann muss Schutzkleidung gewechselt werden?",
        "answers": {
          "a": "Nur am Monatsende.",
          "b": "Bei sichtbarer Verschmutzung oder Kontamination.",
          "c": "Nur nach Dienstschluss.",
          "d": "Nie."
        },
        "correct": "b",
        "explanation": "Kontaminierte Kleidung stellt ein Infektionsrisiko dar."
      },
      {
        "question": "Welche Aussage über Einmalhandschuhe stimmt?",
        "answers": {
          "a": "Sie dürfen mehrfach verwendet werden.",
          "b": "Sie sind Einmalprodukte.",
          "c": "Sie ersetzen Händehygiene.",
          "d": "Sie müssen gewaschen werden."
        },
        "correct": "b",
        "explanation": "Einmalhandschuhe werden nach Gebrauch entsorgt."
      },
      {
        "question": "Warum sollten Pflegekräfte gegen Hepatitis B geimpft sein?",
        "answers": {
          "a": "Wegen gesetzlicher Pflicht für alle Bürger.",
          "b": "Zum Schutz vor einer berufsbedingten Infektion.",
          "c": "Nur wegen Auslandsreisen.",
          "d": "Wegen Grippe."
        },
        "correct": "b",
        "explanation": "Beschäftigte im Gesundheitswesen haben ein erhöhtes Infektionsrisiko."
      },
      {
        "question": "Welche Erkrankung zählt zu den multiresistenten Erregern?",
        "answers": {
          "a": "MRSA",
          "b": "Asthma",
          "c": "Diabetes",
          "d": "Hypertonie"
        },
        "correct": "a",
        "explanation": "MRSA ist ein multiresistenter Krankenhauskeim."
      },
      {
        "question": "Was bedeutet MRE?",
        "answers": {
          "a": "Mehrfach resistente Erreger",
          "b": "Medizinische Regelung Europa",
          "c": "Multiresistente Erreger",
          "d": "Mikrobielle Restenergie"
        },
        "correct": "c",
        "explanation": "MRE ist die Sammelbezeichnung für multiresistente Erreger."
      },
      {
        "question": "Welche Maßnahme schützt besonders vor MRE?",
        "answers": {
          "a": "Konsequente Händedesinfektion",
          "b": "Mehr Kaffee trinken",
          "c": "Fenster schließen",
          "d": "Weniger dokumentieren"
        },
        "correct": "a",
        "explanation": "Die Händedesinfektion ist die wichtigste Maßnahme gegen MRE."
      },
      {
        "question": "Welches Ziel verfolgt die Basishygiene?",
        "answers": {
          "a": "Infektionsketten unterbrechen und alle Patienten schützen.",
          "b": "Nur OP-Säle reinigen.",
          "c": "Medikamente einsparen.",
          "d": "Arbeitszeit verkürzen."
        },
        "correct": "a",
        "explanation": "Basishygiene gilt für jeden Patienten und verhindert die Ausbreitung von Krankheitserregern."
      },
      {
        "question": "Welcher Erreger gehört zu den häufigsten Ursachen von Krankenhausinfektionen?",
        "answers": {
          "a": "MRSA",
          "b": "Masernvirus",
          "c": "Borrelien",
          "d": "Plasmodien"
        },
        "correct": "a",
        "explanation": "MRSA gehört zu den häufigsten multiresistenten Krankenhauskeimen."
      },
      {
        "question": "Welche Aussage zu MRSA ist richtig?",
        "answers": {
          "a": "MRSA ist gegen viele Antibiotika resistent.",
          "b": "MRSA ist ein Virus.",
          "c": "MRSA wird nur über Lebensmittel übertragen.",
          "d": "MRSA ist harmlos."
        },
        "correct": "a",
        "explanation": "Die Resistenz erschwert die Behandlung erheblich."
      },
      {
        "question": "Welche Maßnahme ist bei MRSA besonders wichtig?",
        "answers": {
          "a": "Konsequente Händedesinfektion",
          "b": "Fenster schließen",
          "c": "Bettruhe",
          "d": "Mehr trinken"
        },
        "correct": "a",
        "explanation": "Die Händehygiene verhindert die Übertragung."
      },
      {
        "question": "Welche Aussage über Einmalhandschuhe ist richtig?",
        "answers": {
          "a": "Sie dürfen mehrfach verwendet werden.",
          "b": "Sie ersetzen keine Händedesinfektion.",
          "c": "Sie müssen gewaschen werden.",
          "d": "Sie schützen vor allen Gefahren."
        },
        "correct": "b",
        "explanation": "Auch mit Handschuhen ist Händedesinfektion notwendig."
      },
      {
        "question": "Wann müssen Handschuhe gewechselt werden?",
        "answers": {
          "a": "Nach jedem Patienten bzw. bei Verschmutzung",
          "b": "Nur am Ende der Schicht",
          "c": "Einmal täglich",
          "d": "Nie"
        },
        "correct": "a",
        "explanation": "Handschuhe sind Einmalprodukte."
      },
      {
        "question": "Welche PSA schützt die Atemwege?",
        "answers": {
          "a": "Schutzbrille",
          "b": "FFP2-Maske",
          "c": "Handschuhe",
          "d": "Schutzschuhe"
        },
        "correct": "b",
        "explanation": "FFP2-Masken schützen vor luftgetragenen Erregern."
      },
      {
        "question": "Wann wird eine Schutzbrille getragen?",
        "answers": {
          "a": "Bei Gefahr von Spritzern mit Blut oder Körperflüssigkeiten",
          "b": "Beim Dokumentieren",
          "c": "Beim Essen",
          "d": "Beim Telefonieren"
        },
        "correct": "a",
        "explanation": "Sie schützt die Augen vor infektiösem Material."
      },
      {
        "question": "Welche Aussage zur Schutzkleidung stimmt?",
        "answers": {
          "a": "Sie schützt nur Patienten.",
          "b": "Sie schützt Patienten und Personal.",
          "c": "Sie ersetzt Händedesinfektion.",
          "d": "Sie ist freiwillig."
        },
        "correct": "b",
        "explanation": "PSA dient dem Eigen- und Fremdschutz."
      },
      {
        "question": "Was versteht man unter Basishygiene?",
        "answers": {
          "a": "Hygienemaßnahmen, die bei jedem Patienten angewendet werden.",
          "b": "Hygiene nur auf Intensivstationen.",
          "c": "Hygiene nur im OP.",
          "d": "Hygiene nur bei MRSA."
        },
        "correct": "a",
        "explanation": "Basishygiene gilt unabhängig von bekannten Infektionen."
      },
      {
        "question": "Welche Maßnahme gehört zur Basishygiene?",
        "answers": {
          "a": "Händedesinfektion",
          "b": "Flächendesinfektion",
          "c": "Persönliche Schutzausrüstung bei Bedarf",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle Maßnahmen gehören zur Basishygiene."
      },
      {
        "question": "Was bedeutet aseptisch?",
        "answers": {
          "a": "Keimarm bzw. steril arbeiten",
          "b": "Schnell arbeiten",
          "c": "Schmerzfrei arbeiten",
          "d": "Ohne Handschuhe arbeiten"
        },
        "correct": "a",
        "explanation": "Ziel ist die Vermeidung einer Keimübertragung."
      },
      {
        "question": "Was bedeutet septisch?",
        "answers": {
          "a": "Steril",
          "b": "Mit Krankheitserregern verunreinigt",
          "c": "Sauber",
          "d": "Trocken"
        },
        "correct": "b",
        "explanation": "Septisch bedeutet infektiös bzw. keimbelastet."
      },
      {
        "question": "Welches Ziel verfolgt die Isolierung eines Patienten?",
        "answers": {
          "a": "Den Patienten bestrafen.",
          "b": "Die Übertragung von Krankheitserregern verhindern.",
          "c": "Die Pflege erleichtern.",
          "d": "Besucher fernhalten."
        },
        "correct": "b",
        "explanation": "Isolierungsmaßnahmen dienen dem Infektionsschutz."
      },
      {
        "question": "Welche Isolierungsform wird bei Tröpfcheninfektionen angewendet?",
        "answers": {
          "a": "Kontaktisolierung",
          "b": "Tröpfchenisolierung",
          "c": "Schutzisolierung",
          "d": "Keine Isolierung"
        },
        "correct": "b",
        "explanation": "Sie verhindert die Verbreitung infektiöser Tröpfchen."
      },
      {
        "question": "Welche Isolierungsform wird bei Tuberkulose angewendet?",
        "answers": {
          "a": "Kontaktisolierung",
          "b": "Aerogene Isolierung",
          "c": "Standardisolierung",
          "d": "Lebensmittelisolierung"
        },
        "correct": "b",
        "explanation": "Tuberkulose wird über Aerosole übertragen."
      },
      {
        "question": "Welche Aussage zur Flächendesinfektion ist richtig?",
        "answers": {
          "a": "Nur sichtbare Verschmutzungen werden entfernt.",
          "b": "Krankheitserreger werden reduziert.",
          "c": "Sie ersetzt Händehygiene.",
          "d": "Sie erfolgt nur im OP."
        },
        "correct": "b",
        "explanation": "Ziel ist die Reduktion von Krankheitserregern auf Flächen."
      },
      {
        "question": "Welche Flächen werden besonders häufig desinfiziert?",
        "answers": {
          "a": "Kontaktflächen",
          "b": "Decken",
          "c": "Fenster",
          "d": "Wände"
        },
        "correct": "a",
        "explanation": "Kontaktflächen werden besonders häufig berührt."
      },
      {
        "question": "Welche Aussage zur Instrumentendesinfektion ist richtig?",
        "answers": {
          "a": "Sie erfolgt nach jedem Gebrauch.",
          "b": "Sie erfolgt nur einmal pro Woche.",
          "c": "Sie ist freiwillig.",
          "d": "Instrumente werden nie desinfiziert."
        },
        "correct": "a",
        "explanation": "Medizinprodukte müssen nach jeder Anwendung aufbereitet werden."
      },
      {
        "question": "Was bedeutet Sterilität?",
        "answers": {
          "a": "Wenige Keime",
          "b": "Vollständige Freiheit von vermehrungsfähigen Mikroorganismen",
          "c": "Gereinigte Oberfläche",
          "d": "Sichtbar sauber"
        },
        "correct": "b",
        "explanation": "Steril bedeutet keimfrei."
      },
      {
        "question": "Welches Ziel verfolgt die Krankenhaushygiene insgesamt?",
        "answers": {
          "a": "Infektionen verhindern, Patienten und Personal schützen sowie die Qualität der Versorgung verbessern.",
          "b": "Kosten sparen.",
          "c": "Weniger dokumentieren.",
          "d": "Mehr Medikamente einsetzen."
        },
        "correct": "a",
        "explanation": "Krankenhaushygiene dient der Infektionsprävention und Patientensicherheit."
      },
      {
        "question": "Welcher Erreger gehört NICHT zu den Mikroorganismen?",
        "answers": {
          "a": "Bakterien",
          "b": "Viren",
          "c": "Pilze",
          "d": "Knochenzellen"
        },
        "correct": "d",
        "explanation": "Knochenzellen gehören zum menschlichen Körper und sind keine Krankheitserreger."
      },
      {
        "question": "Welche Krankheit wird durch Bakterien verursacht?",
        "answers": {
          "a": "Influenza",
          "b": "Tuberkulose",
          "c": "COVID-19",
          "d": "Masern"
        },
        "correct": "b",
        "explanation": "Tuberkulose wird durch das Bakterium *Mycobacterium tuberculosis* verursacht."
      },
      {
        "question": "Welche Erkrankung wird durch Viren verursacht?",
        "answers": {
          "a": "Tetanus",
          "b": "Influenza",
          "c": "Harnwegsinfektion durch E. coli",
          "d": "Wundinfektion durch Staphylokokken"
        },
        "correct": "b",
        "explanation": "Influenza wird durch Influenzaviren ausgelöst."
      },
      {
        "question": "Welche Erkrankung wird durch Pilze verursacht?",
        "answers": {
          "a": "Fußpilz",
          "b": "Diabetes",
          "c": "Bluthochdruck",
          "d": "Asthma"
        },
        "correct": "a",
        "explanation": "Fußpilz wird durch Dermatophyten verursacht."
      },
      {
        "question": "Was ist eine Infektion?",
        "answers": {
          "a": "Das Eindringen und Vermehren von Krankheitserregern im Körper.",
          "b": "Eine Verletzung.",
          "c": "Eine Allergie.",
          "d": "Eine Impfung."
        },
        "correct": "a",
        "explanation": "Eine Infektion entsteht durch Krankheitserreger."
      },
      {
        "question": "Was bedeutet Kolonisation?",
        "answers": {
          "a": "Krankheit mit Symptomen",
          "b": "Besiedlung mit Keimen ohne Krankheitssymptome",
          "c": "Blutvergiftung",
          "d": "Sterilität"
        },
        "correct": "b",
        "explanation": "Erreger sind vorhanden, verursachen aber keine Erkrankung."
      },
      {
        "question": "Was ist eine opportunistische Infektion?",
        "answers": {
          "a": "Infektion bei geschwächtem Immunsystem",
          "b": "Angeborene Erkrankung",
          "c": "Allergische Reaktion",
          "d": "Stoffwechselerkrankung"
        },
        "correct": "a",
        "explanation": "Opportunistische Erreger nutzen eine Immunschwäche aus."
      },
      {
        "question": "Welche Personengruppe hat ein besonders hohes Infektionsrisiko?",
        "answers": {
          "a": "Gesunde Jugendliche",
          "b": "Immungeschwächte Patienten",
          "c": "Sportler",
          "d": "Lehrer"
        },
        "correct": "b",
        "explanation": "Ein geschwächtes Immunsystem erhöht das Erkrankungsrisiko."
      },
      {
        "question": "Welche Maßnahme schützt immungeschwächte Patienten besonders?",
        "answers": {
          "a": "Konsequente Basishygiene",
          "b": "Weniger Händedesinfektion",
          "c": "Gemeinsame Handtücher",
          "d": "Keine PSA"
        },
        "correct": "a",
        "explanation": "Besonders gefährdete Patienten benötigen konsequenten Hygieneschutz."
      },
      {
        "question": "Warum ist Händedesinfektion wirksamer als Händewaschen?",
        "answers": {
          "a": "Weil Alkohol Krankheitserreger besser reduziert.",
          "b": "Weil Wasser verboten ist.",
          "c": "Weil Seife gefährlich ist.",
          "d": "Weil Händewaschen Keime vermehrt."
        },
        "correct": "a",
        "explanation": "Alkoholische Händedesinfektion wirkt schneller und zuverlässiger gegen viele Erreger."
      },
      {
        "question": "Wann ist Händewaschen der Händedesinfektion vorzuziehen?",
        "answers": {
          "a": "Bei sichtbarer Verschmutzung",
          "b": "Vor jedem Patientenkontakt",
          "c": "Nach jeder Dokumentation",
          "d": "Nie"
        },
        "correct": "a",
        "explanation": "Sichtbarer Schmutz muss zunächst entfernt werden."
      },
      {
        "question": "Warum sollten Hände nach dem Waschen gut getrocknet werden?",
        "answers": {
          "a": "Feuchte Hände begünstigen Keimwachstum und Hautschäden.",
          "b": "Damit Handschuhe besser passen.",
          "c": "Wegen der Dokumentation.",
          "d": "Nur aus Komfortgründen."
        },
        "correct": "a",
        "explanation": "Trockene Haut schützt besser vor Keimen."
      },
      {
        "question": "Welche Hautveränderung erhöht das Infektionsrisiko?",
        "answers": {
          "a": "Intakte Haut",
          "b": "Rissige Haut",
          "c": "Gepflegte Haut",
          "d": "Gesunde Haut"
        },
        "correct": "b",
        "explanation": "Hautverletzungen erleichtern das Eindringen von Erregern."
      },
      {
        "question": "Warum ist Hautpflege für Pflegekräfte wichtig?",
        "answers": {
          "a": "Zum Erhalt der Hautschutzbarriere",
          "b": "Nur aus kosmetischen Gründen",
          "c": "Damit Handschuhe besser aussehen",
          "d": "Nur im Winter"
        },
        "correct": "a",
        "explanation": "Gesunde Haut ist ein wichtiger Infektionsschutz."
      },
      {
        "question": "Was bedeutet PSA?",
        "answers": {
          "a": "Persönliche Schutzausrüstung",
          "b": "Persönliche Stationsanweisung",
          "c": "Pflege-Sicherheits-Akte",
          "d": "Professionelle Standardanwendung"
        },
        "correct": "a",
        "explanation": "PSA schützt Personal und Patienten vor Infektionen."
      },
      {
        "question": "Welche Aussage zur PSA ist richtig?",
        "answers": {
          "a": "Sie wird nach Risiko ausgewählt.",
          "b": "Sie wird immer gleich getragen.",
          "c": "Sie ersetzt Hygiene.",
          "d": "Sie ist freiwillig."
        },
        "correct": "a",
        "explanation": "Die Auswahl richtet sich nach der Gefährdungsbeurteilung."
      },
      {
        "question": "Welche Reihenfolge gilt beim Ablegen kontaminierter PSA?",
        "answers": {
          "a": "Handschuhe zuerst entfernen.",
          "b": "Schutzbrille zuerst.",
          "c": "Maske zuerst.",
          "d": "Reihenfolge spielt keine Rolle."
        },
        "correct": "a",
        "explanation": "Handschuhe sind meist am stärksten kontaminiert."
      },
      {
        "question": "Was muss nach dem Ablegen der PSA immer erfolgen?",
        "answers": {
          "a": "Händedesinfektion",
          "b": "Händewaschen",
          "c": "Dokumentation",
          "d": "Blutdruck messen"
        },
        "correct": "a",
        "explanation": "Nach dem Ablegen können die Hände kontaminiert sein."
      },
      {
        "question": "Welche Aussage über Hygienestandards ist richtig?",
        "answers": {
          "a": "Sie dienen der Sicherheit von Patienten und Personal.",
          "b": "Sie gelten nur im OP.",
          "c": "Sie sind freiwillig.",
          "d": "Sie betreffen nur Ärzte."
        },
        "correct": "a",
        "explanation": "Hygienestandards gelten für alle Bereiche der Pflege."
      },
      {
        "question": "Welches Ziel verfolgt die Hygiene insgesamt?",
        "answers": {
          "a": "Infektionsketten unterbrechen, Patienten und Personal schützen sowie die Qualität der Versorgung sichern.",
          "b": "Kosten reduzieren.",
          "c": "Mehr Dokumentation schreiben.",
          "d": "Personal ersetzen."
        },
        "correct": "a",
        "explanation": "Hygiene ist eine der wichtigsten Maßnahmen zur Patientensicherheit und gehört zu den Grundlagen professioneller Pflege."
      },
      {
        "question": "Welches Organ ist die wichtigste natürliche Barriere gegen Krankheitserreger?",
        "answers": {
          "a": "Leber",
          "b": "Haut",
          "c": "Herz",
          "d": "Milz"
        },
        "correct": "b",
        "explanation": "Die intakte Haut schützt den Körper vor dem Eindringen von Mikroorganismen."
      },
      {
        "question": "Welche Schleimhaut gehört zu den natürlichen Schutzbarrieren?",
        "answers": {
          "a": "Mundschleimhaut",
          "b": "Knochen",
          "c": "Muskeln",
          "d": "Knorpel"
        },
        "correct": "a",
        "explanation": "Schleimhäute verhindern das Eindringen von Krankheitserregern."
      },
      {
        "question": "Was versteht man unter der Inkubationszeit?",
        "answers": {
          "a": "Zeit zwischen Infektion und Auftreten erster Symptome",
          "b": "Dauer der Therapie",
          "c": "Zeit bis zur Entlassung",
          "d": "Dauer einer Operation"
        },
        "correct": "a",
        "explanation": "Während der Inkubationszeit vermehren sich die Erreger bereits im Körper."
      },
      {
        "question": "Welche Aussage zur Inkubationszeit ist richtig?",
        "answers": {
          "a": "Sie ist bei jeder Krankheit gleich.",
          "b": "Sie unterscheidet sich je nach Erreger.",
          "c": "Sie beträgt immer 24 Stunden.",
          "d": "Sie existiert nicht."
        },
        "correct": "b",
        "explanation": "Jeder Krankheitserreger besitzt eine unterschiedliche Inkubationszeit."
      },
      {
        "question": "Welche Infektionsquelle ist am häufigsten?",
        "answers": {
          "a": "Der Mensch",
          "b": "Pflanzen",
          "c": "Möbel",
          "d": "Kleidung"
        },
        "correct": "a",
        "explanation": "Menschen stellen die wichtigste Infektionsquelle dar."
      },
      {
        "question": "Was versteht man unter einer Schmierinfektion?",
        "answers": {
          "a": "Übertragung über kontaminierte Hände oder Gegenstände",
          "b": "Übertragung durch Insekten",
          "c": "Übertragung durch UV-Licht",
          "d": "Übertragung über Medikamente"
        },
        "correct": "a",
        "explanation": "Schmierinfektionen erfolgen häufig indirekt über Hände oder Flächen."
      },
      {
        "question": "Welche Aussage zur Kontaktinfektion stimmt?",
        "answers": {
          "a": "Sie erfolgt ausschließlich durch Husten.",
          "b": "Sie erfolgt durch direkten oder indirekten Kontakt.",
          "c": "Sie erfolgt nur über Lebensmittel.",
          "d": "Sie erfolgt nur über Wasser."
        },
        "correct": "b",
        "explanation": "Kontaktinfektionen können direkt oder über Gegenstände übertragen werden."
      },
      {
        "question": "Welche Infektion wird häufig über Blut übertragen?",
        "answers": {
          "a": "Hepatitis B",
          "b": "Influenza",
          "c": "Norovirus",
          "d": "Masern"
        },
        "correct": "a",
        "explanation": "Hepatitis B wird unter anderem durch Blutkontakt übertragen."
      },
      {
        "question": "Welche Maßnahme schützt vor blutübertragenen Infektionen?",
        "answers": {
          "a": "Handschuhe tragen",
          "b": "Sicherer Umgang mit Kanülen",
          "c": "Händedesinfektion",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle Maßnahmen reduzieren das Infektionsrisiko erheblich."
      },
      {
        "question": "Wie werden gebrauchte Kanülen entsorgt?",
        "answers": {
          "a": "Im Restmüll",
          "b": "In stich- und bruchsicheren Abwurfbehältern",
          "c": "Im Papiermüll",
          "d": "In der Wäsche"
        },
        "correct": "b",
        "explanation": "So werden Nadelstichverletzungen verhindert."
      },
      {
        "question": "Was darf mit gebrauchten Kanülen niemals gemacht werden?",
        "answers": {
          "a": "Sofort entsorgen",
          "b": "Recapping (Schutzkappe wieder aufsetzen)",
          "c": "Im Abwurfbehälter entsorgen",
          "d": "Handschuhe tragen"
        },
        "correct": "b",
        "explanation": "Recapping erhöht das Risiko einer Nadelstichverletzung."
      },
      {
        "question": "Was ist eine Nadelstichverletzung?",
        "answers": {
          "a": "Verletzung durch einen gebrauchten spitzen Gegenstand",
          "b": "Ein Schnitt mit Papier",
          "c": "Ein Bluterguss",
          "d": "Eine Hautrötung"
        },
        "correct": "a",
        "explanation": "Sie kann zur Übertragung gefährlicher Krankheitserreger führen."
      },
      {
        "question": "Welche Erkrankung kann durch eine Nadelstichverletzung übertragen werden?",
        "answers": {
          "a": "Hepatitis B",
          "b": "Hepatitis C",
          "c": "HIV",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle drei Erreger können über Blut übertragen werden."
      },
      {
        "question": "Was ist nach einer Nadelstichverletzung die erste Maßnahme?",
        "answers": {
          "a": "Wunde ausdrücken, desinfizieren und sofort melden",
          "b": "Handschuhe wechseln",
          "c": "Dienst beenden",
          "d": "Wunde verbinden und nichts sagen"
        },
        "correct": "a",
        "explanation": "Schnelles Handeln reduziert das Infektionsrisiko."
      },
      {
        "question": "Warum müssen Nadelstichverletzungen dokumentiert werden?",
        "answers": {
          "a": "Für die Nachsorge und den Arbeitsschutz",
          "b": "Wegen der Dienstplanung",
          "c": "Nur für die Statistik",
          "d": "Damit der Patient informiert wird"
        },
        "correct": "a",
        "explanation": "Dokumentation ist wichtig für Behandlung und Versicherungsschutz."
      },
      {
        "question": "Welcher Impfstatus ist für Pflegekräfte besonders wichtig?",
        "answers": {
          "a": "Hepatitis B",
          "b": "Masern",
          "c": "Influenza",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Impfungen schützen Pflegekräfte und Patienten."
      },
      {
        "question": "Warum ist die Grippeimpfung für Pflegekräfte sinnvoll?",
        "answers": {
          "a": "Schutz der Patienten und des Personals",
          "b": "Wegen der Dokumentation",
          "c": "Nur für Auszubildende",
          "d": "Nur im Winterdienst"
        },
        "correct": "a",
        "explanation": "Pflegekräfte können Influenzaviren auf vulnerable Patienten übertragen."
      },
      {
        "question": "Welche Aussage über das Infektionsschutzgesetz (IfSG) stimmt?",
        "answers": {
          "a": "Es regelt Maßnahmen zur Verhütung und Bekämpfung von Infektionskrankheiten.",
          "b": "Es regelt Dienstpläne.",
          "c": "Es regelt Pflegegrade.",
          "d": "Es regelt Medikamente."
        },
        "correct": "a",
        "explanation": "Das IfSG ist die wichtigste gesetzliche Grundlage der Infektionsprävention."
      },
      {
        "question": "Warum ist Hygiene ein wesentlicher Bestandteil professioneller Pflege?",
        "answers": {
          "a": "Sie schützt Patienten, Besucher und Mitarbeitende vor Infektionen.",
          "b": "Sie spart Zeit.",
          "c": "Sie ersetzt Medikamente.",
          "d": "Sie dient nur der Dokumentation."
        },
        "correct": "a",
        "explanation": "Gute Hygiene erhöht die Patientensicherheit und verhindert Infektionsketten."
      },
      {
        "question": "Welcher Satz beschreibt Hygiene in der Pflege am besten?",
        "answers": {
          "a": "Hygiene umfasst alle Maßnahmen zur Verhütung von Infektionen sowie zum Schutz von Patienten, Besuchern und Mitarbeitenden und ist eine zentrale Voraussetzung für professionelle Pflege.",
          "b": "Hygiene bedeutet nur Händewaschen.",
          "c": "Hygiene betrifft ausschließlich Krankenhäuser.",
          "d": "Hygiene ist nur bei infektiösen Patienten notwendig."
        },
        "correct": "a",
        "explanation": "Professionelle Hygiene umfasst deutlich mehr als Händehygiene und gilt bei jedem Patienten."
      }
    ]
  },
  "medikamenten": {
    "label": "Medikamente",
    "questions": [
      {
        "question": "Was ist ein Arzneimittel nach dem Arzneimittelgesetz (AMG)?",
        "answers": {
          "a": "Jeder Stoff mit Geschmack",
          "b": "Ein Stoff oder eine Stoffzubereitung zur Heilung, Linderung, Verhütung oder Diagnose von Krankheiten",
          "c": "Nur verschreibungspflichtige Medikamente",
          "d": "Nur Tabletten"
        },
        "correct": "b",
        "explanation": "Arzneimittel dienen der Heilung, Linderung, Verhütung oder Diagnose von Krankheiten."
      },
      {
        "question": "Aus welchen Bestandteilen besteht ein Arzneimittel?",
        "answers": {
          "a": "Nur aus Wirkstoffen",
          "b": "Wirkstoffen und Hilfsstoffen",
          "c": "Nur aus Hilfsstoffen",
          "d": "Nur aus Konservierungsmitteln"
        },
        "correct": "b",
        "explanation": "Arzneimittel bestehen aus einem oder mehreren Wirkstoffen sowie Hilfsstoffen."
      },
      {
        "question": "Was ist ein Placebo?",
        "answers": {
          "a": "Ein Antibiotikum",
          "b": "Ein Medikament ohne Wirkstoff",
          "c": "Ein Betäubungsmittel",
          "d": "Ein Schmerzmittel"
        },
        "correct": "b",
        "explanation": "Placebos enthalten keinen pharmakologisch wirksamen Stoff."
      },
      {
        "question": "Wie nennt man die erwünschte Wirkung eines Placebos?",
        "answers": {
          "a": "Nocebo-Effekt",
          "b": "Placebo-Effekt",
          "c": "Allergie",
          "d": "Interaktion"
        },
        "correct": "b",
        "explanation": "Positive Wirkungen eines Scheinmedikaments werden als Placebo-Effekt bezeichnet."
      },
      {
        "question": "Wie nennt man unerwünschte Wirkungen eines Placebos?",
        "answers": {
          "a": "Placebo-Reaktion",
          "b": "Nocebo-Effekt",
          "c": "Kumulation",
          "d": "Antidot"
        },
        "correct": "b",
        "explanation": "Negative Erwartungen können einen Nocebo-Effekt auslösen."
      },
      {
        "question": "Wie viele Namen besitzt ein Arzneimittel in der Regel?",
        "answers": {
          "a": "Einen",
          "b": "Zwei",
          "c": "Drei",
          "d": "Vier"
        },
        "correct": "c",
        "explanation": "Chemischer Name, Internationaler Freiname (INN) und Handelsname."
      },
      {
        "question": "Wofür steht INN?",
        "answers": {
          "a": "Internationaler Nebenwirkungsnachweis",
          "b": "Internationaler Freiname",
          "c": "Internationale Normnummer",
          "d": "Interne Namensnummer"
        },
        "correct": "b",
        "explanation": "INN = International Nonproprietary Name (Internationaler Freiname)."
      },
      {
        "question": "Was ist ein Handelsname?",
        "answers": {
          "a": "Chemischer Name",
          "b": "Der Name, unter dem ein Hersteller das Medikament verkauft",
          "c": "Der Wirkstoff",
          "d": "Der lateinische Name"
        },
        "correct": "b",
        "explanation": "Beispiel: Aspirin® ist ein Handelsname."
      },
      {
        "question": "Was ist ein Generikum?",
        "answers": {
          "a": "Ein neues Medikament",
          "b": "Ein Arzneimittel nach Ablauf des Patentschutzes eines Originalpräparates",
          "c": "Ein Betäubungsmittel",
          "d": "Ein Naturheilmittel"
        },
        "correct": "b",
        "explanation": "Generika enthalten denselben Wirkstoff wie das Originalpräparat."
      },
      {
        "question": "Was unterscheidet Generika häufig vom Originalpräparat?",
        "answers": {
          "a": "Wirkstoff",
          "b": "Hilfsstoffe und Hersteller",
          "c": "Wirkung",
          "d": "Indikation"
        },
        "correct": "b",
        "explanation": "Der Wirkstoff ist gleich, Hilfsstoffe können unterschiedlich sein."
      },
      {
        "question": "Welche Arzneimittel können frei verkauft werden?",
        "answers": {
          "a": "Antibiotika",
          "b": "Pflanzliche Tees oder Mineralstoffpräparate",
          "c": "Morphin",
          "d": "Insulin"
        },
        "correct": "b",
        "explanation": "Frei verkäufliche Arzneimittel benötigen keine Apotheke."
      },
      {
        "question": "Wo dürfen apothekenpflichtige Arzneimittel verkauft werden?",
        "answers": {
          "a": "Im Supermarkt",
          "b": "Nur in Apotheken",
          "c": "An Tankstellen",
          "d": "Überall"
        },
        "correct": "b",
        "explanation": "Apothekenpflichtige Medikamente dürfen ausschließlich in Apotheken verkauft werden."
      },
      {
        "question": "Welches Arzneimittel ist verschreibungspflichtig?",
        "answers": {
          "a": "Antibiotika",
          "b": "Kamillentee",
          "c": "Pflaster",
          "d": "Mineralwasser"
        },
        "correct": "a",
        "explanation": "Antibiotika dürfen nur gegen ärztliche Verordnung abgegeben werden."
      },
      {
        "question": "Welche Arzneimittel benötigen ein BtM-Rezept?",
        "answers": {
          "a": "Paracetamol",
          "b": "Morphin",
          "c": "Ibuprofen",
          "d": "Pantoprazol"
        },
        "correct": "b",
        "explanation": "Betäubungsmittel dürfen nur mit speziellem BtM-Rezept verordnet werden."
      },
      {
        "question": "Was bedeutet Pharmakologie?",
        "answers": {
          "a": "Lehre von Krankheiten",
          "b": "Lehre von Arzneimitteln und ihren Wirkungen",
          "c": "Lehre von Bakterien",
          "d": "Lehre von Operationen"
        },
        "correct": "b",
        "explanation": "Pharmakologie untersucht Arzneistoffe und ihre Wirkungen."
      },
      {
        "question": "Womit beschäftigt sich die Pharmakokinetik?",
        "answers": {
          "a": "Was macht der Arzneistoff mit dem Körper?",
          "b": "Was macht der Körper mit dem Arzneistoff?",
          "c": "Nur Nebenwirkungen",
          "d": "Nur Allergien"
        },
        "correct": "b",
        "explanation": "Resorption, Verteilung, Biotransformation und Elimination."
      },
      {
        "question": "Womit beschäftigt sich die Pharmakodynamik?",
        "answers": {
          "a": "Arzneimittelausscheidung",
          "b": "Wirkung des Arzneimittels auf den Körper",
          "c": "Medikamentenpreise",
          "d": "Verpackungen"
        },
        "correct": "b",
        "explanation": "Pharmakodynamik beschreibt die Wirkung eines Arzneistoffs."
      },
      {
        "question": "Welche Organe beeinflussen die Ausscheidung vieler Medikamente besonders?",
        "answers": {
          "a": "Haut und Milz",
          "b": "Leber und Niere",
          "c": "Herz und Lunge",
          "d": "Darm und Magen"
        },
        "correct": "b",
        "explanation": "Erkrankungen dieser Organe können zur Kumulation führen."
      },
      {
        "question": "Was bedeutet Kumulation?",
        "answers": {
          "a": "Schnelle Ausscheidung",
          "b": "Anreicherung eines Arzneistoffes im Körper",
          "c": "Allergie",
          "d": "Placeboeffekt"
        },
        "correct": "b",
        "explanation": "Verminderte Ausscheidung kann zu Vergiftungen führen."
      },
      {
        "question": "Welche Patientengruppe benötigt häufig eine angepasste Dosierung?",
        "answers": {
          "a": "Gesunde Erwachsene",
          "b": "Ältere Menschen sowie Leber- und Nierenkranke",
          "c": "Sportler",
          "d": "Jugendliche"
        },
        "correct": "b",
        "explanation": "Die Pharmakokinetik ist bei diesen Patienten häufig verändert."
      },
      {
        "question": "Welche 6-R-Regel dient der sicheren Medikamentengabe?",
        "answers": {
          "a": "Richtige Pflegeplanung",
          "b": "Richtiger Patient, richtiges Medikament, richtige Dosierung, richtiger Zeitpunkt, richtiger Applikationsweg, richtige Dokumentation",
          "c": "Richtige Station",
          "d": "Richtige Diagnose"
        },
        "correct": "b",
        "explanation": "Die 6-R-Regel ist die wichtigste Sicherheitsregel bei der Medikamentengabe."
      },
      {
        "question": "Warum sollte das Richten von Medikamenten möglichst ungestört erfolgen?",
        "answers": {
          "a": "Um Zeit zu sparen.",
          "b": "Um Flüchtigkeitsfehler zu vermeiden.",
          "c": "Damit Patienten schlafen können.",
          "d": "Wegen der Hygiene."
        },
        "correct": "b",
        "explanation": "Unterbrechungen erhöhen das Risiko von Medikationsfehlern."
      },
      {
        "question": "Welche Maßnahme wird beim Richten von Medikamenten empfohlen?",
        "answers": {
          "a": "Musik hören",
          "b": "Vier-Augen-Prinzip",
          "c": "Telefonieren",
          "d": "Gleichzeitig dokumentieren"
        },
        "correct": "b",
        "explanation": "Eine zweite Kontrolle reduziert Medikationsfehler."
      },
      {
        "question": "Was muss vor jedem Umgang mit Arzneimitteln erfolgen?",
        "answers": {
          "a": "Blutdruck messen",
          "b": "Händedesinfektion und Desinfektion der Arbeitsfläche",
          "c": "Handschuhe anziehen",
          "d": "Patient wiegen"
        },
        "correct": "b",
        "explanation": "Dies verhindert eine Kontamination der Medikamente."
      },
      {
        "question": "Wie oft sollte ein Medikament kontrolliert werden?",
        "answers": {
          "a": "Einmal",
          "b": "Zweimal",
          "c": "Viermal",
          "d": "Gar nicht"
        },
        "correct": "c",
        "explanation": "Im EVK erfolgt eine 4-fache Kontrolle beim Stellen und Verabreichen."
      },
      {
        "question": "Welche Kontrolle gehört NICHT zur 4-fach-Kontrolle?",
        "answers": {
          "a": "Beim Herausnehmen aus dem Schrank",
          "b": "Bei der Entnahme aus der Originalpackung",
          "c": "Während der Dosierung",
          "d": "Nach Dienstschluss"
        },
        "correct": "d",
        "explanation": "Nach Dienstschluss gehört nicht zur Medikamentenkontrolle."
      },
      {
        "question": "Wie lange dürfen Medikamente maximal vor der Verabreichung gestellt werden?",
        "answers": {
          "a": "12 Stunden",
          "b": "24 Stunden",
          "c": "48 Stunden",
          "d": "7 Tage"
        },
        "correct": "b",
        "explanation": "Im EVK dürfen Medikamente höchstens 24 Stunden vorher gestellt werden."
      },
      {
        "question": "Flüssige Arzneimittel sollten gestellt werden...",
        "answers": {
          "a": "Einen Tag vorher.",
          "b": "Unmittelbar vor der Gabe (ca. 30 Minuten vorher).",
          "c": "Eine Woche vorher.",
          "d": "Nach der Einnahme."
        },
        "correct": "b",
        "explanation": "Flüssige Arzneimittel sollen erst kurz vor der Verabreichung vorbereitet werden."
      },
      {
        "question": "Warum bleiben Medikamente möglichst in der Originalverpackung?",
        "answers": {
          "a": "Wegen der Farbe.",
          "b": "Damit Beipackzettel und Verfallsdatum erhalten bleiben.",
          "c": "Damit sie schöner aussehen.",
          "d": "Wegen der Lagerung im Kühlschrank."
        },
        "correct": "b",
        "explanation": "Originalverpackung erleichtert Identifikation und Kontrolle."
      },
      {
        "question": "Was muss mit angebrochenen Arzneimitteln erfolgen?",
        "answers": {
          "a": "Sofort entsorgen.",
          "b": "Mit „verwendbar bis“ kennzeichnen.",
          "c": "Offen stehen lassen.",
          "d": "Umfüllen."
        },
        "correct": "b",
        "explanation": "Angebrochene Medikamente besitzen häufig eine verkürzte Haltbarkeit."
      },
      {
        "question": "Wer ist für die ärztliche Verordnung der Medikamente verantwortlich?",
        "answers": {
          "a": "Pflegefachkraft",
          "b": "Arzt",
          "c": "Apotheker",
          "d": "Angehörige"
        },
        "correct": "b",
        "explanation": "Medikamente dürfen nur aufgrund einer ärztlichen Anordnung gegeben werden."
      },
      {
        "question": "Welche Angaben gehören zu einer vollständigen ärztlichen Medikamentenanordnung?",
        "answers": {
          "a": "Medikamentenname",
          "b": "Dosierung",
          "c": "Zeitpunkt der Gabe",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Eine vollständige Verordnung enthält Name, Stärke, Dosierung und Zeitpunkt."
      },
      {
        "question": "Was muss bei einer Bedarfsmedikation zusätzlich angegeben sein?",
        "answers": {
          "a": "Lieblingsfarbe des Patienten",
          "b": "Maximale Tagesdosis und Zeitintervall",
          "c": "Zimmernummer",
          "d": "Körpergröße"
        },
        "correct": "b",
        "explanation": "Nur so ist eine sichere Bedarfsmedikation möglich."
      },
      {
        "question": "Welche Aufgabe hat die Pflegekraft vor der Medikamentengabe?",
        "answers": {
          "a": "Patient über Wirkung und Einnahme informieren",
          "b": "Medikamente verändern",
          "c": "Diagnose stellen",
          "d": "Rezept ausstellen"
        },
        "correct": "a",
        "explanation": "Aufklärung gehört zur pflegerischen Verantwortung."
      },
      {
        "question": "Welche Patienten müssen bei der Medikamenteneinnahme besonders unterstützt werden?",
        "answers": {
          "a": "Patienten mit Vergesslichkeit oder eingeschränkter Feinmotorik",
          "b": "Gesunde Besucher",
          "c": "Ärzte",
          "d": "Reinigungskräfte"
        },
        "correct": "a",
        "explanation": "Einschränkungen können die sichere Einnahme verhindern."
      },
      {
        "question": "Warum ist die Patientenidentifikation vor der Medikamentengabe wichtig?",
        "answers": {
          "a": "Um Verwechslungen zu vermeiden.",
          "b": "Wegen der Dokumentation.",
          "c": "Nur bei Kindern.",
          "d": "Nur bei BTM."
        },
        "correct": "a",
        "explanation": "Der richtige Patient ist Bestandteil der 6-R-Regel."
      },
      {
        "question": "Was muss nach der Medikamentengabe erfolgen?",
        "answers": {
          "a": "Beobachtung des Patienten",
          "b": "Dokumentation",
          "c": "Kontrolle auf Nebenwirkungen",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Nach der Gabe sind Wirkung und mögliche Komplikationen zu überwachen."
      },
      {
        "question": "Wann ist die Beobachtung besonders wichtig?",
        "answers": {
          "a": "Bei Erst- und Zweitgabe eines neuen Medikaments",
          "b": "Nur bei Schmerzmitteln",
          "c": "Nur nachts",
          "d": "Nie"
        },
        "correct": "a",
        "explanation": "Neue Medikamente bergen ein erhöhtes Risiko für Nebenwirkungen."
      },
      {
        "question": "Welche Kenntnisse muss eine Pflegekraft über Medikamente besitzen?",
        "answers": {
          "a": "Wirkung",
          "b": "Nebenwirkungen",
          "c": "Wechselwirkungen",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Nur so können Komplikationen früh erkannt werden."
      },
      {
        "question": "Was ist bei Auffälligkeiten nach der Medikamentengabe zu tun?",
        "answers": {
          "a": "Arzt informieren, Therapie unterbrechen und dokumentieren",
          "b": "Abwarten",
          "c": "Medikament erneut geben",
          "d": "Nichts tun"
        },
        "correct": "a",
        "explanation": "Unerwünschte Arzneimittelwirkungen erfordern sofortiges Handeln."
      },
      {
        "question": "Was versteht man unter einer Indikation?",
        "answers": {
          "a": "Eine Nebenwirkung",
          "b": "Der Grund für die Anwendung eines Arzneimittels",
          "c": "Die Dosierung",
          "d": "Die Lagerung eines Medikaments"
        },
        "correct": "b",
        "explanation": "Die Indikation beschreibt den medizinischen Anlass für die Verordnung."
      },
      {
        "question": "Was ist eine Kontraindikation?",
        "answers": {
          "a": "Eine gewünschte Wirkung",
          "b": "Ein Grund, warum ein Medikament nicht angewendet werden darf",
          "c": "Eine Dosierungsanweisung",
          "d": "Eine Wechselwirkung"
        },
        "correct": "b",
        "explanation": "Kontraindikationen sprechen gegen die Anwendung eines Arzneimittels."
      },
      {
        "question": "Was ist eine Nebenwirkung?",
        "answers": {
          "a": "Eine gewünschte Wirkung",
          "b": "Eine unbeabsichtigte Wirkung bei bestimmungsgemäßem Gebrauch",
          "c": "Eine Überdosierung",
          "d": "Eine Allergie"
        },
        "correct": "b",
        "explanation": "Nebenwirkungen können trotz korrekter Anwendung auftreten."
      },
      {
        "question": "Was ist eine Wechselwirkung?",
        "answers": {
          "a": "Das Zusammenwirken zweier oder mehrerer Medikamente",
          "b": "Das Verfallsdatum eines Medikaments",
          "c": "Die Dosierung eines Medikaments",
          "d": "Eine Allergie"
        },
        "correct": "a",
        "explanation": "Arzneimittel können sich gegenseitig verstärken oder abschwächen."
      },
      {
        "question": "Was bedeutet Überdosierung?",
        "answers": {
          "a": "Zu geringe Medikamentenmenge",
          "b": "Einnahme einer zu hohen Medikamentenmenge",
          "c": "Richtige Dosierung",
          "d": "Medikament vergessen"
        },
        "correct": "b",
        "explanation": "Eine Überdosierung kann lebensbedrohlich sein."
      },
      {
        "question": "Was bedeutet Unterdosierung?",
        "answers": {
          "a": "Zu geringe Wirkstoffmenge",
          "b": "Zu hohe Wirkstoffmenge",
          "c": "Richtige Dosierung",
          "d": "Medikamentenwechsel"
        },
        "correct": "a",
        "explanation": "Die gewünschte Wirkung bleibt möglicherweise aus."
      },
      {
        "question": "Was versteht man unter Compliance bzw. Adhärenz?",
        "answers": {
          "a": "Der Patient hält sich an die vereinbarte Therapie.",
          "b": "Der Arzt schreibt ein Rezept.",
          "c": "Die Pflegekraft richtet Medikamente.",
          "d": "Medikamente werden entsorgt."
        },
        "correct": "a",
        "explanation": "Gute Adhärenz verbessert den Therapieerfolg."
      },
      {
        "question": "Warum ist Patientenaufklärung bei Medikamenten wichtig?",
        "answers": {
          "a": "Damit Patienten die Therapie verstehen und korrekt durchführen.",
          "b": "Nur wegen der Dokumentation.",
          "c": "Damit Medikamente schneller wirken.",
          "d": "Sie ist nicht notwendig."
        },
        "correct": "a",
        "explanation": "Informierte Patienten nehmen Medikamente zuverlässiger ein."
      },
      {
        "question": "Welche Applikationsform bedeutet \"oral\"?",
        "answers": {
          "a": "Über die Haut",
          "b": "Über den Mund",
          "c": "Über die Vene",
          "d": "Über den Muskel"
        },
        "correct": "b",
        "explanation": "Oral bedeutet Einnahme über den Mund."
      },
      {
        "question": "Welche Applikationsform bedeutet \"sublingual\"?",
        "answers": {
          "a": "Unter die Haut",
          "b": "Unter die Zunge",
          "c": "In den Muskel",
          "d": "In die Vene"
        },
        "correct": "b",
        "explanation": "Sublinguale Medikamente werden unter der Zunge resorbiert."
      },
      {
        "question": "Welche Applikationsform bedeutet \"rektal\"?",
        "answers": {
          "a": "Über den Mund",
          "b": "Über den Enddarm",
          "c": "Über die Vene",
          "d": "Über die Haut"
        },
        "correct": "b",
        "explanation": "Beispiele sind Zäpfchen oder Klysmen."
      },
      {
        "question": "Welche Applikationsform bedeutet \"vaginal\"?",
        "answers": {
          "a": "Über den Mund",
          "b": "Über die Scheide",
          "c": "Über die Vene",
          "d": "Über die Haut"
        },
        "correct": "b",
        "explanation": "Beispiele sind Vaginaltabletten oder Cremes."
      },
      {
        "question": "Welche Applikationsform bedeutet \"topisch\"?",
        "answers": {
          "a": "Auf die Haut oder Schleimhaut",
          "b": "In die Vene",
          "c": "In den Muskel",
          "d": "Unter die Zunge"
        },
        "correct": "a",
        "explanation": "Topische Arzneimittel wirken lokal."
      },
      {
        "question": "Welche Applikationsform bedeutet \"inhalativ\"?",
        "answers": {
          "a": "Über die Lunge",
          "b": "Über den Darm",
          "c": "Über den Muskel",
          "d": "Über die Haut"
        },
        "correct": "a",
        "explanation": "Das Medikament wird eingeatmet."
      },
      {
        "question": "Welche Applikationsform wirkt meist am schnellsten?",
        "answers": {
          "a": "Oral",
          "b": "Intravenös",
          "c": "Rektal",
          "d": "Topisch"
        },
        "correct": "b",
        "explanation": "Intravenöse Medikamente gelangen direkt in den Blutkreislauf."
      },
      {
        "question": "Was bedeutet i.v.?",
        "answers": {
          "a": "Intramuskulär",
          "b": "Intravenös",
          "c": "Inhalativ",
          "d": "Intrakutan"
        },
        "correct": "b",
        "explanation": "i.v. = Verabreichung in eine Vene."
      },
      {
        "question": "Was bedeutet i.m.?",
        "answers": {
          "a": "Intramuskulär",
          "b": "Intravenös",
          "c": "Intrakutan",
          "d": "Intraarteriell"
        },
        "correct": "a",
        "explanation": "Das Medikament wird in den Muskel injiziert."
      },
      {
        "question": "Was bedeutet s.c.?",
        "answers": {
          "a": "Subkutan",
          "b": "Sublingual",
          "c": "Septisch",
          "d": "Steril"
        },
        "correct": "a",
        "explanation": "Das Medikament wird in das Unterhautfettgewebe gespritzt."
      },
      {
        "question": "Was bedeutet i.c. bzw. i.d.?",
        "answers": {
          "a": "Intrakutan / Intradermal",
          "b": "Intramuskulär",
          "c": "Intravenös",
          "d": "Intraarteriell"
        },
        "correct": "a",
        "explanation": "Die Injektion erfolgt in die Haut."
      },
      {
        "question": "Welche Aussage zur intravenösen Medikamentengabe ist richtig?",
        "answers": {
          "a": "Sie wirkt langsamer als die orale Gabe.",
          "b": "Sie hat einen schnellen Wirkungseintritt und erfordert besondere Sorgfalt.",
          "c": "Sie darf jeder durchführen.",
          "d": "Sie erfolgt über den Magen."
        },
        "correct": "b",
        "explanation": "Die i.v.-Gabe wirkt sofort und birgt bei Fehlern ein erhöhtes Risiko."
      },
      {
        "question": "Welche Darreichungsform wird geschluckt?",
        "answers": {
          "a": "Salbe",
          "b": "Tablette",
          "c": "Augentropfen",
          "d": "Zäpfchen"
        },
        "correct": "b",
        "explanation": "Tabletten werden oral eingenommen und im Magen-Darm-Trakt aufgenommen."
      },
      {
        "question": "Welche Darreichungsform wird unter die Zunge gelegt?",
        "answers": {
          "a": "Kapsel",
          "b": "Sublingualtablette",
          "c": "Dragee",
          "d": "Brausetablette"
        },
        "correct": "b",
        "explanation": "Sublinguale Medikamente wirken schnell über die Mundschleimhaut."
      },
      {
        "question": "Welche Darreichungsform muss vor der Einnahme in Wasser aufgelöst werden?",
        "answers": {
          "a": "Filmtablette",
          "b": "Brausetablette",
          "c": "Retardtablette",
          "d": "Kapsel"
        },
        "correct": "b",
        "explanation": "Brausetabletten werden vollständig in Wasser gelöst."
      },
      {
        "question": "Welche Aussage über Retardtabletten ist richtig?",
        "answers": {
          "a": "Sie dürfen grundsätzlich zerkleinert werden.",
          "b": "Sie geben den Wirkstoff verzögert frei.",
          "c": "Sie wirken nur 10 Minuten.",
          "d": "Sie müssen gekaut werden."
        },
        "correct": "b",
        "explanation": "Retardpräparate geben den Wirkstoff langsam über längere Zeit ab."
      },
      {
        "question": "Warum dürfen Retardtabletten meist nicht geteilt oder zerkleinert werden?",
        "answers": {
          "a": "Wegen des Geschmacks",
          "b": "Die verzögerte Wirkstofffreisetzung geht verloren.",
          "c": "Sie werden dadurch billiger.",
          "d": "Es gibt keinen Grund."
        },
        "correct": "b",
        "explanation": "Das Zerkleinern kann zu einer gefährlichen Überdosierung führen."
      },
      {
        "question": "Welche Aussage über magensaftresistente Tabletten stimmt?",
        "answers": {
          "a": "Sie dürfen immer zerkleinert werden.",
          "b": "Sie lösen sich erst im Darm auf.",
          "c": "Sie wirken nur lokal im Mund.",
          "d": "Sie enthalten keinen Wirkstoff."
        },
        "correct": "b",
        "explanation": "Der Überzug schützt den Wirkstoff vor der Magensäure."
      },
      {
        "question": "Warum dürfen magensaftresistente Tabletten meist nicht geteilt werden?",
        "answers": {
          "a": "Der Schutzüberzug wird zerstört.",
          "b": "Sie schmecken besser.",
          "c": "Sie wirken schneller.",
          "d": "Es spielt keine Rolle."
        },
        "correct": "a",
        "explanation": "Der magensaftresistente Überzug muss erhalten bleiben."
      },
      {
        "question": "Welche Darreichungsform eignet sich besonders für Patienten mit Schluckstörungen?",
        "answers": {
          "a": "Große Tabletten",
          "b": "Flüssige Arzneimittel",
          "c": "Retardtabletten",
          "d": "Dragees"
        },
        "correct": "b",
        "explanation": "Flüssige Medikamente lassen sich häufig leichter einnehmen."
      },
      {
        "question": "Was ist eine Suspension?",
        "answers": {
          "a": "Eine klare Lösung",
          "b": "Ein Gemisch aus Flüssigkeit und festen, nicht gelösten Teilchen",
          "c": "Eine Salbe",
          "d": "Ein Pulver"
        },
        "correct": "b",
        "explanation": "Suspensionen müssen vor Gebrauch häufig geschüttelt werden."
      },
      {
        "question": "Warum müssen Suspensionen vor Gebrauch geschüttelt werden?",
        "answers": {
          "a": "Damit sie besser schmecken.",
          "b": "Damit sich der Wirkstoff gleichmäßig verteilt.",
          "c": "Wegen der Farbe.",
          "d": "Damit sie wärmer werden."
        },
        "correct": "b",
        "explanation": "Feste Bestandteile setzen sich am Boden ab."
      },
      {
        "question": "Welche Darreichungsform wird auf die Haut aufgetragen?",
        "answers": {
          "a": "Salbe",
          "b": "Tablette",
          "c": "Kapsel",
          "d": "Tropfen"
        },
        "correct": "a",
        "explanation": "Salben wirken lokal auf der Haut."
      },
      {
        "question": "Welche Darreichungsform wird in die Augen gegeben?",
        "answers": {
          "a": "Nasenspray",
          "b": "Augentropfen",
          "c": "Ohrentropfen",
          "d": "Zäpfchen"
        },
        "correct": "b",
        "explanation": "Augentropfen werden direkt in den Bindehautsack eingebracht."
      },
      {
        "question": "Welche Darreichungsform wird in den Gehörgang eingebracht?",
        "answers": {
          "a": "Augentropfen",
          "b": "Ohrentropfen",
          "c": "Nasenspray",
          "d": "Salbe"
        },
        "correct": "b",
        "explanation": "Ohrentropfen dienen der lokalen Behandlung des Ohres."
      },
      {
        "question": "Welche Darreichungsform wird in die Nase eingebracht?",
        "answers": {
          "a": "Nasenspray",
          "b": "Salbe",
          "c": "Tablette",
          "d": "Kapsel"
        },
        "correct": "a",
        "explanation": "Nasensprays wirken lokal an der Nasenschleimhaut."
      },
      {
        "question": "Welche Darreichungsform wird inhaliert?",
        "answers": {
          "a": "Dosieraerosol",
          "b": "Zäpfchen",
          "c": "Kapsel",
          "d": "Salbe"
        },
        "correct": "a",
        "explanation": "Inhalative Medikamente gelangen direkt in die Atemwege."
      },
      {
        "question": "Welchen Vorteil hat die Inhalation?",
        "answers": {
          "a": "Direkte Wirkung an den Atemwegen",
          "b": "Langsamster Wirkungseintritt",
          "c": "Nur Wirkung im Magen",
          "d": "Keine Nebenwirkungen"
        },
        "correct": "a",
        "explanation": "Der Wirkstoff gelangt unmittelbar an den Wirkort."
      },
      {
        "question": "Was ist ein transdermales Pflaster?",
        "answers": {
          "a": "Ein Pflaster, das den Wirkstoff über die Haut in den Körper abgibt.",
          "b": "Ein normales Wundpflaster.",
          "c": "Ein Verband.",
          "d": "Eine Salbe."
        },
        "correct": "a",
        "explanation": "Beispiele sind Fentanyl- oder Nikotinpflaster."
      },
      {
        "question": "Welche Aussage über Medikamentenpflaster ist richtig?",
        "answers": {
          "a": "Sie dürfen beliebig zerschnitten werden.",
          "b": "Sie müssen regelmäßig nach Anordnung gewechselt werden.",
          "c": "Sie wirken nur wenige Minuten.",
          "d": "Sie enthalten keinen Wirkstoff."
        },
        "correct": "b",
        "explanation": "Das Wechselintervall richtet sich nach der Verordnung."
      },
      {
        "question": "Warum sollten alte Medikamentenpflaster immer entfernt werden?",
        "answers": {
          "a": "Um eine Überdosierung zu vermeiden.",
          "b": "Wegen der Hautfarbe.",
          "c": "Damit sie besser kleben.",
          "d": "Es ist nicht notwendig."
        },
        "correct": "a",
        "explanation": "Mehrere Pflaster können zu einer zu hohen Wirkstoffmenge führen."
      },
      {
        "question": "Welche Aussage über die Medikamentengabe trifft zu?",
        "answers": {
          "a": "Jede Darreichungsform darf zerkleinert werden.",
          "b": "Die Darreichungsform beeinflusst Wirkungseintritt und Wirkungsdauer.",
          "c": "Alle Medikamente wirken gleich schnell.",
          "d": "Tabletten wirken immer schneller als i.v.-Medikamente."
        },
        "correct": "b",
        "explanation": "Die Applikationsform bestimmt maßgeblich, wie schnell und wie lange ein Medikament wirkt."
      },
      {
        "question": "Welche Aussage zur Medikamentendokumentation ist richtig?",
        "answers": {
          "a": "Sie erfolgt erst am Ende der Schicht.",
          "b": "Sie erfolgt unmittelbar nach der Verabreichung.",
          "c": "Sie ist freiwillig.",
          "d": "Sie erfolgt nur bei BtM."
        },
        "correct": "b",
        "explanation": "Medikamente werden direkt nach der Gabe dokumentiert, um Fehler zu vermeiden."
      },
      {
        "question": "Warum ist eine lückenlose Dokumentation wichtig?",
        "answers": {
          "a": "Sie dient der Patientensicherheit und der rechtlichen Absicherung.",
          "b": "Nur für die Krankenkasse.",
          "c": "Nur für den Arzt.",
          "d": "Sie ist nicht notwendig."
        },
        "correct": "a",
        "explanation": "Nicht dokumentiert gilt rechtlich häufig als nicht durchgeführt."
      },
      {
        "question": "Was muss bei einer Medikamentengabe dokumentiert werden?",
        "answers": {
          "a": "Medikament",
          "b": "Dosierung",
          "c": "Zeitpunkt und Besonderheiten",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Eine vollständige Dokumentation umfasst alle relevanten Angaben."
      },
      {
        "question": "Wie wird vorgegangen, wenn ein Patient die Einnahme eines Medikaments verweigert?",
        "answers": {
          "a": "Medikament heimlich verabreichen.",
          "b": "Arzt informieren und die Verweigerung dokumentieren.",
          "c": "Medikament entsorgen.",
          "d": "Doppelte Dosis später geben."
        },
        "correct": "b",
        "explanation": "Die Verweigerung muss dokumentiert und ärztlich abgeklärt werden."
      },
      {
        "question": "Was ist vor der Gabe eines Medikaments zusätzlich zu beachten?",
        "answers": {
          "a": "Allergien des Patienten",
          "b": "Lieblingsessen",
          "c": "Beruf",
          "d": "Familienstand"
        },
        "correct": "a",
        "explanation": "Bekannte Allergien können lebensbedrohliche Reaktionen verhindern helfen."
      },
      {
        "question": "Welche Patientengruppe reagiert häufig empfindlicher auf Medikamente?",
        "answers": {
          "a": "Junge Erwachsene",
          "b": "Ältere Menschen",
          "c": "Sportler",
          "d": "Gesunde Jugendliche"
        },
        "correct": "b",
        "explanation": "Im Alter verändern sich Pharmakokinetik und Pharmakodynamik."
      },
      {
        "question": "Warum benötigen ältere Menschen oft niedrigere Medikamentendosen?",
        "answers": {
          "a": "Wegen veränderter Leber- und Nierenfunktion",
          "b": "Weil Medikamente schlechter schmecken",
          "c": "Wegen der Körpergröße",
          "d": "Sie benötigen grundsätzlich keine Medikamente."
        },
        "correct": "a",
        "explanation": "Der Wirkstoff wird langsamer abgebaut und ausgeschieden."
      },
      {
        "question": "Welche Aussage über Nebenwirkungen ist richtig?",
        "answers": {
          "a": "Sie treten nur bei Überdosierungen auf.",
          "b": "Sie können auch bei richtiger Dosierung auftreten.",
          "c": "Sie sind immer harmlos.",
          "d": "Sie müssen nicht dokumentiert werden."
        },
        "correct": "b",
        "explanation": "Nebenwirkungen sind unerwünschte Arzneimittelwirkungen trotz korrekter Anwendung."
      },
      {
        "question": "Was sollte bei Verdacht auf eine schwere allergische Reaktion erfolgen?",
        "answers": {
          "a": "Medikament weitergeben.",
          "b": "Sofort Arzt verständigen und Notfallmaßnahmen einleiten.",
          "c": "Bis morgen warten.",
          "d": "Medikament verdoppeln."
        },
        "correct": "b",
        "explanation": "Eine Anaphylaxie ist lebensbedrohlich und erfordert sofortiges Handeln."
      },
      {
        "question": "Was ist eine Allergie auf Medikamente?",
        "answers": {
          "a": "Eine normale Wirkung",
          "b": "Eine überschießende Reaktion des Immunsystems",
          "c": "Eine Überdosierung",
          "d": "Eine Wechselwirkung"
        },
        "correct": "b",
        "explanation": "Arzneimittelallergien können von Hautausschlag bis Anaphylaxie reichen."
      },
      {
        "question": "Welche Aussage zu Betäubungsmitteln (BtM) ist richtig?",
        "answers": {
          "a": "Sie dürfen offen gelagert werden.",
          "b": "Sie müssen besonders sicher gelagert und dokumentiert werden.",
          "c": "Sie benötigen keine Dokumentation.",
          "d": "Jeder darf sie mitnehmen."
        },
        "correct": "b",
        "explanation": "Für BtM gelten strenge gesetzliche Vorschriften."
      },
      {
        "question": "Wie müssen Betäubungsmittel gelagert werden?",
        "answers": {
          "a": "Im normalen Medikamentenschrank",
          "b": "In einem verschlossenen BtM-Schrank",
          "c": "Im Kühlschrank",
          "d": "In der Patientenschublade"
        },
        "correct": "b",
        "explanation": "Der Zugang muss besonders gesichert sein."
      },
      {
        "question": "Was ist bei Betäubungsmitteln besonders wichtig?",
        "answers": {
          "a": "Lückenlose Dokumentation jeder Entnahme",
          "b": "Keine Dokumentation",
          "c": "Nur mündliche Übergabe",
          "d": "Wöchentliche Kontrolle"
        },
        "correct": "a",
        "explanation": "Jede Entnahme muss nachvollziehbar dokumentiert werden."
      },
      {
        "question": "Welche Aussage über Verfallsdaten ist richtig?",
        "answers": {
          "a": "Abgelaufene Medikamente dürfen weiter verwendet werden.",
          "b": "Das Verfallsdatum muss vor der Verabreichung kontrolliert werden.",
          "c": "Nur BtM besitzen ein Verfallsdatum.",
          "d": "Verfallsdaten spielen keine Rolle."
        },
        "correct": "b",
        "explanation": "Abgelaufene Medikamente dürfen nicht mehr angewendet werden."
      },
      {
        "question": "Wie sollten Medikamente gelagert werden?",
        "answers": {
          "a": "Nach Herstellerangaben",
          "b": "In direkter Sonne",
          "c": "Immer im Kühlschrank",
          "d": "Neben der Heizung"
        },
        "correct": "a",
        "explanation": "Temperatur und Licht beeinflussen die Wirksamkeit."
      },
      {
        "question": "Welche Aussage zur Kühlkette ist richtig?",
        "answers": {
          "a": "Kühlpflichtige Medikamente dürfen längere Zeit ungekühlt bleiben.",
          "b": "Die vorgeschriebene Lagertemperatur muss eingehalten werden.",
          "c": "Kühlung ist unwichtig.",
          "d": "Nur Insulin darf gekühlt werden."
        },
        "correct": "b",
        "explanation": "Unterbrechungen der Kühlkette können Medikamente unwirksam machen."
      },
      {
        "question": "Wer trägt die Verantwortung für die korrekte Verabreichung eines Medikaments?",
        "answers": {
          "a": "Die Pflegekraft, die das Medikament verabreicht",
          "b": "Der Patient",
          "c": "Der Apotheker",
          "d": "Der Hersteller"
        },
        "correct": "a",
        "explanation": "Die Pflegekraft trägt Verantwortung für die sichere Durchführung der Medikamentengabe."
      },
      {
        "question": "Was sollte vor jeder Medikamentengabe geprüft werden?",
        "answers": {
          "a": "Name des Patienten",
          "b": "Medikament",
          "c": "Dosierung und Verordnung",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Dies entspricht der sicheren Medikamentengabe nach der 6-R-Regel."
      },
      {
        "question": "Welche Aussage zur Medikamentensicherheit ist richtig?",
        "answers": {
          "a": "Medikamente dürfen vorbereitet werden, obwohl die Beschriftung fehlt.",
          "b": "Unbeschriftete Medikamente dürfen nicht verabreicht werden.",
          "c": "Beschriftungen sind unwichtig.",
          "d": "Medikamente dürfen gemischt werden."
        },
        "correct": "b",
        "explanation": "Jede Arznei muss eindeutig identifizierbar sein."
      },
      {
        "question": "Welches Ziel verfolgt ein sicheres Medikamentenmanagement?",
        "answers": {
          "a": "Patientensicherheit erhöhen und Medikationsfehler vermeiden",
          "b": "Kosten sparen",
          "c": "Dokumentation verkürzen",
          "d": "Medikamente schneller aufbrauchen"
        },
        "correct": "a",
        "explanation": "Sorgfältiger Umgang mit Arzneimitteln verhindert Fehler und schützt Patienten."
      },
      {
        "question": "Was bedeutet der Begriff „analgetisch“?",
        "answers": {
          "a": "Entzündungshemmend",
          "b": "Schmerzlindernd",
          "c": "Fiebersenkend",
          "d": "Beruhigend"
        },
        "correct": "b",
        "explanation": "Analgetika lindern oder beseitigen Schmerzen."
      },
      {
        "question": "Was bedeutet „antipyretisch“?",
        "answers": {
          "a": "Blutdrucksenkend",
          "b": "Fiebersenkend",
          "c": "Beruhigend",
          "d": "Schlafanstoßend"
        },
        "correct": "b",
        "explanation": "Antipyretika senken erhöhte Körpertemperatur."
      },
      {
        "question": "Was bedeutet „antiphlogistisch“ bzw. „antiinflammatorisch“?",
        "answers": {
          "a": "Entzündungshemmend",
          "b": "Schmerzfördernd",
          "c": "Blutverdünnend",
          "d": "Beruhigend"
        },
        "correct": "a",
        "explanation": "Antiphlogistische Medikamente hemmen Entzündungen."
      },
      {
        "question": "Welches Medikament wirkt analgetisch und antipyretisch, jedoch kaum antiphlogistisch?",
        "answers": {
          "a": "Paracetamol",
          "b": "Diclofenac",
          "c": "Ibuprofen",
          "d": "ASS"
        },
        "correct": "a",
        "explanation": "Paracetamol wirkt schmerzlindernd und fiebersenkend, besitzt aber kaum entzündungshemmende Wirkung."
      },
      {
        "question": "Welches Medikament gehört zu den NSAR (Nichtsteroidale Antirheumatika)?",
        "answers": {
          "a": "Morphin",
          "b": "Ibuprofen",
          "c": "Fentanyl",
          "d": "Tramadol"
        },
        "correct": "b",
        "explanation": "Ibuprofen gehört zu den NSAR und wirkt analgetisch, antipyretisch und antiphlogistisch."
      },
      {
        "question": "Welche schwerwiegende Nebenwirkung kann Paracetamol bei Überdosierung verursachen?",
        "answers": {
          "a": "Leberversagen",
          "b": "Herzinfarkt",
          "c": "Asthma",
          "d": "Nierensteine"
        },
        "correct": "a",
        "explanation": "Paracetamol kann in hoher Dosierung schwere Leberschäden verursachen."
      },
      {
        "question": "Welche seltene, aber gefährliche Nebenwirkung besitzt Metamizol?",
        "answers": {
          "a": "Agranulozytose",
          "b": "Hypertonie",
          "c": "Diabetes",
          "d": "Asthma"
        },
        "correct": "a",
        "explanation": "Metamizol kann eine lebensbedrohliche Agranulozytose verursachen."
      },
      {
        "question": "Welche Wirkung besitzen Opioide?",
        "answers": {
          "a": "Schmerzlinderung",
          "b": "Fiebersenkung",
          "c": "Antibiotische Wirkung",
          "d": "Blutdrucksteigerung"
        },
        "correct": "a",
        "explanation": "Opioide gehören zu den stärksten Schmerzmitteln."
      },
      {
        "question": "Welche Nebenwirkung tritt unter Opioiden besonders häufig auf?",
        "answers": {
          "a": "Obstipation",
          "b": "Durchfall",
          "c": "Hyperaktivität",
          "d": "Gewichtsverlust"
        },
        "correct": "a",
        "explanation": "Verstopfung gehört zu den häufigsten Nebenwirkungen von Opioiden."
      },
      {
        "question": "Welche weitere typische Nebenwirkung von Opioiden ist besonders gefährlich?",
        "answers": {
          "a": "Atemdepression",
          "b": "Husten",
          "c": "Bluthochdruck",
          "d": "Hyperthermie"
        },
        "correct": "a",
        "explanation": "Eine Atemdepression kann lebensbedrohlich sein."
      },
      {
        "question": "Was ist ein Antidot?",
        "answers": {
          "a": "Ein Schmerzmittel",
          "b": "Ein Gegenmittel bei Vergiftungen",
          "c": "Ein Antibiotikum",
          "d": "Ein Beruhigungsmittel"
        },
        "correct": "b",
        "explanation": "Antidote heben die Wirkung bestimmter Gifte oder Medikamente auf."
      },
      {
        "question": "Welches Antidot wird bei einer Opioidvergiftung eingesetzt?",
        "answers": {
          "a": "Flumazenil",
          "b": "Naloxon",
          "c": "Atropin",
          "d": "Adrenalin"
        },
        "correct": "b",
        "explanation": "Naloxon hebt die Wirkung von Opioiden rasch auf."
      },
      {
        "question": "Welche Prophylaxe gehört grundsätzlich zur Opioidtherapie?",
        "answers": {
          "a": "Obstipationsprophylaxe",
          "b": "Dekubitusprophylaxe",
          "c": "Aspirationsprophylaxe",
          "d": "Pneumonieprophylaxe"
        },
        "correct": "a",
        "explanation": "Fast alle Patienten benötigen wegen der Verstopfungsgefahr ein Laxans."
      },
      {
        "question": "Welche weitere Prophylaxe ist zu Beginn einer Opioidtherapie häufig sinnvoll?",
        "answers": {
          "a": "Antiemetische Prophylaxe",
          "b": "Antibiotikaprophylaxe",
          "c": "Insulinprophylaxe",
          "d": "Antikoagulation"
        },
        "correct": "a",
        "explanation": "Übelkeit und Erbrechen treten besonders zu Therapiebeginn häufig auf."
      },
      {
        "question": "Wie viele Stufen besitzt das WHO-Stufenschema zur Schmerztherapie?",
        "answers": {
          "a": "Zwei",
          "b": "Drei",
          "c": "Vier",
          "d": "Fünf"
        },
        "correct": "b",
        "explanation": "Die WHO empfiehlt ein dreistufiges Schema zur Schmerztherapie."
      },
      {
        "question": "Welche Medikamente werden in WHO-Stufe 1 eingesetzt?",
        "answers": {
          "a": "Nicht-Opioid-Analgetika",
          "b": "Schwache Opioide",
          "c": "Starke Opioide",
          "d": "Betäubungsmittel"
        },
        "correct": "a",
        "explanation": "Stufe 1 umfasst z. B. Paracetamol oder Ibuprofen."
      },
      {
        "question": "Welche Medikamente gehören zur WHO-Stufe 2?",
        "answers": {
          "a": "Nicht-Opioide",
          "b": "Schwache Opioide",
          "c": "Starke Opioide",
          "d": "Antibiotika"
        },
        "correct": "b",
        "explanation": "Beispiele sind Tramadol oder Tilidin."
      },
      {
        "question": "Welche Medikamente gehören zur WHO-Stufe 3?",
        "answers": {
          "a": "Morphin oder Fentanyl",
          "b": "Ibuprofen",
          "c": "Paracetamol",
          "d": "ASS"
        },
        "correct": "a",
        "explanation": "Starke Opioide werden bei starken Schmerzen eingesetzt."
      },
      {
        "question": "Wie lange ist ein BtM-Rezept in Deutschland gültig?",
        "answers": {
          "a": "3 Tage",
          "b": "7 Tage",
          "c": "14 Tage",
          "d": "30 Tage"
        },
        "correct": "b",
        "explanation": "Ein Betäubungsmittelrezept muss innerhalb von sieben Tagen eingelöst werden."
      },
      {
        "question": "Welche Aussage zur BtM-Dokumentation ist richtig?",
        "answers": {
          "a": "Jede Entnahme und Gabe muss vollständig dokumentiert werden.",
          "b": "Dokumentation ist freiwillig.",
          "c": "Nur der Arzt dokumentiert.",
          "d": "Dokumentiert wird nur einmal pro Woche."
        },
        "correct": "a",
        "explanation": "Für Betäubungsmittel gelten besonders strenge gesetzliche Dokumentationspflichten."
      }
    ]
  },
  "notfallmanagement": {
    "label": "Notfallmanagement",
    "questions": [
      {
        "question": "Was ist eine Katastrophe?",
        "answers": {
          "a": "Ein kleiner Verkehrsunfall",
          "b": "Ein unerwartetes Ereignis, das Leben, Gesundheit, Umwelt oder bedeutende Rechtsgüter gefährdet und die örtlichen Behörden überfordert",
          "c": "Jeder Krankenhausaufenthalt",
          "d": "Jeder Brand"
        },
        "correct": "b",
        "explanation": "Eine Katastrophe kann von den örtlichen Behörden allein nicht bewältigt werden."
      },
      {
        "question": "Was bedeutet MANV?",
        "answers": {
          "a": "Medizinische Akutversorgung",
          "b": "Massenanfall von Verletzten",
          "c": "Mobiler Notarztwagen",
          "d": "Medizinische Allgemeinversorgung"
        },
        "correct": "b",
        "explanation": "MANV steht für Massenanfall von Verletzten."
      },
      {
        "question": "Wann spricht man von einem MANV?",
        "answers": {
          "a": "Bereits bei zwei Verletzten",
          "b": "Wenn die Zahl der Verletzten den örtlichen Rettungsdienst überfordert",
          "c": "Nur bei Naturkatastrophen",
          "d": "Nur bei Terroranschlägen"
        },
        "correct": "b",
        "explanation": "Entscheidend ist die Überforderung der verfügbaren Rettungsmittel."
      },
      {
        "question": "Welches Ereignis kann einen MANV auslösen?",
        "answers": {
          "a": "Verkehrsunfall mit vielen Beteiligten",
          "b": "Zugunglück",
          "c": "Großbrand",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Viele verschiedene Ereignisse können einen MANV verursachen."
      },
      {
        "question": "Wie viele Verletzte umfasst MANV 1?",
        "answers": {
          "a": "1–4",
          "b": "5–10",
          "c": "11–20",
          "d": "Über 50"
        },
        "correct": "b",
        "explanation": "MANV 1 umfasst 5–10 Verletzte."
      },
      {
        "question": "Wie viele Verletzte umfasst MANV 2?",
        "answers": {
          "a": "5–10",
          "b": "11–20",
          "c": "21–50",
          "d": "Über 100"
        },
        "correct": "b",
        "explanation": "MANV 2 = 11–20 Verletzte."
      },
      {
        "question": "Wie viele Verletzte umfasst MANV 3?",
        "answers": {
          "a": "21–50",
          "b": "30–40",
          "c": "Über 100",
          "d": "10–20"
        },
        "correct": "a",
        "explanation": "MANV 3 umfasst 21–50 Verletzte."
      },
      {
        "question": "Ab wann spricht man von MANV 4?",
        "answers": {
          "a": "Ab 20 Verletzten",
          "b": "Ab 30 Verletzten",
          "c": "Mehr als 50 Verletzte",
          "d": "Mehr als 100 Verletzte"
        },
        "correct": "c",
        "explanation": "MANV 4 liegt bei mehr als 50 Verletzten vor."
      },
      {
        "question": "Was ist das wichtigste Ziel bei einem MANV?",
        "answers": {
          "a": "Möglichst viele Menschenleben retten",
          "b": "Möglichst schnell dokumentieren",
          "c": "Alle Patienten gleichzeitig behandeln",
          "d": "Nur Schwerverletzte versorgen"
        },
        "correct": "a",
        "explanation": "Oberstes Ziel ist die Rettung möglichst vieler Menschenleben."
      },
      {
        "question": "Welches weitere Ziel verfolgt die Versorgung beim MANV?",
        "answers": {
          "a": "Kosten sparen",
          "b": "Physische und psychische Folgeschäden minimieren",
          "c": "Medikamente sparen",
          "d": "Krankenhaus entlasten"
        },
        "correct": "b",
        "explanation": "Auch Folgeschäden sollen möglichst verhindert werden."
      },
      {
        "question": "Welche Regel gilt für Ersthelfer bei einem MANV?",
        "answers": {
          "a": "ABCDE-Regel",
          "b": "GAMS-Regel",
          "c": "FAST-Regel",
          "d": "SAMPLE-Regel"
        },
        "correct": "b",
        "explanation": "Die GAMS-Regel strukturiert das Vorgehen des Ersthelfers."
      },
      {
        "question": "Wofür steht das „G\" der GAMS-Regel?",
        "answers": {
          "a": "Gefahr erkennen",
          "b": "Gerät holen",
          "c": "Gruppe bilden",
          "d": "Gesundheitszustand prüfen"
        },
        "correct": "a",
        "explanation": "Zuerst müssen Gefahren erkannt werden."
      },
      {
        "question": "Wofür steht das „A\" der GAMS-Regel?",
        "answers": {
          "a": "Atmung prüfen",
          "b": "Alarmieren",
          "c": "Absichern der Einsatzstelle",
          "d": "Anamnese"
        },
        "correct": "c",
        "explanation": "Die Einsatzstelle muss abgesichert werden."
      },
      {
        "question": "Wofür steht das „M\" der GAMS-Regel?",
        "answers": {
          "a": "Medikamente geben",
          "b": "Menschenrettung unter Eigenschutz",
          "c": "Monitoring",
          "d": "Meldung schreiben"
        },
        "correct": "b",
        "explanation": "Menschenrettung erfolgt immer unter Eigenschutz."
      },
      {
        "question": "Wofür steht das „S\" der GAMS-Regel?",
        "answers": {
          "a": "Sauerstoff geben",
          "b": "Spezialkräfte nachfordern",
          "c": "Schock behandeln",
          "d": "Sichtung durchführen"
        },
        "correct": "b",
        "explanation": "Spezialkräfte müssen rechtzeitig alarmiert werden."
      },
      {
        "question": "Was hat bei jedem Notfalleinsatz oberste Priorität?",
        "answers": {
          "a": "Dokumentation",
          "b": "Eigenschutz",
          "c": "Medikamentengabe",
          "d": "Blutdruck messen"
        },
        "correct": "b",
        "explanation": "Nur wer sich selbst schützt, kann anderen helfen."
      },
      {
        "question": "Was erfolgt nach der Rettung aus dem Gefahrenbereich?",
        "answers": {
          "a": "Heimweg",
          "b": "Sammlung der Hilfebedürftigen",
          "c": "Medikamentengabe",
          "d": "Röntgen"
        },
        "correct": "b",
        "explanation": "Verletzte werden außerhalb des Gefahrenbereichs gesammelt."
      },
      {
        "question": "Was bedeutet Triage?",
        "answers": {
          "a": "Medikamentengabe",
          "b": "Sichtung und Einteilung nach Verletzungsschwere",
          "c": "Transport",
          "d": "Reanimation"
        },
        "correct": "b",
        "explanation": "Die Triage dient der Priorisierung der Patienten."
      },
      {
        "question": "Welches Ziel verfolgt die Triage?",
        "answers": {
          "a": "Alle gleichzeitig behandeln",
          "b": "Möglichst viele Menschenleben retten",
          "c": "Dokumentation vereinfachen",
          "d": "Krankenhaus entlasten"
        },
        "correct": "b",
        "explanation": "Die verfügbaren Ressourcen werden sinnvoll eingesetzt."
      },
      {
        "question": "Wer entwickelte das Triage-System ursprünglich?",
        "answers": {
          "a": "Florence Nightingale",
          "b": "Dominique Jean Larrey",
          "c": "Rudolf Virchow",
          "d": "Henry Dunant"
        },
        "correct": "b",
        "explanation": "Dominique Jean Larrey entwickelte das System während der napoleonischen Kriege."
      },
      {
        "question": "Wie viele Sichtungskategorien gibt es bei der Triage?",
        "answers": {
          "a": "2",
          "b": "3",
          "c": "4 (bzw. 5 mit „Tot“)",
          "d": "6"
        },
        "correct": "c",
        "explanation": "Die Triage umfasst vier Hauptkategorien, teilweise ergänzt um die Kategorie „Tot“."
      },
      {
        "question": "Welche Sichtungskategorie erhält ein Patient mit massiven Blutungen und Atemwegsverlegung?",
        "answers": {
          "a": "Grün",
          "b": "Gelb",
          "c": "Rot",
          "d": "Schwarz"
        },
        "correct": "c",
        "explanation": "Akute vitale Bedrohungen gehören zur roten Kategorie und benötigen Sofortbehandlung."
      },
      {
        "question": "Welche Farbe kennzeichnet Patienten mit aufgeschobener Behandlung?",
        "answers": {
          "a": "Rot",
          "b": "Gelb",
          "c": "Grün",
          "d": "Schwarz"
        },
        "correct": "b",
        "explanation": "Gelb bedeutet schwer verletzt oder erkrankt, aber nicht unmittelbar lebensbedrohlich."
      },
      {
        "question": "Welche Farbe erhalten leicht verletzte Patienten?",
        "answers": {
          "a": "Rot",
          "b": "Gelb",
          "c": "Grün",
          "d": "Schwarz"
        },
        "correct": "c",
        "explanation": "Grün steht für leicht verletzte Patienten, die später ambulant behandelt werden können."
      },
      {
        "question": "Welche Farbe steht für Patienten ohne Überlebenschance?",
        "answers": {
          "a": "Gelb",
          "b": "Grün",
          "c": "Rot",
          "d": "Schwarz"
        },
        "correct": "d",
        "explanation": "Schwarz kennzeichnet Patienten ohne Überlebenschance bzw. Verstorbene."
      },
      {
        "question": "Welches Ziel verfolgt die Patientenablage?",
        "answers": {
          "a": "Operation",
          "b": "Erstversorgung außerhalb des Gefahrenbereichs",
          "c": "Intensivpflege",
          "d": "Entlassung"
        },
        "correct": "b",
        "explanation": "Die Patientenablage dient der Sammlung und Erstversorgung der Verletzten."
      },
      {
        "question": "Welche Aufgabe hat der Behandlungsplatz?",
        "answers": {
          "a": "Patienten registrieren",
          "b": "Notfallmedizinische Versorgung der Verletzten",
          "c": "Medikamente lagern",
          "d": "Feuerwehr koordinieren"
        },
        "correct": "b",
        "explanation": "Dort erfolgt die medizinische Versorgung vor dem Transport ins Krankenhaus."
      },
      {
        "question": "Welche Aufgabe übernimmt die Transportorganisation?",
        "answers": {
          "a": "Verpflegung der Einsatzkräfte",
          "b": "Koordination der Verteilung der Patienten auf Krankenhäuser",
          "c": "Dokumentation",
          "d": "Reinigung des Einsatzortes"
        },
        "correct": "b",
        "explanation": "Patienten werden auf geeignete Kliniken verteilt."
      },
      {
        "question": "Wer übernimmt die Einsatzleitung bei einem MANV?",
        "answers": {
          "a": "Feuerwehrchef",
          "b": "Leitender Notarzt",
          "c": "Bürgermeister",
          "d": "Polizei"
        },
        "correct": "b",
        "explanation": "Die medizinische Einsatzleitung erfolgt durch den leitenden Notarzt."
      },
      {
        "question": "Welche Organisation gehört typischerweise zum Bereitstellungsraum?",
        "answers": {
          "a": "THW",
          "b": "DRK",
          "c": "DLRG",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Diese Organisationen unterstützen den Einsatz im Katastrophenschutz."
      },
      {
        "question": "Welche Verletzungen treten bei einem MANV besonders häufig auf?",
        "answers": {
          "a": "Knochenbrüche",
          "b": "Zahnschmerzen",
          "c": "Hautpilz",
          "d": "Kurzsichtigkeit"
        },
        "correct": "a",
        "explanation": "Frakturen gehören zu den häufigsten Verletzungen."
      },
      {
        "question": "Welche Komplikation kann bei schweren Weichteilverletzungen auftreten?",
        "answers": {
          "a": "Asthma",
          "b": "Kompartmentsyndrom",
          "c": "Diabetes",
          "d": "Demenz"
        },
        "correct": "b",
        "explanation": "Das Kompartmentsyndrom ist eine gefürchtete Komplikation."
      },
      {
        "question": "Welche Organverletzungen können zu massivem Blutverlust führen?",
        "answers": {
          "a": "Leber- und Milzruptur",
          "b": "Blinddarmentzündung",
          "c": "Mandelentzündung",
          "d": "Gastritis"
        },
        "correct": "a",
        "explanation": "Verletzungen innerer Organe verursachen oft lebensbedrohliche Blutungen."
      },
      {
        "question": "Welche Komplikation kann durch Rippenfrakturen entstehen?",
        "answers": {
          "a": "Diabetes",
          "b": "Pneumothorax",
          "c": "Schlaganfall",
          "d": "Nierenversagen"
        },
        "correct": "b",
        "explanation": "Rippen können die Lunge verletzen und einen Pneumothorax verursachen."
      },
      {
        "question": "Was bedeutet Polytrauma?",
        "answers": {
          "a": "Mehrere lebensbedrohliche Verletzungen gleichzeitig",
          "b": "Mehrere Medikamente",
          "c": "Mehrere Operationen",
          "d": "Mehrere Patienten"
        },
        "correct": "a",
        "explanation": "Ein Polytrauma betrifft mehrere Organe oder Organsysteme gleichzeitig."
      },
      {
        "question": "Was ist die häufigste Ursache eines Polytraumas?",
        "answers": {
          "a": "Infektionen",
          "b": "Verkehrsunfälle",
          "c": "Diabetes",
          "d": "Allergien"
        },
        "correct": "b",
        "explanation": "Verkehrsunfälle sind die häufigste Ursache."
      },
      {
        "question": "Welche Stunde gilt beim Polytrauma als besonders entscheidend?",
        "answers": {
          "a": "Erste Stunde",
          "b": "Zweite Stunde",
          "c": "Zwölfte Stunde",
          "d": "24. Stunde"
        },
        "correct": "a",
        "explanation": "Die erste Stunde („Golden Hour“) entscheidet häufig über das Überleben."
      },
      {
        "question": "Welches Ziel hat die Versorgung in der ersten Stunde nach einem Polytrauma?",
        "answers": {
          "a": "Patienten entlassen",
          "b": "Vitalfunktionen stabilisieren",
          "c": "Medikamente reduzieren",
          "d": "Röntgenbilder anfertigen"
        },
        "correct": "b",
        "explanation": "Die Stabilisierung der Vitalfunktionen hat höchste Priorität."
      },
      {
        "question": "Welche Aussage zur Triage ist richtig?",
        "answers": {
          "a": "Jeder Patient wird gleichzeitig behandelt.",
          "b": "Patienten werden nach der Schwere ihrer Verletzungen priorisiert.",
          "c": "Die Reihenfolge richtet sich nach dem Alter.",
          "d": "Die Reihenfolge richtet sich nach der Ankunft."
        },
        "correct": "b",
        "explanation": "Die Priorisierung erfolgt nach Verletzungsschwere und Vitalfunktionen."
      },
      {
        "question": "Was ist bei jedem Einsatz die wichtigste Regel?",
        "answers": {
          "a": "Möglichst schnell handeln",
          "b": "Eigenschutz beachten",
          "c": "Zuerst dokumentieren",
          "d": "Zuerst Medikamente geben"
        },
        "correct": "b",
        "explanation": "Ohne Eigenschutz kann der Helfer selbst zum Opfer werden."
      },
      {
        "question": "Welches Schema wird zur strukturierten Erstuntersuchung eines Notfallpatienten verwendet?",
        "answers": {
          "a": "SMART",
          "b": "ABCDE-Schema",
          "c": "6-R-Regel",
          "d": "SIS"
        },
        "correct": "b",
        "explanation": "Das ABCDE-Schema dient der schnellen Erkennung und Behandlung lebensbedrohlicher Zustände."
      },
      {
        "question": "Wofür steht das „A\" im ABCDE-Schema?",
        "answers": {
          "a": "Atmung",
          "b": "Airway (Atemweg)",
          "c": "Arterie",
          "d": "Aufmerksamkeit"
        },
        "correct": "b",
        "explanation": "Zuerst wird überprüft, ob die Atemwege frei sind."
      },
      {
        "question": "Welche Maßnahme gehört zum „A\" des ABCDE-Schemas?",
        "answers": {
          "a": "Blutdruck messen",
          "b": "Atemwege freimachen",
          "c": "Blutzucker messen",
          "d": "Pupillen kontrollieren"
        },
        "correct": "b",
        "explanation": "Freie Atemwege haben höchste Priorität."
      },
      {
        "question": "Wofür steht das „B\" im ABCDE-Schema?",
        "answers": {
          "a": "Blutung",
          "b": "Breathing (Atmung)",
          "c": "Bewusstsein",
          "d": "Bewegung"
        },
        "correct": "b",
        "explanation": "Es wird die Atmung beurteilt."
      },
      {
        "question": "Welche Beobachtung gehört zu „B\"?",
        "answers": {
          "a": "Atemfrequenz",
          "b": "Atemgeräusche",
          "c": "Sauerstoffsättigung",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle Parameter dienen der Beurteilung der Atmung."
      },
      {
        "question": "Wofür steht das „C\" im ABCDE-Schema?",
        "answers": {
          "a": "Care",
          "b": "Circulation (Kreislauf)",
          "c": "Consciousness",
          "d": "Cardiology"
        },
        "correct": "b",
        "explanation": "Kreislauf und Blutungen werden überprüft."
      },
      {
        "question": "Welche Maßnahme gehört zum „C\"?",
        "answers": {
          "a": "Starke Blutungen stillen",
          "b": "Pupillen kontrollieren",
          "c": "Schmerzskala anwenden",
          "d": "Blutzucker messen"
        },
        "correct": "a",
        "explanation": "Massive Blutungen werden sofort gestillt."
      },
      {
        "question": "Welche Vitalzeichen gehören zur Kreislaufkontrolle?",
        "answers": {
          "a": "Puls",
          "b": "Blutdruck",
          "c": "Hautfarbe",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle helfen bei der Einschätzung des Kreislaufs."
      },
      {
        "question": "Wofür steht das „D\" im ABCDE-Schema?",
        "answers": {
          "a": "Disability (neurologischer Status)",
          "b": "Dokumentation",
          "c": "Diagnose",
          "d": "Defibrillation"
        },
        "correct": "a",
        "explanation": "Hier wird der neurologische Zustand beurteilt."
      },
      {
        "question": "Welche Untersuchung gehört zu „D\"?",
        "answers": {
          "a": "Pupillenkontrolle",
          "b": "AVPU-Schema",
          "c": "Blutzuckerkontrolle",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle Maßnahmen dienen der neurologischen Beurteilung."
      },
      {
        "question": "Wofür steht das „E\" im ABCDE-Schema?",
        "answers": {
          "a": "Ernährung",
          "b": "Exposure / Environment",
          "c": "Erste Hilfe",
          "d": "Evaluation"
        },
        "correct": "b",
        "explanation": "Der Patient wird vollständig untersucht und vor Unterkühlung geschützt."
      },
      {
        "question": "Warum wird der Patient bei „E\" vollständig untersucht?",
        "answers": {
          "a": "Um Verletzungen nicht zu übersehen.",
          "b": "Nur zur Dokumentation.",
          "c": "Wegen der Kleidung.",
          "d": "Um Medikamente zu geben."
        },
        "correct": "a",
        "explanation": "Verdeckte Verletzungen müssen erkannt werden."
      },
      {
        "question": "Welche Komplikation soll bei „E\" verhindert werden?",
        "answers": {
          "a": "Hypertonie",
          "b": "Hypothermie",
          "c": "Hyperglykämie",
          "d": "Tachykardie"
        },
        "correct": "b",
        "explanation": "Unterkühlung verschlechtert die Prognose erheblich."
      },
      {
        "question": "Was bedeutet AVPU?",
        "answers": {
          "a": "Ein Schema zur Beurteilung des Bewusstseins.",
          "b": "Ein Medikament.",
          "c": "Eine Beatmungsform.",
          "d": "Eine Lagerung."
        },
        "correct": "a",
        "explanation": "AVPU beurteilt schnell den Bewusstseinszustand."
      },
      {
        "question": "Wofür steht das „A\" im AVPU-Schema?",
        "answers": {
          "a": "Airway",
          "b": "Alert (wach)",
          "c": "Atmung",
          "d": "Aufmerksamkeit"
        },
        "correct": "b",
        "explanation": "Der Patient ist wach und ansprechbar."
      },
      {
        "question": "Wofür steht das „V\" im AVPU-Schema?",
        "answers": {
          "a": "Verletzt",
          "b": "Voice (Reaktion auf Ansprache)",
          "c": "Vene",
          "d": "Vigilanz"
        },
        "correct": "b",
        "explanation": "Der Patient reagiert nur auf Ansprache."
      },
      {
        "question": "Wofür steht das „P\" im AVPU-Schema?",
        "answers": {
          "a": "Puls",
          "b": "Pain (Reaktion auf Schmerzreiz)",
          "c": "Pupillen",
          "d": "Position"
        },
        "correct": "b",
        "explanation": "Es wird geprüft, ob der Patient auf Schmerz reagiert."
      },
      {
        "question": "Wofür steht das „U\" im AVPU-Schema?",
        "answers": {
          "a": "Untersuchung",
          "b": "Unresponsive (keine Reaktion)",
          "c": "Unterkühlung",
          "d": "Überwachung"
        },
        "correct": "b",
        "explanation": "Der Patient reagiert weder auf Ansprache noch auf Schmerz."
      },
      {
        "question": "Welcher Parameter sollte bei bewusstlosen Patienten zusätzlich kontrolliert werden?",
        "answers": {
          "a": "Blutzucker",
          "b": "Pupillen",
          "c": "Atmung",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle sind für die Notfallbeurteilung wichtig."
      },
      {
        "question": "Warum wird das ABCDE-Schema immer in derselben Reihenfolge durchgeführt?",
        "answers": {
          "a": "Weil lebensbedrohliche Probleme zuerst erkannt und behandelt werden.",
          "b": "Damit die Dokumentation einfacher wird.",
          "c": "Wegen gesetzlicher Vorschriften.",
          "d": "Damit alle Patienten gleich aussehen."
        },
        "correct": "a",
        "explanation": "Das Schema priorisiert die Behandlung nach der Lebensgefahr und verbessert die Überlebenschancen."
      },
      {
        "question": "Was ist der erste Schritt bei einer bewusstlosen Person?",
        "answers": {
          "a": "Blutdruck messen",
          "b": "Eigenschutz beachten und Situation prüfen",
          "c": "Medikamente geben",
          "d": "Puls messen"
        },
        "correct": "b",
        "explanation": "Vor jeder Hilfeleistung gilt der Eigenschutz."
      },
      {
        "question": "Wie wird das Bewusstsein überprüft?",
        "answers": {
          "a": "Blutdruck messen",
          "b": "Laut ansprechen und vorsichtig an den Schultern rütteln",
          "c": "Puls fühlen",
          "d": "Temperatur messen"
        },
        "correct": "b",
        "explanation": "So wird geprüft, ob der Patient reagiert."
      },
      {
        "question": "Welche Telefonnummer hat der Rettungsdienst in Deutschland?",
        "answers": {
          "a": "110",
          "b": "112",
          "c": "116117",
          "d": "19222"
        },
        "correct": "b",
        "explanation": "112 ist die europaweite Notrufnummer."
      },
      {
        "question": "Welche fünf W-Fragen gehören zum Notruf?",
        "answers": {
          "a": "Wer? Was? Wo? Wie viele? Warten auf Rückfragen.",
          "b": "Wer? Wann? Warum? Wie? Wohin?",
          "c": "Wo? Wer? Wetter? Warum? Warten?",
          "d": "Was? Welche? Wieviel? Wer? Wann?"
        },
        "correct": "a",
        "explanation": "Diese Informationen benötigt die Leitstelle."
      },
      {
        "question": "Wann wird die stabile Seitenlage durchgeführt?",
        "answers": {
          "a": "Bei jeder bewusstlosen Person ohne normale Atmung",
          "b": "Bei bewusstlosen Patienten mit normaler Atmung",
          "c": "Bei Herzstillstand",
          "d": "Bei Brustschmerzen"
        },
        "correct": "b",
        "explanation": "Sie schützt vor Aspiration bei erhaltener Atmung."
      },
      {
        "question": "Wann muss sofort mit der Reanimation begonnen werden?",
        "answers": {
          "a": "Bei Bewusstlosigkeit ohne normale Atmung",
          "b": "Bei Fieber",
          "c": "Bei Schwindel",
          "d": "Bei Übelkeit"
        },
        "correct": "a",
        "explanation": "Keine normale Atmung bedeutet Herz-Kreislauf-Stillstand, bis das Gegenteil bewiesen ist."
      },
      {
        "question": "Wie lautet das Verhältnis von Herzdruckmassage zu Beatmung bei Erwachsenen?",
        "answers": {
          "a": "15 : 2",
          "b": "30 : 2",
          "c": "5 : 1",
          "d": "20 : 2"
        },
        "correct": "b",
        "explanation": "Nach ERC-Leitlinien werden 30 Kompressionen und 2 Beatmungen durchgeführt."
      },
      {
        "question": "Wie tief sollte der Brustkorb bei Erwachsenen eingedrückt werden?",
        "answers": {
          "a": "2 cm",
          "b": "3 cm",
          "c": "5–6 cm",
          "d": "8 cm"
        },
        "correct": "c",
        "explanation": "Die optimale Drucktiefe beträgt 5–6 cm."
      },
      {
        "question": "Mit welcher Frequenz erfolgt die Herzdruckmassage?",
        "answers": {
          "a": "60–80/min",
          "b": "80–100/min",
          "c": "100–120/min",
          "d": "140/min"
        },
        "correct": "c",
        "explanation": "Die empfohlene Frequenz beträgt 100–120 Kompressionen pro Minute."
      },
      {
        "question": "Wo werden die Hände bei der Herzdruckmassage positioniert?",
        "answers": {
          "a": "Linke Brustseite",
          "b": "Mitte des Brustkorbs auf dem unteren Sternumdrittel",
          "c": "Oberbauch",
          "d": "Schlüsselbein"
        },
        "correct": "b",
        "explanation": "Dort wird das Herz am effektivsten komprimiert."
      },
      {
        "question": "Wann sollte ein AED eingesetzt werden?",
        "answers": {
          "a": "Nur durch Ärzte",
          "b": "So früh wie möglich",
          "c": "Erst nach 30 Minuten",
          "d": "Nur im Krankenhaus"
        },
        "correct": "b",
        "explanation": "Frühzeitige Defibrillation verbessert die Überlebenschancen."
      },
      {
        "question": "Wofür steht AED?",
        "answers": {
          "a": "Automatisierter Externer Defibrillator",
          "b": "Akute Erste Diagnose",
          "c": "Automatische Erste Hilfe",
          "d": "Allgemeine Einsatz Dokumentation"
        },
        "correct": "a",
        "explanation": "AEDs analysieren den Herzrhythmus und geben bei Bedarf einen Schock frei."
      },
      {
        "question": "Was macht ein AED vor der Schockabgabe?",
        "answers": {
          "a": "Blutdruck messen",
          "b": "Herzrhythmus analysieren",
          "c": "Puls messen",
          "d": "Temperatur messen"
        },
        "correct": "b",
        "explanation": "Nur bei schockbaren Rhythmen wird eine Defibrillation empfohlen."
      },
      {
        "question": "Was muss unmittelbar vor einer Schockabgabe sichergestellt werden?",
        "answers": {
          "a": "Fenster schließen",
          "b": "Niemand berührt den Patienten",
          "c": "Sauerstoff ausschalten",
          "d": "Blutdruck messen"
        },
        "correct": "b",
        "explanation": "Sonst besteht Verletzungsgefahr für Helfer."
      },
      {
        "question": "Was geschieht unmittelbar nach einer Schockabgabe?",
        "answers": {
          "a": "Patient aufrichten",
          "b": "Sofort mit Herzdruckmassage fortfahren",
          "c": "Blutdruck messen",
          "d": "Medikamente geben"
        },
        "correct": "b",
        "explanation": "Die Reanimation wird ohne Verzögerung fortgesetzt."
      },
      {
        "question": "Was bedeutet ROSC?",
        "answers": {
          "a": "Return of Spontaneous Circulation",
          "b": "Rückkehr der spontanen Atmung",
          "c": "Reanimation ohne Schock",
          "d": "Rettungsorganisation"
        },
        "correct": "a",
        "explanation": "ROSC bezeichnet das Wiedereinsetzen eines eigenen Kreislaufs."
      },
      {
        "question": "Welche Maßnahme hat bei starken Blutungen Vorrang?",
        "answers": {
          "a": "Blutdruck messen",
          "b": "Direkte Blutstillung",
          "c": "Blutzucker messen",
          "d": "Temperatur messen"
        },
        "correct": "b",
        "explanation": "Massive Blutungen können innerhalb weniger Minuten tödlich sein."
      },
      {
        "question": "Wie wird eine starke äußere Blutung zunächst behandelt?",
        "answers": {
          "a": "Eis auflegen",
          "b": "Direkter Druck auf die Wunde",
          "c": "Salbe auftragen",
          "d": "Verband entfernen"
        },
        "correct": "b",
        "explanation": "Direkter Druck ist die effektivste Erstmaßnahme."
      },
      {
        "question": "Was ist ein Schock?",
        "answers": {
          "a": "Eine psychische Erkrankung",
          "b": "Ein lebensbedrohliches Kreislaufversagen mit unzureichender Organversorgung",
          "c": "Eine Infektion",
          "d": "Ein Krampfanfall"
        },
        "correct": "b",
        "explanation": "Beim Schock erhalten lebenswichtige Organe zu wenig Sauerstoff."
      },
      {
        "question": "Welches Ziel verfolgt das gesamte Notfallmanagement?",
        "answers": {
          "a": "Möglichst viele Leben retten, lebensbedrohliche Zustände früh erkennen und strukturiert behandeln.",
          "b": "Dokumentation vereinfachen.",
          "c": "Medikamente sparen.",
          "d": "Patienten möglichst schnell entlassen."
        },
        "correct": "a",
        "explanation": "Das strukturierte Vorgehen nach Algorithmen (ABCDE, Reanimation, Notruf) verbessert die Überlebenschancen erheblich."
      },
      {
        "question": "Welches Symptom spricht am ehesten für einen Schock?",
        "answers": {
          "a": "Warme, rosige Haut",
          "b": "Kalte, blasse und feuchte Haut",
          "c": "Niedriger Blutzucker ohne weitere Symptome",
          "d": "Langsame Atmung"
        },
        "correct": "b",
        "explanation": "Typische Schockzeichen sind blasse, kalte, feuchte Haut sowie Tachykardie und Unruhe."
      },
      {
        "question": "Welches Symptom tritt häufig bei einem Schock auf?",
        "answers": {
          "a": "Bradykardie",
          "b": "Tachykardie",
          "c": "Fieber",
          "d": "Verstopfung"
        },
        "correct": "b",
        "explanation": "Der Körper versucht den Blutdruck durch eine erhöhte Herzfrequenz aufrechtzuerhalten."
      },
      {
        "question": "Welche Lagerung ist bei einem hypovolämischen Schock sinnvoll, wenn keine Verletzungen dagegen sprechen?",
        "answers": {
          "a": "Bauchlage",
          "b": "Schocklagerung (Beine hoch)",
          "c": "Seitenlage",
          "d": "Sitzende Position"
        },
        "correct": "b",
        "explanation": "Durch das Hochlagern der Beine kann der venöse Rückstrom verbessert werden."
      },
      {
        "question": "Welche Maßnahme gehört NICHT zur Schockbehandlung?",
        "answers": {
          "a": "Notruf absetzen",
          "b": "Wärme erhalten",
          "c": "Patient alleine lassen",
          "d": "Vitalzeichen überwachen"
        },
        "correct": "c",
        "explanation": "Ein Schockpatient darf niemals unbeaufsichtigt bleiben."
      },
      {
        "question": "Welche Vitalzeichen sollten bei einem Notfallpatienten regelmäßig kontrolliert werden?",
        "answers": {
          "a": "Puls",
          "b": "Blutdruck",
          "c": "Atmung und Sauerstoffsättigung",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Die kontinuierliche Überwachung dient der frühzeitigen Erkennung einer Verschlechterung."
      },
      {
        "question": "Was bedeutet SpO₂?",
        "answers": {
          "a": "Herzfrequenz",
          "b": "Sauerstoffsättigung des Blutes",
          "c": "Blutdruck",
          "d": "Atemfrequenz"
        },
        "correct": "b",
        "explanation": "Die Sauerstoffsättigung wird mit dem Pulsoximeter gemessen."
      },
      {
        "question": "Mit welchem Gerät wird die Sauerstoffsättigung gemessen?",
        "answers": {
          "a": "EKG",
          "b": "Pulsoximeter",
          "c": "Thermometer",
          "d": "Blutzuckermessgerät"
        },
        "correct": "b",
        "explanation": "Das Pulsoximeter misst die Sauerstoffsättigung und den Puls."
      },
      {
        "question": "Warum wird Sauerstoff bei vielen Notfällen verabreicht?",
        "answers": {
          "a": "Zur Schmerzlinderung",
          "b": "Zur Verbesserung der Sauerstoffversorgung",
          "c": "Zum Senken des Blutdrucks",
          "d": "Zur Beruhigung"
        },
        "correct": "b",
        "explanation": "Ziel ist eine ausreichende Versorgung der Organe mit Sauerstoff."
      },
      {
        "question": "Welche Maßnahme hat bei Atemstillstand höchste Priorität?",
        "answers": {
          "a": "Blutdruck messen",
          "b": "Atemwege sichern und Beatmung beginnen",
          "c": "Blutzucker messen",
          "d": "Temperatur messen"
        },
        "correct": "b",
        "explanation": "Ohne Atmung droht innerhalb weniger Minuten ein Herz-Kreislauf-Stillstand."
      },
      {
        "question": "Welche Atemfrequenz gilt bei Erwachsenen ungefähr als normal?",
        "answers": {
          "a": "4–8/min",
          "b": "12–20/min",
          "c": "30–40/min",
          "d": "Über 50/min"
        },
        "correct": "b",
        "explanation": "Die normale Atemfrequenz eines Erwachsenen liegt bei etwa 12–20 Atemzügen pro Minute."
      },
      {
        "question": "Welche Herzfrequenz gilt bei Erwachsenen ungefähr als normal?",
        "answers": {
          "a": "20–40/min",
          "b": "60–100/min",
          "c": "120–160/min",
          "d": "Über 180/min"
        },
        "correct": "b",
        "explanation": "Ein Ruhepuls zwischen 60 und 100/min gilt als normal."
      },
      {
        "question": "Welche Blutung ist besonders lebensbedrohlich?",
        "answers": {
          "a": "Kleine Schürfwunde",
          "b": "Arterielle Blutung",
          "c": "Kleine Schnittverletzung",
          "d": "Nasenbluten"
        },
        "correct": "b",
        "explanation": "Arterielle Blutungen können in kurzer Zeit zu einem lebensbedrohlichen Blutverlust führen."
      },
      {
        "question": "Woran erkennt man eine arterielle Blutung?",
        "answers": {
          "a": "Dunkelrotes, langsam fließendes Blut",
          "b": "Hellrotes, pulsierend spritzendes Blut",
          "c": "Schwarzes Blut",
          "d": "Gelbliche Flüssigkeit"
        },
        "correct": "b",
        "explanation": "Arterielles Blut ist sauerstoffreich und tritt pulsierend aus."
      },
      {
        "question": "Was ist bei einer venösen Blutung typisch?",
        "answers": {
          "a": "Pulsierend",
          "b": "Dunkelrotes, gleichmäßig fließendes Blut",
          "c": "Hellrotes Blut",
          "d": "Keine Blutung"
        },
        "correct": "b",
        "explanation": "Venöses Blut ist dunkler und fließt kontinuierlich."
      },
      {
        "question": "Welche Maßnahme ist bei einer starken Blutung am wichtigsten?",
        "answers": {
          "a": "Direkt Druck auf die Wunde ausüben",
          "b": "Wunde offen lassen",
          "c": "Salbe auftragen",
          "d": "Eiswürfel in die Wunde legen"
        },
        "correct": "a",
        "explanation": "Direkter Druck stoppt die Blutung am schnellsten."
      },
      {
        "question": "Welche Maßnahme hilft zusätzlich bei einer Extremitätenblutung?",
        "answers": {
          "a": "Hochlagern der betroffenen Extremität (wenn möglich)",
          "b": "Massage",
          "c": "Kältebad",
          "d": "Bewegung"
        },
        "correct": "a",
        "explanation": "Hochlagerung kann den Blutverlust vermindern."
      },
      {
        "question": "Welche Aussage zur Notfalldokumentation ist richtig?",
        "answers": {
          "a": "Sie erfolgt erst am nächsten Tag.",
          "b": "Sie sollte zeitnah und vollständig erfolgen.",
          "c": "Sie ist unnötig.",
          "d": "Sie erfolgt nur durch Ärzte."
        },
        "correct": "b",
        "explanation": "Eine vollständige Dokumentation ist wichtig für die weitere Behandlung und rechtliche Absicherung."
      },
      {
        "question": "Warum arbeitet man im Notfall häufig im Team?",
        "answers": {
          "a": "Weil Aufgaben gleichzeitig übernommen werden können.",
          "b": "Weil es vorgeschrieben ist.",
          "c": "Damit weniger dokumentiert wird.",
          "d": "Wegen der Dienstplanung."
        },
        "correct": "a",
        "explanation": "Teamarbeit verbessert die Geschwindigkeit und Qualität der Versorgung."
      },
      {
        "question": "Welche Aussage trifft auf Notfallmanagement zu?",
        "answers": {
          "a": "Es erfolgt immer ohne feste Struktur.",
          "b": "Es folgt standardisierten Algorithmen wie ABCDE und Reanimation.",
          "c": "Es wird nur im Krankenhaus angewendet.",
          "d": "Es betrifft nur Ärzte."
        },
        "correct": "b",
        "explanation": "Standardisierte Abläufe verhindern Fehler und retten Leben."
      },
      {
        "question": "Welches Ziel verfolgt professionelles Notfallmanagement?",
        "answers": {
          "a": "Lebensbedrohliche Zustände früh erkennen, Prioritäten setzen, lebensrettende Maßnahmen durchführen und die Überlebenschancen des Patienten verbessern.",
          "b": "Dokumentation verkürzen.",
          "c": "Medikamente einsparen.",
          "d": "Patienten möglichst schnell entlassen."
        },
        "correct": "a",
        "explanation": "Notfallmanagement verbindet strukturiertes Vorgehen (z. B. GAMS, ABCDE, Reanimation) mit schneller, zielgerichteter Versorgung und Teamarbeit."
      },
      {
        "question": "Was ist die häufigste Ursache eines Herz-Kreislauf-Stillstands bei Erwachsenen?",
        "answers": {
          "a": "Schlaganfall",
          "b": "Kammerflimmern)",
          "c": "Diabetes",
          "d": "Asthma"
        },
        "correct": "b",
        "explanation": "Meist wird ein Herzstillstand durch lebensbedrohliche Herzrhythmusstörungen ausgelöst."
      },
      {
        "question": "Welche Aussage zum Herz-Kreislauf-Stillstand ist richtig?",
        "answers": {
          "a": "Der Patient ist ansprechbar.",
          "b": "Der Patient ist bewusstlos und atmet nicht normal.",
          "c": "Der Patient hat Fieber.",
          "d": "Der Patient hat Bauchschmerzen."
        },
        "correct": "b",
        "explanation": "Bewusstlosigkeit und fehlende normale Atmung sind Leitsymptome."
      },
      {
        "question": "Was versteht man unter Schnappatmung?",
        "answers": {
          "a": "Normale Atmung",
          "b": "Unregelmäßige, einzelne Atemzüge ohne ausreichende Sauerstoffversorgung",
          "c": "Schnelle Atmung nach Sport",
          "d": "Tiefes Einatmen"
        },
        "correct": "b",
        "explanation": "Schnappatmung gilt als Zeichen eines Herz-Kreislauf-Stillstands."
      },
      {
        "question": "Wie lange sollte die Atemkontrolle maximal dauern?",
        "answers": {
          "a": "5 Sekunden",
          "b": "Höchstens 10 Sekunden",
          "c": "30 Sekunden",
          "d": "1 Minute"
        },
        "correct": "b",
        "explanation": "Längere Kontrollen verzögern die Reanimation."
      },
      {
        "question": "Wann wird die Herzdruckmassage unterbrochen?",
        "answers": {
          "a": "Zum Blutdruckmessen",
          "b": "Beatmung oder Defibrillation)",
          "c": "Alle zwei Minuten",
          "d": "Nach jeder Beatmung"
        },
        "correct": "b",
        "explanation": "Unterbrechungen sollen möglichst kurz sein."
      },
      {
        "question": "Warum muss der Brustkorb nach jeder Kompression vollständig entlastet werden?",
        "answers": {
          "a": "Damit der Helfer Kraft spart.",
          "b": "Damit sich das Herz wieder mit Blut füllen kann.",
          "c": "Wegen der Rippen.",
          "d": "Damit die Beatmung leichter wird."
        },
        "correct": "b",
        "explanation": "Nur so wird eine ausreichende Durchblutung erreicht."
      },
      {
        "question": "Was ist wichtiger, wenn keine Beatmung möglich ist?",
        "answers": {
          "a": "Gar nichts tun.",
          "b": "Nur Herzdruckmassage durchführen.",
          "c": "Patient lagern.",
          "d": "Blutdruck messen."
        },
        "correct": "b",
        "explanation": "Eine kontinuierliche Herzdruckmassage ist besser als gar keine Reanimation."
      },
      {
        "question": "Welche Aussage zur Beatmung ist richtig?",
        "answers": {
          "a": "Zu stark beatmen.",
          "b": "Nur so viel Luft geben, dass sich der Brustkorb sichtbar hebt.",
          "c": "So schnell wie möglich beatmen.",
          "d": "Beatmung ist immer wichtiger als Kompressionen."
        },
        "correct": "b",
        "explanation": "Zu starke Beatmung erhöht den Druck im Brustkorb und verschlechtert die Durchblutung."
      },
      {
        "question": "Welche Maßnahme ist bei einem bewusstlosen Patienten mit normaler Atmung richtig?",
        "answers": {
          "a": "Reanimation beginnen.",
          "b": "Stabile Seitenlage.",
          "c": "Patient aufsetzen.",
          "d": "Schocklagerung."
        },
        "correct": "b",
        "explanation": "Die stabile Seitenlage schützt vor Aspiration."
      },
      {
        "question": "Warum wird die stabile Seitenlage durchgeführt?",
        "answers": {
          "a": "Zur Schmerzlinderung.",
          "b": "Zur Freihaltung der Atemwege und zum Schutz vor Aspiration.",
          "c": "Zur Blutdrucksteigerung.",
          "d": "Zur besseren Dokumentation."
        },
        "correct": "b",
        "explanation": "Sekret oder Erbrochenes kann besser abfließen."
      },
      {
        "question": "Welches Ziel verfolgt die Defibrillation?",
        "answers": {
          "a": "Das Herz elektrisch stimulieren und einen normalen Rhythmus ermöglichen.",
          "b": "Blutdruck senken.",
          "c": "Sauerstoff geben.",
          "d": "Schmerzen lindern."
        },
        "correct": "a",
        "explanation": "Durch den Stromstoß kann ein schockbarer Rhythmus beendet werden."
      },
      {
        "question": "Bei welchem Herzrhythmus ist eine Defibrillation sinnvoll?",
        "answers": {
          "a": "Kammerflimmern",
          "b": "Asystolie",
          "c": "Normalsinus",
          "d": "Sinusbradykardie"
        },
        "correct": "a",
        "explanation": "Kammerflimmern gehört zu den schockbaren Rhythmen."
      },
      {
        "question": "Welche Aussage zur Asystolie ist richtig?",
        "answers": {
          "a": "Sie wird defibrilliert.",
          "b": "Es erfolgt keine Defibrillation, sondern sofortige CPR.",
          "c": "Es wird nur Sauerstoff gegeben.",
          "d": "Es ist ein normaler Herzrhythmus."
        },
        "correct": "b",
        "explanation": "Asystolie ist kein schockbarer Rhythmus."
      },
      {
        "question": "Was bedeutet CPR?",
        "answers": {
          "a": "Cardio Pulmonary Resuscitation (Herz-Lungen-Wiederbelebung)",
          "b": "Cardio Patient Rescue",
          "c": "Clinical Patient Reaction",
          "d": "Cardiac Pressure Response"
        },
        "correct": "a",
        "explanation": "CPR ist die internationale Bezeichnung für die Reanimation."
      },
      {
        "question": "Welche Aussage zur Teamarbeit bei der Reanimation stimmt?",
        "answers": {
          "a": "Aufgaben sollten klar verteilt werden.",
          "b": "Jeder arbeitet unabhängig.",
          "c": "Kommunikation ist unwichtig.",
          "d": "Es gibt keinen Teamleiter."
        },
        "correct": "a",
        "explanation": "Gute Teamarbeit verbessert die Qualität der Reanimation."
      },
      {
        "question": "Wie oft sollte der Helfer bei längerer Reanimation gewechselt werden?",
        "answers": {
          "a": "Alle 10 Minuten",
          "b": "Etwa alle 2 Minuten",
          "c": "Jede Minute",
          "d": "Nie"
        },
        "correct": "b",
        "explanation": "So bleibt die Qualität der Herzdruckmassage erhalten."
      },
      {
        "question": "Welcher Parameter zeigt den Erfolg einer Reanimation an?",
        "answers": {
          "a": "Rückkehr eines spontanen Kreislaufs (ROSC)",
          "b": "Körpertemperatur",
          "c": "Gewicht",
          "d": "Blutzucker"
        },
        "correct": "a",
        "explanation": "ROSC bedeutet, dass Herz und Kreislauf wieder selbstständig arbeiten."
      },
      {
        "question": "Welche Aussage zur Kommunikation im Notfall ist richtig?",
        "answers": {
          "a": "Klare, kurze Anweisungen verhindern Missverständnisse.",
          "b": "Jeder entscheidet selbst.",
          "c": "Kommunikation ist unwichtig.",
          "d": "Es sollte möglichst leise gesprochen werden."
        },
        "correct": "a",
        "explanation": "Strukturierte Kommunikation erhöht die Patientensicherheit."
      },
      {
        "question": "Warum werden Notfallalgorithmen regelmäßig trainiert?",
        "answers": {
          "a": "Damit sie im Ernstfall automatisch und sicher angewendet werden können.",
          "b": "Wegen der Dokumentation.",
          "c": "Um Zeit zu sparen.",
          "d": "Nur für Prüfungen."
        },
        "correct": "a",
        "explanation": "Regelmäßiges Training verbessert Handlungssicherheit und Teamarbeit."
      },
      {
        "question": "Welches Prinzip beschreibt professionelles Notfallmanagement am besten?",
        "answers": {
          "a": "Eigenschutz → strukturierte Beurteilung (ABCDE) → lebensrettende Maßnahmen → Teamarbeit → kontinuierliche Überwachung → Dokumentation.",
          "b": "Erst dokumentieren, dann helfen.",
          "c": "Nur Medikamente verabreichen.",
          "d": "Nur den Arzt informieren."
        },
        "correct": "a",
        "explanation": "Dieses strukturierte Vorgehen entspricht den aktuellen Empfehlungen im Notfallmanagement und erhöht die Überlebenschancen des Patienten."
      }
    ]
  },
  "qualit_tsmanagement": {
    "label": "Qualitätsmanagement & Expertenstandards",
    "questions": [
      {
        "question": "Was versteht man unter Qualität?",
        "answers": {
          "a": "Möglichst niedrige Kosten",
          "b": "Die Gesamtheit von Eigenschaften eines Produktes oder einer Dienstleistung zur Erfüllung festgelegter Anforderungen",
          "c": "Nur die Zufriedenheit der Mitarbeiter",
          "d": "Ausschließlich die Dokumentation"
        },
        "correct": "b",
        "explanation": "Qualität beschreibt, wie gut Anforderungen erfüllt werden."
      },
      {
        "question": "Was bedeutet Pflegequalität?",
        "answers": {
          "a": "Möglichst viele Pflegemaßnahmen durchführen",
          "b": "Die Wahrscheinlichkeit günstiger Ergebnisse erhöhen und unerwünschte Ergebnisse verringern",
          "c": "Nur wirtschaftlich arbeiten",
          "d": "Möglichst wenig dokumentieren"
        },
        "correct": "b",
        "explanation": "Gute Pflege verbessert den Patientenzustand und reduziert Risiken."
      },
      {
        "question": "Was ist das Hauptziel des Qualitätsmanagements?",
        "answers": {
          "a": "Kosten senken",
          "b": "Pflegequalität sichern und verbessern",
          "c": "Mehr Dokumentation schreiben",
          "d": "Weniger Personal einsetzen"
        },
        "correct": "b",
        "explanation": "Qualitätsmanagement dient der kontinuierlichen Verbesserung."
      },
      {
        "question": "Was regelt ein Qualitätsmanagementsystem?",
        "answers": {
          "a": "Nur Urlaubsplanung",
          "b": "Abläufe, Prozesse und Verantwortlichkeiten",
          "c": "Nur Medikamentenbestellungen",
          "d": "Nur Dienstzeiten"
        },
        "correct": "b",
        "explanation": "QM beschreibt verbindliche Regelungen für die Einrichtung."
      },
      {
        "question": "Welche Aussage gehört zum Qualitätsmanagement?",
        "answers": {
          "a": "Umgang mit Fehlern",
          "b": "Hygieneregeln",
          "c": "Notfallmaßnahmen",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "QM umfasst sämtliche organisatorischen Abläufe."
      },
      {
        "question": "Wo finden Pflegekräfte Regelungen und Arbeitsabläufe?",
        "answers": {
          "a": "Im Arzneibuch",
          "b": "Im QM-Handbuch",
          "c": "Im Dienstplan",
          "d": "Im Pflegebericht"
        },
        "correct": "b",
        "explanation": "Das QM-Handbuch enthält alle wichtigen Regelungen."
      },
      {
        "question": "Was bedeutet Standardisierung?",
        "answers": {
          "a": "Jeder arbeitet unterschiedlich.",
          "b": "Vereinheitlichung von Arbeitsabläufen.",
          "c": "Weniger Dokumentation.",
          "d": "Mehr Personal."
        },
        "correct": "b",
        "explanation": "Standardisierung sorgt für gleichbleibende Qualität."
      },
      {
        "question": "Welche Reihenfolge ist richtig?",
        "answers": {
          "a": "Richtlinie → Leitlinie → Pflegestandard → Expertenstandard",
          "b": "Expertenstandard → Pflegestandard → Leitlinie → Richtlinie",
          "c": "Leitlinie → Richtlinie → Expertenstandard",
          "d": "Es gibt keine Reihenfolge."
        },
        "correct": "a",
        "explanation": "Die Verbindlichkeit nimmt von Leitlinie zu Richtlinie zu; Expertenstandards bilden die wissenschaftliche Grundlage."
      },
      {
        "question": "Was ist eine Richtlinie?",
        "answers": {
          "a": "Empfehlung",
          "b": "Verbindliche Handlungsvorschrift",
          "c": "Hausstandard",
          "d": "Expertenstandard"
        },
        "correct": "b",
        "explanation": "Richtlinien müssen eingehalten werden."
      },
      {
        "question": "Was passiert bei der Nichteinhaltung einer Richtlinie?",
        "answers": {
          "a": "Nichts",
          "b": "Sanktionen sind möglich",
          "c": "Automatische Kündigung",
          "d": "Nur eine Notiz"
        },
        "correct": "b",
        "explanation": "Richtlinien besitzen bindenden Charakter."
      },
      {
        "question": "Was ist eine Leitlinie?",
        "answers": {
          "a": "Gesetz",
          "b": "Entscheidungshilfe",
          "c": "Dienstplan",
          "d": "Hausordnung"
        },
        "correct": "b",
        "explanation": "Leitlinien unterstützen Entscheidungen, sind aber nicht verpflichtend."
      },
      {
        "question": "Darf von Leitlinien abgewichen werden?",
        "answers": {
          "a": "Nein",
          "b": "Ja, wenn dies fachlich begründet ist",
          "c": "Nur Ärzte dürfen das",
          "d": "Nie"
        },
        "correct": "b",
        "explanation": "Leitlinien sind nicht bindend."
      },
      {
        "question": "Was beschreibt ein Pflegestandard?",
        "answers": {
          "a": "Konkrete Handlungsanweisung einer Einrichtung",
          "b": "Bundesgesetz",
          "c": "Wissenschaftliche Studie",
          "d": "Medikamentenplan"
        },
        "correct": "a",
        "explanation": "Pflegestandards regeln die praktische Durchführung."
      },
      {
        "question": "Wo gelten Pflegestandards?",
        "answers": {
          "a": "Weltweit",
          "b": "Bundesweit",
          "c": "Innerhalb einer Einrichtung",
          "d": "Nur im Krankenhaus"
        },
        "correct": "c",
        "explanation": "Es handelt sich um hausinterne Standards."
      },
      {
        "question": "Was setzen Pflegestandards um?",
        "answers": {
          "a": "Gesetze",
          "b": "Expertenstandards",
          "c": "Dienstpläne",
          "d": "Leitbilder"
        },
        "correct": "b",
        "explanation": "Hausstandards konkretisieren die Expertenstandards."
      },
      {
        "question": "Welche Aussage trifft auf Expertenstandards zu?",
        "answers": {
          "a": "Sie enthalten konkrete Handlungsketten.",
          "b": "Sie sind eher allgemein formuliert.",
          "c": "Sie gelten nur im Pflegeheim.",
          "d": "Sie ersetzen Hausstandards."
        },
        "correct": "b",
        "explanation": "Expertenstandards geben den wissenschaftlichen Rahmen vor."
      },
      {
        "question": "Worauf beruhen Expertenstandards?",
        "answers": {
          "a": "Erfahrungen einzelner Pflegekräfte",
          "b": "Umfassender nationaler und internationaler Fachliteratur",
          "c": "Patientenmeinungen",
          "d": "Dienstplänen"
        },
        "correct": "b",
        "explanation": "Grundlage ist eine evidenzbasierte Literaturanalyse."
      },
      {
        "question": "Welche gesetzliche Grundlage besitzen Expertenstandards?",
        "answers": {
          "a": "BGB",
          "b": "Pflegeweiterentwicklungsgesetz (§113a SGB XI)",
          "c": "Strafgesetzbuch",
          "d": "Arbeitsschutzgesetz"
        },
        "correct": "b",
        "explanation": "Dort ist ihre Entwicklung geregelt."
      },
      {
        "question": "Für welche Bereiche gelten Expertenstandards?",
        "answers": {
          "a": "Nur Altenpflege",
          "b": "Nur Krankenhaus",
          "c": "Für alle Pflegefelder",
          "d": "Nur Intensivstation"
        },
        "correct": "c",
        "explanation": "Sie gelten sektorenübergreifend."
      },
      {
        "question": "Nach welchem Kriterium werden Themen für Expertenstandards ausgewählt?",
        "answers": {
          "a": "Kosten",
          "b": "Relevanz",
          "c": "Zufall",
          "d": "Wünsche einzelner Einrichtungen"
        },
        "correct": "b",
        "explanation": "Entscheidend ist die Bedeutung für die Pflegepraxis."
      },
      {
        "question": "Welches Ziel verfolgen Expertenstandards?",
        "answers": {
          "a": "Professionalisierung der Pflege",
          "b": "Einheitliche Pflegequalität",
          "c": "Evidenzbasierte Pflege fördern",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Alle genannten Ziele gehören dazu."
      },
      {
        "question": "Was bedeutet evidenzbasierte Pflege?",
        "answers": {
          "a": "Pflege nach Gefühl",
          "b": "Pflege nach wissenschaftlichen Erkenntnissen",
          "c": "Pflege ohne Dokumentation",
          "d": "Pflege nur nach Erfahrung"
        },
        "correct": "b",
        "explanation": "Evidenz bedeutet wissenschaftlich belegtes Wissen."
      },
      {
        "question": "Welcher Expertenstandard wurde als erster entwickelt?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Dekubitusprophylaxe",
          "c": "Mobilität",
          "d": "Mundgesundheit"
        },
        "correct": "b",
        "explanation": "Der erste nationale Expertenstandard erschien im Jahr 2000."
      },
      {
        "question": "Wer entwickelte den ersten Expertenstandard?",
        "answers": {
          "a": "WHO",
          "b": "DNQP",
          "c": "RKI",
          "d": "Bundesärztekammer"
        },
        "correct": "b",
        "explanation": "Das Deutsche Netzwerk für Qualitätsentwicklung in der Pflege entwickelte ihn."
      },
      {
        "question": "Wie oft sollten Expertenstandards ungefähr aktualisiert werden?",
        "answers": {
          "a": "Jährlich",
          "b": "Alle 3–5 Jahre",
          "c": "Alle 20 Jahre",
          "d": "Nie"
        },
        "correct": "b",
        "explanation": "Neue wissenschaftliche Erkenntnisse werden regelmäßig eingearbeitet."
      },
      {
        "question": "Welches Ziel verfolgen nationale Expertenstandards?",
        "answers": {
          "a": "Personal abbauen",
          "b": "Pflegequalität sichern und weiterentwickeln",
          "c": "Kosten senken",
          "d": "Dokumentation reduzieren"
        },
        "correct": "b",
        "explanation": "Das Hauptziel ist eine qualitativ hochwertige, evidenzbasierte Pflege."
      },
      {
        "question": "Welches Ziel gehört NICHT zu den Expertenstandards?",
        "answers": {
          "a": "Professionalisierung der Pflege",
          "b": "Einheitliche Qualitätsstandards",
          "c": "Innovationen fördern",
          "d": "Pflegekräfte ersetzen"
        },
        "correct": "d",
        "explanation": "Expertenstandards unterstützen Pflegekräfte, ersetzen sie aber nicht."
      },
      {
        "question": "Welche Aussage beschreibt Expertenstandards am besten?",
        "answers": {
          "a": "Sie sind wissenschaftlich entwickelt.",
          "b": "Sie gelten nur für Pflegeheime.",
          "c": "Sie sind freiwillig.",
          "d": "Sie ersetzen Gesetze."
        },
        "correct": "a",
        "explanation": "Expertenstandards basieren auf wissenschaftlicher Evidenz."
      },
      {
        "question": "Wie viele Säulen besitzt ein Nationaler Expertenstandard?",
        "answers": {
          "a": "3",
          "b": "4",
          "c": "5",
          "d": "6"
        },
        "correct": "c",
        "explanation": "Expertenarbeitsgruppe, Literaturanalyse, Konsensuskonferenz, Implementierung und Aktualisierung."
      },
      {
        "question": "Was ist der erste Schritt bei der Entwicklung eines Expertenstandards?",
        "answers": {
          "a": "Implementierung",
          "b": "Expertenarbeitsgruppe",
          "c": "Aktualisierung",
          "d": "Evaluation"
        },
        "correct": "b",
        "explanation": "Eine Expertenarbeitsgruppe entwickelt den Standard."
      },
      {
        "question": "Welche Aufgabe hat die Literaturanalyse?",
        "answers": {
          "a": "Dienstpläne erstellen",
          "b": "Wissenschaftliche Grundlagen sammeln",
          "c": "Pflegekräfte prüfen",
          "d": "Patienten aufnehmen"
        },
        "correct": "b",
        "explanation": "Nationale und internationale Literatur wird ausgewertet."
      },
      {
        "question": "Welche Aufgabe hat die Konsensuskonferenz?",
        "answers": {
          "a": "Dienstplan schreiben",
          "b": "Den Expertenstandard fachlich diskutieren und abstimmen",
          "c": "Patienten aufnehmen",
          "d": "Pflegeplanung erstellen"
        },
        "correct": "b",
        "explanation": "Experten bewerten und diskutieren den Entwurf."
      },
      {
        "question": "Was bedeutet Implementierung?",
        "answers": {
          "a": "Entwicklung eines Gesetzes",
          "b": "Einführung des Expertenstandards in die Praxis",
          "c": "Aktualisierung",
          "d": "Qualitätskontrolle"
        },
        "correct": "b",
        "explanation": "Der Standard wird praktisch umgesetzt."
      },
      {
        "question": "Wie häufig werden Expertenstandards ungefähr aktualisiert?",
        "answers": {
          "a": "Jedes Jahr",
          "b": "Alle 3–5 Jahre",
          "c": "Alle 10 Jahre",
          "d": "Nie"
        },
        "correct": "b",
        "explanation": "Neue wissenschaftliche Erkenntnisse werden regelmäßig eingearbeitet."
      },
      {
        "question": "Welche Ebene gehört zum Aufbau des Expertenstandards Dekubitusprophylaxe?",
        "answers": {
          "a": "Einschätzung des Dekubitusrisikos",
          "b": "Medikamentengabe",
          "c": "Blutentnahme",
          "d": "Operation"
        },
        "correct": "a",
        "explanation": "Die Risikoeinschätzung ist der erste Schritt."
      },
      {
        "question": "Welche Ebene folgt auf die Risikoeinschätzung?",
        "answers": {
          "a": "Planung und Steuerung",
          "b": "Evaluation",
          "c": "Entlassung",
          "d": "Pflegegrad"
        },
        "correct": "a",
        "explanation": "Anschließend werden Maßnahmen geplant."
      },
      {
        "question": "Welche Ebene beinhaltet Information und Schulung?",
        "answers": {
          "a": "Ebene 2",
          "b": "Ebene 3",
          "c": "Ebene 5",
          "d": "Ebene 6"
        },
        "correct": "b",
        "explanation": "Patienten und Angehörige werden informiert und angeleitet."
      },
      {
        "question": "Welche Maßnahme gehört zur Ebene 4?",
        "answers": {
          "a": "Förderung der Eigenbewegung",
          "b": "Blutdruck messen",
          "c": "Medikamentengabe",
          "d": "Laborwerte bestimmen"
        },
        "correct": "a",
        "explanation": "Bewegung reduziert das Dekubitusrisiko."
      },
      {
        "question": "Welche Ebene beinhaltet druckverteilende Hilfsmittel?",
        "answers": {
          "a": "Ebene 1",
          "b": "Ebene 3",
          "c": "Ebene 5",
          "d": "Ebene 6"
        },
        "correct": "c",
        "explanation": "Spezielle Matratzen und Sitzkissen gehören dazu."
      },
      {
        "question": "Was geschieht in Ebene 6?",
        "answers": {
          "a": "Aufnahme",
          "b": "Beurteilung der Wirksamkeit",
          "c": "Diagnose",
          "d": "Entlassung"
        },
        "correct": "b",
        "explanation": "Die Wirksamkeit der Maßnahmen wird überprüft."
      },
      {
        "question": "Welcher Expertenstandard wurde speziell für Menschen mit Demenz entwickelt?",
        "answers": {
          "a": "Schmerzmanagement",
          "b": "Beziehungsgestaltung",
          "c": "Mobilität",
          "d": "Ernährung"
        },
        "correct": "b",
        "explanation": "Schwerpunkt ist die personenzentrierte Beziehung."
      },
      {
        "question": "Was soll durch eine gute Beziehungsgestaltung verbessert werden?",
        "answers": {
          "a": "Blutdruck",
          "b": "Lebens- und Versorgungsqualität",
          "c": "Körpergröße",
          "d": "Hörvermögen"
        },
        "correct": "b",
        "explanation": "Menschen mit Demenz profitieren von einer vertrauensvollen Beziehung."
      },
      {
        "question": "Welcher Schwerpunkt lag früher beim Schmerzmanagement?",
        "answers": {
          "a": "Nur Pflege",
          "b": "Nur Ärzte",
          "c": "Nur Physiotherapie",
          "d": "Nur Angehörige"
        },
        "correct": "b",
        "explanation": "Schmerztherapie wurde früher überwiegend als ärztliche Aufgabe angesehen."
      },
      {
        "question": "Welche Aufgabe hat die Pflege heute im Schmerzmanagement?",
        "answers": {
          "a": "Schmerzen erfassen und dokumentieren",
          "b": "Nur Medikamente geben",
          "c": "Diagnosen stellen",
          "d": "Operationen durchführen"
        },
        "correct": "a",
        "explanation": "Schmerzassessment ist eine zentrale pflegerische Aufgabe."
      },
      {
        "question": "Seit welchem Jahr gibt es den zusammengefassten Expertenstandard „Schmerzmanagement in der Pflege“?",
        "answers": {
          "a": "2003",
          "b": "2010",
          "c": "2019",
          "d": "2024"
        },
        "correct": "c",
        "explanation": "Seit 2019 sind die Standards für akute und chronische Schmerzen zusammengeführt."
      },
      {
        "question": "Wie viele schmerzfreie Krankenhäuser gibt es mittlerweile ungefähr in Deutschland?",
        "answers": {
          "a": "20",
          "b": "75",
          "c": "Über 150",
          "d": "Über 500"
        },
        "correct": "c",
        "explanation": "Über 150 Krankenhäuser sind zertifiziert."
      },
      {
        "question": "Was ist das Ziel professionellen Schmerzmanagements?",
        "answers": {
          "a": "Schmerzen ignorieren",
          "b": "Ausreichende Schmerzlinderung",
          "c": "Weniger Dokumentation",
          "d": "Weniger Pflegepersonal"
        },
        "correct": "b",
        "explanation": "Schmerzen sollen evidenzbasiert behandelt werden."
      },
      {
        "question": "Welche Berufsgruppe besitzt heute häufig besondere Expertise im Schmerzmanagement?",
        "answers": {
          "a": "Pain Nurses",
          "b": "Physiotherapeuten",
          "c": "Apotheker",
          "d": "Rettungsdienst"
        },
        "correct": "a",
        "explanation": "Speziell weitergebildete Pflegekräfte übernehmen wichtige Aufgaben."
      },
      {
        "question": "Welche Schwierigkeit wird bei Expertenstandards häufig genannt?",
        "answers": {
          "a": "Zu einfache Sprache",
          "b": "Empfehlungen sind teilweise nicht eindeutig formuliert.",
          "c": "Es gibt zu viele Pflegekräfte.",
          "d": "Es existiert keine Wissenschaft."
        },
        "correct": "b",
        "explanation": "Nicht jede Empfehlung lässt sich eindeutig interpretieren."
      },
      {
        "question": "Welches Fazit trifft auf Expertenstandards zu?",
        "answers": {
          "a": "Sie fördern eine individuelle, aktivierende und evidenzbasierte Pflege.",
          "b": "Sie ersetzen alle Gesetze.",
          "c": "Sie machen Dokumentation überflüssig.",
          "d": "Sie gelten nur im Krankenhaus."
        },
        "correct": "a",
        "explanation": "Richtig umgesetzt verbessern Expertenstandards die Pflegequalität und Patientensicherheit."
      },
      {
        "question": "Welcher Unterschied besteht zwischen einer Richtlinie und einer Leitlinie?",
        "answers": {
          "a": "Beide sind verpflichtend.",
          "b": "Richtlinien sind verpflichtend, Leitlinien sind Entscheidungshilfen.",
          "c": "Leitlinien sind Gesetze.",
          "d": "Es gibt keinen Unterschied."
        },
        "correct": "b",
        "explanation": "Richtlinien müssen eingehalten werden, Leitlinien können begründet verlassen werden."
      },
      {
        "question": "Welcher Unterschied besteht zwischen einem Pflegestandard und einem Expertenstandard?",
        "answers": {
          "a": "Kein Unterschied",
          "b": "Pflegestandards sind hausintern, Expertenstandards gelten bundesweit.",
          "c": "Expertenstandards gelten nur in Pflegeheimen.",
          "d": "Pflegestandards sind wissenschaftlicher."
        },
        "correct": "b",
        "explanation": "Expertenstandards bilden die Grundlage für hausinterne Pflegestandards."
      },
      {
        "question": "Welcher Begriff beschreibt die Vereinheitlichung von Arbeitsabläufen?",
        "answers": {
          "a": "Evaluation",
          "b": "Standardisierung",
          "c": "Pflegeplanung",
          "d": "Assessment"
        },
        "correct": "b",
        "explanation": "Standardisierung sorgt für gleichbleibende Qualität."
      },
      {
        "question": "Warum werden Arbeitsabläufe standardisiert?",
        "answers": {
          "a": "Damit jeder anders arbeitet.",
          "b": "Um Fehler zu vermeiden und Qualität zu sichern.",
          "c": "Damit weniger dokumentiert wird.",
          "d": "Nur zur Zeitersparnis."
        },
        "correct": "b",
        "explanation": "Einheitliche Abläufe erhöhen Patientensicherheit und Pflegequalität."
      },
      {
        "question": "Welche Aussage über Qualitätsmanagement ist richtig?",
        "answers": {
          "a": "QM betrifft nur die Pflegedienstleitung.",
          "b": "QM betrifft alle Mitarbeitenden.",
          "c": "QM betrifft nur Auszubildende.",
          "d": "QM betrifft nur Ärzte."
        },
        "correct": "b",
        "explanation": "Jede Pflegekraft arbeitet nach dem Qualitätsmanagementsystem."
      },
      {
        "question": "Welcher Bereich wird im QM geregelt?",
        "answers": {
          "a": "Hygienemaßnahmen",
          "b": "Einarbeitung neuer Mitarbeiter",
          "c": "Verhalten im Brandfall",
          "d": "Alle genannten"
        },
        "correct": "d",
        "explanation": "Qualitätsmanagement umfasst alle organisatorischen Abläufe."
      },
      {
        "question": "Welche Aussage zur Hygiene ist richtig?",
        "answers": {
          "a": "Hygieneregeln gehören zum Qualitätsmanagement.",
          "b": "Hygiene ist Privatsache.",
          "c": "Hygiene wird nur im OP geregelt.",
          "d": "Händedesinfektion ist freiwillig."
        },
        "correct": "a",
        "explanation": "Hygiene ist ein wesentlicher Bestandteil des QM."
      },
      {
        "question": "Welcher Bereich wird ebenfalls im QM-Handbuch geregelt?",
        "answers": {
          "a": "Urlaub und Krankmeldung",
          "b": "Lieblingsessen der Mitarbeiter",
          "c": "Private Termine",
          "d": "Freizeitgestaltung"
        },
        "correct": "a",
        "explanation": "Organisatorische Abläufe sind Bestandteil des QM."
      },
      {
        "question": "Welche Aussage über Fehlerkultur ist richtig?",
        "answers": {
          "a": "Fehler sollen verschwiegen werden.",
          "b": "Fehler werden genutzt, um Prozesse zu verbessern.",
          "c": "Fehler führen immer zur Kündigung.",
          "d": "Fehler dürfen nicht dokumentiert werden."
        },
        "correct": "b",
        "explanation": "Qualitätsmanagement verfolgt das Ziel, aus Fehlern zu lernen."
      },
      {
        "question": "Was ist das Leitbild einer Einrichtung?",
        "answers": {
          "a": "Der Dienstplan",
          "b": "Die gemeinsamen Werte und Ziele der Einrichtung",
          "c": "Die Medikamentenliste",
          "d": "Das Organigramm"
        },
        "correct": "b",
        "explanation": "Das Leitbild beschreibt die Grundhaltung der Einrichtung."
      },
      {
        "question": "Welche Aussage beschreibt Prozessqualität?",
        "answers": {
          "a": "Wie Pflege durchgeführt wird.",
          "b": "Wie viele Mitarbeiter vorhanden sind.",
          "c": "Wie teuer die Pflege ist.",
          "d": "Wie groß die Station ist."
        },
        "correct": "a",
        "explanation": "Prozessqualität bewertet den Ablauf der Pflege."
      },
      {
        "question": "Welche Aussage beschreibt Strukturqualität?",
        "answers": {
          "a": "Erfolg der Pflege",
          "b": "Ausstattung und personelle Voraussetzungen",
          "c": "Pflegeplanung",
          "d": "Evaluation"
        },
        "correct": "b",
        "explanation": "Strukturqualität umfasst Rahmenbedingungen."
      },
      {
        "question": "Welche Aussage beschreibt Ergebnisqualität?",
        "answers": {
          "a": "Dienstplan",
          "b": "Erreichen der Pflegeziele",
          "c": "Anzahl der Pflegekräfte",
          "d": "Stationsgröße"
        },
        "correct": "b",
        "explanation": "Ergebnisqualität bewertet den Pflegeerfolg."
      },
      {
        "question": "Warum werden Expertenstandards evidenzbasiert entwickelt?",
        "answers": {
          "a": "Damit sie auf wissenschaftlichen Erkenntnissen beruhen.",
          "b": "Damit sie kürzer sind.",
          "c": "Damit sie einfacher zu lesen sind.",
          "d": "Damit sie weniger kosten."
        },
        "correct": "a",
        "explanation": "Evidenz bedeutet wissenschaftlich belegte Wirksamkeit."
      },
      {
        "question": "Welches Ziel verfolgt die Professionalisierung der Pflege?",
        "answers": {
          "a": "Mehr Bürokratie",
          "b": "Wissenschaftlich begründetes pflegerisches Handeln",
          "c": "Weniger Verantwortung",
          "d": "Mehr Hierarchien"
        },
        "correct": "b",
        "explanation": "Professionelle Pflege orientiert sich an wissenschaftlichen Erkenntnissen."
      },
      {
        "question": "Warum fördern Expertenstandards die berufliche Identität?",
        "answers": {
          "a": "Weil sie Pflege als eigenständige Profession stärken.",
          "b": "Weil sie Ärzte ersetzen.",
          "c": "Weil sie Gesetze abschaffen.",
          "d": "Weil sie Dokumentation verbieten."
        },
        "correct": "a",
        "explanation": "Expertenstandards machen pflegerische Kompetenz sichtbar."
      },
      {
        "question": "Warum fördern Expertenstandards den Dialog mit anderen Berufsgruppen?",
        "answers": {
          "a": "Weil sie gemeinsame Qualitätsziele definieren.",
          "b": "Weil Pflege alle Entscheidungen allein trifft.",
          "c": "Weil Ärzte sie schreiben.",
          "d": "Weil sie keine Pflege betreffen."
        },
        "correct": "a",
        "explanation": "Einheitliche Standards erleichtern die Zusammenarbeit."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit chronischen Wunden?",
        "answers": {
          "a": "Versorgung von Menschen mit chronischen Wunden",
          "b": "Schmerzmanagement",
          "c": "Mobilität",
          "d": "Mundgesundheit"
        },
        "correct": "a",
        "explanation": "Ziel ist eine evidenzbasierte Wundversorgung."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit der Mundgesundheit?",
        "answers": {
          "a": "Förderung der Mundgesundheit",
          "b": "Ernährungsmanagement",
          "c": "Schmerzmanagement",
          "d": "Demenz"
        },
        "correct": "a",
        "explanation": "Mundgesundheit beeinflusst Ernährung und Lebensqualität."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit der Hautintegrität?",
        "answers": {
          "a": "Erhaltung und Förderung der Hautintegrität",
          "b": "Mobilität",
          "c": "Harnkontinenz",
          "d": "Demenz"
        },
        "correct": "a",
        "explanation": "Er soll Hautschäden früh erkennen und verhindern."
      },
      {
        "question": "Warum gelten Expertenstandards für alle Pflegebereiche?",
        "answers": {
          "a": "Damit bundesweit eine vergleichbare Pflegequalität erreicht wird.",
          "b": "Damit jede Einrichtung gleich aussieht.",
          "c": "Damit Dokumentation entfällt.",
          "d": "Damit alle Patienten gleich behandelt werden."
        },
        "correct": "a",
        "explanation": "Sie schaffen einheitliche Qualitätsmaßstäbe."
      },
      {
        "question": "Welche Aussage über Expertenstandards ist richtig?",
        "answers": {
          "a": "Sie beschreiben das Mindestniveau professioneller Pflege.",
          "b": "Sie ersetzen Pflegefachkräfte.",
          "c": "Sie gelten nur für Pflegeheime.",
          "d": "Sie sind freiwillig."
        },
        "correct": "a",
        "explanation": "Sie definieren das fachlich erwartete Qualitätsniveau."
      },
      {
        "question": "Warum sind Expertenstandards wichtig für MD-Prüfungen?",
        "answers": {
          "a": "Sie dienen als Bewertungsmaßstab.",
          "b": "Sie ersetzen Gesetze.",
          "c": "Sie werden nicht geprüft.",
          "d": "Sie gelten nur für Auszubildende."
        },
        "correct": "a",
        "explanation": "Der MD orientiert sich an anerkannten Qualitätsstandards."
      },
      {
        "question": "Welche Aussage ist richtig?",
        "answers": {
          "a": "Expertenstandards werden nur einmal veröffentlicht.",
          "b": "Expertenstandards werden regelmäßig überprüft und aktualisiert.",
          "c": "Expertenstandards ändern sich nie.",
          "d": "Expertenstandards gelten nur fünf Jahre."
        },
        "correct": "b",
        "explanation": "Neue wissenschaftliche Erkenntnisse werden eingearbeitet."
      },
      {
        "question": "Welches Fazit beschreibt Qualitätsmanagement und Expertenstandards am besten?",
        "answers": {
          "a": "Sie ermöglichen eine sichere, wissenschaftlich fundierte und patientenorientierte Pflege.",
          "b": "Sie dienen nur der Dokumentation.",
          "c": "Sie erhöhen ausschließlich den Verwaltungsaufwand.",
          "d": "Sie sind nur für Führungskräfte wichtig."
        },
        "correct": "a",
        "explanation": "Qualitätsmanagement und Expertenstandards verbessern Patientensicherheit, Pflegequalität und Professionalität."
      },
      {
        "question": "Welche Aussage über Qualitätsmanagement (QM) ist richtig?",
        "answers": {
          "a": "QM beschäftigt sich nur mit Pflegefehlern.",
          "b": "QM umfasst alle Maßnahmen zur Sicherung und Verbesserung der Qualität.",
          "c": "QM gilt nur für Krankenhäuser.",
          "d": "QM betrifft nur die Stationsleitung."
        },
        "correct": "b",
        "explanation": "Qualitätsmanagement umfasst alle organisatorischen und fachlichen Maßnahmen zur kontinuierlichen Qualitätsverbesserung."
      },
      {
        "question": "Welche Aufgabe hat das QM-Handbuch?",
        "answers": {
          "a": "Es enthält nur den Dienstplan.",
          "b": "Es beschreibt Regelungen, Standards und Arbeitsabläufe.",
          "c": "Es enthält ausschließlich Medikamentenlisten.",
          "d": "Es dient nur Auszubildenden."
        },
        "correct": "b",
        "explanation": "Das QM-Handbuch ist die zentrale Sammlung aller verbindlichen Regelungen."
      },
      {
        "question": "Welcher Bereich wird typischerweise NICHT im QM-Handbuch geregelt?",
        "answers": {
          "a": "Hygienemaßnahmen",
          "b": "Verhalten im Brandfall",
          "c": "Private Hobbys der Mitarbeiter",
          "d": "Einarbeitung neuer Mitarbeiter"
        },
        "correct": "c",
        "explanation": "Private Angelegenheiten gehören nicht zum Qualitätsmanagement."
      },
      {
        "question": "Warum sind standardisierte Arbeitsabläufe wichtig?",
        "answers": {
          "a": "Damit jeder Mitarbeiter unterschiedlich arbeitet.",
          "b": "Um Fehler zu reduzieren und die Patientensicherheit zu erhöhen.",
          "c": "Damit weniger dokumentiert werden muss.",
          "d": "Damit Pflegekräfte schneller Feierabend haben."
        },
        "correct": "b",
        "explanation": "Einheitliche Abläufe verbessern die Qualität und erhöhen die Sicherheit."
      },
      {
        "question": "Welche Aussage beschreibt eine Richtlinie richtig?",
        "answers": {
          "a": "Sie ist nur eine Empfehlung.",
          "b": "Sie besitzt verbindlichen Charakter.",
          "c": "Sie gilt nur für Auszubildende.",
          "d": "Sie wird von jeder Station individuell erstellt."
        },
        "correct": "b",
        "explanation": "Richtlinien sind verpflichtende Handlungsvorschriften."
      },
      {
        "question": "Welches Merkmal trifft auf Leitlinien zu?",
        "answers": {
          "a": "Sie sind immer verpflichtend.",
          "b": "Sie dienen als wissenschaftliche Entscheidungshilfe.",
          "c": "Sie ersetzen Gesetze.",
          "d": "Sie gelten nur im Ausland."
        },
        "correct": "b",
        "explanation": "Leitlinien unterstützen Entscheidungen, lassen aber begründete Abweichungen zu."
      },
      {
        "question": "Welche Aussage über Pflegestandards ist richtig?",
        "answers": {
          "a": "Sie werden vom DNQP erstellt.",
          "b": "Sie beschreiben konkrete pflegerische Handlungsabläufe einer Einrichtung.",
          "c": "Sie gelten weltweit.",
          "d": "Sie ersetzen Expertenstandards."
        },
        "correct": "b",
        "explanation": "Pflegestandards setzen Expertenstandards praktisch um."
      },
      {
        "question": "Welche Aussage über Expertenstandards trifft zu?",
        "answers": {
          "a": "Sie enthalten detaillierte Arbeitsanweisungen.",
          "b": "Sie sind allgemein formuliert und wissenschaftlich begründet.",
          "c": "Sie gelten nur in Altenheimen.",
          "d": "Sie werden von jeder Einrichtung selbst erstellt."
        },
        "correct": "b",
        "explanation": "Expertenstandards formulieren wissenschaftliche Qualitätsziele."
      },
      {
        "question": "Welche Institution entwickelte den ersten nationalen Expertenstandard?",
        "answers": {
          "a": "WHO",
          "b": "DNQP",
          "c": "Bundesgesundheitsministerium",
          "d": "MD"
        },
        "correct": "b",
        "explanation": "Das DNQP entwickelte im Jahr 2000 den ersten Expertenstandard."
      },
      {
        "question": "Welcher Expertenstandard war der erste nationale Expertenstandard?",
        "answers": {
          "a": "Sturzprophylaxe",
          "b": "Schmerzmanagement",
          "c": "Dekubitusprophylaxe",
          "d": "Mundgesundheit"
        },
        "correct": "c",
        "explanation": "Die Dekubitusprophylaxe war der erste veröffentlichte Expertenstandard."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit der Entlassung eines Patienten?",
        "answers": {
          "a": "Mobilität",
          "b": "Entlassungsmanagement",
          "c": "Dekubitusprophylaxe",
          "d": "Mundgesundheit"
        },
        "correct": "b",
        "explanation": "Ziel ist eine sichere Weiterversorgung nach der Entlassung."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit chronischen Wunden?",
        "answers": {
          "a": "Förderung der Mobilität",
          "b": "Pflege von Menschen mit chronischen Wunden",
          "c": "Schmerzmanagement",
          "d": "Beziehungsgestaltung"
        },
        "correct": "b",
        "explanation": "Er beschreibt die evidenzbasierte Versorgung chronischer Wunden."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit der Mundgesundheit?",
        "answers": {
          "a": "Förderung der Mundgesundheit",
          "b": "Ernährungsmanagement",
          "c": "Sturzprophylaxe",
          "d": "Harnkontinenz"
        },
        "correct": "a",
        "explanation": "Ziel ist die Erhaltung der Mundgesundheit und Lebensqualität."
      },
      {
        "question": "Welcher Expertenstandard beschäftigt sich mit der Haut?",
        "answers": {
          "a": "Erhaltung und Förderung der Hautintegrität",
          "b": "Schmerzmanagement",
          "c": "Mobilität",
          "d": "Entlassungsmanagement"
        },
        "correct": "a",
        "explanation": "Er soll Hautschäden früh erkennen und vermeiden."
      },
      {
        "question": "Welche Aussage beschreibt den Nutzen von Expertenstandards am besten?",
        "answers": {
          "a": "Sie schaffen eine bundesweit vergleichbare Pflegequalität.",
          "b": "Sie ersetzen den Pflegeprozess.",
          "c": "Sie gelten nur für Pflegeheime.",
          "d": "Sie sind ausschließlich theoretisch."
        },
        "correct": "a",
        "explanation": "Expertenstandards schaffen einheitliche Qualitätsanforderungen."
      },
      {
        "question": "Welches Ziel verfolgt die Implementierung eines Expertenstandards?",
        "answers": {
          "a": "Neue Gesetze erlassen.",
          "b": "Den Standard praktisch im Pflegealltag umsetzen.",
          "c": "Pflegekräfte prüfen.",
          "d": "Dienstpläne schreiben."
        },
        "correct": "b",
        "explanation": "Nach der Entwicklung erfolgt die Einführung in die Praxis."
      },
      {
        "question": "Welche Aussage trifft auf die Aktualisierung von Expertenstandards zu?",
        "answers": {
          "a": "Sie erfolgt nie.",
          "b": "Sie erfolgt regelmäßig auf Grundlage neuer wissenschaftlicher Erkenntnisse.",
          "c": "Sie erfolgt täglich.",
          "d": "Sie erfolgt nur auf Wunsch einzelner Einrichtungen."
        },
        "correct": "b",
        "explanation": "Neue Evidenz führt zu regelmäßigen Überarbeitungen."
      },
      {
        "question": "Warum werden Expertenstandards evidenzbasiert entwickelt?",
        "answers": {
          "a": "Damit sie auf wissenschaftlichen Erkenntnissen beruhen.",
          "b": "Damit sie kürzer werden.",
          "c": "Damit weniger dokumentiert werden muss.",
          "d": "Damit sie günstiger sind."
        },
        "correct": "a",
        "explanation": "Evidenzbasierung erhöht die Wirksamkeit und Qualität der Pflege."
      },
      {
        "question": "Welche Aussage beschreibt die Professionalisierung der Pflege?",
        "answers": {
          "a": "Pflege orientiert sich an wissenschaftlichen Erkenntnissen.",
          "b": "Pflege wird ausschließlich ärztlich durchgeführt.",
          "c": "Dokumentation entfällt.",
          "d": "Pflege wird vereinfacht."
        },
        "correct": "a",
        "explanation": "Professionalisierung stärkt die Eigenständigkeit der Pflege."
      },
      {
        "question": "Welche Aussage trifft auf die berufliche Identität der Pflege zu?",
        "answers": {
          "a": "Expertenstandards stärken die berufliche Rolle der Pflege.",
          "b": "Expertenstandards schwächen die Pflege.",
          "c": "Expertenstandards betreffen nur Ärzte.",
          "d": "Expertenstandards haben keinen Einfluss."
        },
        "correct": "a",
        "explanation": "Einheitliche Qualitätsstandards fördern das Berufsbild."
      },
      {
        "question": "Warum fördern Expertenstandards die Zusammenarbeit mit anderen Berufsgruppen?",
        "answers": {
          "a": "Sie schaffen gemeinsame Qualitätsziele.",
          "b": "Sie ersetzen andere Berufsgruppen.",
          "c": "Sie gelten nur für Ärzte.",
          "d": "Sie verbieten Teamarbeit."
        },
        "correct": "a",
        "explanation": "Einheitliche Standards erleichtern die interprofessionelle Zusammenarbeit."
      },
      {
        "question": "Welche Kritik wird an Expertenstandards häufig geäußert?",
        "answers": {
          "a": "Empfehlungen sind teilweise nicht eindeutig formuliert.",
          "b": "Sie enthalten keine Wissenschaft.",
          "c": "Sie gelten nur für Ärzte.",
          "d": "Sie sind kostenlos verfügbar."
        },
        "correct": "a",
        "explanation": "Manche Empfehlungen lassen Interpretationsspielraum."
      },
      {
        "question": "Welche weitere Schwierigkeit wird genannt?",
        "answers": {
          "a": "Es existieren zu viele Implementierungshilfen.",
          "b": "Nicht alle Pflegekräfte setzen sich ausreichend mit Expertenstandards auseinander.",
          "c": "Expertenstandards gelten nur für eine Station.",
          "d": "Sie enthalten keine Literatur."
        },
        "correct": "b",
        "explanation": "Die Bereitschaft zur Umsetzung ist unterschiedlich ausgeprägt."
      },
      {
        "question": "Warum ist die Einführung von Expertenstandards manchmal schwierig?",
        "answers": {
          "a": "Sie gelten für alle Pflegeeinrichtungen und müssen unterschiedlich umgesetzt werden.",
          "b": "Sie gelten nur im Ausland.",
          "c": "Sie gelten nur für Intensivstationen.",
          "d": "Sie sind ausschließlich für Auszubildende."
        },
        "correct": "a",
        "explanation": "Die unterschiedlichen Versorgungsbereiche erschweren konkrete Empfehlungen."
      },
      {
        "question": "Welches Fazit beschreibt Qualitätsmanagement und Expertenstandards am besten?",
        "answers": {
          "a": "Sie ermöglichen eine sichere, individuelle, evidenzbasierte und qualitativ hochwertige Pflege.",
          "b": "Sie dienen nur der Dokumentation.",
          "c": "Sie ersetzen den Pflegeprozess.",
          "d": "Sie gelten ausschließlich für Pflegeheime."
        },
        "correct": "a",
        "explanation": "Qualitätsmanagement und Expertenstandards bilden die Grundlage moderner professioneller Pflege."
      },
      {
        "question": "Welches Gesetz bildet die Grundlage für nationale Expertenstandards?",
        "answers": {
          "a": "Arbeitsschutzgesetz",
          "b": "Pflegeweiterentwicklungsgesetz (§ 113a SGB XI)",
          "c": "Infektionsschutzgesetz",
          "d": "Arzneimittelgesetz"
        },
        "correct": "b",
        "explanation": "Das Pflegeweiterentwicklungsgesetz bildet die gesetzliche Grundlage für Expertenstandards."
      },
      {
        "question": "Nach welchem Kriterium werden neue Expertenstandards ausgewählt?",
        "answers": {
          "a": "Zufall",
          "b": "Wirtschaftlichkeit",
          "c": "Relevanz für die Pflegepraxis",
          "d": "Wunsch einzelner Einrichtungen"
        },
        "correct": "c",
        "explanation": "Die Themen werden nach ihrer Bedeutung für die Pflege ausgewählt."
      },
      {
        "question": "Für welche Bereiche gelten nationale Expertenstandards?",
        "answers": {
          "a": "Nur Altenpflege",
          "b": "Nur Krankenhäuser",
          "c": "Für alle Pflegefelder",
          "d": "Nur ambulante Pflege"
        },
        "correct": "c",
        "explanation": "Sie gelten in allen pflegerischen Versorgungsbereichen."
      },
      {
        "question": "Welches Ziel verfolgen Expertenstandards?",
        "answers": {
          "a": "Pflege vereinfachen",
          "b": "Einheitliche Pflegequalität fördern",
          "c": "Personal abbauen",
          "d": "Kosten senken"
        },
        "correct": "b",
        "explanation": "Ziel ist eine bundesweit vergleichbare Pflegequalität."
      },
      {
        "question": "Welche Aussage beschreibt die Strukturqualität?",
        "answers": {
          "a": "Wie Pflege durchgeführt wird",
          "b": "Welche Ergebnisse erreicht wurden",
          "c": "Personelle und materielle Voraussetzungen",
          "d": "Wie Patienten dokumentiert werden"
        },
        "correct": "c",
        "explanation": "Strukturqualität beschreibt die Rahmenbedingungen der Pflege."
      },
      {
        "question": "Welche Aussage beschreibt die Prozessqualität?",
        "answers": {
          "a": "Ausstattung einer Station",
          "b": "Durchführung der Pflege",
          "c": "Anzahl der Pflegekräfte",
          "d": "Ergebnis einer Behandlung"
        },
        "correct": "b",
        "explanation": "Prozessqualität beschreibt den Ablauf pflegerischer Maßnahmen."
      },
      {
        "question": "Welche Aussage beschreibt die Ergebnisqualität?",
        "answers": {
          "a": "Anzahl der Pflegekräfte",
          "b": "Erfolg der Pflege",
          "c": "Größe der Station",
          "d": "Dienstplan"
        },
        "correct": "b",
        "explanation": "Ergebnisqualität bewertet das Erreichen der Pflegeziele."
      },
      {
        "question": "Welche Aussage trifft auf Pflegestandards zu?",
        "answers": {
          "a": "Sie gelten deutschlandweit.",
          "b": "Sie werden innerhalb einer Einrichtung entwickelt.",
          "c": "Sie ersetzen Expertenstandards.",
          "d": "Sie sind Gesetze."
        },
        "correct": "b",
        "explanation": "Pflegestandards sind hausinterne Standards."
      },
      {
        "question": "Warum benötigen Einrichtungen Pflegestandards?",
        "answers": {
          "a": "Zur Umsetzung der Expertenstandards",
          "b": "Nur wegen des MD",
          "c": "Nur für Auszubildende",
          "d": "Ausschließlich für Ärzte"
        },
        "correct": "a",
        "explanation": "Expertenstandards werden durch Pflegestandards praktisch umgesetzt."
      },
      {
        "question": "Welche Aussage über Leitlinien ist richtig?",
        "answers": {
          "a": "Sie sind immer verpflichtend.",
          "b": "Sie sind wissenschaftlich begründete Entscheidungshilfen.",
          "c": "Sie ersetzen Gesetze.",
          "d": "Sie gelten nur in Krankenhäusern."
        },
        "correct": "b",
        "explanation": "Leitlinien geben Empfehlungen auf Grundlage wissenschaftlicher Erkenntnisse."
      },
      {
        "question": "Welcher Begriff beschreibt verbindliche Handlungsvorschriften?",
        "answers": {
          "a": "Leitlinie",
          "b": "Richtlinie",
          "c": "Expertenstandard",
          "d": "Pflegeprozess"
        },
        "correct": "b",
        "explanation": "Richtlinien besitzen verbindlichen Charakter."
      },
      {
        "question": "Welcher Bereich gehört NICHT zum Qualitätsmanagement?",
        "answers": {
          "a": "Hygieneregeln",
          "b": "Verhalten im Notfall",
          "c": "Private Freizeitgestaltung",
          "d": "Einarbeitung neuer Mitarbeiter"
        },
        "correct": "c",
        "explanation": "Private Angelegenheiten gehören nicht zum QM."
      },
      {
        "question": "Warum werden Hygienestandards festgelegt?",
        "answers": {
          "a": "Damit weniger dokumentiert wird.",
          "b": "Zur Vermeidung von Infektionen.",
          "c": "Wegen der Dienstplanung.",
          "d": "Zur Personalplanung."
        },
        "correct": "b",
        "explanation": "Hygiene schützt Patienten und Mitarbeitende."
      },
      {
        "question": "Welche Aussage zum QM-Handbuch stimmt?",
        "answers": {
          "a": "Es enthält verbindliche Regelungen der Einrichtung.",
          "b": "Es enthält nur Dienstpläne.",
          "c": "Es gilt nur für Führungskräfte.",
          "d": "Es ist freiwillig."
        },
        "correct": "a",
        "explanation": "Das QM-Handbuch beschreibt alle wichtigen Prozesse."
      },
      {
        "question": "Warum ist Fehlerkultur Bestandteil des Qualitätsmanagements?",
        "answers": {
          "a": "Fehler sollen vertuscht werden.",
          "b": "Aus Fehlern sollen Verbesserungen entstehen.",
          "c": "Fehler werden nicht dokumentiert.",
          "d": "Fehler spielen keine Rolle."
        },
        "correct": "b",
        "explanation": "Ziel ist kontinuierliche Qualitätsverbesserung."
      },
      {
        "question": "Welches Ziel verfolgt die Standardisierung?",
        "answers": {
          "a": "Jeder arbeitet unterschiedlich.",
          "b": "Einheitliche Pflegequalität.",
          "c": "Weniger Verantwortung.",
          "d": "Weniger Patienten."
        },
        "correct": "b",
        "explanation": "Standardisierung reduziert Fehler und verbessert Qualität."
      },
      {
        "question": "Welche Aussage über Expertenstandards ist richtig?",
        "answers": {
          "a": "Sie sind wissenschaftlich fundiert.",
          "b": "Sie gelten nur im Pflegeheim.",
          "c": "Sie ersetzen Gesetze.",
          "d": "Sie gelten nur für Auszubildende."
        },
        "correct": "a",
        "explanation": "Sie beruhen auf wissenschaftlicher Evidenz."
      },
      {
        "question": "Welcher Vorteil entsteht durch bundesweite Expertenstandards?",
        "answers": {
          "a": "Vergleichbare Pflegequalität",
          "b": "Weniger Pflegekräfte",
          "c": "Weniger Patienten",
          "d": "Keine Dokumentation"
        },
        "correct": "a",
        "explanation": "Einheitliche Standards erhöhen die Qualität deutschlandweit."
      },
      {
        "question": "Welche Aussage beschreibt evidenzbasierte Pflege?",
        "answers": {
          "a": "Pflege nach Erfahrung allein",
          "b": "Pflege auf Grundlage wissenschaftlicher Erkenntnisse",
          "c": "Pflege ohne Dokumentation",
          "d": "Pflege nur nach ärztlicher Anordnung"
        },
        "correct": "b",
        "explanation": "Evidenzbasierte Pflege verbindet Wissenschaft, Erfahrung und Patientenbedürfnisse."
      },
      {
        "question": "Welcher Satz fasst Qualitätsmanagement am besten zusammen?",
        "answers": {
          "a": "Qualitätsmanagement bedeutet die kontinuierliche Planung, Sicherung, Überprüfung und Verbesserung aller pflegerischen Prozesse.",
          "b": "Qualitätsmanagement dient nur der Dokumentation.",
          "c": "Qualitätsmanagement betrifft nur die Stationsleitung.",
          "d": "Qualitätsmanagement ist freiwillig."
        },
        "correct": "a",
        "explanation": "QM ist ein fortlaufender Verbesserungsprozess und Grundlage professioneller Pflege."
      }
    ]
  }
};

// main.js - Versione finale con salvataggio record corretto e switch sistemato

let questions = [];           // Array delle domande caricate da questions.json
let currentQuestion = 0;      // Indice della domanda corrente (0-based)
const prizeLevels = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000]; // Premi per ogni round
let currentPrize = 0;         // Premio attuale
let safeMilestone = 0;        // Premio sicuro (fissato dopo la 5ª domanda)
let playerName = "";          // Nome del giocatore
let selectedThemeKey = "schmerz";

// Variabili per gli aiuti (disabilitabili una volta usati)
let help5050Used = false;
let helpSwitchUsed = false;
let pendingAnswer = null;
let answerLocked = false;

document.addEventListener("DOMContentLoaded", () => {
  const modalEl = document.getElementById("playerModal");
  if (typeof $ !== "undefined" && $.fn.modal) {
    $('#playerModal').modal({
      backdrop: 'static',
      keyboard: false
    });
  } else {
    modalEl.classList.add("show");
    modalEl.style.display = "block";
    document.body.classList.add("modal-open");
  }

  populateThemeSelect();

  // Bottone "Inizia il gioco"
  document.getElementById("startGameBtn").addEventListener("click", () => {
    const nameInput = document.getElementById("modalPlayerName").value.trim();
    if (nameInput === "") {
      alert("Bitte gib deinen Namen ein!");
      return;
    }
    playerName = nameInput;
    selectedThemeKey = document.getElementById("modalThemeSelect").value || "schmerz";
    if (typeof $ !== "undefined" && $.fn.modal) {
      $('#playerModal').modal('hide');
    } else {
      modalEl.classList.remove("show");
      modalEl.style.display = "none";
      document.body.classList.remove("modal-open");
    }
    
    // Reset dello stato della partita e degli aiuti
    currentQuestion = 0;
    currentPrize = 0;
    safeMilestone = 0;
    help5050Used = false;
    helpSwitchUsed = false;
    pendingAnswer = null;
    answerLocked = false;
    document.getElementById("btn5050").disabled = false;
    document.getElementById("btnSwitch").disabled = false;
    document.getElementById("quitGame").disabled = false;

    updateStatus();
    updateBoard("ongoing");
    drawCanvasIntro();
    initGame();
  });

  // Eventi per pulsanti fissi
  document.getElementById("quitGame").addEventListener("click", quitGame);
  document.getElementById("newGame").addEventListener("click", newGame);
  document.getElementById("closeGame").addEventListener("click", () => { window.location.href = "index.html"; });
  
  // Eventi per gli aiuti
  document.getElementById("btn5050").addEventListener("click", use5050);
  document.getElementById("btnSwitch").addEventListener("click", useSwitch);
  document.getElementById("confirmAnswerBtn").addEventListener("click", confirmAnswer);
  document.getElementById("cancelAnswerBtn").addEventListener("click", clearAnswerSelection);
  resizeGameCanvas();
  window.addEventListener("resize", () => {
    resizeGameCanvas();
    normalizeAnswerButtonHeights();
  });
});

function populateThemeSelect() {
  const select = document.getElementById("modalThemeSelect");
  if (!select) return;

  const prettyThemeName = (key, fallbackLabel) => {
    const fixedNames = {
      schmerz: "Schmerz",
      demenz: "Demenz",
      hygiene: "Hygiene",
      medikamenten: "Medikamentenlehre",
      notfallmanagement: "Notfallmanagement",
      qualit_tsmanagement: "Qualitätsmanagement",
      expertenstandards_in_der_pflege: "Expertenstandards in der Pflege",
      "100_mc_fragen_pflegeprozess": "Pflegeprozess"
    };

    return fixedNames[key] || fallbackLabel || key.replace(/_/g, " ");
  };

  select.innerHTML = "";
  const sortedThemes = Object.entries(QUESTION_THEMES).sort((a, b) => {
    const aName = prettyThemeName(a[0], a[1].label);
    const bName = prettyThemeName(b[0], b[1].label);
    return aName.localeCompare(bName, "de", { sensitivity: "base" });
  });

  sortedThemes.forEach(([key, theme]) => {
    const option = document.createElement("option");
    option.value = key;
    option.textContent = `${prettyThemeName(key, theme.label)} (${theme.questions.length} Fragen)`;
    select.appendChild(option);
  });

  if (QUESTION_THEMES[selectedThemeKey]) {
    select.value = selectedThemeKey;
  }
}

function getSelectedThemeQuestions() {
  const theme = QUESTION_THEMES[selectedThemeKey] || QUESTION_THEMES.schmerz;
  return theme ? theme.questions : [];
}

function initGame() {
  const data = getSelectedThemeQuestions();
  if (!data || !Array.isArray(data) || data.length === 0) {
    alert("Fehler: Keine Fragen gefunden.");
    return;
  }
  questions = data.slice();
  questions.sort(() => Math.random() - 0.5);

  if (questions.length >= prizeLevels.length + 3) {
    questions = questions.slice(0, prizeLevels.length + 3);
  }
  showQuestion();
}

function updateStatus() {
  const statusArea = document.getElementById("statusArea");
  if (currentQuestion < prizeLevels.length) {
    statusArea.innerHTML = `
      <div class="status-grid">
        <span class="status-chip"><span class="status-label">Spieler</span> ${playerName}</span>
        <span class="status-chip"><span class="status-label">Frage</span> <strong>${currentQuestion + 1} / ${prizeLevels.length}</strong></span>
        <span class="status-chip"><span class="status-label">Gewinn</span> € ${currentPrize}</span>
        <span class="status-chip"><span class="status-label">Nächster</span> € ${prizeLevels[currentQuestion]}</span>
      </div>`;
  } else {
    statusArea.innerHTML = `
      <div class="status-grid status-complete">
        <span class="status-chip"><span class="status-label">Spieler</span> ${playerName}</span>
        <span class="status-chip status-chip-wide">Alle Fragen beantwortet · Gesamtgewinn: <strong>€ ${currentPrize}</strong></span>
      </div>`;
  }
}

function updateBoard(status) {
  // status: "ongoing", "win" o "lose"
  const boardDiv = document.getElementById("prizeBoard");
  let html = "<ul class='prize-ladder'>";
  for (let i = 0; i < prizeLevels.length; i++) {
    let className = "prize-item";
    if (i < currentQuestion) {
      className += " prize-passed";
    } else if (i === currentQuestion) {
      if (status === "ongoing") {
        className += " prize-current";
      } else if (status === "lose") {
        className += " prize-lost";
      } else if (status === "win") {
        className += " prize-won";
      }
    }
    html += `<li class="${className}">Frage ${i + 1}: € ${prizeLevels[i]}</li>`;
  }
  html += "</ul>";
  boardDiv.innerHTML = html;
}

function showQuestion() {
  answerLocked = false;
  document.getElementById("quitGame").disabled = false;
  if (!help5050Used) document.getElementById("btn5050").disabled = false;
  if (!helpSwitchUsed) document.getElementById("btnSwitch").disabled = false;

  updateStatus();
  updateBoard("ongoing");

  if (currentQuestion >= prizeLevels.length) {
    winGame();
    return;
  }
  
  const q = questions[currentQuestion];
  if (!q) {
    console.error("Domanda non trovata per currentQuestion", currentQuestion);
    winGame();
    return;
  }
  
  const questionDiv = document.getElementById("question");
  questionDiv.innerText = q.question;
  
  const answersDiv = document.getElementById("answers");
  answersDiv.innerHTML = "";
  clearAnswerSelection();

  for (let key in q.answers) {
    let col = document.createElement("div");
    col.className = "col-12 col-sm-6 mb-2 mb-md-3";
    
    let btn = document.createElement("button");
    btn.className = "answer-btn btn-block";
    btn.setAttribute("data-answer", key);
    btn.innerText = key.toUpperCase() + ": " + q.answers[key];
    btn.addEventListener("click", () => selectAnswer(key));
    
    col.appendChild(btn);
    answersDiv.appendChild(col);
  }

  normalizeAnswerButtonHeights();
}

function selectAnswer(key) {
  if (answerLocked) return;

  pendingAnswer = key;
  document.querySelectorAll("#answers .answer-btn").forEach(btn => {
    btn.classList.toggle("selected", btn.getAttribute("data-answer") === key);
  });

  const q = questions[currentQuestion];
  const label = key.toUpperCase() + ": " + q.answers[key];
  document.getElementById("confirmText").innerText =
    `Ist das deine endgültige Antwort?\n${label}`;
  document.getElementById("confirmArea").style.display = "block";
}

function clearAnswerSelection() {
  pendingAnswer = null;
  document.querySelectorAll("#answers .answer-btn").forEach(btn => {
    btn.classList.remove("selected");
  });
  document.getElementById("confirmArea").style.display = "none";
}

function confirmAnswer() {
  if (answerLocked || !pendingAnswer) return;
  const selected = pendingAnswer;
  clearAnswerSelection();
  checkAnswer(selected);
}

function checkAnswer(selected) {
  if (answerLocked) return;
  answerLocked = true;

  document.querySelectorAll("#answers .answer-btn").forEach(btn => {
    btn.disabled = true;
  });
  document.getElementById("btn5050").disabled = true;
  document.getElementById("btnSwitch").disabled = true;
  document.getElementById("quitGame").disabled = true;

  const q = questions[currentQuestion];
  const correct = q.correct;

  window.scrollTo({ top: 0, behavior: "smooth" });
  
  if (selected === correct) {
    animateCorrect();  // Avvia animazione corretta: 5 sec prima del pulso finale
    currentPrize = prizeLevels[currentQuestion];
    if (currentQuestion === 4) {  // Stabilisce il premio sicuro dopo la 5ª domanda
      safeMilestone = prizeLevels[4];
    }
    currentQuestion++;
    setTimeout(() => {
      updateBoard("ongoing");
      showQuestion();
    }, 5000);
  } else {
    const correctLabel = correct.toUpperCase() + ": " + q.answers[correct];
    const explanation = q.explanation ? q.explanation : "";
    highlightAnswers(selected, correct);
    animateWrong(correctLabel, explanation);
    setTimeout(() => {
      updateBoard("lose");
      loseGame(correctLabel, explanation);
    }, 5000);
  }
}

function highlightAnswers(selected, correct) {
  document.querySelectorAll("#answers .answer-btn").forEach(btn => {
    const key = btn.getAttribute("data-answer");
    btn.classList.remove("selected");
    if (key === selected) btn.classList.add("answer-wrong");
    if (key === correct) btn.classList.add("answer-correct");
  });
}

function quitGame() {
  animateQuit();    
  setTimeout(() => { endGame("Du hast aufgehört", currentPrize); }, 5000);
}

function loseGame(correctLabel, explanation) {
  const reason = explanation ? `\nBegründung: ${explanation}` : "";
  endGame(
    `Falsche Antwort, du hast verloren!\nDie richtige Antwort war: ${correctLabel}${reason}`,
    safeMilestone
  );
}

function winGame() {
  animateWin();
  setTimeout(() => { endGame("Du hast gewonnen! Gewinn gesichert!", currentPrize); }, 5000);
}

function endGame(message, finalPrize) {
  // Nasconde l'area del quiz e mostra l'area di fine partita
  document.getElementById("quizArea").style.display = "none";
  const endArea = document.getElementById("endGame");
  endArea.style.display = "block";
  
  document.getElementById("resultMessage").innerText = message;
  document.getElementById("score").innerText = finalPrize;
  document.getElementById("displayPlayerName").innerText = playerName;
  updateStatus();
  if (message.indexOf("verloren") !== -1) {
    updateBoard("lose");
  } else {
    updateBoard("win");
  }
}

function newGame() {
  // Reset dello stato e ripulizia del canvas
  document.getElementById("quizArea").style.display = "block";
  document.getElementById("endGame").style.display = "none";
  currentQuestion = 0;
  currentPrize = 0;
  safeMilestone = 0;
  help5050Used = false;
  helpSwitchUsed = false;
  pendingAnswer = null;
  answerLocked = false;
  document.getElementById("btn5050").disabled = false;
  document.getElementById("btnSwitch").disabled = false;
  document.getElementById("quitGame").disabled = false;
  updateStatus();
  updateBoard("ongoing");
  clearCanvas();
  drawCanvasIntro();
  initGame();
}

/* -------------------------------
   Funzione per pulire il canvas
------------------------------- */
function clearCanvas() {
  const canvas = document.getElementById("gameCanvas");
  if (canvas && canvas.getContext) {
    const ctx = canvas.getContext("2d");
    ctx.clearRect(0, 0, canvas.width, canvas.height);
  }
}

function resizeGameCanvas() {
  const canvas = document.getElementById("gameCanvas");
  if (!canvas) return;
  const container = document.getElementById("canvasContainer");
  const maxWidth = container ? container.clientWidth : 800;
  const width = Math.min(800, Math.max(280, maxWidth));
  const height = Math.round(width * 0.25);
  canvas.style.width = width + "px";
  canvas.style.height = height + "px";
}

function normalizeAnswerButtonHeights() {
  const buttons = Array.from(document.querySelectorAll("#answers .answer-btn"));
  if (!buttons.length) return;

  buttons.forEach(btn => {
    btn.style.height = "auto";
  });

  const maxHeight = Math.max(...buttons.map(btn => btn.offsetHeight));
  buttons.forEach(btn => {
    btn.style.height = `${maxHeight}px`;
  });
}

/* ==============================================================
   Funzioni di animazione per il canvas con effetti e lampeggiamenti
================================================================= */

// Animazione di intro: visualizza un messaggio di benvenuto
function drawCanvasIntro() {
  const canvas = document.getElementById("gameCanvas");
  if (canvas.getContext) {
    const ctx = canvas.getContext("2d");
    clearCanvas();
    ctx.fillStyle = "#0a0f2e";
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.font = "bold 24px Cinzel, Georgia, serif";
    ctx.fillStyle = "#ffd700";
    ctx.textAlign = "center";
    ctx.fillText("Willkommen bei Wer wird Millionär!", canvas.width / 2, canvas.height / 2);
  }
}

// Animazione per risposta corretta: lampeggia per 5 sec e poi mostra sfondo verde con messaggio
function animateCorrect() {
  const canvas = document.getElementById("gameCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const flashDuration = 5000;
  const flashInterval = 250;
  const toggles = Math.floor(flashDuration / flashInterval);
  let counter = 0;
  
  let timer = setInterval(() => {
    if (counter % 2 === 0) {
      ctx.fillStyle = "#1e8a4a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    counter++;
    if (counter >= toggles) {
      clearInterval(timer);
      ctx.fillStyle = "#1e8a4a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.font = "bold 28px Cinzel, Georgia, serif";
      ctx.fillStyle = "#ffd700";
      ctx.textAlign = "center";
      ctx.fillText("Richtig! Gewinn gesichert!", canvas.width / 2, canvas.height / 2);
    }
  }, flashInterval);
}

// Animazione per risposta errata: lampeggia per 5 sec e poi mostra sfondo rosso con messaggio
function animateWrong(correctLabel, explanation) {
  const canvas = document.getElementById("gameCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const flashDuration = 5000;
  const flashInterval = 250;
  const toggles = Math.floor(flashDuration / flashInterval);
  let counter = 0;
  
  let timer = setInterval(() => {
    if (counter % 2 === 0) {
      ctx.fillStyle = "#c41e3a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    counter++;
    if (counter >= toggles) {
      clearInterval(timer);
      ctx.fillStyle = "#c41e3a";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.textAlign = "center";
      ctx.fillStyle = "#ffd700";
      ctx.font = "bold 26px Cinzel, Georgia, serif";
      ctx.fillText("Falsche Antwort!", canvas.width / 2, canvas.height / 2 - 18);
      if (correctLabel) {
        ctx.font = "600 18px Montserrat, sans-serif";
        ctx.fillStyle = "#fff";
        ctx.fillText("Richtig wäre:", canvas.width / 2, canvas.height / 2 + 14);
        ctx.font = "bold 20px Montserrat, sans-serif";
        ctx.fillStyle = "#b8f5d0";
        ctx.fillText(correctLabel, canvas.width / 2, canvas.height / 2 + 42);
        if (explanation) {
          ctx.font = "500 14px Montserrat, sans-serif";
          ctx.fillStyle = "#f5ecd7";
          ctx.fillText("Begründung im Ergebnisfenster", canvas.width / 2, canvas.height / 2 + 66);
        }
      } else {
        ctx.font = "bold 22px Cinzel, Georgia, serif";
        ctx.fillText("Du hast verloren!", canvas.width / 2, canvas.height / 2 + 18);
      }
    }
  }, flashInterval);
}

// Animazione per Switch: flash viola per 1 sec
function animateSwitch() {
  const canvas = document.getElementById("gameCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const flashDuration = 1000;
  const flashInterval = 250;
  const toggles = Math.floor(flashDuration / flashInterval);
  let counter = 0;
  
  let timer = setInterval(() => {
    if (counter % 2 === 0) {
      ctx.fillStyle = "#6b2fd6";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    counter++;
    if (counter >= toggles) {
      clearInterval(timer);
      clearCanvas();
    }
  }, flashInterval);
}

// Animazione per Ritirati: flash blu-grigio per 5 sec
function animateQuit() {
  const canvas = document.getElementById("gameCanvas");
  if (!canvas) return;
  const ctx = canvas.getContext("2d");
  const flashDuration = 5000;
  const flashInterval = 250;
  const toggles = Math.floor(flashDuration / flashInterval);
  let counter = 0;
  
  let timer = setInterval(() => {
    if (counter % 2 === 0) {
      ctx.fillStyle = "#2d1260";
      ctx.fillRect(0, 0, canvas.width, canvas.height);
    } else {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
    counter++;
    if (counter >= toggles) {
      clearInterval(timer);
      clearCanvas();
    }
  }, flashInterval);
}

/* =====================================================
   Funzioni degli Aiuti: "50 e 50" e "Switch"
===================================================== */

// Funzione "50 e 50": rimuove due risposte errate dalla domanda corrente
function use5050() {
  if (currentQuestion >= questions.length || help5050Used) return;
  
  const currentQ = questions[currentQuestion];
  const correct = currentQ.correct;
  
  const answerButtons = document.querySelectorAll("#answers button.answer-btn");
  let wrongButtons = [];
  answerButtons.forEach(btn => {
    if (btn.getAttribute("data-answer") !== correct) {
      wrongButtons.push(btn);
    }
  });
  
  if (wrongButtons.length < 2) return;
  // Mescola e nascondi due pulsanti sbagliati
  wrongButtons.sort(() => Math.random() - 0.5);
  wrongButtons[0].style.display = "none";
  wrongButtons[1].style.display = "none";
  
  help5050Used = true;
  document.getElementById("btn5050").disabled = true;
}

// Funzione "Switch": sostituisce la domanda corrente senza avanzare il livello
function useSwitch() {
  if (currentQuestion >= questions.length || helpSwitchUsed) return;
  
  animateSwitch();
  helpSwitchUsed = true;
  document.getElementById("btnSwitch").disabled = true;
  
  // Rimuove la domanda corrente dall'array
  questions.splice(currentQuestion, 1);
  // Mantiene lo stesso valore di currentQuestion (quindi lo stesso livello)
  setTimeout(() => {
    updateBoard("ongoing");
    showQuestion();
  }, 1000);
}
