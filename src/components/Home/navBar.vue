<template>
  <div>
    <div class="container-fluid flex-row">
      <nav class="navbar navbar-expand-xxl navbar-dark navbar-linear">
        <div class="container-fluid">
          <div class="collapse navbar-collapse" id="navbarTogglerDemo01">
            <a
              href="https://fontmeme.com/netflix-font/"
              style="margin-right: 20px"
            >
              <img
                src="https://fontmeme.com/permalink/210120/712ea9082fffc8db3ce43a79a7416286.png"
                alt="netflix-font"
              />
            </a>
             <navBarItem />
            <secondItem />
          </div>
        </div>
      </nav>
    </div>
  </div>
</template>


<script>
import secondItem from "@/components/Home/secondItem";
import navBarItem from "@/components/Home/navBarItem";


export default {
  components: {
    secondItem,
    navBarItem
  },
};
</script>
