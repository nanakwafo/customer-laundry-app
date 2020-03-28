<template>
<div class="dashboard grey lighten-5 ma-4">
    <h1 class="font-weight-thin grey-text ma-5"> Dashboard</h1>

    <v-container class="my-5">
        <v-layout row class="mb-3">
            <v-tooltip top>
                <template v-slot:activator="{ on }">
                    <v-btn small flat depressed="" color="grey lighten-5" @click="sortby('title')" v-on="on">
                    <v-icon left flat>folder</v-icon>
                    <span class="caption text-lowercase">by Projectname</span>
                </v-btn>
                </template>
                
                <span>order by project name</span>
            </v-tooltip>
            <v-btn small flat depressed="" color="grey lighten-5" @click="sortby('person')">
                <v-icon left flat>person</v-icon>
                <span class="caption text-lowercase">by Projectname</span>
            </v-btn>
        </v-layout>
        <v-card flat class="mydata" v-for="project in projects" :key="project.title">
            <v-layout row wrap :class="` pa-3 project ${project.status}`">
                <v-flex xs6 md6>
                    <div class="caption grey--text">Project Title</div>
                    <div>{{project.title}}</div>
                </v-flex>

                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Person</div>
                    <div>{{project.person}}</div>
                </v-flex>

                <v-flex xs6 sm4 md2>
                    <div class="caption grey--text">Due By</div>
                    <div>{{project.Dueby}}</div>
                </v-flex>

                <v-flex xs2 sm4 md2>
                    <div class="right">
                        <v-chip small :class="` ${project.status} white--text  caption my-3`">{{project.status}}</v-chip>
                    </div>
                </v-flex>

            </v-layout>
            <v-divider></v-divider>

        </v-card>
    </v-container>
</div>
</template>

<script>
export default {
    data() {
        return {
            projects: [{
                    title: 'Desoidod1',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'complete'
                },
                {
                    title: 'Aesoidod2',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'ongoing'
                },
                {
                    title: 'Desoidod3',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'overdue'
                },
                {
                    title: 'Desoidod4',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'overdue'
                },
                {
                    title: 'Desoidod5',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'ongoing'
                },
                {
                    title: 'Desoidod6',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'complete'
                },
                {
                    title: 'Desoidod7',
                    person: 'kndj',
                    Dueby: 'jdjd',
                    status: 'ongoing'
                },
            ]
        }

    },
    methods: {
        sortby(prop) {
            this.projects.sort((a, b) => a[prop] < b[prop] ? -1 : 1)
        }
    }

}
</script>

<style scoped>
.project.complete {
    border-left: 4px solid #3cd1c2 !important;
}

.project.ongoing {
    border-left: 4px solid orange !important;
}

.project.overdue {
    border-left: 4px solid tomato !important;
}

.v-chip.complete {
    background-color: #3cd1c2 !important;
}

.v-chip.ongoing {
    background-color: orange !important;
}

.v-chip.overdue {
    background-color: tomato !important;
}
</style>
