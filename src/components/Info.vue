<template>
    <div class="form-section__content">
        <h3 class="text-h6">Personal details</h3>
        <div class="form-section__language-selector">
            <v-select class="custom-v-select" v-model="selectedLanguage" :items="languageOptions" label="Resume language"
                outlined></v-select>
        </div>
    </div>

    <br>


    <v-sheet width="800" class="mx-auto form-section">

        <div>
            <v-form fast-fail @submit.prevent>
                <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>

                <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field>

                <v-btn type="submit" block class="mt-2">Submit</v-btn>
            </v-form>
        </div>

    </v-sheet>
</template>
<script setup>
import Stepper from '@/components/Stepper.vue'
</script>
  
<script>

export default {
    data: () => ({
        firstName: '',
        firstNameRules: [
            value => {
                if (value?.length > 3) return true

                return 'First name must be at least 3 characters.'
            },
        ],
        lastName: '123',
        power: 7,
        lastNameRules: [
            value => {
                if (/[^0-9]/.test(value)) return true

                return 'Last name can not contain digits.'
            },
        ],
    }),
}
</script>
  
<style scoped>
.form-section {
    display: inline-block;
    width: 100%;
    margin: 0 0 30px 0;
    padding: 35px 40px;
    border-radius: 4px;
    background: #fff;
    z-index: 100;
    box-shadow: 0 15px 35px rgba(50, 50, 93, 0.1), 0 5px 15px rgba(0, 0, 0, 0.07);
}

.form-section__content {
    display: flex;
    /* Use flexbox layout */
    justify-content: space-between;
    /* Place content on left and right */
    align-items: center;
    /* Vertically center content */
}

.form-section__header {
    flex: 1;
    /* Take up available space on the left side */
}

.form-section__language-selector {
    flex: 1;
    text-align: right;
    padding: 4px 8px;
    padding-left: 400px;
    /* Adjust this value for larger screens */
}


/* .page__header {
    display: inline-block;
    margin: 0;
    padding: 30px 0;
    width: 100%;
    z-index: 100 !important;
}

.center {
    margin: 0 auto;
    position: relative;
    width: 100%;
    max-width: 850px;
    padding: 0 10px;
    z-index: 100;
} */

.page__header {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 20vh;
    position: relative;
    overflow: hidden;
    z-index: 100 !important;
    flex-direction: column;
    /* Stack elements vertically */
}

.page__header h1 {
    text-align: center;
    font-size: 40px;
    margin: 0;
    padding: 0;
    color: #fff;
}


/* .skewed-background {
    position: absolute;
    z-index: 99;
    top: -60px;
    left: 0;
    width: 100%;
    height: 380px;
    background: #2dc46a;
    -webkit-transform: skewY(-6deg);
    transform: skewY(-6deg);
} */
@media (max-width: 768px) {
    .form-section__language-selector {
        padding-left: 20px;
        /* Adjust this value for smaller screens */
    }
}
</style>




  