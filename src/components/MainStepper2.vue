<template>
    <div class="center-container">
        <v-stepper v-model="step" :items="items" hide-actions>
            <template v-slot:item.1>
                <v-sheet width="800" class="custom-sheet">
                    <v-form ref="personalForm" @submit.prevent>
                        <v-row>
                            <v-col cols="12" md="6">
                                <!-- <label for="firstName">First name*</label> -->
                                <v-text-field v-model="firstName" label="First name" :rules="firstNameRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="lastName" label="Last name" :rules="lastNameRules"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="firstName" label="First Name(Kana)"
                                    :rules="firstNameRules"></v-text-field>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-text-field v-model="lastName" label="Last Name(Kana)"
                                    :rules="lastNameRules"></v-text-field>
                            </v-col>
                        </v-row>
                        <v-row>
                            <v-col cols="12" md="6">
                                <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']"
                                    label="Gender" required></v-select>
                            </v-col>
                            <v-col cols="12" md="6">
                                <v-select v-model="select" :items="items" :rules="[v => !!v || 'Item is required']"
                                    label="Nationality" required></v-select>
                            </v-col>
                        </v-row>
                    </v-form>
                </v-sheet>
            </template>
            <v-stepper-content>
                <div class="button-container">
                    <v-btn text @click="curr = n" class="left-button">Back</v-btn>
                    <v-btn color="primary" @click="validateAndNext" class="right-button">Continue</v-btn>
                </div>
            </v-stepper-content>
        </v-stepper>

    </div>
</template>
  

<script>
export default {
    data: () => ({
        step: 1,
        firstName: '',
        items: [
            'Personal details',
            'Select Shipping',
            'Submit',
        ],
    }),
    computed: {
        isPersonalFormValid() {
            return true;
            // return this.$refs.personalForm.validate();
        },
    },
    methods: {
        validateAndNext() {
            if (this.isPersonalFormValid) {
                this.step += 1;
            }
        },
    },
};
</script>

<style>
.center-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: transparent;
    z-index: 100 !important;
}

.button-container {
    clear: both;
}

.left-button {
    float: left;
    margin: 10px 10px
}

.right-button {
    float: right;
    margin: 10px 10px
}
</style>
