<template>
    <div>
        <app-header/>
        <div class="container">
            <div>
                <span>Brand:</span> {{ brand | getBrand | to-uppercase }}
                <br />
                <span>Buyer:</span> {{ buyer | to-uppercase }}
            </div>

            <compUser />
            <compClient />
        </div>
        <app-footer/>
    </div>
</template>

<script>

    import compUser from './Components/User';
    import compClient from './Components/Client';

    export default {
        data() {
            return {
                brand: 2,
                buyer: 'Simon'
            }
        },
        components: {
            compUser,
            compClient
        },
        filters: {
            getBrand(value) {
                let brand = '';
                switch(value) {
                    case 1:
                        brand = 'Coke'
                    break;
                    case 2:
                        brand = 'Pepsi'
                    break;
                    case 3:
                        brand = 'Juice'
                    break;
                    default:
                        brand = 'No match'
                }
                return brand
            }
        }
    }
</script>

<style>


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