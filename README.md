# Wer wird Millionär? – Schmerz Lernquiz (Casino Edition)

> **Nur zu Bildungszwecken · For education purposes only**

Ein interaktives Lernquiz im Stil von *Wer wird Millionär?* mit **120 Multiple-Choice-Fragen zum Thema Schmerz** (Pflegeausbildung).  
Optimiert für **Handy, iPad und PC** – mit Casino/TV-Show-Design.

---

## Credits

| | |
|---|---|
| **Angepasst & erweitert von** | [Bell-O](https://github.com/Bell-O) |
| **Original-Grundgerüst von** | [Bocaletto Luca](https://github.com/bocaletto-luca) |

Dieses Projekt basiert auf dem Open-Source-Spiel [Who Wants To Be A Millionaire](https://github.com/bocaletto-luca/Who-Wants-To-Be-A-Millionaire) und wurde für den **Lern- und Übungsgebrauch** im Pflegekontext umgebaut.

---

## Hinweis (Bildungszweck)

Dieses Spiel ist **kein kommerzielles Produkt** und **kein Glücksspiel**.  
Es dient ausschließlich dazu, Wissen zu Schmerz, Schmerzwahrnehmung, Schmerztherapie und verwandten Pflegethemen zu wiederholen und zu festigen.

---

## Features

- **120 Schmerz-Fragen** in deutscher Sprache
- **Gewinnleiter** mit 10 Stufen (100 € bis 32.000 €)
- **Gesicherter Gewinn** ab Frage 5 (mindestens 1.000 € bei Fehler danach)
- **Joker:** 50:50 und Wechseln
- **Antwort bestätigen** – wie in der TV-Show („Ist das deine endgültige Antwort?“)
- **Richtige Antwort anzeigen** bei falscher Wahl
- **Casino / TV-Show Theme** (dunkles Studio, Gold-Akzente)
- **Responsive UI** für Smartphone, Tablet und Desktop
- **Steuerung:** Touch, Maus, Tastatur (A/B/C/D, Enter, Esc, Q) und Gamepad (Basis)

---

## Spielstart

### Option A – Direkt im Browser

1. `index.html` öffnen
2. Auf **Spiel** klicken
3. Namen eingeben und loslegen

### Option B – Lokaler Server (empfohlen für Safari)

Doppelklick auf `start-server.command`  
oder im Terminal:

```bash
cd Who-Wants-To-Be-A-Millionaire-main
python3 -m http.server 8080
```

Dann im Browser öffnen: `http://localhost:8080`

> **Tipp:** Safari blockiert manchmal lokale Dateien (`file://`). Der lokale Server ist die zuverlässigste Lösung.

---

## Steuerung

| Eingabe | Aktion |
|--------|--------|
| **A / B / C / D** | Antwort auswählen |
| **Enter** | Auswahl bestätigen |
| **Esc** | Auswahl abbrechen |
| **Q** | Aufhören und Gewinn mitnehmen |

---

## Projektstruktur

```
├── index.html          # Startseite
├── game.html           # Spiel
├── help.html           # Spielanleitung
├── main.js             # Spiellogik + eingebettete Fragen
├── questions.json      # Fragen (Quelldatei zum Bearbeiten)
├── controllers.js      # Tastatur & Gamepad
├── style.css           # Casino-Theme & Responsive Design
├── start-server.command # Lokaler Server (macOS)
└── LICENSE             # GPLv3
```

---

## Fragen bearbeiten

1. `questions.json` anpassen (Format: `question`, `answers` a–d, `correct`)
2. Fragen in `main.js` aktualisieren:

```bash
python3 -c "
import json
with open('questions.json', encoding='utf-8') as f:
    data = json.load(f)
with open('main.js', encoding='utf-8') as f:
    main = f.read()
idx = main.find('\n\nlet questions')
with open('main.js', 'w', encoding='utf-8') as f:
    f.write('const QUESTIONS_DATA = ' + json.dumps(data, ensure_ascii=False, indent=2) + ';\n\n' + main[idx+2:])
print('Fragen in main.js aktualisiert')
"
```

---

## Technologien

- HTML5
- CSS3 (Custom Casino Theme + Bootstrap 4)
- JavaScript (Vanilla)
- JSON (Fragenkatalog)
- jQuery / Bootstrap (CDN, für Modal & Layout)

**Kein PHP, keine Datenbank, keine Server-Anbindung nötig** – reines Frontend.

---

## Themen der Fragen

- Schmerzgrundlagen & Nozizeptoren
- Schmerzarten (akut, chronisch, neuropathisch, viszeral …)
- Schmerzwahrnehmung & Einflussfaktoren
- Schmerzskalen (NRS, BESD, Faces-Skala …)
- WHO-Stufenschema & Schmerztherapie
- Phantomschmerz & Pflegehinweise

---

## Lizenz

Dieses Projekt steht unter der **GPLv3** – siehe [LICENSE](LICENSE).

Das Originalprojekt stammt von **Bocaletto Luca**.  
Die Schmerz-Edition und Anpassungen stammen von **Bell-O**.

---

## Kontakt

- **Bell-O:** [github.com/Bell-O](https://github.com/Bell-O)
- **Original-Autor:** [github.com/bocaletto-luca](https://github.com/bocaletto-luca)

Viel Erfolg beim Lernen!
