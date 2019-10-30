<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <!-- <ContainerView></ContainerView> -->
    <radio-view></radio-view>
    <date-test></date-test>
  </div>
</template>
<script>
import ContainerView from '../components/elementview/ContainerTest'
import RadioView from '../components/elementview/RadioTest'
import DateTest from '../components/elementview/DateTest'
export default {
    data(){
        return {
            msg:"欢迎来到elementUI测试页面"
        }
    },
    components:{
        ContainerView,
        RadioView,
        DateTest,
    },
    created(){
        let _this=this;
        _this.msg="elementUI页面组件测试"

    }
}
</script>