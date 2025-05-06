document.getElementById('calculate-price').addEventListener('click', function() {
    var siteType = document.getElementById('site-type').value;
    var numPages = document.getElementById('num-pages').value;
    var customDesign = document.getElementById('custom-design').checked;
    var price = 0;

    if (siteType === 'business-site') {
        price = 1000;
    } else if (siteType === 'online-store') {
        price = 2000;
    } else if (siteType === 'blog') {
        price = 1500;
    }
    price += (numPages - 1) * 200;
    if (customDesign) {
        price += 1000;
    }
    document.getElementById('price-result').textContent = '₪' + price;
});
