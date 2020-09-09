//line chart

<div style="width:550px" ref="lineChart"></div>

<script>
// import line graph from vue-chart.js

import { Line,mixins  } from 'vue-chartjs'
const { reactiveProp } = mixins

export default {
	  extends: Line,
	  mixins: [reactiveProp],
	  props: ['data','operation','options','chartData'],
	  mounted () {
		  this.renderChart(this.data, this.options)

	  },
	  watch: {
    	data: function() {
			this.manipulateData();
			if(this.operation == 'load'){ 
				 this.renderChart(this.data, this.options)
			}else{	
				this.$data._chart.update();	
			}     		
      	},
	  },
	  methods: {
        manipulateData(){	
			for(var i = 0; i < this.data.datasets.length; i++){	
				//is_cumulative
				if(this.data.datasets[i].is_cumulative == true){
					if(this.data.datasets[i].data.length == 0){
						this.data.datasets[i].prev_record.push(this.data.datasets[i].record);
						this.data.datasets[i].record = 0;
					}else{
						this.data.datasets[i].prev_record.push(this.data.datasets[i].record);
						this.data.datasets[i].record = this.data.datasets[i].prev_record[this.data.datasets[i].prev_record.length-1]-this.data.datasets[i].prev_record[this.data.datasets[i].prev_record.length-2];

					}
				console.log(this.data.datasets[i].prev_record);
				console.log(this.data.datasets[i].record );
				}	
				//is_negative_data
				if(this.data.datasets[i].is_negative_data == true){	
					this.data.datasets[i].data.push(-this.data.datasets[i].record);
				}else if(this.data.datasets[i].is_negative_data == false){
					this.data.datasets[i].data.push(this.data.datasets[i].record);
				}else{
					console.log("comes here");
					return true;
				}
			}
		}
	  }
}
</script>