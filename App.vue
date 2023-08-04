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
    box-sizing: border-box;
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
