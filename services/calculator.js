document.getElementById('calculate-price').addEventListener('click', function() {
    let siteType = document.getElementById('site-type').value;
    let numPages = document.getElementById('num-pages').value;
    let customDesign = document.querySelector('input[name="custom-design"]:checked').value;
    let price = 0;

    if (siteType === 'business-site') {
        price = 1000;
    } else if (siteType === 'online-store') {
        price = 2000;
    } else if (siteType === 'blog') {
        price = 1500;
    }
    price += (numPages - 1) * 200;
    if (customDesign === "yes") {
        price += 1000;
    }
    document.getElementById('price-result').innerText = price + '₪';
});
document.getElementById('reset-calculator').addEventListener('click', function() {
    document.getElementById('price-calculator').reset()
    document.getElementById('price-result').innerText=' 0 ₪' 
});