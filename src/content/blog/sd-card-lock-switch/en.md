---
title: "SD Card Lock Switch: How to Lock and Unlock the Write-Protect Tab"
description: "The SD card lock switch is a write-protect tab that stops a card from saving, changing, or deleting files. Learn when to lock it, how to unlock it, why microSD cards don't have one, and what to check if writing still fails, based on Apple, Microsoft, SD Association, and Kingston documentation."
date: 2026-11-19
---

## Key takeaways

The SD card lock switch is a small write-protect tab on the card. When the tab is in the locked position, you can't change or delete what's on the card.

On a Mac, a locked card can show a "cannot be modified" message. Eject the card, remove it, slide the tab to the unlocked position, and insert it again.

microSD cards don't have a lock switch. If you use a microSD card in an SD-size adapter, check the tab on the adapter.

"I'm trying to copy photos, but the card says it's read-only." "If I lock my SD card, can other people still see it?" These are common questions about that small tab. This guide explains what the SD card lock switch blocks, what it doesn't, and how to lock and unlock it.

## What is the SD card lock switch?

It's a mechanical switch that blocks writing. In its [SD card datasheet](https://www.kingston.com/datasheets/SD4_en.pdf), Kingston describes the built-in write-protect switch as a way to prevent accidental data loss.

[Apple's guide to the Mac SD card slot](https://support.apple.com/en-us/102352) says that if a "cannot be modified" message appears, the SD card might be locked. A locked card can't be modified.

| | What the SD card lock switch does |
| --- | --- |
| Blocks | Saving new files, editing files, deleting files |
| Doesn't block | Viewing the card's contents in another device |
| Doesn't do | Set a password or encrypt the card |

The lock switch doesn't hide anything. If you lose a locked card, someone else can still see what's on it.

## Which cards have an SD card lock switch?

Full-size SD cards have one. microSD cards don't. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says microSD and SD cards differ only in form factor, size, number of pins, and whether they have a write-protect switch. Their logic and electronics are the same.

| Card | Lock switch | Source |
| --- | --- | --- |
| Full-size SD card | Yes | [Kingston SD card datasheet](https://www.kingston.com/datasheets/SD4_en.pdf) |
| microSD card | No | [Kingston microSDXC datasheet](https://www.kingston.com/datasheets/SDCIT-specsheet-64gb_us.pdf) |
| microSD in an SD adapter | Check the adapter's tab | [microSD vs SD](/blog/en/microsd-vs-sd) |

Kingston's microSDXC datasheet states that the card "has no mechanical write protect switch." Card sizes are covered in [What is an SD card?](/blog/en/what-is-sd-card).

## When should you lock an SD card?

Lock it when you want the contents to stay as they are.

1. Before you copy a finished shoot to a computer, so you don't delete anything by mistake
2. When you hand the card to someone to look at the photos
3. When you put a full card into storage

You can't save new photos to a locked card. Unlock it before you put it back in your camera.

## How do you unlock an SD card?

These steps follow [Apple's guide](https://support.apple.com/en-us/102352).

1. Eject the card. On a Mac, select the card in the Finder sidebar and choose File > Eject.
2. Remove the card from the device.
3. Slide the lock tab on the card to the unlocked position.
4. Insert the card into the slot or reader again.

The tab's location varies by card. Apple says to check the manufacturer's instructions for where it is.

On Windows, safely remove the card before you take it out. [Microsoft's guide](https://support.microsoft.com/en-us/windows/safely-remove-hardware-in-windows-1ee6677d-4e6c-4359-efca-fd44b9cec369) says to always safely remove storage devices like USB flash drives before disconnecting them, to avoid losing data. Don't slide the tab while the card is inserted. Change it after you remove the card.

## Should you check the lock if your iPhone can't save to an SD card?

Yes. To copy iPhone photos to an SD card, the card has to be unlocked. Apple's iPhone guide to external storage doesn't describe how a locked card behaves. If saving fails, take the card out of the reader and check the tab first.

| What to check | Where |
| --- | --- |
| SD card lock tab | Is the card's tab in the unlocked position? |
| microSD adapter tab | If you use an adapter, check the adapter's tab |
| Reader connection | [How to use a USB-C SD card reader](/blog/en/usb-c-sd-card-reader) |
| Copy steps | [Move iPhone photos to an SD card](/blog/en/iphone-photos-to-sd-card) |

## What if the SD card still won't save after you unlock it?

Look for another cause.

1. Insert the card again and see whether the message is still there.
2. Try the same card in a different reader or computer.
3. If writing still fails, check the card using the steps in [SD card not working](/blog/en/sd-card-not-working).
4. Formatting erases the card. Copy the photos you need to another storage device first. Formatting steps are in [How to format an SD card](/blog/en/format-sd-card).

## How do you save iPhone photos to a USB drive?

The app below is described for USB flash drives. Connection requirements are in [How to use a USB flash drive with iPhone](/blog/en/iphone-flash-drive-guide).

U-Saver, made by NextGenAI, is an app that saves photos, videos, and contacts to a regular USB drive formatted as exFAT or FAT32, and it requires iOS 26 or later. U-Saver is being prepared for release on the App Store, and in Korea it costs 4,900 KRW as a one-time purchase. U-Saver doesn't save messages, app data, or iPhone settings, and the contents of a USB drive saved with U-Saver aren't encrypted. Before you buy, read [Six things to check before using U-Saver](/blog/en/before-you-buy).

## SD card lock switch FAQ

### If I lock my SD card, can other people still see my photos?

Yes. The lock switch only blocks writing. It has no password or encryption.

### Where is the lock on a microSD card?

microSD cards don't have a lock switch. If you use one in an SD-size adapter, slide the adapter's tab to the unlocked position.

### Can I slide the lock tab while the card is inserted?

It isn't recommended. Apple's steps are to eject and remove the card, change the tab, and insert it again.

### Does locking an SD card also block formatting?

Formatting changes the card's contents too. If formatting fails, check the lock tab first. More steps are in [SD card not working](/blog/en/sd-card-not-working).

### My Mac says "cannot be modified." What should I do first?

Apple says the card might be locked. Eject and remove the card, unlock the tab, and insert it again.
