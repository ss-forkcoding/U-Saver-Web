---
title: "micro SDをiPhoneで使う方法:microSDカードの接続、写真の移動、形式の確認"
description: "micro SDをiPhoneで使うには、microSDを挿せるカードリーダーが必要です。必要なリーダー、容量別のカード形式、写真アプリとファイルアプリでの手順を、AppleとSD Associationの案内をもとにまとめました。"
date: 2026-11-12
---

## この記事の要点

micro SDをiPhoneで使うときは、カードをカードリーダーに入れてiPhoneの充電ポートに接続します。iPhoneにはカードスロットがありません。

Appleのカメラアダプタの案内の対応一覧にはmicroSDがあります。ただしmicroSDは通常のSDカードより小さいので、リーダーにmicroSDを挿す場所があるか先に確認します。

接続したら、写真アプリで写真やビデオを読み込んだり書き出したりし、ファイルアプリで書類などのファイルを移します。

「前のスマホで使っていたmicroSDをiPhoneで開ける?」「アクションカメラのカードの動画をiPhoneに移したい」。micro SDをiPhoneで使う方法を調べる人がよく抱く疑問です。通常のSDカードの接続は[iPhoneにSDカードは挿せる?](/blog/ja/iphone-sd-card-slot)にまとめました。この記事ではmicroSDで変わる点を扱います。

## iPhoneでmicro SDカードは使えますか?

使えます。[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)には、対応カードとしてSDSC、SDHC、SDXC、miniSD、microSD、MMCが記載されています。

接続はカードリーダーで行います。[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)は、SDカードリーダーを対応するコネクタやアダプタで充電ポートに接続するよう説明しています。

[SD AssociationのFAQ](https://www.sdcard.org/consumers/faq/)によると、microSDとSDカードの違いは形状、サイズ、ピンの数、書き込み禁止スイッチの有無だけです。内部のロジックと電子回路は同じです。そのためiPhoneでの使い方もSDカードと同じです。

## microSDとSDカードは何が違いますか?

いちばん大きな違いはサイズです。[SD Associationの規格の案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)の数値です。

| 種類 | サイズ | iPhoneに接続するとき |
| --- | --- | --- |
| SD | 32 x 24 x 2.1mm | SDを挿す場所があるリーダーに入れます |
| microSD | 11 x 15 x 1.0mm | microSDを挿す場所があるリーダーに入れます |

SDを挿す場所しかないリーダーには、microSDをそのまま入れられません。リーダーを買う前に、製品の説明でmicroSDを挿す場所があるか確認してください。この記事ではサードパーティ製のカードリーダーを試しておらず、特定の製品をおすすめしません。

## iPhoneのポート別に必要なリーダーは?

iPhone 15以降のモデルはUSB-C、それより前のモデルはLightningを使います。[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)には、接続できるデバイスとして「SDカードアダプタを使ったSDカード」が記載されています。

| iPhoneのポート | Appleの案内にあるリーダー | microSDで確認すること |
| --- | --- | --- |
| USB-C | USB-C - SDカードカメラリーダー | microSDを挿す場所があるか |
| Lightning | Lightning - SDカードカメラリーダー | microSDを挿す場所があるか |

リーダーの使い方の全体は[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にあります。

## micro SDカードはどの形式にする必要がありますか?

iPhoneはexFAT、FAT32、FAT、APFS、macOS拡張(HFS+)でフォーマットされたストレージを読めます。データパーティションは1つである必要があります。出典は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)です。

microSDも容量の規格ごとに標準のファイルシステムが決まっています。[SD Associationの規格の案内](https://www.sdcard.org/developers/sd-standard-overview/capacity-sd-sdhc-sdxc-sduc/)によるものです。

| カードの表記 | 容量 | 標準のファイルシステム | iPhoneの形式一覧 |
| --- | --- | --- | --- |
| microSD | 2GBまで | FAT12、FAT16 | FATとしてあります |
| microSDHC | 2GB超32GBまで | FAT32 | あります |
| microSDXC | 32GB超2TBまで | exFAT | あります |

FAT32は4GBを超えるファイルを保存できません。長い動画を移すならexFATのカードを使ってください。ほかの機器でNTFSにフォーマットしたカードはAppleの一覧にないので、フォーマットし直す必要があります。手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。フォーマットするとカードのデータはすべて消えます。

## iPhoneでmicroSDカードの中身を見る方法

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)に沿った手順です。

1. microSDカードをリーダーのmicroSDの場所に入れます。向きは1方向だけなので、無理に押し込まないでください。
2. リーダーをiPhoneのUSB-CまたはLightningコネクタに差し込みます。
3. ファイルアプリを開き、「ブラウズ」をタップします。
4. 「場所」の下のカードの名前をタップします。「場所」が表示されないときは、もう一度「ブラウズ」をタップします。
5. 使い終わったら、リーダーを充電ポートから外します。

ファイルをコピーしたり移動したりする手順は[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にまとめました。

## microSDの写真をiPhoneに読み込む方法

カメラやアクションカメラで使ったmicroSDの写真とビデオは、写真アプリで読み込みます。[Appleの写真の読み込みの案内](https://support.apple.com/guide/iphone/import-and-export-photos-and-videos-iph480caa1f3/ios)に沿った手順です。

1. カードを入れたリーダーをiPhoneに接続します。
2. 写真アプリを開き、「読み込む」をタップします。
3. 読み込む写真とビデオを選び、読み込み先を選びます。
4. 「すべてを読み込む」をタップするか、項目を選んで「読み込む」、「選択項目を読み込む」の順にタップします。
5. 終わったら、カードの写真を残すか削除するかを決めます。

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)によると、この方法で読み込めるのはデジタルカメラで撮影したコンテンツです。名前を変えた、編集した、またはカードにコピーしたファイルは読み込めないことがあります。こうしたファイルはファイルアプリでコピーしてみてください。

## iPhoneの写真をmicroSDカードに移す方法

同じAppleの案内は、接続したメモリカードに写真とビデオを書き出す方法も説明しています。

1. カードを入れたリーダーをiPhoneに接続します。
2. 写真アプリで移す写真とビデオを選びます。
3. 共有ボタンをタップし、「未編集のオリジナルを書き出す」をタップします。
4. 「場所」の下のカードをタップし、「保存」をタップします。

編集した写真は、編集前のオリジナルが書き出されます。「非表示」アルバムがロックされていると、その中の写真は転送されません。移す前に確認したい制限は[iPhoneからSDカードに写真を移す方法](/blog/ja/iphone-photos-to-sd-card)に詳しくあります。

## カードが表示されないときは何を確認しますか?

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)と外部ストレージの案内を合わせた手順です。

| 順番 | 確認すること | やること |
| --- | --- | --- |
| 1 | カードの場所 | microSDがリーダーのmicroSDの場所に奥まで入っているか見ます |
| 2 | リーダーの接続 | リーダーを外し、30秒待ってから接続し直します |
| 3 | カードの接続 | カードを抜き、30秒待ってから入れ直します |
| 4 | iPhone | iPhoneを再起動します |
| 5 | カードの形式 | Macかパソコンで形式とパーティションの数を確認します。NTFSはAppleの一覧にありません |
| 6 | 別のカード | 別のカードで読み込めれば、元のカードのデータに問題がある可能性があります |

## USBメモリに定期的にバックアップするには?

次のアプリはUSBメモリを前提に案内しています。カードリーダーでの動作は確認していません。USBメモリの接続と形式は[iPhone USBメモリ総まとめ](/blog/ja/iphone-usb-drive-guide)をご覧ください。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## micro SDをiPhoneで使う よくある質問

### iPhoneにmicroSDを直接挿せますか?

挿せません。iPhoneにはカードスロットがないので、microSDを挿す場所があるカードリーダーを充電ポートに接続します。

### SDを挿す場所しかないリーダーでmicroSDを読めますか?

microSDはSDの場所より小さく、そのままでは入りません。microSDをSDサイズにするアダプタもありますが、この記事ではその組み合わせを試していません。接続後、ファイルアプリの「場所」にカードが表示されるか確認してください。

### 128GBのmicroSDもiPhoneで使えますか?

SD Associationの規格では、32GBを超えるmicroSDXCカードの標準の形式はexFATです。exFATはAppleの外部ストレージの形式一覧にあります。

### Androidスマホで使っていたmicroSDをiPhoneで開けますか?

カードの形式がAppleの一覧にあり、データパーティションが1つなら、ファイルアプリで開けます。形式が合わないときは、データを別の場所に移してからフォーマットしてください。

### microSDカードの中身は暗号化されますか?

[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATはファイルシステムレベルの暗号化に対応していません。microSDは小さくてなくしやすいので、保管には注意してください。
