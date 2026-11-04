// ===== 台本ファイル =====
// 構文：
//   名前|セリフ          キャラクターのセリフ（名前は名前枠に表示される）
//   普通の一行           ナレーション
//   @bg 背景名 [fade|black|white]    背景変更（背景名は img/bg_xxx.jpg に対応）
//   @show キャラクター 表情 位置(left/center/right)   立ち絵表示（img/キャラクター_表情.png）
//   @hide キャラクター / @hideall
//   @choice 選択肢開始、下の各行：- 選択肢テキスト => ジャンプ先ラベル [aff+1]
//   @label ラベル / @jump ラベル / @if aff>=2 ラベル
//   @flash red|white / @shake / @black / @title 章タイトル / @end
//   @bgm 曲名 [フェードミリ秒] / @bgm stop   BGM（audio/bgm/曲名.mp3、自動クロスフェード・ループ）
//   @amb 名称 / @amb stop                   環境音ループ（audio/se/amb_xxx.mp3）
//   @se 名称                                 効果音（audio/se/名称.mp3）
//   @wait ミリ秒                             待機
//   音声：各「名前|セリフ」行は出現順に自動で voice/v001.mp3、v002.mp3……に対応（ナレーションは音声なし）
//   ※ セリフ行の増減は後続の音声番号をずらすため、台本変更時は音声ファイルも同時にリネームすること（voice_script.csv 参照）
// ===== 第27巻正式版 v1.4（日本語版）=====
// 元：原台本 ~/workspace/re0-chapters/script.js + 拡張草稿 ~/workspace/re0-vol27-draft-script.js
// 血の儀式シーン：エルギナスの立ち絵はアップロード済み（1248x1728 透明背景）、@show elginas normal center は復帰済み；
//   魔獣に音声なし、このシーンはナレーション + @se snake のみで、音声番号を消費しない。
// 章ラベル：新規 vol27_ritual、vol27_ch4、zikr_interlude、vol27_ch6；元の ch6_red は第27巻のエンディングカード入口として残す。
// 音声：本ファイルは計315行の話者セリフがあり、出現順に v001-v315 に対応；置き換えで削除された旧セリフと新規セリフは voice-mapping.md 参照。
// 注意：@bg ritual、@bg guaral_hall は新版背景に置き換え済み、@bg guaral_gate は新規背景（本版と同時にアップロード）。
window.SCRIPT = String.raw`
// ===== 第27巻正式版の構成（v1.4）=====
// 構成：プロローグ + 第1章 守りたい人々 + 第2章 迫り来る悪意 + 第3章 グアラル要塞都市の戦い
//        + 第4章 皇帝／商人／ナツキ・スバル + 番外 ジークル・オスマン（第4章の後、独立した章入口）
//        + 第5章 楽師ナツミ・シュバルツ + 第6章 桀驁不遜なる赤
// 原則：オリジナルの同人セリフで、小説原文の転載なし；本編の結末は変えない；全315行のセリフは v001-v315 に並べ直して音声対応済み。
// 決定事項：クーナの「三人」＝スバル、ヴィンセント、フロップ；ヴィンセント／フロップの女装はナレーションで説明し、元の立ち絵を残す；
// ビアンカ／フローラは名前のみで登場しない；番外は第4章の後；短編は除外；音声は re0-vol27-draft-notes.md 参照。
@label start
@black
@bgm tension 1500
@amb stop
@title 序　幕
@scene プロローグ
……塔での戦いは終わった。少なくとも、スバルはそう思っていた。
@se teleport
嵐、星明かり、龍の咆哮――そして背後から伸びてきて、すべてを呑み込もうとする「何か」。
意識が白い光に引き裂かれる最後の瞬間、彼は力の限り一つの手を掴んだ。
それは、彼が二度と離さないと決めた手だった。
@label ch1_baptism
@title 第一章　洗礼
@scene 密林での目覚め
@bgm forest 2500
@bg forest black
……熱い。
@amb amb_forest 2500
肌に張り付く空気は、湿って重く、水を吸いきったタオルのようだった。
@show subaru pain center
スバル|コホッ、コホッ……ここはどこだ……？
目を開けると、頭上は空を覆う樹冠だった。馬鹿みたいに太い根が地面を這い、蔓が帘のように高みから垂れ下がっている。
砂丘でも、塔でも、ルグニカのどこでもない。彼が見たことのある場所ではなかった。
@show subaru calm center
スバル|落ち着け、ナツキ・スバル。まず状況を確認する……手足はある、頭もある。それから――
スバル|レム！　レムはどこだ！？
@hide subaru
彼は勢いよく体を起こして周りを見回した。数歩先、青髪の少女が木の根にもたれて座っている。
――その目は、開いていた。
@show subaru normal left
@se rustle
スバル|レ、レム……目が覚めたのか？　本当に目が覚めたのか！？
スバル|よかった……よかった……！　ずっと、ずっと待っていたんだ――
@se footsteps
@show rem cold right
レム|……これ以上近づかないで。
@show subaru shock left
スバル|……え？
@bgm tension 2500
レム|聞いているの。あなたは誰？　……ここは、いったいどこ？
その淡い青の目には、久しぶりの再会の喜びはなく、隠そうともしない警戒だけがあった。
まるで、素性の知れないよそ者を見るような目だった。
@choice
- 「俺はナツキ・スバル、君の英雄だ！」 => c1_hero aff+1
- 「俺が誰かなんて後回しだ――体は大丈夫か？」 => c1_body aff+2
- 「君……本当に何も覚えていないのか？」 => c1_memory

@label c1_hero
@show subaru normal left
スバル|俺はナツキ・スバル！　……君の英雄だ。君は昔、よくそう言っていた！
@show rem cold right
レム|英雄……？
レム|自分でそんなことを言う人間は、普通、詐欺師と呼ばれるものだと思うけど。
スバル|うっ……そのツッコミ、鋭すぎるだろ。いや、そう言われると逆に懐かしいな……
レム|……何を言っているのか、さっぱり分からない。
@jump c1_merge

@label c1_body
@show subaru serious left
スバル|俺が誰かは後で話す。君、目覚めたばかりなんだろ？　どこか痛むところはないか？　頭はくらくらしないか？
@show rem soft right
レム|……！
レム|……体が重い。手足に力が入らない。でも、あなたには関係ない。
スバル|関係ないわけないだろ。君はすごく長い間、眠っていたんだぞ。
レム|……見知らぬ人が、どうしてそんな顔で私を見るの。
@jump c1_merge

@label c1_memory
@show subaru shock left
スバル|ねえ……冗談はやめてくれ。本当に何も覚えていないのか？　俺の名前も、屋敷も、姉さんのことも……全部？
@show rem angry right
レム|勝手に問い詰めないで！
@show rem confused right
レム|……自分が誰なのかさえ分からないの。満足した？
@show subaru sad left
スバル|……ごめん。俺が焦りすぎた。
@jump c1_merge

@label c1_merge
@scene 失われた名前
@show subaru serious left
スバル|……君の名前はレムだ。このこと、覚えていないか？
@show rem cold right
レム|レム……
彼女はその名前をそっと繰り返した。まるで初めて聞く言葉を味わうように。それから、首を振った。
@show rem confused right
レム|……何も感じない。
@se rustle
@shake
スバルがもう一歩近づこうとしたその瞬間、レムは地面の折れた枝を掴んで、彼に襲いかかった――
@show rem angry right
レム|来るな！
@hide rem
@se tackle
@show louis normal right
ルイ|あーーうー！
淡い金色の影が横から飛び出して、レムを地面に押し倒した。素足で、髪を地面まで垂らした小さな女の子だった。
@hide louis
@show rem angry right
レム|うっ……！
レムはあっさりと押さえ込まれた。その動きは見た目よりずっと弱い――体は、長い眠りからまだ全然回復していなかった。
@show subaru serious left
スバル|……ねえ、離してやれ！
@hide rem
@show louis normal right
女の子は手を離すと、首を傾げてスバルを見つめ、曇りのない、空白の笑みを浮かべた。
スバル|こいつ……
スバルはその顔を見て、胃がむかついた。
見間違えるはずがない。あれは――「暴食」の大罪司教、ルイ・アルネブ。レムの名前と記憶を喰らった連中の一人だ。
でも今の彼女は、目が虚ろで、口からは「あー、うー」という声しか出ない。まるで生まれたばかりの小獣のようだった。
@scene あの子をどうするか
@se footsteps
@bg clearing fade
@show rem cold right
@show louis normal center
レム|……それで、この子はどうするの？
レムは女の子を背後に庇い、冷たい声で言った。
レム|さっきは私を守ってくれた。どうやら、彼女も何も知らないみたい。
@show subaru serious left
スバル|（どうすればいい……？）
スバルの頭の中に、塔で起きたことがすべて浮かんだ。喰われた名前、消された人生、笑いながら口にされたあの連中の言葉。
スバル|（あいつは自業自得だ。やったことは、この姿になったからといって帳消しにはならない。）
スバル|（今、俺が守るべきなのはレムだけだ。こんなやつを連れていけば、俺たち二人とも危険にさらされる。）
@choice
- 「……置いていこう。あいつは俺たちとは関係ない。」 => c2_leave
- 「……連れていこう。でも、優しくはしない。」 => c2_take aff+1

@label c2_leave
@show subaru serious left
スバル|置いていこう。あいつは、俺たちが守るべき人間じゃない。
@show rem angry right
レム|……本気で言っているの？　こんな小さな子を、この森に捨てていくの？
スバル|君はあいつが何者か知らない。俺は知っている。だから、置いていくと言っているんだ。
レム|……やっぱり、見間違えていなかった。あなたからは、すごく、すごく嫌な匂いがする。
レム|まるで悪そのものを煮詰めたような匂い。
@jump c2_merge

@label c2_take
@show subaru serious left
スバル|……好きにすればいい。連れていくなら連れていけばいい。ただ、面倒を見るつもりはない。
@show rem cold right
レム|口ではそう言いながら、あなたが彼女を見る目は、まるで踏み潰したい虫を見る目だわ。
スバル|そ、それは……
@show rem angry right
レム|それに――あなたのその匂い。さっきからずっと吐き気がする。
レム|まるで悪そのものを煮詰めたような匂い。そんな人の言葉は、信じられない。
@jump c2_merge

@label c2_merge
@scene 置き去りにされた者
@bgm tension
@show subaru pain left
スバル|待ってくれ、レム、話を聞いてくれ――
@hide louis
@shake
@flash white
@se grab
言い終わらないうちに、冷たい指が彼の喉を掴んでいた。
@se heartbeat
あんなに細い腕なのに、振りほどけないほどの力だった。視界が少しずつ暗くなっていく――
レム|……さようなら。私たちを探しに来ないで。
@bgm stop 600
@se fall_thud
@black
……
@bg forest black
@se gasp_wake
@show subaru pain center
スバル|……はぁっ！？
スバルは勢いよく起き上がり、無意識に自分の首に触れた。
スバル|死んでいない……？　「戻った」んじゃない……俺はまだ生きている。
@bgm sorrow 3000
周りに誰もいない。レムも、あの女の子もいない。残っているのは、葉の隙間から漏れる光と、遠くの名も知らない鳥の声だけだった。
@show subaru sad center
スバル|……置いていかれたんだ、俺は。
彼は頭を抱え、ゆっくりとさっき自分が言った言葉を思い返した。
何も覚えていないレムの目には、あの一幕はどう映っただろう？
全身から変な匂いをさせた見知らぬ男が、冷たい顔で弱い子を森に捨てようと言った――
スバル|……どう見ても悪役じゃないか。
スバル|馬鹿だ。俺は大馬鹿だ！
@hide subaru
@se run
彼は地面から這い上がり、さらに深い密林へと駆け込んだ。
スバル|レム――！　レム！　どこにいるんだ！？
スバル|俺が悪かった！　謝る！　だから、頼むから返事をしてくれ――！
@bgm stop 400
@shake
@flash red
@se arrow_hit
――ヒュッ。
何かが空気を切り裂いた。
次の瞬間、胸を巨大な力に貫かれ、彼はそのまま後ろの木に釘付けにされた。
@show subaru arrow center
@bgm horror 1500
スバル|……ぐっ、あ……？
見下ろすと、太い矢が胸を貫き、矢羽がかすかに震えている。
血。たくさんの血。口からも、鼻からも、目からも溢れ出てくる。
誰だ？　どこだ？　どうして――何も分からない。
ただ一つだけ、分かっていることがある。レムはまだこの森の中にいる。この、闇から矢が飛んでくる森の中に。
スバル|レ……ム……
だから、彼は叫んだ。
血で満たされた喉で、何度も何度も、彼女の名前を呼んだ。
@se kneel
@hide subaru
最後まで。
@se heartbeat
@black
最後の最後まで、彼は彼女の名前を呼び続けていた――
@se rbd
@amb stop 800
@flash white
@title 死に戻り
@scene 死に戻り
@bg forest white
@se gasp_wake
@amb amb_forest 2000
@show subaru shock center
スバル|――――――！！
スバルは体を跳ね起こし、両手で胸を強く押さえた。矢はない。血もない。
葉の隙間から漏れる光、遠くの鳥の声は、さっきとまったく同じだった。
スバル|……戻った。置いていかれた後……目覚めた場所に。
@bgm forest 3000
@show subaru serious center
スバル|いいだろう……よし。死んで一度で分かることなら、安いものだ。
スバル|この森には「狩人」がいる。もうあんなふうに大声を上げながら走り回るわけにはいかない。
彼は足音を忍ばせ、前回走った方向を避け、木の根の間を体を低くして進んだ。
@se footsteps
@scene 仮面の男
@bg forest fade
@show masked_man normal right
@se rustle
@bgm tension 1500
少しも進まないうちに、一人の男が前に立ちはだかった。
その顔はボロ布でぐるぐると巻かれ、刃のように冷たい黒い目だけが覗いていた。
仮面の男|……おい。そこの挙動不審な男。
@show subaru serious left
スバル|（またどこの誰だ！？　矢を放ったやつか？　いや、手に弓は持っていない……）
@choice
- 両手を挙げて、敵意がないことを示す => c3_hands aff+1
- 「お前は何者だ？　この森で矢を放っているのはお前か！？」 => c3_ask

@label c3_hands
@show subaru normal left
スバル|待って待って！　武器なんて持っていないし、敵意もない！　ほら、両手は空っぽだ！
@show masked_man smirk right
仮面の男|……ふん。少なくとも、自分より強い者の前で頭を下げる分別はあるようだ。そこまで馬鹿ではないな。
スバル|そんな褒め方、全然嬉しくないんだけど……
@show masked_man normal right
仮面の男|褒めてなどいない。
@jump c3_merge

@label c3_ask
@show subaru serious left
スバル|お前は何者だ？　この森で冷たい矢を放っているのは、お前なのか！？
仮面の男|矢だと？　もし俺がお前の命を狙っていたら、お前は今こうして立って話してはいない。
仮面の男|それに――相手が誰か分からないうちに大声を上げるのは、死ぬのを早めるだけだ。
スバル|……その言葉、さっき身をもって味わったばかりだ。
@jump c3_merge

@label c3_merge
@scene 仮面の男
@show subaru serious left
スバル|人を探しているんだ。青髪の女の子で、金髪の小さな子を連れている。見なかったか？
仮面の男|いない。
男は素っ気なく答えると、懐から短剣を取り出し、スバルの足元に投げた。
@se dagger
仮面の男|持っていけ。素手でこの林の中をうろつくのは、自分から野獣の口に入るようなものだ。
スバル|……俺にくれるのか？　どうして？
@show masked_man smirk right
仮面の男|気まぐれだ。川の方向へ行けば、地形は開けてくる。人を探すにしても、逃げるにしても、好きにしろ。
@hide masked_man
@se rustle
@bgm forest 3000
スバルが短剣を拾って顔を上げると、男はもう木陰の中に消えていた。
スバル|……この世界の人間は、どうしてこう一人残らず説明をしてくれないんだ。
@bg forest fade
@show subaru serious center
@scene 追跡
@se footsteps
男の指した方向へしばらく進むと、スバルは泥の上に足跡を見つけた。大小、二人分の足跡だ。
スバル|見つけた……！　レムとあいつのだ！
@shake
@show subaru pain center
スバル|いっ、痛っ痛っ痛っ――！？
@se trap
一歩踏み出すと、落ち葉の下に隠された縄の輪が急に締まり、彼はそのまま吊り上げられた。やっと抜け出せたと思ったら、今度は先を尖らせた枝で作られた罠だった。
@show subaru hurt center
スバル|……罠だ。全部、追っ手に向けた罠だ。
スバル|はは……記憶を失ってもこんなに手際がいいなんて、さすがレムだ……狙われているのは俺だけど。
@se stagger
彼は歯を食いしばり、びっこを引きながら先へ進んだ。全身擦り傷だらけだが、この痛みは「あの矢」に比べれば大したことはない。
@scene 再会
@bgm tension 2000
@bg clearing fade
@show rem angry right
@show louis normal center
レム|……止まれ。これ以上一歩でも進めば、容赦しない。
林間の空き地で、レムは先を尖らせた木の棒を構え、女の子を背後に庇っていた。
@se footsteps
@show subaru normal left
スバル|見つけた……やっと……
レム|どうして追ってきたの？　探しに来るなと言ったはずよ。
@show subaru serious left
@bgm sorrow 2500
スバル|うん、言ったね。でも、どうしても直接言わなきゃいけないことがあるんだ。
スバル|……さっきのことは、俺が悪かった。あの子を置いていこうと言ったのは、俺の最低な部分だ。ごめん。
@if aff>=3 rem_soft_line
@show rem cold right
レム|……謝ることなんて誰にでもできる。あなたの匂いは、少しも変わっていない。
@jump after_apology
@label rem_soft_line
@show rem soft right
レム|……
レム|……あなたの匂いはまだひどい。でも……少なくとも、嘘をついているようには見えない。
レム|勘違いしないで。まだ信じたわけじゃない。
@label after_apology
@show subaru serious left
スバル|それで十分だ。信じてくれなくてもいい、ついていかせてくれれば――
@bgm stop 300
@se arrow_whoosh
@shake
@flash red
@bgm danger 600
――ヒュッ！
矢がスバルの頬をかすめて飛び、レムのそばの木の幹に深く突き刺さった。
@show subaru shock left
スバル|伏せろ！！
@se fall_thud
@show rem angry right
レム|……！　またあなたの仲間なの！？
スバル|ありえない！　前回、俺はあれに――いや、なんでもない！　とにかく「狩人」だ！　この森には俺たちを狩る者がいる！
@shake
@se rumble
その直後、足元の地面が震え始めた。
@se snake
茂みの向こう側で、何か巨大なものが藪をなぎ倒しながらこちらへ泳いできている。
地の底から湧き上がるような、低いうなり声。
スバル|……蛇？　こんな大きさの蛇は反則だろ！？
@choice
- 「レム、俺の手を掴め！」 => c4_hand aff+1
- 「俺があの子を抱くから、君は走れ！」 => c4_louis aff+2

@label c4_hand
@show subaru serious left
スバル|レム、俺の手を掴め！　今は言い争っている場合じゃない！
@show rem angry right
レム|この子を一人で置いて逃げるなんてできない！
スバル|分かっている！　だから――三人で走るんだ！
レムは一瞬ためらってから、やはり彼が差し出した手を掴んだ。
@jump c4_merge

@label c4_louis
@show subaru serious left
スバル|君は体がまだ回復していないんだ、抱きかかえられないだろ！　あの子を俺に渡して、君は走れ！
@show rem soft right
レム|……あなたが？　この子を抱いて？
スバル|そうだ！　あいつは嫌いだけど、君があいつのために死ぬのを見るのはもっと嫌だ！　早く！
レムは彼を一秒見つめてから、女の子を彼の腕の中に押し込んだ。
@jump c4_merge

@label c4_merge
@scene 滝
@hideall
@bg forest fade
@se run
三人は密林の中を狂ったように走った。背後では矢の破空音と、巨蛇が木をへし折る轟音が響く。
@se arrow_whoosh
木の根につまずき、蔓が顔を打ち、肺は焼けるように熱い。
それでもスバルは、決して手を離さなかった。
@amb amb_waterfall 1500
@bg waterfall fade
@show subaru hurt left
@show rem angry right
スバル|ま、前が見えない……！？
木々が目の前でぷつりと途切れた。足元は崖で、崖の下は白い泡を巻く激流、横からは滝が轟音とともに落ちている。
@shake
@se snake
背後では、巨蛇のうなり声がもうすぐそこまで迫っていた。
スバル|……レム。泳げるか？
@show rem confused right
レム|……覚えていない。
スバル|じゃあ泳げるってことだ！　体を信じろ！　一、二――
@hideall
@flash white
@se splash
@amb stop 500
@bgm stop 800
三人は一緒に飛び降りた。
@black
@se underwater
冷たい水が鼻と口に流れ込む。上下左右の区別もつかない。
それでも彼の手は、二つの手を握り続けていた。
スバル|（離さない……今度こそ、絶対に離さない……！）
@amb amb_night 2500
@bg jungle_night black
@scene 河岸・三人の約束
@bgm warm 2500
@amb amb_night 2000
川の水がまだ足元をそっと叩いている。スバルはまずレムを見て、次に丸くなったルイを見た。
スバル|（さっき飛び降りたとき、俺は二つの手を掴んだ。このとき、俺は離さなかった。）
@show rem cold right
レム|……そんな目で見ないで。まだ許したわけじゃない。
@show subaru serious left
スバル|分かっている。だから許しを求めない、ついていかせてくれとだけ頼む。
@show rem soft right
レム|……ふん。あなたの匂いはまだひどい。
彼女は少し間を置き、視線をルイに落として、すぐに逸らした。
レム|……でも、飛び降りたとき、手を離さなかったこと。そのことは、覚えておく。
@show subaru normal left
スバル|一度で十分だ。本当に、一度で十分だ。
@se rustle
@show louis normal center
ルイ|あ……うー。
小さな女の子は顔を上げ、スバルを見て、レムを見てから、頭をレムの肩に寄せた。
スバル|（彼女は怖がっている、でも逃げていない。この子も、居場所を探しているんだ。）
@wait 800

@scene シュドラクの民
……
どれだけ時間が経ったか分からない。
@se crawl
スバルは河岸の小石の上にうつ伏せになり、水を何度も吐き出していた。左手には全身ずぶ濡れで咳き込むレム、右手には丸くなった小さな女の子がいる。
@bgm warm 3000
@show subaru hurt left
スバル|い、生き残った……三人とも……
@show rem cold right
レム|……あなた、馬鹿なの。
レム|自分が沈みそうになりながら、ずっと私たちを掴んで離さなかったくせに。
@if aff>=4 end_soft
スバル|馬鹿でいいよ。……掴むことができれば、それでいい。
@jump end_merge
@label end_soft
@show rem shy right
レム|……ありがとう。
レム|……一度だけよ。
スバル|……うん。一度で十分だ。
@label end_merge
@hideall
夜風が川面を吹き抜けた。月明かりはとても明るく、さっき起きたことをほとんど忘れさせるほどだった。
そのとき――
@bgm stop 1200
@se rustle
@shake
@se torch
@bgm shudraq 1500
林の奥で、火の光が灯った。
一つ、二つ……十数本の松明が、音もなく闇の中から現れ、三人を取り囲んだ。
@show shudraq_hunter normal center
@se bow_draw
火の光の中から現れたのは、肌の黒い、身のこなしの軽い女たちだった。顔には赤い文様が描かれ、手にした長弓はすでに引き絞られている。
シュドラクの女猟師|――外の者。
シュドラクの女猟師|お前たちは「シュドラク」の森に踏み込んだ。
@show subaru hurt left
スバル|シュド……ラク……？
@se stagger
スバルの視界が揺れた。限界まで来た体は、もう彼の言うことを聞かなかった。
@se fall_thud
意識が闇に沈む前に、彼が最後に見たのは、自分に向けられた、冷たく光る無数の矢じりだった。
@hideall
@amb stop 2000
@bgm title 3000
@black
@title 体験版　完
遊んでくれてありがとう。続きはここから始まる――
@jump cont_start

@label cont_start
@black
@bgm tension 1500
@title 続編　軍営
@scene 河岸の後
松明の光がまだ消えないうちに、別の隊の足音が林の向こう側から迫ってきた。
@se footsteps
帝国軍の巡回隊が松明を掲げ、シュドラクの弓手と川を挟んで対峙した。誰も先に矢を放たなかった。
@se torch
火の光と叫び声の中で、スバルが最後に感じたのは、誰かが彼を小石の地面から引きずり上げたことだった。
@black
@scene 軍営での目覚め
@bgm tension 2000
@bg military_camp black
@show subaru pain center
スバル|……頭……痛い……ここは……？
彼の手は縄で縛られ、目にはまだ布が巻かれていた。空気には汗と鉄と篝火の匂いがした。
@se rustle
@show todd normal right
トッド|やあ、目が覚めたか？　暴れるなよ、傷はまだ治っていない。
スバル|……君は誰だ？　レムは？　あの子は？
トッド|隣のテントにいるよ、無事だ、誰も手を出していない。素直に質問に答えてくれればね。
@hide subaru
@show subaru serious center
スバル|（落ち着け。まず状況を確認する。シュドラクの人間はどうなった？　帝国軍はどうしてここに現れたんだ？）
トッド|俺はトッド、帝国軍の兵士だ。お前と、その小さなナイフは、どう見ても普通の流れ者じゃない。
スバル|ナイフ……？　それは誰かにもらったものだ。
トッド|ほう？　それはいいナイフだ。そんなナイフを持っている人間は、帝国にはそう多くない。
@show subaru calm center
スバル|……俺はスバル。ただの通りすがりで、二人の……家族を連れている。
トッド|家族か。よし、スバル。軍営に無駄飯食いは置かない。働けるなら、まずここにいろ。

@scene 軍営の日常
@bgm warm 2000
@bg military_camp fade
@show rem cold right
@show subaru normal left
数日が過ぎ、スバルは軍営で荷物を運び、テントを直し、水を汲み、レムとルイはテントの近くでの活動を許された。
レム|……君、森にいたときより疲れているように見える。
スバル|仕方ない。ここなら、少なくとも次の矢がどの木の陰から飛んでくるか心配しなくて済む。
レム|……どうして私たちにそんなに優しくするの？
スバル|だって……君たちは、俺が連れて帰らなきゃいけない人たちだから。それだけだよ。
@show rem soft right
レム|……ふん。見知らぬ人。
彼女はそう言いながらも、差し出した水を引っ込めはしなかった。
@show subaru serious left
スバル|（このままじゃ駄目だ。シュドラクはまだ森の中にいるし、帝国軍はいずれ手を出す。事態が悪くなる前に、彼女たちを連れて逃げなきゃ。）
@se footsteps
@show subaru shock left
@show jamal normal center
ジャマル|おい、小僧。お前はジャングルに詳しいと聞いたぞ？　あそこには魔獣がいるんだろ？
スバル|……いるよ。でも、君たちは入らない方がいい。
ジャマル|はあ？　帝国軍のやり方に、お前が口を出す筋合いはない。
@hide subaru

@scene 軍営・夜話
@bgm sorrow 2500
@bg military_camp fade
@show subaru serious left
スバル|（昼間、荷物を運んでいるとき、兵士たちがジャングルの話をしているのを聞いた。火の話、包囲狩りの話、まるで演習の話をするように。）
@show rem cold right
レム|……またぼんやりしているの。
@show subaru normal left
スバル|レム。ほら、今夜の月はとても明るい。
@show rem soft right
レム|……うん。明るい。
二人はそれ以上何も話さなかった。篝火の光が彼女の目の中で一度跳ねて、また暗くなった。
スバル|（彼女はまだ俺を思い出していない。でも、俺と一緒に月を見る気になってくれた。それだけでもう、大きな一歩だ。）
@se footsteps
@show todd normal center
トッド|やあ、まだ寝ていないのか？　明日は仕事があるぞ。
@show subaru calm left
スバル|トッド。君は……こんな気持ちになったことはないか？　前が間違っていると分かっていながら、それでも前に進まなきゃいけない、という気持ちは？
@show todd normal center
トッド|……あるよ。兵士は毎日そう思っている。でも、立ち止まった者は、もっと早く死ぬ。
@wait 800
@show subaru serious left
スバル|（立ち止まれば死ぬし、前に進んでも死ぬ。なら俺は死に方を一つだけ選ぶ：彼女たちを守る道で死ぬんだ。）

@scene 焼林
@bgm tension 2500
@bg forest fade
@show subaru serious center
トッド|スバル、聞いてくれ。上が決めた。林に火を放って、中の者を追い出すそうだ。
スバル|……何だって？　気が狂ったのか？　あの中にはシュドラクだけじゃなくて、まだ……
トッド|残酷なのは分かっている。でも命令だ。俺も、俺にだって……
スバル|トッド！　分かっているんだろう、林を焼けば何人が死ぬか！
@se torch
@shake
林の縁から火の光が上がったとき、スバルの頭の中にあったのはただ一つの考えだった：ジャングルの情報を教えたのは俺だ。
@show subaru pain center
スバル|俺だ……俺が彼女たちを害したんだ……
@se arrow_whoosh
@show rem angry right
レム|スバル！　気をつけて！
毒を塗った矢が、煙の中から射出された。
@se arrow_hit
@show subaru hurt center
スバル|……レム……逃げて……
@bgm horror 1500
@black
@se rbd
@show subaru normal right
スバル|（……また来たのか。死に戻り。）
@title 死に戻り

@label second_loop
@scene 第二周目・尋問
@bgm tension 2000
@bg military_camp black
@show subaru serious center
スバル|（今回、ジャングルのことはもう口にできない。林を焼かせるわけにはいかない。）
@show todd normal right
トッド|やあ、目が覚めたか？　暴れるなよ、傷はまだ治っていない。
スバル|……トッド。俺は何も知らない。ただの通りすがりだ。
トッド|……そうか？　お前の目は、何も知らない者の目には見えないな。
@se dagger
トッド|スバル。さっき、お前は一瞬怯えた。何を怖がっている？
@show subaru shock center
スバル|（しまった。見抜かれた。）
@show subaru pain center
スバル|……分かった、本当のことを言おう。君たちをジャングルに案内できる。ただし条件がある：あの二人の女の子には手を出すな。
トッド|……了解。だが、ふざけた真似はしない方がいい。
@hide subaru

@choice
- 「兵士をジャングルに連れ込み、混乱に乗じて逃げる」 => camp_snake
- 「まず時間を稼ぎ、シュドラクに単独で連絡を取る方法を考える」 => camp_snake

@label camp_snake
@scene ジャングル・巨蛇
@bgm danger 2000
@bg forest fade
@show subaru hurt center
スバル|（計画はこうだ：兵士を魔獣の出る場所に誘い込み、混乱に乗じてレムたちと逃げる。）
@se snake
@shake
@se rumble
だが、巨蛇は彼が思っていたよりもずっと大きく、ずっと速かった。
@se run
@show subaru pain center
スバル|……罠……罠ばかりだ……
@se fall_thud
@show subaru hurt center
スバル|レム……ルイ……ごめん……俺はまた……
@black
@se crawl
@scene 檻の中
@bgm shudraq 2000
@bg jungle_night black
@show subaru pain center
スバル|……ここは……木の檻か？
@show masked_man normal right
仮面の男|……君も目が覚めたのか。どうやら、俺たち二人とも捕まったらしい。
スバル|……君か。仮面の……どうして君もここにいるんだ？
仮面の男|気まぐれだ。ただ今は、俺たちに共通の問題がある：外の連中に、俺たちが敵じゃないとどう信じさせるかだ。
@show subaru serious left
スバル|……外の連中って、シュドラクのことか？
仮面の男|うん。次に、俺は一つの方法を提案する。君は、俺の言う通りにするだけでいい。
@scene 檻の中・約束
@bgm tension 2000
@bg jungle_night fade
@show masked_man normal right
仮面の男|……スバル。絶望するのはまだ早い。檻は人を閉じ込めることはできても、考えを閉じ込めることはできない。
@show subaru serious left
スバル|……君はいったい何者だ？　どうして俺が一番みっともないときばかり現れるんだ？
@show masked_man smirk right
仮面の男|……道を探している者だ。村に着けば、自然と分かる。
@show subaru calm left
スバル|……分かった。今回は信じる。だが、もしこれが罠なら、俺は真っ先にお前を盾にする。
仮面の男|……ふん。了解。
@se rustle
スバル|（レム、ルイ。待っていてくれ。俺はきっと、君たちが安全にいられる答えを持って、君たちの元へ戻る。）
@bgm title 2000
@black
@title 第一章　完
@scene 次回予告：シュドラク村・血の儀式

@label village_start
@black
@bgm shudraq 2000
@title 続編　シュドラク
@scene 村での尋問
@bg shudrak_village fade
@show mizelda normal center
ミゼルダ|……お前たちが、俺たちの森に踏み込んだ者たちか？
@show subaru serious left
スバル|……そうだ。俺たちは戦いに来たんじゃない。ただ……道に迷っただけだ。
ミゼルダ|道に迷った？　道に迷った者が、帝国軍の刀を持っているのか？
@show subaru pain left
スバル|その刀……誰かにもらったものだ。俺はそれで誰も傷つけていない。
@show mizelda angry center
ミゼルダ|嘘をつく者は、ここでは長く生きられない。タリッタ、彼を見ていろ。
@show taritta normal right
タリッタ|……姉さん、任せて。
スバル|（姉さん？　つまりミゼルダが族長で、タリッタが妹なのか。）
@show subaru calm left
スバル|……俺はスバル。この二人は俺の家族で、レムとルイだ。武器は持っていないし、誰も傷つけない。
ミゼルダ|……家族か。よし、スバル。お前にチャンスをやろう。帝国軍の手先じゃないと証明するんだ。

@scene 村の中・ウタカタ
@bgm warm 2000
@bg shudrak_village fade
@show utakata normal center
ウタカタ|……こ、来るな！　よそ者……俺たちの物に触るな！
@show louis normal right
ルイ|……大丈夫、触らない。ただ……君の弓を見たかっただけ。
@show utakata normal center
ウタカタ|……俺の弓……母さんがくれたんだ。
@show louis normal right
ルイ|……君のお母さんは、きっとすごい人だ。
ウタカタ|……うん！　母さんは……一番すごい猟師だ！
@show subaru calm left
スバル|（ルイとこの子、意外と気が合うな。もしかして……これが突破口になるかもしれない。）
@show rem cold right
レム|……君はまた危ないことを考えているね。
スバル|見抜かれたか。
@show rem soft right
レム|……ふん。死ぬなよ。

@label vol27_ritual
@scene 血の儀式・前夜
@bgm tension 2500
@bg ritual fade
@show mizelda normal center
ミゼルダ|よく聞け、スバル。シュドラクの兄弟になるには、ただ一つの道しかない：血の儀式だ。
スバル|……血の儀式？
ミゼルダ|一人で、一匹の魔獣と対峙するんだ。生き残れば、お前は俺たちの兄弟だ。死ねば……言うまでもない。
@show subaru serious left
スバル|……受ける。
@show rem cold right
レム|……待って。相手が何かも知らないのに、受けると言うのか？
@show subaru calm left
スバル|分かっている。分からないからこそ、もっと受けなきゃいけないんだ――君たちが俺の前に立って庇うのを、もう見ていられない。
@show rem soft right
レム|……ふん。死ぬなよ。
レムはそう言うと顔を背け、もう彼を見なかった。だがスバルには、彼女の指が袖口で強く握られているのが見えた。
@se footsteps
@show taritta normal right
タリッタ|……ねえ、スバル。儀式は力比べじゃない。先に生き残った方が勝ちなんだ。覚えておいて、魔獣だって疲れるし、怖がるんだ。
@show subaru serious left
スバル|……ありがとう、タリッタ。この言葉、覚えておく。
@wait 1000
@black
@scene 血の儀式・エルギナス
@bgm danger 2500
@bg forest fade
@se snake
@se rumble
@shake
藪が押し倒される音が四方八方から聞こえてきた。林の中に、何か巨大なものが泳いでいる。
スバル|（来た……これが血命の儀の相手、ジャングルの魔獣、エルギナスだ。）
@show elginas normal center
茂みの奥から低いうなり声が響き、巨大な影が藪をなぎ倒し、ジャングルの魔獣エルギナスが姿を現した。
@se snake
@show subaru shock center
スバル|……大きい……！　これは「戦う」という次元の大きさじゃない！
@show subaru pain center
スバル|（正面からは勝てない。タリッタの言う通りだ：あいつだって疲れるし、怖がる。俺を怖がらせているのはあいつで、あいつを怖がらせるのは地形だ。）
@se run
@se dagger
@shake
@show subaru hurt center
スバル|……罠……木の根……それにあいつ自身の勢い……！
@se fall_thud
@se rumble
@flash red
@show subaru hurt center
スバル|……まだ終わっていない……！　もう一度……！
@se dagger
@se fall_thud
@bgm warm 2000
@show mizelda surprised center
ミゼルダ|……君……本当に勝ったのか。
@show subaru pain left
スバル|……運が……よかっただけ……
@show rem soft right
レム|……生きていてよかった。
ミゼルダ|……いや。運も、実力の一部だ。今日から、お前はシュドラクの兄弟だ。
@show subaru serious left
スバル|……ありがとう。今日から、俺も君たちの兄弟だ。

@label village_mask
@scene 仮面を外す
@bgm title 2000
@bg shudrak_village fade
@show masked_man normal center
仮面の男|……スバル。儀式が終わった後、話しておくべきことがある。
スバル|……何のことだ？
@hide masked_man
@show vincent normal center
仮面の男|俺の本名は、ヴィンセント・ヴォラキア。ヴォラキア帝国の皇帝だ。
@show subaru shock left
スバル|……皇帝！？　君、君があの皇帝なのか！？
ヴィンセント|うん。自分の部下に裏切られ、ここまで流れ着いた。今、俺は君たちの力を借りて、グアラルを奪い返したい。
@show subaru serious left
スバル|……それで、君は最初から俺が誰か分かっていたのか？
ヴィンセント|俺は君が帝国軍の人間じゃないと分かっていた。俺はまた、君の望むものと俺の望むものが、ちょうど同じ道の上にあることも分かっていた。
@choice
- 「ヴィンセントと同盟を結び、共にグアラルへ攻め返す」 => village_alliance
- 「まず確認する：グアラルは今、いったいどうなっているのか」 => village_alliance

@label village_alliance
@scene 同盟・出村
@bgm shudraq 2000
@bg shudrak_village fade
@show mizelda normal center
ミゼルダ|……お前が兄弟なら、シュドラクはお前を見捨てない。タリッタ、ホリー、クーナ、出発の準備をしろ。
@show taritta normal right
タリッタ|……はい、姉さん。この男を監視して、もう勝手な真似をさせない。
@show subaru normal left
スバル|……ありがとう。本当に、ありがとう。
ヴィンセント|礼を言うのはまだ早い、スバル。グアラルの戦いは、まだ始まったばかりだ。
@show rem cold right
レム|……行こう。ぐずぐずしていたら、夜になってしまう。
@scene 出村・行軍
@bgm shudraq 2000
@bg forest fade
@show mizelda normal center
ミゼルダ|……兄弟よ。覚えておけ、シュドラクは自分の仲間を見捨てない。お前がグアラルへ行くなら、俺たちもついていく。
@show taritta normal right
タリッタ|……この男を監視して、もう一人で勝手な真似をさせない。
@show holly normal left
ホリー|ふふ、心配しないで。道中は私がみんなを笑わせるから、雰囲気が重くならないようにするよ。
@show kuna normal right
クーナ|……ふん。道で恥をかかないことね。
@show subaru normal left
スバル|……ありがとう。本当に、ありがとう。
@show vincent normal center
ヴィンセント|礼を言うのはまだ早い、スバル。グアラルの戦いは、まだ始まったばかりだ。
@se footsteps
@show rem cold right
レム|……行こう。ぐずぐずしていたら、夜になってしまう。
@bgm title 2000
@black
@title 第二章　完
@scene 次回予告：グアラル・要塞都市の戦い

@label guaral_start
@black
@bgm guaral 2000
@title 続編　グアラル
@scene 城門・商隊
@bg guaral_city fade
@show flop normal center
フロップ|やあやあ、数人のお客さん、入城するなら検査はかなり厳しいよ。
@show subaru serious left
スバル|……俺たちには身分証明もないし、賄賂の金もない。
フロップ|はは、それなら俺に任せてくれ。商人にとって一番得意なのは……「ない」を「ある」に変えることさ。
@show medium normal right
メディウム|兄さん、大口ばかり叩かないで。まず馬車を隠して。
フロップ|はいはい、妹様。
@show subaru normal left
スバル|（フロップとメディウム……意外と頼りになる。この二人なら、仲間になれるかもしれない。）

@label vol27_ch4
@scene 舞団の準備
@bgm warm 2000
@bg guaral_city fade
@show flop normal center
フロップ|やあやあ、よく聞いてくれ、数人のお客さん。要塞都市に紛れ込むには、口先だけじゃ駄目だ。顔と、一つの踊りと、本名を覚えられないような名前がいる。
@show medium normal right
メディウム|兄さん、大口ばかり叩かないで。まず馬車を隠して、それから楽器を磨いて。
@show subaru serious left
スバル|……それで、俺たちは本当に舞団に扮するのか？
@show vincent normal left
ヴィンセント|うん。城門の検査は「無害に見える人間」しか通さない。舞団は、最も無害な姿だ。
@show subaru normal left
スバル|（舞団……よし。入城できるなら、何に扮したっていい。）
@show flop normal center
フロップ|はは、それで決まりだ。君たち三人――スバル、ヴィンセント、俺――が舞台に上がる；他の者は連絡と見張りを担当する。
@wait 800

@scene 女装潜入
@bgm warm 2000
@bg guaral_city fade
スバル、ヴィンセント、フロップの三人は女装して舞団に扮した。スバルはナツミと名乗り、ヴィンセントとフロップも装いを変えたが、画面では元の立ち絵のまま使い、ナレーションだけでこの偽装を説明し、女装の立ち絵は別に描かない。
@show natsumi normal center
スバル|……どうして……どうして俺がスカートを穿かなきゃいけないんだよ！？
@show vincent normal left
ヴィンセント|お前が一番適任だからだ、スバル。文句を言うなよ、ビアンカとフローラはもう準備ができている。
@show flop normal right
フロップ|はは、ナツミお嬢さん、今日は本当にきれいだね。
スバル|……黙れ、フロップ。お前のスカートだって大してましじゃない。
スバルの視線はヴィンセントとフロップを一通り眺めて、すぐに逸れた――三人とも装いを変えていて、誰も誰を笑えない。
ヴィンセントの視線はとても安定していて、まるでこう言っているようだった：慌てるな、計画通りに進め。
@show taritta normal left
タリッタ|……よし、ふざけるのはやめだ。城門の検査を過ぎたら、別々に行動する。
@show kuna normal right
クーナ|……ふん。君たち三人、舞台で恥をかかないことね。
@show holly normal left
ホリー|ふふ、心配しないで。クーナ、君は外で連絡役を担当して、また人と喧嘩しないでね。
クーナ|……誰が人と喧嘩するっていうんだよ！

@scene ジークル
@bgm tension 2000
@bg guaral_hall fade
@show zikr normal center
ジークル|……おや？　舞団か？　最近、城の中は緊張していて、ちょうど音楽が必要なんだ。
スバル|（彼がジークル・オスマン、グアラルの二等将軍だ。見た目は……全然将軍らしくない。）
ジークル|はは、俺はこう見えても鑑賞がよく分かるんだ。君たちには、兵士の前で一曲披露してもらおう。
@show natsumi normal left
スバル|……いいよ。俺たちは踊る。
@show zikr normal center
ジークル|……うん。君たちの踊りは、とても面白い。特に君、ナツミお嬢さん。
スバル|（彼の視線が俺の上に、他の人より少し長く留まった。鑑賞なのか、それとも疑いなのか？）
@show natsumi normal left
スバル|（慌てるな。舞団のナツミは、慌てない。）
スバル|（しまった……見抜かれたのか？）

@label zikr_interlude
@title 番外　ジークル・オスマン
@scene 番外・ジークルの視線
@bgm tension 2000
@bg guaral_hall fade
@show zikr normal center
ジークル|……舞団。最近、城の中は緊張していて、ちょうど音楽が必要なんだ――この言葉は、本心だ。
ジークル|……ただ、音楽がいいのは一つのことで、人が怪しいのはまた別のことだ。
@show zikr normal center
ジークル|（ナツミと名乗る踊り子は、踊りは安定しているのに、目つきは踊り子のものじゃない。戦場で足音を数えた者の目だ。）
@se footsteps
ジークル|……面白い。グアラルには最近、「面白い」人間がたくさん来ている。
ジークル|（君たちが誰であれ、先に手を出さない限り、俺はまず君たちが一曲踊り終えるのを見守る。）
@wait 800
@bgm guaral 2000

@scene トッドの追撃
@bgm danger 2500
@bg forest fade
@show todd normal center
トッド|……やあ、久しぶりだな、スバル。まさか、君がまだ生きているとは。
@show subaru shock left
スバル|トッド……！　どうして君がグアラルにいるんだ！？
トッド|俺は帝国軍の兵士で、反逆者を追うのが仕事だ。
@se run
@show subaru pain center
スバル|（逃げろ！　ここで捕まるわけにはいかない！　レムたちはまだ城の中にいる！）
@se dagger
@show todd normal center
トッド|逃げろ、スバル。君が遠くへ逃げるほど、俺は面白くなる。
@show subaru serious left
スバル|……トッド。俺はもう、君に焼林のやり方で俺の仲間を攻撃させるわけにはいかない。
@black
@se rbd
@show subaru normal right
スバル|（……死に戻り？　いや、今回はまだ死んでいない。ただ……また原点に戻っただけだ。）

@label vol27_ch6
@scene 城外・着替え
@bgm tension 2000
@bg guaral_city fade
踊りが終わり、スバルは男装に戻り、ヴィンセントも皇帝の装いに戻って、改めて皇帝としてジークルの前に立った。
@show subaru normal left
スバル|（スカートはようやく脱げた……ふう。ナツミという名前は、とりあえずしまっておこう。）
@show vincent normal center
ヴィンセント|……スバル。次は、もう舞団の話じゃない。皇帝と将軍の話だ。
@show subaru serious left
スバル|……うん。分かっている。
@se footsteps
ヴィンセントの足音はとても安定していて、一歩一歩、城門から大広間までの距離を数えているようだった。

@scene 攻城・血を流さない奪還
@bgm tension 2000
@bg guaral_city fade
@show vincent normal center
ヴィンセント|ジークル、俺は君と戦いに来たんじゃない。俺は、俺のものを取り戻しに来たんだ。
@show zikr normal right
ジークル|……皇帝陛下。あなた自らお越しになるとは、グアラルには……もう抵抗する理由がありません。
ヴィンセント|うん。城門を開け、血を流すな。
@flash white
@se footsteps
@show zikr normal right
ジークル|……承知しました。グアラルは、あなたに帰順します。
ジークルの視線はヴィンセントを一通り眺め、スバルを眺め、最後にヴィンセントに戻って、軽く頷いた。
@show subaru normal left
スバル|……本当に……血を流さずに落としたのか？
@show vincent normal center
ヴィンセント|ジークルは戦いのために戦う人間じゃないからだ。この城は、最初から俺たちの敵じゃなかった。
@show subaru serious left
スバル|（矢も、火も、倒れる人もいない。この城は、こうして主を変えた。）
@show zikr normal right
ジークル|……皇帝陛下。城内の兵士は、私が自ら説得します。今日のことで血が流れることはありません。

@scene アラキア
@bgm horror 2500
@bg guaral_city fade
@se splash
@show arakiya normal center
アラキア|……皇帝……ここに隠れていれば安全だと思っているのか？
@show mizelda angry left
ミゼルダ|……何者だ！？
アラキア|……九神将第二位、アラキア。お前の命を取りに来た。
@se splash
@shake
@show mizelda pain left
ミゼルダ|……うっ……！　脚……！
@show subaru shock center
スバル|ミゼルダ！！
アラキア|……次は、お前だ、皇帝。
@se dagger
@show subaru serious center
スバル|……駄目だ……こうしていれば、みんなここで死んでしまう……
@show vincent normal right
ヴィンセント|……アラキア。退け。朕はまだ、お前に生死を決めさせる必要はない。
アラキア|……ふん。皇帝の命令が、私に通じるわけがない。
@se splash
@shake
@show mizelda pain left
ミゼルダ|……うっ……！　立てない……脚……！
@show subaru shock center
スバル|ミゼルダ！　下がれ！　俺が防ぐ――

@scene アラキア・ハイライト
@bgm horror 2500
@bg guaral_city fade
@se splash
@shake
@show mizelda pain left
ミゼルダ|……うっ……！　脚……！　立てない……！
@show subaru shock center
スバル|ミゼルダ！　下がれ！　俺が防ぐ――
@show vincent normal right
ヴィンセント|……スバル、下がれ。彼女の標的は俺だ。
@show arakiya normal center
アラキア|……皇帝。ここに隠れていれば安全だと思っているのか？
@se splash
@flash red
@show subaru serious center
スバル|（駄目だ……こうしていれば、みんなここで死んでしまう……誰かが、この局面を破らなきゃいけない。）
@wait 1000
@flash white
@se teleport
@scene 桀驁不遜なる赤
@bgm title 2500
@bg guaral_city fade
@show priscilla normal center
プリシラ|……ふふ。まったく、私の美しさの前では、神将でさえ動揺するのね？
@show arakiya normal left
アラキア|……君は誰だ……？
プリシラ|プリシラ・バーリエル。太陽の加護者、王になる運命の者だ。
@show subaru shock center
スバル|……あの剣……赤い光……！
プリシラは手を挙げ、赤い光がその掌に集まり、剣身に沿って流れ広がった。
@show priscilla normal center
プリシラ|陽剣よ、私の呼びかけに応えよ。
@se dagger
@flash white
プリシラ|……私の美は、世界ですら拒めないものだ。アラキア、君の相手は私だ。
@show vincent normal right
ヴィンセント|……プリシラ。君も、やはりここに来たのか。
@show subaru serious left
スバル|（彼女は誰だ……？　どうして、俺たちの味方なんだ？）
@show arakiya normal left
アラキア|……ふん。面白い。それなら、私の美が君の血を防げるか見せてみろ。
@show priscilla normal center
プリシラ|……来い。私は血の陰に隠れるようなやつには負けない。
@black
@bgm title 2000
@title 第27巻　完
@label ch6_red
@title 第27巻第6章「桀驁不遜なる赤」
プリシラとアラキアの正面対決は、次巻に持ち越し。第27巻の物語は、ここでひとまず終わりだ。

@end
`;
