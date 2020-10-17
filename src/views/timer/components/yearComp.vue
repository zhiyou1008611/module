<template>
    <ul>
        <li>{{yearLabel}}</li>
    </ul>
</template>
 
<script>
export default {
    name : "year",
    props : ["year"],
    data() {
        return {
            yearLabel : ""
        }
    },
    watch : {
        year(val){
            this.yearLabel = val;
        }
    }
}
</script>