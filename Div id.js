<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Arara</title>
<style>
    /* RESET */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', sans-serif;
}

/* BODY */
body {
    background: url('bb.jpg') no-repeat center/cover fixed;
    color: #ffffff; /* teks putih lebih jelas */
}

/* NAVBAR */
.navbar {
    position: fixed;
    top: 0;
    width: 100%;
    padding: 15px 0;
    background: rgba(0, 0, 0, 0.85);
    backdrop-filter: blur(10px);
    border-bottom: 2px solid #00eaff;
    box-shadow: 0 4px 20px rgba(0, 234, 255, 0.4);
    animation: glowBar 4s infinite alternate;
    z-index: 1000;
}

@keyframes glowBar {
    0% { box-shadow: 0 0 15px #00eaff; }
    100% { box-shadow: 0 0 35px #ff0040; }
}

.nav-container {
    max-width: 1200px;
    margin: auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 0 20px;
}

.zzi {
    font-size: 28px;
    font-weight: bold;
    color: #e0f7ff;
    text-shadow: 0 0 18px #00eaff;
}

/* MENU */
.nav-menu {
    display: flex;
    list-style: none;
}

.nav-menu li {
    margin-left: 30px;
}

.nav-menu a {
    font-size: 18px;
    color: #e8faff; /* teks navbar cerah */
    text-decoration: none;
    position: relative;
    transition: 0.3s;
}

.nav-menu a:hover {
    color: #ffffff;
    text-shadow: 0 0 12px #ff0040;
}

.nav-menu a::before {
    content: '';
    position: absolute;
    bottom: -5px;
    width: 0;
    height: 2px;
    background: linear-gradient(90deg, #00eaff, #ff0040);
    transition: width 0.3s;
}

.nav-menu a:hover::before {
    width: 100%;
}

/* HERO */
.hero {
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    padding: 0 20px;
}

.hero h2 {
    font-size: 50px;
    color: #ffffff;
    text-shadow: 0 0 15px #00eaff;
}

.hero p {
    margin-top: 15px;
    font-size: 20px;
    color: #e6ffff;
}

/* SECTION */
section {
    padding: 90px 20px;
}
  .f {
    font-size: 42px;
    color: #ff3399;
    text-align: center;
    margin-bottom: 25px;
    text-shadow: 0 0 18px #ff3399;
  }

  /* ABOUT BOX */
  .g {
    background: rgba(255, 20, 60, 0.1);
    border: 2px solid #ff3399;
    border-radius: 18px;
    padding: 28px 35px;
    box-shadow: 0 0 25px #ff3399aa;
    color: #ffe6f0;
    font-size: 18px;
    line-height: 1.7;
    max-width: 900px;
    margin: 0 auto;
    animation: fadeIn 1.3s ease forwards;
  }
  .g p {
    margin-bottom: 18px;
  }

/* CHARACTER SECTION */
.char-section {
    background: rgba(0,0,0,0.7);
    padding: 100px 20px;
}

.char-section h2 {
    text-align: center;
    font-size: 40px;
    color: #ffffff;
    text-shadow: 0 0 15px #00eaff;
    margin-bottom: 40px;
}

.char-grid {
    max-width: 1200px;
    margin: auto;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
}

.char-box {
    background: rgba(255,255,255,0.12);
    border-radius: 15px;
    padding: 15px;
    text-align: center;
    transition: 0.3s;
    border: 2px solid transparent;
    box-shadow: 0 0 10px #00eaff50;
}

.char-box:hover {
    transform: translateY(-8px);
    border-color: #00eaff;
    box-shadow: 0 0 20px #00eaff;
}

.char-box img {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 10px;
}

.char-box h3 {
    font-size: 22px;
    color: #00eaff; /* judul karakter cerah */
    margin-bottom: 8px;
}

.char-box p {
    font-size: 15px;
    color: #f1ffff; /* teks karakter lebih jelas */
}

/* BUTTON */
.Z-btn {
    display: inline-block;
    margin-top: 12px;
    padding: 10px 20px;
    background: #ff6b6b;
    color: white;
    border-radius: 8px;
    transition: 0.3s;
    font-weight: bold;
    text-decoration: none;
    box-shadow: 0 0 10px #ff6b6b;
}

.Z-btn:hover {
    background: #ff3b3b;
    transform: scale(1.05);
    box-shadow: 0 0 20px #ff3b3b;
}

/* VIDEO SECTION */
.zz {
    padding: 120px 20px;
    text-align: center;
    background: rgba(0,0,0,0.7);
}

.zz-content {
    margin: auto;
    margin-bottom: 40px;
    padding: 40px;
    border-radius: 15px;
    background: rgba(255,255,255,0.12);
    backdrop-filter: blur(15px);
    box-shadow: 0 0 20px rgba(0,0,0,0.5);
}

.zz-content h2 {
    font-size: 45px;
    color: #ffffff;
}

.zz-content p {
    font-size: 20px;
    color: #eaffff; /* teks cerah */
}

.zahra-grid {
    max-width: 1200px;
    margin: auto;
    display: grid;
    gap: 30px;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
}

.zahra-item {
    padding: 20px;
    background: rgba(255,255,255,0.12);
    border-radius: 15px;
    backdrop-filter: blur(20px);
    transition: 0.4s;
    text-align: center;
    color: #eaffff; /* teks video section lebih cerah */
}

.zahra-item:hover {
    transform: scale(1.05);
    border-color: #ff6b6b;
    box-shadow: 0 0 25px rgba(255,107,107,0.4);
}

.zahra-item video {
    width: 100%;
    border-radius: 10px;
    margin-bottom: 12px;
}
    footer {
            text-align: center;
            padding: 20px;
            background: #050505;
            color: #aaa;
            margin-top: 60px;
        }
</style>
</head>
<body>

<!-- NAVBAR -->
<nav class="navbar">
    <div class="nav-container">
        <h1 class="zzi">Anime Neon</h1>
        <ul class="nav-menu">
            <li><a href="index.html">Home</a></li>
            <li><a href="karakter.html">karakter</a></li>
            <li><a href="tentang.html">Tentang</a></li>
            <li><a href="rekomendasi.html">rekomendasi</a></li>
        </ul>
    </div>
</nav>

<!-- HERO -->
<section class="hero">
    <h2>Selamat Datang anime lovers</h2>
</section>


<section>
    <h2 class="f">Tentang Anime</h2>
    <div class="g">
        <p><b>website saya</b> Website ini dibuat sebagai ruang khusus bagi para pecinta anime untuk mengenal lebih dalam dunia animasi Jepang yang penuh warna, imajinasi, dan karakter ikonik. Dengan tampilan bernuansa neon futuristik, website ini menghadirkan pengalaman visual yang modern dan hidup</p>
        <p>Di dalamnya terdapat beberapa bagian utama seperti penjelasan tentang apa itu anime, rekomendasi anime terbaru, serta daftar karakter populer yang disajikan dengan desain box dan efek hover yang menarik.
        Setiap elemen dibuat agar pengunjung dapat menikmati informasi dengan nyaman dan merasakan atmosfer khas dunia anime.</p>
        <p>Website ini cocok untuk siapa saja yang ingin menemukan anime baru, mengenal karakter favorit, atau sekadar menikmati tampilan estetik ala neon-anime.</p>
    </div>
</section>

<!-- CHARACTER SECTION -->
<section class="char-section">
    <h2>Karakter Anime Populer</h2>
    <div class="char-grid">

        <div class="char-box">
            <img src="nruto.jpg" alt="Naruto">
            <h3>Naruto Uzumaki</h3>
            <p>Ninja penuh semangat yang bercita-cita menjadi Hokage.</p>
            <a class="Z-btn" href="https://www.crunchyroll.com/id/series/GYQ4MW246/naruto-shippuden?srsltid=AfmBOopsdTbvfT2er7BECZ6vBnBMwZsbb5x0P4JfBapyuJWdNjB_bjin" target="_blank">Tonton Sekarang</a>
        </div>

                <div class="char-box">
            <img src="anta.jpg" alt="Nezuko">
            <h3>Who made a princess</h3>
            <p>gadis yang berusaha mengubah takdir nya di masa Depan.</p>
            <a class="Z-btn" href="https://youtu.be/JV4Og5Dyhf0?si=MgEe7DPqL12IFogL" target="_blank">Tonton Sekarang</a>
        </div>

    </div> 
</section> 

<footer class="footer">© 2025 hak cipta - zahra ❤️</footer>

</body>
</html>
