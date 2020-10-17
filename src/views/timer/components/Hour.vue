<template>
    <!--将旗下内容按360度等分后并逆时针旋转-->
    <ul :style="{transform:`rotate(${-360 / list.length * (rotates - 1)}deg)`}">
        <!--遍历语言库数据，当前时间采用高亮样式-->
        <li v-for="(item,index) in list" :key="index" 
            :class="{hover: index == rotates - 1}" 
            :style="{transform:`rotate(${360 / list.length * index}deg)  translateX(${range}px)`}">
            {{ item }}
        </li>
    </ul>
</template>
<script>
//使用props接受父组件传递的月度数据，其中包含hour、hourBox、hourRange
//其他周、日、天等组件，只是接收的数据不同，监听的数据不同，其他都相同（所有控制都在父组件中）
//注意watch用法，这里有坑
export default {
    name : 'hour',
    props : ["hour","hourBox","hourRange"],
    data() {
        return {
            rotates : "",
            list : [],
            range : 0
        }
    },
    //添加vue的监听器（watch），对数值变化进行监听，让数据动起来
    watch : {
        hour(val) {
            this.rotates = val;
        },
        hourBox(val){
            this.list = val;
        },
        hourRange: {
            handler(val){
                this.range = val;
            },
            immediate : true
        }
    }
}
</script>
<style scoped lang="scss">
</style>