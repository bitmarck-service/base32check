<div style="display: flex; justify-content: space-between">
    <div>
        <a href="https://github.com/bitmarck-service/base32check-java/releases/latest"><img src="https://img.shields.io/github/v/release/bitmarck-service/base32check-java" alt="Release Notes"></a>
        <a href="https://search.maven.org/artifact/de.bitmarck.bms/base32check-java"><img src="https://img.shields.io/maven-central/v/de.bitmarck.bms/base32check-java?cacheSeconds=3600" alt="Maven Central"></a>
        <a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/github/license/bitmarck-service/base32check-java" alt="Apache License 2.0"></a>
    </div>
    <div>
        <a href="https://github.com/bitmarck-service/base32check-java"><img src="https://img.shields.io/github/watchers/bitmarck-service/base32check-java?style=social" alt="Watch repo on GitHub"></a>
        <a href="https://github.com/bitmarck-service/base32check-java"><img src="https://img.shields.io/github/stars/bitmarck-service/base32check-java?style=social" alt="Star repo on GitHub"></a>
        <a href="https://github.com/bitmarck-service/base32check-java"><img src="https://img.shields.io/github/forks/bitmarck-service/base32check-java?style=social" alt="Fork repo on GitHub"></a>
    </div>
</div>

# Java Guide

## Dependency

Assuming you use [Apache Maven](http://maven.apache.org), add the following library dependency:

```xml
<dependency>
  <groupId>de.bitmarck.bms</groupId>
  <artifactId>base32check-java</artifactId>
  <version>0.0.1</version>
</dependency>
```

This library requires Java 1.8 as a minimum requirement.

## Codec

```java
import de.bitmarck.bms.base32.Base32;

byte[] bytes = "Hello world!".getBytes();
char base32 = Base32.encode(bytes);
byte[] copy = Base32.decode(base32);
assert Arrays.equals(copy, bytes);
```

## Checksum

```java
import de.bitmarck.bms.base32.Base32Check1;

String string = "ABCDEFGHIJKLMNOPQRSTUVWXYZ234567";
char checksum = Base32Check1.getInstance().compute(string);
assert Base32Check1.getInstance().validate(string + checksum);
```
