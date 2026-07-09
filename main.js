const QUESTIONS_DATA = [
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
];

// main.js - Versione finale con salvataggio record corretto e switch sistemato

let questions = [];           // Array delle domande caricate da questions.json
let currentQuestion = 0;      // Indice della domanda corrente (0-based)
const prizeLevels = [100, 200, 300, 500, 1000, 2000, 4000, 8000, 16000, 32000]; // Premi per ogni round
let currentPrize = 0;         // Premio attuale
let safeMilestone = 0;        // Premio sicuro (fissato dopo la 5ª domanda)
let playerName = "";          // Nome del giocatore

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

  // Bottone "Inizia il gioco"
  document.getElementById("startGameBtn").addEventListener("click", () => {
    const nameInput = document.getElementById("modalPlayerName").value.trim();
    if (nameInput === "") {
      alert("Bitte gib deinen Namen ein!");
      return;
    }
    playerName = nameInput;
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
  window.addEventListener("resize", resizeGameCanvas);
});

function initGame() {
  const data = QUESTIONS_DATA;
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
    highlightAnswers(selected, correct);
    animateWrong(correctLabel);
    setTimeout(() => {
      updateBoard("lose");
      loseGame(correctLabel);
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

function loseGame(correctLabel) {
  endGame(
    `Falsche Antwort, du hast verloren!\nDie richtige Antwort war: ${correctLabel}`,
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
function animateWrong(correctLabel) {
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
