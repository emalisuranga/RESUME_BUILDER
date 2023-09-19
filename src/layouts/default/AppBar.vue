<template>
  <header class="custom-header">
    <div class="logo">
      <span class="logo-text">Jack Pod</span>
    </div>

    <v-menu>
      <template v-slot:activator="{ props }" >
        <v-btn class="custom-menu" icon="mdi-translate" v-bind="props"></v-btn>
      </template>

      <v-list>
        <v-list-item v-for="(item, i) in items" :key="i" @click="selectItem(item)">
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
  </header>
</template>

<script>
export default {
  data: () => ({
    shipping: 0,
    dropdown: false,
    step: 1,
    items: [
      { title: 'English' },
      { title: 'Japanese' }
    ],
  }),
  methods: {
    selectItem(item) {
      console.log('Clicked:', item);
    },
  }
}
</script>

<style scoped>
.custom-header {
  background-color: #2dc46a;
  color: white;
  padding: 30px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  z-index: 100;
}

.logo img {
  width: 40px;
  height: auto;
  margin-right: 10px;
}

.logo-text {
  font-size: 24px;
  font-weight: bold;
}

.custom-menu {
  max-width: 200px;
  box-shadow: 0 5px 5px rgba(0, 0, 0, 0.2);
}

/* Media query for smaller screens (e.g., mobile devices) */
@media (max-width: 768px) {
  .logo-text {
    font-size: 18px;
    /* Adjust font size for smaller screens */
    padding-left: 0;
    /* Remove left padding on smaller screens */
  }
}
</style>