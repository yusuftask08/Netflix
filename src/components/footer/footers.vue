<template>
  <div class="container-footer">
    <section class="link">
      <div class="logo">
        <a href="https://www.facebook.com/netflixturkiye"
          ><i class="fab fa-facebook-square fa-2x logo"></i
        ></a>
        <a href="https://www.instagram.com/netflixturkiye/"
          ><i class="fab fa-instagram fa-2x logo"></i
        ></a>
        <a href="https://www.instagram.com/netflixturkiye/"
          ><i class="fab fa-twitter fa-2x logo"></i
        ></a>
        <a href="https://www.youtube.com/channel/UCeZOywU-zg9j3SxYG0FdLtw"
          ><i class="fab fa-youtube fa-2x logo"></i
        ></a>
      </div>
      <div class="sub-links">
        <ul>
          <li><a href="#">Seslendirme ve Alt yazı</a></li>
          <li><a href="#">Sesli Betimleme</a></li>
          <li><a href="#">Yardım Merkezi</a></li>
          <li><a href="#">Hediye Kartları</a></li>
          <li><a href="#">Medya Merkezi</a></li>
          <li><a href="#">Yatırımcı İlişkileri</a></li>
          <li><a href="#">İş İmkanları</a></li>
          <li><a href="#">Kullanım Koşulları</a></li>
          <li><a href="#">Gizlilik</a></li>
          <li><a href="#">Yasal Uyarılar</a></li>
          <li><a href="#">Kurumsal Bilgiler</a></li>
          <li><a href="#">Bize Ulaşın</a></li>
        </ul>
      </div>
    </section>

    <footer>
      <p>copy 1997-2021 Netflix, Inc.</p>
      <p>Yusuf Taskiran copy 2021</p>
    </footer>
  </div>
</template>
<style>
.container-footer {
  position: relative;
  margin-bottom: 0;
  clear: both;
  width: 100%;
}

.sub-links ul {
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(3, 1fr);
  text-align: center;
}
.logo {
  grid-gap: 20px;
  grid-template-columns: repeat(2, 1fr);
  margin-bottom: 20px;
  margin-left: 70px;
}
.link {
  padding: 50px;
}

.sub-links ul {
  color: grey;
  list-style: none;
  padding: 0;
  display: grid;
  grid-gap: 20px;
  grid-template-columns: repeat(4, 1fr);
}

.sub-links a {
  color: grey;
  text-decoration: none;
}
.logo a {
  color: grey;
}

.sub-links a:hover {
  color: grey;
  text-decoration: underline;
}

.logos a {
  padding: 10px;
}

footer {
  padding: 20px;
  text-align: center;
  color: grey;
  margin: 10px;
}
</style>