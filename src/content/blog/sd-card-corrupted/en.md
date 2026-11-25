---
title: "Repairing an SD Card: Signs of Corruption and What to Do First"
description: "Before repairing an SD card, check the symptoms. Stop using the card, copy the files you can still open, scan it with Mac First Aid or Windows chkdsk, then reformat it, based on Apple, Microsoft, and SD Association documentation."
date: 2026-11-25
---

## Key takeaways

Repairing an SD card works best in a set order. First, stop writing new files to the card. Next, copy the files that still open to another storage device. Scan and format only after that.

The scan tools are First Aid in Mac Disk Utility and `chkdsk` in Windows. Neither tool fixes every problem. If the scan doesn't help, reformat the card with the SD Association's formatter.

If the same symptoms return after a reformat, contact the card manufacturer. This guide doesn't cover any recovery program, and it doesn't promise that you'll get files back.

"Some photos from my camera show up gray and broken." "The card opened fine yesterday, and now it says I need to format it." These are common when people start repairing an SD card. If the card doesn't show up at all or a format won't finish, see [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) This guide covers what to do first, and what to leave for later, when a card seems damaged.

## What are the signs of a corrupted SD card?

The signs fall into three groups. Some files break, the whole card won't open, or saving is blocked.

| Symptom | What to suspect | What to do first |
| --- | --- | --- |
| Some photos are broken or won't open | Damaged files or folder structure | Copy the files that still open |
| The computer asks you to format the card | Damaged file system | Don't format. Scan it first |
| The camera or device shows a card error | Device compatibility or card damage | Write down the message and check the manual |
| A "cannot be modified" or read-only message | The lock switch | [Write protected SD card](/blog/en/sd-card-write-protected) |
| No device can see the card | Connection, reader, or card failure | [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) |

We didn't test any specific card or reader for this guide, and we don't recommend any product.

## Why do SD cards get corrupted?

There's no single cause. But official guides warn against a few habits.

[Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says removing a card while your Mac is asleep could lead to data loss. It says to wake the computer and eject the card before you remove it.

[Microsoft's guide to safely removing hardware](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369) also says to always safely remove devices like USB flash drives before disconnecting them, to avoid losing data.

| Habit | Official guidance |
| --- | --- |
| Pulling the card during a copy or while the Mac sleeps | Apple: wake the Mac, eject, then remove |
| Pulling the card in Windows without ejecting | Microsoft: use the Safely Remove Hardware and Eject Media icon |
| Forcing the card into the slot | Apple: forcing media might cause damage |

The basics of handling a card are in [SD card reader for Mac](/blog/en/sd-card-on-mac) and [SD card reader for PC](/blog/en/sd-card-to-pc).

## What should you do before repairing an SD card?

Stop using the card. Taking new photos or moving files writes to the card again. Formatting writes to the card too, and it erases everything on it.

1. Remove the card from the camera or phone and stop shooting with it.
2. If the device showed an error message, write it down. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says to note any error messages and check the device's manual.
3. Connect the card to a computer. If a window asks you to format it, close it without formatting.
4. Copy the photos and videos that open to the computer or another storage device.
5. Open a few of the copied files to make sure they work.

A file that won't open may stop the copy. Skip it and move the rest first.

## How do you check a corrupted SD card on a Mac?

Use First Aid in Disk Utility. [Apple's First Aid guide](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac) says it can fix problems such as a corrupted file or an external device that doesn't work properly, but it can't detect or repair every problem.

1. Open Disk Utility and choose View, then Show All Devices.
2. In the sidebar, select the card's volume and run First Aid.
3. If there's a container, run First Aid on it too.
4. Select the card's top-level item and run First Aid.

| Result | Apple's guidance |
| --- | --- |
| The disk appears to be OK or has been repaired | You're done |
| First Aid failed | Try again. If that fails, back up as much data as possible and reformat |
| The disk is about to fail | Back up your data and replace it. It can't be repaired |
| Problems continue or can't be repaired | It may be physically damaged and need to be replaced |

## How do you check a corrupted SD card in Windows?

Use `chkdsk`. According to [Microsoft's chkdsk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk), running it without parameters only shows the volume's status and doesn't fix errors. You need administrator rights.

1. In the Start menu, right-click Command Prompt and select Run as administrator.
2. Type `chkdsk E:` to see the status first. E is only an example, so replace it with the card's drive letter.
3. If it finds errors, fix them with `chkdsk E: /f`.
4. If it asks whether to convert lost chains to files, press Y.

| Option | What Microsoft's documentation says |
| --- | --- |
| No option | Shows status only and doesn't fix errors |
| `/f` | Fixes errors on the disk |
| `/r` | Locates bad sectors and recovers readable information. Includes `/f` |

The same documentation says repairs on FAT file systems usually change the file allocation table and sometimes cause a loss of data. If you press Y, each lost chain is saved in the root folder as a file named `File<nnnn>.chk`. Microsoft doesn't recommend interrupting chkdsk. Copy the files that open between steps 2 and 3.

## Should you reformat if the scan doesn't fix it?

Once you've moved every file that opens, reformat the card. The [SD Association's formatter page](https://www.sdcard.org/downloads/formatter/) strongly recommends SD Memory Card Formatter over the tools built into operating systems. It says those tools may not be optimized for SD cards and may result in lower performance.

1. Check again that you copied the card's files somewhere else.
2. Download and install SD Memory Card Formatter.
3. Select the card and check its name and capacity.
4. Run the format.

Quick and Overwrite format are compared in [SD Memory Card Formatter](/blog/en/sd-card-formatter). Formatting with built-in tools is in [How to format an SD card](/blog/en/format-sd-card).

## Can you keep using an SD card after reformatting?

Even if it looks fine after a format, test it before an important shoot. The table below puts the official guidance in order.

| Situation | What to do |
| --- | --- |
| It reads and writes normally on several devices | Take a few photos, open them on a computer, then use it |
| The same error comes back after formatting | Contact the card manufacturer |
| First Aid warns the disk is about to fail | Replace it, as Apple says |
| You need a replacement or return | Contact the retailer, as the SD Association FAQ says |

The SD Association is a standards organization and doesn't make or sell cards. Its FAQ says to contact the manufacturer for product support. For retrieving deleted pictures, it also points to the card manufacturer's instructions.

## How do you also keep iPhone photos on a USB drive?

If your photos live on only one card, you can lose them with the card. Save your iPhone photos to a second storage device as well. The app below is described for USB flash drives. Formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## Repairing SD card FAQ

### Should I click Format when the computer asks?

No. Formatting erases everything on the card. Copy the files that open first, then scan the card with First Aid or `chkdsk`.

### Will chkdsk delete my photos?

Without options, it only shows the status. When you fix errors with `/f`, Microsoft says repairs on FAT file systems sometimes cause a loss of data. Copy the photos you want to keep before you run it.

### If First Aid fails, should I throw the card away?

Apple says to try again, and if that fails, back up as much as possible and reformat. If problems continue after that, the card may be physically damaged.

### Can the SD Association get photos back from a corrupted card?

No. The SD Association doesn't supply tools for photo retrieval. Check the card manufacturer's instructions.

### How can I lower the risk of corruption?

Eject the card on a Mac, or use Safely Remove Hardware in Windows, before you pull it out. Apple says not to remove a card while your Mac is asleep.
