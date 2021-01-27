<template>
    <div>
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
              <li class="nav-item me-2">
                <router-link to="/" class="nav-link active"
                  >Ana Sayfa</router-link
                >
              </li>
              <li class="nav-item me-2">
                <router-link to="/Series" class="nav-link">Diziler</router-link>
              </li>
              <li class="nav-item me-2">
                <!-- <a class="nav-link" href="#">Filmler</a> -->
                <router-link to="/Movies" class="nav-link">Filmler</router-link>
              </li>
              <li class="nav-item me-2">
                <!-- <a class="nav-link" href="#">Yeni ve Popüler</a> -->
                <router-link to="/NewAndPopular" class="nav-link"
                  >Yeni ve Popüler</router-link
                >
              </li>
              <li class="nav-item me-2">
                <!-- <a class="nav-link" href="#">Listem</a> -->
                <router-link to="/MyList" class="nav-link">Listem</router-link>
              </li>
            </ul>
    </div>
</template>