(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{332:function(s,a,t){"use strict";t.r(a);var e=t(33),r=Object(e.a)({},(function(){var s=this,a=s.$createElement,t=s._self._c||a;return t("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[t("div",{staticStyle:{display:"flex","justify-content":"space-between"}},[t("div",[t("a",{attrs:{href:"https://github.com/bitmarck-service/base32check-scala/releases/latest"}},[t("img",{attrs:{src:"https://img.shields.io/github/release/bitmarck-service/base32check-scala",alt:"Release Notes"}})]),s._v(" "),t("a",{attrs:{href:"https://search.maven.org/artifact/de.bitmarck.bms/base32check-scala_2.13"}},[t("img",{attrs:{src:"https://img.shields.io/maven-central/v/de.bitmarck.bms/base32check-scala_2.13?cacheSeconds=3600",alt:"Maven Central"}})]),s._v(" "),t("a",{attrs:{href:"https://www.apache.org/licenses/LICENSE-2.0"}},[t("img",{attrs:{src:"https://img.shields.io/github/license/bitmarck-service/base32check-scala",alt:"Apache License 2.0"}})])]),s._v(" "),t("div",[t("a",{attrs:{href:"https://github.com/bitmarck-service/base32check-scala"}},[t("img",{attrs:{src:"https://img.shields.io/github/watchers/bitmarck-service/base32check-scala?style=social",alt:"Watch repo on GitHub"}})]),s._v(" "),t("a",{attrs:{href:"https://github.com/bitmarck-service/base32check-scala"}},[t("img",{attrs:{src:"https://img.shields.io/github/stars/bitmarck-service/base32check-scala?style=social",alt:"Star repo on GitHub"}})]),s._v(" "),t("a",{attrs:{href:"https://github.com/bitmarck-service/base32check-scala"}},[t("img",{attrs:{src:"https://img.shields.io/github/forks/bitmarck-service/base32check-scala?style=social",alt:"Fork repo on GitHub"}})])])]),s._v(" "),t("h1",{attrs:{id:"scala-guide"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#scala-guide"}},[s._v("#")]),s._v(" Scala Guide")]),s._v(" "),t("h2",{attrs:{id:"dependency"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#dependency"}},[s._v("#")]),s._v(" Dependency")]),s._v(" "),t("p",[s._v("Assuming you use "),t("a",{attrs:{href:"https://www.scala-sbt.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("SBT"),t("OutboundLink")],1),s._v(", add the following library dependency:")]),s._v(" "),t("div",{staticClass:"language-scala extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[s._v("libraryDependencies "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"de.bitmarck.bms"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"base32check-scala"')]),s._v(" "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("%")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"0.0.2"')]),s._v("\n")])])]),t("p",[s._v("This library supports Scala 2.10, 2.11, 2.12 and 2.13.")]),s._v(" "),t("h2",{attrs:{id:"codec"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#codec"}},[s._v("#")]),s._v(" Codec")]),s._v(" "),t("div",{staticClass:"language-scala extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("de"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bitmarck"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("base32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Base32\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" bytes "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"Hello world!"')]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("getBytes\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" base32 "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Base32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("encode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" copy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Base32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("decode"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("base32"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nassert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("copy "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" bytes"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("toSeq"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),t("h2",{attrs:{id:"checksum"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#checksum"}},[s._v("#")]),s._v(" Checksum")]),s._v(" "),t("div",{staticClass:"language-scala extra-class"},[t("pre",{pre:!0,attrs:{class:"language-scala"}},[t("code",[t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("import")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token namespace"}},[s._v("de"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bitmarck"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("bms"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("base32")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("Base32Check1\n\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),t("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ABCDEFGHIJKLMNOPQRSTUVWXYZ234567"')]),s._v("\n"),t("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("val")]),s._v(" checksum "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" Base32Check1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("compute"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\nassert"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("Base32Check1"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("validate"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("string "),t("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+")]),s._v(" checksum"),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),t("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);a.default=r.exports}}]);