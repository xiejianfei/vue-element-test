<template>
  <div>
    <p>时间选择器</p>
    <el-time-picker
      v-model="starttime"
      :picker-options="{selectableRange:'01:00:00 - 20:33:44'}"
      placeholder="开始时间"
    ></el-time-picker>
    <el-time-picker
      v-model="endtime"
      :picker-options="{selectableRange:'20:40:00 - 23:59:59'}"
      placeholder="结束时间"
    ></el-time-picker>
    <p>日期选择器</p>
    <el-date-picker v-model="date1" type="date" value-format="yyyy-MM-dd" placeholder="开始时间"></el-date-picker>
    <el-date-picker
      v-model="date2"
      type="date"
      placeholder="结束时间"
      value-format="yyyy-MM-dd"
      :picker-options="pickerOptions"
      align="right"
    ></el-date-picker>

    <span class="demonstration">默认</span>
    <el-date-picker
      v-model="date3"
      @change="date3change"
      type="daterange"
      range-separator="至"
      start-placeholder="开始日期"
      end-placeholder="结束日期"
    ></el-date-picker>
    <p>日期时间选择器</p>
     <div class="block">
    <span class="demonstration">设置默认时间</span>
    <el-date-picker
      v-model="date4"
      type="datetime"
      placeholder="选择日期时间"
      default-time="12:00:00">
    </el-date-picker>
  </div>
    <p>开关</p>
    <el-switch
  v-model="switchOn"
  active-color="#13ce66"
  inactive-color="#ff4949">
</el-switch>
  </div>
</template>
<script>
export default {
  data() {
    return {
      pickerOptions: {
        disabledDate(time) {
          return time.getTime() > Date.now();
        },
        shortcuts: [
          {
            text: "今天",
            onClick(picker) {
              picker.$emit("pick", new Date());
            }
          },
          {
            text: "昨天",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24);
              picker.$emit("pick", date);
            }
          },
          {
            text: "一周前",
            onClick(picker) {
              const date = new Date();
              date.setTime(date.getTime() - 3600 * 1000 * 24 * 7);
              picker.$emit("pick", date);
            }
          }
        ]
      },
      starttime: new Date(2019, 10, 29, 16, 12),
      endtime: new Date(2019, 10, 29, 21, 30),
      date1: new Date("2018-10-19"),
      date2: new Date("2019-10-19"),
      date3: "",
      date4:"",
      switchOn:true,
    };
  },
  created: function() {},
  methods: {
    date3change() {
      console.log(this.date3);
    }
  }
};
</script>