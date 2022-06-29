<template>
    <div>
        filter
        <select @change="filterTask($event)" >
            <option value="5">5   </option>
            <option value="10">10  </option>
            <option value="30">30  </option>
            <option value="50">50  </option>
            <option value="200">All  </option>
        </select>
    </div>
</template>

<script>
import { mapActions } from 'vuex';
export default {
    name: 'filter-task',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        ...mapActions(["filterTask"]),
        
    },
};
</script>

<style lang="scss" scoped>

</style>