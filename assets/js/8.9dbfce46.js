(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{354:function(e,t,v){"use strict";v.r(t);var d=v(43),_=Object(d.a)({},(function(){var e=this,t=e.$createElement,v=e._self._c||t;return v("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[v("h1",{attrs:{id:"beispiele"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#beispiele"}},[e._v("#")]),e._v(" Beispiele")]),e._v(" "),v("div",{staticClass:"custom-block tip"},[v("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),v("p",[e._v("Alle folgenden Beispiele sind unserem\n"),v("a",{attrs:{href:"https://github.com/bitmarck-service/base32check-scala/tree/master/src/test/scala/de/bitmarck/bms/base32",target:"_blank",rel:"noopener noreferrer"}},[e._v("Testcode"),v("OutboundLink")],1),e._v("\nentnommen.")])]),e._v(" "),v("h2",{attrs:{id:"base32"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#base32"}},[e._v("#")]),e._v(" Base32")]),e._v(" "),v("p",[e._v("Hier einige Beispiele für die Base32-Kodierung aus\n"),v("a",{attrs:{href:"https://tools.ietf.org/html/rfc4648#section-10",target:"_blank",rel:"noopener noreferrer"}},[e._v("RFC 4648, Abschnitt 10"),v("OutboundLink")],1),e._v(":")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("ASCII-Zeichenfolge")]),e._v(" "),v("th",[e._v("Base32-Kodierung")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v('""')])]),e._v(" "),v("td",[v("code",[e._v('""')])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"f"')])]),e._v(" "),v("td",[v("code",[e._v('"MY======"')])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"fo"')])]),e._v(" "),v("td",[v("code",[e._v('"MZXQ===="')])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"foo"')])]),e._v(" "),v("td",[v("code",[e._v('"MZXW6==="')])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"foob"')])]),e._v(" "),v("td",[v("code",[e._v('"MZXW6YQ="')])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"fooba"')])]),e._v(" "),v("td",[v("code",[e._v('"MZXW6YTB"')])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"foobar"')])]),e._v(" "),v("td",[v("code",[e._v('"MZXW6YTBOI======"')])])])])]),e._v(" "),v("p",[e._v("Zu erkennen ist, dass in der vorletzten Reihe keine Füllzeichen ("),v("code",[e._v("=")]),e._v(") vorhanden sind.\nDies ist ein Hinweis auf ein grundsätzliches Merkmal des Base32-Algorithmus, der jeweils 5 Bytes zu 8 Zeichen aus dem\nBase32-Alphabet kodiert.")]),e._v(" "),v("h2",{attrs:{id:"base32check1"}},[v("a",{staticClass:"header-anchor",attrs:{href:"#base32check1"}},[e._v("#")]),e._v(" Base32Check1")]),e._v(" "),v("p",[e._v("Hier einige Beispiele für die Base32Check1-Prüfsumme aus unserem Testcode:")]),e._v(" "),v("table",[v("thead",[v("tr",[v("th",[e._v("Base32-Kodierung")]),e._v(" "),v("th",[e._v("Prüfziffer")])])]),e._v(" "),v("tbody",[v("tr",[v("td",[v("code",[e._v('""')])]),e._v(" "),v("td",[v("code",[e._v("'A'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"A"')])]),e._v(" "),v("td",[v("code",[e._v("'A'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"AB"')])]),e._v(" "),v("td",[v("code",[e._v("'Q'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABC"')])]),e._v(" "),v("td",[v("code",[e._v("'J'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCD"')])]),e._v(" "),v("td",[v("code",[e._v("'V'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDE"')])]),e._v(" "),v("td",[v("code",[e._v("'I'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEF"')])]),e._v(" "),v("td",[v("code",[e._v("'G'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFG"')])]),e._v(" "),v("td",[v("code",[e._v("'A'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGH"')])]),e._v(" "),v("td",[v("code",[e._v("'T'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHI"')])]),e._v(" "),v("td",[v("code",[e._v("'5'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJ"')])]),e._v(" "),v("td",[v("code",[e._v("'K'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJK"')])]),e._v(" "),v("td",[v("code",[e._v("'A'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKL"')])]),e._v(" "),v("td",[v("code",[e._v("'F'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLM"')])]),e._v(" "),v("td",[v("code",[e._v("'U'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMN"')])]),e._v(" "),v("td",[v("code",[e._v("'M'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNO"')])]),e._v(" "),v("td",[v("code",[e._v("'R'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOP"')])]),e._v(" "),v("td",[v("code",[e._v("'7'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQ"')])]),e._v(" "),v("td",[v("code",[e._v("'X'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQR"')])]),e._v(" "),v("td",[v("code",[e._v("'D'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRS"')])]),e._v(" "),v("td",[v("code",[e._v("'I'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRST"')])]),e._v(" "),v("td",[v("code",[e._v("'5'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTU"')])]),e._v(" "),v("td",[v("code",[e._v("'U'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUV"')])]),e._v(" "),v("td",[v("code",[e._v("'Q'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVW"')])]),e._v(" "),v("td",[v("code",[e._v("'D'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWX"')])]),e._v(" "),v("td",[v("code",[e._v("'K'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXY"')])]),e._v(" "),v("td",[v("code",[e._v("'J'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ"')])]),e._v(" "),v("td",[v("code",[e._v("'Y'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ2"')])]),e._v(" "),v("td",[v("code",[e._v("'R'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ23"')])]),e._v(" "),v("td",[v("code",[e._v("'V'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ234"')])]),e._v(" "),v("td",[v("code",[e._v("'U'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ2345"')])]),e._v(" "),v("td",[v("code",[e._v("'U'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ23456"')])]),e._v(" "),v("td",[v("code",[e._v("'V'")])])]),e._v(" "),v("tr",[v("td",[v("code",[e._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"')])]),e._v(" "),v("td",[v("code",[e._v("'V'")])])])])])])}),[],!1,null,null,null);t.default=_.exports}}]);