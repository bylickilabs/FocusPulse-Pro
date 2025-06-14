## 🧠 FocusPulse Pro – Intelligenter Konzentrationstracker für Desktop & Web

![Electron](https://img.shields.io/badge/Electron-27.x-blue?style=for-the-badge&logo=electron) | ![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-yellow?style=for-the-badge&logo=javascript) | ![HTML5](https://img.shields.io/badge/HTML5-%23E34F26?style=for-the-badge&logo=html5&logoColor=white) | ![CSS3](https://img.shields.io/badge/CSS3-Neon-%2300fff7?style=for-the-badge&logo=css3&logoColor=white) | ![Responsive](https://img.shields.io/badge/Responsive-Yes-green?style=for-the-badge) | ![MIT License](https://img.shields.io/github/license/bylickilabs/focuspulse?style=for-the-badge)
|---|---|---|---|---|---|

<br>

---

<br>

> 🔍 Beschreibung

**FocusPulse Pro** ist ein lokal laufender, visuell ansprechender Konzentrationstracker für Windows, macOS und Browser.  
Er analysiert in Echtzeit deine Aktivität (Tastatur & Maus), speichert Sitzungen automatisch und visualisiert deinen Fortschritt – **offline, datenschutzkonform, effizient**.

<br>

---

<br>

## ✨ Hauptfunktionen

| Kategorie              | Beschreibung                                                                 |
|------------------------|------------------------------------------------------------------------------|
| 🧠 Live-Tracking        | Aufzeichnung deiner Aktivität im Hintergrund                                |
| ⏱️ Intervallwahl        | 30 Sek. / 1 Min / 2 Min Buttons zur Anpassung des Messintervalls            |
| 🎯 Fokusziele           | Konfigurierbar: von 30 Sek bis 18 Stunden                                   |
| 📊 Wochenanalyse        | Heatmap & Balkenvergleich der letzten 7 Tage                                |
| 💾 Session-Archivierung | Speichere & lade benannte Sitzungen im Browser                             |
| 📤 Exporte              | JSON- und CSV-Dateien für Analyse oder Archivierung                         |
| 🔔 Idle-Erkennung       | Warnung nach >5 Minuten Inaktivität                                          |
| 🖥️ Electron Desktop-App | Minimierbar in Tray, mit eigenem Icon & Setup-Installer (NSIS)               |
| 🎨 Neon UI              | Animierter Hintergrund, fließender Verlauf, moderne Schrift, Tooltip-Support |

<br>

---

<br>

> 🧭 Projektstruktur

```yarn
FocusPulse_Pro/
├── index.html
├── main.js # Electron-Starter
├── package.json # Build-Konfiguration
├── LICENSE.txt
├── icon.ico / icon.icns
├── css/
│ └── style.css
├── js/
│ ├── tracker.js
│ ├── chart.js
│ ├── chart2.js
│ ├── storage.js
│ ├── utils.js
│ └── ai.js
└── .github/workflows/deploy.yml
```

> ⚙️ Lokale Nutzung via XAMPP (empfohlen für Web)
  - 🪟 Schritt-für-Schritt-Anleitung:

1. Lade XAMPP von: [https://www.apachefriends.org/de](https://www.apachefriends.org/de)
2. Installiere XAMPP, starte das **Control Panel**
3. Aktiviere den **Apache Webserver**
4. Kopiere das Projekt in:

```yarn
C:\xampp\htdocs\FocusPulse
```

5. Öffne im Browser:

```yarn
http://localhost/FocusPulse/
```

<br>

---

<br>

📌 Hinweis: `localStorage` speichert deine Daten lokal im Browser, keine Cloud notwendig.

---

> 🚀 GitHub Pages (optional)

1. Repository erstellen
2. Code hochladen
3. In `Settings > Pages` aktivieren:
- Branch: `main`
- Verzeichnis: `/root`

🔗 Deine App ist dann unter folgendem Link erreichbar:

```yarn
https://<username>.github.io/FocusPulse/
```

<br>

---

<br>

> 🖥️ Windows & macOS Installer (Electron)
  - Windows (.exe)

```bash
npm install
npm run dist
```

- Ergebnis: dist/FocusPulse Pro Setup.exe
  - macOS (.dmg)

```yarn
npm install
npm run dist
```

- Ergebnis: dist/FocusPulse Pro.dmg
  - Hinweis: .dmg-Build muss auf macOS durchgeführt werden

<br>

---

<br>

> 🧩 Erweiterte Funktionen
- autorun.inf für USB-Sticks
- LICENSE.txt im Setup integriert
- icon.ico & icon.icns für Branding
- updater-config.json für zukünftige Updater-Unterstützung

<br>

---

<br>

> 📌 Hinweis zu Tab-/App-Tracking:
- Die Web-App funktioniert nur wenn geöffnet & sichtbar
- Der Electron-Client trackt auch minimiert im Tray
- Aktivitätserkennung erfolgt per:

```yarn
document.addEventListener("mousemove", ...)
document.addEventListener("keydown", ...)
```

<br>

---

<br>

📄 Lizenz
MIT License [LICENSE](LICENSE)

<br>

© 2025 Thorsten Bylicki | https://www.bylickilabs.de

<br>

---

<br>

> 📫 Kontakt
  - 📧 Fragen oder Vorschläge:

<br>

📦 Forke das Projekt & mach einen Pull Request!

> 🔖 Tags (GitHub Topics)

```yarn
focuspulse
productivity
focus-tracker
electron
vanillajs
chartjs
localstorage
neon-ui
time-tracking
offline-app
```
