<template>
<v-flex>
    <div class="text-center" v-if="totalPages()>0 ">
        <v-btn v-if="showPreviousLink()" v-on:click="updatePage(currentPage-1)" color="primary" fab small dark>
            <v-icon>keyboard_arrow_left</v-icon>
        </v-btn>
        <v-chip class="ma-2" color="amber" text-color="white">
            <v-avatar left class="amber ">
                {{currentPage + 1 }}
            </v-avatar>
            of
            <v-avatar right class="amber">
                {{totalPages()}}
            </v-avatar>
        </v-chip>
     

        <v-btn v-if="showNextLink()" v-on:click="updatePage(currentPage+1)" color="primary" fab small dark>
            <v-icon>keyboard_arrow_right</v-icon>
        </v-btn>

    </div>
</v-flex>
</template>

<script>
export default {
    name: 'pagination',
    props: ['vendors', 'currentPage', 'pageSize'],
    methods: {
        updatePage(pageNumber) {
            this.$emit('page:update', pageNumber);
        },
        totalPages() {
            return Math.ceil(this.vendors.length / this.pageSize);
        },
        showPreviousLink() {
            return this.currentPage == 0 ? false : true;
        },
        showNextLink() {
            return this.currentPage == (this.totalPages() - 1) ? false : true
        }
    }
}
</script>
