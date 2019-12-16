<template>
    <div>
        <layout>
            <coverHeader title="消息详情"></coverHeader>
            <div class="shadeBox">
                <div class="s_box">
                    <div class="top">
                        <div class="top_center">
                            <image class="iconimg" src="https://aimusic-data.oss-cn-hangzhou.aliyuncs.com/test/otherFiles/15743216260132.png"></image>
                            <text class="c_txt">某某老师</text>
                        </div>
                    </div>
                    <div class="content">
                        <scroller class="scrollers">
                            <div class="artice">
                                <text class="a_txt">欲将沉醉换悲凉，清歌莫断肠。这混乱的尘世，究竟充斥了多少绝望和悲伤。你想去做一个勇敢的男子，为爱，为信仰，轰轰烈烈的奋斗一场。你周身充斥着无人可比的灵气和光芒。你有着与伟人比肩的才气和名声，你是那样高傲孤洁的男子。你的一寸狂心未说，已经几度黄昏雨。
                                    　　曾经以为，相爱的人一定要相守，只有相守，情感才能长久。可是，此岸和彼岸只不过是空间的差距，却无法拉长心灵的距离。
                                    　　时光荏苒，岁月无声。日子不紧不慢的如涓涓溪水静静的流去，而从身边流去的只有时光，沉淀下来的是与你一路相伴的幸福和快乐，温馨和安暖。于我，在这个凋零都感受到诗意横溢的秋，只想做一件事，拈一片绯红的枫叶，轻轻地刻上我的心语。对信仰，是我今生永不改变的主题！而后，幸福的寄往有你的那个城市。从此，在我心里，于我的生命里，轻握你许的安暖，静静地在岁月的彼岸，为你守候一世永恒！
                                    　　一段情，反复的掂量，最后加深了岁月的绵长。一路追赶里，一路追忆里，最后得到的是什么，最后又失去的是什么。或许，只有我们在静思的时候才会明白，这路的追忆里，我们得到的快乐往往比痛苦要少。当相思成殇的时候，除了对月徒悲叹之外，什么也不曾抓到。
                                    　　一直执着于生命的简约格调，只愿用一颗淡然的心看云卷云舒，看季节更迭。许多不合时节的事物，必然会被光阴遗落，就像曾经繁茂的秋叶，待生命枯竭，终将脱离叶脉的相系相牵。而我，一直在这里，抖落一身的负累，永恒以树的姿态站立于季风中，昂首向着那无边温暖的碧蓝晴空。
                                    晚霞破月的天际，依旧映红了归家的路途，流浪了好久的笔调写满了疲倦的素笺，伴着枯萎的憔悴，与年华斑驳的碎影相逢，溅起涟漪在心田的几缕游丝浅叹，让年华牵住执笔的手，静听潺潺流水；波动在逐流的心海，唤名为；婆娑年华，勾勒了谁的斑驳唯有情醉琉璃一宿，又是一个不眠的夜。
                                    　　真正的相爱，是人在千里，却梦魂相依；真正的相爱，是岁月流转，却不离不弃；真正的相爱，是彼此付出，却无怨无悔。
                                    　　樱花有单樱和双樱，她们绽放时满树灿烂，清香扑鼻，单樱白的如雪如云，双樱色彩如火似霞。但是无论是单樱还是双樱，她们盛开的时间都不长，二十多天的光景，开的绚丽多彩、满树烂漫，落得星星瓣瓣，匆匆忙忙。
                                </text>
                                </div>
                        </scroller>
                        <wbutton text="查看详情"></wbutton>
                    </div>
                </div>
            </div>
        </layout>
    </div>
</template>

<script>
import layout from './components/layout'
import coverHeader from './components/coverHeader'
export default {
  name: 'messageDetail',
  components: {
    layout, coverHeader
  }
}
</script>

<style lang="less" scoped>
    @import "../../less/public";
    .txt{
        font-size: 11wx;
    }
    .shadeBox{
        border-radius: 46wx;
        margin-top: 15wx;
        padding-bottom: 6wx;
    }
    .s_box{
        border-radius: 46wx;
        height:252wx;
        padding: 10wx 25wx;
    }
    .top{
        border-bottom-style: solid;
        border-bottom-width:1wx ;
        border-bottom-color: #DDDDDD;
        flex-direction: row;
        padding: 9wx 0;
    }
    .iconimg{
        width: 22wx;
        height: 22wx;
        border-radius: 30wx;
    }
    .top_center{
        align-items: center;
        flex-direction: row;
        justify-content: center;
        flex: 1;
    }
    .c_txt{
        font-size: 13wx;
        font-weight: 500;
        margin-left: 5wx;
    }
    .content{
        flex: 1;
        align-items: center;
    }
    .scrollers{
        width:369wx;
        height: 130wx;
        background-color: #F1F1F5;
        margin-top: 15wx;
        margin:10wx 0;
    }
    .artice{
        padding: 20wx;
    }
    .a_txt{
        font-size: 13wx;
    }
</style>
