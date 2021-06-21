<template>
    <div>
        <div>{{message}}</div>
        <van-button type='primary' @click='onalert'>alert</van-button>
        <van-button type='primary' @click='onconfirm'>confirm</van-button>
    </div>
</template>
<script>
    import weve from '../../weve';
    
    export default {
        data () {
            return {
                message: 'Hello weve Page1'
            };
        },
        methods: {
            onalert () {
                weve.alert(this.message);
            },
            onconfirm () {
                weve.confirm(this.message).then(() => {
                    weve.alert('You choose OK!');
                });
            }
        }
    };
</script>

