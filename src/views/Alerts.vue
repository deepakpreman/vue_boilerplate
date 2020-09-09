<template>
    <div id="alerts">
        <line-chart :width="550" :height="100" :operation="operateCPU"  :data="lineData" :options="lineOptions"></line-chart>
  
    </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';

export default {
    name: 'Alerts',
    data(){
        return {
            lineData:[{}],
            operateCPU : 'update',
            lineOptions:[{}],
            timeXCPU : ['2015-03-25','2015-03-28'],
            in_bytes : [24,40],
            out_bytes : [22,30],
            in_byte_prev_record : [],
            out_byte_prev_record : [],
            count : 0,
            test_data : [20,30,50,70,100,100,100,100,120],
            // test_data : [0, 0, 0, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 1.67, 3.3300000000000005, 3.3300000000000005, 3.3300000000000005,],
        }
    },
    computed: {
        ...mapState(['pageName'])
    },
    methods: {
        ...mapMutations({
            setPageName: 'setPageName'
        }),
        plotLineChart(in_bytes,out_bytes){
            console.log(in_bytes,out_bytes);
            // if(isNaN(in_bytes) || isNaN(out_bytes)){
            //     return true;
            // }
            this.count = this.count + 1;
             this.lineData = {
                  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
                  datasets:  [
                {
                label: 'Data One',
                backgroundColor: '#f87979',
                data: [40, 39, 10, 40, 39, 80, 40]
                }
            ]
                };
   
   

        this.lineOptions = {
                      responsive: true,
                      lineTension: 1,
                      scales: {
                        yAxes: [{
                          ticks: {
                            beginAtZero: true,
                            padding: 25,
                          
                          }
                        }]
                        }
                    }; 
        
        
             }
       
        
    },
    components: {
        LineChart: () => import('../components/charts/LineChart'),
    },
    beforeMount() {
        this.setPageName('Alerts');
    },
    created() {
        this.plotLineChart();
    }
};
</script>
