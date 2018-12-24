<template>
    <a-carousel autoplay>
        <div v-for="(image, index) in images" :key="index">
            <img :src="image"/>
        </div>
    </a-carousel>

</template>

<script>
    export default {
        name: "WelcomeCarousel",
        data() {
            return {
                images: [
                    "https://gdggranada.com/images/background.jpg",
                    "https://gdggranada.com/images/background.jpg",
                    "https://gdggranada.com/images/background.jpg",
                    "https://gdggranada.com/images/background.jpg",
                    "https://gdggranada.com/images/background.jpg"
                ]
            }
        }
    }
</script>

<style scoped>
    .ant-carousel {
        width: 95%;
        margin: 0 auto;
    }

    .ant-carousel >>> .slick-slide {
        text-align: center;
        height: 300px;
        line-height: 160px;
        background: #364d79;
        overflow: hidden;
    }

    .ant-carousel >>> .slick-slide h3 {
        color: #fff;
    }
</style>