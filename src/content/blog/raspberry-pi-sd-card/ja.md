---
title: "ラズパイのSDカードの選び方:容量、スピード表示、最大容量、Imagerで書き込む手順"
description: "ラズパイのSDカードは、OSごとの推奨容量、2TB未満という上限、古いモデルの256GBの起動制限で選びます。Raspberry Pi ImagerでOSを書き込む手順も、Raspberry Piの公式資料をもとにまとめました。"
date: 2026-11-24
---

## この記事の要点

ラズパイのSDカードは3つの点で選びます。使うOSに合う容量、2TB未満という最大容量、カードの読み書きの速さです。Raspberry Piは、デスクトップ版のRaspberry Pi OSに32GB以上、コマンドライン版のLiteに8GB以上をすすめています。

カードには、パソコンでRaspberry Pi Imagerを使ってOSを書き込みます。Imagerはカードのデータをすべて消すので、中のファイルは先に移します。

古いモデルの一部は、256GB以下の起動パーティションからしか起動しません。自分のモデルが当てはまるか先に確かめます。

「ラズパイには何GBのカードを買えばいいですか?」「カードにOSを書き込んだのに起動しません」。ラズパイを初めて組むとよく出る疑問です。この記事では、ラズパイのSDカードを選ぶ基準と、OSを書き込む手順をまとめます。特定の製品はおすすめせず、カードやボードを実際に試してもいません。数値と手順は[Raspberry Piのスタートガイド](https://www.raspberrypi.com/documentation/computers/getting-started.html#boot-media)と[Raspberry Pi Imagerの資料](https://www.raspberrypi.com/documentation/computers/imager.html)に従います。

## ラズパイにはなぜSDカードが必要ですか?

OSが入った記憶装置がないと起動しないからです。Raspberry Piの資料はこの記憶装置をブートメディアと呼び、もっとも一般的なのはmicroSDカードだと書いています。

Model B+以降のすべてのモデルにmicroSDカードスロットがあります。正しいOSイメージが入ったカードを挿すと、自動でそのカードから起動します。一部の新しいモデルは、USBストレージ、ネットワーク、PCIe経由のNVMeストレージからも起動できます。

例外もあります。Raspberry Pi 500と一部のキットには、Raspberry Pi OSが入ったmicroSDカードが付いています。この場合はインストールの手順を飛ばし、ソフトウェアの更新だけをします。

## ラズパイのSDカードは何GB必要ですか?

使うOSで決めます。[Raspberry Piのスタートガイド](https://www.raspberrypi.com/documentation/computers/getting-started.html#boot-media)の推奨値です。

| OS | 用途 | 推奨容量 |
| --- | --- | --- |
| Raspberry Pi OS | デスクトップと基本ソフト | 32GB以上 |
| Raspberry Pi OS Full | デスクトップと推奨アプリ | 32GB以上 |
| Raspberry Pi OS Lite | 画面なしでコマンドラインで使うヘッドレス構成 | 8GB以上 |

Raspberry Piは、この値は始めるのに足りる目安だとし、余裕を持って大きめの容量を選ぶようすすめています。ほかのOSは必要な容量が違うので、そのOSの資料を見ます。

32GBを超えるカードはSDXCです。容量規格の違いは[SDXCとは?SDHC・SDUCとの違い](/blog/ja/sdhc-vs-sdxc)にまとめました。

## ラズパイのSDカードの最大容量はいくつですか?

2TB未満のカードを使えます。Raspberry Piの資料は、2TBを超えるカードには対応しないと書いています。OSの場所を示すMBR(Master Boot Record)というパーティション方式の上限を超えるためです。

古いモデルは上限がもっと低くなります。次のモデルは、256GB以下の起動パーティションからしか起動しません。

| モデル | 起動の上限 |
| --- | --- |
| Raspberry Pi Zero | 起動パーティション256GB以下 |
| 最初のRaspberry Pi | 起動パーティション256GB以下 |
| BCM2836チップの初期のRaspberry Pi 2 | 起動パーティション256GB以下 |
| そのほかのモデル | カード2TB未満 |

## ラズパイのSDカードは速さの何を見ますか?

Raspberry Piの資料は、読み書きの速い記憶装置ほど全体の動作が良くなると書いています。[Raspberry PiのSDカードの資料](https://www.raspberrypi.com/documentation/accessories/sd-cards.html)は、遅いバス速度やコマンドキューイング非対応が、高性能なモデルの動作も遅くしうると説明しています。

Raspberry Piが自社で販売するmicroSDカードの表示は次のとおりです。表示の読み方の例としてだけ挙げます。

| 項目 | Raspberry Pi公式カード |
| --- | --- |
| 容量 | 32GB、64GB、128GB |
| 形状 | microSDHC・microSDXC |
| スピード表示 | C10、U3、V30、A2 |
| バス速度 | DDR50、SDR104に対応 |
| 4KBランダムの読み込み・書き込み | Raspberry Pi 4(DDR50)3,200・1,200 IOPS、Raspberry Pi 5(SDR104)5,000・2,000 IOPS |

C10・U3・V30は最低の連続書き込み速度を示します。読み方は[SDカードのV30とは?](/blog/ja/sd-card-speed-class)にあります。A2は小さなファイルをランダムに読み書きするアプリ性能の等級です。カードでOSを動かすと、こうした読み書きが多くなります。基準値は[SDカードのA1・A2とは?](/blog/ja/sd-card-a1-a2)にまとめました。

## ラズパイのSDカードはどの順番で選びますか?

1. 自分のモデルを確かめます。Zero、最初のモデル、初期のRaspberry Pi 2なら、256GBの起動パーティションの上限を確かめます。
2. 使うOSを決め、上の表の推奨容量より余裕を持って選びます。
3. 2TB未満か確かめます。
4. パッケージのスピード表示(Class、U、V、A)を見ます。
5. パソコンに挿すカードリーダーを用意します。Raspberry Piの資料も、OSを書き込むにはカードリーダーが要る場合があると書いています。選び方は[SDカードリーダーの選び方](/blog/ja/choose-sd-card-reader)にあります。
6. 買ってすぐに実際の容量を確かめます。方法は[SDカードの偽物の見分け方](/blog/ja/fake-sd-card)にあります。

## ラズパイのSDカードにOSはどう書き込みますか?

ほかのパソコンでRaspberry Pi Imagerを使います。ImagerはWindows、macOS、Linuxで動きます。[インストールの案内](https://www.raspberrypi.com/documentation/computers/getting-started.html#install)の手順です。

1. パソコンにImagerをインストールして起動します。
2. **Device**タブでラズパイのモデルを選び、**Next**を選びます。
3. **OS**タブでOSを選びます。一覧の一番上が、そのモデルの推奨OSです。
4. カードリーダーでmicroSDカードをパソコンにつなぎます。
5. **Storage**タブでカードを選びます。Imagerはこの機器のデータをすべて消すので、名前と容量をもう一度見ます。**Exclude system drives**はオンのままにします。
6. **Customisation**タブで、ホスト名、ユーザー名とパスワード、Wi-Fi、リモート接続を設定します。
7. **Writing**タブで内容を確かめて**Write**を選び、**I understand, erase and write**を選びます。
8. 書き込みと検証が終わるまで待ちます。Raspberry Piは検証を最後まで終えるようすすめています。
9. **Done**タブが出たら**Finish**を選びます。

画面なしで使うなら、6でWi-Fi(または有線LAN)と、SSHかRaspberry Pi Connectを設定します。初回起動では、この2つでしかリモート接続できません。

ほかのパソコンがなければNetwork Installを使います。Raspberry Pi 4B、5、500、500+で、有線のインターネット接続からImagerをダウンロードして動かすので、カードリーダーは要りません。

## microSDカードはラズパイにどう挿しますか?

カードのラベルがラズパイの外側を向くように挿します。Raspberry Pi 3以降とすべてのZeroでは、カードはカチッと鳴らずに止まり、軽く引くと抜けます。それより古いモデルは、カードを一度押してロックを外してから抜きます。

カードにOSを書き込んでから挿します。OSがないと、ラズパイは起動しません。

## ラズパイのSDカードが認識しない・起動しないときは?

[Imagerのトラブルシューティング](https://www.raspberrypi.com/documentation/computers/imager.html#imager-troubleshooting)をもとにした確認項目です。

| 症状 | 確かめること |
| --- | --- |
| Imagerにカードが表示されない | パソコンがカードを認識しているか、カードやアダプターの書き込み禁止スイッチ |
| 検証(verify)に失敗する | 書き込み直す、別のカードリーダーやUSBポート、別のカード |
| 書き込んだのに起動しない | Deviceタブで選んだモデル、検証を最後まで終えたか |

Raspberry Piは、検証に何度も失敗する記憶装置は故障しているか、実際より大きな容量を示す偽物の可能性があると書いています。ロックスイッチは[SDカードのロックとは?](/blog/ja/sd-card-lock-switch)に、一般的な確認手順は[microSDが認識しない・フォーマットできないときの確認手順](/blog/ja/sd-card-not-working)にまとめました。

## ラズパイで使ったSDカードをほかの機器で使い直すには?

Imagerの**Erase**で消します。[Imagerの資料](https://www.raspberrypi.com/documentation/computers/imager.html#erase-storage)によると、**OS**タブの下の**Erase**を選び、**Storage**タブから同じ手順で進めると、カードはFAT32のパーティション1つにフォーマットされます。カードのデータはすべて消えます。

パソコンで直接フォーマットする手順は[マイクロSDカードフォーマット方法](/blog/ja/format-microsd)にあります。

## iPhoneユーザーはあわせて何を読めばいいですか?

ラズパイ用に消したFAT32のカードは、iPhoneでも読める形式です。[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)は、iPhoneが対応する形式にexFATとFAT32を挙げています。

iPhoneにmicroSDカードをつなぐ手順は[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)に、iPhoneの写真をUSBメモリに移す手順は[iPhoneの写真をUSBに移す方法](/blog/ja/iphone-photos-to-usb)にまとめました。

## ラズパイのSDカードのよくある質問

### Raspberry Pi OS Liteは8GBのカードで足りますか?

Raspberry Piがすすめる最小容量は8GBです。ただし、余裕を持って大きめの容量を選ぶようにもすすめています。ソフトやデータを多く置くなら、その分大きいカードを選びます。

### 2TBのカードをラズパイで使えますか?

Raspberry Piの資料は、2TB未満のカードを使えると書いています。2TBを超えるカードは、MBRの上限のため対応しません。

### Raspberry Pi Zeroに512GBのカードを入れるとどうなりますか?

Zeroは256GB以下の起動パーティションからしか起動しません。最初のモデルと初期のRaspberry Pi 2も同じです。カードを買う前にこの上限を確かめます。

### Raspberry Pi公式カードを買わないといけませんか?

いいえ。Raspberry Piの資料は、どのカードを買うか迷ったら公式カードを検討するよう書いています。ほかのカードも容量とスピード表示を見て選べます。

### 使っていたカードにImagerでOSを書き込むと、元のファイルはどうなりますか?

すべて消えます。Imagerは書き込む前にデータを消すと警告します。残したいファイルは先に別の記憶装置へコピーします。
