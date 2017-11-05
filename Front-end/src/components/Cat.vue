<template>
  <div class="cat-card">
    <img src="./../assets/cat1.jpg" class="cat-cover"/>
    <p class="cat-name">流畅的Python</p>
    <p class="cat-author">Luciano</p>
    <s class="cat-price">99元</s>
    <span class="cat-price">59元</span>
  </div>
</template>

<script>
export default {
  name: 'CatList'
}
</script>

<style>
.cat-card {
  width: 200px;
  height: 310px;
  overflow: hidden;
  background-color: white;
  display: inline-block;
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 50px;
  transition: all 0.3s cubic-bezier(.25,.8,.25,1);
  text-align: center;
}

.cat-card:hover {
  box-shadow: 0 14px 28px rgba(0,0,0,0.12),
   0 10px 10px rgba(0,0,0,0.09);
}

.cat-cover {
  margin-top: 20px;
  width: 190px;
}

.cat-name {
  margin-top: 8px;
  margin-bottom: 0px;
}

.cat-author {
  margin-top: 4px;
  margin-bottom: 0px;
  font-size: 14px;
  color: rgb(127,127,127);
}

s.cat-price {
  font-weight: lighter;
}

.cat-price {
  margin-left: 10px;
  margin-right: 10px;
  margin-top: 6px;
  margin-bottom: 0px;
  font-size: 14px;
  font-weight: bolder;
  color: #41b883;
}

</style>
