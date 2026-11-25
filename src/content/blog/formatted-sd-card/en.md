---
title: "Can You Recover a Formatted SD Card? What to Check First"
description: "Whether you can recover a formatted SD card depends on how it was formatted. Learn why to stop using the card, how quick format differs from overwriting, and what Microsoft's Windows File Recovery requires, based on Microsoft, Apple, and SD Association documentation."
date: 2026-11-26
---

## Key takeaways

Before you try to recover a formatted SD card, stop using it. New shots or new files written after the format can overwrite data that may still be there.

Whether you can get files back depends on how the card was formatted. Microsoft says a quick format deletes the file table and the root directory. A format that zeros every sector, or an erase with an overwrite option, overwrites the data itself.

Windows users can try Microsoft's Windows File Recovery. We didn't test this tool or any other recovery program for this guide, and we don't promise that you'll get files back.

"The camera told me to format the card, so I did." "I thought it was a different card and formatted it on my computer." People often say this when they search for how to recover a formatted SD card. If you deleted a few files yourself, see [How to recover deleted files from an SD card](/blog/en/deleted-files-sd-card). If photos vanished without you deleting anything, see [SD card recovery: what to do first](/blog/en/sd-card-photos-missing). This guide covers what to do after you've formatted a card.

## Why should you stop using a formatted SD card right away?

After a format, the card looks empty, and devices write new files to that space. [Microsoft's Windows File Recovery guide](https://support.microsoft.com/en-us/windows/recover-lost-files-on-windows-10-61f5b28a-f5b8-3cc2-0f8e-a63cb4e1d4c4) says the space a deleted file used is marked as free, so the data can still exist, but new files may overwrite it at any time.

1. Remove the card from the camera or phone and stop shooting with it.
2. Don't copy new files to the card.
3. Don't format it again. Even if an error message suggests formatting, don't tap it now.
4. Eject the card before you remove it. [Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says removing a card while your Mac is asleep could lead to data loss.

If you saw a format prompt because the card wouldn't open, read [Repairing an SD card](/blog/en/sd-card-corrupted) first.

## Why does it matter how the card was formatted?

Each format method erases a different amount. The table below lists the behavior described in official documentation.

| Format method | What the documentation says | Chance data remains |
| --- | --- | --- |
| Windows quick format (`/Q`) | Deletes the file table and root directory and skips the scan for bad areas | The documentation doesn't say the data itself is overwritten |
| Windows `/P` option | Zeros every sector, then overwrites with random numbers the number of times you choose | The data has been overwritten |
| Mac Disk Utility Security Options | You choose how many times to write over the erased data | The data has been overwritten |
| A camera's or phone's format menu | Differs by device | Check the device manual |

The Windows behavior comes from [Microsoft's format command reference](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/format). The Mac behavior comes from [Apple's Disk Utility guide](https://support.apple.com/guide/disk-utility/erase-and-reformat-a-storage-device-dskutl14079/mac), which also says Security Options are available only for some types of storage devices. The difference between quick and overwrite format in the SD Association's formatter is covered in [SD Memory Card Formatter](/blog/en/sd-card-formatter).

The steps in this guide can't bring back a card that was erased by overwriting. In that case, looking for copies outside the card is the faster route.

## Are there copies outside the card?

Look for copies elsewhere before you work on the formatted card. Nothing gets written to the card, so this is the safest place to start.

| Where to check | What to look for |
| --- | --- |
| Your computer | Files you moved earlier in a photo app or an import folder |
| iPhone Photos app | Photos imported from the card in your library or in Recently Deleted |
| Other storage devices | Files you copied to a backup USB drive or an external drive |

[Apple's iCloud Photos guide](https://support.apple.com/en-us/108782) says you can get accidentally deleted items back from Recently Deleted for 30 days. Import steps for iPhone are in [How to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

## How do you recover a formatted SD card in Windows?

Microsoft offers Windows File Recovery, a command line app in the Microsoft Store. [Microsoft's Windows File Recovery guide](https://support.microsoft.com/en-us/windows/recover-lost-files-on-windows-10-61f5b28a-f5b8-3cc2-0f8e-a63cb4e1d4c4) lists SD cards as an example of FAT and exFAT file systems. Its mode table recommends Extensive mode for an NTFS disk after formatting, and Extensive mode for FAT and exFAT in any situation.

| Item | Microsoft's guidance |
| --- | --- |
| Supported Windows | Windows 11 and Windows 10 |
| Mode for FAT and exFAT | Only Extensive mode is supported |
| Destination | Must be a different drive from the source |
| Results folder | A `Recovery_<date and time>` folder is created on the destination drive |

The basic steps from the guide are below.

1. Install Windows File Recovery from the Microsoft Store.
2. Press the Windows key, enter Windows File Recovery in the search box, and select the app.
3. When you're asked to allow the app to make changes to your device, select Yes.
4. In the Command Prompt window, enter a command in the format `winfr source-drive: destination-drive: /extensive`. For example, if the card is E: and you only want JPG photos saved to C:, enter `winfr E: C: /extensive /n *.JPG`.
5. When asked to continue, enter Y. To stop, press Ctrl + C.

The same guide says that if you can't recover a file, the free space may have been overwritten. We didn't test Windows File Recovery ourselves. Connecting a card to a PC is covered in [SD card reader for PC](/blog/en/sd-card-to-pc).

## What about a Mac or other recovery software?

Apple's Disk Utility guide says erasing a storage device deletes everything on it, and it tells you to copy files you want to save to another storage device before erasing. The Apple documentation we checked doesn't include steps for getting files back from a formatted card.

The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says to refer to the card manufacturer's instructions for retrieving deleted pictures. It also says the SD Association doesn't supply tools for photo retrieval. This guide doesn't recommend any recovery program or service.

Whatever method you use, follow these two rules.

1. Don't save recovered files to the same card.
2. Check that the recovered files open on another storage device.

## How do you avoid formatting by mistake next time?

A fixed check before formatting cuts down on the same mistake.

| Habit | Why |
| --- | --- |
| Make a copy elsewhere before formatting | Apple says to copy files you want to save to another storage device before erasing |
| Check the name and capacity of the device you're formatting | It stops you from erasing the wrong card or drive |
| Format only after checking that the copies open | You won't erase files that didn't finish copying |

Formatting steps for each device are in [How to format an SD card](/blog/en/format-sd-card).

## How do you also keep iPhone photos on a USB drive?

Photos you've imported to an iPhone can be lost the same way if they live in only one place. Make one more copy on another storage device. The app below is described for USB flash drives. Formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat), and transfer steps are in [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## Recover formatted SD card FAQ

### Can a formatted SD card be undone?

It depends on how it was formatted and what happened afterward. If you did a quick format and haven't used the card since, data may remain. If you formatted with an overwrite option, the data itself has been overwritten.

### What should I do first after formatting?

Remove the card from the device and stop shooting or copying to it. Don't format it again.

### Is there an official tool for Windows?

Windows File Recovery is available in the Microsoft Store. FAT and exFAT cards only support Extensive mode, and the results must go to a different drive.

### Does the same apply to a card formatted in a camera?

Format behavior differs by camera. Check the device manual and the card manufacturer's instructions first.

### Can I put recovered files back on the original card?

Not until you're done. Writing to the card can overwrite what's left.
