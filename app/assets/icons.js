//Base64 encoded images used for navigation icons
var opt_ico = 
"iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAAC\
xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4\
1LjbQg61aAAABG0lEQVQ4T3VSLROCUBAkEolEotFINBKJ/gSjkcg/MBr5CUSj0Ug0Go1GG7h7s8c\
cDL6ZN+/udu/7JcmfM03TIdzsH2+2g5yP43jF/UJeHNh6GHabQQAUILzcA/KAe+cNtg/0ahFAGc1\
R5CIShHfCv+CUMw7FgRsIKQGWqJ73TgTvogCD2aBk7FF95rRBPseGOQdxU8hvBShJrLzckHE9L7Z\
jvXp2EBoqJzl3Ak3fOG3ErRqQajn3ysz9bmU+C28FtnQu5PzxYSEqBzcfri1glHlqG5pAGqy0UB6\
zNMHxqEQcmm2FzqX/Kk7aA8SXmQLntOD44BT5ySq0iQbvw3vgn9gKbmuLX3TVN7/mMuM6Cnthicr\
MwbEC9pqtuT+dKTSP+L0UhAAAAABJRU5ErkJggg==";

var opt_ico_hover = 
"iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAAC\
xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4\
1LjbQg61aAAABSklEQVQ4T3VTLXPDMAwNLBwsHBwcLCwsLBwryceuqDBw/2BwzPoJg4OBu8TOBRY\
OFhYWtnqS7TpZ6jtdzpb0nt6zk2UPVkV2HWJHw9Ojuni+p3ZZGfdVGncpyV3TKIz95v3LLEhFw3N\
h3F9sMG5gkEYiABl7LqndjADAGBu5GEBpAfKl6UlAeKqc3CrmQ4IBfnbULJDAiNCcU/saCgvTf3q\
AQc5ghmjkAIM2dodUL3zQ2mbBBCfkhB0aPFoTGKdm6V61RnZydZaTfdfmnpCM+6nbZD/SvEzDjVs\
04yqQhM555u4gzAwi9QCDs8psz8EsGDcC4GuLRuIKdaqtmMZmyYGg+YXxPUsdQal70yndKZyxTre\
6vyodb7pEnn95AB7lU6NY/1FZ5SZqlvR7f2Vq7Ax6uxk90dRx9uQf4xQBWjAimGGcfFnr3J91A7Y\
2foh06GEKAAAAAElFTkSuQmCC";

var min_ico = 
"iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAAC\
xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4\
1LjbQg61aAAABCklEQVQ4T4VSoRaCQBAkGolEop9ANBqJfgLRaLxmNBIpdqLRaCQaiUYiDZzBOd7\
dPUDeu3fs7szuze5G0co3juPBOfEabvYDnAzDUOL0+Pc++Go49otJEEgBaC0D/w3Ok8fxdbCPXgJ\
VnIgCpy5A8UrxHphsjsOwgQcAuzV9wN2UoJkwMGJqlM5kqzFMDNxHCbKIGuxz/3YUAFsdnAuNQuS\
KZNjXsNNB3OJLPjtXsBb5tUJuJdMobkhORe62mmUlcYQi55PPcZgt3cCdVIhN+02Fc7Nbhfu8lID\
yHEzhYWzjlPmN28B3Z1dxz33gTiy+jmNzV9RtHPxcTb9imIVaNAFW5sbxptY4xH4BCtjbbRrJ5XY\
AAAAASUVORK5CYII=";

var min_ico_hover = 
"iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAAC\
xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4\
1LjbQg61aAAABMElEQVQ4T4VTLVPDQBCNRCKRSH4CEomsxNU0FwZVWYlDInG7PwGJjGTa28xJZGV\
lJRL27X2QtEnIzE0mt2/fu/duU1UTT8P+Lq8lh8spXNl/4u1VQ/LmSL4dy09/1eTf9ftmlKThcF2\
T7EsDSVCS1lYmIn90vL0fEECxNCoYRH0A6o46NhI91YrlttRzQQk+ltxeTPmrqXtNBMEwCMM86oL\
CXDAgVoEDCEwdHhJb+2+iCijqLJtqxf4xNneMZk315TTpfj3jcSuqLAsUcRVoduQ/x5oRqJGzfza\
8viskG5n9cS6sbEmzCYl8YXt5w9hmnpp3D/GUcihCSO5vqnbrsX6zlyYPvgeYElz0/xW92U1sBjm\
kYM8EAB6MaH++NZMzxVMGeMERoYyJs7d6HfuzfgEWRUKTFoGn8QAAAABJRU5ErkJggg==";

var edit_ico = 
"iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAAC\
xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4\
1LjbQg61aAAABPklEQVQ4T3WTIU8DQRCFr446/gGVyMoKROXJSn5CJQJR2ZAgUJXI4pBIDAmSNAg\
kEkmrKhAVkLt+b/O22e4tl0xmZ+bNvp23e1WVfW3bnjZNc4N/wK/ksQl2kmOPYsBTbAuw85H/wur\
iBhSWsYP1G+uZwPg5/jOpTTuMKgLa6Yil3aldRQzrUcBoFoJvFy6d6xH3CnrMjfuIzRJDrCGRNxE\
PsbHYTBQ1GQgcdpNPmYil+nOqnAiwF+cmFcG9mY+EIP/q/FZrqe3454BnMXOwiMw+okbREQceRyc\
JquNltZg1iwKJFh6C7tu5x2yUW+f/NFaoaZaU3ferDcXUT25lbdzqsKnYfcdqWAI4S65Ps98Rb9z\
Y4C/yh1J7xiCmlf0NgT9yarwuPlEK59Sf0oY4I/n3DmNpF4mBjaP99zftAf1qIq6807RsAAAAAEl\
FTkSuQmCC";

var edit_ico_hover = 
"iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAAC\
xjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My4\
1LjbQg61aAAABaUlEQVQ4T3VTLVPDQBANDlmJRKIYJALBDAZZiasgHwwKWck/qMTdSiQSXCWT3mU\
iK5FIJLK8t5ttmqZk5ubuspt9H7vJsr1nJu2kkNVdIfG5COmdeylpOpPl8X7u4J5LfChD/EHyZn+\
h0Fcp9e3BAmVoZPtBiJ84z5lsDOLaYwQYIxItpF9SZDCX+qKSeJ1LuuS9lNWTFkCOv8uoBZS+GaB\
Was5D/BjQDqnF/azTzwKtohOpq6gvEFjaHdpxNq0ojB1AE/ekkvY082rcScc/1CAedb/TTL04v3W\
splkV0gsvDKjbpuvVTcH9yMxLG83tjFXjPFCEZkF3jWJc7/a1R4NpLottc6o0jZrcvC5pThbuMty\
/0o5gUY6ZZm4CsVmwPaNBQfK9xIITZ4Ua2fZa0a3HGniU+lyNBKoZ2tw4XbqO+MlgUFTv7mhSmy1\
l5e3yLozGVAehb0U/32BFp0eIhwadZlC7r//+pj9v0qXbpL9+sAAAAABJRU5ErkJggg==";

var loading_ico = 
"R0lGODlhEAAQAPQAAP///9HUzfz9/Nrd1+jp5tLUztfa1Pb39u7v7dTX0eXn4+Pk4Pn5+Ovt6vT0\
893f2uDi3QAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05F\
VFNDQVBFMi4wAwEAAAAh/hpDcmVhdGVkIHdpdGggYWpheGxvYWQuaW5mbwAh+QQJCgAAACwAAAAA\
EAAQAAAFUCAgjmRpnqUwFGwhKoRgqq2YFMaRGjWA8AbZiIBbjQQ8AmmFUJEQhQGJhaKOrCksgEla\
+KIkYvC6SJKQOISoNSYdeIk1ayA8ExTyeR3F749CACH5BAkKAAAALAAAAAAQABAAAAVoICCKR9KM\
aCoaxeCoqEAkRX3AwMHWxQIIjJSAZWgUEgzBwCBAEQpMwIDwY1FHgwJCtOW2UDWYIDyqNVVkUbYr\
6CK+o2eUMKgWrqKhj0FrEM8jQQALPFA3MAc8CQSAMA5ZBjgqDQmHIyEAIfkECQoAAAAsAAAAABAA\
EAAABWAgII4j85Ao2hRIKgrEUBQJLaSHMe8zgQo6Q8sxS7RIhILhBkgumCTZsXkACBC+0cwF2GoL\
LoFXREDcDlkAojBICRaFLDCOQtQKjmsQSubtDFU/NXcDBHwkaw1cKQ8MiyEAIfkECQoAAAAsAAAA\
ABAAEAAABVIgII5kaZ6AIJQCMRTFQKiDQx4GrBfGa4uCnAEhQuRgPwCBtwK+kCNFgjh6QlFYgGO7\
baJ2CxIioSDpwqNggWCGDVVGphly3BkOpXDrKfNm/4AhACH5BAkKAAAALAAAAAAQABAAAAVgICCO\
ZGmeqEAMRTEQwskYbV0Yx7kYSIzQhtgoBxCKBDQCIOcoLBimRiFhSABYU5gIgW01pLUBYkRItAYA\
qrlhYiwKjiWAcDMWY8QjsCf4DewiBzQ2N1AmKlgvgCiMjSQhACH5BAkKAAAALAAAAAAQABAAAAVf\
ICCOZGmeqEgUxUAIpkA0AMKyxkEiSZEIsJqhYAg+boUFSTAkiBiNHks3sg1ILAfBiS10gyqCg0Ua\
FBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA==";
