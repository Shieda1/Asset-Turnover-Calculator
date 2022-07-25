// https://calculator.swiftutors.com/asset-turnover-calculator.html

const v1 =  document.getElementById('v1');
const v2 = document.getElementById('v2');
const v3 = document.getElementById('v3');
const btn = document.getElementById('btn');
const result = document.getElementById('result');

// radio buttons
const assetTurnoverRadio = document.getElementById('assetTurnoverRadio');
const netSalesRevenueRadio = document.getElementById('netSalesRevenueRadio');
const AverageTotalAssetsRadio = document.getElementById('AverageTotalAssetsRadio');

let assetTurnover;
let netSalesRevenue = v1;
let assetsatStartofYear = v2;
let assetsatEndofYear = v3;

// labels of the inpust
const variable1 = document.getElementById('variable1');
const variable2 = document.getElementById('variable2');
const variable3 = document.getElementById('variable3');

assetTurnoverRadio.addEventListener('click', function() {
  variable1.textContent = 'Net Sales Revenue';
  variable2.textContent = 'Assets at Start of Year';
  variable3.textContent = 'Assets at End of Year';
  netSalesRevenue = v1;
  assetsatStartofYear = v2;
  assetsatEndofYear = v3;

  // to make the  input field and label apear after clicking the third radio button 

  variable3.style.display = 'inline';
  v3.style.display = 'inline';
});

netSalesRevenueRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Turnover';
  variable2.textContent = 'Assets at Start of Year';
  variable3.textContent = 'Assets at End of Year';
  assetTurnover = v1;
  assetsatStartofYear = v2;
  assetsatEndofYear = v3;

  // to make the  input field and label apear after clicking the third radio button 

  variable3.style.display = 'inline';
  v3.style.display = 'inline';
});

AverageTotalAssetsRadio.addEventListener('click', function() {
  variable1.textContent = 'Asset Turnover';
  variable2.textContent = 'Net Sales Revenue';
  assetTurnover = v1;
  netSalesRevenue = v2;

  // to make the third input field and label disapear

  variable3.style.display = 'none';
  v3.style.display = 'none';
});

btn.addEventListener('click', function() {
  
  if(assetTurnoverRadio.checked)
    result.textContent = `Asset Turnover = ${computeAssetTurnover().toFixed(2)}`;

  else if(netSalesRevenueRadio.checked)
    result.textContent = `Net Sales Revenue = ${computeNetSalesRevenue().toFixed(2)}`;

  else if(AverageTotalAssetsRadio.checked)
    result.textContent = `AverageTotalAssets = ${computeAverageTotalAssetsOutput().toFixed(2)}`;
})

// calculation

function computeAverageTotalAssetsInput() {
  return (Number(assetsatStartofYear.value) + Number(assetsatEndofYear.value)) / 2;
}

function computeAssetTurnover() {
  return Number(netSalesRevenue.value) / computeAverageTotalAssetsInput();
}

function computeNetSalesRevenue() {
  return Number(assetTurnover.value) * computeAverageTotalAssetsInput();
}

function computeAverageTotalAssetsOutput() {
  return Number(netSalesRevenue.value) / Number(assetTurnover.value);
}