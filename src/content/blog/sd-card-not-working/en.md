---
title: "SD Card Corrupted or Not Recognized? Check, Repair, and Reformat It"
description: "Is your SD card corrupted, locked, or not showing up? Follow the checks in order: the lock switch, the connection, a file system repair with First Aid or chkdsk, the drive letter, and a reformat with the SD Association's formatter."
date: 2026-11-13
---

## Key takeaways

When an SD card is corrupted or won't format, narrow down the cause before you format it again and again. Check the lock switch, the connection, the file system, and finally the card itself.

If you see a message such as "cannot be modified," start with the lock switch. Apple says the card might be locked. If the card doesn't show up at all, reinsert it. Apple says a card that still won't mount might need to be reformatted.

If the card holds files you want to keep, check it with First Aid in Mac Disk Utility or `chkdsk` on Windows before you format. If nothing works, contact the card manufacturer.

"My camera's SD card won't open on my PC." "I try to format the card, but it never finishes." These are common questions from people with an SD card that won't format or won't show up. The format steps for a healthy card are in [how to format an SD card](/blog/en/format-sd-card). This guide covers what to check when formatting or detection fails.

## What should you check first when an SD card is corrupted or won't format?

Where to look depends on the symptom. Find yours in the table below.

| Symptom | Check first | Section in this guide |
| --- | --- | --- |
| "cannot be modified" or a read-only message | The card's lock switch | Lock switch |
| Nothing appears when you insert the card | Card direction, the reader, reinserting | Card not recognized |
| The card isn't under Locations in the iPhone Files app | Card format and number of data partitions | Not showing on iPhone |
| Shown in Disk Management but not in File Explorer | Drive letter, unallocated space | Drive letter |
| The card opens, but files are damaged or errors appear | File system check | Check a corrupted card |
| Same symptom after all of the above | Contact the card manufacturer | Still not working |

We haven't tested any specific card or reader, and we don't recommend any specific product.

## Can the lock switch stop an SD card from formatting?

Yes. [Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says that if the message "cannot be modified" appears when you use the card, the SD card might be locked.

1. Eject the card, then remove it from the device.
2. Slide the lock switch on the side of the card to the unlocked position.
3. Insert the card again.

According to the [SD Association FAQ](https://www.sdcard.org/consumers/faq/), SD and microSD cards differ only in physical details such as size, shape, and whether they have a write-protect switch. If you use a microSD card in an SD-size adapter, check whether the adapter has a switch.

## What should you do when an SD card isn't recognized?

If the card doesn't appear anywhere, you can't reach the format menu. Check the connection first.

1. Remove the card and insert it again as the device manual describes. Apple notes that a card fits only one way, so don't force it.
2. On a Mac, Apple says to remove the card and insert it again. If it still won't mount, you might need to reformat it.
3. If an error message appears, write it down and check the device manual. The SD Association FAQ recommends this order.
4. Try another reader or another computer. If the card is missing on only one of them, suspect the reader or device rather than the card.

Check the card standard, too. The SD Association FAQ says SD and SDHC devices made before SDXC aren't compatible with SDXC cards. A card over 32 GB in an older camera or reader may be this case.

Apple's guide says SDIO cards aren't supported. A microSD card connects through an adapter.

## What if your iPhone doesn't show the SD card?

According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), an iPhone uses storage with a single data partition. The format must be APFS, Mac OS Extended (HFS+), exFAT, FAT32, or FAT.

| Check | What to do |
| --- | --- |
| You don't see Locations in the Files app | Tap Browse again |
| The card is formatted as NTFS | It isn't on Apple's list, so reformat it as exFAT or FAT32 |
| The card has more than one data partition | Erase the top-level item in Mac Disk Utility |
| The reader doesn't match the iPhone's port | Use a reader or adapter that fits your iPhone's port |

Reader requirements are in [how to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader), and microSD connections are in [micro SD for iPhone](/blog/en/iphone-microsd).

## Can you check a corrupted SD card before formatting it?

If the card holds files you want to keep, check the file system before you format. If the check fixes the errors, you can copy the files elsewhere and then format.

### Check the card with First Aid on a Mac

These steps follow [Apple's Disk Utility First Aid guide](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac).

1. Open Disk Utility and choose View, then Show All Devices.
2. Select the card's volume in the sidebar and run First Aid.
3. If there's a container, run First Aid on it, too.
4. Finally, select the card's top-level item and run First Aid.

Apple says to try again if First Aid fails. If it still fails, back up as much data as you can and reformat the disk.

### Check the card with chkdsk on Windows

According to [Microsoft's chkdsk reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk), chkdsk without parameters only shows the volume's status. You need `/f` to fix errors, and you need administrator rights.

1. In the Start menu, right-click Command Prompt and select Run as administrator.
2. Type something like `chkdsk E: /f`. E is only an example, so replace it with your card's drive letter.
3. Wait until it finishes. Microsoft doesn't recommend interrupting chkdsk.

The same page says repairs on FAT file systems sometimes cause a loss of data. If chkdsk asks whether to convert lost chains to files, press Y. They're saved in the root folder as files named `File<nnnn>.chk`.

For deleted pictures, the SD Association FAQ says to refer to the card manufacturer's instructions. This guide doesn't cover photo recovery tools.

## What if Windows can't format the card because it has no drive letter?

If the card appears in Disk Management but not in File Explorer, it may not have a drive letter. These steps follow [Microsoft's guide to changing a drive letter](https://learn.microsoft.com/en-us/windows-server/storage/disk-management/change-a-drive-letter).

1. Search for Disk Management in the Start menu and open it with administrator rights.
2. Right-click the card's volume and select Change Drive Letter and Paths.
3. Select Add, choose a drive letter, and select OK.

If that option is grayed out, Microsoft says the drive may be unallocated and need to be initialized. In that case the card has no usable volume, so reformat the whole card with the steps below.

## How do you reformat a card that's detected but won't format?

If the operating system's tool fails, use the [SD Association's formatter](https://www.sdcard.org/downloads/formatter/). The SD Association strongly recommends it because operating system tools may not be optimized for SD cards.

1. Download and install SD Memory Card Formatter for Windows or Mac.
2. Put the card in a reader and connect it to your PC or Mac.
3. Select the card in the formatter and check its name and capacity again.
4. Start the format.

| Where it gets stuck | Official guidance |
| --- | --- |
| Card encrypted with BitLocker To Go | The SD Association's formatter doesn't support it. Unlock the card, then format |
| Card with more than one partition | Erase the card's top-level item in Mac Disk Utility |
| Card that kept throwing errors | Turn off Quick Format on Windows |

[Microsoft's format command reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format) says to use a quick format only on a drive you know is in good condition. Formats by capacity and device-by-device steps are also in [how to reformat a micro SD card](/blog/en/format-microsd).

## What if the SD card still doesn't work?

If several devices and readers show the same symptom, suspect the card itself. The SD Association is a standards body and doesn't make cards, so its FAQ says to contact the card manufacturer.

| What to do | Source |
| --- | --- |
| Contact the card manufacturer's support | SD Association FAQ |
| Contact the retailer if you need a return | SD Association FAQ |
| Check the warranty with the manufacturer | SD Association FAQ |

Apple also says that if First Aid and reformatting don't fix the problem, the device may be physically damaged.

## Want regular backups to a USB drive?

The app below is described for USB drives. We haven't checked how it works with card readers. To change a USB drive's format, see [how to format a USB drive to exFAT](/blog/en/format-usb-exfat).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## FAQ: SD card corrupted or not working

### My SD card is read-only and won't format. What should I do?

Check the lock switch on the side of the card. Apple says that if "cannot be modified" appears, remove the card, slide the switch to unlocked, and insert it again.

### Should I format an SD card right away if it isn't recognized?

Reinsert it first and try another reader or computer. Apple says a card that still won't mount might need to be reformatted. Formatting erases everything on the card.

### Does chkdsk delete files?

Without `/f`, it only shows the status. Microsoft says repairs on FAT file systems can lose data, so copy the files you want to keep while the card still opens.

### Why doesn't my old camera recognize a 64 GB SD card?

The SD Association FAQ says SD and SDHC devices aren't compatible with SDXC cards. Check the device manual to see whether it supports SDXC.

### What if the SD Association's formatter can't format the card either?

Contact the card manufacturer. The SD Association doesn't make cards, so it says to take technical issues to the manufacturer.
