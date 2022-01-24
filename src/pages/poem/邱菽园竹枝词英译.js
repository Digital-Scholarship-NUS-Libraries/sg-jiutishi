import React from "react"
import {
  poemDiv,
  poemAuthorTitle,
  poemMain,
  logoImage,
} from "../../../style.module.css"
import Layout from "../../components/layout"
import Seo from "../../components/seo"
import { Container } from "react-bootstrap"
import { BackToTopButton } from "../../components/Content/BackToTopButton.js"
import { StaticImage } from "gatsby-plugin-image"

const 邱菽园竹枝词英译 = () => {
  const translations = [
    {
      key: 1,
      englishTitle:
        "Khoo Seok Wan, “Preface to ‘Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "邱菽园〈星洲竹枝词序〉",
      content: [
        {
          englishContent:
            "This island is a complicated society. Each of the prevailing customs, honest or dishonest, is different. Every year I use the form of Bamboo Branch Verse to write about them. They are so varied and mingled that even if I use up all my ink, I cannot describe their scenarios to the full. It is just like not knowing where to start talking about the Twenty-Four Histories. Now I dip my brush into the ink, as it were, of the word “food” to give form to the surfaces of these phenomena, using my fellow Chinese immigrants and myself as examples. I have four pieces finished. If by chance there is someone who collects folksongs for a history of the common people, perhaps he would adopt them as well.",
          chineseContent:
            "本岛社会複杂，风尚情伪，亦各殊焉。年年以竹枝写之，千态万彚，既竭吾墨而未穷其形，亦如一部廿四史从何处说起矣。 顷就其表面显着之吃字落墨，以侨胞及余为模特，得诗四章，倘遇民史採风者，其亦有取乎尔。",
        },
      ],

      info: "(Sin Chew Jit Poh 星洲日报, May 14, 1933)",
      notes: "",
    },
    {
      key: 2,
      englishTitle: "“Bamboo Branch Verses of the Sixteenth Night”",
      chineseTitle: "〈十六夜即事竹枝词〉",
      content: [
        {
          englishContent:
            "There is a custom for Singaporean women to go out tonight. They called it “throwing stones,” and do it to show that their skin is white and pure. Now they only show off their diamonds to each other. What do they really want to do? Thus, I wrote these to express my feelings.",
          chineseContent:
            "坡俗妇女，咸于是夜出游，名曰掷石，藉以表其洁白无瑕也。今只以钻石相炫耀，其意何居？感而赋此。",
        },
        {
          englishContent:
            "No. 3 of 4 \n \nHow could I use a diamond to show off my luxury?\n After all I have something else in mind.\n I want to state my mind, it is not a stone to roll about (1),\n Is it surprising that I can read and carry a tune?",
          chineseContent:
            "岂凭鑽石炫多金，毕竟侬家别有心。\n 欲写我心非转石，居然识字解调音。",
        },
      ],
      info: "(Zonghui xinbao) (Union Times) 总汇新报, February 8, 1902",
      notes: "",
    },

    {
      key: 4,
      englishTitle:
        "“Impromptu Poems on the Sixteenth Night of the First Month in Singapore, with preface” (2)",
      chineseTitle: "〈元月十六夕新嘉坡即事诗并序〉",
      content: [
        {
          englishContent:
            "The custom of this island is that Chinese women, with their female companions, dress themselves up this evening and go to temples to worship the gods. On the way back they take a detour to the seaside to enjoy the moon and the cool air, not minding the glances of passers-by. Although this practice is not as charming as the outings of magnolia oars on the day of purification, and not as dissipated as those who presented peonies to lovers by the Zhen River, yet men and women might invite each other and loiter there (3). Women stroll on green lawns, leaning against emerald trees. Eyes beguile like bright stars; dew moistens jade arms. They flaunt jewelry and hairpins in showy competition. But the women on this island lack education—no wonder they turn to such behavior. For many years, as red beans vie for beauty in the southern state, in ten miles of east wind, together we sojourners sing bamboo branch verses.",
          chineseContent:
            "本岛风俗，华侨内眷是夕靓妆结伴，往庙烧香，回车绕道，纳凉玩月，辄循海滨一带，不禁途人瞻嘱。虽逊兰桡袚禊之韵，亦无涉溱赠芍之荡。 或各相邀，至斯停逗，欵步绿莎，徙倚碧树，眼媚明星，露瀼玉臂，互炫钗钿，意主姱赛。岛妇见识，宜其然已。频年南国，春来之红豆争姸；十里东风，客中之竹枝齐唱。",
        },
        {
          englishContent:
            "No. 3 of 5 \n\n Their laughter, mixed with jests, is heard through fragrant wind.\n Covert rivalry of hairpins and rings, they bare slender fingers.\n On this distant island, they frolic in spring and greet the first full moon;\n And in the bright moonlight, ten thousand flowers bloom.",
          chineseContent:
            "笑和谐谑透香风，暗斗钗环露指葱。\n 绝岛嬉春展元夕，万花开向月明中。",
        },
      ],

      info: "(Cheng Nam Jit Poh 振南日报, Februray 18, 1914)",
      notes: "",
    },

    {
      key: 6,
      englishTitle: "“Miscellaneous Chants on the Happy Valley Amusement Park”",
      chineseTitle: "〈欢乐园杂咏〉",
      content: [
        {
          englishContent:
            "No. 3 of 6\n\nBet for a thousand rounds, the game easily ends;\nDefeat is nothing to do with stupidity, winning not a success.\nPitching to the pot, one only knows laughing toward the sky,\nGain or loss, let others talk about the bow of Chu.(4)",
          chineseContent:
            "纵博千场局易终，败原非拙胜何功。\n投壶但识撩天笑，得失由他论楚弓。",
        },
      ],

      info: "(Lat Pau 叻报, June 21, 1924)",
      notes:
        "Translator’s notes: Located at present Tanjong Pagar, the Happy Valley Amusement Park was founded by the wealthy businessman Lim Teck Kim 林德金 (1882-1938) in 1921 and closed in 1928. It was not only known as a recreation place, but also became notorious for gambling.",
    },
    {
      key: 7,
      englishTitle: "“Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 6 of 6\n\nAt this free port, ships are allowed to come as they will;\nTake this advantage to make profits anew.\nBut, staying aloof from the rich, or unwilling to be a menial,\nOne would end up a poor single man—like the firewood, skinless.",
          chineseContent:
            "自由口岸听船埋，油水从新有得揩。\n高窦莫攀低弗就，终然光棍无皮柴。",
        },
      ],

      info: "(Sin Chew Jit Poh 星洲日报, July 17, 1932)",
      notes:
        "Translator’s notes: Khoo Seok Wan uses Cantonese dialect in this poem, in which 埋means “anchoring,” 油水 “profits,” and 高窦 “arrogant.”",
    },
    {
      key: 8,
      englishTitle: "“Durian Bamboo Branch Verses”",
      chineseTitle: "〈榴梿竹枝词〉",
      content: [
        {
          englishContent:
            "No. 4 of 5\n\nFollowing others, he drinks some brandy,\nAnd is sated with durian; both thirst and hunger slaked.\n“This is nourishing,” for these words he misbelieves.\nHis old bones, truly at great risk.",
          chineseContent:
            "学人饮下勃兰池，饱饫榴莲慰渴饥。\n补字为牠迷信误，个条老命实而希。",
        },
      ],

      info: "(Sin Chew Jit Poh 星洲日报, July 24, 1932)",
      notes:
        "Khoo’s notes: Erxi 而希 is Cantonese dialect, meaning “dangerous.” Eating durian with high grade alcohol raises body temperature, causing incurable illness. Every year we heard that people died because of this. Our country fellows believe that this fruit is nutritious, but they are greatly mistaken. 而希，广州方言，危险也。凡榴梿合高度酒精入胃，常会激增高体温，症成不治，徇是死者，岁必有闻。盖侨胞迷信此果为能补，是一大误。",
    },
    {
      key: 9,
      englishTitle: "“Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 6 of 6\n\nIn a smoking cessation center, bed benches are set;\nThe addicts queue up in several rows, like schools of fish.\nWith the quelling of desire, all things are calmed .\nNo more perfect prescription for giving up smoking.",
          chineseContent:
            "戒烟设社备横床，鱼贯烟人列几行。\n戒得心来万事稳，更无绝妙戒烟方。",
        },
      ],

      info: "(Sin Chew Jit Poh 星洲日报, August 14, 1932)",
      notes: "",
    },
    {
      key: 10,
      englishTitle: "“Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 4 of 6\n\nTo eat and get drunk in a banquet gathering,\nCome to play and enjoy it to the fullest.\nDon’t run riot after a bout and squabble.\nWhy not share the same dish?",
          chineseContent:
            "马干马莫聚餐豪，马里马寅任乐陶。\n幸勿酒狂諠马己，何妨三马吃同槽。",
        },
      ],

      info: "(Sin Chew Jit Poh 星洲日报, September 4, 1932)",
      notes:
        "Khoo’s notes: In Malay language, makan means “to eat”; mabok is “being drunk”; mali, “to come”; main, “to play”; maki, to “quarrel and retort with foul language”; and sama, “together.” 马来语马干，食也。马莫，醉也。马里，来也。马寅，玩耍也。马己，言语冲突以至恶声必反也。三马，相偕也。",
    },
    {
      key: 11,
      englishTitle:
        "See also Lai Buhong 赖逋泓, “A Sojourner’s Feelings at Late Autumn”",
      chineseTitle: "〈晚秋旅感〉",
      content: [
        {
          englishContent:
            "No. 4 of 4\n\nWandering around the end of world, I feel distressed.\nPity that my prime has gone; my temples turned grey.\nThe shins of the horse are fatigued, and the man is old.\nWhat day can I wield my poet’s whip to return home?",
          chineseContent:
            "天涯浪迹感输沙，捨影韶光两鬓华。\n古打胫疲人已老，吟鞭何日布铃家。",
        },
      ],

      info: "(Nanyang Siang Pau 南洋商报, December 3, 1926)",
      notes:
        "Translator’s notes: The piece is one of the earliest examples of Malay language in classical Chinese poetry. Susah 输沙 means “distressed”; sayang 捨影, “pity”; kuda 古打, “horse”; and pulang 布铃, “home.”",
    },
    {
      key: 12,
      englishTitle: "“Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 4 of 8\n\nYellow, red, brown, white, and black, one after another,\nGathered together to assemble on this island.\nJust take a look at the crossroads,\nEvery kind of person from all the five continents.",
          chineseContent:
            "黄红棕白黑相因，展览都归此岛陈。\n十字街头聊緃目，五洲人种各呈身。",
        },
      ],

      info: "Khoo’s notes: Although Singapore is an island as small as a pellet, immigrants of different races assemble here. This is seldom seen in other places. Someone once called it the “Expo of Human Species.” This is no exaggeration. 星洲虽弹丸小岛，侨氓群萃，为他处所罕觏，夙有人种博览会之称，非属夸诞。",
      notes: "(Sin Chew Jit Poh 星洲日报, October 2, 1932)",
    },
    {
      key: 13,
      englishTitle: "“Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 2 of 4\n\nUp above the storied house, apricot flowers in spring rain.\nTo recover our divine land, we hope for a Lu You to come.\nEarly in the morning, when doors are open, we hear the magpie’s call—\nAlong the street, it is the voice selling Sin Chew Daily.",
          chineseContent:
            "杏花春雨倚楼头，恢复神州盼陆游。\n一早开门听喜鹊，沿街日报唤星洲。",
        },
      ],

      info: "(Sin Chew Jit Poh, January 29, 1933)",
      notes:
        "Khoo’s notes: Early each morning, newspaper vendors travel the streets yelling, “Sin Chew Jit Poh special report!” Those concerned with the war and the current situation of Northeast China vie to be the first to read. 每日侵晨，报贩穿街高呼星洲专电，关心东北时局战事者，均欲争先一睹。",
    },
    {
      key: 14,
      englishTitle: "“Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 1 of 4\n\nThe New Year for each ethnic group is new for themselves;\nTahun Bahru doesn’t necessarily fall in spring.\nRegardless of astrology or lunar divination, the earth keeps revolving,\nAll of us, round and round, are people on the globe.",
          chineseContent:
            "各族新年各个新，兜温麻汝不须春。\n占星候月球公转，都是团团大地人。",
        },
      ],

      info: "(Sin Chew Jit Poh 星洲日报, May 7, 1933)",
      notes:
        "Khoo’s notes: Tahun Bahru is the word for “new year” in Malay. People who live in Singapore celebrate the new year at different times of the year. Some calculate with astrology, some use the lunar calendar, others rely on the revolution of the Earth. Probably there are four to five kinds [of calendars]. Each race follows its own way. 兜温麻汝，马来语呼新年也。居留星洲，各族新年颇不一致，有占星者，有候月者，有依凭地球公转者，大概可四五种，各行其是。",
    },
    {
      key: 15,
      englishTitle: "“Bamboo Branch Verses of the Star Islet”",
      chineseTitle: "〈星洲竹枝词〉",
      content: [
        {
          englishContent:
            "No. 1 of 2\n\nAdorn the southern wild, open up its great wasteland;\nWhat a good view this place affords!\nEight more attractions are added, in splendor, the lakes and hills.\nFor a long time, I have taken the Star Island as my hometown.",
          chineseContent:
            "点缀南荒破大荒，居然本地好风光。\n平添八景湖山壮，久把星洲作故乡。",
        },
      ],

      info: "(Sin Chew Jit Poh 星洲日报, February 26, 1933)",
      notes:
        "Khoo’s notes: Thirty years ago, I once solicited contributions of poems with the title “Eight Scenic Spots of the Star Islet,” which included: “New Moon of the Star Islet,” “Sunset at the Iron Bridge,” “Night Waves by the Red Pavilion,” “Evening Breezes of the Cricket Field,” “Tanglin after Rain at Dusk,” “Rain Through the Night in Bandar Muar,” and “Morning Mist of the Dragon Isle.” Now if I make supplements to these with new titles, it will double the list to become sixteen scenic spots. 三十年前，余尝以星洲八景征人题咏，分目为星洲初月、铁桥残照、红亭夜涛、球场晚风、东陵夕霁、旗山晴云、马坡宿雨、龙嵎晓烟。今倘续之，增出新题，亦可倍为十六景也。",
    },
  ]

  const footers = [
    "(1) The reference is to Mao #26 in the Classic of Poetry 詩經, “Cypress Boat” 柏舟, with the famous couplet, “My heart is not a mirror, / To reflect what others will” 我心匪鋻, 不可以茹, and in the third stanza, “My heart is not a stone, / It cannot be rolled 我心匪石, 不可轉也. Arthur Waley, trans., The Book of Songs (ed. Joseph R. Allen) (New York: Grove, 1996) 23–24. (Cf. Stephen Owen, trans., “This heart of mine is no stone; / you cannot turn it where you will,” Anthology 47.)",
    "(2) The evening of the fifteenth day of the first lunar month (the first full moon of the lunisolar year) is the Lantern Festival (元宵節), concluding New Year celebrations.",
    "(3) The purification rite or “Spring Lustration” 祓禊 (also 脩禊 or 解禊) Khoo refers to takes place on the Shangsi Festival 上巳節, celebrated on the third day of the third lunar month. Wang Xizhi 王羲之 (309-c.365) immortalizes the festival’s activity of floating cups of wine down a winding stream in his “Preface to the Orchid Pavilion Collection” 蘭亭集序. See Geremie R. Barmé, et al, eds., China Heritage . The synecdoche “magnolia oars” 蘭橈 possibly originates in such rich language as “Goddess of the Hsiang” 湘君: “My sail is of fig leaves, melilotus the rigging, / With iris for yard and a banner of orchids” 薜荔柏兮蕙綢, 蓀橈兮蘭旌 (David Hawkes, The Songs of the South 106–107), and can be found commonly in poetry from the Six Dynasties onward. In contrast, Khoo then refers to Mao #95, “The Zhen and Wei” 溱洧, in which Spring Festival courtship activities in the state of Zheng are considered dissipated (Waley, trans., The Book of Songs 76).",
    "(4) The “bow of Chu” 楚弓 alludes to an anecdote, “the King of Chu’s lost bow” 楚王失弓 from the Family Sayings of Confucius 孔子家語 (Chapter 6, “Loving Life” 好生), in which the King of Chu rationalizes the loss of his bow by surmising that another Chu man will find it, following a “one’s loss is another’s gain” logic. Confucius, in turn, criticizes his restriction to only Chu, expanding the story’s scope to all humanity.Tradition holds that Laozi, taking the point still further, adds that all loss and gain neither gives nor takes from the sum total of the universe. The story is remembered in the idiom, the “[lost] Chu bow is Chu’s gain” 楚弓楚得.",
  ]

  return (
    <div>
      <div className={logoImage}>
        <StaticImage
          src={`../../images/logo/logo-sgjiutishiyingze.png`}
          alt="logo"
          className={logoImage}
        ></StaticImage>
      </div>
      <Layout>
        <Seo title="邱菽园竹枝词英译" />
        <Container>
          <div className={poemMain}>
            <div className={poemDiv}>
              <h4 className={poemAuthorTitle}>邱菽园竹枝词英译</h4>
              <h6 className={poemAuthorTitle}>林立</h6>
              <hr />
              {translations.map((translation, i) => (
                <div key={i} style={{ margin: "60px 20px" }}>
                  <h5>{translation.englishTitle}</h5>
                  <h5>{translation.chineseTitle}</h5>
                  <br />
                  {translation.content.map((con, i) => (
                    <div key={i}>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {con.englishContent}
                      </p>
                      <p style={{ whiteSpace: "pre-line" }}>
                        {con.chineseContent}
                      </p>
                      <br />
                    </div>
                  ))}
                  <i>{translation.info}</i>
                  <br />
                  <br />
                  <span style={{ fontSize: "0.8rem" }}>
                    {translation.notes}
                  </span>

                  <hr />
                </div>
              ))}
              {footers.map((footer, i) => (
                <div key={i} style={{ margin: "30px 0px" }}>
                  <span style={{ fontSize: "0.75rem" }}>{footer}</span>
                  <br />
                </div>
              ))}
            </div>
            <a
              href={`/新加坡舊體詩英譯`}
              style={{ alignSelf: "center", marginBottom: "50px" }}
            >
              <button
                className={"btn btn-outline-dark rounded-0"}
                type="button"
              >
                返回上頁
              </button>
            </a>
          </div>
          <BackToTopButton></BackToTopButton>
        </Container>
      </Layout>
    </div>
  )
}

export default 邱菽园竹枝词英译
