<div style="display: flex; justify-content: space-between">
    <div>
        <a href="https://github.com/bitmarck-service/base32check-scala/releases/latest"><img src="https://img.shields.io/github/release/bitmarck-service/base32check-scala" alt="Release Notes"></a>
        <a href="https://search.maven.org/artifact/de.bitmarck.bms/base32check-scala_2.13"><img src="https://img.shields.io/maven-central/v/de.bitmarck.bms/base32check-scala_2.13?cacheSeconds=3600" alt="Maven Central"></a>
        <a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/github/license/bitmarck-service/base32check-scala" alt="Apache License 2.0"></a>
    </div>
    <div>
        <a href="https://github.com/bitmarck-service/base32check-scala"><img src="https://img.shields.io/github/watchers/bitmarck-service/base32check-scala?style=social" alt="Watch repo on GitHub"></a>
        <a href="https://github.com/bitmarck-service/base32check-scala"><img src="https://img.shields.io/github/stars/bitmarck-service/base32check-scala?style=social" alt="Star repo on GitHub"></a>
        <a href="https://github.com/bitmarck-service/base32check-scala"><img src="https://img.shields.io/github/forks/bitmarck-service/base32check-scala?style=social" alt="Fork repo on GitHub"></a>
    </div>
</div>

# Scala-Leitfaden

## Abhängigkeiten

Wenn Sie [SBT](https://www.scala-sbt.org) benutzen, fügen Sie folgende Bibliothek als Abhängigkeit hinzu:

``` scala
libraryDependencies += "de.bitmarck.bms" %% "base32check-scala" % "0.0.2"
```

Diese Bibliothek unterstützt Scala 2.10, 2.11, 2.12 und 2.13.

## Codec

```scala
import de.bitmarck.bms.base32.Base32

val bytes = "Hello world!".getBytes
val base32 = Base32.encode(bytes)
val copy = Base32.decode(base32)
assert(copy == bytes.toSeq)
```

## Checksum

```scala
import de.bitmarck.bms.base32.Base32Check1

val string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"
val checksum = Base32Check1.compute(string)
assert(Base32Check1.validate(string + checksum))
```
