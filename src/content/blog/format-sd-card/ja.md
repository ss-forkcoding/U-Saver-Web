---
title: "SDカードフォーマット方法:容量別の形式選びとiPhone・Mac・Windowsの手順"
description: "SDカードのフォーマット方法を、iPhoneのファイルアプリ、Macのディスクユーティリティ、Windows、SD Associationのフォーマットソフトの順にまとめました。容量別にFAT32とexFATのどちらを選ぶかも解説します。"
date: 2026-11-12
---

## この記事の要点

SDカードのフォーマット方法は機器ごとに違いますが、流れは同じです。カードのデータを別の場所にコピーし、容量に合う形式を選んでからフォーマットします。フォーマットするとカードのデータはすべて消えます。

SD Associationは、32GB以下のSDHCカードはFAT32、32GBを超えるSDXCカードはexFATを標準の形式と定めています。iPhoneはどちらの形式も読み込めます。

SD Associationは、OSに付属するフォーマットツールより、専用のSD Memory Card Formatterを使うよう勧めています。iPhoneだけで使うカードなら、USB-CのiPhoneのファイルアプリでもフォーマットできます。

「カメラで使っていたカードをiPhoneで開けない」「SDカードをFAT32にフォーマットしたいのに項目がない」。SDカードのフォーマットを調べる方からよく聞く質問です。この記事では、カードの容量に合う形式の選び方から機器別の手順までを扱います。

## SDカードをフォーマットする前に何を確認しますか?

フォーマットするとカード内のファイルはすべて消えます。次の3つを先に確認してください。

| 確認すること | やること |
| --- | --- |
| 残したいデータ | 別のストレージに先にコピーします |
| フォーマットする機器 | カードの名前と容量を見て、別のドライブを選んでいないか確かめます |
| カードに書かれた規格 | SD、SDHC、SDXCのどれかを見て形式を選びます |

カードの写真を先にiPhoneに移すなら、[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)をご覧ください。

## SDカードは容量別にどの形式でフォーマットしますか?

SDカードは容量の規格ごとに標準のファイルシステムが決まっています。[SD Associationの規格案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。

| カードに書かれた規格 | 容量 | 標準のファイルシステム |
| --- | --- | --- |
| SD | 2GBまで | FAT12、FAT16 |
| SDHC | 2GB超〜32GB | FAT32 |
| SDXC | 32GB超〜2TB | exFAT |
| SDUC | 2TB超〜128TB | exFAT |

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、iPhoneはexFAT、FAT32、FAT、APFS、Mac OS拡張(HFS+)を読み込めます。データパーティションは1つである必要があります。NTFSはこの一覧にありません。

FAT32は4GBを超えるファイルを保存できません。[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、FAT32の最大ファイルサイズは4GiBです。長い動画を入れるカードならexFATを選んでください。

## SDカードをFAT32にフォーマットできますか?

32GB以下のSDHCカードはFAT32が標準なので、そのまま選べます。32GBを超えるSDXCカードは事情が違います。

| 環境 | 公式の案内 |
| --- | --- |
| SD Associationの規格 | 32GBを超えるSDXCカードの標準はexFATです |
| Macのディスクユーティリティ | MS-DOS(FAT)は32GB以下、32GBを超えるならExFATを選びます |
| Windowsのコマンドライン | FAT32でフォーマットできる上限が32GBから2TBに上がります(2026年4月のプレビュー更新) |

Macの基準は[AppleのWindows用フォーマットの案内](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)にあります。Windowsの変更は[KB5083631](https://support.microsoft.com/en-us/servicing/os/windows-11/2026/04/april-30-2026-kb5083631-os-builds-26200-8328-and-26100-8328-preview)に記載されており、パソコンによって適用の時期が異なる場合があります。詳しくは[USB FAT32フォーマットの方法](/blog/ja/format-usb-fat32)にまとめました。

64GB以上のカードをFAT32で使う理由は、一緒に使う機器がFAT32しか読めない場合だけです。それ以外は規格どおりexFATにフォーマットしてください。

## SD Associationのフォーマットソフトでフォーマットする方法

[SD Associationのフォーマットソフトの案内](https://www.sdcard.org/downloads/formatter/)によると、SD Memory Card FormatterはSD、SDHC、SDXC、SDUCカードをSDファイルシステム仕様に沿ってフォーマットします。OSのフォーマットツールはSDカード向けに最適化されておらず、性能が下がる場合があるとも書かれています。

1. SD AssociationのサイトからWindows用かMac用のSD Memory Card Formatterをダウンロードしてインストールします。
2. SDカードをカードリーダーに入れ、パソコンかMacに接続します。
3. ソフトを開き、フォーマットするカードを選びます。名前と容量をもう一度確かめます。
4. フォーマットを実行します。

このソフトは、カードの容量に合わせて規格の形式でフォーマットします。同じ案内によると、WindowsのBitLocker To Goで暗号化したカードには対応していないので、先に暗号化を解除してください。

## iPhoneでSDカードをフォーマットする方法

[Appleのファイルアプリの案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)は、外部ストレージの例としてUSBドライブとSDカードを挙げています。USB-C搭載のiPhoneは、ファイルアプリでフォーマットを変更できます。

1. SDカードをカードリーダーに入れ、リーダーをiPhoneに接続します。
2. ファイルアプリを開き、「ブラウズ」をタップします。
3. 「場所」の下のカードの名前を長押しし、「消去」をタップします。
4. フォーマットの一覧で「ExFAT」か「MS-DOS(FAT)」を選び、もう一度「消去」をタップします。

32GBを超えるカードはExFAT、32GB以下のカードはMS-DOS(FAT)を選んでください。LightningのiPhoneはこの案内の対象外なので、MacかWindowsパソコンを使ってください。microSDカードは[micro SDをiPhoneで使う方法](/blog/ja/iphone-microsd)でリーダーの条件を確認してください。

## MacでSDカードをフォーマットする方法

Macではディスクユーティリティを使います。[Appleのディスクユーティリティの案内](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)に沿った手順です。

1. 「アプリケーション」の「ユーティリティ」フォルダからディスクユーティリティを開きます。
2. メニューで「表示」>「すべてのデバイスを表示」を選びます。
3. サイドバーでSDカードの最上位の項目を選び、消去ボタンをクリックします。
4. 「方式」でパーティション方式を選びます。
5. 「フォーマット」で、32GB以下のカードは「MS-DOS(FAT)」、32GBを超えるカードは「ExFAT」を選びます。
6. 名前を入力します。名前は11文字まで使えます。
7. 「消去」をクリックし、「完了」をクリックします。

「方式」のメニューが表示されない場合は、最上位の項目を選んでいません。

## WindowsでSDカードをフォーマットする方法

Windowsではエクスプローラーからフォーマットします。

1. SDカードをパソコンに接続し、エクスプローラーで「PC」を開きます。
2. SDカードのドライブを右クリックし、「フォーマット」を選びます。
3. 「ファイルシステム」で、32GB以下のカードは「FAT32」、32GBを超えるカードは「exFAT」を選びます。
4. 「ボリュームラベル」に名前を入力します。
5. 「開始」をクリックして確認します。

コマンドプロンプトでは`format E: /FS:FAT32 /Q /V:CAMERA`のように入力します。Eは例なので、お使いのカードのドライブ文字に置き換えてください。文字を間違えると別のドライブが消えます。

`/Q`はクイックフォーマットです。[Microsoftのformatコマンドの案内](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)では、状態がよいとわかっているドライブにだけ使うよう説明しています。カードでエラーが頻発するなら、`/Q`を外すか、クイックフォーマットをオフにしてください。

## SDカードのフォーマット後にiPhoneで確認する方法

カードを入れたリーダーをiPhoneに接続し、ファイルアプリの「ブラウズ」画面で「場所」を確認します。カードの名前が表示されれば、ファイルをコピーできます。

写真をカードに移す手順は[iPhoneからSDカードに写真を移す方法](/blog/ja/iphone-photos-to-sd-card)にあります。名前が表示されないときは、[iPhoneでSDカードを使う方法](/blog/ja/iphone-sd-card-slot)の接続条件を確認してください。

## USBメモリに定期的にバックアップするには?

下のアプリはUSBメモリを前提に案内しています。カードリーダーでの動作は確認していません。USBメモリの形式を変える手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## SDカードフォーマット方法のよくある質問

### SDカードをフォーマットするとデータは消えますか?

消えます。Appleの案内にも、ストレージデバイスを消去するとすべての内容が削除されると書かれています。残したいファイルはフォーマット前に別の場所へコピーしてください。

### 64GBのカードでFAT32が選べないのはなぜですか?

32GBを超えるSDXCカードの標準はexFATで、AppleのMacの案内も32GBを超えるならExFATを勧めています。Windowsでは、2026年4月のプレビュー更新より前は、コマンドラインでのFAT32の上限が32GBでした。

### 128GBのSDカードはFAT32とexFATのどちらが合いますか?

SD Associationの規格では、32GBを超えるSDXCカードの標準はexFATです。FAT32しか読めない機器に挿すカードでなければ、exFATにフォーマットしてください。

### カメラでフォーマットしたカードはiPhoneで使えますか?

カードの形式がAppleの一覧にあり、データパーティションが1つなら、ファイルアプリで開けます。表示されないときは、Macかパソコンでカードの形式を確認してください。

### SD Associationのフォーマットソフトは必ず使うべきですか?

SD Associationは専用ソフトの使用を強く勧めています。OSのツールでもフォーマットはできますが、SDカード向けに最適化されておらず、性能が下がる場合があると説明しています。
