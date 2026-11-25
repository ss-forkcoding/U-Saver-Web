---
title: "SD Card Recovery: What to Do First When Your Photos Are Missing"
description: "Before you try SD card recovery, stop using the card. Find out whether your photos are deleted or just hidden, then check other devices, hidden items, and the iPhone Photos app, based on Apple, Microsoft, and SD Association documentation."
date: 2026-11-25
---

## Key takeaways

Before you look into SD card recovery, stop using the card. Taking new photos or adding files writes to the card again. If a window asks you to format it, don't.

Next, find out whether the photos are really gone or just not showing. Open the card on another computer or reader, turn on hidden items, and check the Photos app if you imported the photos to an iPhone.

If they're still missing, check the card manufacturer's instructions. The SD Association doesn't supply tools for photo retrieval. This guide doesn't cover any recovery program, and it doesn't promise that you'll get photos back.

"Yesterday's trip photos are all gone from the card." "I moved the photos to my iPhone, and now the card is empty." People often say this when they start searching for SD card recovery. If the card won't open or the photos look broken, see [Repairing an SD card](/blog/en/sd-card-corrupted). This guide covers what to check first when photos go missing.

## Why should you stop using the card first?

The more you write to the card, the harder it may be to find what's left. New shots, file copies, and formatting all write to the card. Formatting erases everything on it.

1. Remove the card from the camera or phone and stop shooting with it.
2. If the device showed an error message, write it down. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says to note any error messages and check the device's manual.
3. Connect the card to a computer. If a window asks you to format it, close it.
4. Copy the photos and videos you can see now to another storage device.

Removing the card has an order too. [Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says removing a card while your Mac is asleep could lead to data loss. Wake the computer and eject the card before you remove it.

## Are the photos deleted, or just not showing?

Sort out the situation first. The table below lists what to suspect and what to do first for each symptom.

| Symptom | What to suspect | What to do first |
| --- | --- | --- |
| Photos show on the camera but not on the computer | Connection, reader, or hidden items | Try another reader or computer |
| The folder is there but the photos aren't | Hidden items or a different folder | Turn on hidden items and check the folders |
| The card is empty after importing to an iPhone | Originals deleted from the card after import | Check the iPhone Photos app |
| The computer asks you to format the card | Damaged file system | Don't format. See [Repairing an SD card](/blog/en/sd-card-corrupted) |
| No device can see the card | Connection, reader, or card failure | See [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) |
| Photos show, but you can't delete or save | The lock switch | See [Write protected SD card](/blog/en/sd-card-write-protected) |

We didn't test any specific card or reader for this guide, and we don't recommend any product.

## Do the photos show on another device?

Put the card back in the device that took the photos and open its playback screen. If the photos show there, they're still on the card. In that case, suspect the computer's connection or the reader.

1. Insert the card in the camera or phone that took the photos and check whether they appear.
2. Connect the card to another reader or another computer.
3. Copy any photos you can see to a computer or another storage device right away.

Connecting a card to a computer is covered in [SD card reader for PC](/blog/en/sd-card-to-pc) and [SD card reader for Mac](/blog/en/sd-card-on-mac).

## How do you show hidden items in Windows?

If a folder is there but looks empty, turn on hidden items. These steps follow [Microsoft's guide to viewing hidden files](https://support.microsoft.com/en-us/windows/view-hidden-files-and-folders-in-windows-97fbc472-c603-9d90-91d0-1166d1d9f4b5).

| Windows version | Steps |
| --- | --- |
| Windows 11 | Open File Explorer from the taskbar, select View, then Show, then Hidden items |
| Windows 10 | In File Explorer, select View, Options, then Change folder and search options. On the View tab, under Advanced settings, select Show hidden files, folders, and drives, then OK |

If hidden items appear, copy the photos to another folder. Leave the original files where they are.

## What if the photos disappeared after importing to an iPhone?

If you imported the photos into the iPhone Photos app and then deleted the originals from the card, the card won't have them. Look in the iPhone Photos app instead. Import steps are in [How to use an iPhone SD card reader](/blog/en/iphone-sd-card-reader).

1. Open the Photos app on your iPhone and check Recents.
2. If you deleted them on the iPhone too, check Recently Deleted.
3. Make a copy of the photos you find on a storage device outside the iPhone.

[Apple's iCloud Photos guide](https://support.apple.com/en-us/108782) says that if you delete something accidentally, you can get it back from Recently Deleted for 30 days, and after that it's deleted permanently. The same guide says that with iCloud Photos on, deleting a photo on one device deletes it everywhere you use iCloud Photos.

## What if the card won't open or asks to be formatted?

Don't format it. Formatting erases everything on the card. Copy the files that open first, then scan the card with First Aid on a Mac or `chkdsk` in Windows.

[Microsoft's chkdsk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk) says that without parameters it only shows the status and doesn't fix errors. It also says repairs on FAT file systems sometimes cause a loss of data. So move the files that open before you fix anything with `/f`. The full scan steps are in [Repairing an SD card](/blog/en/sd-card-corrupted).

## Should you use SD card recovery software?

This guide doesn't recommend any recovery program. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says to refer to the card manufacturer's instructions for retrieving deleted pictures. It also says the SD Association doesn't supply tools for photo retrieval.

| Where to check | Why |
| --- | --- |
| The card manufacturer's support | The SD Association points deleted-photo questions to the manufacturer |
| The store where you bought the card | The SD Association says to contact the retailer if a return is needed |
| The camera or device manual | It explains what the device's error messages mean |

Whatever method you use, don't save recovered files to the same card. That writes to the card again.

## How do you protect your photos next time?

Don't keep photos on just one card. After a shoot, copy the photos to a computer or another storage device, check that the copies open, and only then clear the card.

| Habit | Official guidance |
| --- | --- |
| Eject before removing the card on a Mac | Apple: wake the computer, eject, then remove |
| Safely remove before pulling the card in Windows | Microsoft: use the [Safely Remove Hardware](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369) icon |
| Note error messages | SD Association: write down the message and check the manual |

## How do you also keep iPhone photos on a USB drive?

Photos you've imported to an iPhone face the same risk if they live only on the iPhone. Make one more copy on another storage device. The app below is described for USB flash drives. Formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat), and transfer steps are in [How to transfer photos from iPhone to USB](/blog/en/iphone-photos-to-usb).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## SD card recovery FAQ

### What should I do first when photos disappear from an SD card?

Remove the card from the device and stop shooting with it. If a window asks you to format it, don't. Then check other devices and hidden items.

### The photos show on my camera but not on my computer. What now?

That means the photos are still on the card. Try another reader or another computer, and copy the photos you can see right away.

### Where do I find photos I imported to my iPhone?

Look in the iPhone Photos app. If you deleted them on the iPhone too, check Recently Deleted. Apple says you can get items back from there for 30 days.

### Should I click Format when the computer asks?

No. Formatting erases everything on the card. Copy the files that open first, then scan the card.

### Can the SD Association get my deleted photos back?

No. The SD Association doesn't supply tools for photo retrieval. Check the card manufacturer's instructions.
