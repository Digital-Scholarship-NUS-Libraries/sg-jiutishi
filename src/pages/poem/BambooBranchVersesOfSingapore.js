import React from "react"
import {
  poemDiv,
  poemAuthorTitle,
  poemContent,
  poemMain,
} from "../../../style.module.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container } from "react-bootstrap"

const BambooBranchVersesOfSingapore = () => {
  const translations = [
    {
      key: 1,
      englishTitle: "Lin Huitong, “Bamboo Branch Verses of Nantai in Fuzhou”",
      chineseTitle: "林会同，〈福州南台竹枝词〉",
      content: [
        {
          englishContent:
            "No. 7 of 8\nMy humble self is just like a stone of the bridge;\nYou, my husband, are gone, as under the bridge the water flows;\nA piece of stone, year after year I gaze upon the river.\nBut how sad it is, that with no end the water flows.",
          chineseContent:
            "妾身好似桥头石，郎去真如桥下波。片石年年江上望，波流无定奈愁何。",
        },
      ],
      info: "(Lat Pau 叻报, 29 March 1888: 5)",
      notes: "",
    },
    {
      key: 2,
      englishTitle:
        "Xiao Han Zi (Yap Quee Hoon), “Bamboo Branch Verses of Singapore”",
      chineseTitle: "笑罕子（叶季允），〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 2 of 19\nBest is the climate in Nanyang;\nAt noontime it’s scorching, but cool in the evening.\nThe sable coat, tattered; worry not, it can’t last long.\nWhen paying the New Year call, we still put our summer clothes on.",
          chineseContent:
            "天时最好是南洋，日午炎炎晚又凉。貂敝漫愁难卒岁，拜年仍着夏衣裳。",
        },
        {
          englishContent:
            "No. 17 of 19\nI’ve been in Singapore for just two falls;\nLong I knew its customs better than yore.\nThe barbarous has become civilized, now,\nEven he who sells sugar cane is now willing to learn.",
          chineseContent:
            "我到星坡止两秋，遥知风俗比前优。野蛮渐进文明界，卖蔗而今也肯修。",
        },
        {
          englishContent:
            "No. 18 of 19\nDurian, mangosteen, betel nut, and coconut;\nGrowing pineapple is better than any kind of melon.\nVegetables and fruit that in all seasons never stop yielding\nWhat things in life can compare to the banana plant?",
          chineseContent:
            "榴莲山竹及槟椰，种得黄梨胜种瓜。蔬果四时皆不绝，生涯何物似耕芭",
        },
      ],

      info: "(Lat Pau 叻报, 1 and 3 August 1903: 5, 6)",
      notes: "",
    },
    {
      key: 3,
      englishTitle:
        "Mei Songbo, “Fifteen Pieces of the Bamboo Branch Verses of Singapore”",
      chineseTitle: "梅宋博，〈星坡竹枝词十五章〉",
      content: [
        {
          englishContent:
            "No. 2 of 15\nThe sun is setting on the cricket pitch.\nCars and carriages busy, like dragons electric and swift;\nChinese and Westerners, guests and hosts, one after another in a good mood;\nMen and women gaily dressed, eager to show off their new fashions.",
          chineseContent:
            "拋球场內已斜阳，车马如龙逐电忙。宾主中西相迭好，红男绿女斗新装",
        },
      ],
      info: "(Zonghui xinbao 总汇新报, 26 June 1909: 3)",
      notes: "",
    },
    {
      key: 4,
      englishTitle: "Zhang Yaojin, “Bamboo Branch Verses of the Greater Perak”",
      chineseTitle: "张耀金，〈大霹靂竹枝词〉",
      content: [
        {
          englishContent:
            "No. 4 of 10\nChinese people don’t understand Chinese language.\nNo longer preserving the native dialects and Mandarin.\nLaughable, that round fat big-tummy merchant,\nHe’s willing to be the child of another race.",
          chineseContent:
            "中华人不识中文，无复乡音国语存。笑煞团团大腹贾，甘心他族作儿孙。",
        },
        {
          englishContent:
            "No. 6 of 10\nSlavish they’ve become, this is how they make their living.\nHaving lost their dignity, the right to be masters of their land.\nThe Malay girls, ignorant of the sorrow of a nation perished,\nOn a moonlit night, sing and dance before the falling petals.",
          chineseContent:
            "性成奴隶自生天，丧失堂堂地主权。巫女不知亡国恨，月明歌舞落花前。",
        },
      ],
      info: "(Penang Sin Poe 槟城新报, 18 March 1915: 10)",
      notes: "",
    },
    {
      key: 5,
      englishTitle:
        "Huang Zaopan, “Sunset Glow in Tanjong Kadong,” second of “Miscellaneous Bamboo Branch Verses of Singapore, twelve pieces”",
      chineseTitle: "黄藻泮，〈星洲杂咏竹枝词十二首〉〈丹戎晚霞〉",
      content: [
        {
          englishContent:
            "No. 2 of 12\nA vast sheet of shimmering waves reflects the rosy clouds.\nBy the Tanjong River, fishermen’s homes everywhere.\nAn old man stands with folded arms on the boat,\nLaughing as his sons lunge into the water.",
          chineseContent:
            "一片波光灿落霞，丹戎江畔尽渔家。老翁叉手船头立，笑看群儿扑水花。",
        },
      ],
      info: "(Kok Min Jit Poh 国民日报, 4 October 1916: 11)",
      notes: "",
    },
    {
      key: 6,
      englishTitle: "Ven. Rui Yu, “Bamboo Branch Verses of Singapore”",
      chineseTitle: "释瑞于，〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 7 of 8\nMalay flavors, I tasted with joy for the first time;\nI eat durian daily—the good smell lingers in my mouth.\nIn food and drink, one should do as they do:\nBlend the sour and spicy to make broth and soup.",
          chineseContent:
            "马来风味喜初尝，日啖榴莲齿颊香。饮食也须投俗好，调酸和辣作羮汤",
        },
      ],
      info: "(Zonghui xinbao 总汇新报, 25 December 1922: 4)",
      notes: "",
    },
    {
      key: 7,
      englishTitle: "Wen Daheng, “Bamboo Branch Verses of Nanyang”",
      chineseTitle: "文大衡，〈南洋竹枝词〉",
      content: [
        {
          englishContent:
            "No. 7 of 12\nA braided queue, long and hanging, after all he’s a worthy man.\nThough illiterate, he’s staunch and loyal.\nBetter than he who forgets his origin, his forebears,\nAnd boasts himself a British subject.",
          chineseContent:
            "辫发垂垂毕竟贤，虽无知识也贞坚。胜他数典竟忘祖，自侈臣于不列颠。",
        },
      ],
      info: "(Lat Pau 叻报, 30 June 1924: 16)",
      notes: "",
    },
    {
      key: 8,
      englishTitle: "Bu Mo, “Bamboo Branch Verses of Nanyang”",
      chineseTitle: "不磨，〈南洋竹枝词〉",
      content: [
        {
          englishContent:
            "No. 2 of 5\nWomen put on wooden clogs and men wear sarongs.\nEvery day on the streets, they bustle [against one another] in throngs;\nIt is a common sight, so take no notice of it.\nSail with the stream and you can be one among them.",
          chineseContent:
            "女郎着屐汉穿裙，每日街头攘往纷。见惯司空不经意，随波流逐可同群",
        },
      ],
      info: "(Nanyang Siang Pau, 26 September 1925: 18)",
      notes: "",
    },
    {
      key: 9,
      englishTitle: "Wu Kuangping, “Bamboo Branch Verses of Singapore”",
      chineseTitle: "伍匤平，〈星嘉坡竹枝詞〉",
      content: [
        {
          englishContent:
            "No. 5 of 6\nKeling ladies are slim and slender,\nTheir faces black, teeth white, just like wild civets.\nTheir forms, the likes of Yama and the Northern Emperor (hair disheveled and feet bare),\nEven a Zheng Xia reborn could not have them painted.",
          chineseContent:
            "吉灵女士貌苗条，黑面皤牙似野猺。状类阎魔兼北帝(披发跣足)，再生郑侠也难描。",
        },
      ],
      info: "(Nanyang Siang Pau, 3 August 1928: 24)",
      notes: "",
    },
    {
      key: 10,
      englishTitle: "Huang Zhenxuan, “Bamboo Branch Verses of Singapore”",
      chineseTitle: "黄振璇，〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 6 of 11\nBusiness slumps, year after year;\nRubber and tin industries both go for nothing.\nAlas, after the ocean had turned into a mulberry field,\nFormer dreams and prosperity all vanished like mist.",
          chineseContent:
            "商业凋残年复年，树榕锡市两徒然。可怜沧海桑田后，旧梦繁华已化烟",
        },
      ],
      info: "(Sin Kok Min Jit Pao 新国民日报, 5 July 1933: 4)",
      notes: "",
    },
  ]

  return (
    <Layout>
      <Seo title="Home" />
      <Container>
        <div className={poemMain}>
          <div className={poemDiv}>
            <h4 className={poemAuthorTitle}>
              新加坡竹枝词英译 Bamboo Branch Verses of Singapore
            </h4>
            <h5 className={poemAuthorTitle}>林立 侯海（Allen Haaheim）</h5>
            <hr />
            {translations.map((translation, i) => (
              <div style={{ margin: "60px 20px" }}>
                <h5>{translation.englishTitle}</h5>
                <h5>{translation.chineseTitle}</h5>
                <br />
                {translation.content.map((con, i) => (
                  <div>
                    <p>{con.englishContent}</p>
                    <p>{con.chineseContent}</p>
                    <br />
                  </div>
                ))}

                <span>{translation.notes}</span>

                <i>{translation.info}</i>
                <br />
                <br />
                <hr />
              </div>
            ))}
          </div>
          <a
            href={`/新加坡舊體詩英譯`}
            style={{ alignSelf: "center", marginBottom: "50px" }}
          >
            <button className={"btn btn-outline-dark rounded-0"} type="button">
              返回上頁
            </button>
          </a>
        </div>
      </Container>
    </Layout>
  )
}

export default BambooBranchVersesOfSingapore
