# Einführung

## Base32

Base32 ist ein Verfahren zur Kodierung von Daten welches im
[RFC 4648, Abschnitt 6](https://tools.ietf.org/html/rfc4648#section-6) spezifiziert ist.
Es kodiert eine beliebig lange Folge von Bytes in einen Text der nur aus den Buchstaben `A` bis `Z` und den Ziffern `2`
bis `7` besteht.
Das daraus resultierende Alphabet enthält 32 verschiedene Zeichen - daher der Name.
Zusätzlich wird der Text am Ende solange mit weiteren `=`-Zeichen ergänzt bis die Textlänge ein Vielfaches von acht ist. 

Base32 ist eine gute Wahl für die verbale Übertragung von binären Daten - zum Beispiel am Telefon - weil es keine
Unterscheidung zwischen Groß- und Kleinbuchstaben gibt und das Alphabet lediglich aus Großbuchstaben und Ziffern
besteht, die nicht leichtfertig verwechselt werden können. 

## Base32Check1

Base32Check1 ist ein maßgeschneiderter Algorithmus für eine einstellige Prüfsumme für das Base32-Alphabet, welcher
ursprünglich von [Thaddée Tyl](https://espadrine.github.io) entworfen wurde und in einem
[Blog-Posting](https://espadrine.github.io/blog/posts/a-base32-checksum.html) vom 29. April 2019 beschrieben ist.
Er basiert auf einem
[wissenschaftlichen Artikel](https://www.uni-due.de/imperia/md/content/dc/yanling_2015_check_digit.pdf) von Yanling
Chen, Markku Niemenmaa and A. J. Han Vinck der von Springer am 2. April 2015 online veröffentlich wurde.
Die Implementierung basiert außerdem auf einigen
[speziellen Optimierungen für Binärzahlen](https://johnkerl.org/doc/ffcomp.pdf) die von John Kerl im April 2004 online
veröffentlicht wurden.

Nach Angabe des Artikels by Springer erkennt der Algorithmus zuverlässig die folgenden Fehler, die zusammen über 90% der
häufigsten Übertragungsfehler entsprechen, entsprechend statistischer Analysen, die unabhängig von D.F. Beckley and 
J. Verhoeff durchgeführt wurden:

Fehler | Beispiel
--- | ---
Ersetzung eines einzelnen Zeichens | `..A..` &rarr; `..B..`
Zeichentransposition ohne dazwischenliegende Zeichen | `..AB..` &rarr; `..BA..`
Zeichentransposition mit einem dazwischenliegenden Zeichen | `..ABC..` &rarr; `..CBA..`
Identische Ersetzung von zwei identischen Zeichen ohne dazwischenliegende Zeichen | `..AA..` &rarr; `..BB..`
Identische Ersetzung von zwei identischen Zeichen mit einem dazwischenliegenden Zeichen | `..ACA..` &rarr; `..BCB..`

::: details Details

Teil des Base32Check1-Algorithmus ist ein wählbares
[primitives Polynom](http://mathworld.wolfram.com/PrimitivePolynomial.html).
Wir haben uns für das Polynom 1 + x + x<sup>3</sup> + x<sup>4</sup> + x<sup>5</sup> entschieden, im Unterschied zu dem
von Thaddée Tyl gewählten Polynom 1 + x<sup>2</sup> + x<sup>5</sup>.
**Demzufolge unterscheiden sich die Prüfsummen die von unseren Implementierungen berechnet werden von denen, die von der
[originalen Javascript-Implementierung](https://github.com/espadrine/base32check) berechnet werden!**
Als Indiz dafür daß die zugesicherten Eigenschaften des Algorithmus immer noch eingehalten werden stellen wir daher 
begleitend zu den Beispielimplementierungen auch Test-Code bereit. 

:::
