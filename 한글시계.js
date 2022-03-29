// Variables used by Scriptable.
// These must be at the very top of the file. Do not edit.
// icon-color: deep-gray; icon-glyph: clock;
// made by lucas

const widget = new ListWidget();

const widgetconfig = {
  backgroundcolor: "#1c1c1e",
  texthighlightcolor: "#fefffe",
  textnonhighlightcolor: "#404043",
  textnonhighlightopaque: 0.5,
  spacingline: 4,
  spacingword: 8,
  font: "most fonts doesn't effect korean",
  fontsize: 15
}

switch (config.widgetFamily) {
  case "small":
    widgetconfig.spacingline = 4;
    widgetconfig.spacingword = 8;
    widgetconfig.fontsize = 15;
    break;
  case "medium":
    widgetconfig.spacingline = 4;
    widgetconfig.spacingword = 8;
    widgetconfig.fontsize = 15;
    break;
  case "large":
    widgetconfig.spacingline = 8;
    widgetconfig.spacingword = 16;
    widgetconfig.fontsize = 30;
    break;
}

const wordlist = [    
  ["한", "두", "세", "네", "다", "섯"],
  ["여", "섯", "일", "곱", "여", "덟"],
  ["아", "홉", "열", "한", "두", "시"],
  ["자", "이", "삼", "사", "오", "십"],
  ["정", "일", "이", "삼", "사", "육"],
  ["오", "오", "칠", "팔", "구", "분"]
]

widget.backgroundColor = new Color(widgetconfig.backgroundcolor);

const highlightword = gethighlightword();

const mainstack = widget.addStack();
mainstack.layoutVertically();
mainstack.spacing = widgetconfig.spacingline;

for (let vr = 0; vr < 6; vr++) {
  const textstack = mainstack.addStack();  
  textstack.layoutHorizontally();  
  textstack.spacing = widgetconfig.spacingword;
  for (let hr = 0; hr < 6; hr++) {
    const text = textstack.addText(wordlist[vr][hr]);  
    text.font = new Font(widgetconfig.font, widgetconfig.fontsize);
    if (highlightword[vr][hr]) {
      text.textColor = new Color(widgetconfig.texthighlightcolor);
  } else {
      text.textColor = new Color(widgetconfig.textnonhighlightcolor);
text.opaque = widgetconfig.textnonhighlightopaque;  
    }  
  }
}

if (!config.runsInWidget) {
  widget.presentSmall();
}

Script.setWidget(widget);
Script.complete();

function gethighlightword () {
  
  const highlightword = [  
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false],
    [false, false, false, false, false, false]  
  ];

  const date = new Date();
  const hour = date.getHours();
  var minute = date.getMinutes();
  if (minute.toString().length == 1) {
    var minute = ''.concat(0, minute)
  }
  var minute1 = minute.toString().substring(0, 1);
  var minute2 = minute.toString().substring(1, 2);
  minute1 = parseInt(minute1);
  minute2 = parseInt(minute2);
  
  if (hour == 12 && minute == "00") {
    highlightword[4][0] = true;
    highlightword[5][0] = true;
  } else if (hour == 0 && minute == "00") {
    highlightword[3][0] = true;
    highlightword[4][0] = true;
  } else {
    switch (hour) {
      case 0:
        highlightword[2][2] = true;
        highlightword[2][4] = true;
        highlightword[2][5] = true;
        break;
      case 1:
        highlightword[0][0] = true;
        highlightword[2][5] = true;
        break;
      case 2:
        highlightword[0][1] = true;
        highlightword[2][5] = true;
        break;
      case 3:
        highlightword[0][2] = true;
        highlightword[2][5] = true;
        break;
      case 4:
        highlightword[0][3] = true;
        highlightword[2][5] = true;
        break;
      case 5:
        highlightword[0][4] = true;
        highlightword[0][5] = true;
        highlightword[2][5] = true;
        break;
      case 6:
        highlightword[1][0] = true;
        highlightword[1][1] = true;
        highlightword[2][5] = true;
        break;
      case 7:
        highlightword[1][2] = true;
        highlightword[1][3] = true;
        highlightword[2][5] = true;
        break;
      case 8:
        highlightword[1][4] = true;
        highlightword[1][5] = true;    
        highlightword[2][5] = true;
        break;
      case 9:
        highlightword[2][0] = true;
        highlightword[2][1] = true;
        highlightword[2][5] = true;
        break;
      case 10:
        highlightword[2][2] = true;  
        highlightword[2][5] = true;
        break;  
      case 11:
        highlightword[2][2] = true;
        highlightword[2][3] = true;
        highlightword[2][5] = true;
        break;  
      case 12:
        highlightword[2][2] = true;  
        highlightword[2][4] = true;
        highlightword[2][5] = true;
        break;
      case 13:
        highlightword[0][0] = true;
        highlightword[2][5] = true;
        break;
      case 14:
        highlightword[0][1] = true;
        highlightword[2][5] = true;
        break;
      case 15:
        highlightword[0][2] = true;
        highlightword[2][5] = true;
        break;
      case 16:
        highlightword[0][3] = true;
        highlightword[2][5] = true;
        break;
      case 17:
        highlightword[0][4] = true;
        highlightword[0][5] = true;
        highlightword[2][5] = true;
        break;
      case 18:
        highlightword[1][0] = true;
        highlightword[1][1] = true;  
        highlightword[2][5] = true;
        break;
      case 19:
        highlightword[1][2] = true;
        highlightword[1][3] = true;
        highlightword[2][5] = true;
        break;
      case 20:
        highlightword[1][4] = true;
        highlightword[1][5] = true;    
        highlightword[2][5] = true;  
        break;
      case 21:
        highlightword[2][0] = true;
        highlightword[2][1] = true;
        highlightword[2][5] = true;
        break;
      case 22:
        highlightword[2][2] = true;
        highlightword[2][5] = true;
        break;
      case 23:
        highlightword[2][2] = true;
        highlightword[2][3] = true;
        highlightword[2][5] = true;
        break;    
    }  
    
    switch (minute1) {
      case 0:
        break;
      case 1:
        highlightword[3][5] = true;
        highlightword[5][5] = true;
        break;
      case 2:
        highlightword[3][1] = true;
        highlightword[3][5] = true;
        highlightword[5][5] = true;
        break;
      case 3:
        highlightword[3][2] = true;
        highlightword[3][5] = true;
        highlightword[5][5] = true;
        break;
      case 4:
        highlightword[3][3] = true;
        highlightword[3][5] = true;
        highlightword[5][5] = true;
        break;
      case 5:
        highlightword[3][4] = true;
        highlightword[3][5] = true;
        highlightword[5][5] = true;
        break;
    }
    
    switch (minute2) {
      case 0:
        break;
      case 1:
        highlightword[4][1] = true;
        highlightword[5][5] = true;
        break;
      case 2:
        highlightword[4][2] = true;
        highlightword[5][5] = true;
        break;
      case 3:
        highlightword[4][3] = true;
        highlightword[5][5] = true;
          break;
      case 4:
        highlightword[4][4] = true;
        highlightword[5][5] = true;
        break;
      case 5:
        highlightword[5][1] = true;
        highlightword[5][5] = true;
        break;
      case 6:
        highlightword[4][5] = true;
        highlightword[5][5] = true;
        break;
      case 7:
        highlightword[5][2] = true;
        highlightword[5][5] = true;
        break;
      case 8:
        highlightword[5][3] = true;
        highlightword[5][5] = true;
        break;
      case 9:
        highlightword[5][4] = true;
        highlightword[5][5] = true;
        break;
    }  
  }
  return highlightword;
}