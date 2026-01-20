const getData = document.querySelector("#getData");
const body = document.querySelector("#body");

// 抓到資料
const data = [
  {
    currency: "美金 (USD)",
    cashBuyingRate: "31.13",
    cashSellingRate: "31.8",
    buyingSpotRate: "31.48",
    sellingSpotRate: "31.58",
  },
  {
    currency: "港幣 (HKD)",
    cashBuyingRate: "3.897",
    cashSellingRate: "4.101",
    buyingSpotRate: "4.023",
    sellingSpotRate: "4.083",
  },
  {
    currency: "英鎊 (GBP)",
    cashBuyingRate: "41.27",
    cashSellingRate: "43.39",
    buyingSpotRate: "42.28",
    sellingSpotRate: "42.68",
  },
  {
    currency: "澳幣 (AUD)",
    cashBuyingRate: "20.6",
    cashSellingRate: "21.38",
    buyingSpotRate: "20.89",
    sellingSpotRate: "21.09",
  },
];

getData.addEventListener("click", function () {
  // 處理資料
  let res = "";
  for (let i = 0; i < data.length; i++) {
    res += `<tr>
            <td>${data[i].currency}</td>
            <td>${data[i].cashBuyingRate}</td>
            <td>${data[i].cashSellingRate}</td>
            <td>${data[i].buyingSpotRate}</td>
            <td>${data[i].sellingSpotRate}</td>
            <td>查詢</td>
            <td>查詢</td>
          </tr>`;
  }

  // 將資料塞進html畫面中
  body.innerHTML = res;
});
