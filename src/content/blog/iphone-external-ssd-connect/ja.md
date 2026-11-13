---
title: "iPhone 外付けSSDの使い方:ケーブル、形式、電源、速度の確認"
description: "iPhoneで外付けSSDを使う方法を、必要なケーブルとアダプタ、iPhoneが読める形式、電源が足りないときの対処、モデル別の転送速度の順に、Appleの案内をもとにまとめました。"
date: 2026-11-13
---

## この記事の要点

iPhoneでの外付けSSDの使い方は、SSDを充電ポートに接続してファイルアプリで開くだけです。USB-CのiPhoneはUSB-Cケーブルでつなぎ、LightningのiPhoneはカメラアダプタを使います。

SSDはデータパーティションが1つで、Appleの一覧にある形式である必要があります。NTFSは一覧にありません。

USB 3の速度に対応するのは一部のProモデルだけです。iPhoneに付属のケーブルはUSB 2の速度なので、速く転送するには別にUSB 3ケーブルが必要です。

「SSDを挿してもiPhoneに表示されない」「動画のコピーが思ったより遅い」。iPhoneに外付けSSDを初めてつなぐと、こうしたことが起こります。この記事では、接続前にそろえる条件、接続の手順、表示されないときの確認項目を順にまとめます。

## iPhoneで外付けSSDを使うには何が必要ですか?

iPhoneのポートで接続方法が決まります。[Appleの案内](https://support.apple.com/en-us/105099)によると、iPhone 15以降のモデルはUSB-Cコネクタです。それより前のモデルはLightningです。

| iPhoneのポート | 接続方法 | 根拠 |
| --- | --- | --- |
| USB-C | SSDのポートがUSB-Cなら、両端がUSB-Cのケーブルでつなぎます | [AppleのUSB-Cの案内](https://support.apple.com/en-us/105099) |
| Lightning | Lightning - USB 3カメラアダプタかLightning - USBカメラアダプタを使います | [Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |

Appleは、USB-C規格に準拠していないデバイスやケーブルは正しく動作しない場合があると説明しています。この記事では特定のSSDやケーブルを試しておらず、おすすめもしません。アダプタの種類は[iPhoneのOTG接続条件](/blog/ja/iphone-otg-usb)で詳しく紹介しています。

## iPhoneはどの形式の外付けSSDを読めますか?

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)によると、外部ストレージはデータパーティションが1つでなければなりません。形式は次のいずれかです。

| 形式 | iPhone | 一緒に使いやすい機器 |
| --- | --- | --- |
| APFS、APFS(暗号化)、macOS拡張(HFS+) | 読めます | iPhone、Mac |
| exFAT | 読めます | iPhone、Mac、Windows |
| FAT32、FAT | 読めます | 古い機器まで。1ファイルは4GiBを超えられません |
| NTFS | 一覧にありません | Windows |

FAT32のファイルサイズの上限は[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。同じ表で、exFATの1ファイルの最大サイズは2^64-1バイトです。Windowsパソコンと共用し、長い動画も移すSSDならexFATが合っています。

新しいSSDの形式は製品によって異なる場合があります。接続前にMacかパソコンで形式とパーティションの数を確認してください。形式を変える手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。USBメモリを例にしていますが、iPhoneのファイルアプリとMacのディスクユーティリティの手順は外付けSSDでも同じです。

## iPhoneに外付けSSDを接続する手順

[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)に沿った手順です。

1. SSDがデータパーティション1つで、Appleの一覧にある形式か確認します。
2. SSDに残したいデータがあれば、形式を変える前に別の場所へコピーします。
3. iPhoneのポートに合うケーブルかアダプタを用意します。
4. ケーブルかアダプタをiPhoneの充電ポートに挿し、SSDをつなぎます。
5. ファイルアプリを開いて「ブラウズ」をタップし、「場所」の下のSSDの名前をタップします。
6. 使い終わったら、SSDを充電ポートから外します。

「場所」が表示されないときは、もう一度「ブラウズ」をタップしてください。SSDの名前を長押しすると、名前の変更、消去、情報を見るを選べます。出典は[Appleのファイル転送の案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)です。

## iPhoneで外付けSSDを使うと電源は別に必要ですか?

Appleの案内では、外付けハードドライブはiPhoneで使うときに外部電源が必要な場合が多いと説明しています。外付けSSDについての個別の基準はAppleの案内にありません。SSDがつながらない、接続がよく切れるといったときは、次の方法で電源を足して試してください。

| iPhoneのポート | Appleの案内にある電源の足し方 |
| --- | --- |
| USB-C | 電源付きのUSBハブを経由して接続します |
| Lightning | Lightning - USB 3カメラアダプタにUSB電源アダプタをつなぎます |

出典は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)です。この記事ではSSDごとの消費電力を測っていません。メーカーの仕様に外部電源の条件があれば、それに従ってください。

## iPhoneの外付けSSDの転送速度はどのくらいですか?

モデルとケーブルで速度が決まります。[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)と[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)をまとめた表です。

| iPhone | 規格上の最大 | 条件 |
| --- | --- | --- |
| iPhone 15 Pro、16 Pro、17 Pro、18 Proの各モデル、iPhone Duo | USB 3.2 Gen 2、最大10Gbit/s | 10Gbit/sに対応するUSB 3ケーブルを別に使います |
| そのほかのUSB-C iPhone | USB 2 | 付属のケーブルもUSB 2の速度です |
| LightningのiPhone | USB 2 | アダプタにかかわらずUSB 2の速度です |

この数値は規格上の最大値です。この記事では実際の転送速度を測っていません。大きな動画を移す手順は[iPhoneの動画をUSBに移す方法](/blog/ja/iphone-videos-to-usb)をご覧ください。

## iPhoneに外付けSSDが表示されないときは?

Appleの案内の内容を、確認する順にまとめました。

| 順番 | 確認すること | やること |
| --- | --- | --- |
| 1 | ファイルアプリの画面 | もう一度「ブラウズ」をタップして「場所」を開きます |
| 2 | ケーブルとアダプタ | USB-C規格に準拠したケーブルか確かめ、別のケーブルに替えて試します |
| 3 | 電源 | 電源付きハブか、USB 3カメラアダプタと電源アダプタでつなぎ直します |
| 4 | 形式とパーティション | Macかパソコンで確認します。NTFSやパーティションが複数ならフォーマットし直します |
| 5 | 別のストレージ | 別のSSDやUSBメモリで試し、原因がSSDかiPhoneかを切り分けます |

Appleは、一部のUSB-Cアクセサリやケーブルがワイヤレス接続(Wi-Fiやモバイル通信)を妨げることがあると説明しています。SSDの接続中に通信が遅くなったら、使い終わった時点で外すか、別のケーブルを試してください。出典は[AppleのUSB-Cの案内](https://support.apple.com/en-us/105099)です。

## 外付けSSDとUSBメモリは何が違いますか?

iPhoneが読める形式とファイルアプリの手順は同じです。接続方法が違います。

| 項目 | 外付けSSD | USBメモリ |
| --- | --- | --- |
| 接続 | ポートに合うケーブルかアダプタでつなぎます | USB-CのUSBメモリはUSB-CのiPhoneに直接挿せます |
| 形式 | Appleの一覧にある形式、データパーティション1つ | 同じです |
| 開くアプリ | ファイルアプリ | 同じです |

USBメモリの接続、形式、容量は[iPhone USBメモリ総まとめ](/blog/ja/iphone-usb-drive-guide)にまとめました。カードリーダーを使う場合は[iPhone SDカード総まとめ](/blog/ja/iphone-sd-card-guide)をご覧ください。

## USBメモリに定期的に保存するには?

次のアプリはUSBメモリを前提に紹介します。外付けSSDでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備中で、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定を保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## iPhoneの外付けSSDのよくある質問

### LightningのiPhoneでも外付けSSDを使えますか?

使えます。Appleの案内どおり、Lightning - USB 3カメラアダプタかLightning - USBカメラアダプタを使います。転送速度はUSB 2です。

### NTFSでフォーマットされたSSDはiPhoneで使えますか?

NTFSはAppleの外部ストレージの形式一覧にありません。iPhoneで使うなら、データを移してからexFATにフォーマットしてください。

### iPhoneに付属のケーブルでつないでもいいですか?

接続はできます。ただしAppleの案内によると、このケーブルはUSB 2の速度です。USB 3対応のProモデルで速く転送するなら、10Gbit/sに対応するUSB 3ケーブルを使ってください。

### 4GBを超える動画をSSDに保存するには?

exFATかAPFSを使ってください。FAT32は1ファイルが4GiBを超えられません。

### SSDの内容は暗号化されますか?

形式によります。Appleの一覧にはAPFS(暗号化)があります。[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATとFAT32はファイルシステムレベルの暗号化に対応していません。exFATのSSDをなくすと他の人が内容を見られるので、保管に気をつけてください。
