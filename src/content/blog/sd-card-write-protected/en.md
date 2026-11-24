---
title: "Write Protected SD Card: How to Remove Write Protection Step by Step"
description: "A write protected SD card can't save or delete files. Check the lock tab, the Windows read-only attribute, BitLocker policy, and card failure in that order. Learn how to clear the read-only attribute with diskpart and why you should copy your photos first, based on Apple, Microsoft, and SD Association documentation."
date: 2026-11-25
---

## Key takeaways

A write protected SD card is a card that won't let you save or delete files. The cause is usually one of four things: the card's lock tab, a read-only attribute on the disk in Windows, a BitLocker policy on a work PC, or a failing card.

Start with the lock tab. If the tab is unlocked but Windows still says "The disk is write protected," check the read-only attribute with `diskpart`.

You can often still read a write protected card. Copy the photos you need to another storage device before you try to remove the protection.

"The card works fine in my camera, but my PC says it's write protected." "I unlocked the tab and nothing changed." These are common questions about a write protected SD card. How to use the tab itself is covered in [SD card lock switch](/blog/en/sd-card-lock-switch). This guide walks through the other causes in order.

## Why is my SD card write protected?

Each cause is cleared in a different place. Find your situation in the table below.

| Cause | Suspect it when | Where to clear it |
| --- | --- | --- |
| Lock tab on the card | Writing fails on every device | The tab on the side of the card |
| Lock tab on a microSD adapter | You use a microSD card in an SD adapter | The tab on the side of the adapter |
| Read-only attribute in Windows | Writing fails only on one Windows PC | The `attributes` command in `diskpart` |
| BitLocker write-deny policy | Writing fails only on a work or school PC | The PC's administrator |
| File system errors | The card opens but shows errors and won't save | `chkdsk` or Disk Utility First Aid |
| Card failure | The same problem on several devices and readers | The card manufacturer |

We didn't test any specific card or reader for this guide, and we don't recommend any product.

## How do you remove write protection with the lock tab?

[Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says that if a "cannot be modified" message appears, the SD card might be locked. These are Apple's steps.

1. Eject the card, then remove it from the device.
2. Slide the card's lock tab to the unlocked position.
3. Insert the card again.

The tab's location varies by card, so Apple says to check the manufacturer's instructions. According to the [SD Association FAQ](https://www.sdcard.org/consumers/faq/), microSD cards don't have a write-protect switch. If you use a microSD card in an SD adapter, check the adapter's tab. The two card types are compared in [Micro SD card and SD card](/blog/en/microsd-vs-sd).

## How do you remove write protection from an SD card with diskpart?

If the lock tab is unlocked but only one Windows PC says the card is write protected, the disk may have a read-only attribute. [Microsoft's attributes disk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-disk) describes the command that displays, sets, and clears this attribute.

According to [Microsoft's diskpart documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart), you must be in the local Administrators group to run diskpart.

1. In the Start menu, right-click Command Prompt and choose Run as administrator.
2. Type `diskpart`.
3. Type `list disk` to see the disks. Find the SD card by its size.
4. Select the card's number, for example `select disk 2`. The 2 is only an example.
5. Type `attributes disk` to see the current attributes. Check the read-only line.
6. Type `attributes disk clear readonly` to clear the read-only attribute.
7. Type `exit`, safely remove the card, and insert it again.

If you select the wrong number, you change the attributes of another disk in the PC. [Microsoft's select disk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/select-disk) notes that disk numbers can change after a reboot. Check the size with `list disk` every time.

Volumes have their own read-only attribute too. Following [Microsoft's attributes volume documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-volume), find the card's volume with `list volume`, choose it with `select volume`, and type `attributes volume clear readonly`.

| Command | What it does |
| --- | --- |
| `attributes disk` | Shows the selected disk's attributes |
| `attributes disk clear readonly` | Clears the disk's read-only attribute |
| `attributes volume` | Shows the selected volume's attributes |
| `attributes volume clear readonly` | Clears the volume's read-only attribute |

## Why is the SD card write protected only on my work PC?

It may be an organization's BitLocker policy. According to [Microsoft's BitLocker configuration documentation](https://learn.microsoft.com/en-us/windows/security/operating-system-security/data-protection/bitlocker/configure), when the "Deny write access to removable drives not protected by BitLocker" policy is enabled, all removable data drives that aren't BitLocker-protected are mounted as read-only.

| Situation | What to do |
| --- | --- |
| Writing works at home but not on a work PC | Contact your IT administrator |
| The work PC asks you to encrypt the card with BitLocker | Follow your organization's rules and check with IT |

An administrator sets this policy. It isn't an attribute you can clear with diskpart. Don't try to get around your organization's rules.

## Should you copy your photos before removing write protection?

Yes. If you can still read the files on a write protected card, now is the time to move them. The checks and formatting below change or erase the card.

1. Copy the photos and videos on the card to a PC or another storage device.
2. Open a few of the copied files to make sure they work.
3. Then move on to the checks or formatting below.

How to connect the card to a computer is covered in [SD card reader for PC](/blog/en/sd-card-to-pc).

## What if the SD card is still write protected?

Check the other causes in order.

1. Try a different reader or computer. If only one PC blocks writing, suspect that PC's attributes or policy.
2. Check the file system. On Windows, run `chkdsk E: /f` as an administrator, as described in [Microsoft's chkdsk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/chkdsk). The E is only an example. On a Mac, use [Disk Utility First Aid](https://support.apple.com/guide/disk-utility/repair-a-storage-device-dskutl1040/mac).
3. After you've copied your photos, reformat the card with the [SD Association's formatter](https://www.sdcard.org/downloads/formatter/). The steps are in [SD Memory Card Formatter](/blog/en/sd-card-formatter).
4. If several devices show the same problem, contact the card manufacturer. The SD Association FAQ says it doesn't make cards, so contact the manufacturer, and contact the retailer if you need a return.

If formatting won't finish, see [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) for steps by symptom.

## What if your iPhone can't save to an SD card?

According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), iPhone uses storage with a single data partition formatted as APFS, macOS Extended (HFS+), exFAT, FAT32, or FAT. Check the format along with the lock tab.

| What to check | Where |
| --- | --- |
| Lock tab | The tab on the card or adapter |
| Card format | Whether it's on Apple's list |
| Copy steps | [Transferring photos from iPhone to SD card](/blog/en/iphone-photos-to-sd-card) |

## How do you save iPhone photos to a USB drive?

The app below is described for USB flash drives. Connection requirements are in [Flash drive for iPhone](/blog/en/iphone-flash-drive-guide), and formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## Write protected SD card FAQ

### Where do I remove write protection from an SD card?

Start with the lock tab on the side of the card. If the tab is unlocked and only a Windows PC blocks writing, clear the read-only attribute with `attributes disk clear readonly` in `diskpart`.

### Can a microSD card be write protected without a lock tab?

microSD cards don't have a write-protect switch. If you use one in an SD adapter, check the adapter's tab. Windows attributes, policies, and card failure can also cause it.

### Will diskpart erase my card?

The `attributes` command only shows and changes attributes. The `clean` command in the same tool removes all partition and volume formatting from the disk, according to Microsoft's documentation. Read each command again before you press Enter.

### My SD card is write protected only on my work laptop.

According to Microsoft's documentation, when the BitLocker policy is enabled, removable drives that aren't BitLocker-protected are mounted as read-only. Contact your IT administrator.

### Nothing removes the write protection. What now?

If several devices and readers show the same problem, suspect the card itself. Copy your photos while the card can still be read, and contact the card manufacturer.
