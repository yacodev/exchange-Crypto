<template>
  <div>
    <px-assets-table :assets="assets" />
  </div>
</template>

<script>
import PxAssetsTable from "../components/PxAssetsTable.vue";
import api from "../api";

export default {
  name: "Home",
  components: { PxAssetsTable },
  data() {
    return {
      assets: [],
    };
  },
  created() {
    api.getAssets().then((assets) => (this.assets = assets));
    console.log(this.assets);
  },
};
</script>
