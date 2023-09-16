<template>
    <v-sheet width="800" class="custom-sheet">
        <v-form ref="personalForm" @submit.prevent>
            <v-row>
                <v-col cols="12" md="6">
                    <div class="form-field">
                        <v-text-field class="text-field" v-model="firstName" label="First name"
                            :rules="firstNameRules"></v-text-field>
                    </div>
                </v-col>
                <v-col cols="12" md="6">
                    <div class="form-field">
                        <v-text-field class="text-field" v-model="lastName" label="Last name"
                            :rules="lastNameRules"></v-text-field>
                    </div>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-text-field v-model="firstName" label="First Name(Kana)" :rules="firstNameRules"></v-text-field>
                </v-col>
                <v-col cols="12" md="6">
                    <v-text-field v-model="lastName" label="Last Name(Kana)" :rules="lastNameRules"></v-text-field>
                </v-col>
            </v-row>
            <v-row>
                <v-col cols="12" md="6">
                    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Gender"
                        required></v-select>
                </v-col>
                <v-col cols="12" md="6">
                    <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']" label="Nationality"
                        required></v-select>
                </v-col>
            </v-row>
        </v-form>
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

/* .form-field {
  display: flex;
  align-items: center;
  margin-bottom: 20px;
}

.alert-icon {
  margin-right: 10px;
} */

/* .text-field {
  width: 100%;
  border: 1px solid #ccc;
  border-radius: 4px;
  padding: 10px;
  font-size: 16px;
  background-color: #f5f5f5;
} */


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




  