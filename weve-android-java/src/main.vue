<template>
    <div>
        <div>{{message}}</div>
        111
        <div>
            <router-link to='/p1'>Go to P1</router-link>
            <router-link to='/p2'>Go to P2</router-link>
        </div>
        <router-view></router-view>
        
    </div>
</template>
<script>
    
    export default {
        data () {
            return {
                message: 'Hello weve'
            };
        }
    };
</script>

