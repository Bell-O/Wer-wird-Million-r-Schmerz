#!/bin/bash
cd "$(dirname "$0")"
echo "Server läuft: http://localhost:8080"
echo "Safari öffnen und diese Adresse eingeben."
echo "Beenden mit Strg+C"
open "http://localhost:8080/index.html"
python3 -m http.server 8080
