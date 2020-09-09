<template>
    <v-snackbar
        :timeout=timeout
        :top="y === 'top'"
        :bottom="y === 'bottom'"
        :right="x === 'right'"
        :left="x === 'left'"
        :multi-line="mode === 'multi-line'"
        :vertical="mode === 'vertical'"
        :color="color" 
        v-model="snackbar"
      >
        {{ text }}
        <v-btn dark text  @click="close()">Close</v-btn>
      </v-snackbar>
</template>

<script>
    export default {
         name: 'SnackBar',
         props:['snackbar','text','color'],
         data () {
            return {
                    y: 'top',
                    x: 'right',
                    mode: '',
                    timeout: 3000,
            }
        },
        methods: {
            close: function() {
                this.snackbar = false;
            }   
        }
         
    }
</script>