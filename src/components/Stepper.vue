<template>
    <v-stepper v-model="step">
      <v-stepper-item step="1">
        <template #step-title>
          Personal Details
        </template>
        <template #step-content>
          <div class="form-section__content">
            <div class="form-section__header">Personal details</div>
            <div class="form-section__language-selector">
              <v-select v-model="selectedLanguage" :items="languageOptions" label="Resume language" outlined></v-select>
            </div>
          </div>
        </template>
      </v-stepper-item>
  
      <v-stepper-item step="2">
        <template #step-title>
          Step 2
        </template>
        <template #step-content>
          <div>
            <v-form @submit.prevent>
              <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>
              <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field>
              <v-btn @click="submitForm" block class="mt-2">Submit</v-btn>
            </v-form>
          </div>
        </template>
      </v-stepper-item>
    </v-stepper>
  </template>
  
  <script>
  export default {
    data() {
      return {
        step: 1,
        selectedLanguage: null,
        languageOptions: [
          // Add your language options here
        ],
        firstName: '',
        lastName: '',
        firstNameRules: [
          v => !!v || 'First name is required',
        ],
        lastNameRules: [
          v => !!v || 'Last name is required',
        ],
      };
    },
    methods: {
      submitForm() {
        // Handle form submission logic here
      },
    },
  };
  </script>
  
  <style>
  /* Add your custom styles here */
  </style>
  