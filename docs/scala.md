# Scala

[![Release Notes](https://img.shields.io/github/release/bitmarck-service/base32check-scala.svg?maxAge=3600)](https://github.com/bitmarck-service/base32check-scala/releases/latest)
[![Maven Central](https://img.shields.io/maven-central/v/de.bitmarck.bms/base32check-scala_2.13)](https://search.maven.org/artifact/de.bitmarck.bms/base32check-scala_2.13)
[![Apache License 2.0](https://img.shields.io/github/license/bitmarck-service/base32check-scala.svg?maxAge=3600)](https://www.apache.org/licenses/LICENSE-2.0)

## Dependency

Assuming you use [SBT](https://www.scala-sbt.org), add the following library dependency:

``` scala
libraryDependencies += "de.bitmarck.bms" %% "base32check-scala" % "0.0.1"
```

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
