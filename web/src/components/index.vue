<template>
    <el-row>
        <el-col :span="22" :offset="1">

            <div v-for="me in contentList" class="text item " @click="GoTo(me.id,me.author)">
                {{ me.title }}             
                <p style="float: right;color:#999;">{{me.time}}</p>
            </div>

        </el-col>
    </el-row>
</template>
<script>
export default {
    data() {
        return {
            sumList: 0,
            contentList: [],
            activeIndex2: '1'
        };
    },
    mounted() {
        this.GetList()
    },
    methods: {
        GetList() {
            this.$ajax({
                method: 'get',
                url: 'http://172.26.151.33:3000/artical',
                params: {
                    type: 1
                }
            })
                .then((response) => {
                    let res = JSON.parse(response.request.response);
                    console.log(res.list);

                    res.list.forEach((value, index) => {
                    this.contentList.push(value)
                    });
                   
                })
                .catch((error) => {
                    console.log(error);
                });
        },
        GoTo(id,author){
           this.$router.push({ path: 'detail',query:{id: id,author:author} })
        }
    }
}
</script>
<style>
.text {
    font-size: 14px;
}

.item {
    padding: 8px 0;
    text-align: left
}
</style>