<!DOCTYPE html>
<html lang="id">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<title>yaya</title>

<style>
  /* RESET */
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  }
  body {
    background: linear-gradient(135deg, #0a0a15, #000018);
    color: #e0e0e0;
    min-height: 100vh;
  }

  /* NAVBAR */
  .a {
    position: fixed;
    top: 0;
    width: 100%;
    background: rgba(0, 0, 0, 0.8);
    backdrop-filter: blur(12px);
    border-bottom: 2px solid #ff0066;
    box-shadow: 0 3px 15px #ff0066aa;
    z-index: 1000;
    padding: 15px 0;
    animation: glowBar 5s ease-in-out infinite alternate;
  }
  @keyframes glowBar {
    0% { box-shadow: 0 0 15px #ff0066; }
    100% { box-shadow: 0 0 40px #00eaff; }
  }
  .b {
    max-width: 1200px;
    margin: auto;
    padding: 0 20px;
    display:flex;
    justify-content: space-between;
    align-items: center;
  }
  .c {
    font-size: 30px;
    font-weight: bold;
    color: #00eaff;
    text-shadow: 0 0 20px #00eaff;
  }
  .d {
    list-style: none;
    display: flex;
  }
  .d li {
    margin-left: 30px;
  }
  .d a {
    color: #e0e0e0;
    font-weight: 600;
    font-size: 18px;
    text-decoration: none;
    position: relative;
    padding: 4px 0;
    transition: color 0.3s ease;
  }
  .d a:hover {
    color: #ff0066;
    text-shadow: 0 0 15px #ff0066;
  }
  .d a::before {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0%;
    height: 2px;
    background: linear-gradient(90deg, #ff0066, #00eaff);
    transition: width 0.3s ease;
  }
  .d a:hover::before {
    width: 100%;
  }

  /* HERO */
  .e {
    height: 80vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    max-width: 900px;
    margin: 120px auto 60px;
    padding: 0 20px;
  }
  .e h1 {
    font-size: 56px;
    color: #00eaff;
    text-shadow: 0 0 30px #00eaff;
    margin-bottom: 20px;
    animation: fadeInDown 1.5s;
  }
  .e p {
    font-size: 22px;
    color: #ff66bb;
    font-weight: 500;
    text-shadow: 0 0 15px #ff66bb88;
    animation: fadeInUp 1.7s;
  }
  @keyframes fadeInDown {
    0% { opacity: 0; transform: translateY(-30px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes fadeInUp {
    0% { opacity: 0; transform: translateY(30px); }
    100% { opacity: 1; transform: translateY(0); }
  }

  /* SECTIONS */
  section {
    max-width: 1100px;
    margin: 60px auto;
    padding: 0 20px;
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

  /* REKOMENDASI GRID */
  .h {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
  }
  .i {
    background: rgba(5,0,10,0.35);
    border: 2px solid #00eaffaa;
    border-radius: 18px;
    overflow: hidden;
    box-shadow: 0 0 25px #00eaffbb;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    cursor: pointer;
  }
  .i:hover {
    transform: translateY(-10px) scale(1.05);
    border-color: #ff33aa;
    box-shadow: 0 0 35px #ff33aa;
  }
  .i img {
    width: 100%;
    display: block;
    border-bottom: 3px solid #00eaff;
  }
  .j {
    padding: 18px 20px;
    color: #d0f0ff;
  }
  .j h3 {
    color: #ff33aa;
    font-size: 22px;
    margin-bottom: 8px;
    text-shadow: 0 0 14px #ff33aa;
  }
  .j p {
    font-size: 15px;
    color: #c0e8ff;
    line-height: 1.5;
  }
  .k {
    margin-top: 14px;
    display: inline-block;
    background: #00eaff;
    color: #111;
    padding: 10px 18px;
    font-weight: bold;
    text-decoration: none;
    border-radius: 15px;
    box-shadow: 0 0 20px #00eaff;
    transition: 0.3s ease;
  }
  .k:hover {
    background: #00bbdd;
  }

  footer {
    margin-top: 60px;
    padding: 20px;
    text-align: center;
    color: #aaa;
    background: #0b0b18;
    box-shadow: inset 0 3px 10px #ff0066bb;
  }

  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(30px); }
    to { opacity: 1; transform: translateY(0); }
  }
</style>
</head>
<body>

<!-- NAVBAR -->
<nav class="a">
  <div class="b">
    <div class="c">Anime Neon</div>
    <ul class="d">
      <li><a href="index.html">Home</a></li>
      <li><a href="tentang.html">Tentang</a></li>
      <li><a href="karakter.html">Karakter</a></li>
      <li><a href="rekomendasi.html">Rekomendasi</a></li>
    </ul>
  </div>
</nav>

<!-- HERO -->
<section class="e">
  <h1>Selamat Datang di Dunia Anime!</h1>
  <p>Temukan karakter dan rekomendasi anime terbaru dengan tampilan neon keren.</p>
</section>

<!-- ABOUT -->
<section>
  <h2 class="f">Tentang Anime</h2>
  <div class="g">
    <p><strong>Anime</strong> adalah seni animasi asal Jepang yang terkenal dengan gaya visual unik, cerita yang memukau, dan karakter yang berkesan.</p>
    <p>Genre anime sangat beragam, mulai dari aksi, fantasi, drama, hingga romansa dan komedi.</p>
    <p>Anime memberikan pengalaman emosional yang mendalam dan visual yang menarik para penggemarnya di seluruh dunia.</p>
    <p>Selain itu, anime juga berkembang dengan soundtrack khas dan budaya otaku yang kuat.</p>
  </div>
</section>

<!-- REKOMENDASI -->
<section>
  <h2 class="f">Rekomendasi Anime Terbaik</h2>
  <div class="h">

    <!-- Naruto -->
    <div class="i">
      <img src="nruto.jpg" alt="Naruto" />
      <div class="j">
        <h3>Naruto Uzumaki</h3>
        <p>Naruto Uzumaki adalah ninja penuh semangat yang bercita-cita menjadi Hokage.</p>
        <a href="https://www.crunchyroll.com/id/series/GYQ4MW246/naruto-shippuden" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- Horimiya -->
    <div class="i">
      <img src="hori.jpg" alt="Horimiya" />
      <div class="j">
        <h3>Horimiya</h3>
        <p>Kisah manis dua remaja yang menyembunyikan sisi diri mereka masing-masing.</p>
        <a href="https://www.crunchyroll.com/id/series/G9VHN9P43/horimiya" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- WMMP -->
    <div class="i">
      <img src="anta.jpg" alt="Who Made Me a Princess" />
      <div class="j">
        <h3>Who Made Me a Princess</h3>
        <p>Athy berusaha mengubah takdir tragisnya dengan memenangkan hati ayahnya, Kaisar Claude.</p>
        <a href="https://youtu.be/JV4Og5Dyhf0" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- MHA -->
    <div class="i">
      <img src="sw.webp" alt="My Hero Academia" />
      <div class="j">
        <h3>My Hero Academia</h3>
        <p>Kisah pahlawan muda yang belajar di akademi untuk menjadi pahlawan hebat.</p>
        <a href="https://www.crunchyroll.com/id/series/GVDHX8QNW/my-hero-academia" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- Demon Slayer -->
    <div class="i">
      <img src="demonslyr.jpg" alt="Demon Slayer" />
      <div class="j">
        <h3>Demon Slayer</h3>
        <p>Tanjiro menjadi pemburu iblis untuk menyembuhkan adiknya, Nezuko.</p>
        <a href="https://www.crunchyroll.com/id/series/GY8VEQ95G/demon-slayer-kimetsu-no-yaiba" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- Belle -->
    <div class="i">
      <img src="belle.jpg" alt="Belle" />
      <div class="j">
        <h3>Belle</h3>
        <p>Suzu yang pemalu menjadi penyanyi terkenal di dunia virtual dan bertemu Beast.</p>
        <a href="https://www.netflix.com/id/title/81492822" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- Spy x Family -->
    <div class="i">
      <img src="anya.png" alt="Spy x Family" />
      <div class="j">
        <h3>Spy x Family</h3>
        <p>Mata-mata membentuk keluarga palsu tanpa tahu istrinya pembunuh dan anaknya bisa membaca pikiran.</p>
        <a href="https://www.iq.com/album/spy%C3%97family-2022-yngqr3tli9?lang=en_us" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- Kpop Demon Hunters -->
    <div class="i">
      <img src="kpops.jpeg" alt="Kpop Demon Hunters" />
      <div class="j">
        <h3>Kpop Demon Hunters</h3>
        <p>Idol K-Pop yang diam-diam menjadi pemburu iblis untuk melindungi dunia dari kekuatan jahat.</p>
        <a href="https://tv6.lk21official.cc/kpop-demon-hunters-2025" class="k">Tonton Sekarang</a>
      </div>
    </div>

    <!-- Roku de Nashi -->
    <div class="i">
      <img src="ruaa.jpg" alt="Roku de Nashi" />
      <div class="j">
        <h3>Roku de Nashi Majutsu Kōshi to Akashic Records</h3>
        <p>Kisah Glenn Radars, guru malas yang ternyata mantan penyihir elit dengan masa lalu kelam.</p>
        <a href="https://www.crunchyroll.com/series/GYDQ8WZ16/akashic-records-of-bastard-magic-instructor" class="k">Tonton Sekarang</a>
      </div>
    </div>

  </div>
</section>

<footer>
  © 2025 hak cipta - Zahra ❤️
</footer>

</body>
</html>
