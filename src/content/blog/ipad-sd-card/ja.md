---
title: "iPad SDカードの使い方:カードリーダーの接続、写真の読み込み、ファイルのコピー"
description: "iPadでSDカードを使うには、カードリーダーを充電ポートに挿して写真アプリとファイルアプリで扱います。必要なアダプタ、カードの形式、写真の読み込みと書き出し、表示されないときの確認手順をAppleの案内をもとにまとめました。"
date: 2026-11-21
---

## この記事の要点

iPadにはSDカードスロットがありません。iPadでSDカードを使うには、カードリーダーを充電ポートに挿します。カメラの写真は写真アプリで読み込み、書類などのファイルはファイルアプリでコピーします。

カードはデータパーティションが1つで、APFS、macOS拡張(HFS+)、exFAT、FAT32、FATのいずれかでフォーマットされている必要があります。NTFSは一覧にありません。

読み込みの画面が出ないときは、リーダーとカードを外して30秒後に接続し直します。それでも直らなければ、iPadを再起動して別のカードで試します。

「iPadにカードを挿す場所が見当たらない」「カメラの写真をすぐiPadで見たい」。iPadで初めてSDカードを使う人がよく口にする悩みです。接続方法と使うアプリは、iPhoneとほぼ同じです。iPhoneでの使い方は[SDカードリーダーのiPhoneでの使い方](/blog/ja/iphone-sd-card-reader)にまとめました。

## iPadとSDカードはどうつなぎますか?

[AppleのiPad外部ストレージの案内](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados)によると、SDカードリーダーはiPadの充電ポートに接続します。ポートの種類によって使うアダプタが変わります。

| iPadのポート | Appleの案内にあるリーダー・アダプタ |
| --- | --- |
| USB-C | USB-C to SD Card Camera Reader |
| Lightning | Lightning to SD Card Camera Reader、Lightning to USB Camera Adapter、Lightning to USB 3 Camera Adapter |

いずれも別売りです。カードの向きは1方向だけなので、無理に押し込まないでください。USB-Cのリーダーを選ぶときの確認点は、[USB-C SDカードリーダーの使い方](/blog/ja/usb-c-sd-card-reader)と[SDカードリーダーの選び方](/blog/ja/choose-sd-card-reader)にあります。

この記事では他社製のカードリーダーを試していません。他社製のリーダーを使う場合は、接続後にファイルアプリの「場所」にカードが表示されるかを先に確認してください。

## iPadで使えるSDカードの種類と形式は?

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)には、iPhoneとiPadで共通の対応一覧があります。

| 項目 | Appleの案内の対応一覧 |
| --- | --- |
| カード | SDSC、SDHC、SDXC、miniSD、microSD、MMC |
| 転送方式 | PTP(画像転送プロトコル)、マスストレージデバイスプロトコル |
| フォーマット | APFS、APFS(暗号化)、macOS拡張(HFS+)、exFAT、FAT32、FAT |

フォーマットの一覧は[AppleのiPad外部ストレージの案内](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados)によるものです。データパーティションは1つにしてください。

カメラやパソコンと共用するカードなら、exFATが扱いやすい形式です。[Microsoftのファイルシステム比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)によると、FAT32は1ファイルが4GiBを超えられません。長い動画を入れるならexFATにフォーマットしてください。手順は[exFATフォーマット方法](/blog/ja/format-usb-exfat)にあります。

## iPadにSDカードの写真を読み込む方法は?

[AppleのiPad写真の読み込みの案内](https://support.apple.com/guide/ipad/import-and-export-photos-and-videos-ipad99c6eb3e/ipados)に沿った手順です。

1. リーダーをiPadのLightningまたはUSB-Cコネクタに差し込みます。
2. SDカードをリーダーに入れます。
3. 写真アプリを開き、「読み込む」をタップします。
4. 読み込む写真とビデオを選び、読み込み先を選びます。
5. すべて読み込むなら「すべてを読み込む」をタップします。一部だけなら項目をタップしてチェックマークを付け、「読み込む」、「選択項目を読み込む」の順にタップします。
6. 終わったら、カードの元データを残すか削除するかを決めます。
7. リーダーを外します。

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)は、iOS 18での手順として、写真アプリの「コレクション」から「デバイス」までスクロールしてカードをタップする方法も説明しています。「デバイス」がなければ最新バージョンにアップデートするよう案内しています。

## iPadの写真をSDカードに書き出すには?

同じ[Appleの案内](https://support.apple.com/guide/ipad/import-and-export-photos-and-videos-ipad99c6eb3e/ipados)に書き出しの手順もあります。

1. カードを入れたリーダーをiPadに接続します。
2. 写真アプリで書き出す写真とビデオを選びます。
3. 共有ボタンをタップし、「未編集のオリジナルを書き出す」をタップします。
4. 「場所」の下のカード名をタップし、「保存」をタップします。

編集した写真は、編集前のオリジナルが保存されます。「非表示」アルバムがロックされていると、その中の写真は移されません。ロックを解除するには、「設定」>「アプリ」>「写真」でFace ID、Touch ID、パスコードの使用をオフにします。iPhoneでの手順は[iPhoneからSDカードに写真を移す方法](/blog/ja/iphone-photos-to-sd-card)にあります。

## ファイルアプリでSDカードのファイルをコピーする方法

写真アプリに出てこないPDF、書類、圧縮ファイルは、ファイルアプリで扱います。[AppleのiPad外部ストレージの案内](https://support.apple.com/guide/ipad/external-storage-devices-ipad75b7b23f/ipados)と[ファイル整理の案内](https://support.apple.com/guide/ipad/organize-files-and-folders-ipadeb120505/ipados)に沿った手順です。

1. ファイルアプリを開き、「ブラウズ」をタップします。
2. 「場所」の下のカード名をタップします。「場所」が表示されないときは、もう一度「ブラウズ」をタップします。
3. 移すファイルを長押しし、「コピー」か「移動」を選びます。
4. 複数のファイルを移すときは、「選択」をタップしてファイルを選び、画面上部の「移動」をタップします。

カード名を長押しすると、名前の変更と「消去」のメニューが表示されます。[Appleのファイル転送の案内](https://support.apple.com/guide/ipad/transfer-files-ipad-a-storage-device-server-ipad8139864c/ipados)によると、USB-CのiPadは「消去」でAPFS、ExFAT、MS-DOS(FAT)のいずれかにフォーマットできます。消去するとカードのデータはすべて削除されます。

使い終わったら、コピーが終わったことを確認してから、リーダーを充電ポートから外します。Appleの案内は充電ポートから外す方法だけを説明しています。

## iPadでSDカードが表示されないときは何を確認しますか?

[Appleのカメラアダプタの案内](https://support.apple.com/en-us/118280)の手順です。

| 順番 | 確認すること | やること |
| --- | --- | --- |
| 1 | ソフトウェアのバージョン | 「デバイス」がなければ最新バージョンにアップデートします |
| 2 | リーダーの接続 | リーダーを外し、30秒後に接続し直します |
| 3 | カードの接続 | カードを抜き、30秒後に入れ直します |
| 4 | iPad | iPadを再起動します |
| 5 | 別のカード | 別のカードで試します。別のカードで読み込めれば、元のカードのデータを疑います |

別のカードは読み込めて元のカードだけが読み込めない場合、Appleはまず別の機器やパソコンにデータを取り込み、そのあとカメラでカードをフォーマットするよう案内しています。フォーマットするとカードの写真はすべて消えます。カード自体が怪しいときは、先に[SDカードが読み込めないときの対処法](/blog/ja/sd-card-not-working)をご覧ください。

一部のファイルだけ表示されないこともあります。同じAppleの案内によると、カメラアダプタはデジタルカメラで撮影したコンテンツだけを読み込みます。名前を変えたファイル、編集したファイル、カードにコピーしたファイルは写真アプリに読み込めないことがあります。こうしたファイルは、ファイルアプリでカードを開いてコピーしてみてください。

## iPhoneの写真をUSBメモリに保存するには?

次のアプリはiPhoneとUSBメモリを前提に案内します。iPadとカードリーダーでの動作は確認していません。

NextGenAIが作ったU-Saverは、一般的なUSBメモリに写真、ビデオ、連絡先を保存するアプリで、exFATかFAT32のUSBメモリを使い、iOS 26以降で動作します。U-SaverはApp Storeでの公開を準備しており、韓国での価格は4,900ウォンの買い切りです。U-Saverはメッセージ、アプリのデータ、iPhoneの設定は保存せず、U-Saverで保存したUSBメモリの内容は暗号化されません。購入前に[U-Saverを使う前に確認したい6つのこと](/blog/ja/before-you-buy)をご確認ください。

## iPad SDカードのよくある質問

### リーダーを挿しても何も表示されません。

Appleの案内には、接続するとウインドウが開くという説明はありません。写真アプリの「読み込む」か、ファイルアプリの「場所」でカードを探してください。

### microSDカードも使えますか?

Appleのカメラアダプタの案内の対応一覧にmicroSDがあります。お使いのリーダーにmicroSDの差込口があるか確認してください。サイズの違いは[microSDとSDカードの違い](/blog/ja/microsd-vs-sd)にまとめました。

### 転送速度はどのくらいですか?

Appleのカメラアダプタの案内では、Lightning to USB 3 Camera Adapterを使うと、iPad Pro 12.9インチ(第1世代、第2世代)とiPad Pro 10.5インチはUSB 3の速度で転送するとしています。それ以外のアダプタと機器はUSB 2の速度とされています。この記事では実際の速度を測っていません。

### iPadでSDカードをフォーマットできますか?

Appleのファイル転送の案内によると、USB-CポートのあるiPadはファイルアプリでフォーマットできます。カメラで使うカードなら、Appleはカメラでフォーマットするよう案内しています。フォーマットするとカードのデータはすべて消えます。

### SDカードの内容は暗号化されますか?

[Microsoftの比較表](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison)では、exFATはファイルシステムレベルの暗号化に対応していません。カードをなくすと他の人が内容を見られるので、保管に注意してください。
