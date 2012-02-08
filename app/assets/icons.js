//Base64 encoded images used for navigation icons
var opt_ico = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAABG0lEQVQ4T3VSLROCUBAkEolEotFINBKJ/gSjkcg/MBr5CUSj0Ug0Go1GG7h7s8ccDL6ZN+/udu/7JcmfM03TIdzsH2+2g5yP43jF/UJeHNh6GHabQQAUILzcA/KAe+cNtg/0ahFAGc1R5CIShHfCv+CUMw7FgRsIKQGWqJ73TgTvogCD2aBk7FF95rRBPseGOQdxU8hvBShJrLzckHE9L7ZjvXp2EBoqJzl3Ak3fOG3ErRqQajn3ysz9bmU+C28FtnQu5PzxYSEqBzcfri1glHlqG5pAGqy0UB6zNMHxqEQcmm2FzqX/Kk7aA8SXmQLntOD44BT5ySq0iQbvw3vgn9gKbmuLX3TVN7/mMuM6CnthicrMwbEC9pqtuT+dKTSP+L0UhAAAAABJRU5ErkJggg==";
var opt_ico_hover = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAABSklEQVQ4T3VTLXPDMAwNLBwsHBwcLCwsLBwryceuqDBw/2BwzPoJg4OBu8TOBRYOFhYWtnqS7TpZ6jtdzpb0nt6zk2UPVkV2HWJHw9Ojuni+p3ZZGfdVGncpyV3TKIz95v3LLEhFw3Nh3F9sMG5gkEYiABl7LqndjADAGBu5GEBpAfKl6UlAeKqc3CrmQ4IBfnbULJDAiNCcU/saCgvTf3qAQc5ghmjkAIM2dodUL3zQ2mbBBCfkhB0aPFoTGKdm6V61RnZydZaTfdfmnpCM+6nbZD/SvEzDjVs04yqQhM555u4gzAwi9QCDs8psz8EsGDcC4GuLRuIKdaqtmMZmyYGg+YXxPUsdQal70yndKZyxTre6vyodb7pEnn95AB7lU6NY/1FZ5SZqlvR7f2Vq7Ax6uxk90dRx9uQf4xQBWjAimGGcfFnr3J91A7Y2foh06GEKAAAAAElFTkSuQmCC";
var min_ico = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAABCklEQVQ4T4VSoRaCQBAkGolEop9ANBqJfgLRaLxmNBIpdqLRaCQaiUYiDZzBOd7dPUDeu3fs7szuze5G0co3juPBOfEabvYDnAzDUOL0+Pc++Go49otJEEgBaC0D/w3Ok8fxdbCPXgJVnIgCpy5A8UrxHphsjsOwgQcAuzV9wN2UoJkwMGJqlM5kqzFMDNxHCbKIGuxz/3YUAFsdnAuNQuSKZNjXsNNB3OJLPjtXsBb5tUJuJdMobkhORe62mmUlcYQi55PPcZgt3cCdVIhN+02Fc7Nbhfu8lIDyHEzhYWzjlPmN28B3Z1dxz33gTiy+jmNzV9RtHPxcTb9imIVaNAFW5sbxptY4xH4BCtjbbRrJ5XYAAAAASUVORK5CYII=";
var min_ico_hover = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAABMElEQVQ4T4VTLVPDQBCNRCKRSH4CEomsxNU0FwZVWYlDInG7PwGJjGTa28xJZGVlJRL27X2QtEnIzE0mt2/fu/duU1UTT8P+Lq8lh8spXNl/4u1VQ/LmSL4dy09/1eTf9ftmlKThcF2T7EsDSVCS1lYmIn90vL0fEECxNCoYRH0A6o46NhI91YrlttRzQQk+ltxeTPmrqXtNBMEwCMM86oLCXDAgVoEDCEwdHhJb+2+iCijqLJtqxf4xNneMZk315TTpfj3jcSuqLAsUcRVoduQ/x5oRqJGzfza8viskG5n9cS6sbEmzCYl8YXt5w9hmnpp3D/GUcihCSO5vqnbrsX6zlyYPvgeYElz0/xW92U1sBjmkYM8EAB6MaH++NZMzxVMGeMERoYyJs7d6HfuzfgEWRUKTFoGn8QAAAABJRU5ErkJggg==";
var edit_ico = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAABPklEQVQ4T3WTIU8DQRCFr446/gGVyMoKROXJSn5CJQJR2ZAgUJXI4pBIDAmSNAgkEkmrKhAVkLt+b/O22e4tl0xmZ+bNvp23e1WVfW3bnjZNc4N/wK/ksQl2kmOPYsBTbAuw85H/wuriBhSWsYP1G+uZwPg5/jOpTTuMKgLa6Yil3aldRQzrUcBoFoJvFy6d6xH3CnrMjfuIzRJDrCGRNxEPsbHYTBQ1GQgcdpNPmYil+nOqnAiwF+cmFcG9mY+EIP/q/FZrqe3454BnMXOwiMw+okbREQceRycJquNltZg1iwKJFh6C7tu5x2yUW+f/NFaoaZaU3ferDcXUT25lbdzqsKnYfcdqWAI4S65Ps98Rb9zY4C/yh1J7xiCmlf0NgT9yarwuPlEK59Sf0oY4I/n3DmNpF4mBjaP99zftAf1qIq6807RsAAAAAElFTkSuQmCC";
var edit_ico_hover = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAAZdEVYdFNvZnR3YXJlAFBhaW50Lk5FVCB2My41LjbQg61aAAABaUlEQVQ4T3VTLVPDQBANDlmJRKIYJALBDAZZiasgHwwKWck/qMTdSiQSXCWT3mUiK5FIJLK8t5ttmqZk5ubuspt9H7vJsr1nJu2kkNVdIfG5COmdeylpOpPl8X7u4J5LfChD/EHyZn+h0Fcp9e3BAmVoZPtBiJ84z5lsDOLaYwQYIxItpF9SZDCX+qKSeJ1LuuS9lNWTFkCOv8uoBZS+GaBWas5D/BjQDqnF/azTzwKtohOpq6gvEFjaHdpxNq0ojB1AE/ekkvY082rcScc/1CAedb/TTL04v3WsplkV0gsvDKjbpuvVTcH9yMxLG83tjFXjPFCEZkF3jWJc7/a1R4NpLottc6o0jZrcvC5pThbuMty/0o5gUY6ZZm4CsVmwPaNBQfK9xIITZ4Ua2fZa0a3HGniU+lyNBKoZ2tw4XbqO+MlgUFTv7mhSmy1l5e3yLozGVAehb0U/32BFp0eIhwadZlC7r//+pj9v0qXbpL9+sAAAAABJRU5ErkJggg==";
var arrow_ico = "iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAAGXRFWHRTb2Z0d2FyZQBBZG9iZSBJbWFnZVJlYWR5ccllPAAAAyBpVFh0WE1MOmNvbS5hZG9iZS54bXAAAAAAADw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMC1jMDYwIDYxLjEzNDc3NywgMjAxMC8wMi8xMi0xNzozMjowMCAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6RDA5QjE5RTExNzUxMTFFMEFENkI5RDkyMjJBMzg2NzUiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6RDA5QjE5RTAxNzUxMTFFMEFENkI5RDkyMjJBMzg2NzUiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNSBXaW5kb3dzIj4gPHhtcE1NOkRlcml2ZWRGcm9tIHN0UmVmOmluc3RhbmNlSUQ9InhtcC5kaWQ6NzY4RUVGMDg0RjE3RTAxMUE2MTlEM0NFRkU1RDM3NDgiIHN0UmVmOmRvY3VtZW50SUQ9InhtcC5kaWQ6NzY4RUVGMDg0RjE3RTAxMUE2MTlEM0NFRkU1RDM3NDgiLz4gPC9yZGY6RGVzY3JpcHRpb24+IDwvcmRmOlJERj4gPC94OnhtcG1ldGE+IDw/eHBhY2tldCBlbmQ9InIiPz4loKshAAAAeklEQVR42mL8//8/A7mABYd4FBDbI/G/A3EBhiqQzVjwtP+o4AM2dUwMFICRqBlbKJ8B4ldoof0HKn4SiBVh6tE1K0KjBReoQFaPLY4DcWjcjq4WVyKZjKbxIRCLEquZDYjPI/nXBps6XJqR/V+KSw0+zSBshk8eIMAAJOyPBtuA0QYAAAAASUVORK5CYII=";
//var loading_ico = "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"
var loading_ico = "R0lGODlhEAAQAPQAAP///1hZWvr6+nx9fq6ur1tcXXBxcuPk5MXGxmZnaKWlppqbm+3t7bu7vNnZ\
2YeHiJCQkQAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAACH/C05F\
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
FBCkwy3RYKiIYMAC+RAxiQgYsJdAjw5DN2gILzEEZgVcKYuMJiEAOwAAAAAAAAAAAA=="