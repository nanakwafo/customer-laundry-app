<template>
<v-row justify="center">
    <v-dialog v-model="dialog" scrollable fullscreen hide-overlay transition="dialog-bottom-transition" :retain-focus="false">
        <template v-slot:activator="{ on }">
            <v-btn v-on="on" @click="joinmessage()" depressed="" color="grey lighten-5" left class="font-weight-thin">
                <v-icon small left>message</v-icon>
                <span class="font-weight-thin">Message</span>
            </v-btn>

        </template>
        <v-card>
            <v-toolbar dark flat color="primary" max-height="50">

                <v-btn icon dark @click="dialog = false">
                    <v-icon>mdi-close</v-icon>
                </v-btn>
                <v-toolbar-title>Ondemand Messaging{{username}}{{users.length}}</v-toolbar-title>
            </v-toolbar>

            <v-card-text>
                <v-layout column wrap class="pa-5">

                    <v-card  class="ma-1 elevation-0" v-for="message in filteredMessages" v-bind:key="message._id">
                       <v-card-actions class="justify-end" v-if="message.msg.split('|')[1]=='customer'">
                            <v-chip class="float-right"> {{message.msg}}</v-chip>
                        </v-card-actions>
                      <v-card-actions class="justify-start" v-if="message.msg.split('|')[1]=='vendor'">
                            <v-chip class="float-right">  {{message.msg}}</v-chip>
                        </v-card-actions>
                          

                    </v-card>

                    <!-- <v-card class="ma-1 elevation-0">

                        <v-card-actions class="justify-end">
                            <v-chip class="float-right"> Yes am here</v-chip>
                        </v-card-actions>
                    </v-card> -->

                </v-layout>
            </v-card-text>

            <v-card-actions>
                <v-textarea class="mx-7" label="send a message" v-model="msg" rows="1"></v-textarea>
                <v-btn rounded @click="sendMessage()" color="primary" dark>send</v-btn>
            </v-card-actions>
        </v-card>
    </v-dialog>
</v-row>
</template>

<script>
import io from 'socket.io-client';
export default {
    data() {
        return {
            //messaging dialog
            dialog: false,
            notifications: false,
            sound: true,
            widgets: false,

            username: "",
            msgkind:"customer",
            socket: io("http://localhost:3000"),
            messages: [],
            users: [],
            room: "abc123",
            msg: ""

        }
    },
    computed: {
        filteredMessages: function () {
            return this.messages.filter((messages) => {
                return messages.vendorid == 1;

            })
        }
    },
    methods: {
       
        joinmessage: function () {
            this.username = prompt("what is your username", "Anonymous");
            if (!this.username) {
                this.username = "Anonymous";

            }
            this.joinServer();
        },
        joinServer: function () {
            this.socket.emit('room', 1);
            this.socket.on('loggedIn', data => {

                this.messages = data.messages;
                this.users = data.users;
                this.socket.emit('newuser', this.username);
               

            });

            this.listen();
        },
        listen: function () {
            this.socket.on('userOnline', user => {
                this.users.push(user);
            });
            this.socket.on('userLeft', user => {
                this.users.splice(this.users.indexOf(user), 1);
            });
            this.socket.on('msg', message => {
                this.messages.push(message);
                console.log(message);
            });

        },
        sendMessage: function () {

            this.socket.emit('msg', `${this.msg}|${this.msgkind}` );
             this.msg = "";
        }

    },
    // mounted: function () {

    // }
}
</script>

<style scoped>
</style>
