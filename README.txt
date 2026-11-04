Re:从零开始 · 帝国篇序章「洗礼」—— 同人试玩版（个人非商业）
================================================================

【怎么玩】
  直接双击打开 index.html（推荐 Chrome / Edge 浏览器），不需要联网、不需要安装。
  整个文件夹要放在一起，不要单独拿出 index.html。

【操作】
  鼠标左键 / 空格 / 回车：下一句（打字中点击 = 立刻显示整句）
  按住 Ctrl：临时快进　A：自动模式　S：快进开关　L 或 滚轮上：对话记录
  H 或 右键：隐藏对话框　Esc：关闭面板
  存档 / 读档：3 个栏位，保存在当前浏览器里（换浏览器或清除浏览器数据会丢失）
  「设置」里可以调整文字速度、自动模式等待时间、音乐 / 音效 / 语音音量，还能打开「雷姆的信赖」好感度显示。
  对话记录里每句有语音的台词前有 ▶ 按钮，点一下可以重听。

【如何替换图片（换成你自己的立绘 / 背景）】
  所有图片都在 img 文件夹里。只要用「同样的文件名」覆盖原文件即可，不用改任何代码。

  背景（建议 16:9，比如 1280×720 或 1920×1080，jpg 格式）：
    img/bg_forest.jpg        密林（开场、奔跑）
    img/bg_clearing.jpg      林间空地（对话、与雷姆重逢）
    img/bg_waterfall.jpg     瀑布悬崖
    img/bg_jungle_night.jpg  夜晚河岸（结尾：修德拉格之民登场）

  立绘（建议 png 透明背景，竖版，人物脚部 / 大腿在图片底部）：
    img/subaru_calm.png         菜月昴 · 冷静
    img/subaru_normal.png       菜月昴 · 普通（笑）
    img/subaru_serious.png      菜月昴 · 认真
    img/subaru_pain.png         菜月昴 · 痛苦 / 咬牙
    img/subaru_shock.png        菜月昴 · 震惊
    img/subaru_sad.png          菜月昴 · 消沉 / 愧疚
    img/subaru_hurt.png         菜月昴 · 负伤（擦伤、泥污）
    img/subaru_arrow.png        菜月昴 · 中箭
    img/rem_cold.png            雷姆 · 冷淡警惕
    img/rem_angry.png           雷姆 · 生气 / 敌意
    img/rem_soft.png            雷姆 · 稍微软化
    img/rem_confused.png        雷姆 · 迷茫（失忆）
    img/rem_shy.png             雷姆 · 害羞
    img/louis_normal.png    路易
    img/masked_man_normal.png   蒙面男子（文森特）· 冷淡
    img/masked_man_smirk.png    蒙面男子（文森特）· 轻蔑
    img/shudraq_hunter_normal.png  修德拉格的女猎人

  每张立绘另有眨眼 / 口型差分（同尺寸、逐像素对齐，只改眼睛或嘴）：
    *_blink.png 闭眼   *_mouth.png 张嘴   *_mouth2.png 半张嘴
    （蒙面男子嘴部被布遮住，只有 *_blink.png）
    要换新表情时，记得在 index.html 的 BLINK / MOUTH 里登记。

  小提示：
    * 如果换上的图不是 png 而是 jpg，请把它另存为 png 并用上面的名字，否则游戏会找不到。
    * 立绘会自动缩放到画面高度，图片上下留白太多的话人物会显得偏小，裁掉空白即可。
    * 想调整某个角色的大小：打开 index.html，搜索 SCALE，改数字（1 = 默认大小）。

【如何修改剧情】
  剧情全在 script.js 里，用记事本就能改：
    昴|台词          → 角色说话
    直接写一行        → 旁白
    @show rem cold right  → 显示立绘（角色 表情 位置 left/center/right）
    @bg forest fade       → 换背景
    @choice + 「- 选项 => 标签 aff+1」 → 选项与好感度
  文件开头有完整说明。

【声明】
  本作为个人非商业同人试玩。剧情为根据原作开头事件的原创改写，不是小说原文；
  图片均为 AI 生成的原创风格图，并非官方插画。

======== v2 界面与动态更新说明 ========
· 封面：img/cover.jpg（1280x720，可替换为任意同尺寸图片）。标题 Logo 为 CSS 文字制作，修改 index.html 中 id="logo" 部分即可。
· 字体：fonts/serif-regular.woff2、serif-bold.woff2（思源宋体 / Noto Serif SC 子集，SIL OFL 授权），只包含本作用到的汉字。
  如果你修改剧本加入了新汉字，新字会用系统字体显示；可用 fontTools 重新子集化：
  pyftsubset NotoSerifCJK-Regular.ttc --font-number=2 --text-file=全部文本.txt --flavor=woff2 --output-file=fonts/serif-regular.woff2
· 立绘动态（类 Live2D 效果，代码实现）：呼吸、上半身摇摆、头部/头发轻微晃动、眨眼、说话时轻微起伏、
  入场/退场滑动淡入淡出、表情交叉淡化；表情 angry=抖动，soft=小跳，pain=颤抖。
· 眨眼使用 img/角色_表情_blink.png（闭眼版）。替换立绘后，请删除对应的 _blink.png（否则旧的闭眼图会错位），
  或自己画一张同尺寸、只把眼睛改成闭眼的图放回去。
· 剧本新增 @scene 场景名 —— 存档卡片上会显示该名称；存档同时记录游戏时间。

======== v3 声音与口型更新说明 ========
· 配音：所有角色台词都有日语语音（共 115 句），旁白不配音。画面文字仍是中文。
  语音文件在 voice/ 文件夹：v001.mp3、v002.mp3…… 按 script.js 里「名字|台词」出现的顺序自动对应。
  中日对照、语气标签、所用音色见 voice_script.csv（可用 Excel 打开）。
  想换某一句的配音：用同名 mp3 覆盖即可；然后运行一次口型数据生成（或者直接删掉 voice/voice_data.js 里那一句，
  该句会改用「打字节奏」驱动口型）。
  ※ 修改剧本时如果增加或删除了对白行，后面的语音编号会错位，请按 voice_script.csv 同步重命名文件。
· 点击 / 快进 / 跳到下一句时，正在播放的语音会立即停止；快进时不播放语音和音效。
  自动模式会等语音播完再翻页。
· 口型：嘴巴只在「当前说话的角色」说话时动，旁白和别人说话时不动。
  有语音时按语音音量开合（voice/voice_data.js 里预先算好的音量数据，所以双击 index.html 离线也能用），
  没有语音时按打字节奏开合。张嘴图：img/角色_表情_mouth.png（大张）、_mouth2.png（半张）。
  蒙面男子看不到嘴，所以不做口型。替换立绘后，请删除对应的 _mouth / _mouth2 图（否则旧嘴巴会错位）。
· 背景音乐：audio/bgm/，一直播放，换场景 / 情绪变化时交叉淡入淡出。剧本命令：@bgm 曲名 [毫秒]、@bgm stop
  曲目：title 标题、forest 密林、tension 紧张、sorrow 悲伤、danger 危险追逐、horror 死亡、warm 温暖、shudraq 修德拉格部族
· 环境音：@amb amb_forest / amb_night / amb_waterfall，@amb stop
· 音效：@se 名称，例如 @se arrow_hit（中箭）、@se kneel（跪倒）、@se crawl（爬行）、@se stagger（踉跄）、
  @se rbd（死亡回归）、@se heartbeat（心跳），完整列表见 CREDITS.txt 或 audio/audio_data.js。
  想加新音效：把 mp3 放进 audio/se/，再在 audio/audio_data.js 的 se 列表里加一行。
· 标题画面：浏览器规定要先点一下页面才能出声，所以打开后点一下任意位置，标题音乐就会响起。
· 所有声音素材的来源和授权见 CREDITS.txt。
