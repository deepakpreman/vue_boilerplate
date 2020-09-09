<template>
   <v-container
      id="dashboard"
      fluid
      tag="section"
      >
        <v-row>
         <v-col
            cols="12"
            sm="12"
            >
            <v-card
             
               >
               <v-card-title>
                  Line chart
               </v-card-title>
               <v-card-subtitle>
                  <!-- Subtitle -->
               </v-card-subtitle>
                <line-chart :width="550" :height="100" :operation="operateCPU"  :data="lineData" :options="lineOptions"></line-chart>
  
            </v-card>
         </v-col>
      </v-row>
       <v-row>
         <v-col
            cols="12"
            sm="6"
            >
             <!-- max-width="344" -->
            <v-card
              
               >
               <v-card-title>
                  Doughnut chart
               </v-card-title>
               <v-card-subtitle>
                  <!-- Subtitle -->
               </v-card-subtitle>
               <doughnut-chart :datacollection="datacollection" :options="dataoptions"></doughnut-chart>
            </v-card>
         </v-col>
          <v-col
            cols="12"
            sm="6"
            >
            <v-card
               >
               <v-card-title>
                  Bar chart
               </v-card-title>
               <v-card-subtitle>
                  <!-- Subtitle -->
               </v-card-subtitle>
               <bar-chart :datacollection="bardatacollection" :options="bardataoptions"></bar-chart>
            </v-card>
         </v-col>
      </v-row>     
   </v-container>
</template>

<script>
import { mapState, mapMutations } from 'vuex';


export default {
    name: 'Dashboard',
     data () {
      return {
        datacollection: {},
        dataoptions: {},
        bardatacollection: {},
        bardataoptions: {},
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
    beforeMount() {
        this.setPageName('Dashboard');
        this.plotDoughnutChartData();
        this.plotBarChartData();
      //   this.plotLineChart();
    },
    created() {
      let in_bytes = 10;
        let out_bytes = 10;
        this.plotLineChart(in_bytes,out_bytes) ; 
        setInterval(() => 
        this.plotLineChart(this.test_data[this.count],this.test_data[this.count])
        , 5000);
    },
    computed: {
        ...mapState(['pageName'])
    },
    methods: {
        ...mapMutations({
            setPageName: 'setPageName'
        }),
        plotDoughnutChartData(){
            this.datacollection = {
				labels: ['Data 1', 'Data 2', 'Data 3', ],
				datasets: [
					{
						backgroundColor: [ '#14C26C',	'#B0005C' , '#F78423',  ],
						data: [1, 2, 3,],
					},
				],
			},
			this.dataoptions = {
				responsive: true,
				legend: {
					display: true,
					position: 'bottom',
				},
  	        }
        },
        plotBarChartData(){
            this.bardatacollection = {
				labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
				datasets: [
					{
						label: 'Data One',
						backgroundColor: '#f87979',
						pointBackgroundColor: 'white',
						borderWidth: 1,
						pointBorderColor: '#249EBF',
						data: [40, 20, 30, 50, 90, 10, 20, 40, 50, 70, 90, 100]
					}
]
			};
			this.bardataoptions = {
				scales: {
					yAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: true
						}
					}],
					xAxes: [{
						ticks: {
							beginAtZero: true
						},
						gridLines: {
							display: false
						}
					}]
				},
				legend: {
					display: false
				},
				tooltips: {
					enabled: true,
					mode: 'single',
					callbacks: {
						// label: function(tooltipItems, data) {
						// 	return '$' + tooltipItems.yLabel;
						// }
					}
				},
				responsive: true,
				maintainAspectRatio: false,
				height: 200
}
        },
        plotLineChart(in_bytes,out_bytes){
            if(isNaN(in_bytes) || isNaN(out_bytes)){
                return true;
            }
            // var months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];
            // var days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
            var d = new Date();
            // var day = days[d.getDay()];
            var hr = d.getHours();
            var min = d.getMinutes();
            if (min < 10) {
                  min = "0" + min;
            }
            // var ampm = "am";
            if( hr > 12 ) {
                  hr -= 12;
                  // ampm = "pm";
            }
            // var date = d.getDate();
            // var month = months[d.getMonth()];
            // var year = d.getFullYear();
            let metric_time = hr + ":" + min + ":" + d.getSeconds();
            this.timeXCPU.push(metric_time);     
            this.lineData = {
                  labels: this.timeXCPU,
                  datasets: [       
                     { // another line graph
                        is_cumulative : true,
                        prev_record : this.in_byte_prev_record,
                        is_negative_data : false,
                        record: in_bytes,
                        label: 'In bytes',
                        data: this.in_bytes,
                        backgroundColor: [
                          'rgba(71, 183,132,0)', // Green
                        ],
                        borderColor: [
                          '#04c9d7',
                        ],
                          borderWidth: 3
                    },
                    { // another line graph
                      is_cumulative : false, 
                      prev_record : this.out_byte_prev_record,
                      is_negative_data : false,
                      record : out_bytes,
                      label: 'Out bytes',
                      data:this.out_bytes,
                      backgroundColor: [
                        'rgba(54,73,93,0)', // Green
                      ],
                      borderColor: [
                        '#36495d',
                      ],
                      borderWidth: 3
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
            this.count = this.count + 1;         
         },
       
        
   
    },
    components: {
       LineChart: () => import('../components/charts/LineChart'),
       DoughnutChart: () => import('../components/charts/DoughnutChart'),
       BarChart: () => import('../components/charts/BarChart'),
    }

};
</script>
