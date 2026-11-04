// ===== 剧本文件 =====
// 语法：
//   名字|台词          角色对白（名字会显示在名字框）
//   普通一行           旁白
//   @bg 背景名 [fade|black|white]    换背景（背景名对应 img/bg_xxx.jpg）
//   @show 角色 表情 位置(left/center/right)   显示立绘（img/角色_表情.png）
//   @hide 角色 / @hideall
//   @choice 开始选项，下面每行：- 选项文字 => 跳转标签 [aff+1]
//   @label 标签 / @jump 标签 / @if aff>=2 标签
//   @flash red|white / @shake / @black / @title 章节标题 / @end
//   @bgm 曲名 [淡入淡出毫秒] / @bgm stop   背景音乐（audio/bgm/曲名.mp3，自动交叉淡入淡出、循环）
//   @amb 名称 / @amb stop                   环境音循环（audio/se/amb_xxx.mp3）
//   @se 名称                                 一次性音效（audio/se/名称.mp3）
//   @wait 毫秒                               停顿
//   语音：每一句「名字|台词」按出现顺序自动对应 voice/v001.mp3、v002.mp3……（旁白不配音）
//   ※ 增删对白行会让后面的语音编号错位，改剧本时请同步重命名语音文件（对照 voice_script.csv）
window.SCRIPT = String.raw`
@label start
@black
@bgm tension 1500
@amb stop
@title 序　幕
@scene 序幕
……塔里的战斗结束了。至少，昴是这么以为的。
@se teleport
狂风、星光、龙的咆哮——还有某种从背后伸来、想把一切都吞下去的「东西」。
在意识被白光撕碎的最后一瞬，他用尽全力抓住了一只手。
那是他绝不会再放开的手。
@title 第一章　洗礼
@scene 密林中的苏醒
@bgm forest 2500
@bg forest black
……热。
@amb amb_forest 2500
黏在皮肤上的空气，又湿又重，像一条吸饱了水的毛巾。
@show subaru pain center
昴|咳、咳……这是哪……？
睁开眼，头顶是遮天蔽日的树冠。粗得离谱的树根盘在地上，藤蔓像帘子一样从高处垂下。
不是沙丘，不是塔，也不是露格尼卡任何一处他见过的地方。
@show subaru calm center
昴|冷静，菜月昴。先确认状况……手脚都在，脑袋也还在。然后——
昴|雷姆！雷姆呢！？
@hide subaru
他猛地撑起身子环顾四周。几步之外，一个蓝发的少女正背靠着树根坐着。
——她的眼睛，是睁开的。
@show subaru normal left
@se rustle
昴|雷、雷姆……你醒了？你真的醒了！？
昴|太好了……太好了啊……！我一直、一直在等你——
@se footsteps
@show rem cold right
雷姆|……请不要再靠近了。
@show subaru shock left
昴|……诶？
@bgm tension 2500
雷姆|我在问你话。你是谁？……这里，又是哪里？
那双淡蓝色的眼睛里，没有久别重逢的喜悦，只有毫不掩饰的警惕。
就像在看一个来路不明的陌生人。
@choice
- 「我是菜月昴，是你的英雄！」 => c1_hero aff+1
- 「先别管我是谁——你的身体还好吗？」 => c1_body aff+2
- 「你……真的什么都不记得了？」 => c1_memory

@label c1_hero
@show subaru normal left
昴|我叫菜月昴！是……是你的英雄。你以前经常这么说的！
@show rem cold right
雷姆|英雄……？
雷姆|会自己说出这种话的人，我想，一般被叫作骗子才对。
昴|呜……这吐槽也太犀利了吧。不，被你这么说反而有点怀念……
雷姆|……我完全听不懂你在说什么。
@jump c1_merge

@label c1_body
@show subaru serious left
昴|我是谁等会再说。你刚醒过来对吧？有没有哪里痛？头晕吗？
@show rem soft right
雷姆|……！
雷姆|……身体很重。手脚使不上力气。但这跟你没有关系。
昴|怎么会没关系。你可是睡了很久很久啊。
雷姆|……一个陌生人，为什么要用那种表情看着我。
@jump c1_merge

@label c1_memory
@show subaru shock left
昴|喂……别开玩笑了。你真的什么都不记得了？我的名字、宅邸、姐姐……全部？
@show rem angry right
雷姆|请不要擅自逼问我！
@show rem confused right
雷姆|……我连自己是谁都不知道。你满意了吗？
@show subaru sad left
昴|……抱歉。是我太急了。
@jump c1_merge

@label c1_merge
@scene 失去的名字
@show subaru serious left
昴|……你的名字叫雷姆。这个，你还记得吗？
@show rem cold right
雷姆|雷姆……
她轻轻重复了一遍那个名字，像在品尝一个陌生的词。然后，摇了摇头。
@show rem confused right
雷姆|……没有任何感觉。
@se rustle
@shake
就在昴想再靠近一步的瞬间，雷姆抓起地上的断枝，朝他扑了过来——
@show rem angry right
雷姆|不要过来！
@hide rem
@se tackle
@show louis normal right
路易|啊——呜！
一道淡金色的影子从旁边窜出，把雷姆撞倒在地。是个赤着脚、长发拖地的小女孩。
@hide louis
@show rem angry right
雷姆|唔……！
雷姆被轻易地按住了。她的动作远比看起来虚弱——身体，还远远没有从漫长的沉睡中恢复。
@show subaru serious left
昴|……喂，放开她！
@hide rem
@show louis normal right
女孩松开手，歪着头看向昴，露出没有一丝阴霾的、空白的笑容。
昴|这家伙……
昴看着那张脸，胃里一阵翻涌。
不会认错。就是她——「暴食」的大罪司教，路易·阿尔内布。吞噬了雷姆的名字与记忆的那群家伙之一。
可现在的她，眼神空洞，嘴里只会发出「啊、呜」的声音，像一只刚出生的小兽。
@scene 那孩子怎么办
@se footsteps
@bg clearing fade
@show rem cold right
@show louis normal center
雷姆|……那么，这孩子怎么办？
雷姆把女孩护在身后，声音冷淡。
雷姆|她刚才保护了我。看起来，她也什么都不知道。
@show subaru serious left
昴|（怎么办……？）
昴的脑海里浮现出塔里发生的一切。被吃掉的名字，被抹去的人生，那些家伙笑着说出的话。
昴|（她是罪有应得。她做过的事，就算变成这副样子也不会被抵消。）
昴|（我现在要保护的只有雷姆。带着这种家伙，只会让我们两个都陷入危险。）
@choice
- 「……丢下她。她跟我们没有关系。」 => c2_leave
- 「……带上吧。但我不会对她好。」 => c2_take aff+1

@label c2_leave
@show subaru serious left
昴|丢下她吧。她不是什么需要我们保护的人。
@show rem angry right
雷姆|……你是认真的吗？把这么小的孩子，扔在这种森林里？
昴|你不知道她是什么人。我知道。所以我说，丢下她。
雷姆|……我果然没有看错。从你身上，有一股非常、非常难闻的气味。
雷姆|像是把邪恶本身熬煮出来的味道。
@jump c2_merge

@label c2_take
@show subaru serious left
昴|……随你吧。要带她走也可以。不过别指望我照顾她。
@show rem cold right
雷姆|嘴上这么说，可你看她的眼神，就像在看一只想要掐死的虫子。
昴|那、那是……
@show rem angry right
雷姆|而且——你身上那股气味。从刚才开始就一直让我想吐。
雷姆|像是邪恶本身被熬煮出来的味道。这样的人说的话，我没有办法相信。
@jump c2_merge

@label c2_merge
@scene 被丢下的人
@bgm tension
@show subaru pain left
昴|等等，雷姆，听我说——
@hide louis
@shake
@flash white
@se grab
话没说完，冰凉的手指已经扣住了他的喉咙。
@se heartbeat
那么纤细的手臂，却有着让人无法挣脱的力道。视野一点点变暗——
雷姆|……再见了。不要来找我们。
@bgm stop 600
@se fall_thud
@black
……
@bg forest black
@se gasp_wake
@show subaru pain center
昴|……哈啊！？
昴猛地坐了起来，下意识摸向自己的脖子。
昴|没死……？不是「回来」了……我还活着。
@bgm sorrow 3000
四下无人。雷姆不在，那个女孩也不在。只剩树叶间漏下来的光，和远处不知名的鸟叫。
@show subaru sad center
昴|……被丢下了啊，我。
他抱着头，慢慢地回想刚才自己说过的话。
在什么都不记得的雷姆眼里，那一幕会是什么样子？
一个满身怪味的陌生男人，冷着脸说要把一个弱小的孩子丢在森林里——
昴|……这不是怎么看都是坏人吗。
昴|笨蛋。我这个大笨蛋！
@hide subaru
@se run
他从地上爬起来，冲进了更深的密林里。
昴|雷姆——！雷姆！你在哪里！？
昴|是我错了！我道歉！所以，拜托你回答我——！
@bgm stop 400
@shake
@flash red
@se arrow_hit
——咻。
有什么东西撕开了空气。
下一个瞬间，胸口被一股巨大的力量贯穿，他整个人被钉在了身后的树干上。
@show subaru arrow center
@bgm horror 1500
昴|……咕、啊……？
低头一看，一支粗大的箭从胸口穿出，箭羽还在微微颤动。
血。好多血。从嘴里、从鼻子里、从眼睛里溢出来。
是谁？在哪里？为什么——全都不知道。
可他知道一件事。雷姆还在这片森林里。在这个会从暗处射出箭来的森林里。
昴|雷……姆……
所以，他喊了。
用灌满了血的喉咙，一次又一次地，喊着她的名字。
@se kneel
@hide subaru
直到最后。
@se heartbeat
@black
直到最后的最后，他都在呼唤她的名字——
@se rbd
@amb stop 800
@flash white
@title 死亡回归
@scene 死亡回归
@bg forest white
@se gasp_wake
@amb amb_forest 2000
@show subaru shock center
昴|——————！！
昴弹起身子，双手死死按住胸口。没有箭。没有血。
树叶间漏下来的光，远处的鸟叫，和刚才一模一样。
昴|……回来了。是在被丢下之后……醒来的地方。
@bgm forest 3000
@show subaru serious center
昴|好啊……行啊。死一次就能明白的事，那就算便宜的了。
昴|这片森林里有「猎人」。不能再那样大喊大叫地乱跑了。
他放轻脚步，避开上一次奔跑的方向，压低身子在树根之间穿行。
@se footsteps
@scene 蒙面的男人
@bg forest fade
@show masked_man normal right
@se rustle
@bgm tension 1500
没走多远，一个男人挡在了前面。
他的脸被一圈圈破布缠住，只露出一双冷得像刀刃的黑色眼睛。
蒙面男子|……喂。那边那个形迹可疑的。
@show subaru serious left
昴|（又是哪来的家伙！？是射箭的那个人吗？不，他手上没有弓……）
@choice
- 举起双手，表示自己没有敌意 => c3_hands aff+1
- 「你是什么人？是你在森林里放箭的吗！？」 => c3_ask

@label c3_hands
@show subaru normal left
昴|等一下等一下！我没有武器，也没有敌意！看，两手空空！
@show masked_man smirk right
蒙面男子|……哼。至少还懂得在比自己强的人面前低头。不算太蠢。
昴|这种夸法一点都不让人高兴……
@show masked_man normal right
蒙面男子|我没有在夸你。
@jump c3_merge

@label c3_ask
@show subaru serious left
昴|你是什么人？在这片森林里放冷箭的，是你吗！？
蒙面男子|放箭？若我想要你的命，你现在已经不会站着说话了。
蒙面男子|还有——在搞清楚对方是谁之前就大呼小叫，只会让你死得更快。
昴|……这句话，我刚刚才亲身体会过。
@jump c3_merge

@label c3_merge
@scene 蒙面的男人
@show subaru serious left
昴|我在找人。一个蓝头发的女孩，身边还跟着一个金发的小孩。你有没有看到？
蒙面男子|没有。
男人干脆地回答，然后从怀里抽出一把短剑，随手扔到昴的脚边。
@se dagger
蒙面男子|拿着。赤手空拳地在这片林子里乱走，跟把自己送进野兽嘴里没有区别。
昴|……给我的？为什么？
@show masked_man smirk right
蒙面男子|一时兴起罢了。往河的方向走，地势会开阔些。找人也好，逃命也罢，随你。
@hide masked_man
@se rustle
@bgm forest 3000
等昴捡起短剑抬起头，男人已经消失在了树影里。
昴|……这个世界的人，怎么一个个都这么不讲解释的啊。
@bg forest fade
@show subaru serious center
@scene 追踪
@se footsteps
顺着男人指的方向前进了一段，昴在泥地上发现了脚印。一大一小，两个人的。
昴|找到了……！是雷姆和那家伙的！
@shake
@show subaru pain center
昴|痛痛痛痛——！？
@se trap
一脚踩下去，藏在落叶下的绳套猛地收紧，把他整个人吊了起来。好不容易挣脱，前面又是削尖的树枝做成的绊索。
@show subaru hurt center
昴|……陷阱。全都是对着追兵设的陷阱。
昴|哈哈……失去记忆了还这么能干，不愧是雷姆啊……虽然被针对的是我。
@se stagger
他咬着牙，一瘸一拐地继续往前。浑身都是擦伤，但这种痛，比起「那支箭」来不算什么。
@scene 重逢
@bgm tension 2000
@bg clearing fade
@show rem angry right
@show louis normal center
雷姆|……停下。再往前一步，我就不客气了。
林间的空地上，雷姆举着一根削尖的木棍，把女孩挡在身后。
@se footsteps
@show subaru normal left
昴|找到你了……总算是……
雷姆|你为什么追过来？我应该说过了，不要来找我们。
@show subaru serious left
@bgm sorrow 2500
昴|嗯，你说过。但我有话必须当面跟你说。
昴|……刚才的事，是我不对。说要丢下那孩子，是我最差劲的一面。对不起。
@if aff>=3 rem_soft_line
@show rem cold right
雷姆|……道歉的话谁都会说。你的气味，可一点都没有变。
@jump after_apology
@label rem_soft_line
@show rem soft right
雷姆|……
雷姆|……你的气味还是很难闻。但是……至少，你看起来不像在说谎。
雷姆|别误会。我还没有相信你。
@label after_apology
@show subaru serious left
昴|那就够了。不相信我也没关系，只要让我跟着就——
@bgm stop 300
@se arrow_whoosh
@shake
@flash red
@bgm danger 600
——咻！
一支箭擦着昴的脸颊飞过，深深扎进了雷姆身旁的树干。
@show subaru shock left
昴|趴下！！
@se fall_thud
@show rem angry right
雷姆|……！又是你的同伙吗！？
昴|怎么可能！我上一次就是被那玩意——不、没什么！总之是「猎人」！这片森林里有人在狩猎我们！
@shake
@se rumble
紧接着，脚下的地面开始震动。
@se snake
树丛的另一侧，有什么巨大的东西正在碾过灌木，朝这边游来。
低沉的、像是从地底涌出的嘶鸣声。
昴|……蛇？这么大的蛇是犯规吧！？
@choice
- 「雷姆，抓住我的手！」 => c4_hand aff+1
- 「我来抱那孩子，你只管跑！」 => c4_louis aff+2

@label c4_hand
@show subaru serious left
昴|雷姆，抓住我的手！现在不是争论的时候！
@show rem angry right
雷姆|我不会丢下这孩子一个人逃走！
昴|我知道！所以——三个人一起跑！
雷姆犹豫了一瞬，最终还是抓住了他伸出的手。
@jump c4_merge

@label c4_louis
@show subaru serious left
昴|你身体还没恢复，抱不动她吧！把那孩子给我，你只管跑！
@show rem soft right
雷姆|……你？抱着这孩子？
昴|对！我讨厌她，但我更不想看你为了她死掉！快点！
雷姆盯着他看了一秒，然后把女孩推进了他的怀里。
@jump c4_merge

@label c4_merge
@scene 瀑布
@hideall
@bg forest fade
@se run
三个人在密林里狂奔。身后是箭矢破空的声音，和巨蛇压断树木的轰响。
@se arrow_whoosh
树根绊脚，藤蔓抽脸，肺像是要烧起来。
可昴死死地不肯松手。
@amb amb_waterfall 1500
@bg waterfall fade
@show subaru hurt left
@show rem angry right
昴|前、前面没路了……！？
树林在眼前忽然断开。脚下是悬崖，崖下是翻滚着白沫的激流，一道瀑布从侧面轰然坠落。
@shake
@se snake
身后，巨蛇的嘶鸣已经近在咫尺。
昴|……雷姆。你会游泳吗？
@show rem confused right
雷姆|……不记得了。
昴|那就是会！相信你的身体！一、二——
@hideall
@flash white
@se splash
@amb stop 500
@bgm stop 800
三个人一起跳了下去。
@black
@se underwater
冰冷的水灌进鼻子和嘴里。上下左右都分不清楚。
可他的手里，还握着两只手。
昴|（不放开……这次，绝对不放开……！）
@amb amb_night 2500
@bg jungle_night black
@scene 修德拉格之民
……
不知过了多久。
@se crawl
昴趴在河岸的碎石上，大口大口地吐着水。左手边是浑身湿透、咳个不停的雷姆，右手边是缩成一团的小女孩。
@bgm warm 3000
@show subaru hurt left
昴|活……活下来了……三个人都……
@show rem cold right
雷姆|……你，是笨蛋吗。
雷姆|明明自己都快沉下去了，却一直抓着我们不放。
@if aff>=4 end_soft
昴|笨蛋就笨蛋吧。……能抓住，就好。
@jump end_merge
@label end_soft
@show rem shy right
雷姆|……谢谢。
雷姆|……我只说这一次。
昴|……嗯。一次就够了。
@label end_merge
@hideall
夜风吹过河面。月光很亮，亮得让人几乎忘记了刚才发生的一切。
就在这时——
@bgm stop 1200
@se rustle
@shake
@se torch
@bgm shudraq 1500
树林深处，亮起了火光。
一支、两支……十几支火把，无声无息地从黑暗中浮现，把三个人团团围住。
@show shudraq_hunter normal center
@se bow_draw
火光里走出来的，是一群皮肤黝黑、身形矫健的女人。她们脸上画着赤红的纹路，手中的长弓已经拉满。
褐肤的女猎人|——外来者。
褐肤的女猎人|你们闯进了「修德拉格」的森林。
@show subaru hurt left
昴|修德……拉格……？
@se stagger
昴的视野一阵摇晃。到了极限的身体，终于不再听他的使唤。
@se fall_thud
在意识沉入黑暗之前，他最后看见的，是对准自己的、无数支闪着寒光的箭头。
@hideall
@amb stop 2000
@bgm title 3000
@black
@title 试玩版　完
感谢游玩。续章从这里开始——
@jump cont_start

@label cont_start
@black
@bgm tension 1500
@title 续章　军营
@scene 河岸之后
火把的光还没有散去，另一队脚步声就从林子另一侧压了过来。
@se footsteps
帝国军的巡逻队举着火把，与修德拉克的弓手隔河对峙。没有人先放箭。
@se torch
在火光和喊声之间，昴最后的感觉，是有人把他从碎石地上拖了起来。
@black
@scene 军营中的苏醒
@bgm tension 2000
@bg military_camp black
@show subaru pain center
昴|……头……好痛……这里是……？
他的手被绳子捆着，眼睛上还蒙着布。空气里有汗、铁和篝火的味道。
@se rustle
@show todd normal right
托德|哟，醒了？别乱动，你伤还没好。
昴|……你是谁？雷姆呢？那个孩子呢？
托德|她们在隔壁帐篷，好好的，没人动她们。只要你老实回答问题。
@hide subaru
@show subaru serious center
昴|（冷静。先确认状况。修德拉克的人呢？帝国军为什么会出现在这里？）
托德|我是托德，帝国军的士兵。你，还有你那把小刀，看起来可不像普通流浪者。
昴|小刀……？那是别人给我的。
托德|哦？那可是一把好刀。拿着这种刀的人，在帝国可不多。
@show subaru calm center
昴|……我叫昴。只是个路过的人，带着两个……家人。
托德|家人啊。行吧，昴。军营里不养闲人，你能干活，就先留下来。

@scene 军营日常
@bgm warm 2000
@bg military_camp fade
@show rem cold right
@show subaru normal left
几天过去，昴在军营里搬东西、修帐篷、打水，雷姆和路易被允许在帐篷附近活动。
雷姆|……你看起来，比在森林里的时候还要累。
昴|没办法。在这里，至少不用担心下一支箭从哪棵树后面飞出来。
雷姆|……你为什么要对我们这么好？
昴|因为……你们是我要带回去的人。就这么简单。
@show rem soft right
雷姆|……哼。陌生人。
她嘴上这么说，递过来的水却没有收回去。
@show subaru serious left
昴|（这样下去不行。修德拉克还在森林里，帝国军迟早会动手。我得想办法，在事情变糟之前带她们离开。）
@se footsteps
@show subaru shock left
@show jamal normal center
贾马尔|喂，小子。听说你对丛林很熟？那里面，有魔兽，对吧？
昴|……是有。但你们最好不要进去。
贾马尔|哈？帝国军做事，轮不到你来教。
@hide subaru

@scene 烧林
@bgm tension 2500
@bg forest fade
@show subaru serious center
托德|昴，听我说。上面决定了，要放火烧林，把里面的人逼出来。
昴|……什么？你们疯了吗？那里面不只有修德拉克，还有……
托德|我知道这很残忍。但这是命令。我、我也只能……
昴|托德！你明明知道，烧林会死多少人！
@se torch
@shake
火光从林缘升起的时候，昴的脑子里只有一个念头：是我把丛林的消息告诉了他们。
@show subaru pain center
昴|是我……是我害了她们……
@se arrow_whoosh
@show rem angry right
雷姆|昴！小心！
一支涂着毒的箭，从烟雾里射了出来。
@se arrow_hit
@show subaru hurt center
昴|……雷姆……快跑……
@bgm horror 1500
@black
@se rbd
@show subaru normal right
昴|（……又来了吗。死亡回归。）
@title 死亡回归

@scene 第二周目·审问
@bgm tension 2000
@bg military_camp black
@show subaru serious center
昴|（这次，我不能再提丛林的事。不能让他们烧林。）
@show todd normal right
托德|哟，醒了？别乱动，你伤还没好。
昴|……托德。我什么都不知道。我只是个路过的人。
托德|……是吗？你的眼神，可不像什么都不知道。
@se dagger
托德|昴。你刚才，有一瞬间在害怕。害怕什么？
@show subaru shock center
昴|（糟了。他看出来了。）
@show subaru pain center
昴|……好吧，我说实话。我可以带你们进丛林，但条件是：不许动那两个女孩。
托德|……成交。不过，你最好别耍花样。
@hide subaru

@choice
- 「带士兵进丛林，找机会制造混乱逃走」 => camp_snake
- 「先拖延时间，想办法单独联系修德拉克」 => camp_snake

@label camp_snake
@scene 丛林·巨蛇
@bgm danger 2000
@bg forest fade
@show subaru hurt center
昴|（计划是这样：把士兵引到魔兽出没的地方，趁乱带雷姆她们走。）
@se snake
@shake
@se rumble
但是，巨蛇比他预想的还要大，还要快。
@se run
@show subaru pain center
昴|……陷阱……全都是陷阱……
@se fall_thud
@show subaru hurt center
昴|雷姆……路易……对不起……我又……
@black
@se crawl
@scene 笼中
@bgm shudraq 2000
@bg jungle_night black
@show subaru pain center
昴|……这里是……木笼？
@show masked_man normal right
蒙面男子|……你也醒了。看来，我们都被抓了。
昴|……是你。蒙面……你怎么也在这里？
蒙面男子|一时兴起罢了。不过现在，我们有共同的问题：怎么让外面那些人，相信我们不是敌人。
@show subaru serious left
昴|……外面那些人，是修德拉克？
蒙面男子|嗯。接下来，我会提出一个办法。你只需要，照我说的做。
@bgm title 2000
@black
@title 第一章　完
@scene 待续：修德拉克村·血之仪式

@label village_start
@black
@bgm shudraq 2000
@title 续章　修德拉克
@scene 村庄·审问
@bg shudrak_village fade
@show mizelda normal center
米泽尔达|……就是你们，闯进我们的森林？
@show subaru serious left
昴|……是。我们不是来打仗的。我们只是……迷路了。
米泽尔达|迷路？迷路的人，会带着帝国军的刀？
@show subaru pain left
昴|那把刀……是别人给我的。我没有用它伤过任何人。
@show mizelda angry center
米泽尔达|撒谎的人，在这里活不长。塔莉塔，看着他。
@show taritta normal right
塔莉塔|……姐姐，交给我。
昴|（姐姐？所以米泽尔达是族长，塔莉塔是她妹妹。）
@show subaru calm left
昴|……我叫昴。这两位是我的家人，雷姆和路易。她们没有武器，也不会伤人。
米泽尔达|……家人。好吧，昴。我给你一个机会，证明你不是帝国军的走狗。

@scene 村中·乌塔卡塔
@bgm warm 2000
@bg shudrak_village fade
@show utakata normal center
乌塔卡塔|……你、你别过来！外人……不许碰我们的东西！
@show louis normal right
路易|……没关系，我不碰。我只是……想看看你的弓。
@show utakata normal center
乌塔卡塔|……我的弓……是妈妈给我的。
@show louis normal right
路易|……你的妈妈，一定很厉害。
乌塔卡塔|……嗯！她是……她是最厉害的猎人！
@show subaru calm left
昴|（路易和这个孩子，意外地合得来。也许……这就是突破口。）
@show rem cold right
雷姆|……你又在想什么危险的事了。
昴|被你看出来了啊。
@show rem soft right
雷姆|……哼。别死。

@scene 血之仪式
@bgm tension 2500
@bg ritual fade
@show mizelda normal center
米泽尔达|听好了，昴。想成为修德拉克的兄弟，只有一条路：血之仪式。
昴|……血之仪式？
米泽尔达|一个人，独自面对一只魔兽。活下来，你就是我们的兄弟。死……就不用我说了。
@show subaru serious left
昴|……我接受。
米泽尔达|……你确定？你看起来，可不像能打赢魔兽的样子。
@show subaru calm left
昴|我打不赢，也得打。因为我要带她们活着离开这片森林。
@se rumble
@shake
@show subaru pain center
昴|……来了……！
@se run
@se dagger
@show subaru hurt center
昴|（不行……正面打不过……只能用陷阱，用地形，用它自己的力量对付它……）
@se fall_thud
@bgm warm 2000
@show mizelda surprised center
米泽尔达|……你……居然真的赢了。
@show subaru pain left
昴|……运气……好而已……
米泽尔达|……不。运气，也是实力的一部分。从今天起，你是修德拉克的兄弟。

@scene 摘面具
@bgm title 2000
@bg shudrak_village fade
@show masked_man normal center
蒙面男子|……昴。仪式结束之后，有件事，该告诉你了。
昴|……什么事？
@hide masked_man
@show vincent normal center
蒙面男子|我的真名，叫文森特·沃拉基亚。弗拉基亚帝国的皇帝。
@show subaru shock left
昴|……皇帝？！你、你就是那个皇帝？！
文森特|嗯。被自己的部下背叛，流落到这里。现在，我需要你们的力量，夺回瓜拉尔。
@show subaru serious left
昴|……所以，你一开始就知道我是谁？
文森特|我知道你不是帝国军的人。我也知道，你想要的，和我想要的，刚好在同一条路上。
@choice
- 「和文森特结盟，一起打回瓜拉尔」 => village_alliance
- 「先问清楚：瓜拉尔现在到底是什么情况」 => village_alliance

@label village_alliance
@scene 结盟·出村
@bgm shudraq 2000
@bg shudrak_village fade
@show mizelda normal center
米泽尔达|……既然你是兄弟，修德拉克就不会丢下你。塔莉塔，霍莉，库娜，准备出发。
@show taritta normal right
塔莉塔|……是，姐姐。我会盯着这个男人，不让他再乱来。
@show subaru normal left
昴|……谢谢。真的，谢谢你们。
文森特|别谢得太早，昴。瓜拉尔的仗，才刚刚开始。
@show rem cold right
雷姆|……走吧。再磨蹭，天就要黑了。
@bgm title 2000
@black
@title 第二章　完
@scene 待续：瓜拉尔·要塞都市之战

@label guaral_start
@black
@bgm guaral 2000
@title 续章　瓜拉尔
@scene 城门·商队
@bg guaral_city fade
@show flop normal center
弗洛普|哟哟，几位客人，要进城的话，检查可是很严的哦。
@show subaru serious left
昴|……我们没有身份证明，也没有贿赂的钱。
弗洛普|哈哈，那就交给我吧。商人嘛，最擅长的就是……把“没有”变成“有”。
@show medium normal right
梅蒂姆|哥哥，别光说大话。先帮他们把马车藏好。
弗洛普|是是，妹妹大人。
@show subaru normal left
昴|（弗洛普和梅蒂姆……意外的可靠。这两个人，也许能成为同伴。）

@scene 女装潜入
@bgm warm 2000
@bg guaral_city fade
@show subaru pain center
昴|……为什么……为什么是我要穿裙子啊？！
@show vincent normal left
文森特|因为你最合适，昴。别抱怨了，比安卡和芙萝拉都准备好了。
@show flop normal right
弗洛普|哈哈，娜姿蜜小姐，你今天可真漂亮。
昴|……闭嘴，弗洛普。你自己的裙子也好不到哪去。
@show taritta normal left
塔莉塔|……行了，别闹了。城门检查一过，我们就分头行动。
@show kuna normal right
库娜|……哼。你们三个，最好别在台上出丑。
@show holly normal left
霍莉|嘻嘻，放心吧。库娜，你就负责在外面接应，别又和人吵起来。
库娜|……谁会和人吵起来啊！

@scene 齐克尔
@bgm tension 2000
@bg guaral_hall fade
@show zikr normal center
齐克尔|……哦？舞团？最近城里气氛紧张，正好需要一点音乐。
昴|（他就是齐克尔·奥斯曼，瓜拉尔的二等将军。看起来……完全不像将军。）
齐克尔|哈哈，别看我这样，我可是很懂欣赏的。你们，就在士兵面前表演一场吧。
@show subaru serious left
昴|……好。我们表演。
@show zikr normal center
齐克尔|……嗯。你们的舞，很有意思。尤其是你，娜姿蜜小姐。
昴|（糟了……他是不是看出来了？）

@scene 托德追杀
@bgm danger 2500
@bg forest fade
@show todd normal center
托德|……哟，好久不见，昴。没想到，你还活着。
@show subaru shock left
昴|托德……！你怎么会在瓜拉尔？！
托德|我可是帝国军的士兵，追杀叛徒，是我的工作。
@se run
@show subaru pain center
昴|（跑！不能在这里被抓住！雷姆她们还在城里！）
@se dagger
@show todd normal center
托德|跑吧，昴。你跑得越远，我就越有兴趣。
@show subaru serious left
昴|……托德。我不会再让你，用烧林那一套对付我的同伴了。
@black
@se rbd
@show subaru normal right
昴|（……死亡回归？不，这次还没死。只是……又回到了原点。）

@scene 攻城·不流血的夺城
@bgm tension 2000
@bg guaral_city fade
@show vincent normal center
文森特|齐克尔，我不是来和你打仗的。我是来，拿回属于我的东西的。
@show zikr normal right
齐克尔|……皇帝陛下。您亲自来，瓜拉尔……就没有再抵抗的理由了。
文森特|嗯。打开城门，不要流血。
齐克尔|……遵命。瓜拉尔，归顺于您。
@show subaru normal left
昴|……真的……不流血就拿下了？
文森特|因为齐克尔不是为了打仗而打仗的人。这座城，从一开始就不是我们的敌人。

@scene 阿拉基亚
@bgm horror 2500
@bg guaral_city fade
@se splash
@show arakiya normal center
阿拉基亚|……皇帝……你以为，躲在这里就安全了吗？
@show mizelda angry left
米泽尔达|……什么人？！
阿拉基亚|……九神将第二，阿拉基亚。来取你性命的。
@se splash
@shake
@show mizelda pain left
米泽尔达|……呃……！腿……！
@show subaru shock center
昴|米泽尔达！！
阿拉基亚|……下一个，就是你，皇帝。
@se dagger
@show subaru serious center
昴|……不行……这样下去，所有人都会死在这里……
@show vincent normal right
文森特|……阿拉基亚。退下。朕还不需要你来替朕决定生死。
阿拉基亚|……呵。皇帝的命令，对我可不管用。
@se splash
@shake
@show mizelda pain left
米泽尔达|……呃……！站不起来了……腿……！
@show subaru shock center
昴|米泽尔达！先退后！我来挡——

@scene 桀骜不驯之红
@bgm title 2500
@bg guaral_city fade
@se teleport
@show priscilla normal center
普莉希拉|……呵呵。真是的，在我的美貌面前，连神将都要失态了吗？
@show arakiya normal left
阿拉基亚|……你是谁……？
普莉希拉|普莉希拉·巴利耶尔。太阳的加护者，注定要成为王的人。
@show subaru shock center
昴|……那把剑……红色的光……！
普莉希拉|阳剑啊，回应我的呼唤吧。
@se dagger
@show priscilla normal center
普莉希拉|……我的美，是世界都无法拒绝的东西。阿拉基亚，你的对手，是我。
@show vincent normal right
文森特|……普莉希拉。你果然，也来到了这里。
@show subaru serious left
昴|（她是谁……？为什么，站在我们这一边？）
@black
@bgm title 2000
@title 第三章　完
@title 第 27 卷第 6 章「桀骜不驯之红」
@scene 续作第一部分完·下一卷接普莉希拉与阿拉基亚的正面交锋

@end
`;
