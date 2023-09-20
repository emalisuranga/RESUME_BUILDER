<!-- ExampleComponent.vue -->

<template>
  <div>
    <h1>{{ $t('hello') }}</h1>
    <p>{{ $t('welcome') }}</p>
    <v-btn @click="changeLocale('en')">English</v-btn>
    <v-btn @click="changeLocale('fr')">French</v-btn>
  </div>
</template>
  
<script>
export default {
  methods: {
    changeLocale(locale) {
      this.$i18n.locale = locale; // Change the current locale
    }
  }
}
</script>
  