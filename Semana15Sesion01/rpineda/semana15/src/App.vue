<script setup>
import { RouterLink, RouterView } from 'vue-router'
import headerPage from '@/components/headerPage.vue'
import portafolio from '@/components/portafolio.vue'
import about from '@/components/about.vue'
import contact from '@/components/contact.vue'
import footerPage from '@/components/footer.vue'

</script>

<template>
  <headerPage/>
    <div class="content-wrapper">
      <portafolio/>
      <contact/>
      <footerPage/>
    </div>
    <RouterView/>
</template>

<style scoped>

/* HERE ENDS THE MAGIC */

.content-wrapper{
    background-color: white;
    top: 87%;
    min-height: 12%;
    position:absolute;
    z-index: 2;
    width: 100%;    
}
section {
    padding: 100px 0;    
    width: 100%;
}

section h2 {
    margin: 0;
    font-size: 3em;
}
hr.star-light,
hr.star-primary {
    margin: 25px auto 30px;
    padding: 0;
    max-width: 250px;
    border: 0;
    border-top: solid 5px;
    text-align: center;
}

hr.star-light:after,
hr.star-primary:after {
    content: "\f005";
    display: inline-block;
    position: relative;
    top: -.8em;
    padding: 0 .25em;
    font-family: FontAwesome;
    font-size: 2em;
}

hr.star-light {
    border-color: #fff;
}

hr.star-light:after {
    color: #fff;
    background-color: #18bc9c;
}

hr.star-primary {
    border-color: #2c3e50;
}

hr.star-primary:after {
    color: #2c3e50;
    background-color: #fff;
}

section.primary h2{    
    color: #2c3e50;
    }
    
section.success{
    background-color: #18bc9c;
    color: #fff;
    }
</style>
