# Beispiele

::: tip

Alle folgenden Beispiele sind unserem
[Testcode](https://github.com/bitmarck-service/base32check-scala/tree/master/src/test/scala/de/bitmarck/bms/base32)
entnommen.

:::

## Base32

Hier einige Beispiele für die Base32-Kodierung aus
[RFC 4648, Abschnitt 10](https://tools.ietf.org/html/rfc4648#section-10):

ASCII-Zeichenfolge | Base32-Kodierung
--- | ---
`""` | `""`
`"f"` | `"MY======"`
`"fo"` | `"MZXQ===="`
`"foo"` | `"MZXW6==="`
`"foob"` | `"MZXW6YQ="`
`"fooba"` | `"MZXW6YTB"`
`"foobar"` | `"MZXW6YTBOI======"`

Zu erkennen ist, dass in der vorletzten Reihe keine Füllzeichen (`=`) vorhanden sind.
Dies ist ein Hinweis auf ein grundsätzliches Merkmal des Base32-Algorithmus, der jeweils 5 Bytes zu 8 Zeichen aus dem
Base32-Alphabet kodiert. 

## Base32Check1

Hier einige Beispiele für die Base32Check1-Prüfsumme aus unserem Testcode:

Base32-Kodierung | Prüfziffer
--- | ---
`""` | `'A'`
`"A"` | `'A'`
`"AB"` | `'Q'`
`"ABC"` | `'J'`
`"ABCD"` | `'V'`
`"ABCDE"` | `'I'`
`"ABCDEF"` | `'G'`
`"ABCDEFG"` | `'A'`
`"ABCDEFGH"` | `'T'`
`"ABCDEFGHI"` | `'5'`
`"ABCDEFGHIJ"` | `'K'`
`"ABCDEFGHIJK"` | `'A'`
`"ABCDEFGHIJKL"` | `'F'`
`"ABCDEFGHIJKLM"` | `'U'`
`"ABCDEFGHIJKLMN"` | `'M'`
`"ABCDEFGHIJKLMNO"` | `'R'`
`"ABCDEFGHIJKLMNOP"` | `'7'`
`"ABCDEFGHIJKLMNOPQ"` | `'X'`
`"ABCDEFGHIJKLMNOPQR"` | `'D'`
`"ABCDEFGHIJKLMNOPQRS"` | `'I'`
`"ABCDEFGHIJKLMNOPQRST"` | `'5'`
`"ABCDEFGHIJKLMNOPQRSTU"` | `'U'`
`"ABCDEFGHIJKLMNOPQRSTUV"` | `'Q'`
`"ABCDEFGHIJKLMNOPQRSTUVW"` | `'D'`
`"ABCDEFGHIJKLMNOPQRSTUVWX"` | `'K'`
`"ABCDEFGHIJKLMNOPQRSTUVWXY"` | `'J'`
`"ABCDEFGHIJKLMNOPQRSTUVWXYZ"` | `'Y'`
`"ABCDEFGHIJKLMNOPQRSTUVWXYZ2"` | `'R'`
`"ABCDEFGHIJKLMNOPQRSTUVWXYZ23"` | `'V'`
`"ABCDEFGHIJKLMNOPQRSTUVWXYZ234"` | `'U'`
`"ABCDEFGHIJKLMNOPQRSTUVWXYZ2345"` | `'U'`
`"ABCDEFGHIJKLMNOPQRSTUVWXYZ23456"` | `'V'`
`"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"` | `'V'`
