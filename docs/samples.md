# Samples

::: tip

The following examples are an excerpt from our
[test code](https://github.com/bitmarck-service/base32check-scala/tree/master/src/test/scala/de/bitmarck/bms/base32).
:::

## Base32

Hier are some examples for the Base32-Encoding from
[RFC 4648, section 10](https://tools.ietf.org/html/rfc4648#section-10):

ASCII String | Base32 Encoding
--- | ---
`""` | `""`
`"f"` | `"MY======"`
`"fo"` | `"MZXQ===="`
`"foo"` | `"MZXW6==="`
`"foob"` | `"MZXW6YQ="`
`"fooba"` | `"MZXW6YTB"`
`"foobar"` | `"MZXW6YTBOI======"`

Note that there are no padding characters (`=`) in the line before the last line.
This hints to an invariant of the Base32 algorithm which is to encode chunks of 5 bytes to 8 characters from the Base32
alphabet.

## Base32Check1

Here are some examples for the Base32Check1 checksum from our test code:

Base32 Encoding | Check Digit
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
