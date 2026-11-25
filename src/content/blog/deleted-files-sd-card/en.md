---
title: "How to Recover Deleted Files from an SD Card: What to Check First"
description: "Before you try to recover deleted files from an SD card, stop writing to the card. Check the computer's Trash or Recycle Bin, the iPhone's Recently Deleted album, and Microsoft's Windows File Recovery, based on Apple, Microsoft, and SD Association documentation."
date: 2026-11-25
---

## Key takeaways

Before you try to recover deleted files from an SD card, stop writing to the card. New shots or new files can overwrite what's left of the deleted data.

Next, work out where the deleted files went. If you deleted them on a computer, check the Trash or Recycle Bin. If you deleted photos you had imported to an iPhone, check Recently Deleted in the Photos app.

If they're still missing, Windows users can try Microsoft's Windows File Recovery. We didn't test this tool or any other recovery program for this guide, and we don't promise that you'll get files back.

"I meant to delete a few bad shots and deleted the whole folder." "I pressed Delete All on my camera." People often say this when they search for how to recover deleted files from an SD card. If photos vanished without you deleting anything, see [SD card recovery: what to do first](/blog/en/sd-card-photos-missing). If the card won't open, see [Repairing an SD card](/blog/en/sd-card-corrupted). This guide covers files you deleted yourself.

## Why should you stop using the card after deleting files by mistake?

The space a deleted file used is marked as free. [Microsoft's Windows File Recovery guide](https://support.microsoft.com/en-us/windows/recover-lost-files-on-windows-10-61f5b28a-f5b8-3cc2-0f8e-a63cb4e1d4c4) says the file data can still exist in that free space, but new files may overwrite it at any time. The same guide says to minimize or avoid use if you want to increase your chances of recovering a file.

1. Remove the card from the camera or phone and stop shooting with it.
2. Don't copy new files to the card.
3. Don't format it. Formatting erases everything on the card.
4. Eject the card before you remove it. [Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says removing a card while your Mac is asleep could lead to data loss.

## Where should you look, depending on where you deleted the files?

Where you deleted the files decides where to look first. The table below sums it up.

| Where you deleted | Check first | Note |
| --- | --- | --- |
| Finder on a Mac | The Trash in the Dock | Emptied items are deleted permanently |
| File Explorer in Windows | The Recycle Bin | If they're not there, consider Windows File Recovery |
| iPhone Photos app (imported photos) | Recently Deleted | Items are deleted permanently after 30 days |
| The camera's or phone's delete menu | The device manual | Behavior differs by device |
| Formatting | The card manufacturer's instructions | Outside the scope of this guide |

We didn't test any specific card, reader, or recovery program for this guide, and we don't recommend any product.

## Are files deleted on a Mac still in the Trash?

On a Mac, items aren't deleted until you empty the Trash. [Apple's guide to deleting files on Mac](https://support.apple.com/guide/mac-help/delete-files-and-folders-on-mac-mchlp1093/mac) says items you drag to the Trash aren't deleted until you empty it.

1. Click the Trash icon in the Dock.
2. Drag the item out of the Trash, or select it and choose File > Put Back.
3. Make a copy of the files you get back on the Mac or another storage device.

The same guide warns that items emptied from the Trash are permanently deleted and no longer available. If you turned on "Remove items from the Trash after 30 days" in Finder settings, items are removed for good after 30 days. Connecting a card to a Mac is covered in [SD card reader for Mac](/blog/en/sd-card-on-mac).

## What if you deleted photos you had imported to an iPhone?

If you imported photos from the card to the iPhone Photos app and then deleted them on the iPhone, check Recently Deleted. Import steps are in [How to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

1. Open the Photos app on your iPhone and find Recently Deleted.
2. Select the photos you want and recover them.
3. Make a copy of the photos on a storage device outside the iPhone.

[Apple's iCloud Photos guide](https://support.apple.com/en-us/108782) says that if you delete something accidentally, you can get it back from Recently Deleted for 30 days, and after that it's deleted permanently. The same guide says that with iCloud Photos on, deleting a photo on one device deletes it everywhere you use iCloud Photos.

## What can you use in Windows if the files aren't in the Recycle Bin?

Microsoft offers Windows File Recovery, a command line app in the Microsoft Store. [Microsoft's Windows File Recovery guide](https://support.microsoft.com/en-us/windows/recover-lost-files-on-windows-10-61f5b28a-f5b8-3cc2-0f8e-a63cb4e1d4c4) says to use it for files you can't find in a backup and can't restore from the Recycle Bin. It works on local storage devices, including internal drives, external drives, and USB devices. Cloud storage and network file shares aren't supported.

Keep these conditions in mind when you use it on an SD card.

| Item | Microsoft's guidance |
| --- | --- |
| Supported Windows | Windows 11 and Windows 10 |
| SD card file system | Usually FAT or exFAT |
| Mode for FAT and exFAT | Only Extensive mode is supported |
| Destination | Must be a different drive from the source |
| Results folder | A `Recovery_<date and time>` folder is created on the destination drive |

To see the card's file system, right-click the drive in File Explorer and select Properties. The basic steps from the guide are below.

1. Install Windows File Recovery from the Microsoft Store.
2. Press the Windows key, enter Windows File Recovery in the search box, and select the app.
3. When you're asked to allow the app to make changes to your device, select Yes.
4. In the Command Prompt window, enter a command in the format `winfr source-drive: destination-drive: /extensive`. For example, if the card is E: and you only want JPG photos saved to C:, enter `winfr E: C: /extensive /n *.JPG`.
5. When asked to continue, enter Y. To stop, press Ctrl + C.

The same guide says that if you can't recover a file, the free space may have been overwritten. We didn't test Windows File Recovery ourselves. Connecting a card to a Windows PC is covered in [SD card reader for PC](/blog/en/sd-card-to-pc).

## How should you choose other recovery software or services?

This guide doesn't recommend any recovery program or service. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says to refer to the card manufacturer's instructions for retrieving deleted pictures. It also says the SD Association doesn't supply tools for photo retrieval.

Whatever method you use, follow these two rules.

1. Don't save recovered files to the same card. That writes to the card again.
2. Check that the recovered files open on another storage device.

## How do you avoid deleting files by mistake next time?

Don't keep files on just one card. After a shoot, copy the files to a computer or another storage device, check that the copies open, and only then clear the card.

| Habit | Why |
| --- | --- |
| Make a copy elsewhere before deleting | Apple suggests storing a backup copy on a storage device in case you want the item later |
| Empty the Trash only after checking it | Emptied items are deleted permanently |
| Know how to clear a card before you need to | Steps are in [How to format an SD card](/blog/en/format-sd-card) |

## How do you also keep iPhone photos on a USB drive?

Photos you've imported to an iPhone can be lost the same way if they live in only one place. Make one more copy on another storage device. The app below is described for USB flash drives. Formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat), and transfer steps are in [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## Recover deleted files from SD card FAQ

### What should I do first after deleting files from an SD card by mistake?

Remove the card from the device and stop shooting or copying to it. New files can overwrite the space the deleted files used.

### Where do I find card files I deleted on a Mac?

Check the Trash in the Dock. If you haven't emptied it, drag the item out or choose Put Back.

### What if the files aren't in the Windows Recycle Bin?

You can try Windows File Recovery from the Microsoft Store. FAT and exFAT drives, which SD cards usually are, only support Extensive mode, and the results must go to a different drive.

### How long can I get back photos deleted on an iPhone?

Apple says you can get items back from Recently Deleted for 30 days. After that, they're deleted permanently.

### Can I put recovered files back on the original card?

Not until you're done. Writing to the card can overwrite what's left. Save the files to another storage device first.
