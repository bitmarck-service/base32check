<div style="display: flex; justify-content: space-between">
    <div>
        <a href="https://github.com/bitmarck-service/base32check-scala/releases/latest"><img src="https://img.shields.io/github/release/bitmarck-service/base32check-scala?cacheSeconds=3600" alt="Release Notes"></a>
        <a href="https://search.maven.org/artifact/de.bitmarck.bms/base32check-scala_2.13"><img src="https://img.shields.io/maven-central/v/de.bitmarck.bms/base32check-scala_2.13?cacheSeconds=3600" alt="Maven Central"></a>
        <a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/github/license/bitmarck-service/base32check-scala?cacheSeconds=3600" alt="Apache License 2.0"></a>
    </div>
    <div>
        <a href="https://github.com/bitmarck-service/base32check-scala"><img src="https://img.shields.io/github/watchers/bitmarck-service/base32check-scala?style=social" alt="Watch repo on GitHub"></a>
        <a href="https://github.com/bitmarck-service/base32check-scala"><img src="https://img.shields.io/github/stars/bitmarck-service/base32check-scala?style=social" alt="Star repo on GitHub"></a>
        <a href="https://github.com/bitmarck-service/base32check-scala"><img src="https://img.shields.io/github/forks/bitmarck-service/base32check-scala?style=social" alt="Fork repo on GitHub"></a>
    </div>
</div>

# Scala

## Dependency

Assuming you use [SBT](https://www.scala-sbt.org), add the following library dependency:

``` scala
libraryDependencies += "de.bitmarck.bms" %% "base32check-scala" % "0.0.1"
```

We provide artifacts for Scala 2.11, 2.12 and 2.13.

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
