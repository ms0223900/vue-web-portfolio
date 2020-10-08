const content = `

==持續學習，沒有放棄設計的程式人==

## 前端經驗

### 公車與地圖相關專案為主
-- 在公司主要開發跟公車有關的相關網站/應用，主要為串接公車的資料
### 地圖相關使用經驗
* 串接過PTX資料(捷運、bike...)
* 有串過TGOS的API(地址查詢、地圖...等)
* leaflet map的應用: Marker, Popup...等

### 專案主要使用的技術: 
* React(用原生context而沒用redux)
* GraphQL
* TypeScript
* Node.js
* Docker
* Sass(較少用，主要以material UI的css in js)
* Drone(CI/CD)

### 前端較常使用的library: 
* react-router
* react-leaflet(地圖)
* material UI
* storybook
* jest
* enzyme

----

## 個人學習

----

## 個人優劣勢

### 優勢

- 能夠自行處理素材、出圖: 
為設計出身，能夠處理部分切版和出圖(頁籤icon就是我用XD畫的)，部分素材、顏色漸層也是自行切圖處理
- 更關注使用者體驗: 
排版、設計和使用者體驗部份皆為自己設計與優化

### 弱勢

- 不熟悉大型網站的CSS規劃: 對於大型網站的css規劃部分比較不熟悉，因為主要都是以功能開發為主，css幾乎都是以組件為單位，其餘排版大多為flex做大致編排而已
- 較無分工經驗較無程式分工經驗，比較不知道職責切分和程式風格的統一(只有黑客松時有分工過)，目前的程式項目都是個人獨力完成的
`;

const about = {
  title: '自我簡介',
  content,
};

export default about;
