---
title: "Micro SD Card Is Write Protected: How to Find the Block on a Card With No Switch, Then Force Format"
description: "If your micro SD card is write protected, there's no switch on the card to flip. Check the SD adapter, the card reader, the Windows read-only attribute, and the card itself in that order. Copy your photos first, then force format with SD Memory Card Formatter or diskpart clean, based on SD Association and Microsoft documentation."
date: 2026-11-25
---

## Key takeaways

When a micro SD card is write protected, the steps differ from a full-size SD card. microSD cards don't have a write-protect switch. So instead of the card, check the SD adapter's tab, the card reader, the Windows read-only attribute, and finally the card itself.

Copy the photos you can still read before you try anything. A force format erases everything on the card.

If even formatting fails, the card may no longer accept writes. At that point, contact the card manufacturer.

"I took the card out of my phone, and my PC says it's write protected." "microSD has no lock tab, so why is it locked?" These are common questions when a micro SD card is write protected. Full-size SD cards with a lock tab are covered in [Write protected SD card](/blog/en/sd-card-write-protected). This guide shows how to find the block on a microSD card and, as a last resort, how to force format it.

## Does a micro SD card have a write protect switch?

No. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says the only differences between microSD and SD cards are the form factor, size, number of pins, and whether there's a write-protect switch. The logic and electronics are identical.

So when a micro SD card is write protected, suspect the parts around the card first.

| Cause | Suspect it when | Where to check |
| --- | --- | --- |
| Lock tab on the SD adapter | You put the microSD card in an SD adapter for a PC or camera | The tab on the side of the adapter |
| Card reader | Only one reader shows write protection | A different reader or slot |
| Read-only attribute in Windows | Only one Windows PC shows write protection | The `attributes` command in `diskpart` |
| BitLocker policy on a work PC | Only a work or school PC shows write protection | The PC's administrator |
| Card failure | The same problem on several devices and readers, and formatting fails | The card manufacturer |

We didn't test any specific card or reader for this guide, and we don't recommend any product. The two card types are compared in [Micro SD card and SD card](/blog/en/microsd-vs-sd).

## Can an SD adapter make a micro SD card write protected?

It can. When you put a microSD card in an SD adapter, the adapter's tab acts as the lock tab. [Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says that if a "cannot be modified" message appears, the card might be locked.

1. Eject the adapter, then remove it from the device.
2. Slide the tab on the side of the adapter to the unlocked position.
3. Insert the adapter again.
4. If it's still blocked, try a different adapter or a USB card reader.

The tab's location varies by product, so Apple says to check the manufacturer's instructions. How to use the tab is covered in [SD card lock switch](/blog/en/sd-card-lock-switch).

## What should you do before removing write protection from a micro SD card?

Copy the photos and videos you can still read. Changing the attribute below doesn't erase data, but a force format empties the card.

1. Copy the photos and videos on the card to a PC or another storage device.
2. Open a few of the copied files to make sure they work.
3. If the phone or camera that used the card showed an error message, write it down.

The SD Association FAQ says that when a card doesn't work in a device, you should make sure you inserted it as the device's manual describes, note any error message, and check the manual. Handling the card on a phone is covered in [Micro SD card for phone](/blog/en/android-microsd).

## How do you remove write protection from a micro SD card in Windows?

If a different adapter and reader don't help and only one Windows PC blocks writing, check the disk's read-only attribute. [Microsoft's attributes disk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/attributes-disk) describes the command that shows and clears it. According to [Microsoft's diskpart documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/diskpart), you need administrator rights to run diskpart.

1. Run Command Prompt as an administrator.
2. Type `diskpart`.
3. Type `list disk` and find the microSD card by its size.
4. Select the card's number, for example `select disk 2`. The 2 is only an example.
5. Type `attributes disk` and check the read-only line.
6. Type `attributes disk clear readonly` to clear the read-only attribute.
7. Type `exit`, safely remove the card, and insert it again.

[Microsoft's select disk documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/select-disk) notes that disk numbers can change after a reboot. Check the size with `list disk` every time. If only a work PC blocks writing, it may be a BitLocker policy. See the policy section in [Write protected SD card](/blog/en/sd-card-write-protected) and contact your IT administrator.

## How do you force format a micro SD card?

If the card still won't save after you clear the attribute, copy your photos and then format it. Start with the gentler method.

| Step | Method | Data |
| --- | --- | --- |
| 1 | Format with SD Memory Card Formatter | All erased |
| 2 | Wipe and rebuild the partition with diskpart `clean` | All erased |
| 3 | If it still fails, contact the manufacturer | - |

### 1. Format with SD Memory Card Formatter

The [SD Association's formatter page](https://www.sdcard.org/downloads/formatter/) strongly recommends SD Memory Card Formatter over the formatting tools built into operating systems. It needs administrator rights on both Windows and macOS. It doesn't support cards encrypted with BitLocker To Go, so unlock the card first. Quick format and overwrite format are compared in [SD Memory Card Formatter](/blog/en/sd-card-formatter).

### 2. Rebuild the card with diskpart clean

This is the last resort when the formatter fails. According to [Microsoft's clean documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/clean), `clean` removes all partitions and volume formatting from the selected disk. If you pick the wrong disk number, you erase another disk in the PC.

1. In an administrator Command Prompt, type `diskpart`.
2. Type `list disk` and confirm the microSD card's number by its size.
3. Select the card, for example `select disk 2`. The 2 is only an example.
4. Type `list disk` again and check that the selected disk has an asterisk (*) in front of it. According to [Microsoft's list documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/list), the asterisk marks the object with focus.
5. Type `clean`.
6. Type `create partition primary` to make a new partition. According to [Microsoft's documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/create-partition-primary), if you don't give a size, the partition uses all the remaining space.
7. Type `assign` to give it a drive letter. According to [Microsoft's assign documentation](https://learn.microsoft.com/en-us/windows-server/administration/windows-commands/assign), if you don't specify a letter, the next available letter is assigned.
8. Type `exit`, then format the card again with SD Memory Card Formatter.

Formatting also writes to the card. If every step above fails, the card may no longer accept writes. If formatting stops partway, see [SD card corrupted or not recognized?](/blog/en/sd-card-not-working) for steps by symptom.

## What if a micro SD card won't even force format?

If several devices and readers show the same problem, contact the card manufacturer. The SD Association FAQ says it doesn't make cards, so contact the manufacturer, and contact the retailer if you need a return.

| Situation | What to do |
| --- | --- |
| The photos can still be read | Copy them to another storage device first |
| Both the formatter and `clean` fail | Contact the card manufacturer |
| You need a replacement | Contact the retailer |

## How do you use a micro SD card with an iPhone?

According to [Apple's guide to external storage](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios), iPhone uses storage with a single data partition formatted as APFS, macOS Extended (HFS+), exFAT, FAT32, or FAT. If you'll use the card with an iPhone after a force format, check the format. Connection steps are in [Micro SD for iPhone](/blog/en/iphone-microsd), and reformatting steps are in [How to reformat a micro SD card](/blog/en/format-microsd).

## How do you save iPhone photos to a USB drive?

The app below is described for USB flash drives. Connection requirements are in [Flash drive for iPhone](/blog/en/iphone-flash-drive-guide), and formatting steps are in [How to format a USB drive to exFAT](/blog/en/format-usb-exfat).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## Micro SD card write protected FAQ

### Where is the write protect switch on a micro SD card?

microSD cards don't have a write-protect switch. If you use the card in an SD adapter, check the adapter's tab.

### It works in my phone but is write protected on my PC.

Check the adapter's tab, the card reader, and that PC's read-only attribute in order. On a work PC, it may be a BitLocker policy, so contact your IT administrator.

### Will a force format erase my photos?

Yes. Both SD Memory Card Formatter and diskpart `clean` empty the card. Copy your photos while the card can still be read.

### Does the diskpart attributes command erase data?

`attributes` only shows and changes attributes. The command that erases data is `clean`. Check the selected disk number again before you press Enter.

### Is there a fix if a force format fails too?

If several devices and readers show the same problem, suspect the card itself. Contact the card manufacturer, and contact the retailer if you need a replacement.
