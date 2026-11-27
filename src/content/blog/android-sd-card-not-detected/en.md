---
title: "Android Not Reading SD Card? What to Check, in Order"
description: "Android not reading your SD card? Check Storage in Settings, reinsert and clean the card, fix internal-storage formatting, test it in another device, and try safe mode, based on Google and Samsung support pages."
date: 2026-11-27
---

## Key takeaways

When your Android phone is not reading the SD card, don't format it first. Formatting permanently deletes everything on the card.

Start with the Storage screen in Settings. What you do next depends on whether the card is missing from Settings too, or shows in Settings but not in your files app.

If no other phone or computer can read the card either, suspect the card. If another device reads it, look at your phone.

"I put the card in, and the phone says there's no SD card." "Settings shows the card, but my files app doesn't." This guide covers what to check when an Android phone can't read a microSD card. We don't test or recommend any particular card. To insert and format a card for the first time, see [how to use an SD card in an Android phone](/blog/en/android-microsd). If a computer can't see the card, read [SD card not showing up on Windows](/blog/en/sd-card-not-showing-windows) or [Mac SD card not showing up](/blog/en/sd-card-not-showing-mac).

## Android not reading the SD card: where does it stop?

Check the Storage screen in Settings, then your files app. Find your situation below.

| What you see | What to suspect | Section |
| --- | --- | --- |
| You don't know if the phone has a slot | Model support | Does your phone take a card? |
| The card isn't in Storage in Settings | How it's inserted, contacts, the card | Reinsert and clean |
| The card is in Settings but not in the files app | Internal-storage formatting | In Settings but not in apps |
| A card from another phone won't read | Internal-storage formatting, encryption, file system | Cards from another device |
| Other devices read it | Your phone, installed apps | Safe mode |
| No device reads it | A failed card | If it still won't read |

## Should you format when a notification asks?

Not right away. [Google's Android Help](https://support.google.com/android/answer/12153449?hl=en) says formatting an SD card permanently deletes its data, so back up your files first.

1. If a notification asks you to format, don't tap it yet.
2. Don't save new files to the card.
3. Format only after you've worked through this guide and have nothing on the card to keep.

If the card holds photos you want, try opening it on a computer first. See [how to connect an SD card to a computer](/blog/en/sd-card-to-pc).

## Does your phone take a microSD card?

It depends on the model. [Samsung US support](https://www.samsung.com/us/support/answer/ANS10001928/) says not all Samsung devices support microSD cards, and models without support have only a SIM slot in the tray. [Samsung UK support](https://www.samsung.com/uk/support/mobile-devices/using-an-sd-card/) says the size and maximum capacity of card you can use differ by device and model.

| What to check | Where to check |
| --- | --- |
| Memory card support | The user manual or the maker's spec page |
| Maximum capacity | The same spec page |
| Tray layout | The markings on the tray. A hybrid tray holds two SIMs or one SIM and one card |

If the card is larger than your phone's maximum, check the card standard too. The [SD Association's capacity guide](https://www.sdcard.org/consumers/about-sd-memory-card-choices/sd-sdhc-sdxc-and-sduc-card-capacity-choices/) says SDXC cards work in SDXC or SDUC devices. The standards are explained in [SDHC vs SDXC vs SDUC](/blog/en/sdhc-vs-sdxc), and which Galaxy models have a slot is covered in [Galaxy SD card slot and settings](/blog/en/galaxy-sd-card).

## The card isn't in Settings: how do you reinsert it?

[Files by Google Help](https://support.google.com/files/answer/10857645?hl=en) says to check whether the card is recognized under Storage in Settings, and to remove and reinsert it if it isn't. [Samsung UK support](https://www.samsung.com/uk/support/mobile-devices/using-an-sd-card/) gives these steps.

1. Go to Settings > Device care > Storage > Advanced > SD card > Unmount. Menu paths vary by model.
2. Open the SIM tray with the ejector pin and remove the card.
3. Check the card for damage or debris. Clean away any debris.
4. Put the card back in the tray and push the tray into the phone.

The same Samsung page says to place the card with the gold contacts facing down. Check the tray markings to make sure the card is in the card slot, not a SIM slot. If the tray won't come out or gets damaged, [Samsung US support](https://www.samsung.com/us/support/answer/ANS10001928/) says service may be needed.

## The card is in Settings but not in your files app?

It may be formatted as internal storage. Here is how [Files by Google Help](https://support.google.com/files/answer/10857645?hl=en) compares the two types.

| Type | Photos and videos | Install apps | Move to other devices |
| --- | --- | --- | --- |
| Portable storage | Yes | No | Yes |
| Internal (adoptable) storage | Yes | Yes | No |

Google recommends formatting the card as portable storage. The steps in [Google's Android Help](https://support.google.com/android/answer/12153449?hl=en) are below.

1. Open the Settings app.
2. Tap Storage > SD card.
3. From the menu at the top right, select Format > Format card.

Formatting erases the card. If you used it as internal storage, move the photos and files on it to phone storage before formatting. Menu names vary by maker and Android version.

## A card from another device won't read?

Suspect a setting on the device that used the card first.

| Cause | What the official page says | Source |
| --- | --- | --- |
| Formatted as internal storage | An internal-storage card can't be moved between devices | [Google Help](https://support.google.com/android/answer/12153449?hl=en) |
| Encrypted card | An encrypted card can only be read on the device that encrypted it. If that phone is factory reset while the card is encrypted, it can't read the card either | [Samsung US support](https://www.samsung.com/us/support/answer/ANS10001928/) |
| File system | Galaxy needs FAT32 or exFAT (preferred). NTFS and APFS aren't compatible | Same page |

If the card is encrypted, decrypt it on the original phone before moving it. Samsung says to decrypt before resetting or using the card in another device. If a computer formatted the card as NTFS, copy the files to the computer and reformat the card as exFAT. The steps are in [how to format a microSD card](/blog/en/format-microsd).

## Other devices read the card, but your phone doesn't?

[Samsung UK support](https://www.samsung.com/uk/support/mobile-devices/using-an-sd-card/) suggests testing the card in another phone. If it works there, something may be stopping it from working in your phone. If it doesn't work there either, the card itself is the likely problem.

If only your phone fails, try safe mode. Safe mode turns off all third-party apps. These are the Galaxy steps from the same page.

1. Press and hold the power button until the power off screen appears.
2. Press and hold the Power off icon until Safe mode appears.
3. Tap Safe mode. The phone restarts.
4. Check whether the card is recognized.

If safe mode recognizes the card, a third-party app is the likely cause. Samsung suggests restarting and uninstalling the most recently installed app. Button names and steps may vary by model.

## What if the card still won't read?

If no other phone or computer reads it, suspect a failed card. The [SD Association FAQ](https://www.sdcard.org/consumers/faq/) says it's a standards body that doesn't make or sell products, so contact the card maker for technical problems.

Samsung UK's page goes on to formatting the card if removing apps doesn't help, and then to a factory reset. Both erase data. Formatting erases the card; a factory reset erases the phone. Copy anything you want to keep first. If another device can open the card, copy before you check or repair it. The order is in [before you repair a corrupted SD card](/blog/en/sd-card-corrupted). We don't test or recommend data recovery software or services.

## What if your iPhone can't see the SD card?

This guide is for Android phones. iPhone has no card slot. [Apple's external storage guide](https://support.apple.com/guide/iphone/external-storage-devices-iph95baac91f/ios) says to connect a card reader and open the card in the Files app. The storage must be APFS, macOS Extended (HFS+), exFAT, FAT32, or FAT.

| Situation | Read |
| --- | --- |
| The card doesn't appear when you connect a reader to iPhone | [iPhone SD card reader guide](/blog/en/iphone-sd-card-reader) |
| How to use microSD with iPhone | [iPhone microSD guide](/blog/en/iphone-microsd) |
| iPhone doesn't recognize an external drive | [iPhone drive not detected](/blog/en/iphone-drive-not-detected) |

## Android not reading SD card: FAQ

### My phone says there's no SD card.

First check whether the card appears under Storage in Settings. If not, unmount it, remove it, clean the contacts, and reinsert it with the gold contacts facing down.

### Settings shows the card, but Gallery and my files app don't.

Files by Google Help says it may be formatted as internal storage. Reformatting it as portable storage makes it visible. Formatting erases the card, so move your files first.

### I moved the card to a new phone, and it won't read.

The old phone may have formatted the card as internal storage or encrypted it. If you still have the old phone, move the files off or decrypt the card there.

### Can I use the card as internal storage on a Galaxy?

Samsung US support says Samsung Android devices don't support adoptable storage. Use the card as portable storage.

### My computer reads the card, but my phone doesn't.

Check the file system. Samsung requires FAT32 or exFAT and prefers exFAT. If the card is NTFS or APFS, copy the files and format it as exFAT. If that doesn't help, check in safe mode.
