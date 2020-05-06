# Java

[![Release Notes](https://img.shields.io/github/release/bitmarck-service/base32check-java.svg?maxAge=3600)](https://github.com/bitmarck-service/base32check-java/releases/latest)
[![Maven Central](https://img.shields.io/maven-central/v/de.bitmarck.bms/base32check-java)](https://search.maven.org/artifact/de.bitmarck.bms/base32check-java)
[![Apache License 2.0](https://img.shields.io/github/license/bitmarck-service/base32check-scala.svg?maxAge=3600)](https://www.apache.org/licenses/LICENSE-2.0)

## Dependency

Assuming you use [Apache Maven](http://maven.apache.org), add the following library dependency:

```xml
<dependency>
  <groupId>de.bitmarck.bms</groupId>
  <artifactId>base32check-java</artifactId>
  <version>0.0.1</version>
</dependency>
```

## Codec

```java
import de.bitmarck.bms.base32.Base32;

var bytes = "Hello world!".getBytes();
var base32 = Base32.encode(bytes);
var copy = Base32.decode(base32);
assert Arrays.equals(copy, bytes);
```

## Checksum

```java
import de.bitmarck.bms.base32.Base32Check1;

var string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
var checksum = Base32Check1.compute(string);
assert Base32Check1.validate(string + checksum);
```
