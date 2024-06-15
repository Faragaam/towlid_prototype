// Mock data for products
const poison = {
      "حشره کش پودری": [
        {name: "تریسیکلازول 75% WP", sales: [4791, 7643, 6512, 10996, 13532, 3504, 7435]},
        {name: "استامی‌پرید 20% SP", sales: [23177, 36542, 38865, 39269, 26606, 27957, 1960]},
        {name: "استامی‌پرید ویژه 20% SP", sales: [38730, 39136, 13313, 234, 736, 21777, 19520]},
        {name: "اتوکسازول 10% SC", sales: [8173, 9850, 10000, 0, 0, 10000, 10000]},
        {name: "اتیون 47%EC", sales: [42184, 38917, 40833, 34717, 34222, 33334, 29864]},
        {name: "اسپیرودیکلوفن 24% SC", sales: [27702, 33036, 27417, 16619, 23010, 24342, 24342]},
        {name: "استوکلر 50% EC", sales: [17902, 16000, 6540, 4440, 15000, 15000, 15000]},
        {name: "اکسی کلرور مس 35% WP", sales: [52541, 45611, 54995, 54110, 77724, 55887, 46793]},
        {name: "اکسی فلورفن 24% EC", sales: [20057, 13744, 11424, 13745, 20286, 12301, 12786]},
        {name: "اگزادیازون 12% EC", sales: [11514, 8575, 12141, 11460, 11404, 8124, 10299]},
        {name: "امامکتین بنزوات+لوفنورون 50% WG", sales: [312, 4000, 4000, 4000, 0, 0, 0]},
        {name: "تریسیکلازول 75% WP", sales: [4791, 7643, 6512, 10996, 13532, 3504, 7435]}
      ],
      "گرانول": [
        // Add data for this category
      ],
      "علف کش پودری": [
        // Add data for this category
      ],
      "علف کش مایع": [
        // Add data for this category
      ],
      "توفوردی": [
        // Add data for this category
      ],
      "روغن پارافین": [
        // Add data for this category
      ]
    };

// Mock data for packaging
const fertilizers = [
      {name: "اورانوس", sales: [1797, 1014, 1435, 2563, 1818, 3091, 3312]},
      {name: "اوره فسفات", sales: [109430, 108450, 10025, 145000, 0, 0, 0]},
      {name: "ایمپکت", sales: [186785, 179210, 116705, 137388, 84921, 0, 0]},
      {name: "آرامیکس", sales: [320287, 270014, 199247, 137388, 84921, 72054, 69880]},
      {name: "آرمیتکس", sales: [468335, 370600, 2881092, 1024]},
      {name: "آلگورا", sales: [54983, 51297, 41478, 44470, 49153, 28765, 36244]},
      {name: "بفرمال روی", sales: [33296, 19003, 5892, 8015, 9805, 6408, 9348]},
      {name: "بوستانو", sales: [1251507, 1211119, 1254908, 1056845, 586550, 208556, 133046]},
      {name: "پتاسیل", sales: [35067, 22087, 25000, 0, 0, 0, 0]},
      {name: "تاباک ۱۰-۵۰-۱۰", sales: [6426, 4292, 4634, 5200, 3942, 1970, 4038]}
    ];

// Mock data for packaging
const packaging = {
      "تریسیکلازول 75% WP": ["پاکت آلومینیومی یک کیلوگرمی(10کیلوگرم در کارتن)", "پاکت آلومینیومی یک کیلوگرمی(8کیلوگرم در کارتن)", "پاکت آلومینیومی نیم کیلوگرمی(10کیلوگرم در کارتن)", "پاکت آلومینیومی نیم کیلوگرمی(8کیلوگرم در کارتن)", "پاکت آلومینیومی 250 گرمی", "ساشه 100 گرمی"],
      "فیپرونیل 0.2% G": ["پاکت آلومینیومی یک کیلوگرمی(10کیلوگرم در کارتن)", "پاکت آلومینیومی نیم کیلوگرمی(۱۰ کیلوگرم در کارتن)", "پاکت آلومینیومی نیم کیلوگرمی(۸ کیلوگرم در کارتن)", "ساشه 100 چاپدار"],
      "تریکلروفن 80% WP": ["پاکت آلومینیومی یک کیلوگرمی(10کیلوگرم در کارتن)", "پاکت آلومینیومی یک کیلوگرمی(8کیلوگرم در کارتن)", "پاکت آلومینیومی نیم کیلوگرمی(10کیلوگرم در کارتن)", "پاکت آلومینیومی نیم کیلوگرمی(8کیلوگرم در کارتن)", "پاکت آلومینیومی 250 گرمی", "ساشه 100 گرمی"],
      "استامی‌پرید 20% SP": ["پاکت آلومینیومی 250 گرمی (6 کیلوگرمی در کارتن)"],
      "استامی‌پرید ویژه 20% SP": ["پاکت آلومینیومی 250 گرمی چاپدار"],
      "اتوکسازول 10% SC": ["بطری پارس پینوا نیم لیتری","بطری پلی اتیلن نیم لیتری"],
      "اتیون 47%EC": ["Package 1", "Package 2"],
      "اسپیرودیکلوفن 24% SC": ["بطری پارس پینوا نیم لیتری", "بطری پلی اتیلن نیم لیتری","بطری پارس پینوا 250 سی سی بدون قوطی مقوایی", "بطری 60 سی سی سموم SC"],
      "استوکلر 50% EC": ["سطل 20 لیتری", "بطری پارس پینوا یک لیتری سفید"],
      "اکسی کلرور مس 35% WP": ["پاکت آلومینیومی یک کیلوگرمی چاپدار(12کیلوگرم در کارتن)", "پاکت آلومینیومی نیم کیلوگرمی چاپدار(10کیلوگرم در کارتن)", "ساشه 100 گرمی"],
      "اکسی فلورفن 24% EC": ["بطری کوئکس یک لیتری", "بطری کوئکس نیم کیلوگرمی"],
      "اگزادیازون 12% EC": ["Package 1", "Package 2"],
      "امامکتین بنزوات+لوفنورون 50% WG": ["Package 1", "Package 2", "بطری پارس پینوا نیم لیتری"],
      "اورانوس": ["Package 1", "Package 2"],
      "اوره فسفات": ["Package 1", "Package 2"],
      "ایمپکت": ["Package 1", "Package 2"],
      "آرامیکس": ["Package 1", "Package 2"],
      "آرمیتکس": ["Package 1", "Package 2"],
      "آلگورا": ["Package 1", "Package 2"],
      "بفرمال روی": ["Package 1", "Package 2"],
      "بوستانو": ["Package 1", "Package 2"],
      "پتاسیل": ["Package 1", "Package 2"],
      "تاباک ۱۰-۵۰-۱۰": ["Package 1", "Package 2"]
    };

// Generating Random Data for Charts
function generateData() {
      return Array.from({ length: 12 }, () => Math.floor(Math.random() * 100));
    }

function generateRandomSalesData(count) {
      let data = [];
      for (let i = 0; i < count; i++) {
        data.push(Math.floor(Math.random() * 1000));
      }
      return data;
    }

    // Main Chart
const ctxMain = document.getElementById('mainChart').getContext('2d');
const mainChart = new Chart(ctxMain, {
      type: 'line',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Main Data',
          data: generateData(),
          backgroundColor: 'rgba(0, 123, 255, 0.2)',
          borderColor: 'rgba(0, 123, 255, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Secondary Chart
const ctxSecondary = document.getElementById('secondaryChart').getContext('2d');
const secondaryChart = new Chart(ctxSecondary, {
      type: 'bar',
      data: {
        labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
        datasets: [{
          label: 'Secondary Data',
          data: generateData(),
          backgroundColor: 'rgba(40, 167, 69, 0.2)',
          borderColor: 'rgba(40, 167, 69, 1)',
          borderWidth: 1
        }]
      },
      options: {
        responsive: true,
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

        // Revenue Chart
var ctx = document.getElementById('revenueChart').getContext('2d');
var revenueChart = new Chart(ctx, {
    type: 'line',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Vente commercial',
        data: [100000, 150000, 200000, 180000, 220000, 250000, 270000, 300000],
        backgroundColor: 'rgba(0, 123, 255, 0.2)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

    // Invoices Chart
var ctx2 = document.getElementById('invoicesChart').getContext('2d');
var invoicesChart = new Chart(ctx2, {
    type: 'bar',
    data: {
      labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
      datasets: [{
        label: 'Ouvertes',
        data: [3, 2, 1, 3, 2, 4, 3, 2],
        backgroundColor: 'rgba(255, 193, 7, 0.5)',
        borderColor: 'rgba(255, 193, 7, 1)',
        borderWidth: 1
      }, {
        label: 'Reçues',
        data: [2, 3, 4, 3, 3, 2, 3, 4],
        backgroundColor: 'rgba(40, 167, 69, 0.5)',
        borderColor: 'rgba(40, 167, 69, 1)',
        borderWidth: 1
      }, {
        label: 'Payées',
        data: [3, 2, 3, 4, 2, 4, 3, 2],
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });


    //Product List
function populateProductList() {
  let productList = $("#productList");
  productList.empty();
  Object.keys(poison).forEach(productClass => {
        poison[productClass].forEach(product => {
          productList.append(`<a href="#" class="list-group-item list-group-item-action">${product.name}</a>`);
        });
      });
}

let yearlySalesBarChart, monthlySalesChart;

function initCharts() {
      // Yearly Sales Bar Chart for poison and fertilizer
      let yearlySalesBarCtx = document.getElementById('yearlySalesBarChart').getContext('2d');
      yearlySalesBarChart = new Chart(yearlySalesBarCtx, {
        type: 'bar',
        data: {
          labels: ["1396", "1397", "1398", "1399", "1400", "1401", "1402", "1403"],
          datasets: [
            {
              label: 'فروش سم',
              data: generateRandomSalesData(7).concat([Math.floor(Math.random() * 1000)]),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            },
            {
              label: 'فروش کود',
              data: generateRandomSalesData(7).concat([Math.floor(Math.random() * 1000)]),
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

      // Mock initial data for monthly sales
      let monthlySalesData = generateRandomSalesData(12);
      let monthlyPredictionData = generateRandomSalesData(6); // Prediction for next 6 months

      // Product Specific Yearly Sales Chart
      let productYearlySalesCtx = document.getElementById('productYearlySalesChart').getContext('2d');
      let productYearlySalesChart = new Chart(productYearlySalesCtx, {
        type: 'bar',
        data: {
          labels: ["1396", "1397", "1398", "1399", "1400", "1401", "1402", "1403"],
          datasets: [
            {
              label: 'Yearly Sales',
              data: generateRandomSalesData(7).concat([Math.floor(Math.random() * 1000)]),
              backgroundColor: 'rgba(255, 99, 132, 0.2)',
              borderColor: 'rgba(255, 99, 132, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });

      // Product Specific Monthly Sales Chart
      let productMonthlySalesCtx = document.getElementById('productMonthlySalesChart').getContext('2d');
      let productMonthlySalesChart = new Chart(productMonthlySalesCtx, {
        type: 'line',
        data: {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
          datasets: [
            {
              label: 'Monthly Sales',
              data: monthlySalesData,
              backgroundColor: 'rgba(255, 193, 7, 0.2)',
              borderColor: 'rgba(255, 193, 7, 1)',
              borderWidth: 1
            },
            {
              label: 'Monthly Sales Prediction',
              data: monthlyPredictionData,
              backgroundColor: 'rgba(255, 0, 0, 0.2)',
              borderColor: 'rgba(255, 0, 0, 1)',
              borderWidth: 1
            }
          ]
        },
        options: {
          responsive: true,
          scales: {
            yAxes: [{
              ticks: {
                beginAtZero: true
              }
            }]
          }
        }
      });
    }

function handleProductSelection(product) {
      $("#bestsellingProductCard").text(product);
      yearlySalesBarChart.data.datasets[0].data = generateRandomSalesData(7).concat([Math.floor(Math.random() * 1000)]);
      yearlySalesBarChart.update();
      populateSalesDataTable(product);
    }

 function populateSalesDataTable(product) {
      let salesDataBody = $("#salesDataBody");
      salesDataBody.empty();
      let productPackages = packaging[product] || ["Package 1", "Package 2"];
      productPackages.forEach(pkg => {
        let row = `
          <tr>
            <td>${product}</td>
            <td>${pkg}</td>
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${Math.floor(Math.random() * 1000)}</td>
            <td>${Math.floor(Math.random() * 1000)}</td>
          </tr>
        `;
        salesDataBody.append(row);
      });
    }

