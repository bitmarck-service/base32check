# base32check

This project provides sample implementations of the Base32 data encoding as specified in
[RFC 4648, section 6](https://tools.ietf.org/html/rfc4648#section-6), and a corresponding checksum algorithm, called
_base32check1_, in various programming languages.

base32check1 is a custom, one-digit checksum algorithm with the following properties:

Detects all... | Name | Example<sup>1</sup>
:--- | --- | :---
single character substitutions | 1-sub | `*A*` &rarr; `*B*`
0-trans | character transpositions with zero characters in between them | `*AB*` &rarr; `*BA*`
1-trans | character transpositions with one character in between them | `*A?C*` &rarr; `*C?A*`
0-twin | identical substitutions of two identical characters with zero characters in between them | `*AA*` &rarr; `*BB*`
1-twin | identical substitutions of two identical characters with one character in between them | `*A?A*` &rarr; `*B?B*`

<sup>1</sup> The examples are expressed as glob patterns where `?` stands for a single character and `*` stands for an
arbitrary length string.

The name base32check1 algorithm has been invented by [Thaddée Tyl](https://espadrine.github.io) and described in a
[blog posting](https://espadrine.github.io/blog/posts/a-base32-checksum.html), published on April 29th, 2019.
It is based on a [scientific article](https://www.uni-due.de/imperia/md/content/dc/yanling_2015_check_digit.pdf),
published by Springer on April 2nd, 2015.
The algorithm also consists of some
[optimizations which are specific to binary numbers](https://johnkerl.org/doc/ffcomp.pdf).
Part of the algorithm is a primitive polynomial.
We have decided to select our own polynomial, so that the checksums calculated by our implementations will differ from
the ones calculated in the [original Javascript implementation](https://github.com/espadrine/base32check) provided by
Thaddée Tyl.  
