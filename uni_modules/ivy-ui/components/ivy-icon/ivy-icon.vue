<template>
    <text :class="['icon', `icon-${name}`]" :style="styles"></text>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            required: true
        },
        size: String,
        color: String
    },
    computed: {
        styles() {
            const sheet = {};
            if (this.color) {
                sheet['color'] = this.color;
            }
            if (this.size) {
                sheet['fontSize'] = this.size;
            }
            return sheet;
        }
    }
};
</script>

<style lang="scss">
@font-face {
    font-family: 'iconfont';
    src: url('../../static/fonts/iconfont.ttf?9bnhrz') format('truetype');
    font-weight: normal;
    font-style: normal;
    font-display: block;
}
// @font-face {
//     font-family: 'icomoon';
//     src: url('fonts/icomoon.eot?9bnhrz');
//     src: url('fonts/icomoon.eot?9bnhrz#iefix') format('embedded-opentype'), url('fonts/icomoon.ttf?9bnhrz') format('truetype'), url('fonts/icomoon.woff?9bnhrz') format('woff'),
//         url('fonts/icomoon.svg?9bnhrz#icomoon') format('svg');
//     font-weight: normal;
//     font-style: normal;
//     font-display: block;
// }

[class^='icon-'],
[class*=' icon-'] {
    /* use !important to prevent issues with browser extensions that change fonts */
    font-family: 'iconfont' !important;
    speak: never;
    font-style: normal;
    font-weight: normal;
    font-variant: normal;
    text-transform: none;
    line-height: 1;

    /* Better Font Rendering =========== */
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
}

.icon-shopping-trolley:before {
    content: '\e900';
}
.icon-smoking:before {
    content: '\e901';
}
.icon-soccer:before {
    content: '\e902';
}
.icon-sold-out:before {
    content: '\e903';
}
.icon-sort:before {
    content: '\e904';
}
.icon-sort-down:before {
    content: '\e905';
}
.icon-sort-up:before {
    content: '\e906';
}
.icon-stamp:before {
    content: '\e907';
}
.icon-star:before {
    content: '\e908';
}
.icon-star-filled:before {
    content: '\e909';
}
.icon-stopwatch:before {
    content: '\e90a';
}
.icon-success-filled:before {
    content: '\e90b';
}
.icon-sugar:before {
    content: '\e90c';
}
.icon-suitcase:before {
    content: '\e90d';
}
.icon-suitcase-line:before {
    content: '\e90e';
}
.icon-sunny:before {
    content: '\e90f';
}
.icon-sunrise:before {
    content: '\e910';
}
.icon-sunset:before {
    content: '\e911';
}
.icon-switch:before {
    content: '\e912';
}
.icon-switch-button:before {
    content: '\e913';
}
.icon-switch-filled:before {
    content: '\e914';
}
.icon-takeaway-box:before {
    content: '\e915';
}
.icon-ticket:before {
    content: '\e916';
}
.icon-tickets:before {
    content: '\e917';
}
.icon-timer:before {
    content: '\e918';
}
.icon-toilet-paper:before {
    content: '\e919';
}
.icon-tools:before {
    content: '\e91a';
}
.icon-top:before {
    content: '\e91b';
}
.icon-top-left:before {
    content: '\e91c';
}
.icon-top-right:before {
    content: '\e91d';
}
.icon-trend-charts:before {
    content: '\e91e';
}
.icon-trophy:before {
    content: '\e91f';
}
.icon-trophy-base:before {
    content: '\e920';
}
.icon-turn-off:before {
    content: '\e921';
}
.icon-umbrella:before {
    content: '\e922';
}
.icon-unlock:before {
    content: '\e923';
}
.icon-upload:before {
    content: '\e924';
}
.icon-upload-filled:before {
    content: '\e925';
}
.icon-user:before {
    content: '\e926';
}
.icon-user-filled:before {
    content: '\e927';
}
.icon-van:before {
    content: '\e928';
}
.icon-video-camera:before {
    content: '\e929';
}
.icon-video-camera-filled:before {
    content: '\e92a';
}
.icon-video-pause:before {
    content: '\e92b';
}
.icon-video-play:before {
    content: '\e92c';
}
.icon-view:before {
    content: '\e92d';
}
.icon-wallet:before {
    content: '\e92e';
}
.icon-wallet-filled:before {
    content: '\e92f';
}
.icon-warning:before {
    content: '\e930';
}
.icon-warning-filled:before {
    content: '\e931';
}
.icon-warn-triangle-filled:before {
    content: '\e932';
}
.icon-watch:before {
    content: '\e933';
}
.icon-watermelon:before {
    content: '\e934';
}
.icon-wind-power:before {
    content: '\e935';
}
.icon-zoom-in:before {
    content: '\e936';
}
.icon-zoom-out:before {
    content: '\e937';
}
.icon-ice-cream:before {
    content: '\e938';
}
.icon-ice-drink:before {
    content: '\e939';
}
.icon-ice-tea:before {
    content: '\e93a';
}
.icon-info-filled:before {
    content: '\e93b';
}
.icon-iphone:before {
    content: '\e93c';
}
.icon-key:before {
    content: '\e93d';
}
.icon-knife-fork:before {
    content: '\e93e';
}
.icon-lightning:before {
    content: '\e93f';
}
.icon-link:before {
    content: '\e940';
}
.icon-list:before {
    content: '\e941';
}
.icon-loading:before {
    content: '\e942';
}
.icon-location:before {
    content: '\e943';
}
.icon-location-filled:before {
    content: '\e944';
}
.icon-location-information:before {
    content: '\e945';
}
.icon-lock:before {
    content: '\e946';
}
.icon-lollipop:before {
    content: '\e947';
}
.icon-magic-stick:before {
    content: '\e948';
}
.icon-magnet:before {
    content: '\e949';
}
.icon-male:before {
    content: '\e94a';
}
.icon-management:before {
    content: '\e94b';
}
.icon-map-location:before {
    content: '\e94c';
}
.icon-medal:before {
    content: '\e94d';
}
.icon-memo:before {
    content: '\e94e';
}
.icon-menu:before {
    content: '\e94f';
}
.icon-message:before {
    content: '\e950';
}
.icon-message-box:before {
    content: '\e951';
}
.icon-mic:before {
    content: '\e952';
}
.icon-microphone:before {
    content: '\e953';
}
.icon-milk-tea:before {
    content: '\e954';
}
.icon-minus:before {
    content: '\e955';
}
.icon-money:before {
    content: '\e956';
}
.icon-monitor:before {
    content: '\e957';
}
.icon-moon:before {
    content: '\e958';
}
.icon-moon-night:before {
    content: '\e959';
}
.icon-more:before {
    content: '\e95a';
}
.icon-more-filled:before {
    content: '\e95b';
}
.icon-mostly-cloudy:before {
    content: '\e95c';
}
.icon-mouse:before {
    content: '\e95d';
}
.icon-mug:before {
    content: '\e95e';
}
.icon-mute:before {
    content: '\e95f';
}
.icon-mute-notification:before {
    content: '\e960';
}
.icon-no-smoking:before {
    content: '\e961';
}
.icon-notebook:before {
    content: '\e962';
}
.icon-notification:before {
    content: '\e963';
}
.icon-odometer:before {
    content: '\e964';
}
.icon-office-building:before {
    content: '\e965';
}
.icon-open:before {
    content: '\e966';
}
.icon-operation:before {
    content: '\e967';
}
.icon-opportunity:before {
    content: '\e968';
}
.icon-orange:before {
    content: '\e969';
}
.icon-paperclip:before {
    content: '\e96a';
}
.icon-partly-cloudy:before {
    content: '\e96b';
}
.icon-pear:before {
    content: '\e96c';
}
.icon-phone:before {
    content: '\e96d';
}
.icon-phone-filled:before {
    content: '\e96e';
}
.icon-picture:before {
    content: '\e96f';
}
.icon-picture-filled:before {
    content: '\e970';
}
.icon-picture-rounded:before {
    content: '\e971';
}
.icon-pie-chart:before {
    content: '\e972';
}
.icon-place:before {
    content: '\e973';
}
.icon-platform:before {
    content: '\e974';
}
.icon-plus:before {
    content: '\e975';
}
.icon-pointer:before {
    content: '\e976';
}
.icon-position:before {
    content: '\e977';
}
.icon-postcard:before {
    content: '\e978';
}
.icon-pouring:before {
    content: '\e979';
}
.icon-present:before {
    content: '\e97a';
}
.icon-price-tag:before {
    content: '\e97b';
}
.icon-printer:before {
    content: '\e97c';
}
.icon-promotion:before {
    content: '\e97d';
}
.icon-quartz-watch:before {
    content: '\e97e';
}
.icon-question-filled:before {
    content: '\e97f';
}
.icon-rank:before {
    content: '\e980';
}
.icon-reading:before {
    content: '\e981';
}
.icon-reading-lamp:before {
    content: '\e982';
}
.icon-refresh:before {
    content: '\e983';
}
.icon-refresh-left:before {
    content: '\e984';
}
.icon-refresh-right:before {
    content: '\e985';
}
.icon-refrigerator:before {
    content: '\e986';
}
.icon-remove:before {
    content: '\e987';
}
.icon-remove-filled:before {
    content: '\e988';
}
.icon-right:before {
    content: '\e989';
}
.icon-scale-to-original:before {
    content: '\e98a';
}
.icon-school:before {
    content: '\e98b';
}
.icon-scissor:before {
    content: '\e98c';
}
.icon-search:before {
    content: '\e98d';
}
.icon-select:before {
    content: '\e98e';
}
.icon-sell:before {
    content: '\e98f';
}
.icon-semi-select:before {
    content: '\e990';
}
.icon-service:before {
    content: '\e991';
}
.icon-setting:before {
    content: '\e992';
}
.icon-set-up:before {
    content: '\e993';
}
.icon-share:before {
    content: '\e994';
}
.icon-ship:before {
    content: '\e995';
}
.icon-shop:before {
    content: '\e996';
}
.icon-shopping-bag:before {
    content: '\e997';
}
.icon-shopping-cart:before {
    content: '\e998';
}
.icon-shopping-cart-full:before {
    content: '\e999';
}
.icon-circle-check:before {
    content: '\e99a';
}
.icon-circle-close:before {
    content: '\e99b';
}
.icon-circle-close-filled:before {
    content: '\e99c';
}
.icon-circle-plus:before {
    content: '\e99d';
}
.icon-circle-plus-filled:before {
    content: '\e99e';
}
.icon-clock:before {
    content: '\e99f';
}
.icon-close:before {
    content: '\e9a0';
}
.icon-close-bold:before {
    content: '\e9a1';
}
.icon-cloudy:before {
    content: '\e9a2';
}
.icon-coffee:before {
    content: '\e9a3';
}
.icon-coffee-cup:before {
    content: '\e9a4';
}
.icon-coin:before {
    content: '\e9a5';
}
.icon-cold-drink:before {
    content: '\e9a6';
}
.icon-collection:before {
    content: '\e9a7';
}
.icon-collection-tag:before {
    content: '\e9a8';
}
.icon-comment:before {
    content: '\e9a9';
}
.icon-compass:before {
    content: '\e9aa';
}
.icon-connection:before {
    content: '\e9ab';
}
.icon-coordinate:before {
    content: '\e9ac';
}
.icon-copy-document:before {
    content: '\e9ad';
}
.icon-cpu:before {
    content: '\e9ae';
}
.icon-credit-card:before {
    content: '\e9af';
}
.icon-crop:before {
    content: '\e9b0';
}
.icon-d-arrow-left:before {
    content: '\e9b1';
}
.icon-d-arrow-right:before {
    content: '\e9b2';
}
.icon-data-analysis:before {
    content: '\e9b3';
}
.icon-data-board:before {
    content: '\e9b4';
}
.icon-data-line:before {
    content: '\e9b5';
}
.icon-d-caret:before {
    content: '\e9b6';
}
.icon-delete:before {
    content: '\e9b7';
}
.icon-delete-filled:before {
    content: '\e9b8';
}
.icon-delete-location:before {
    content: '\e9b9';
}
.icon-dessert:before {
    content: '\e9ba';
}
.icon-discount:before {
    content: '\e9bb';
}
.icon-dish:before {
    content: '\e9bc';
}
.icon-dish-dot:before {
    content: '\e9bd';
}
.icon-document:before {
    content: '\e9be';
}
.icon-document-add:before {
    content: '\e9bf';
}
.icon-document-checked:before {
    content: '\e9c0';
}
.icon-document-copy:before {
    content: '\e9c1';
}
.icon-document-delete:before {
    content: '\e9c2';
}
.icon-document-remove:before {
    content: '\e9c3';
}
.icon-download:before {
    content: '\e9c4';
}
.icon-drizzling:before {
    content: '\e9c5';
}
.icon-edit:before {
    content: '\e9c6';
}
.icon-edit-pen:before {
    content: '\e9c7';
}
.icon-eleme:before {
    content: '\e9c8';
}
.icon-eleme-filled:before {
    content: '\e9c9';
}
.icon-element-plus:before {
    content: '\e9ca';
}
.icon-expand:before {
    content: '\e9cb';
}
.icon-failed:before {
    content: '\e9cc';
}
.icon-female:before {
    content: '\e9cd';
}
.icon-files:before {
    content: '\e9ce';
}
.icon-film:before {
    content: '\e9cf';
}
.icon-filter:before {
    content: '\e9d0';
}
.icon-finished:before {
    content: '\e9d1';
}
.icon-first-aid-kit:before {
    content: '\e9d2';
}
.icon-flag:before {
    content: '\e9d3';
}
.icon-fold:before {
    content: '\e9d4';
}
.icon-folder:before {
    content: '\e9d5';
}
.icon-folder-add:before {
    content: '\e9d6';
}
.icon-folder-checked:before {
    content: '\e9d7';
}
.icon-folder-delete:before {
    content: '\e9d8';
}
.icon-folder-opened:before {
    content: '\e9d9';
}
.icon-folder-remove:before {
    content: '\e9da';
}
.icon-food:before {
    content: '\e9db';
}
.icon-football:before {
    content: '\e9dc';
}
.icon-fork-spoon:before {
    content: '\e9dd';
}
.icon-fries:before {
    content: '\e9de';
}
.icon-full-screen:before {
    content: '\e9df';
}
.icon-goblet:before {
    content: '\e9e0';
}
.icon-goblet-full:before {
    content: '\e9e1';
}
.icon-goblet-square:before {
    content: '\e9e2';
}
.icon-goblet-square-full:before {
    content: '\e9e3';
}
.icon-gold-medal:before {
    content: '\e9e4';
}
.icon-goods:before {
    content: '\e9e5';
}
.icon-goods-filled:before {
    content: '\e9e6';
}
.icon-grape:before {
    content: '\e9e7';
}
.icon-grid:before {
    content: '\e9e8';
}
.icon-guide:before {
    content: '\e9e9';
}
.icon-handbag:before {
    content: '\e9ea';
}
.icon-headset:before {
    content: '\e9eb';
}
.icon-help:before {
    content: '\e9ec';
}
.icon-help-filled:before {
    content: '\e9ed';
}
.icon-hide:before {
    content: '\e9ee';
}
.icon-histogram:before {
    content: '\e9ef';
}
.icon-home-filled:before {
    content: '\e9f0';
}
.icon-hot-water:before {
    content: '\e9f1';
}
.icon-house:before {
    content: '\e9f2';
}
.icon-ice-cream-round:before {
    content: '\e9f3';
}
.icon-ice-cream-square:before {
    content: '\e9f4';
}
.icon-add-location:before {
    content: '\e9f5';
}
.icon-aim:before {
    content: '\e9f6';
}
.icon-alarm-clock:before {
    content: '\e9f7';
}
.icon-apple:before {
    content: '\e9f8';
}
.icon-arrow-down:before {
    content: '\e9f9';
}
.icon-arrow-down-bold:before {
    content: '\e9fa';
}
.icon-arrow-left:before {
    content: '\e9fb';
}
.icon-arrow-left-bold:before {
    content: '\e9fc';
}
.icon-arrow-right:before {
    content: '\e9fd';
}
.icon-arrow-right-bold:before {
    content: '\e9fe';
}
.icon-arrow-up:before {
    content: '\e9ff';
}
.icon-arrow-up-bold:before {
    content: '\ea00';
}
.icon-avatar:before {
    content: '\ea01';
}
.icon-back:before {
    content: '\ea02';
}
.icon-baseball:before {
    content: '\ea03';
}
.icon-basketball:before {
    content: '\ea04';
}
.icon-bell:before {
    content: '\ea05';
}
.icon-bell-filled:before {
    content: '\ea06';
}
.icon-bicycle:before {
    content: '\ea07';
}
.icon-bottom:before {
    content: '\ea08';
}
.icon-bottom-left:before {
    content: '\ea09';
}
.icon-bottom-right:before {
    content: '\ea0a';
}
.icon-bowl:before {
    content: '\ea0b';
}
.icon-box:before {
    content: '\ea0c';
}
.icon-briefcase:before {
    content: '\ea0d';
}
.icon-brush:before {
    content: '\ea0e';
}
.icon-brush-filled:before {
    content: '\ea0f';
}
.icon-burger:before {
    content: '\ea10';
}
.icon-calendar:before {
    content: '\ea11';
}
.icon-camera:before {
    content: '\ea12';
}
.icon-camera-filled:before {
    content: '\ea13';
}
.icon-caret-bottom:before {
    content: '\ea14';
}
.icon-caret-left:before {
    content: '\ea15';
}
.icon-caret-right:before {
    content: '\ea16';
}
.icon-caret-top:before {
    content: '\ea17';
}
.icon-cellphone:before {
    content: '\ea18';
}
.icon-chat-dot-round:before {
    content: '\ea19';
}
.icon-chat-dot-square:before {
    content: '\ea1a';
}
.icon-chat-line-round:before {
    content: '\ea1b';
}
.icon-chat-line-square:before {
    content: '\ea1c';
}
.icon-chat-round:before {
    content: '\ea1d';
}
.icon-chat-square:before {
    content: '\ea1e';
}
.icon-check:before {
    content: '\ea1f';
}
.icon-checked:before {
    content: '\ea20';
}
.icon-cherry:before {
    content: '\ea21';
}
.icon-chicken:before {
    content: '\ea22';
}
.icon-chrome-filled:before {
    content: '\ea23';
}
.icon-circle-check-filled:before {
    content: '\ea24';
}
</style>
