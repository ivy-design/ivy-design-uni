<script>
export default {
    onLaunch: function () {
        console.log('App Launch');
    },
    onShow: function () {
        console.log('App Show');
    },
    onHide: function () {
        console.log('App Hide');
    }
};
</script>

<style lang="scss">
/*每个页面公共css */
page {
    padding: 24rpx;
    & .title {
        font-size: 32rpx;
        margin: 24rpx 0;
        line-height: 2em;
    }
}
</style>
