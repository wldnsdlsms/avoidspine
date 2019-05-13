# avoidspine

프로젝트명 : AvoidSpine<br>
프로젝트 설명 : 자바스크립트를 이용하여 만든 닷지를 오마주로 한 투사체 피하기 게임<br>
적용 기술 : java 8.x <br>
개발 환경 : VisualStudioCode<br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTA2/MDAxNTU3NzY2MTg4MTAx.4Pu-HbXwpn8dagV2QQB16UG4MjoGzgFMkSZRigAg4EAg.GfKd-8RlawGuC7g50roXDeLazfZ22TDf-xxWK_XOWZQg.PNG.wonjjang44/image.png?type=w773"/>
  -게임의 첫시작 화면 
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjc5/MDAxNTU3NzY5NjE1MDMw.qVnft5C_Hf38LSUTxwVRvZF0LEObPAM2F9XUkUVDZ_gg.AdOQy7DndxjDTzgH7CNDeiccNyfaF8LwJHpjvyUeF4kg.PNG.wonjjang44/image.png?type=w773"/>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjU2/MDAxNTU3NzY5NjQ2MDc5.UYuOaBKVPkzdtcLl9hAZQXgx0ldbnPBvIwuqou13udAg.Xwkfl8xobHgYDWR3RmropRvNdIrLOQKMfsQKctTiWocg.PNG.wonjjang44/image.png?type=w773"/>
  -플레이어가 가시에 닿는다면 게임은 끝이 나면서 내가 버틴 시간이 나타난다
<br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjM5/MDAxNTU3NzY5NDk1NDU5.PLAIgz2FgMWntRkiMy736hREx5_vHl-tX_r73WgSTFAg.8GfknM1HFD8_IUVphMBdGKnaezL6uzvqDAPBFjDOPJAg.PNG.wonjjang44/image.png?type=w773"/>
  -ObjectManager,js 파일로 
  -게임에 등장할 객체의 등록, 게임에서 제거될 객체의 삭제 등의 역할을 맡고 있는 부모 클래스이다
<br>
<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMjQy/MDAxNTU3NzY5NTIwODA0.O_sYw1MZPnhHxC2pZ3utmAAqDI3CNkc3OSsjaWbPMR0g.kOX_9WVWe61VuvkFN-akapt1h5Unib-dnJQQn6J-pdcg.PNG.wonjjang44/image.png?type=w773"/>
  -플레이어와 가시(투사체)가 충돌 했을경우 체크해주는 common.js의 함수이다
<br>

<img src="https://postfiles.pstatic.net/MjAxOTA1MTRfMTMg/MDAxNTU3NzY5NTcwOTkw.PVj0zjS5McRg_E00u_5vsXs3i4wTmHCOm8UgpXfBPtYg.uBd1As-hc5WRUh4Kkkq9B_Pth9Kikj-1wIgyFRG8W1kg.PNG.wonjjang44/image.png?type=w773"/>
  -적군에게서 랜덤으로 몇개의 가시가 x축,y축,z축으로 랜덤으로 날아갈지 정해주는 로직 및 common.js의 함수이다.
