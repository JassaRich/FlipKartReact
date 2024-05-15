setTimeout(function(){ 
// Products Viewer
{
    var products = [
        {
            name: "Top Mirrorless Cameras",
            url: "assets/images/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70",
            srcset: "assets/images/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 1024w, assets/images/z-24-200mm-z5-nikon-original-imag2zuekuxgxsgg.jpeg?q=70 768w",
            starting_price: "9999",
            brand: "Canon, Sony, Fujifilm..."
        },
        {
            name: "Printers",
            url: "assets/images/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70",
            srcset: "assets/images/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 1024w, assets/images/hp-laserjet-m1005-multifunction-original-imadxhzpeb9qbrfg.jpeg?q=70 768w",
            starting_price: "3999",
            brand: "HP"
        },
        {
            name: "Best of Shavers",
            url: "assets/images/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70",
            srcset: "assets/images/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70 1024w, assets/images/philips-s1121-45-s1121-45-original-imafry2qgxcwnm9r.jpeg?q=70 768w",
            starting_price: "1649",
            brand: "Philips & Havells"
        }, {
            name: "Monitor",
            url: "assets/images/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70",
            srcset: "assets/images/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70 1024w, assets/images/s2721hn-27-py0df-dell-original-imagfjphuywuh2a7.jpeg?q=70 768w",
            starting_price: "8279",
            brand: "DELL"
        },
        {
            name: "Monitors",
            url: "assets/images/-original-imagg897ufhyvwqq.jpeg?q=70",
            srcset: "assets/images/-original-imagg897ufhyvwqq.jpeg?q=70 1024w, assets/images/-original-imagg897ufhyvwqq.jpeg?q=70 768w",
            starting_price: "9999",
            brand: "SAMSUNG"
        },
        {
            name: "Premium PowerBanks",
            url: "assets/images/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70",
            srcset: "assets/images/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 1024w, assets/images/power-bank-dx09-20000-mah-20000-dx09-20k-callmate-original-imagbhec5wmkzzca.jpeg?q=70 768w",
            starting_price: "699",
            brand: "Mi, realme & more"
        }, 
        {
            name: "Monitors",
            url: "assets/images/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70",
            srcset: "assets/images/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70 1024w, assets/images/qg271-um-hq1ss-001-acer-original-imafzhrxqegfbhad.jpeg?q=70 768w",
            starting_price: "6599",
            brand: "acer"
        },
        {
            name: "Monitors",
            url: "assets/images/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70",
            srcset: "assets/images/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 1024w, assets/images/d24-20-66aekac1in-lenovo-original-imag2qwzazcdmqtb.jpeg?q=70 768w",
            starting_price: "7949",
            brand: "LENOVO"
        }
    ]

    var electronics = "";

    products.forEach(ele => {
        electronics += `
            <div class="swiper-slide product-card">
                <div class="product-image">
                    <img class="img-fluid" src="${ele.url}" srcset="${ele.srcset}" alt="" width="auto" height="200px" sizes="(max-width: 768px) 720px, 1024px">
                </div>
                <p class="product-title mt-md-4 mt-sm-2 mb-0">${ele.name}</p>
                <p class="product-price mt-2 mb-0">From &#x20B9;$${ele.starting_price}</p>
                <p class="product-brand mt-2 mb-0">${ele.brand}</p>
            </div>
    `;
    });
   
    document.getElementById("electronic-products").innerHTML += electronics;
    document.getElementById("summer-products").innerHTML += electronics;
    document.getElementById("sport-products").innerHTML += electronics;
}

// Swiper script
{
    let swiper = new Swiper('.mySwiper', {
        // loop: true,
        slidesPerView: 'auto',
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev",
        },
    });
}
 }, 2000);