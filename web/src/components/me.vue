<template>
    <div>
        <div class="perBox">
            <div class="imgbox">
                <img :src="imgsrc" alt="" class="author">
                
            </div>
            <div class="col">
                <ul>
                    <li><p class="title" v-text="userstage"></p></li>
                    <li>QQ:
                        <span v-text="QQ"></span>
                    </li>
                    <li>tel:
                        <span v-text="tel"></span>
                    </li>
                </ul>
            </div>
        </div>
        <div class="fabiao">
            <p><span v-text="userstage"></span>发表过的文章:</p>
            <ul>
                <li v-for="me in list" @click="GoTo(me.id,me.author)">{{me.title}}</li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            QQ: 0,
            tel: 0,
            userstage: '',
            name: "",
            imgsrc: "",
            list: []
        }
    },
    mounted() {
        this.userstage = localStorage.getItem("username");   //读取本地是否存有用户信息
        this.imgsrc = 'http://localhost:3000/' + localStorage.getItem("Headimg");
        this.QQ = localStorage.getItem("QQ");   //读取本地是否存有用户信息
        this.tel = localStorage.getItem("TEL");   //读取本地是否存有用户信息
        if (this.userstage == '' || this.userstage == null || this.userstage == undefined) {
            this.$router.push({ path: 'login' })
        } else {
            console.log(this.tel)
        }
        this.GetInfo()
    },
    methods: {
        GetInfo() {
            this.$ajax({
                method: 'get',
                url: 'http://172.26.151.33:3000/artical',
                params: {
                    author: this.userstage,
                    type:2
                }
            })
                .then((response) => {
                    let res = JSON.parse(response.request.response);
                    console.log(res.list);
                    if (res.list) {
                        this.list = res.list
                        console.log(this.list)
                    }
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
body{
     background: #F9FAFC;
}
.perBox {
    background: #ffffff;
    color: #ffffff;
    padding: 10px 20px;
    display: flex;
    flex-direction: row;
    align-items: center;
}

.perBox .imgbox {
    overflow: hidden;
    text-align: left;
    font-size: 12px;
    font-weight: bold;
    width: 80px;
}
.perBox .imgbox p{
    display: block;
    width: 65px;
    text-align: center;
    color: #000
}
.perBox .imgbox img {
    width: 65px;
    height: 65px;
    border-radius: 80px;
    overflow: hidden;
    background: #000;
    border: 2px solid #ffffff
}

.perBox .col {
    flex: 7;
    text-align: left;
    color: #888;
    font-weight:bold;
    font-size: 14px
}
.perBox .col .title{
     color: #333
}
.perBox .col span{
    font-weight:200;
}
.fabiao{
    margin-top: 20px;
    background:#ffffff
}
.fabiao p{
    padding:  15px 20px 5px 20px;
    font-weight: bold;
    font-size: 12px;
    color: #999
}
.fabiao li{
    padding: 10px 20px
}
</style>