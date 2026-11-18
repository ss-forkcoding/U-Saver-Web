---
title: "How to Use a USB C SD Card Reader on iPhone, Mac, Windows, and Android"
description: "A USB C SD card reader plugs into a USB-C port, and each device opens the card in its own app. Here are the steps for the iPhone Files app, Mac Finder, Windows File Explorer, and Files by Google on Android, plus how to remove the reader safely, based on Apple, Microsoft, and Google guides."
date: 2026-11-19
---

## Key takeaways

A USB C SD card reader lets a device with a USB-C port read an SD card. Plug in the reader, insert the card, and open the card in the app your device uses. That's the Files app on iPhone, Finder on Mac, File Explorer on Windows, and Files by Google on Android.

Eject the card before you unplug it. Microsoft says to safely remove USB storage before disconnecting it to avoid losing data.

Transfer speed is limited by the slowest of three things: the card, the reader, and the USB speed of the device. iPhone USB speeds differ by model.

"I plugged in my USB-C reader and nothing popped up." "Can I just pull it out when I'm done?" These are common questions from people using a USB-C reader for the first time. How to pick a reader is covered in [how to choose an SD card reader](/blog/en/choose-sd-card-reader). This guide covers how to use the reader you already have, device by device.

## Which devices work with a USB C SD card reader?

Any device with a USB-C port. Apple's [USB-C to SD Card Reader product page](https://www.apple.com/shop/product/MW653AM/A/usb-c-to-sd-card-reader) says the reader transfers photos and videos at UHS-II speeds to a USB-C Mac, iPad, or iPhone. It works with UHS-II SD cards and is backward compatible with other SD cards and adapters.

| Device | Where to open the card | Source |
| --- | --- | --- |
| USB-C iPhone | Files app, Photos app | [Apple external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) |
| Mac | Locations in the Finder sidebar | [Apple Mac storage guide](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac) |
| Windows PC | File Explorer | [Microsoft safe removal guide](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369) |
| Android | Storage devices in Files by Google | [Google USB storage guide](https://support.google.com/files/answer/9301516?hl=en) |

A Lightning iPhone can't take a USB-C reader directly. Readers and adapters for the Lightning port are in [Does iPhone support OTG?](/blog/en/iphone-otg-usb)

## How to use a USB C SD card reader on iPhone

These steps follow [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios).

1. Plug the reader into the USB-C charging port on your iPhone.
2. Insert the SD card into the reader. It fits only one way, so don't force it.
3. Open the Files app and tap Browse.
4. Tap the card's name under Locations. If you don't see Locations, tap Browse again.
5. When you're done, remove the reader from the charging port.

Photos and videos from a camera can go straight into the Photos app. The import steps and fixes are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

The card must have a single data partition formatted as APFS, macOS Extended (HFS+), exFAT, FAT32, or FAT. NTFS isn't on the list. To change the format, see [how to format an SD card](/blog/en/format-sd-card).

## How to use a USB C SD card reader on Mac

These steps follow [Apple's Mac storage guide](https://support.apple.com/guide/mac-help/connect-storage-devices-mac-mchl027f1d66/mac).

1. Plug the reader into a USB-C port on your Mac and insert the card.
2. Open Finder from the Dock.
3. Select the card under Locations in the sidebar.
4. Drag files to a folder on your Mac. To copy Mac files to the card, drag them onto the card's name.
5. Click the Eject button next to the card's name, or select the card and choose File > Eject.
6. Unplug the reader once the card disappears from the sidebar.

If the card won't eject, another app or user may be using a file on it. The same guide links to fixes for that case. If your Mac has an SD slot, check whether you need a reader at all in [how to choose an SD card reader](/blog/en/choose-sd-card-reader).

## How to use a USB C SD card reader on Windows

1. Plug the reader into a USB-C port on your PC and insert the card.
2. Open File Explorer, find the card's drive, and copy your files.
3. In the system tray, right-click the Safely Remove Hardware and Eject Media icon. If you don't see it, select Show hidden icons first.
4. Select Eject for the card's drive.
5. When the Safe To Remove Hardware notification appears, unplug the reader.

Steps 3 to 5 come from [Microsoft's safe removal guide](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369), which covers Windows 11 and Windows 10. If the icon still doesn't appear, the same guide shows how to turn it on in taskbar settings.

## How to use a USB C SD card reader on Android

[Google's Files by Google guide](https://support.google.com/files/answer/9301516?hl=en) says USB storage works only on Android 7.0 (Nougat) and up.

1. Plug the reader into your phone's USB-C port and insert the card.
2. Open Files by Google.
3. When the "USB available" notification appears, tap the storage device, then tap Allow. If the notification doesn't open, remove the reader and try again.
4. Under Storage devices, tap the card to find your files.
5. Tap the Down arrow next to a file, choose Copy to or Move to, pick a location, then tap Copy here or Move here.

Menu names can differ by phone maker. This guide didn't check each manufacturer's screens.

## What limits USB C SD card reader speed?

The slowest of three parts sets the speed.

| Part | What to check |
| --- | --- |
| Card | Bus interface such as UHS-I or UHS-II, and its speed markings |
| Reader | Which bus interface the reader supports |
| Device | USB speed of the USB-C port |

[Apple's USB-C iPhone guide](https://support.apple.com/en-us/105099) says iPhone 15 Pro, 16 Pro, 17 Pro, and 18 Pro models and iPhone Duo support USB 3.2 Gen 2 at up to 10 Gbit/s. [Apple's camera adapter guide](https://support.apple.com/en-us/118280) says devices and adapters not on its USB 3 list use USB 2 speeds.

A UHS-I card in a UHS-II reader still reads at UHS-I performance. The bus differences are in the [UHS SD card guide](/blog/en/uhs-sd-card). This guide didn't measure real-world speeds for any reader.

## What should you check if the card doesn't show up?

| Step | Check | What to do |
| --- | --- | --- |
| 1 | Card direction | Remove the card, check its direction, and reinsert it |
| 2 | Reader connection | Unplug the reader and plug it back in |
| 3 | Card size | Use a microSD slot or an SD adapter for microSD |
| 4 | Capacity standard | Put SDXC cards in a reader that supports SDXC or higher |
| 5 | File system | An iPhone can't read an NTFS card |

microSD and adapters are covered in [micro SD card and SD card](/blog/en/microsd-vs-sd), and capacity standards in [SDHC card vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc). If it still doesn't work, follow [SD card corrupted or not recognized?](/blog/en/sd-card-not-working)

## How do you save iPhone photos to a USB flash drive?

The app below is described for USB flash drives. Connection requirements are in [flash drive for iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and drives saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: USB C SD card reader

### I plugged in the reader and nothing popped up on my iPhone.

That's normal. Apple's guide says to tap Browse in the Files app and then tap the card's name under Locations. Import photos from the Photos app.

### Can I just unplug the reader when I'm done?

On Mac and Windows, eject first. Microsoft says to safely remove hardware before disconnecting it to avoid losing data. For iPhone, Apple's guide only says to remove the reader from the charging port. Wait until any copy progress disappears, then unplug it.

### Can I use a USB-C reader with a Lightning iPhone?

Not directly. For Lightning iPhones, Apple lists the Lightning to SD Card Camera Reader.

### Will a UHS-II reader give UHS-II speeds on iPhone?

Not guaranteed. The iPhone's USB speed limits the transfer. In Apple's guide, iPhone models not on the USB 3 list use USB 2 speeds.

### Is the content on my SD card encrypted?

[Microsoft's comparison table](https://learn.microsoft.com/en-us/windows/win32/fileio/filesystem-functionality-comparison) lists no file system level encryption for exFAT. If you lose the card, someone else can read it, so store it carefully.
