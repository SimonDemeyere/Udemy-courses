<template>
    <footer>
        <div class="container">
            <div>
                <img :src="logoIcon" alt="">
                <div class="contact">
                    <div>Call us</div>
                    <div>+32 (0) 479 67 03 18</div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
import Logo from '../../assets/images/logo.png';

export default {
    data() {
        return {
            logoIcon: Logo
        }
    }
}
</script>