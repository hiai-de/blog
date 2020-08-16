---
title: "Neuer Webauftritt des HIAI"
author: marcellspies
date: 2020-08-16
coverImage: ./images/hiai-blog-logos.png
---

Nach einigen Jahren wurde es mal wieder Zeit den Webauftritt des HIAI etwas zu modernisieren.

Die bisherige Wordpress-Seite wurde nun durch ein mit dem Static-Site-Generator [Gatsby](https://gatsbyjs.com) erstellte Seite abgelöst. Die Logik wurde mit [ReactJS](https://reactjs.org) und [TypeScript](https://typescript.org) geschrieben. Die Blogartikel werden mittels Markdown verfasst. Als Hosting-Platform haben wir uns für [Netlify](https://netlify.com) entscheiden. Der Code zum HIAI-Blog liegt quelloffen auf [GitHub](https://github.com). Wir nehmen gerne auch Pull Requests entgegen.

Für die Entwicklung unseres Blogs nutzen wir [Visual Studio Code](https://code.visualstudio.com) in Verbindung mit [Remote Containers](https://code.visualstudio.com/docs/remote/containers) oder [Visual Studio Codespaces](https://code.visualstudio.com/docs/remote/codespaces).

Initial bedeutete das etwas mehr Entwicklungsaufwand. Zukünftig kann man nun allerdings mit Leichtigkeit über in der Softwareentwicklung gewohnte Verfahren, wie zum Beispiel Pull Requests, Blogartikel hinzufügen oder anpassen. Eine Datenbank zur Verwaltung des Contents wird nun nicht mehr benötigt, da Static-Site-Generatoren die komplette Webseite mit Verlinkungen zwischen den einzelnen Seiten zur Build-Time generieren und als statischen Inhalt bereitstellen. Zudem sind wir nun nicht mehr in schlecht anpassbaren Wordpress-Themes gefangen.

Hier der Link zum Code unseres Blogs: https://github.com/hiai-de/blog