turbo.ffs.parser = (function() {
  /*
   * Generated by PEG.js 0.8.0.
   *
   * http://pegjs.majda.cz/
   */

  function peg$subclass(child, parent) {
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor();
  }

  function SyntaxError(message, expected, found, offset, line, column) {
    this.message  = message;
    this.expected = expected;
    this.found    = found;
    this.offset   = offset;
    this.line     = line;
    this.column   = column;

    this.name     = "SyntaxError";
  }

  peg$subclass(SyntaxError, Error);

  function parse(input) {
    var options = arguments.length > 1 ? arguments[1] : {},

        peg$FAILED = {},

        peg$startRuleIndices = { start: 0 },
        peg$startRuleIndex   = 0,

        peg$consts = [
          peg$FAILED,
          function(x) { return x },
          [],
          "in bbox",
          { type: "literal", value: "in bbox", description: "\"in bbox\"" },
          "IN BBOX",
          { type: "literal", value: "IN BBOX", description: "\"IN BBOX\"" },
          function(x) { return { bounds:"bbox", query:x } },
          "in",
          { type: "literal", value: "in", description: "\"in\"" },
          "IN",
          { type: "literal", value: "IN", description: "\"IN\"" },
          function(x, y) { return { bounds:"area", query:x, area:y } },
          "around",
          { type: "literal", value: "around", description: "\"around\"" },
          "AROUND",
          { type: "literal", value: "AROUND", description: "\"AROUND\"" },
          function(x, y) { return { bounds:"around", query:x, area:y } },
          "global",
          { type: "literal", value: "global", description: "\"global\"" },
          "GLOBAL",
          { type: "literal", value: "GLOBAL", description: "\"GLOBAL\"" },
          function(x) { return { bounds:"global", query:x } },
          "or",
          { type: "literal", value: "or", description: "\"or\"" },
          "OR",
          { type: "literal", value: "OR", description: "\"OR\"" },
          "||",
          { type: "literal", value: "||", description: "\"||\"" },
          "|",
          { type: "literal", value: "|", description: "\"|\"" },
          function(x, y) { return { logical:"or", queries:[x,y] } },
          "and",
          { type: "literal", value: "and", description: "\"and\"" },
          "AND",
          { type: "literal", value: "AND", description: "\"AND\"" },
          "&&",
          { type: "literal", value: "&&", description: "\"&&\"" },
          "&",
          { type: "literal", value: "&", description: "\"&\"" },
          function(x, y) { return { logical:"and", queries:[x,y] } },
          "(",
          { type: "literal", value: "(", description: "\"(\"" },
          ")",
          { type: "literal", value: ")", description: "\")\"" },
          function(x) { return x; },
          "=",
          { type: "literal", value: "=", description: "\"=\"" },
          "==",
          { type: "literal", value: "==", description: "\"==\"" },
          function(x, y) { return { query:"eq", key:x, val:y } },
          "!=",
          { type: "literal", value: "!=", description: "\"!=\"" },
          "<>",
          { type: "literal", value: "<>", description: "\"<>\"" },
          function(x, y) { return { query:"neq", key:x, val:y } },
          "*",
          { type: "literal", value: "*", description: "\"*\"" },
          function(x) { return { query:"key", key:x } },
          "is",
          { type: "literal", value: "is", description: "\"is\"" },
          "not",
          { type: "literal", value: "not", description: "\"not\"" },
          "null",
          { type: "literal", value: "null", description: "\"null\"" },
          "IS",
          { type: "literal", value: "IS", description: "\"IS\"" },
          "NOT",
          { type: "literal", value: "NOT", description: "\"NOT\"" },
          "NULL",
          { type: "literal", value: "NULL", description: "\"NULL\"" },
          function(x) { return { query:"nokey", key:x } },
          "~=",
          { type: "literal", value: "~=", description: "\"~=\"" },
          "~",
          { type: "literal", value: "~", description: "\"~\"" },
          "=~",
          { type: "literal", value: "=~", description: "\"=~\"" },
          function(x, y) { return { query:"like", key:x, val:y.regex?y:{regex:y} } },
          "like",
          { type: "literal", value: "like", description: "\"like\"" },
          "LIKE",
          { type: "literal", value: "LIKE", description: "\"LIKE\"" },
          function(x, y) { return { query:"likelike", key:x, val:y.regex?y:{regex:y} } },
          "!~",
          { type: "literal", value: "!~", description: "\"!~\"" },
          function(x, y) { return { query:"notlike", key:x, val:y.regex?y:{regex:y} } },
          ":",
          { type: "literal", value: ":", description: "\":\"" },
          function(x, y) { return { query:"substr", key:x, val:y } },
          "type",
          { type: "literal", value: "type", description: "\"type\"" },
          function(x) { return { query:"type", type:x } },
          "user",
          { type: "literal", value: "user", description: "\"user\"" },
          "uid",
          { type: "literal", value: "uid", description: "\"uid\"" },
          "newer",
          { type: "literal", value: "newer", description: "\"newer\"" },
          "id",
          { type: "literal", value: "id", description: "\"id\"" },
          function(x, y) { return { query:"meta", meta:x, val:y } },
          function(x) { return { query:"free form", free:x } },
          { type: "other", description: "Key" },
          /^[a-zA-Z0-9_:\-]/,
          { type: "class", value: "[a-zA-Z0-9_:\\-]", description: "[a-zA-Z0-9_:\\-]" },
          function(s) { return s.join(''); },
          "\"",
          { type: "literal", value: "\"", description: "\"\\\"\"" },
          "'",
          { type: "literal", value: "'", description: "\"'\"" },
          function(parts) {
                return parts[1];
              },
          { type: "other", description: "string" },
          /^[^'" ()~=!*\/:<>&|[\]{}#+@$%?\^.,]/,
          { type: "class", value: "[^'\" ()~=!*\\/:<>&|[\\]{}#+@$%?\\^.,]", description: "[^'\" ()~=!*\\/:<>&|[\\]{}#+@$%?\\^.,]" },
          function(chars) { return chars.join(""); },
          void 0,
          "\\",
          { type: "literal", value: "\\", description: "\"\\\\\"" },
          { type: "any", description: "any character" },
          function(char_) { return char_;     },
          function(sequence) { return sequence;  },
          /^['"\\bfnrtv]/,
          { type: "class", value: "['\"\\\\bfnrtv]", description: "['\"\\\\bfnrtv]" },
          function(char_) {
                return char_
                  .replace("b", "\b")
                  .replace("f", "\f")
                  .replace("n", "\n")
                  .replace("r", "\r")
                  .replace("t", "\t")
                  .replace("v", "\x0B") // IE does not recognize "\v".
              },
          "/",
          { type: "literal", value: "/", description: "\"/\"" },
          null,
          "i",
          { type: "literal", value: "i", description: "\"i\"" },
          "",
          function(parts) {
                return { regex: parts[1], modifier: parts[3] };
              },
          "\\/",
          { type: "literal", value: "\\/", description: "\"\\\\/\"" },
          function() { return "/";  },
          { type: "other", description: "whitespace" },
          /^[ \t\n\r]/,
          { type: "class", value: "[ \\t\\n\\r]", description: "[ \\t\\n\\r]" }
        ],

        peg$bytecode = [
          peg$decode("!7;+<$7!+2%7;+(%4#6!#!!%$##  $\"#  \"#  "),
          peg$decode("!7\"+]$ \"7<+&$,#&7<\"\"\"  +D%.#\"\"2#3$*) \".%\"\"2%3&+(%4#6'#!\"%$##  $\"#  \"#  *\u0158 \"!7\"+\x81$ \"7<+&$,#&7<\"\"\"  +h%.(\"\"2(3)*) \".*\"\"2*3++L% \"7<+&$,#&7<\"\"\"  +3%72+)%4%6,%\"$ %$%#  $$#  $##  $\"#  \"#  *\xE9 \"!7\"+\x81$ \"7<+&$,#&7<\"\"\"  +h%.-\"\"2-3.*) \"./\"\"2/30+L% \"7<+&$,#&7<\"\"\"  +3%72+)%4%61%\"$ %$%#  $$#  $##  $\"#  \"#  *z \"!7\"+]$ \"7<+&$,#&7<\"\"\"  +D%.2\"\"2233*) \".4\"\"2435+(%4#66#!\"%$##  $\"#  \"#  */ \"!7\"+' 4!6'!! %"),
          peg$decode("!7#+\x99$ \"7<+&$,#&7<\"\"\"  +\x80%.7\"\"2738*A \".9\"\"293:*5 \".;\"\"2;3<*) \".=\"\"2=3>+L% \"7<+&$,#&7<\"\"\"  +3%7\"+)%4%6?%\"$ %$%#  $$#  $##  $\"#  \"#  *# \"7#"),
          peg$decode("!7$+\x99$ \"7<+&$,#&7<\"\"\"  +\x80%.@\"\"2@3A*A \".B\"\"2B3C*5 \".D\"\"2D3E*) \".F\"\"2F3G+L% \"7<+&$,#&7<\"\"\"  +3%7#+)%4%6H%\"$ %$%#  $$#  $##  $\"#  \"#  *# \"7$"),
          peg$decode("7%*g \"!.I\"\"2I3J+V$7;+L%7\"+B%7;+8%.K\"\"2K3L+(%4%6M%!\"%$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("7.*Y \"7/*S \"7&*M \"7'*G \"7(*A \"7)*; \"7**5 \"7+*/ \"7,*) \"7-*# \"70"),
          peg$decode("!71+c$7;+Y%.N\"\"2N3O*) \".P\"\"2P3Q+=%7;+3%72+)%4%6R%\"$ %$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!71+c$7;+Y%.S\"\"2S3T*) \".U\"\"2U3V+=%7;+3%72+)%4%6W%\"$ %$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!71+h$7;+^%.N\"\"2N3O*) \".P\"\"2P3Q+B%7;+8%.X\"\"2X3Y+(%4%6Z%!$%$%#  $$#  $##  $\"#  \"#  *\u0122 \"!72+\u0117$ \"7<+&$,#&7<\"\"\"  +\xFE%!.[\"\"2[3\\+u$ \"7<+&$,#&7<\"\"\"  +\\%.]\"\"2]3^+L% \"7<+&$,#&7<\"\"\"  +3%._\"\"2_3`+#%'%%$%#  $$#  $##  $\"#  \"#  *\x86 \"!.a\"\"2a3b+u$ \"7<+&$,#&7<\"\"\"  +\\%.c\"\"2c3d+L% \"7<+&$,#&7<\"\"\"  +3%.e\"\"2e3f+#%'%%$%#  $$#  $##  $\"#  \"#  +(%4#6Z#!\"%$##  $\"#  \"#  "),
          peg$decode("!71+h$7;+^%.S\"\"2S3T*) \".U\"\"2U3V+B%7;+8%.X\"\"2X3Y+(%4%6g%!$%$%#  $$#  $##  $\"#  \"#  *\xD0 \"!72+\xC5$ \"7<+&$,#&7<\"\"\"  +\xAC%!.[\"\"2[3\\+L$ \"7<+&$,#&7<\"\"\"  +3%._\"\"2_3`+#%'#%$##  $\"#  \"#  *] \"!.a\"\"2a3b+L$ \"7<+&$,#&7<\"\"\"  +3%.e\"\"2e3f+#%'#%$##  $\"#  \"#  +(%4#6g#!\"%$##  $\"#  \"#  "),
          peg$decode("!71+u$7;+k%.h\"\"2h3i*5 \".j\"\"2j3k*) \".l\"\"2l3m+C%7;+9%72*# \"78+)%4%6n%\"$ %$%#  $$#  $##  $\"#  \"#  *\x92 \"!72+\x87$ \"7<+&$,#&7<\"\"\"  +n%.o\"\"2o3p*) \".q\"\"2q3r+R% \"7<+&$,#&7<\"\"\"  +9%72*# \"78+)%4%6n%\"$ %$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!.j\"\"2j3k+\x89$7;+%72+u%7;+k%.h\"\"2h3i*5 \".j\"\"2j3k*) \".l\"\"2l3m+C%7;+9%72*# \"78+)%4'6s'\"$ %$'#  $&#  $%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!71+]$7;+S%.t\"\"2t3u+C%7;+9%72*# \"78+)%4%6v%\"$ %$%#  $$#  $##  $\"#  \"#  *\xFA \"!72+\xEF$ \"7<+&$,#&7<\"\"\"  +\xD6%!.]\"\"2]3^+L$ \"7<+&$,#&7<\"\"\"  +3%.o\"\"2o3p+#%'#%$##  $\"#  \"#  *] \"!.c\"\"2c3d+L$ \"7<+&$,#&7<\"\"\"  +3%.q\"\"2q3r+#%'#%$##  $\"#  \"#  +R% \"7<+&$,#&7<\"\"\"  +9%72*# \"78+)%4%6v%\"$ %$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!72+W$7;+M%.w\"\"2w3x+=%7;+3%72+)%4%6y%\"$ %$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!.z\"\"2z3{+V$7;+L%.w\"\"2w3x+<%7;+2%72+(%4%6|%! %$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!.}\"\"2}3~*A \".\"\"23\x80*5 \".\x81\"\"2\x813\x82*) \".\x83\"\"2\x833\x84+W$7;+M%.w\"\"2w3x+=%7;+3%72+)%4%6\x85%\"$ %$%#  $$#  $##  $\"#  \"#  "),
          peg$decode("!72+' 4!6\x86!! %"),
          peg$decode("8! \"0\x88\"\"1!3\x89+,$,)&0\x88\"\"1!3\x89\"\"\"  +' 4!6\x8A!! %*\x8B \"!!.\x8B\"\"2\x8B3\x8C+=$73+3%.\x8B\"\"2\x8B3\x8C+#%'#%$##  $\"#  \"#  *N \"!.\x8D\"\"2\x8D3\x8E+=$74+3%.\x8D\"\"2\x8D3\x8E+#%'#%$##  $\"#  \"#  +' 4!6\x8F!! %9*\" 3\x87"),
          peg$decode("8! \"0\x91\"\"1!3\x92+,$,)&0\x91\"\"1!3\x92\"\"\"  +' 4!6\x8A!! %*\x8B \"!!.\x8B\"\"2\x8B3\x8C+=$73+3%.\x8B\"\"2\x8B3\x8C+#%'#%$##  $\"#  \"#  *N \"!.\x8D\"\"2\x8D3\x8E+=$74+3%.\x8D\"\"2\x8D3\x8E+#%'#%$##  $\"#  \"#  +' 4!6\x8F!! %9*\" 3\x90"),
          peg$decode("! \"75,#&75\"+' 4!6\x93!! %"),
          peg$decode("! \"76,#&76\"+' 4!6\x93!! %"),
          peg$decode("!!8.\x8B\"\"2\x8B3\x8C*) \".\x95\"\"2\x953\x969*$$\"\" \x94\"#  +7$-\"\"1!3\x97+(%4\"6\x98\"! %$\"#  \"#  *C \"!.\x95\"\"2\x953\x96+2$77+(%4\"6\x99\"! %$\"#  \"#  "),
          peg$decode("!!8.\x8D\"\"2\x8D3\x8E*) \".\x95\"\"2\x953\x969*$$\"\" \x94\"#  +7$-\"\"1!3\x97+(%4\"6\x98\"! %$\"#  \"#  *C \"!.\x95\"\"2\x953\x96+2$77+(%4\"6\x99\"! %$\"#  \"#  "),
          peg$decode("!0\x9A\"\"1!3\x9B+' 4!6\x9C!! %"),
          peg$decode("8!!.\x9D\"\"2\x9D3\x9E+Y$79+O%.\x9D\"\"2\x9D3\x9E+?%.\xA0\"\"2\xA03\xA1*# \" \xA2*# \" \x9F+#%'$%$$#  $##  $\"#  \"#  +' 4!6\xA3!! %9*\" 3\x90"),
          peg$decode("! \"7:+&$,#&7:\"\"\"  +' 4!6\x93!! %"),
          peg$decode("!!8.\x9D\"\"2\x9D3\x9E*) \".\xA4\"\"2\xA43\xA59*$$\"\" \x94\"#  +7$-\"\"1!3\x97+(%4\"6\x98\"! %$\"#  \"#  *4 \"!.\xA4\"\"2\xA43\xA5+& 4!6\xA6! %"),
          peg$decode("8 \"7<,#&7<\"9*\" 3\xA7"),
          peg$decode("80\xA8\"\"1!3\xA99*\" 3\xA7")
        ],

        peg$currPos          = 0,
        peg$reportedPos      = 0,
        peg$cachedPos        = 0,
        peg$cachedPosDetails = { line: 1, column: 1, seenCR: false },
        peg$maxFailPos       = 0,
        peg$maxFailExpected  = [],
        peg$silentFails      = 0,

        peg$result;

    if ("startRule" in options) {
      if (!(options.startRule in peg$startRuleIndices)) {
        throw new Error("Can't start parsing from rule \"" + options.startRule + "\".");
      }

      peg$startRuleIndex = peg$startRuleIndices[options.startRule];
    }

    function text() {
      return input.substring(peg$reportedPos, peg$currPos);
    }

    function offset() {
      return peg$reportedPos;
    }

    function line() {
      return peg$computePosDetails(peg$reportedPos).line;
    }

    function column() {
      return peg$computePosDetails(peg$reportedPos).column;
    }

    function expected(description) {
      throw peg$buildException(
        null,
        [{ type: "other", description: description }],
        peg$reportedPos
      );
    }

    function error(message) {
      throw peg$buildException(message, null, peg$reportedPos);
    }

    function peg$computePosDetails(pos) {
      function advance(details, startPos, endPos) {
        var p, ch;

        for (p = startPos; p < endPos; p++) {
          ch = input.charAt(p);
          if (ch === "\n") {
            if (!details.seenCR) { details.line++; }
            details.column = 1;
            details.seenCR = false;
          } else if (ch === "\r" || ch === "\u2028" || ch === "\u2029") {
            details.line++;
            details.column = 1;
            details.seenCR = true;
          } else {
            details.column++;
            details.seenCR = false;
          }
        }
      }

      if (peg$cachedPos !== pos) {
        if (peg$cachedPos > pos) {
          peg$cachedPos = 0;
          peg$cachedPosDetails = { line: 1, column: 1, seenCR: false };
        }
        advance(peg$cachedPosDetails, peg$cachedPos, pos);
        peg$cachedPos = pos;
      }

      return peg$cachedPosDetails;
    }

    function peg$fail(expected) {
      if (peg$currPos < peg$maxFailPos) { return; }

      if (peg$currPos > peg$maxFailPos) {
        peg$maxFailPos = peg$currPos;
        peg$maxFailExpected = [];
      }

      peg$maxFailExpected.push(expected);
    }

    function peg$buildException(message, expected, pos) {
      function cleanupExpected(expected) {
        var i = 1;

        expected.sort(function(a, b) {
          if (a.description < b.description) {
            return -1;
          } else if (a.description > b.description) {
            return 1;
          } else {
            return 0;
          }
        });

        while (i < expected.length) {
          if (expected[i - 1] === expected[i]) {
            expected.splice(i, 1);
          } else {
            i++;
          }
        }
      }

      function buildMessage(expected, found) {
        function stringEscape(s) {
          function hex(ch) { return ch.charCodeAt(0).toString(16).toUpperCase(); }

          return s
            .replace(/\\/g,   '\\\\')
            .replace(/"/g,    '\\"')
            .replace(/\x08/g, '\\b')
            .replace(/\t/g,   '\\t')
            .replace(/\n/g,   '\\n')
            .replace(/\f/g,   '\\f')
            .replace(/\r/g,   '\\r')
            .replace(/[\x00-\x07\x0B\x0E\x0F]/g, function(ch) { return '\\x0' + hex(ch); })
            .replace(/[\x10-\x1F\x80-\xFF]/g,    function(ch) { return '\\x'  + hex(ch); })
            .replace(/[\u0180-\u0FFF]/g,         function(ch) { return '\\u0' + hex(ch); })
            .replace(/[\u1080-\uFFFF]/g,         function(ch) { return '\\u'  + hex(ch); });
        }

        var expectedDescs = new Array(expected.length),
            expectedDesc, foundDesc, i;

        for (i = 0; i < expected.length; i++) {
          expectedDescs[i] = expected[i].description;
        }

        expectedDesc = expected.length > 1
          ? expectedDescs.slice(0, -1).join(", ")
              + " or "
              + expectedDescs[expected.length - 1]
          : expectedDescs[0];

        foundDesc = found ? "\"" + stringEscape(found) + "\"" : "end of input";

        return "Expected " + expectedDesc + " but " + foundDesc + " found.";
      }

      var posDetails = peg$computePosDetails(pos),
          found      = pos < input.length ? input.charAt(pos) : null;

      if (expected !== null) {
        cleanupExpected(expected);
      }

      return new SyntaxError(
        message !== null ? message : buildMessage(expected, found),
        expected,
        found,
        pos,
        posDetails.line,
        posDetails.column
      );
    }

    function peg$decode(s) {
      var bc = new Array(s.length), i;

      for (i = 0; i < s.length; i++) {
        bc[i] = s.charCodeAt(i) - 32;
      }

      return bc;
    }

    function peg$parseRule(index) {
      var bc    = peg$bytecode[index],
          ip    = 0,
          ips   = [],
          end   = bc.length,
          ends  = [],
          stack = [],
          params, i;

      function protect(object) {
        return Object.prototype.toString.apply(object) === "[object Array]" ? [] : object;
      }

      while (true) {
        while (ip < end) {
          switch (bc[ip]) {
            case 0:
              stack.push(protect(peg$consts[bc[ip + 1]]));
              ip += 2;
              break;

            case 1:
              stack.push(peg$currPos);
              ip++;
              break;

            case 2:
              stack.pop();
              ip++;
              break;

            case 3:
              peg$currPos = stack.pop();
              ip++;
              break;

            case 4:
              stack.length -= bc[ip + 1];
              ip += 2;
              break;

            case 5:
              stack.splice(-2, 1);
              ip++;
              break;

            case 6:
              stack[stack.length - 2].push(stack.pop());
              ip++;
              break;

            case 7:
              stack.push(stack.splice(stack.length - bc[ip + 1], bc[ip + 1]));
              ip += 2;
              break;

            case 8:
              stack.pop();
              stack.push(input.substring(stack[stack.length - 1], peg$currPos));
              ip++;
              break;

            case 9:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1]) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 10:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] === peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 11:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (stack[stack.length - 1] !== peg$FAILED) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 12:
              if (stack[stack.length - 1] !== peg$FAILED) {
                ends.push(end);
                ips.push(ip);

                end = ip + 2 + bc[ip + 1];
                ip += 2;
              } else {
                ip += 2 + bc[ip + 1];
              }

              break;

            case 13:
              ends.push(end);
              ips.push(ip + 3 + bc[ip + 1] + bc[ip + 2]);

              if (input.length > peg$currPos) {
                end = ip + 3 + bc[ip + 1];
                ip += 3;
              } else {
                end = ip + 3 + bc[ip + 1] + bc[ip + 2];
                ip += 3 + bc[ip + 1];
              }

              break;

            case 14:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length) === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 15:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (input.substr(peg$currPos, peg$consts[bc[ip + 1]].length).toLowerCase() === peg$consts[bc[ip + 1]]) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 16:
              ends.push(end);
              ips.push(ip + 4 + bc[ip + 2] + bc[ip + 3]);

              if (peg$consts[bc[ip + 1]].test(input.charAt(peg$currPos))) {
                end = ip + 4 + bc[ip + 2];
                ip += 4;
              } else {
                end = ip + 4 + bc[ip + 2] + bc[ip + 3];
                ip += 4 + bc[ip + 2];
              }

              break;

            case 17:
              stack.push(input.substr(peg$currPos, bc[ip + 1]));
              peg$currPos += bc[ip + 1];
              ip += 2;
              break;

            case 18:
              stack.push(peg$consts[bc[ip + 1]]);
              peg$currPos += peg$consts[bc[ip + 1]].length;
              ip += 2;
              break;

            case 19:
              stack.push(peg$FAILED);
              if (peg$silentFails === 0) {
                peg$fail(peg$consts[bc[ip + 1]]);
              }
              ip += 2;
              break;

            case 20:
              peg$reportedPos = stack[stack.length - 1 - bc[ip + 1]];
              ip += 2;
              break;

            case 21:
              peg$reportedPos = peg$currPos;
              ip++;
              break;

            case 22:
              params = bc.slice(ip + 4, ip + 4 + bc[ip + 3]);
              for (i = 0; i < bc[ip + 3]; i++) {
                params[i] = stack[stack.length - 1 - params[i]];
              }

              stack.splice(
                stack.length - bc[ip + 2],
                bc[ip + 2],
                peg$consts[bc[ip + 1]].apply(null, params)
              );

              ip += 4 + bc[ip + 3];
              break;

            case 23:
              stack.push(peg$parseRule(bc[ip + 1]));
              ip += 2;
              break;

            case 24:
              peg$silentFails++;
              ip++;
              break;

            case 25:
              peg$silentFails--;
              ip++;
              break;

            default:
              throw new Error("Invalid opcode: " + bc[ip] + ".");
          }
        }

        if (ends.length > 0) {
          end = ends.pop();
          ip = ips.pop();
        } else {
          break;
        }
      }

      return stack[0];
    }

    peg$result = peg$parseRule(peg$startRuleIndex);

    if (peg$result !== peg$FAILED && peg$currPos === input.length) {
      return peg$result;
    } else {
      if (peg$result !== peg$FAILED && peg$currPos < input.length) {
        peg$fail({ type: "end", description: "end of input" });
      }

      throw peg$buildException(null, peg$maxFailExpected, peg$maxFailPos);
    }
  }

  return {
    SyntaxError: SyntaxError,
    parse:       parse
  };
})();
