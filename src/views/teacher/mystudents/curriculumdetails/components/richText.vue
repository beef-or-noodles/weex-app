<template>
      <div class="rowcontainer" :style="{width:richwidth+'px'}">
          <div v-for="(item,index) in data" :key="index">
              <text class="textstyle1" :class="[item.fontweight?'fontweight':'']" :style="{color:item.color}">{{item.content}}</text>
          </div>
      </div>
</template>
<script>
export default {
  data () {
    return {
      data: []
    }
  },
  props: {
    datas: {
      type: Array,
      default: []
    },
    fontsize: {
      type: Number,
      default: 24
    },
    richwidth: {
      type: Number,
      default: 630
    }
  },

  mounted () {
    // 这个地方对数据做重新封装之后再添加到data里面去
    let data = this.datas
    // 对data做判空处理，不为空时这里为true
    if (data.length) {
      const fontsize = this.fontsize
      for (let item of data) {
        item.size = fontsize
      }
      // 这个数组是我们对传入数组处理之后得到的新的数据源
      let tempContent = []
      // 定义当前行可用的展示空间，第一行的时候，默认就是设置的行宽
      let endLenght = this.richwidth
      // 对传入的数据源做for循环操作得到每一个具体的元素
      for (let i = 0; i < data.length; i++) {
        // 获取到当前索引下的content
        let tempStr = data[i].content
        // 这里跟Java有细微区别，通过split转换成字符数组
        let char = tempStr.split('')
        // strLength表示当前字符串的内容长度，默认是0
        let strLength = 0
        // ratio 表示当前字符的宽度占比
        let ratio = 0
        /**
           * 需要说明两点点，一：这里的ratio并不是一个准确的值，这个是根据50px下 750px宽度内 中文 英文大小写 数字最大个数 计算出来的一个比率
           * 经测试，发现这样计算出来的比率 在font-size为40px的情况下展示效果是最好的，所以我的效果图，也是按照size为40给出的。
           * 二：这里由于无法判断符号是中文还是英文的，所以在此未对符号做兼容，如果你有什么好的方法，不妨在下方评论留言，谢谢
           * */
        for (let j = 0; j < char.length; j++) {
          // 常规操作
          if (char[j] >= 0 && char[j] <= 9) {
            // 数字0~9
            ratio = 0.56
          } else if (char[j] >= 'a' && char[j] <= 'z') {
            // 小写字母a~z
            ratio = 0.51
          } else if (char[j] >= 'A' && char[j] <= 'Z') {
            // 大些字母A~Z
            ratio = 0.64
          } else {
            // 中文和符号暂不做区分，宽度系数就为1，
            ratio = 1
          }
          // 总长度做求和操作
          strLength += data[i].size * ratio
        }
        // 对比当前字符串长度是否小于当前可展示空间
        if (strLength >= 0 && strLength <= endLenght) {
          // 改变结束位置的长度，用来动态对比下一个元素是否需要直接存储
          endLenght = endLenght - strLength
          // 长度小于当前可用空间长度，直接存储到数组中
          tempContent.push(data[i])
        } else {
          // 截取当前字符串长度，按照当前可用空间做截取
          let arr = this.subStr2Length(data[i], endLenght)
          // 当前行可用空间能展示的当前字符串的最大索引值
          let index = arr[0]
          // 当前可用空间展示的字符串的真实长度
          let lenght = arr[1]
          /**
               * 计算剩余长度的字符串还可以占几行
               *  需要注意一点，Vue里面的“/”除操作跟Java有区别，这里得到的值是浮点数，也就是小数，举例，12/10=1.2，跟Java有区别
               * */
          let rows = (strLength - lenght) / this.richwidth
          // 将刚刚计算出的需要添加的元素添加到数组中
          let item1 = {
            // 截取真实长度填充到当前行末尾的可用空间中
            content: data[i].content.substring(0, index),
            size: data[i].size,
            color: data[i].color
          }
          tempContent.push(item1)
          // 判断剩下的内容是否新起一行可以展示完
          if (rows <= 1) {
            // 如果可以展示完，直接添加
            let item2 = {
              /**
                   * 需要说明一点，这里的subString跟Java中有细微区别，Vue中subString不会出现索引越界的问题，超出的话，截取至末尾
                   */
              content: data[i].content.substring(index, data[i].content.length),
              size: data[i].size,
              color: data[i].color
            }

            tempContent.push(item2)
            // 添加完成，需要修改我们的可用空间的值，以便于下一次进行对比
            endLenght = this.richwidth - (strLength - lenght)
          } else {
            // 如果剩余长度，大于等于2行时
            // 定义一个值，记录最后一行所占的长度
            let lenght = 0
            // 循环操作剩余的长度
            for (let j = 0; j < rows; j++) {
              // 获取数据源中剩余的可用于展示的内容
              data[i].content = data[i].content.substring(index, data[i].content.length)
              // 计算当前长度下能展示到的索引，和真实展示的长度
              let arr = this.subStr2Length(data[i], this.richwidth)
              // 获取当前行最后一个元素的index,这里取值是长度刚刚超过一行时的索引，因为subString这个方法包含左不包含右，
              index = arr[0]
              // 获取真实展示的长度
              lenght = arr[1]
              let item2 = {
                content: data[i].content.substring(0, index),
                size: data[i].size,
                color: data[i].color
              }
              tempContent.push(item2)
            }
            // 记录最后一行的可用空间
            endLenght = this.richwidth - lenght
          }
        }
      }
      this.data = this.data.concat(tempContent)
    }
  },
  methods: {
    // 按照长度（px）裁剪当前字符串，返回一个数组，0索引位置返回的是当前换行时的index，1索引位置记录的是截取的元素的真实长度。
    subStr2Length (data, lenght) {
      if (data.content) {
        let char = data.content.split('')
        if (lenght && lenght != 0) {
          let tempLenght = 0
          for (let j = 0; j < char.length; j++) {
            let ratio = 0
            if (char[j] >= 0 && char[j] <= 9) {
              ratio = 0.56
            } else if (char[j] >= 'a' && char[j] <= 'z') {
              ratio = 0.51
            } else if (char[j] >= 'A' && char[j] <= 'Z') {
              ratio = 0.64
            } else {
              // 中文和符号暂不做区分，宽度系数就为1，
              ratio = 1
            }
            tempLenght += data.size * ratio
            if (tempLenght > lenght) {
              let arr = [j, tempLenght - data.size * ratio]
              return arr
            }
          }
          // 当截取传入的长度超出了剩余长度的时候，返回最后的真实长度和索引
          return [char.length, tempLenght]
        } else {
          return [0, 0]
        }
      }
    }
  }
}
</script>

<style scoped lang="less">
.rowcontainer{
    flex-wrap: wrap; flex-direction: row;margin-bottom:10px;
}
.fontweight{
    font-weight:500;
}
.textstyle1{
    font-size:24px;
    line-height:34px;
}
</style>
