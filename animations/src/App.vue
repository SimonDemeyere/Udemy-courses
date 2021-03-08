<template>
    <div>
        <app-header/>
        <div class="container">

            <!-- <transition name="slideup">
                <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello 2</div>
            </transition>

            <transition name="appear">
                <div class="p-3 mb-2 bg-success text-white" v-if="display">Hello</div>
            </transition>
           
            <button class="btn btn-primary" @click="display = !display">Toggle anim</button> -->

            <!-- <hr>

            <button class="btn btn-primary" @click="status = !status">Toggle STATUS</button>

            <transition name="appear" mode="out-in">
                <div class="p-3 mb-2 bg-success text-white" v-if="!status" key="status_down">STATUS IS FALSE</div>
                <div class="p-3 mb-2 bg-success text-white" v-else key="status_up">STATUS IS TRUE</div>
            </transition> -->

            <!-- <button class="btn btn-primary" @click="custom = !custom">CUSTOM</button>

            <transition 
                name="awesome"
                enter-active-class="animated rotateInDownRight"
                leave-active-class="animated rollOut"
            >
                <div class="p-3 mb-2 bg-success text-white" v-if="custom">Hello</div>
            </transition> -->

            <!-- <transition 
                @before-enter="beforeEnter"
                @enter="enter"
                @after-enter="afterEnter"
                @enter-cancelled="enterCancelled"

                @before-leave="beforeLeave"
                @leave="leave"
                @after-leave="afterLeave"
                @leave-cancelled="leaveCancelled"
                :css="false"
            >
                <div class="p-3 mb-2 bg-success text-white" v-if="velocity">velocity</div>
            </transition>
           
            <button class="btn btn-primary" @click="velocity = !velocity">Toggle velocity</button> -->

            <!-- <input type="text" v-model="name">
            <button class="btn btn-primary" @click="addOne">Add one</button>

            <ul class="list-group">
                <transition-group name="appear">
                    <li 
                        class="list-group-item"
                        v-for="(item, index) in list"
                        :key="item"
                        @click="removeItem(index)"
                    >
                        {{ item }}
                    </li>
                </transition-group>
            </ul> -->

            <!-- <transition name="slideup" appear>
                <div class="p-3 mb-2 bg-success text-white" v-if="onload">Hello 2</div>
            </transition> -->

            <transition name="slideup" appear> 
                <compUser />  
            </transition>

        </div>
        <app-footer/>
    </div>
</template>

<script>

    import compUser from './Components/User';

    export default {
        data(){
            return {
                onload: true,
                list: ['Simon', 'Louise', 'Henri-Tom'],
                velocity: false,
                hook: false,
                display: false,
                status: false,
                custom: true,
                name: ''
            }
        },
        methods: {
            addOne() {
                if(!this.list.includes(this.name)) {
                    this.list.unshift(this.name)
                }
            },
            removeItem(i) {
                this.list.splice(i, 1);
            },
            // --------
            // ENTERING
            // --------
            beforeEnter: function (el) {
                el.style.opacity = 0;
            },

            enter: function (el, done) {
                Velocity(el, {
                    opacity: 1,
                    fontSize: '20px'
                }, {
                    duration: 2000,
                    complete: done
                })
            },
            afterEnter: function (el) {
                console.log('Element added');
            },
            enterCancelled: function (el) {
                console.log('Enter cancelled')
            },

            // --------
            // LEAVING
            // --------

            beforeLeave: function (el) {
                console.log('Before leave');
            },
            leave: function (el, done) {
                Velocity(el, {
                    rotateZ: '100deg'
                }, {
                    loop: 2,
                    complete: done
                })
            },
            afterLeave: function (el) {
                console.log('After leave');
            },
            leaveCancelled: function (el) {
                console.log('After cancelled');
            }
        },
        components: {
            compUser
        }
    }
</script>

<style>
    .awesome-enter {
        opacity: 0;
    }
    .awesomeEnter {
       transition: all 5s ease;
    }
    .awesomeLeave {
        transition: all 5s ease;
        opacity: 0;
    }


    .appear-enter {
        transform: translateX(30px);
        opacity: 0;
    }

    .appear-enter-active {
        transition: all 3s ease;
    }

    .appear-leave {

    }

    .appear-leave-active {
        transform: translateX(30px);
        opacity: 0;
        transition: all 3s ease;
        position: absolute;
    }

    .appear-move {
        transition: transform 1s;
    }

    .slideup-enter {
        opacity: 0;
    }

    .slideup-enter-active {
        transition: opacity 1s;
        animation:  slideUp 1s ease-out;
    }

    .slideup-leave {

    }

    .slideup-leave-active {
        opacity: 0;
        transition: opacity 1s;
        animation:  slideDown 1s ease-out;
    }


    @keyframes slideUp {
        from {
            transform: translateY(20px)
        }
        to {
            transform: translateY(0)
        }
    }
     @keyframes slideDown {
        from {
            transform: translateY(0)
        }
        to {
            transform: translateY(20px)
        }
    }


    body {
        padding:0;
        margin:0;
        font-family: 'Roboto', sans-serif;
    }

    .container {
        min-height: 84vh;
        box-sizing: border-box;
        padding: 20px;
    }



</style>