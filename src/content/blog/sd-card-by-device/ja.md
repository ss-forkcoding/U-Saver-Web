---
title: "マイクロSDカード機器別まとめ:スマホ、ゲーム機、カメラ、iPhoneの条件と使い方"
description: "マイクロSDカードを機器別にまとめました。Androidスマホ、Galaxy、Nintendo SwitchとSwitch 2、Steam Deck、3DS、カメラ・ドラレコ・防犯カメラ、iPhoneに合うカードの条件と詳しい記事を、公式情報をもとに一か所に集めています。"
date: 2026-11-24
---

## この記事の要点

マイクロSDカードは、機器ごとに使える条件が違います。カードを買う前に、機器の説明書や公式サポートでカードのサイズ、最大容量、スピード表示、形式を確認します。

同じmicroSDでも、機器によって使い方が違います。Nintendo Switch 2はゲームの保存にmicroSD Expressカードだけを使い、3DSシリーズは32GBまでです。Steam Deckはカードをext4形式でフォーマットします。

iPhoneにはカードスロットがありません。カードリーダーを充電端子に挿して、ファイルアプリと写真アプリで使います。

「スマホで使っていたカードをSwitchに入れてもいいですか?」「カメラ用のカードは何が違うのですか?」マイクロSDカードを複数の機器で使うと、こうした疑問が出てきます。この記事は機器ごとの条件を一枚にまとめ、機器ごとの詳しい記事につなぎます。特定の製品はおすすめせず、カードを実際に試してもいません。

## マイクロSDカードはどの機器で使いますか?

機器を探して、詳しい記事に進んでください。

| 機器 | 使うカード | 詳しい記事 |
| --- | --- | --- |
| Androidスマホ | microSD | [スマホのSDカードの使い方](/blog/ja/android-microsd) |
| Galaxyスマホ | microSD(モデルによってはなし) | [GalaxyのSDカードスロットと設定](/blog/ja/galaxy-sd-card) |
| Galaxy Tab・Fireタブレット | microSD | [タブレットのmicroSDの使い方](/blog/ja/tablet-microsd) |
| iPhone | リーダーでSD・microSDを接続 | [iPhoneでマイクロSDを使う方法](/blog/ja/iphone-microsd) |
| iPad | リーダーでSD・microSDを接続 | [iPadでSDカードを使う方法](/blog/ja/ipad-sd-card) |
| デジタルカメラ | SD(機種によってはmicroSD) | [カメラ用SDカードの選び方](/blog/ja/camera-sd-card) |
| GoPro・アクションカメラ | microSD | [アクションカメラのSDカード](/blog/ja/gopro-sd-card) |
| ドローン | microSD | [ドローンのSDカード](/blog/ja/drone-sd-card) |
| ドライブレコーダー | microSD | [ドラレコのSDカード](/blog/ja/dashcam-sd-card) |
| 防犯カメラ・見守りカメラ | microSD | [防犯カメラ用マイクロSDカードの選び方](/blog/ja/security-camera-sd-card) |
| Nintendo Switch | microSD | [SwitchのSDカードの使い方](/blog/ja/switch-microsd) |
| Nintendo Switch 2 | microSD Express | [Switch 2とmicroSD Express](/blog/ja/switch-2-microsd-express) |
| Steam Deck | microSD | [Steam DeckのSDカード](/blog/ja/steam-deck-microsd) |
| ニンテンドー3DSシリーズ | SDまたはmicroSD | [3DSのSDカード](/blog/ja/3ds-sd-card) |
| Raspberry Pi | microSD | [ラズパイのSDカード](/blog/ja/raspberry-pi-sd-card) |

多くの機器に共通する使い方は[マイクロSDカードの使い方](/blog/ja/how-to-use-microsd)にまとめました。

## マイクロSDカードの表示はどう読みますか?

カードには容量の規格とスピード表示が書かれています。機器の説明書にある表示と照らし合わせます。

容量の規格ごとに、容量の範囲と標準のファイルシステムが決まっています。[SD Associationの規格案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。

| 規格 | 容量 | 標準のファイルシステム |
| --- | --- | --- |
| SD(SDSC) | 2GBまで | FAT12、FAT16 |
| SDHC | 2GB超〜32GB | FAT32 |
| SDXC | 32GB超〜2TB | exFAT |
| SDUC | 2TB超〜128TB | exFAT |

スピード表示は動画の録画で重要です。[SD Associationのスピードクラス案内](https://www.sdcard.org/developers/sd-standard-overview/speed-class/)によると、V30はUHS方式で使い、V60とV90はUHS-II・UHS-III方式で使います。機器が求める表示と同じか、それより高い表示のカードを選ぶよう案内しています。

同じ案内では、microSDカードの大きさは11 x 15 x 1.0mm、SDカードは32 x 24 x 2.1mmです。表示をさらに詳しく知りたい場合は[SDカードのスピードクラス](/blog/ja/sd-card-speed-class)と[SDHCとSDXCの違い](/blog/ja/sdhc-vs-sdxc)をご覧ください。大きさの違いは[マイクロSDとSDの違い](/blog/ja/microsd-vs-sd)にあります。

## マイクロSDカードの条件は機器ごとにどう違いますか?

メーカーの公式情報に数字で書かれている条件だけを集めました。

| 機器 | 公式情報の条件 | 出典 |
| --- | --- | --- |
| Nintendo Switch | microSDは2GBまで、microSDHCは4〜32GB、microSDXCは64GB〜2TB。microSDXCには本体の更新が必要です。UHS-I、転送速度60〜95MB/秒のカードを推奨しています | [Nintendo microSD FAQ](https://en-americas-support.nintendo.com/app/answers/detail/a_id/22481/~/microsd-card-faq) |
| Nintendo Switch 2 | microSD Expressカードのみ、2TBまで。一般的なmicroSDはSwitchの画面写真・動画のコピーにだけ使えます | [Nintendo Switch 2の仕様](https://www.nintendo.com/us/gaming-systems/switch-2/tech-specs/) |
| Steam Deck | microSD UHS-I、SD・SDHC・SDXCに対応。カードはext4でフォーマットします | [Steam Deckの仕様](https://www.steamdeck.com/en/tech)、[Steam Deck FAQ](https://www.steamdeck.com/en/faq) |
| 3DS・3DS LL・2DS | SDは2GBまで、SDHCは4〜32GB | [ニンテンドー3DS対応カード](https://en-americas-support.nintendo.com/app/answers/detail/a_id/274/~/what-sd-cards-and-microsd-cards-are-compatible) |
| New 3DS・New 3DS LL・New 2DS LL | microSDは2GBまで、microSDHCは4〜32GB。microSDXCは対応していません | 同じ案内 |
| Galaxy Sシリーズ | S20シリーズは最大1TB。S21 5G・S21+ 5G・S21 Ultra 5Gは外部メモリーがありません | [Samsungのメモリーカード表](https://www.samsung.com/uk/support/mobile-devices/what-size-memory-card-does-my-smartphone-accept/) |

カメラ、アクションカメラ、ドローン、ドラレコ、防犯カメラは機種ごとに条件が違います。これらの機器は、説明書のメモリーカード項目の読み方を最初の表の詳しい記事で扱っています。

## 新しい機器にマイクロSDカードを入れる手順

機器が違っても、手順はほぼ同じです。

1. 説明書でカードのサイズ、最大容量、スピード表示を確認します。
2. カードに残したいファイルがあれば、先にパソコンや別の保存先へコピーします。
3. 説明書が電源を切るよう求めていれば切ってから、カードをスロットやトレイに入れます。カードは一方向にしか入らないので、無理に押し込みません。
4. 機器の設定画面でカードをフォーマットします。フォーマットするとカードのデータはすべて消えます。
5. 保存先をカードに変えるか、データをカードに移します。
6. カードを抜くときは、設定でマウントを解除するか、電源を切ってから抜きます。

フォーマットの方法は機器ごとに違います。パソコンでフォーマットする手順は[マイクロSDカードのフォーマット方法](/blog/ja/format-microsd)にあります。

## ある機器で使ったカードを別の機器に移してもいいですか?

移せるカードと移せないカードがあります。公式情報に書かれている例です。

| 状況 | 公式情報の内容 |
| --- | --- |
| Androidで内部ストレージとしてフォーマットしたカード | 別の機器に移して使えません。移して使うカードはポータブルストレージとしてフォーマットします([Googleのヘルプ](https://support.google.com/android/answer/12153449?hl=en)) |
| Switchで使っていた一般的なmicroSDをSwitch 2に入れる | 画面写真・動画のコピーにだけ使えます |
| Steam Deckで使っていたカード | ext4でフォーマットされています。別の機器で使うには、その機器でフォーマットし直します |
| 64GB以上のカードを3DSに入れる | SDXC・microSDXCは対応していません |

別の機器に入れる前に、カードの中のファイルを先にパソコンへ移してください。カードが読めないときは[SDカードが使えないとき](/blog/ja/sd-card-not-working)をご覧ください。

## iPhoneでマイクロSDカードを使うには?

カードリーダーを充電端子につなぎます。[Appleの外部ストレージ案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、USB-C - SDカードカメラリーダーのようなリーダーが必要です。カードはデータパーティションが1つで、APFS、APFS(暗号化)、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかでフォーマットされている必要があります。

[Appleのカメラアダプタ案内](https://support.apple.com/en-us/118280)の対応一覧には、SDSC、SDHC、SDXC、miniSD、microSD、MMCがあります。カードをつないだら、ファイルアプリの「ブラウズ」で「場所」の下にあるカード名をタップします。

Steam Deckで使っていたext4のカードは、Appleの一覧にない形式です。iPhoneで使うにはexFATでフォーマットし直してください。リーダーとアプリの手順は[iPhone SDカードまとめ](/blog/ja/iphone-sd-card-guide)にあります。

## USBメモリに定期的にバックアップするには?

以下のアプリはUSBメモリを前提に説明しています。カードリーダーでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## マイクロSDカードのよくある質問

### マイクロSDカードはどの機器に入れてもいいですか?

機器ごとに条件が違います。3DSシリーズは32GBまでで、Switch 2はゲームの保存にmicroSD Expressカードだけを使います。まず説明書のメモリーカード項目を確認してください。

### 大きいSDカードのスロットにmicroSDを入れられますか?

SDアダプターを使えば入れられます。任天堂の3DS案内にも、miniSDとmicroSDカードはSDカードアダプターで使えると書かれています。逆に、大きいSDカードはmicroSDのスロットに入りません。

### 4GBを超える動画をカードに保存するには?

exFATのカードを使ってください。[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、FAT32のファイル1つの最大サイズは4GiBです。32GB以下のSDHCカードの標準形式はFAT32です。

### スピード表示が高いカードはいつも速いですか?

機器が対応する方式までしか速くなりません。ValveはSteam DeckのカードスロットをUHS-Iと表記しています。V60・V90はUHS-II以上の方式で使う表示です。

### マイクロSDカードの内容は暗号化されますか?

Microsoftの比較表では、exFATとFAT32のファイルシステムレベルの暗号化は非対応です。カードをなくすと他の人に中身を見られるので、保管に注意してください。
