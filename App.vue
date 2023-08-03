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
    color: #333;
    padding: 24rpx;
    .demo {
        & > view,
        & > uni-view {
            margin: 24rpx 0;
        }
    }
    & .title {
        font-size: 28rpx;
        margin: 24rpx 0;
        line-height: 2em;
    }
    & .description {
        color: #666;
    }
}
.flex {
    display: flex;
}
.flex-row-space-between {
    justify-content: space-between;
}

/* margin */
.margin-top {
    margin-top: 24rpx;
}
.margin-left {
    margin-left: 24rpx;
}
</style>
