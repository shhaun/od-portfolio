<template>
    <div class="body">
        <div class="quote">
            <div class="center">
                <h3><span style="font-weight: bold; color:rgba(225,179,94,0.79)">An aspiring multimedia designer.</span><br><br>I study at Business Academy South West in Denmark. I aim to maintain fresh vision, gain functional business knowledge and get acquainted with key areas of research. I am skilled in web development, photo manipulation, audiovisual production. I like to see ideas become reality, thus organization and management play a big role for me. In teamwork I value clarity, openness and vigorousness.</h3>
            </div>
        </div>
    </div>
</template>

<script>

</script>

<style scoped lang="scss">
    .body {
        height: 50vh;
        width: auto;
        margin: auto;
        background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(128,128,128,1) 100%);
        .quote {
            height: 40vh;
            width: 90%;
            margin-left: 5%;
            display: flex;
            text-align: center;
            justify-content: center;
            align-items: center;
            .center {
                h3 {
                    font-weight: 300;
                    font-size: 3.6vh;
                    color: white;
                    animation: glow 1s ease-in-out infinite alternate;
                }

                    @-webkit-keyframes glow {
                    from {
                        text-shadow: 0 0 6px #ffffff, 0 0 10px rgba(255, 255, 255, 0.71), 0 0 15px rgba(255, 255, 255, 0.5);
                    }
                    to {
                        text-shadow: 0 0 11px #ffffff, 0 0 16px rgba(255, 255, 255, 0.71), 0 0 19px rgba(255, 255, 255, 0.5);
                    }
                }
            }
        }
    }
</style>