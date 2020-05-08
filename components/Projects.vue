<template>
    <div class="wrap">
        <div class="text">
            <h1 id="get-to">loose projects</h1>
            <h1 id="know-me">photographic film</h1>
        </div>
        <div class="list">
            <div class="item">
                <div class="img" id="img1"></div>
            </div>
            <button>&lt;/glossy-pop&gt;</button>
            <div class="item">
                <div class="img" id="img2"></div>
            </div>
            <button>&lt;/broken-mold&gt;</button>
            <div class="item">
                <div class="img" id="img3"></div>
            </div>
            <button>&lt;/duality&gt;</button>
            <div class="item">
                <div class="img" id="img4"></div>
            </div>
            <button>&lt;/rain-drops&gt;</button>
            <div class="item">
                <div class="img" id="img5"></div>
            </div>
            <button>&lt;/strawb-eye&gt;</button>
            <div class="item">
                <div class="img" id="img6"></div>
            </div>
            <button>&lt;/safe-place&gt;</button>
            <div class="item">
                <div class="img" id="img7"></div>
            </div>
            <button>&lt;/stardom&gt;</button>
            <div class="item">
                <div class="img" id="img8"></div>
            </div>
            <button>&lt;/thx4ur-time&gt;</button>
            <div class="item">
                <div class="img" id="img9"></div>
            </div>
            <button>&lt;/idchorns&gt;</button>
            <div class="item">
                <div class="img" id="img10"></div>
            </div>
            <button>&lt;/juni-ito-tomie&gt;</button>
        </div>
        <div id="bg"></div>
    </div>

</template>

<script>
    import * as THREE from "three";
    import NET from 'vanta/dist/vanta.net.min';

    export default {
        name: 'Projects',
        mounted() {
            this.vantaEffect = NET({
                el: ".wrap",
                THREE,
                mouseControls: true,
                touchControls: true,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 0.70,
                scaleMobile: 1.00,
                color: 0xffffff,
                backgroundColor: 0x0,
                maxDistance: 24.00,
                spacing: 16.00,
            });
        }
    }
</script>

<style scoped lang="scss">
    @media screen and (max-width: 1170px) {
        .list {
            width: 30%;
        }
    }
    h1 {
        margin: 0px;
        text-align: center;
        font-family: lores-9-wide-bold-alt-oaklan, sans-serif;
        font-weight: bold;
        font-size: 8vh;
        filter: brightness(0.75);
        text-shadow: 1px 1px 0 #ffffff, 1px -1px 0 #ffffff, -1px 1px 0 #ffffff, -1px -1px 0 #ffffff, 1px 0px 0 #ffffff, 0px 1px 0 #ffffff, -2px 0px 1px #ffffff, 0px -2px 1px #ffffff;
    }
    #get-to {
        height: 35%;
        color: #E0CC81;
        text-align: start;
        margin-left: 10%;
        margin-right: 10%;
        &:hover {
            text-align: end;
            color: #9879a7;
        }
    }
    #know-me {
        color: #77B8B5;
        text-align: end;
        margin-right: 10%;
        margin-left: 10%;

        &:hover {
            text-align: center;
            color: #d17ea4;
        }
    }

    .text {
        margin-bottom: 71px;
    }
    .wrap {
        width: 100vw;
        height: auto;
        overflow: hidden;
        position: relative;
        text-align: center;
        perspective-origin: 100% 50%;
        background-color: black;
        padding-bottom: 20vh;
        .list{
            width: 80%;
            height: 150vh;
            overflow-x: hidden;
            transform: scale(1.1) rotateX(20deg) rotateY(-2deg) rotateZ(20deg) translateX(180px);
            padding-top: 8%;
            &::-webkit-scrollbar {
                display: none;
            }
            &::-webkit-scrollbar {
                display: none;
            }
            &::-webkit-scrollbar {
                display: block;
            }
            .item{
                width: 30%;
                min-width:400px;
                height: 400px;
                margin: 20px;
                display: inline-block;
                position: relative;
                &::after {
                    content: '';
                    position: absolute;
                    z-index: 150;
                    width: 100%;
                    top: 0px;
                    left: -0px;
                    height: 100%;
                    background: url("https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/3960c8e1-d90e-4e60-8522-816b41b93892/d84vq6v-5985a860-c6c3-453c-a0ae-e80e5e5abf06.png?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7InBhdGgiOiJcL2ZcLzM5NjBjOGUxLWQ5MGUtNGU2MC04NTIyLTgxNmI0MWI5Mzg5MlwvZDg0dnE2di01OTg1YTg2MC1jNmMzLTQ1M2MtYTBhZS1lODBlNWU1YWJmMDYucG5nIn1dXSwiYXVkIjpbInVybjpzZXJ2aWNlOmZpbGUuZG93bmxvYWQiXX0.G2ljZtN3fPs4NhvF-fCGxl_97BA4w8kvt_qGyJH1RNI");
                    opacity: .1;
                }
                .img{
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                    box-shadow: 1px 1px 50px 0 #000;
                    transform-origin: 100% 50%;
                    z-index: 10;
                    position: relative;
                }
                #img1 {
                    background-image: url("../assets/lollypop.jpg");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img2 {
                    background-image: url("../assets/moths.png");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img3 {
                    background-image: url("../assets/flower-bang.png");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img4 {
                    background-image: url("../assets/rain2.png");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img5 {
                    background-image: url("../assets/strawberry.jpg");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img6 {
                    background-image: url("../assets/png/sea.png");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img7 {
                    background-image: url("../assets/png/orange-stars.jpg");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img8 {
                    background-image: url("../assets/png/shoes.png");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img9 {
                    background-image: url("../assets/horns.png");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
                #img10 {
                    background-image: url("../assets/tomie.png");
                    width: 100%;
                    height: 100%;
                    background-size: cover;
                    background-position: center center;
                }
            }
        }
    }
    button{
        border: 2px solid black;
        background-color: rgba(255, 255, 255, 0.75);
        width: 100px;
        padding: 10px;
        z-index:9999;
        top:-300px;
        position: relative;
        display: inline;
        margin-left: -80px;
        outline: none;
    }
#bg {height: 33px;}
 </style>