<template>
<div>
    <el-radio label='1' v-model="radio">选项1</el-radio>
    <el-radio label='2' v-model="radio">选项2</el-radio>
    <el-radio label='3' disabled v-model="radio">选不了</el-radio>
</div>
</template>
<script>
export default {
    data(){
        return{
            radio:'2',
        }
    }
}
</script>