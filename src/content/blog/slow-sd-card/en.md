---
title: "Slow SD Card? What to Check First: Reader, Port, Fragmentation, and Formatting"
description: "A slow SD card is often caused by the reader, the port, fragmentation, or a Windows setting rather than the card itself. Learn how to make a copy first and narrow down the cause step by step, based on SD Association, Apple, and Microsoft documentation."
date: 2026-11-26
---

## Key takeaways

When you have a slow SD card, it's easy to blame the card. But speed depends on the card, the reader, and the device you connect it to. The slowest of the three limits the whole transfer.

First, copy the photos and videos on the card somewhere else. Then check the reader, the port, and the Windows removal policy. Leave formatting, which erases the card, for last.

The SD Association says that repeatedly deleting and writing files fragments the free space on a card and slows down writing. In that case, it recommends moving the data off the card and formatting it again.

"Copying photos takes much longer than it used to." "My camera stops in the middle of burst shooting." People often say this when they search for help with a slow SD card. This guide covers the order in which to narrow down the cause. What the speed markings on a card mean is in [How to read SD card speed classes](/blog/en/sd-card-speed-class), and the basics are in [SD card basics](/blog/en/sd-card-basics-guide).

## What should you check first on a slow SD card?

There are five main causes. If you check them from the top of the table down, you can narrow down the cause without erasing the card.

| Cause | What to check | Source |
| --- | --- | --- |
| Connection path | The USB speed and bus mode your reader and device support | Apple camera adapter and Mac SD card slot guides |
| Windows removal policy | The Quick removal policy doesn't use write caching | Microsoft removal policy guide |
| Card fragmentation | Whether you've deleted and written files for a long time | SD Association Speed Class overview |
| Operating system formatting | Whether you formatted the card with a built-in OS tool | SD Association formatter page |
| Card errors or a fake card | Whether files are damaged or the capacity looks wrong | Apple Disk Utility guide |

We didn't measure the speed of any card or reader for this guide. The table summarizes what each official document says.

## Should you make a copy before checking the card?

Yes. A card that has slowed down may also be showing signs of errors. Copy your photos and videos to another storage device before you format or check the card.

1. Connect the card to your computer or iPhone.
2. Copy the photos and videos you want to keep to another storage device.
3. Open a few of the copied files to make sure they work.
4. Eject the card before you remove it.

[Apple's Mac SD card slot guide](https://support.apple.com/en-us/102352) says removing a card while your Mac is asleep could lead to data loss. Connection steps are in [How to connect an SD card to your computer](/blog/en/sd-card-to-pc).

## Is your reader or port holding back the speed?

Even a fast card is limited to the slower mode if the reader or device only supports that mode. Here's what Apple's documentation says.

| Device | Apple's guidance |
| --- | --- |
| iPhone | [Apple's camera adapter guide](https://support.apple.com/en-us/118280) says iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds. All other adapters and iOS devices use USB 2 speeds |
| Mac SD card slot | [Apple's Mac SD card slot guide](https://support.apple.com/en-us/102352) lists UHS-II support only for Mac Studio (2022 or later), MacBook Pro (2021 or later), iMac (2020), and iMac Pro. Other models' slots go up to UHS-I |

Check in this order:

1. Insert the same card into a different reader or port.
2. Insert a different card into the same reader and compare.
3. If only one setup is slow, check which modes that reader or port supports.

Bus modes are explained in [UHS-I vs UHS-II vs SD Express](/blog/en/uhs-sd-card), and what to look for in a reader is in [How to choose an SD card reader](/blog/en/choose-sd-card-reader).

## What setting should you check if copying is slow only in Windows?

Check the removal policy for external storage. According to [Microsoft's removal policy guide](https://learn.microsoft.com/en-us/windows/client-management/change-default-removal-policy-external-storage-media), the default has been Quick removal since Windows 10 version 1809.

| Policy | Microsoft's description |
| --- | --- |
| Quick removal | Keeps the device ready to remove at any time, so Windows can't cache write operations. This can degrade performance |
| Better performance | Windows can cache write operations to improve performance. You must use Safely Remove Hardware before you remove the device |

To change it:

1. Connect the device to the computer.
2. Right-click Start, select File Explorer, and find the drive letter or label of the device.
3. Right-click Start again and select Disk Management.
4. In the lower section of the window, right-click the label of the device and select Properties.
5. Select Policies, then choose the policy you want. If you don't see a Policies tab, select Hardware, choose the drive, and select Properties.

Microsoft warns that with Better performance, removing the device without Safely Remove Hardware risks data loss. If you pull the card out often, keeping Quick removal is the safer choice.

## Why does an SD card get slower over time?

[The SD Association's Speed Class overview](https://www.sdcard.org/developers/sd-standard-overview/speed-class/) points to fragmentation.

- Repeatedly deleting and writing files gradually fragments the data area.
- Because of how flash memory works, writing to a fragmented area is slower than writing sequentially.
- Speed Class writing assumes sequential writes to a completely unfragmented area.
- So even with plenty of free space, a device may not be able to record at the card's Speed Class.

The same page says that in this case you should move the data to another storage device and format the card again.

## How do you get speed back by formatting the card?

Formatting erases everything on the card. Check that the copy you made opens properly before you continue.

[The SD Association's formatter page](https://www.sdcard.org/downloads/formatter/) strongly recommends using SD Memory Card Formatter rather than formatting tools built into operating systems. It says those tools may not be optimized for SD cards and may result in lower performance.

| Item | SD Association's guidance |
| --- | --- |
| Supported systems | Windows 10 22H2, Windows 11 22H2, 23H2, and 24H2, macOS 11 through 15 |
| Protected Area | The formatter doesn't format the card's Protected Area |
| BitLocker To Go | Unlock an encrypted card before formatting it |

Installation and the difference between quick and overwrite format are in [How to use SD Memory Card Formatter](/blog/en/sd-card-formatter). If the card is for a camera, also see the in-device steps in [How to format an SD card](/blog/en/format-sd-card).

## What if it's still slow or files are damaged after formatting?

Suspect card errors. On a Mac, check the card with First Aid in Disk Utility. [Apple's Disk Utility repair guide](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac) says First Aid checks for and fixes errors related to formatting and directory structure.

1. Open Disk Utility and choose View > Show All Devices.
2. Select the card's volume in the sidebar and click First Aid.
3. Click Run and follow the onscreen instructions.
4. After the volume, repeat the check for the container and then the storage device.

The same guide says Disk Utility can't detect or repair every problem. If it reports that the disk is about to fail, Apple says to move your data off and replace the disk. Steps for each symptom are in [Repairing an SD card](/blog/en/sd-card-corrupted).

If a brand-new card is slow and its capacity also looks wrong, see [How to spot a fake SD card](/blog/en/fake-sd-card).

## How do you also keep iPhone photos on a USB drive?

If your photos live only on a card that has slowed down, an error can take them with it. Make one more copy on another storage device. The app below is described for USB flash drives. Formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat), and transfer steps are in [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## Slow SD card FAQ

### Does a slow SD card mean it's broken?

Not necessarily. The reader, the port, the Windows removal policy, and fragmentation can all lower speed. Compare with another reader and another card to narrow down the cause.

### Will formatting make my SD card fast again?

It helps if fragmentation is the cause. The SD Association recommends moving the data off and formatting the card again. If the connection path is the cause, formatting won't change anything.

### Is it OK to format with my computer's built-in tool?

It works. But the SD Association recommends SD Memory Card Formatter, because built-in tools may not be optimized for SD cards and may result in lower performance.

### Why is reading an SD card slow on my iPhone?

According to Apple, only iPhone 15 Pro, iPhone 15 Pro Max, iPhone 16 Pro, and iPhone 16 Pro Max support USB 3 transfer speeds. All other adapters and iOS devices use USB 2 speeds.

### Should I turn on Better performance in Windows?

You can. But Microsoft says that with this policy you must use Safely Remove Hardware, and removing the device without it risks data loss.
