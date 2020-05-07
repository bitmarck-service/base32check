---
home: true
---

This project provides open source implementations of the Base32 data encoding as specified in
[RFC 4648, section 6](https://tools.ietf.org/html/rfc4648#section-6), and a corresponding checksum algorithm, called
_Base32Check1_, in various programming languages.

Base32Check1 is a custom, one-digit checksum algorithm which has been originally designed by
[Thaddée Tyl](https://espadrine.github.io) and is described in a
[blog posting](https://espadrine.github.io/blog/posts/a-base32-checksum.html) published online on April 29th, 2019.
It is based on a [scientific article](https://www.uni-due.de/imperia/md/content/dc/yanling_2015_check_digit.pdf)
from Yanling Chen, Markku Niemenmaa and A. J. Han Vinck, published online by Springer on April 2nd, 2015.
The algorithm also consists of some
[optimizations which are specific to binary numbers](https://johnkerl.org/doc/ffcomp.pdf), published online by John Kerl
on April, 2004.

According to the article on Springer, the algorithm reliably detects the following errors, which together account for
more than 90% of the most frequent transmission errors according to statistical analysis independently conducted by
D.F. Beckley and J. Verhoeff:

Error | Example
--- | ---
single character substitution | `..A..` &rarr; `..B..`
character transposition with zero characters in between them | `..AB..` &rarr; `..BA..`
character transposition with one character in between them | `..ABC..` &rarr; `..CBA..`
identical substitution of two identical characters with zero characters in between them | `..AA..` &rarr; `..BB..`
identical substitution of two identical characters with one character in between them | `..ACA..` &rarr; `..BCB..`

::: details

Part of the Base32Check1 algorithm is a [primitive polynomial](http://mathworld.wolfram.com/PrimitivePolynomial.html).
We have chosen this primitive polynomial to be 1 + x + x<sup>3</sup> + x<sup>4</sup> + x<sup>5</sup>, which is 
different from the one chosen by Thaddée Tyl, which is 1 + x<sup>2</sup> + x<sup>5</sup>. 
**As a consequence, the checksums computed by our sample implementations are different from the ones computed by the
[original Javascript implementation](https://github.com/espadrine/base32check)!**
Alongside the sample implementations we also provide test code as evidence that the algorithm's desired properties still
hold.

:::
