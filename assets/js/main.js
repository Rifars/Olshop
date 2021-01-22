
$(".carousel").carousel({
  interval: 4500,
});

AOS.init({
  duration : 800
})

// redirect
// function redirect() {
//     let benar = confirm("Transaksi Berhasil, Tunggu Admin Untuk Memvalidasi");
//     if (benar === true) {
//         window.location.href = "index.html";
//     } else {
//         window.location.href = "payment.html";
//     }
// }

// navbar
let navbars = `<div class="container" id="navbar-flex">
    <a class="navbar-brand" href="#">Logo</a>
    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
    </button>

    

    <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav mb-3"></ul>

        <form class="form-inline ml-4">
            <input class="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" style="min-width: 250px;">
            <span style="height:100%; background-color: white; width: 30px; margin-left: -40px;">
                <i class="fa fa-search" style="cursor: pointer; color: #007bff;"></i>
            </span>
        </form>

        

        <ul class="navbar-nav mr-auto ml-4">
            <li class="nav-item">
                <a class="nav-link" href="#">Home</a>       
            </li>
            <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Catagory
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                    <a class="dropdown-item" href="#">Game Mobile</a>
                    <a class="dropdown-item" href="#">Game Pc</a>
                    <a class="dropdown-item" href="#">Game Console</a>
                </div>
            </li>
            <li class="nav-item">
                <a href="" class="nav-link">About Us</a>
            </li>
        </ul>

        <ul class="navbar-nav mr-right ml-4">
            <li class="nav-item">
                <a class="nav-link"  href="#"><i class="fas fa-shopping-cart"></i></a>       
            </li>
            <li class="nav-item">
                <a class="nav-link"  href="#">Login</a>       
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">SignUp</a>
            </li>
            <li class="nav-item" style="display:flex; align-items:center; height:100%; " onClick="return window.location.href='profile.html' ">
                <img src="assets/images/images.jpg" style="width:30px; height:30px; border-radius:50%;" class="ml-2" >
                <a class="nav-link text-light" href="#" >Ucok</a>
            </li>
        </ul>

    </div>

</div>`;

let navbar = document.querySelector('.navbar');
navbar.innerHTML = navbars; 

let footers = 
`<div class="container">
    <div class="row mb-4">
        <div class="col-md w-auto mb-4">
            <h4 class="mb-4" data-aos="fade-left">Logo</h4>
            <p style="width: auto; color: #aeaeae;" data-aos="fade-left" data-aos-delay="100">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Voluptatum, quam cumque asperiores fuga voluptas, itaque quasi suscipit error libero eaque accusantium non placeat quaerat dolorum ipsam eum, similique commodi! Voluptates.
            </p>
        </div>
        <div class="col-md mb-4">
            <h4 class="mb-4" data-aos="fade-up" data-aos-delay="150">Menu</h4>
            <span class="footerList">
                <a href="" data-aos="fade-up" data-aos-delay="200">Home</a>
                <a href="" data-aos="fade-up" data-aos-delay="250">Serive</a>
                <a href="" data-aos="fade-up" data-aos-delay="300">Features</a>
                <a href="" data-aos="fade-up" data-aos-delay="350">Pricing</a>
            </span>
        </div>
        <div class="col-md mb-4">
            <h4 class="mb-4" data-aos="fade-up" data-aos-delay="300">Info</h4>
            <span class="footerList">
                <a href="" data-aos="fade-up" data-aos-delay="350">About</a>
                <a href="" data-aos="fade-up" data-aos-delay="400">Terms</a>
                <a href="" data-aos="fade-up" data-aos-delay="450">Support</a>
                <a href="" data-aos="fade-up" data-aos-delay="500">Contact</a>
                <a href="" data-aos="fade-up" data-aos-delay="550">Account</a>
            </span>
        </div>
        <div class="col-md mb-4">
            <h4 class="mb-4" data-aos="fade-right">Sosial Media</h4>
            <span class="icon">
                <a href="" data-aos="fade-right" data-aos-delay="100"><i class="fab fa-facebook"></i></a>
                <a href="" data-aos="fade-right" data-aos-delay="150"><i class="fab fa-instagram"></i></a>
                <a href="" data-aos="fade-right" data-aos-delay="200"><i class="fab fa-twitter"></i></a>
            </span>
        </div>
    </div>
    <div class="row mt-5">
        <div class="col-md-12" align="center">
            <p>
                <i class="fa fa-copyright mr-2" style="background-color: none; color: #aeaeae; "></i><a href="">copyright</a>
            </p>
        </div>
    </div>
</div>`;

let footer = document.querySelector('.footer');
footer.innerHTML = footers;

let moduls = document.querySelector('.modul')

let beli = document.querySelectorAll('.button-beli');
[...beli].forEach(function (e) {
  e.addEventListener('click', function () {
    window.location.href = "../../beli-product.html";
  })
})

let jumlahItem = 1;
let jumlahHarga = 50;
let jumlahItems = document.querySelector(".jumlah-items");
let harga = document.querySelector('.jumlah-tambah-kurang');
let totalHarga = document.querySelector('.total-harga');

harga.addEventListener('click', function (e) {
  if (e.target.classList.contains('tambah')) {
    if (jumlahItem > 18) {
      jumlahItems.innerHTML = `<p>${(jumlahItem =  0 )}</p>`;
    }
    jumlahItems.innerHTML = `<p>${jumlahItem += 1}</p>`;
    totalHarga.innerHTML = `<p>Rp. ${jumlahHarga * jumlahItem + ".000"}</p>`;


  } else if (e.target.classList.contains('kurang')) {
    if (jumlahItem < 1) {
      jumlahItems.innerHTML = `<p>${(jumlahItem = 20)}</p>`;
    }
    jumlahItems.innerHTML = `<p>${(jumlahItem -= 1)}</p>`;
    totalHarga.innerHTML = `<p>Rp. ${jumlahHarga * jumlahItem + ".000"}</p>`;
  }
})

let lanjutPembayaran = document.querySelector('.lanjut-metode-pembayaran');
lanjutPembayaran.addEventListener('click',function () {
  window.location.href = "../../metode-pembayaran.html";
});


// let itemLainnya = document.querySelector('.item-lainnya');
// let barangTerjuals = document.querySelector(".barang-terjual");
function lanjut(item) {
  let items = document.querySelector(item);
  for (let i = 0; i < 4; i++) {
    items.innerHTML += `<div class="col-md-3">
          <div class="card mb-3 " style="border-radius: 10px;">
            <img src="assets/images/diamond.jpg" class="card-img-top " alt="..." style="min-height: 100px; width: 90%; text-align: center; margin:15px auto 0; border-radius: 5px;" >
              <div class="card-body ">
                  <h6 class="card-title ">Akun Mobile Legend</h6>
                  <p>
                      <i class="fas fa-star bintang"></i>
                      <i class="fas fa-star bintang"></i>
                      <i class="fas fa-star bintang"></i>
                      <i class="fas fa-star"></i>
                      <i class="fas fa-star"></i>
                  </p>
              </div>
          </div>
        </div>`;
  }
}
lanjut(".item-lainnya");
