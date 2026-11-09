---
title: "exFATフォーマット方法:USBメモリをiPhone・Mac・Windowsで変更する手順"
description: "USBメモリのexFATフォーマット方法を、iPhoneのファイルアプリ、Macのディスクユーティリティ、Windowsの順にまとめました。事前の確認項目とFAT32との違いも解説します。"
date: 2026-11-10
---

## この記事の要点

exFATフォーマットは、USBメモリの保存形式をexFATに変える作業です。フォーマットするとUSBメモリのデータはすべて消えるので、先に別の場所へコピーします。

USB-CのiPhoneはファイルアプリでフォーマットできます。LightningのiPhoneなら、MacかWindowsパソコンでフォーマットします。

FAT32は4GBを超えるファイルを保存できません。長い動画をUSBメモリに移すなら、exFATを選んでください。

「動画をコピーするとファイルが大きすぎると出る」「USBメモリを挿してもiPhoneに表示されない」。こうしたときに形式を確かめると、FAT32やNTFSになっていることがあります。exFATにフォーマットすると、どちらの問題も解決できます。

## なぜexFATにフォーマットするのですか?

exFATにはFAT32の4GBのファイル制限がなく、iPhone、Mac、Windowsで共通して使えます。

| 形式 | 1ファイルの最大サイズ | iPhoneの外部ストレージ |
| --- | --- | --- |
| exFAT | 2^64-1バイト | Appleの一覧にあります |
| FAT32 | 4GiB | Appleの一覧にあります |
| NTFS | 2^64-1バイト | Appleの一覧にありません |

ファイルサイズは[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によるものです。iPhoneで使える形式は[Appleの外部ストレージの案内](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios)に記載されています。

AppleはMacの案内で、Windowsと共用するディスクが32GB以下ならMS-DOS(FAT)、32GBを超えるならExFATを選ぶよう説明しています。32GB以下のUSBメモリでも、4GBを超える動画を保存するならexFATが合っています。

## フォーマットする前に何を確認しますか?

フォーマットするとUSBメモリ内のファイルはすべて消えます。次の3つを先に確認してください。

| 確認すること | やること |
| --- | --- |
| 残したいデータ | 別のストレージに先にコピーします |
| フォーマットする機器 | 名前と容量を見て、別のドライブを選んでいないか確かめます |
| パーティションの数 | Appleの案内どおり、データパーティションが1つか確かめます |

## iPhoneでUSBメモリをexFATにフォーマットする方法

[Appleのファイルアプリの案内](https://support.apple.com/guide/iphone/transfer-files-iphone-a-storage-device-iphe9aff429a/ios)によると、USB-C搭載のiPhoneはファイルアプリでフォーマットを変更できます。

1. USBメモリをiPhoneに接続します。
2. ファイルアプリを開き、「ブラウズ」をタップします。
3. 「場所」の下のUSBメモリの名前を長押しし、「消去」をタップします。
4. フォーマットの一覧で「ExFAT」を選び、もう一度「消去」をタップします。

同じ一覧にはAPFSとMS-DOS(FAT)もあります。WindowsパソコンやU-Saverで使うUSBメモリなら、ExFATを選んでください。

LightningのiPhoneはこの案内の対象外です。MacかWindowsパソコンでフォーマットしてください。USBメモリの接続に必要なアダプタは[iPhoneのOTG接続条件](/blog/ja/iphone-otg-usb)にまとめました。

## MacでUSBメモリをexFATにフォーマットする方法

Macではディスクユーティリティを使います。[Appleのディスクユーティリティの案内](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac)に沿った手順です。

1. 「アプリケーション」の「ユーティリティ」フォルダからディスクユーティリティを開きます。
2. メニューで「表示」>「すべてのデバイスを表示」を選びます。
3. サイドバーでUSBメモリの最上位の項目を選び、消去ボタンをクリックします。
4. 「方式」で「GUIDパーティションマップ」を選びます。
5. 「フォーマット」で「ExFAT」を選びます。
6. 名前を入力します。
7. 「消去」をクリックし、「完了」をクリックします。

「方式」のメニューが表示されない場合は、最上位の項目を選んでいません。[Windows用フォーマットの案内](https://support.apple.com/guide/disk-utility/format-a-disk-for-windows-computers-dskutl1010/mac)によると、名前は11文字まで使えます。

## WindowsでUSBメモリをexFATにフォーマットする方法

Windowsではエクスプローラーからフォーマットします。

1. USBメモリをパソコンに接続し、エクスプローラーで「PC」を開きます。
2. USBドライブを右クリックし、「フォーマット」を選びます。
3. 「ファイルシステム」で「exFAT」を選びます。
4. 「ボリュームラベル」に名前を入力します。
5. 「開始」をクリックして確認します。

クイックフォーマットはファイルの一覧を消し、不良領域の検査を省きます。[Microsoftの案内](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format)では、状態がよいとわかっているドライブにだけ使うよう説明しています。USBメモリでエラーが頻発するなら、クイックフォーマットをオフにしてください。

コマンドプロンプトでは`format E: /FS:exFAT /Q /V:BACKUP`のように入力します。Eは例なので、お使いのUSBメモリのドライブ文字に置き換えてください。文字を間違えると別のドライブが消えます。

Windowsのフォーマットはドライブ文字1つにだけ適用されます。パーティションが複数あるUSBメモリは、「ディスクの管理」で既存のボリュームを削除し、新しいボリュームを1つ作ってください。

## exFATフォーマット後にiPhoneで確認する方法

USBメモリをiPhoneに接続し、ファイルアプリの「ブラウズ」画面で「場所」を確認します。USBメモリの名前が表示されれば、ファイルをコピーできます。手順は[iPhone用USBメモリの使い方](/blog/ja/iphone-flash-drive-guide)にあります。

名前が表示されないときは、電力が足りないかアダプタが合っていない可能性があります。長い動画を移す手順は[iPhoneの動画をUSBに移す方法](/blog/ja/iphone-videos-to-usb)をご覧ください。

## U-SaverにはどのUSBメモリの形式が必要ですか?

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリです。USBメモリの形式はexFATかFAT32にしてください。APFSとNTFSのUSBメモリは使えません。4GBを超える動画も保存するなら、exFATにフォーマットしてください。

U-SaverはApp Storeでの公開を準備しており、iOS 26以降で使います。韓国での価格は4,900ウォンの買い切りです。メッセージ、アプリのデータ、iPhoneの設定は保存しません。USBメモリの内容は暗号化されないので、保管には注意してください。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## exFATフォーマットのよくある質問

### exFATにフォーマットするとUSBメモリのデータは消えますか?

消えます。Appleの案内にも、ストレージデバイスを消去するとすべての内容が削除されると書かれています。残したいファイルはフォーマット前に別の場所へコピーしてください。

### FAT32のUSBメモリをフォーマットせずにexFATに変えられますか?

この記事で紹介したiPhone、Mac、Windowsの方法はいずれもフォーマットです。データを別の場所に移してからフォーマットし、コピーし直してください。

### NTFSのUSBメモリはiPhoneで使えますか?

NTFSはAppleの外部ストレージの形式一覧にありません。iPhoneで使うならexFATにフォーマットしてください。

### LightningのiPhoneでもフォーマットできますか?

Appleの案内にあるファイルアプリでのフォーマットは、USB-CのiPhoneが対象です。LightningのiPhoneならMacかWindowsパソコンを使ってください。

### exFATのUSBメモリは暗号化されますか?

Microsoftの比較表では、exFATはファイルシステムレベルの暗号化に対応していません。USBメモリをなくすと他の人が内容を見られるので、保管場所に気をつけてください。
