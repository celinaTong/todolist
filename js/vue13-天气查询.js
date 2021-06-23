var content = new Vue({
    el:'#content',
    data:{
        city:'',
        forecast:[]
    },
    methods:{
        // 查询天气
        search(){
            var that = this
            axios.get('http://wthrcdn.etouch.cn/weather_mini?city=' + this.city).then(
                function(res){
                    that.forecast = res.data.data.forecast
                    console.log(that.forecast)
                },function(err){
                    console.log(err)
                }
            ).catch(function(err){})
        },
        changeCity(city){
            this.city = city
            this.search()
        }
    }
})