# base32check

This project provides sample implementations of the Base32 data encoding as specified in
[RFC 4648, section 6](https://tools.ietf.org/html/rfc4648#section-6), and a corresponding checksum algorithm, called
_base32check1_, in various programming languages.

base32check1 is a custom, one-digit checksum algorithm with the following properties:

100% detection of... | Example
:--- | :---
single character substitution | `..A..` &rarr; `..B..`
character transposition with zero characters in between them | `..AB..` &rarr; `..BA..`
character transposition with one character in between them | `..ABC..` &rarr; `..CBA..`
identical substitution of two identical characters with zero characters in between them | `..AA..` &rarr; `..BB..`
identical substitution of two identical characters with one character in between them | `..ACA..` &rarr; `..BCB..`

The name base32check1 algorithm has been invented by [Thaddée Tyl](https://espadrine.github.io) and described in a
[blog posting](https://espadrine.github.io/blog/posts/a-base32-checksum.html) published online on April 29th, 2019.
It is based on a [scientific article](https://www.uni-due.de/imperia/md/content/dc/yanling_2015_check_digit.pdf)
published online by Springer on April 2nd, 2015.
The algorithm also consists of some
[optimizations which are specific to binary numbers](https://johnkerl.org/doc/ffcomp.pdf), published online by John Kerl
on April, 2004.

Part of the base32check1 algorithm is a [primitive polynomial](http://mathworld.wolfram.com/PrimitivePolynomial.html).
We have selected the primitive polynomial to be 1 + x + x<sup>3</sup> + x<sup>4</sup> + x<sup>5</sup>.
As a consequence, the checksum computed by our various implementations is different from the one computed in the
[original Javascript implementation](https://github.com/espadrine/base32check) of Thaddée Tyl, where the primitive
polynomial is 1 + x<sup>2</sup> + x<sup>5</sup>.
