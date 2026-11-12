---
title: "マイクロSDカードフォーマット方法:ほかの機器で使ったmicroSDをiPhone・Mac・Windowsで初期化する手順"
description: "マイクロSDカードのフォーマット方法をまとめました。スマホやカメラで使っていたmicroSDを、iPhone、Mac、Windows、SD Associationのフォーマットソフトでフォーマットし直す手順と、容量別の形式、事前の確認項目を解説します。"
date: 2026-11-12
---

## この記事の要点

マイクロSDカードのフォーマット方法は、SDカードと流れが同じです。カードのデータを別の場所にコピーし、容量に合う形式を選んでからフォーマットします。フォーマットするとカードのデータはすべて消えます。

microSDはSDカードより小さいだけで、内部の論理と電子構造は同じです。そのため形式の基準も同じです。32GB以下のmicroSDHCはFAT32、32GBを超えるmicroSDXCはexFATが標準です。

違うのは接続方法です。microSDの差し込み口があるカードリーダーか、SDサイズのアダプタに入れてから、iPhoneやパソコンに接続します。

「スマホから抜いたmicroSDがiPhoneに表示されない」「アクションカメラで使ったカードを空にして使い直したい」。ほかの機器で使ったカードをフォーマットし直したい方からよく聞く質問です。通常のSDカードの機器別の手順は[SDカードフォーマット方法](/blog/ja/format-sd-card)にまとめました。この記事では、microSDで確認したい点を中心に扱います。

## マイクロSDカードをフォーマットする前に何を確認しますか?

フォーマットするとカード内のファイルはすべて消えます。次の4つを先に確認してください。

| 確認すること | やること |
| --- | --- |
| 残したいデータ | 別のストレージに先にコピーします |
| カードに書かれた規格 | microSD、microSDHC、microSDXCのどれかを見て形式を選びます |
| 接続方法 | microSDの差し込み口があるリーダーか、SDサイズのアダプタを用意します |
| フォーマットする機器 | カードの名前と容量を見て、別のドライブを選んでいないか確かめます |

カードの写真やビデオを先にiPhoneに移すなら、[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)の読み込み手順をご覧ください。

## microSDカードとSDカードでフォーマット方法は違いますか?

違いません。[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)によると、microSDとSDカードの違いは、形状、サイズ、ピンの数、書き込み禁止スイッチの有無だけです。内部の論理と電子構造は同じです。

| 種類 | サイズ | フォーマット時の接続方法 |
| --- | --- | --- |
| SD | 32 x 24 x 2.1mm | SDの差し込み口があるリーダーに入れます |
| microSD | 11 x 15 x 1.0mm | microSDの差し込み口があるリーダーか、SDサイズのアダプタに入れます |

サイズは[SD Associationの規格案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。小さいので、SDの差し込み口しかないリーダーにはそのまま入りません。この記事では他社のリーダーやアダプタを試しておらず、特定の製品をおすすめしていません。

## マイクロSDカードは容量別にどの形式でフォーマットしますか?

容量の規格ごとに標準のファイルシステムが決まっています。[SD Associationの規格案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。

| カードに書かれた規格 | 容量 | 標準のファイルシステム |
| --- | --- | --- |
| microSD | 2GBまで | FAT12、FAT16 |
| microSDHC | 2GB超〜32GB | FAT32 |
| microSDXC | 32GB超〜2TB | exFAT |

FAT32は4GBを超えるファイルを保存できません。[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、FAT32の最大ファイルサイズは4GiBです。長い動画を入れるカードならexFATを選んでください。32GBを超えるカードをFAT32で使いたい場合は、[USB FAT32フォーマットの方法](/blog/ja/format-usb-fat32)にまとめました。

## ほかの機器で使ったmicroSDはなぜフォーマットし直すのですか?

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、iPhoneが使えるのはデータパーティションが1つのストレージだけです。形式も、APFS、Mac OS拡張(HFS+)、exFAT、FAT32、FATのいずれかである必要があります。

| カードの状態 | iPhoneで起きること | やること |
| --- | --- | --- |
| NTFSでフォーマットされている | Appleの一覧にありません | exFATかFAT32でフォーマットし直します |
| データパーティションが複数ある | Appleの条件に合いません | Macのディスクユーティリティで最上位の項目を消去します |
| 一覧にある形式で、パーティションが1つ | ファイルアプリで開けます | フォーマットは不要です |

リーダーがカードをまったく認識しないなら、フォーマットの前に接続を確認してください。SD AssociationのFAQは、機器の説明書どおりにカードを入れたか確かめ、エラーメッセージを控え、カードのメーカーに問い合わせるよう案内しています。

## SD AssociationのフォーマットソフトでマイクロSDカードをフォーマットする方法

[SD Associationのフォーマットソフトの案内](https://www.sdcard.org/downloads/formatter/)は、OSに付属するフォーマットツールよりSD Memory Card Formatterを使うよう強く勧めています。OSのツールはSDカード向けに最適化されておらず、性能が下がる場合があると説明しています。

1. SD AssociationのサイトからWindows用かMac用のSD Memory Card Formatterをダウンロードしてインストールします。
2. microSDをリーダーのmicroSDの差し込み口かSDサイズのアダプタに入れ、パソコンかMacに接続します。
3. ソフトを開き、フォーマットするカードを選びます。名前と容量をもう一度確かめます。
4. フォーマットを実行します。

同じ案内によると、WindowsのBitLocker To Goで暗号化したカードには対応していません。先にロックを解除してからフォーマットしてください。

## iPhoneでマイクロSDカードをフォーマットする方法

[Appleのファイルアプリの案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)によると、USB-C搭載のiPhoneは、ファイルアプリで外部ストレージのフォーマットを変更できます。

1. microSDをリーダーに入れ、リーダーをiPhoneに接続します。カードは一方向にしか入らないので、無理に押し込まないでください。
2. ファイルアプリを開き、「ブラウズ」をタップします。
3. 「場所」の下のカードの名前を長押しし、「消去」をタップします。
4. フォーマットの一覧で「ExFAT」か「MS-DOS(FAT)」を選び、もう一度「消去」をタップします。

32GBを超えるカードはExFAT、32GB以下のカードはMS-DOS(FAT)を選んでください。LightningのiPhoneはこの案内の対象外なので、MacかWindowsパソコンを使ってください。iPhoneに合うリーダーの条件は[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にあります。

## MacでマイクロSDカードをフォーマットする方法

Macではディスクユーティリティを使います。[AppleのWindows用フォーマットの案内](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)に沿った手順です。パーティションが複数あるカードにもこの方法を使います。

1. 「アプリケーション」の「ユーティリティ」フォルダからディスクユーティリティを開きます。
2. メニューで「表示」>「すべてのデバイスを表示」を選びます。
3. サイドバーでカードの最上位の項目を選び、消去ボタンをクリックします。
4. 「方式」でパーティション方式を選びます。
5. 「フォーマット」で、32GB以下のカードは「MS-DOS(FAT)」、32GBを超えるカードは「ExFAT」を選びます。
6. 名前を入力します。名前は11文字まで使えます。
7. 「消去」をクリックし、「完了」をクリックします。

[Appleのディスクユーティリティの案内](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)によると、「方式」のメニューが表示されない場合は、最上位の項目を選んでいません。

## WindowsでマイクロSDカードをフォーマットする方法

Windowsではエクスプローラーからフォーマットします。

1. microSDを入れたリーダーをパソコンに接続し、エクスプローラーで「PC」を開きます。
2. カードのドライブを右クリックし、「フォーマット」を選びます。
3. 「ファイルシステム」で、32GB以下のカードは「FAT32」、32GBを超えるカードは「exFAT」を選びます。
4. 「ボリュームラベル」に名前を入力します。
5. 「開始」をクリックして確認します。

コマンドプロンプトでは`format E: /FS:exFAT /V:MICROSD`のように入力します。Eは例なので、お使いのカードのドライブ文字に置き換えてください。文字を間違えると別のドライブが消えます。

`/Q`を付けるとクイックフォーマットになります。[Microsoftのformatコマンドの案内](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)では、不良セクターがない場合にだけこのオプションを使うよう説明しています。ほかの機器でエラーが出ていたカードなら、クイックフォーマットをオフにしてください。

Windowsのフォーマットは1つのドライブ文字にだけ適用されます。パーティションが複数あるカードは、SD AssociationのフォーマットソフトかMacのディスクユーティリティを使ってください。

## マイクロSDカードのフォーマット後にiPhoneで確認する方法

カードを入れたリーダーをiPhoneに接続し、ファイルアプリの「ブラウズ」画面で「場所」を確認します。カードの名前が表示されれば、ファイルをコピーできます。「場所」が表示されないときは、もう一度「ブラウズ」をタップします。

写真をカードに移す手順は[iPhoneからSDカードに写真を移す方法](/blog/ja/iphone-photos-to-sd-card)にあります。

## USBメモリに定期的にバックアップするには?

下のアプリはUSBメモリを前提に案内しています。カードリーダーでの動作は確認していません。USBメモリの形式を変える手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## マイクロSDカードフォーマット方法のよくある質問

### マイクロSDカードをフォーマットするとデータは消えますか?

消えます。Appleの案内にも、ストレージデバイスを消去するとすべての内容が削除されると書かれています。残したいファイルはフォーマット前に別の場所へコピーしてください。

### microSDとSDカードは同じ形式でフォーマットしますか?

同じです。SD AssociationのFAQによると、両者はサイズや形状などが違うだけで、内部の論理は同じです。容量の規格に合わせてFAT32かexFATを選んでください。

### 64GBのmicroSDはFAT32とexFATのどちらが合いますか?

32GBを超えるmicroSDXCの標準はexFATです。FAT32しか読めない機器に挿すカードでなければ、exFATにフォーマットしてください。

### スマホで使っていたmicroSDがiPhoneに表示されないときは?

カードの形式がAppleの一覧にあるか、データパーティションが1つかを確認してください。どちらかが合わなければ、データを移してからフォーマットし直します。

### フォーマットソフトは必ず使うべきですか?

SD Associationは専用ソフトの使用を強く勧めています。OSのツールでもフォーマットはできますが、SDカード向けに最適化されておらず、性能が下がる場合があると説明しています。
