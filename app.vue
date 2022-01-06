<template>
  <div v-designer.true DESIGNER_ROOT_APP_NODE="DESIGNER_ROOT_APP_NODEdw">
    <NuxtLink to="/about" >
      About (internal link that belongs to the Nuxt App)
    </NuxtLink>
    <div style="border: 2px solid red">aaaaa 1</div>
    <NuxtPage/>
    <div style="border: 2px solid red">bbbbb 2</div>
  </div>
</template>

<script>
export default {
  props: {
    // Simple props
    booleanDefaultTrue: {
      type: Boolean,
      default: true,
    },
    booleanDefaultFalse: {
      type: Boolean,
      default: false,
    }
  },
  mounted() {
    //console.log('nuxt.app.$route', this.$route, this.$router)
  }
}
</script>