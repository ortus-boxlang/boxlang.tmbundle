<!--- bxcomment --->
<!--- nested <!--- bxcomment ---> --->
<!--- multi-line
nested
<!---
bxcomment
--->
--->
<!-- html comment -->
<html>
<head>
<title>Date Functions</title>
</head>
<body>
<bx:set RightNow = Now()>
<bx:output>
 #RightNow#<br />
 #DateFormat(RightNow)#<br />
 #DateFormat(RightNow,"mm/dd/yy")#<br />
 #TimeFormat(RightNow)#<br />
 #TimeFormat(RightNow,"hh:mm tt")#<br />
 #IsDate(RightNow)#<br />
 #IsDate("January 31, 2007")#<br />
 #IsDate("foo")#<br />
 #DaysInMonth(RightNow)#
</bx:output>
<bx:set x="x">
<bx:set y="y">
<bx:set z="z">
<bx:output group="x">
    #x#
    <bx:output>#y#</bx:output>
    #z#
</bx:output>
</body>
</html>

<bx:set person = "Paul">
<bx:set greeting = "Hello #person#">

<bx:set greeting = "Hello" & " world!" >
<bx:set a = 5>
<bx:set b = 10>
<bx:set c = a^b>
<bx:set c = a MOD b>
<bx:set c = a / b>
<bx:set c = a * b>
<bx:set c = a + b>
<bx:set c = a - b>
<!--- <!-- another <!--- nested --> ---> comment --->