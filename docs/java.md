<a href="https://github.com/bitmarck-service/base32check-java/releases/latest"><img src="https://img.shields.io/github/v/release/bitmarck-service/base32check-java?cacheSeconds=3600" alt="Release Notes"></a>
<a href="https://search.maven.org/artifact/de.bitmarck.bms/base32check-java"><img src="https://img.shields.io/maven-central/v/de.bitmarck.bms/base32check-java?cacheSeconds=3600" alt="Maven Central"></a>
<a href="https://www.apache.org/licenses/LICENSE-2.0"><img src="https://img.shields.io/github/license/bitmarck-service/base32check-scala?cacheSeconds=3600" alt="Apache License 2.0"></a>

# Java

## Dependency

Assuming you use [Apache Maven](http://maven.apache.org), add the following library dependency:

```xml
<dependency>
  <groupId>de.bitmarck.bms</groupId>
  <artifactId>base32check-java</artifactId>
  <version>0.0.1</version>
</dependency>
```

We provide artifacts for Java 1.8 or later.

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
